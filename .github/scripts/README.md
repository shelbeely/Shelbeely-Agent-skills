# Figma Export Scripts

## export-figma-svgs.mjs

Custom Node.js script for exporting SVG assets from Figma files with batching support.

### Purpose

This script solves the HTTP 414 "URI Too Long" error that occurs when trying to export large Figma files (like the Material 3 Design Kit with 5,597+ components) using traditional export tools.

### How It Works

1. **Fetch metadata**: Retrieves the Figma file structure and identifies all components
2. **Filter (optional)**: Applies regex pattern to component names if `FILTER_PATTERN` is set
3. **Batch**: Splits components into batches of `BATCH_SIZE` (default: 50)
4. **Export**: For each batch:
   - Calls Figma Images API with batch of component IDs
   - Downloads SVG files from returned URLs
   - Saves to `OUTPUT_DIR` with sanitized filenames
5. **Rate limit**: Waits 500ms between batches to avoid rate limiting

### Environment Variables

- `FIGMA_FILE_URL` (required): Full URL to Figma file
- `FIGMA_TOKEN` (required): Figma Personal Access Token
- `OUTPUT_DIR` (optional): Output directory (default: `./figma-export`)
- `BATCH_SIZE` (optional): Components per batch (default: 50)
- `FILTER_PATTERN` (optional): Regex to filter component names

### Local Usage

```bash
export FIGMA_FILE_URL="https://www.figma.com/file/YOUR_FILE_KEY/Your-File-Name"
export FIGMA_TOKEN="your-figma-personal-access-token"
export FILTER_PATTERN="shape.*expressive"  # Optional
export BATCH_SIZE="50"  # Optional

node .github/scripts/export-figma-svgs.mjs
```

### Example: Export Only Shape Components

```bash
export FIGMA_FILE_URL="https://www.figma.com/file/lC2BGHfMdhAmcEFhx9S6df/Material-3-Design-Kit--Community-"
export FIGMA_TOKEN="your-token"
export FILTER_PATTERN="shape"
export OUTPUT_DIR="./skills/material-design-3-shape/examples"

node .github/scripts/export-figma-svgs.mjs
```

### API References

- [Figma Files API](https://www.figma.com/developers/api#files-endpoint) — Get file structure
- [Figma Images API](https://www.figma.com/developers/api#get-images-endpoint) — Export component images
