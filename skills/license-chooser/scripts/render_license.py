#!/usr/bin/env python3
"""
render_license.py

Render LICENSE text from a catalog by SPDX id.

Usage:
  python scripts/render_license.py --catalog data/catalog.json --spdx MIT --holder "Your Name" --year 2026 > LICENSE
"""

from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from typing import Any, Dict


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", required=True)
    ap.add_argument("--spdx", required=True)
    ap.add_argument("--holder", required=True, help="Copyright holder name")
    ap.add_argument("--year", default=str(datetime.now().year))
    ap.add_argument("--email", default="", help="Email address (optional)")
    ap.add_argument("--project", default="", help="Project name (optional)")
    ap.add_argument("--projecturl", default="", help="Project URL (optional)")
    args = ap.parse_args()

    with open(args.catalog, "r", encoding="utf-8") as f:
        catalog: Dict[str, Any] = json.load(f)

    rec = catalog.get(args.spdx)
    if not rec:
        print(f"Unknown SPDX id: {args.spdx}", file=sys.stderr)
        return 1

    text: str = rec.get("license_text", "")

    # Replace all common placeholders used by choosealicense.com
    # See: https://choosealicense.com/appendix/
    replacements = {
        "[year]": args.year,
        "[yyyy]": args.year,
        "[Year]": args.year,
        "[fullname]": args.holder,
        "[name of copyright owner]": args.holder,
        "[name of copyright holder]": args.holder,
    }
    
    # Optional fields - only replace if provided
    if args.email:
        replacements["[email]"] = args.email
    if args.project:
        replacements["[project]"] = args.project
        replacements["[Software Name]"] = args.project
    if args.projecturl:
        replacements["[projecturl]"] = args.projecturl
    
    for placeholder, value in replacements.items():
        text = text.replace(placeholder, value)

    sys.stdout.write(text.rstrip() + "\n")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
