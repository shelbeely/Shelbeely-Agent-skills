#!/usr/bin/env node

/**
 * Export SVG assets from Figma file with batching support
 * 
 * Handles large Figma files by batching component export requests
 * to avoid HTTP 414 (URI Too Long) errors.
 * 
 * Rate limiting is handled per Figma's official documentation:
 * https://developers.figma.com/docs/rest-api/rate-limits/
 * 
 * - Respects the Retry-After header in 429 responses
 * - Falls back to exponential backoff if header is missing
 * - GET /v1/files/{file_key} is Tier 2 (file metadata)
 * - GET /v1/images/{file_key} is Tier 1 (image exports)
 */

import { writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';

// Configuration
const FIGMA_FILE_URL = process.env.FIGMA_FILE_URL;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const OUTPUT_DIR = process.env.OUTPUT_DIR || './figma-export';
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '50', 10); // Max components per API request
const FILTER_PATTERN = process.env.FILTER_PATTERN || ''; // Optional: filter components by name
const MAX_RETRIES = 3; // Maximum retry attempts for rate-limited requests
const INITIAL_RETRY_DELAY = 2000; // Initial delay in ms before retrying (exponential backoff)
const BATCH_DELAY = 1000; // Delay between batches to avoid rate limiting

// Validate batch size
if (!Number.isInteger(BATCH_SIZE) || BATCH_SIZE <= 0) {
  throw new Error(`BATCH_SIZE must be a positive integer, got: ${process.env.BATCH_SIZE}`);
}

// Extract file key from URL
function extractFileKey(url) {
  const match = url.match(/\/file\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error(`Invalid Figma file URL: ${url}`);
  }
  return match[1];
}

// Sleep utility for delays
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch file metadata to get all components
async function getFileComponents(fileKey) {
  console.log(`Fetching file metadata for ${fileKey}...`);
  
  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(
        `https://api.figma.com/v1/files/${fileKey}`,
        {
          headers: {
            'X-Figma-Token': FIGMA_TOKEN,
          },
        }
      );

      if (!response.ok) {
        // Handle rate limiting per Figma's documentation
        if (response.status === 429) {
          if (attempt < MAX_RETRIES) {
            // Use Retry-After header if available, otherwise fallback to exponential backoff
            const retryAfter = response.headers.get('Retry-After');
            const retryDelay = retryAfter 
              ? parseInt(retryAfter, 10) * 1000 
              : INITIAL_RETRY_DELAY * Math.pow(2, attempt);
            
            // Log additional rate limit info if available
            const planTier = response.headers.get('X-Figma-Plan-Tier');
            const rateLimitType = response.headers.get('X-Figma-Rate-Limit-Type');
            
            console.log(`  ⚠ Rate limited (429). Retry in ${retryDelay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
            if (planTier) console.log(`  Plan: ${planTier}, Limit Type: ${rateLimitType}`);
            
            await sleep(retryDelay);
            continue;
          }
        }
        
        throw new Error(`Failed to fetch file: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      const components = [];

      // Recursively find all components
      function traverse(node) {
        if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
          components.push({
            id: node.id,
            name: node.name,
            type: node.type,
          });
        }
        if (node.children) {
          node.children.forEach(traverse);
        }
      }

      traverse(data.document);
      return components;
    } catch (error) {
      lastError = error;
      
      // Only retry on network errors
      if (attempt < MAX_RETRIES && (error.name === 'TypeError' || error.message.includes('fetch failed'))) {
        const retryDelay = INITIAL_RETRY_DELAY * Math.pow(2, attempt);
        console.log(`  ⚠ Network error. Retrying in ${retryDelay}ms... (attempt ${attempt + 1}/${MAX_RETRIES})`);
        await sleep(retryDelay);
        continue;
      }
      
      throw error;
    }
  }
  
  throw lastError;
}

// Export components in batches with retry logic
async function exportComponentsBatch(fileKey, componentIds, format = 'svg') {
  const ids = componentIds.join(',');
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=${format}`;

  console.log(`Exporting batch of ${componentIds.length} components...`);
  
  let lastError;
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const response = await fetch(url, {
        headers: {
          'X-Figma-Token': FIGMA_TOKEN,
        },
      });

      if (!response.ok) {
        // Handle rate limiting per Figma's documentation
        if (response.status === 429) {
          if (attempt < MAX_RETRIES) {
            // Use Retry-After header if available, otherwise fallback to exponential backoff
            const retryAfter = response.headers.get('Retry-After');
            const retryDelay = retryAfter 
              ? parseInt(retryAfter, 10) * 1000 
              : INITIAL_RETRY_DELAY * Math.pow(2, attempt);
            
            // Log additional rate limit info if available
            const planTier = response.headers.get('X-Figma-Plan-Tier');
            const rateLimitType = response.headers.get('X-Figma-Rate-Limit-Type');
            
            console.log(`  ⚠ Rate limited (429). Retry in ${retryDelay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
            if (planTier) console.log(`  Plan: ${planTier}, Limit Type: ${rateLimitType}`);
            
            await sleep(retryDelay);
            continue;
          }
        }
        
        const errorText = await response.text();
        throw new Error(`Failed to export components: ${response.status} ${response.statusText}\n${errorText}`);
      }

      const data = await response.json();
      
      if (data.err) {
        throw new Error(`Figma API error: ${data.err}`);
      }

      return data.images;
    } catch (error) {
      lastError = error;
      
      // Only retry on network errors, not on API errors
      if (attempt < MAX_RETRIES && (error.name === 'TypeError' || error.message.includes('fetch failed'))) {
        const retryDelay = INITIAL_RETRY_DELAY * Math.pow(2, attempt);
        console.log(`  ⚠ Network error. Retrying in ${retryDelay}ms... (attempt ${attempt + 1}/${MAX_RETRIES})`);
        await sleep(retryDelay);
        continue;
      }
      
      throw error;
    }
  }
  
  throw lastError;
}

// Download and save SVG
async function downloadSvg(url, filepath) {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`Failed to download SVG: ${response.status} ${response.statusText}`);
  }

  const svg = await response.text();
  await mkdir(dirname(filepath), { recursive: true });
  await writeFile(filepath, svg, 'utf-8');
}

// Sanitize filename
function sanitizeFilename(name) {
  return name
    .replace(/[^a-z0-9-_]/gi, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

// Main export function
async function exportFigmaAssets() {
  if (!FIGMA_FILE_URL) {
    throw new Error('FIGMA_FILE_URL environment variable is required');
  }
  if (!FIGMA_TOKEN) {
    throw new Error('FIGMA_TOKEN environment variable is required');
  }

  console.log('=== Figma SVG Export ===');
  console.log(`File: ${FIGMA_FILE_URL}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`Batch size: ${BATCH_SIZE}`);
  if (FILTER_PATTERN) {
    console.log(`Filter: ${FILTER_PATTERN}`);
  }
  console.log('');

  const fileKey = extractFileKey(FIGMA_FILE_URL);
  let components = await getFileComponents(fileKey);

  console.log(`Found ${components.length} components in file`);

  // Apply filter if specified
  if (FILTER_PATTERN) {
    const pattern = new RegExp(FILTER_PATTERN, 'i');
    const originalCount = components.length;
    components = components.filter(c => pattern.test(c.name));
    console.log(`Filtered to ${components.length} components (removed ${originalCount - components.length})`);
  }

  if (components.length === 0) {
    console.log('No components to export');
    return;
  }

  // Split into batches
  const batches = [];
  for (let i = 0; i < components.length; i += BATCH_SIZE) {
    batches.push(components.slice(i, i + BATCH_SIZE));
  }

  console.log(`Processing ${batches.length} batches...`);
  console.log('');

  let exportedCount = 0;
  let failedCount = 0;

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`Batch ${i + 1}/${batches.length}: ${batch.length} components`);

    try {
      const componentIds = batch.map(c => c.id);
      const imageUrls = await exportComponentsBatch(fileKey, componentIds);

      // Download each SVG
      for (const component of batch) {
        const url = imageUrls[component.id];
        if (!url) {
          console.warn(`  ⚠ No URL for component: ${component.name}`);
          failedCount++;
          continue;
        }

        try {
          const filename = `${sanitizeFilename(component.name)}.svg`;
          const filepath = join(OUTPUT_DIR, filename);
          await downloadSvg(url, filepath);
          console.log(`  ✓ ${component.name} → ${filename}`);
          exportedCount++;
        } catch (error) {
          console.error(`  ✗ Failed to download ${component.name}: ${error.message}`);
          failedCount++;
        }
      }

      // Rate limiting: wait between batches
      if (i < batches.length - 1) {
        await sleep(BATCH_DELAY);
      }
    } catch (error) {
      console.error(`  ✗ Batch failed: ${error.message}`);
      failedCount += batch.length;
    }

    console.log('');
  }

  console.log('=== Export Complete ===');
  console.log(`✓ Exported: ${exportedCount}`);
  if (failedCount > 0) {
    console.log(`✗ Failed: ${failedCount}`);
  }
  console.log(`→ Output directory: ${OUTPUT_DIR}`);
}

// Run
exportFigmaAssets().catch(error => {
  console.error('Fatal error:', error.message);
  process.exit(1);
});
