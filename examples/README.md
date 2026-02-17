# Examples

Testing prompts to verify skills are working correctly with your AI coding agent.

## Installation

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

## Test Prompts

### Core Skills

| # | Prompt | Expected Skill |
|---|--------|----------------|
| 1 | "Create a Material Design 3 color token system with primary, secondary, and tertiary colors" | `material-design-3-color` |
| 2 | "Create a Material Design 3 button component with all states" | `material-design-3-components` + `material-design-3-color` + `material-design-3-shape` |
| 3 | "Add Material Design 3 spring animations to this element" | `material-design-3-motion` |
| 4 | "Set up Material Design 3 type scale" | `material-design-3-typography` |
| 5 | "Create a Material Design 3 responsive grid layout" | `material-design-3-layout` |
| 6 | "Create a Material Design 3 card with proper shape, color, and elevation" | `material-design-3-components` |
| 7 | "Set up Material Symbols icons with fill transitions for navigation" | `material-design-3-icons` |

### Library-Specific Skills

| # | Prompt | Expected Skill |
|---|--------|----------------|
| 8 | "Create an M3 themed React app using MUI" | `m3-web-react` |
| 9 | "Set up Angular Material with M3 theming using SCSS" | `m3-web-angular` |
| 10 | "Create a Vuetify 3 theme with M3 colors and dark mode" | `m3-web-vue` |
| 11 | "Create a form using @material/web components" | `m3-web-webcomponents` |
| 12 | "Map M3 color tokens to Tailwind CSS" | `m3-web-tailwind` |
| 13 | "Set up M3 in a Next.js App Router project with SSR" | `m3-web-react` |
| 14 | "Create M3 design tokens using only CSS custom properties" | `m3-web-vanilla` |
| 15 | "Show me how to create an M3 button in React, Angular, Vue, and Svelte" | `m3-web-react` + `m3-web-angular` + `m3-web-vue` + `m3-web-svelte` |
| 16 | "Create an M3 themed CLI app using Ink" | `m3-web-ink` |
| 17 | "Generate M3 color tokens from my brand color #FF9800" | `material-theme-builder` |
| 18 | "Use the Figma MCP to extract components from the M3 Design Kit" | Figma MCP + `material-design-3-components` |

## Verifying Skills Are Loaded

When skills are working correctly:
- CSS uses token naming (e.g., `--md-sys-color-primary`)
- Animations use spring-based easing curves
- Typography uses the M3 type scale
- Shapes use the M3 border radius scale
- Framework code uses correct library APIs
