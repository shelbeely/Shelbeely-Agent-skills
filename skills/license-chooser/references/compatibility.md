# Compatibility (high-level notes)

This is NOT a full legal compatibility matrix. Use it to avoid obvious mistakes.
For detailed compatibility information, see https://choosealicense.com/appendix/

## Common quick guidance
- If the project includes or links to GPL-licensed code in a way that creates a derivative work, the combined work is typically distributed under the GPL.
- LGPL is designed to allow linking (under conditions) while keeping modifications to the LGPL component under LGPL.
- AGPL extends copyleft obligations to network/SaaS use in many scenarios.
- MPL-2.0 is file-level copyleft: modified MPL files stay MPL, new files can be under other licenses.
- Permissive licenses (MIT, BSD, ISC, Apache-2.0) can usually be combined with any license.

## License compatibility matrix (simplified)

### Permissive → Permissive ✅
- MIT, BSD, ISC, Apache-2.0 can be combined freely
- Apache-2.0 adds patent protection not in MIT/BSD

### Permissive → Copyleft ✅
- Permissive-licensed code CAN be included in GPL/AGPL/MPL projects
- The combined work takes the copyleft license

### Copyleft → Permissive ❌
- GPL/AGPL code CANNOT be included in MIT/BSD/Apache projects
- This would violate the copyleft requirement

### GPL-2.0 ↔ GPL-3.0 ⚠️
- Generally incompatible unless original is "GPL-2.0-or-later"
- GPL-3.0 has stronger patent and anti-tivoization clauses

### LGPL → GPL ✅
- LGPL code can be used in GPL projects
- GPL is a stronger copyleft than LGPL

### GPL → LGPL ❌
- GPL code cannot be relicensed as LGPL
- Would weaken the copyleft protection

### MPL-2.0 flexibility ✅
- File-level copyleft allows mixing with other licenses
- Modified MPL files must stay MPL
- New files can be under different licenses
- Can be combined with GPL-2.0+ (explicit compatibility clause)

## Practical agent guidance
1) Ask what the project is (library vs app) and how dependencies are used (linking, bundling, copying code).
2) If dependencies include strong copyleft (GPL/AGPL), warn the user that their project license options may be constrained.
3) If the user needs a simple permissive license with patent coverage, consider Apache-2.0.
4) If the user wants permissive and simplest, consider MIT/ISC/BSD.
5) If the user wants copyleft for distributions, consider GPL-3.0.
6) If the user wants copyleft for network/SaaS, consider AGPL-3.0.
7) For libraries that want to allow proprietary use, consider LGPL-3.0 or permissive licenses.
8) For file-level copyleft with maximum flexibility, consider MPL-2.0.

## Special cases

### Dual licensing
Some projects offer dual licensing (e.g., GPL + commercial):
- Open source users get the copyleft license
- Commercial users can purchase a proprietary license
- Common for libraries and developer tools

### License with exceptions
Some projects use GPL with linking exceptions:
- Allows use as a library without GPL contamination
- Example: GCC Runtime Library Exception

### Contributor License Agreements (CLAs)
- Not a license, but a contract for contributions
- Allows project owner to relicense or dual-license
- Common for projects with commercial backing
