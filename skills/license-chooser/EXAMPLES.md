# Examples - License Chooser Skill

This document demonstrates end-to-end workflows for common license selection scenarios.

## Example 1: Simple Open Source Library (MIT)

**Scenario:** You're creating a JavaScript utility library and want maximum adoption.

**Requirements:**
- Allow commercial use ✅
- Allow modifications ✅
- Keep it simple ✅
- No strong copyleft ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/catalog.sample.json \
  --allow "commercial-use" --allow "modifications" --allow "distribution" \
  --require "include-copyright" --top 3
```

**Output:**
- **MIT** - Score: 15 (best match)
- **ISC** - Score: 15 (similar to MIT)
- **BSD-2-Clause** - Score: 15

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx MIT --holder "John Developer" --year 2026 > LICENSE
```

---

## Example 2: Corporate Library with Patent Concerns (Apache-2.0)

**Scenario:** A company is open-sourcing an SDK with potential patent issues.

**Requirements:**
- Allow commercial use ✅
- Explicit patent grant ✅
- Allow modifications ✅
- Trademark protection ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --allow "commercial-use" --allow "modifications" \
  --require "include-copyright" --prefer "patent-use" --top 3
```

**Result:** Apache-2.0 (high score for patent-use preference)

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx Apache-2.0 \
  --holder "Acme Corporation" \
  --year 2026 \
  --project "Acme SDK" \
  --projecturl "https://github.com/acme/sdk" > LICENSE
```

---

## Example 3: Desktop Application That Must Stay Open (GPL-3.0)

**Scenario:** Building a desktop app and want to ensure derivatives remain open source.

**Requirements:**
- Allow commercial use ✅
- Require open source derivatives ✅
- Strong copyleft ✅
- Patent protection ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --allow "commercial-use" \
  --require "disclose-source" --require "same-license" \
  --prefer "patent-use" --top 3
```

**Result:** GPL-3.0 or AGPL-3.0

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx GPL-3.0 \
  --holder "Free Software Project" \
  --year 2026 > LICENSE
```

---

## Example 4: SaaS Application (AGPL-3.0)

**Scenario:** Building a web service and want to prevent the "SaaS loophole" (where companies use GPL software as a service without distributing code).

**Requirements:**
- Network use counts as distribution ✅
- Strong copyleft ✅
- Allow commercial use ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --require "network-use-disclose" --top 3
```

**Result:** AGPL-3.0 (only license with network-use-disclose)

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx AGPL-3.0 \
  --holder "SaaS Project Contributors" \
  --year 2026 > LICENSE
```

---

## Example 5: Library That Allows Proprietary Linking (LGPL-3.0)

**Scenario:** Creating a library you want to keep open but allow proprietary software to link against it.

**Requirements:**
- Library itself stays open ✅
- Allow proprietary linking ✅
- Modifications must be shared ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --require "same-license--library" --top 3
```

**Result:** LGPL-2.1 or LGPL-3.0

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx LGPL-3.0 \
  --holder "Library Authors" \
  --year 2026 > LICENSE
```

---

## Example 6: Mixed Codebase (MPL-2.0)

**Scenario:** Working on a codebase with both open and proprietary components.

**Requirements:**
- Modified files must stay open ✅
- Can mix with proprietary code ✅
- More protection than MIT, less restrictive than GPL ✅

**Recommendation:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --require "same-license--file" --top 3
```

**Result:** MPL-2.0 (file-level copyleft)

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx MPL-2.0 \
  --holder "Project Team" \
  --year 2026 > LICENSE
```

---

## Example 7: Public Domain Dedication (Unlicense/CC0)

**Scenario:** Reference implementation or educational code with maximum freedom.

**Requirements:**
- No restrictions at all ✅
- No attribution required ✅
- True public domain ✅

**Available in catalog:**
- `Unlicense` - Explicit public domain dedication
- `CC0-1.0` - Creative Commons public domain dedication

**Generate LICENSE:**
```bash
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx Unlicense \
  --holder "Public Domain Contributor" \
  --year 2026 > LICENSE
```

---

## Example 8: Checking All Available Licenses

**View all 47 licenses in the full catalog:**
```bash
python3 << 'EOF'
import json
with open('data/full_catalog.json', 'r') as f:
    catalog = json.load(f)

print("All available licenses:")
for spdx_id in sorted(catalog.keys()):
    lic = catalog[spdx_id]
    print(f"\n{spdx_id}")
    print(f"  {lic['title']}")
    print(f"  {lic['description'][:80]}...")
EOF
```

---

## Example 9: Dependency License Compatibility Check

**Scenario:** Your project depends on GPL-3.0 code.

**Question:** Can I license my project under MIT?

**Answer:** ❌ No - GPL-3.0 is copyleft and requires derivative works to be GPL-3.0 compatible.

**Compatible options:**
- GPL-3.0 ✅
- GPL-3.0-or-later ✅
- AGPL-3.0 ✅ (stronger copyleft)

**Find GPL-compatible licenses:**
```bash
python scripts/recommend.py --catalog data/full_catalog.json \
  --require "same-license" --require "disclose-source" --top 5
```

See `references/compatibility.md` for detailed compatibility guidance.

---

## Example 10: Multi-License Project

**Scenario:** Different parts of your project need different licenses.

**Strategy:**
1. Use SPDX identifiers in file headers
2. List all licenses in the LICENSE file
3. Use subdirectory LICENSE files for different components

**Example structure:**
```
project/
├── LICENSE              # Main project license (MIT)
├── lib/
│   └── gpl-component/
│       └── LICENSE      # GPL-3.0 for this component
└── third-party/
    └── apache-lib/
        └── LICENSE      # Apache-2.0 for dependency
```

**Generate multiple licenses:**
```bash
# Main project (MIT)
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx MIT --holder "Project Team" > LICENSE

# GPL component
python scripts/render_license.py --catalog data/full_catalog.json \
  --spdx GPL-3.0 --holder "GPL Component Authors" > lib/gpl-component/LICENSE

# Apache dependency (already has its own)
# (included for completeness)
```

---

## Tips for License Selection

1. **Start with the simplest license that meets your needs** - Usually MIT or Apache-2.0
2. **Consider your dependencies** - Your license must be compatible with dependencies
3. **Think about future users** - More restrictive licenses limit adoption
4. **Get legal review for corporate projects** - These examples are educational, not legal advice
5. **Use SPDX identifiers** - Standard identifiers improve tooling support
6. **Include license in every file** - Use SPDX short headers in source files

**SPDX file header example:**
```
// SPDX-License-Identifier: Apache-2.0
// Copyright (c) 2026 Your Name
```

---

## Example 11: Using the Compatibility Checker

**Scenario:** You want to use MIT for your project but have dependencies with various licenses.

**Check compatibility:**
```bash
python scripts/check_compatibility.py \
  --project-license MIT \
  --deps Apache-2.0 BSD-3-Clause ISC
```

**Output:**
```
Checking compatibility for project license: MIT
Against 3 dependencies

✓ COMPATIBLE: Apache-2.0
  Both permissive (Apache has stronger patent grant)

✓ COMPATIBLE: BSD-3-Clause
  Both permissive licenses, fully compatible

✓ COMPATIBLE: ISC
  Both permissive licenses, fully compatible

======================================================================
✓ All dependencies appear compatible with your project license
```

**Incompatible case:**
```bash
python scripts/check_compatibility.py \
  --project-license MIT \
  --deps GPL-3.0
```

**Output:**
```
Checking compatibility for project license: MIT
Against 1 dependencies

✗ INCOMPATIBLE: GPL-3.0
  Cannot relicense GPL as MIT (copyleft)

======================================================================
✗ Incompatible dependencies found - cannot use this project license

Options:
1. Change your project license to a compatible one
2. Remove or replace the incompatible dependencies
3. Obtain legal counsel for dual licensing or exceptions
```

**Solution:** Either:
- Change project license to GPL-3.0 (compatible with GPL dependencies)
- Remove the GPL dependency and find an alternative
- Consult legal counsel about exceptions or dual licensing

