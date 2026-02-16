# Material Design 3 Skills

A complete collection of agent skills covering the full Material Design 3 specification — from Material You through M3 Expressive.

## Organization

### Core Skills (General-Purpose)

These skills apply to Material Design 3 regardless of framework or library:

| Skill | Purpose |
|-------|---------|
| `material-design-3-guide` | Master guide — start here. Explains when to use each skill. |
| `material-design-3-color` | Color palettes, dynamic theming, accessibility, 26+ color roles |
| `material-design-3-motion` | Physics-based spring animations, transitions, haptics |
| `material-design-3-typography` | 30-style type scale, variable fonts, text hierarchy |
| `material-design-3-shape` | 35 expressive shapes, corner radii, morphing, containment |
| `material-design-3-layout` | Spacing, responsive grids, blur, depth, interaction states |
| `material-design-3-components` | Complete component catalog — buttons, cards, FABs, navigation, etc. |
| `material-design-3-icons` | Material Symbols variable font icon system (2,500+ icons) |

### Library-Specific Skills

Dedicated skills for implementing M3 with specific frameworks:

| Skill | Stack | Library |
|-------|-------|---------|
| `m3-web-vanilla` | Vanilla CSS | CSS custom properties |
| `m3-web-webcomponents` | Web Components | `@material/web` |
| `m3-web-react` | React / Next.js | MUI (`@mui/material`) |
| `m3-web-angular` | Angular | `@angular/material` |
| `m3-web-vue` | Vue | Vuetify 3 |
| `m3-web-svelte` | Svelte | SMUI |
| `m3-web-tailwind` | Tailwind CSS | `tailwind-material-3` |
| `m3-web-ink` | Ink (React CLI) | `ink` + `@inkjs/ui` |
| `m3-web-flutter` | Flutter | `material` / `m3e_design` |
| `m3-web-android` | Android | Jetpack Compose Material 3 |

## Installation

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

Or manually:

```bash
# Install all M3 skills into your project
cp -r skills/material-design-3/* /path/to/project/.github/skills/

# Install a single skill
cp -r skills/material-design-3/material-design-3-color /path/to/project/.github/skills/
```
