#!/usr/bin/env node

/**
 * Export SVG assets from Figma file with batching support
 * 
 * Handles large Figma files by batching component export requests
 * to avoid HTTP 414 (URI Too Long) errors.
 */

import { writeFile, mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const FIGMA_FILE_URL = process.env.FIGMA_FILE_URL;
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const OUTPUT_DIR = process.env.OUTPUT_DIR || './figma-export';
const BATCH_SIZE = parseInt(process.env.BATCH_SIZE || '50', 10); // Max components per API request
const FILTER_PATTERN = process.env.FILTER_PATTERN || ''; // Optional: filter components by name

// Extract file key from URL
function extractFileKey(url) {
  const match = url.match(/\/file\/([a-zA-Z0-9]+)/);
  if (!match) {
    throw new Error(`Invalid Figma file URL: ${url}`);
  }
  return match[1];
}

// Fetch file metadata to get all components
async function getFileComponents(fileKey) {
  console.log(`Fetching file metadata for ${fileKey}...`);
  const response = await fetch(
    `https://api.figma.com/v1/files/${fileKey}`,
    {
      headers: {
        'X-Figma-Token': FIGMA_TOKEN,
      },
    }
  );

  if (!response.ok) {
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
}

// Export components in batches
async function exportComponentsBatch(fileKey, componentIds, format = 'svg') {
  const ids = componentIds.join(',');
  const url = `https://api.figma.com/v1/images/${fileKey}?ids=${ids}&format=${format}`;

  console.log(`Exporting batch of ${componentIds.length} components...`);
  
  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': FIGMA_TOKEN,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to export components: ${response.status} ${response.statusText}\n${errorText}`);
  }

  const data = await response.json();
  
  if (data.err) {
    throw new Error(`Figma API error: ${data.err}`);
  }

  return data.images;
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
        await new Promise(resolve => setTimeout(resolve, 500));
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
