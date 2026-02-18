# License Catalogs

This directory contains pre-built license catalogs from https://github.com/github/choosealicense.com

## Available Catalogs

### `full_catalog.json`
Complete catalog with all 47 licenses from choosealicense.com.

**Use this when:**
- You need comprehensive license coverage
- You're looking for specialized licenses (hardware, creative commons, etc.)
- You want to compare many license options

**Size:** ~532 KB  
**Licenses:** 47

### `catalog.sample.json`
Curated collection of the 15 most popular open source licenses.

**Use this when:**
- You want faster load times
- You're choosing a standard software license
- You don't need specialized licenses

**Size:** ~170 KB  
**Licenses:** 15
- Permissive: MIT, Apache-2.0, BSD-2-Clause, BSD-3-Clause, ISC, BSL-1.0, Unlicense
- Copyleft: GPL-2.0, GPL-3.0, LGPL-2.1, LGPL-3.0, AGPL-3.0, MPL-2.0, EPL-2.0
- Public Domain: CC0-1.0

## Usage Examples

### Using the full catalog
```bash
# Find licenses that allow commercial use with patent grants
python scripts/recommend.py --catalog data/full_catalog.json \
  --allow "commercial-use" --allow "modifications" \
  --prefer "patent-use" --top 5

# Generate an Apache-2.0 LICENSE file
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx Apache-2.0 --holder "Your Name" --year 2026 > LICENSE
```

### Using the sample catalog
```bash
# Quick recommendation from popular licenses
python scripts/recommend.py --catalog data/catalog.sample.json \
  --allow "commercial-use" --allow "modifications" \
  --require "include-copyright" --top 3

# Generate an MIT LICENSE file
python scripts/render_license.py --catalog data/catalog.sample.json \
  --spdx MIT --holder "Your Name" --year 2026 > LICENSE
```

## Updating the Catalogs

To rebuild catalogs from the latest choosealicense.com:

```bash
# Clone choosealicense.com
git clone https://github.com/github/choosealicense.com.git /tmp/choosealicense.com

# Build full catalog
python scripts/export_catalog.py \
  --repo /tmp/choosealicense.com \
  --out data/full_catalog.json

# The sample catalog is manually curated - update it by editing
# the license list in the export script or manually selecting licenses
```

## License Metadata

Each license entry includes:

- `title`: Full license name
- `spdx_id`: SPDX identifier (e.g., "MIT", "Apache-2.0")
- `description`: Brief explanation of the license
- `how`: Instructions for implementing the license
- `note`: Additional information (optional)
- `nickname`: Common short name (optional)
- `featured`: Whether it's a featured license on choosealicense.com
- `hidden`: Whether it's a specialized/less common license
- `permissions`: List of allowed actions
- `conditions`: List of requirements
- `limitations`: List of disclaimers/restrictions
- `using`: Map of notable projects using this license
- `license_text`: Full license text with placeholders

## Placeholders in License Text

Common placeholders that can be replaced:

- `[year]`, `[yyyy]`, `[Year]` → Current year
- `[fullname]` → Copyright holder name
- `[email]` → Email address (optional)
- `[project]`, `[Software Name]` → Project name (optional)
- `[projecturl]` → Project URL (optional)

The `render_license.py` script handles all standard placeholders automatically.
