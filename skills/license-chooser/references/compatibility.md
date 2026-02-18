# Compatibility (high-level notes)

This is NOT a full legal compatibility matrix. Use it to avoid obvious mistakes.

## Common quick guidance
- If the project includes or links to GPL-licensed code in a way that creates a derivative work, the combined work is typically distributed under the GPL.
- LGPL is designed to allow linking (under conditions) while keeping modifications to the LGPL component under LGPL.
- AGPL extends copyleft obligations to network/SaaS use in many scenarios.
- MPL-2.0 is file-level copyleft: modified MPL files stay MPL, new files can be under other licenses.

## Practical agent guidance
1) Ask what the project is (library vs app) and how dependencies are used (linking, bundling, copying code).
2) If dependencies include strong copyleft (GPL/AGPL), warn the user that their project license options may be constrained.
3) If the user needs a simple permissive license with patent coverage, consider Apache-2.0.
4) If the user wants permissive and simplest, consider MIT/ISC/BSD.
5) If the user wants copyleft for distributions, consider GPL-3.0.
6) If the user wants copyleft for network/SaaS, consider AGPL-3.0.
