#!/usr/bin/env python3
"""
recommend.py

Score and rank licenses using catalog metadata.
This is heuristic matching, not legal advice.

Usage example:
  python scripts/recommend.py --catalog data/catalog.json \
    --allow commercial-use --allow modification --allow distribution \
    --require license-notice \
    --prefer patent-grant
"""

from __future__ import annotations

import argparse
import json
from typing import Any, Dict, List, Tuple


def load_catalog(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def normalize_tokens(tokens: List[str]) -> List[str]:
    return [t.strip() for t in tokens if t and t.strip()]


def score(rec: Dict[str, Any], allow: List[str], require: List[str], prefer: List[str]) -> Tuple[int, List[str]]:
    reasons: List[str] = []
    s = 0

    # Map ChooseALicense-style strings to our stable tokens when possible
    # If catalog already uses stable tokens, this is a no-op for those values.
    have_perm = set(rec.get("permissions", []))
    have_cond = set(rec.get("conditions", []))
    have_lim = set(rec.get("limitations", []))

    def has(token: str) -> bool:
        return token in have_perm or token in have_cond or token in have_lim

    # Hard-ish filters: require tokens
    missing = [t for t in require if not has(t)]
    if missing:
        reasons.append(f"Missing required: {missing}")
        s -= 100  # push down heavily

    # Allow tokens: should exist in permissions (or anywhere) for a good fit
    allow_missing = [t for t in allow if not has(t)]
    if allow_missing:
        reasons.append(f"Does not clearly include desired allowances: {allow_missing}")
        s -= 10 * len(allow_missing)
    else:
        if allow:
            reasons.append(f"Includes desired allowances: {allow}")
            s += 5 * len(allow)

    # Prefer tokens: nice-to-haves
    pref_hits = [t for t in prefer if has(t)]
    if pref_hits:
        reasons.append(f"Matches preferences: {pref_hits}")
        s += 2 * len(pref_hits)

    # Mild penalty for strong copyleft if user didn't ask for it
    if "disclose-source" in have_cond or "same-license" in have_cond:
        reasons.append("Has copyleft conditions (may constrain downstream users)")
        s -= 1

    return s, reasons


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--catalog", required=True)
    ap.add_argument("--allow", action="append", default=[])
    ap.add_argument("--require", action="append", default=[])
    ap.add_argument("--prefer", action="append", default=[])
    ap.add_argument("--top", type=int, default=5)
    args = ap.parse_args()

    allow = normalize_tokens(args.allow)
    require = normalize_tokens(args.require)
    prefer = normalize_tokens(args.prefer)

    catalog = load_catalog(args.catalog)

    ranked = []
    for spdx, rec in catalog.items():
        s, reasons = score(rec, allow, require, prefer)
        ranked.append((s, spdx, rec.get("title"), reasons))

    ranked.sort(key=lambda x: x[0], reverse=True)

    out = []
    for s, spdx, title, reasons in ranked[: args.top]:
        out.append({"spdx_id": spdx, "title": title, "score": s, "reasons": reasons})

    print(json.dumps(out, indent=2, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
