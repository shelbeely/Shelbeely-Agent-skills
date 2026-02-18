#!/usr/bin/env python3
"""
check_compatibility.py

Simple license compatibility checker for dependencies.
This provides basic guidance - consult a lawyer for definitive answers.

Usage:
  python scripts/check_compatibility.py --project-license MIT --deps GPL-3.0 Apache-2.0
"""

from __future__ import annotations

import argparse
import sys
from typing import List, Tuple

# Compatibility rules (simplified)
# Format: (project_license, dependency_license) -> (compatible, reason)
COMPATIBILITY_RULES = {
    # Permissive licenses can generally accept anything except they can't make GPL code permissive
    ("MIT", "MIT"): (True, "Both permissive licenses, fully compatible"),
    ("MIT", "BSD-2-Clause"): (True, "Both permissive licenses, fully compatible"),
    ("MIT", "BSD-3-Clause"): (True, "Both permissive licenses, fully compatible"),
    ("MIT", "ISC"): (True, "Both permissive licenses, fully compatible"),
    ("MIT", "Apache-2.0"): (True, "Both permissive (Apache has stronger patent grant)"),
    ("MIT", "GPL-3.0"): (False, "Cannot relicense GPL as MIT (copyleft)"),
    ("MIT", "AGPL-3.0"): (False, "Cannot relicense AGPL as MIT (copyleft)"),
    ("MIT", "LGPL-3.0"): (False, "Cannot relicense LGPL as MIT (copyleft)"),
    ("MIT", "MPL-2.0"): (True, "MPL allows combining with MIT for new files"),
    
    # Apache-2.0 (permissive with patent grant)
    ("Apache-2.0", "MIT"): (True, "Both permissive licenses, fully compatible"),
    ("Apache-2.0", "BSD-2-Clause"): (True, "Both permissive licenses, fully compatible"),
    ("Apache-2.0", "BSD-3-Clause"): (True, "Both permissive licenses, fully compatible"),
    ("Apache-2.0", "ISC"): (True, "Both permissive licenses, fully compatible"),
    ("Apache-2.0", "Apache-2.0"): (True, "Same license, fully compatible"),
    ("Apache-2.0", "GPL-3.0"): (False, "Cannot relicense GPL as Apache (copyleft)"),
    ("Apache-2.0", "AGPL-3.0"): (False, "Cannot relicense AGPL as Apache (copyleft)"),
    ("Apache-2.0", "LGPL-3.0"): (False, "Cannot relicense LGPL as Apache (copyleft)"),
    ("Apache-2.0", "MPL-2.0"): (True, "MPL allows combining with Apache for new files"),
    
    # GPL-3.0 (strong copyleft)
    ("GPL-3.0", "MIT"): (True, "Can incorporate MIT code into GPL project"),
    ("GPL-3.0", "BSD-2-Clause"): (True, "Can incorporate BSD code into GPL project"),
    ("GPL-3.0", "BSD-3-Clause"): (True, "Can incorporate BSD code into GPL project"),
    ("GPL-3.0", "ISC"): (True, "Can incorporate ISC code into GPL project"),
    ("GPL-3.0", "Apache-2.0"): (True, "Can incorporate Apache code into GPL project"),
    ("GPL-3.0", "GPL-3.0"): (True, "Same license, fully compatible"),
    ("GPL-3.0", "GPL-2.0"): (False, "GPL-2.0 and GPL-3.0 are incompatible unless GPL-2.0-or-later"),
    ("GPL-3.0", "AGPL-3.0"): (False, "Cannot combine GPL and AGPL (AGPL is stronger)"),
    ("GPL-3.0", "LGPL-3.0"): (True, "Can incorporate LGPL code into GPL project"),
    ("GPL-3.0", "MPL-2.0"): (True, "MPL-2.0 has explicit GPL compatibility"),
    
    # AGPL-3.0 (network copyleft)
    ("AGPL-3.0", "MIT"): (True, "Can incorporate MIT code into AGPL project"),
    ("AGPL-3.0", "BSD-2-Clause"): (True, "Can incorporate BSD code into AGPL project"),
    ("AGPL-3.0", "BSD-3-Clause"): (True, "Can incorporate BSD code into AGPL project"),
    ("AGPL-3.0", "ISC"): (True, "Can incorporate ISC code into AGPL project"),
    ("AGPL-3.0", "Apache-2.0"): (True, "Can incorporate Apache code into AGPL project"),
    ("AGPL-3.0", "GPL-3.0"): (True, "Can incorporate GPL code into AGPL project (AGPL is stronger)"),
    ("AGPL-3.0", "AGPL-3.0"): (True, "Same license, fully compatible"),
    ("AGPL-3.0", "LGPL-3.0"): (True, "Can incorporate LGPL code into AGPL project"),
    ("AGPL-3.0", "MPL-2.0"): (True, "MPL-2.0 allows incorporation into AGPL"),
    
    # LGPL-3.0 (library copyleft)
    ("LGPL-3.0", "MIT"): (True, "Can incorporate MIT code into LGPL project"),
    ("LGPL-3.0", "BSD-2-Clause"): (True, "Can incorporate BSD code into LGPL project"),
    ("LGPL-3.0", "BSD-3-Clause"): (True, "Can incorporate BSD code into LGPL project"),
    ("LGPL-3.0", "ISC"): (True, "Can incorporate ISC code into LGPL project"),
    ("LGPL-3.0", "Apache-2.0"): (True, "Can incorporate Apache code into LGPL project"),
    ("LGPL-3.0", "GPL-3.0"): (False, "Cannot relicense GPL as LGPL (GPL is stronger)"),
    ("LGPL-3.0", "AGPL-3.0"): (False, "Cannot relicense AGPL as LGPL (AGPL is stronger)"),
    ("LGPL-3.0", "LGPL-3.0"): (True, "Same license, fully compatible"),
    ("LGPL-3.0", "MPL-2.0"): (True, "MPL-2.0 allows incorporation into LGPL"),
    
    # MPL-2.0 (file-level copyleft)
    ("MPL-2.0", "MIT"): (True, "Can combine MIT code with MPL (file-level separation)"),
    ("MPL-2.0", "BSD-2-Clause"): (True, "Can combine BSD code with MPL (file-level separation)"),
    ("MPL-2.0", "BSD-3-Clause"): (True, "Can combine BSD code with MPL (file-level separation)"),
    ("MPL-2.0", "ISC"): (True, "Can combine ISC code with MPL (file-level separation)"),
    ("MPL-2.0", "Apache-2.0"): (True, "Can combine Apache code with MPL (file-level separation)"),
    ("MPL-2.0", "GPL-3.0"): (False, "Cannot combine MPL project with GPL dependencies"),
    ("MPL-2.0", "AGPL-3.0"): (False, "Cannot combine MPL project with AGPL dependencies"),
    ("MPL-2.0", "LGPL-3.0"): (True, "Can combine LGPL dependencies with MPL (as library)"),
    ("MPL-2.0", "MPL-2.0"): (True, "Same license, fully compatible"),
}


def normalize_spdx(spdx: str) -> str:
    """Normalize SPDX identifier variations."""
    # Handle common variations
    mapping = {
        "GPL-3.0-only": "GPL-3.0",
        "GPL-3.0-or-later": "GPL-3.0",
        "GPL-2.0-only": "GPL-2.0",
        "GPL-2.0-or-later": "GPL-2.0",
        "LGPL-3.0-only": "LGPL-3.0",
        "LGPL-3.0-or-later": "LGPL-3.0",
        "LGPL-2.1-only": "LGPL-2.1",
        "LGPL-2.1-or-later": "LGPL-2.1",
        "AGPL-3.0-only": "AGPL-3.0",
        "AGPL-3.0-or-later": "AGPL-3.0",
    }
    return mapping.get(spdx, spdx)


def check_compatibility(project_license: str, dependency_license: str) -> Tuple[bool, str]:
    """Check if a dependency license is compatible with the project license."""
    proj = normalize_spdx(project_license)
    dep = normalize_spdx(dependency_license)
    
    # Check exact match
    key = (proj, dep)
    if key in COMPATIBILITY_RULES:
        return COMPATIBILITY_RULES[key]
    
    # Unknown combination - be conservative
    return (None, f"Unknown compatibility between {project_license} and {dependency_license} - consult legal counsel")


def main() -> int:
    ap = argparse.ArgumentParser(
        description="Check license compatibility for a project and its dependencies"
    )
    ap.add_argument("--project-license", required=True, help="Your project's license (SPDX ID)")
    ap.add_argument("--deps", nargs="+", required=True, help="Dependency licenses (SPDX IDs)")
    args = ap.parse_args()
    
    print(f"Checking compatibility for project license: {args.project_license}")
    print(f"Against {len(args.deps)} dependencies")
    print()
    
    all_compatible = True
    unknown_found = False
    
    for dep in args.deps:
        compatible, reason = check_compatibility(args.project_license, dep)
        
        if compatible is True:
            status = "✓ COMPATIBLE"
        elif compatible is False:
            status = "✗ INCOMPATIBLE"
            all_compatible = False
        else:
            status = "? UNKNOWN"
            unknown_found = True
        
        print(f"{status}: {dep}")
        print(f"  {reason}")
        print()
    
    print("=" * 70)
    if all_compatible and not unknown_found:
        print("✓ All dependencies appear compatible with your project license")
        return 0
    elif unknown_found:
        print("? Some dependencies have unknown compatibility - legal review recommended")
        return 1
    else:
        print("✗ Incompatible dependencies found - cannot use this project license")
        print()
        print("Options:")
        print("1. Change your project license to a compatible one")
        print("2. Remove or replace the incompatible dependencies")
        print("3. Obtain legal counsel for dual licensing or exceptions")
        return 1


if __name__ == "__main__":
    sys.exit(main())
