#!/usr/bin/env python3

"""
export_catalog.py

Parse a local checkout of github/choosealicense.com into a single JSON catalog.

Input expects:
  <repo>/_licenses/*.txt
Each file is YAML front matter (metadata) followed by the license text body.

Usage:
  python scripts/export_catalog.py --repo /path/to/choosealicense.com --out data/catalog.json
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
from typing import Any, Dict

try:
    import yaml  # type: ignore
except Exception as e:
    raise SystemExit("Missing dependency: pyyaml. Install with: pip install pyyaml") from e

FRONT_MATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)


def parse_file(path: pathlib.Path) -> Dict[str, Any]:
    raw = path.read_text(encoding="utf-8")
    m = FRONT_MATTER_RE.match(raw)
    if not m:
        raise ValueError(f"Expected YAML front matter + body in: {path}")

    fm_text, body = m.group(1), m.group(2)
    meta = yaml.safe_load(fm_text) or {}

    spdx_id = meta.get("spdx-id")
    if not spdx_id:
        raise ValueError(f"Missing spdx-id in {path}")

    rec: Dict[str, Any] = {
        "title": meta.get("title"),
        "spdx_id": spdx_id,
        "description": meta.get("description"),
        "how": meta.get("how"),
        "note": meta.get("note"),
        "nickname": meta.get("nickname"),
        "featured": meta.get("featured", False),
        "hidden": meta.get("hidden", True),
        "redirect_from": meta.get("redirect_from"),
        "permissions": meta.get("permissions") or [],
        "conditions": meta.get("conditions") or [],
        "limitations": meta.get("limitations") or [],
        "using": meta.get("using") or {},
        "license_text": body.strip("\n"),
        "source_file": path.name,
    }
    # Remove None values to keep catalog clean
    return {k: v for k, v in rec.items() if v is not None}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", required=True, help="Path to local choosealicense.com repo")
    ap.add_argument("--out", required=True, help="Output JSON path")
    args = ap.parse_args()

    repo = pathlib.Path(args.repo).resolve()
    licenses_dir = repo / "_licenses"
    if not licenses_dir.exists():
        raise SystemExit(f"Could not find _licenses directory at: {licenses_dir}")

    catalog: Dict[str, Any] = {}
    for p in sorted(licenses_dir.glob("*.txt")):
        rec = parse_file(p)
        catalog[rec["spdx_id"]] = rec

    out = pathlib.Path(args.out).resolve()
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps(catalog, indent=2, ensure_ascii=False), encoding="utf-8")
    print(f"Wrote {len(catalog)} licenses -> {out}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
