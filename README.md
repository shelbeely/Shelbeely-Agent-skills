# Shelbeely Agent Skills

A collection of agent skills for GitHub Copilot and other AI agents, focusing on Material Design 3 design principles — covering the full specification from Material You through M3 Expressive.

## What are Agent Skills?

Agent skills are folders of instructions, scripts, and resources that AI agents can discover and use to perform better at specialized tasks. They work with:
- GitHub Copilot coding agent
- GitHub Copilot CLI  
- Claude (via `.claude/skills`)
- Other AI systems supporting the [Agent Skills specification](https://github.com/agentskills/agentskills)

## Available Skills

### Material Design 3 — Core Skills

General-purpose M3 skills that apply to Material Design 3 regardless of framework or library:

#### 🎨 [material-design-3-guide](/.github/skills/material-design-3-guide)
**Master guide** that explains when to use each Material Design 3 skill subset. Start here if you're new to Material Design 3 or need to understand which skill to apply.

#### 🌈 [material-design-3-color](/.github/skills/material-design-3-color)
Color palettes, dynamic theming, and accessibility. Covers 26+ color roles, fixed accent colors, surface container hierarchy, and three contrast levels.

#### ✨ [material-design-3-motion](/.github/skills/material-design-3-motion)
Physics-based spring animations, transitions, and micro-interactions. Covers expressive vs standard motion modes, haptics integration, and spring parameters.

#### 📝 [material-design-3-typography](/.github/skills/material-design-3-typography)
Type scales (30 styles: 15 baseline + 15 emphasized), variable fonts, and text hierarchy.

#### 🔲 [material-design-3-shape](/.github/skills/material-design-3-shape)
Rounded corners, 35 expressive shapes, morphing shapes, and containment. Covers updated corner radii (Large: 20dp, XL: 32dp, XXL: 48dp).

#### 📐 [material-design-3-layout](/.github/skills/material-design-3-layout)
Spacing systems, responsive grids, size hierarchy, background blur, depth effects, containment, and interaction states.

#### 🧩 [material-design-3-components](/.github/skills/material-design-3-components)
Complete component catalog — buttons, cards, dialogs, navigation, FABs, chips, text fields, tabs, menus, and M3 Expressive additions (split buttons, button groups, floating toolbars, FAB menus).

#### 🔣 [material-design-3-icons](/.github/skills/material-design-3-icons)
Material Symbols variable font icon system — 2,500+ icons with four customizable axes (fill, weight, grade, optical size).

### Material Design 3 — Library-Specific Skills

Dedicated skills for implementing M3 with specific frameworks and libraries. Each contains setup, theming, component examples, and best practices for that stack:

#### 🌐 [m3-web-vanilla](/.github/skills/m3-web-vanilla)
M3 with vanilla CSS custom properties. Zero dependencies. Includes Beer CSS and other CSS-only frameworks.

#### ⚙️ [m3-web-webcomponents](/.github/skills/m3-web-webcomponents)
Google's official `@material/web` Lit-based web components. Framework-agnostic.

#### ⚛️ [m3-web-react](/.github/skills/m3-web-react)
React with MUI (`@mui/material`), M3-aligned theming, and Next.js SSR integration.

#### 🅰️ [m3-web-angular](/.github/skills/m3-web-angular)
Angular Material (`@angular/material`) with first-class M3 theming, SCSS mixins, and CLI schematics.

#### 💚 [m3-web-vue](/.github/skills/m3-web-vue)
Vue.js with Vuetify 3, M3 theming, dynamic color, and components.

#### 🔥 [m3-web-svelte](/.github/skills/m3-web-svelte)
Svelte/SvelteKit with SMUI or `@material/web` directly.

#### 🎨 [m3-web-tailwind](/.github/skills/m3-web-tailwind)
Tailwind CSS with M3 token integration via plugin or manual mapping.

#### 💻 [m3-web-ink](/.github/skills/m3-web-ink)
Ink (React CLI) with `@inkjs/ui` M3 theming for terminal interfaces.

#### 📱 [m3-web-flutter](/.github/skills/m3-web-flutter)
Flutter M3 theming, dynamic color (Material You), and M3 Expressive packages.

#### 🤖 [m3-web-android](/.github/skills/m3-web-android)
Jetpack Compose Material 3 with dynamic color and M3 Expressive components.

## How to Use These Skills

### For GitHub Copilot Users

These skills are automatically discovered when you work in this repository. Simply mention Material Design 3 concepts in your prompts and Copilot will load the relevant skills.

**Examples**:
- "Apply Material Design 3 colors to this button" → Loads `material-design-3-color`
- "Add Material Design animations" → Loads `material-design-3-motion`  
- "Create a Material Design 3 card component" → Loads multiple skills

### For Personal Use Across Projects

Copy the skills directory to your home directory:

```bash
# For GitHub Copilot
mkdir -p ~/.copilot/skills
cp -r .github/skills/* ~/.copilot/skills/

# For Claude
mkdir -p ~/.claude/skills
cp -r .github/skills/* ~/.claude/skills/
```

### For Other Repositories

Copy the `.github/skills` directory to any repository where you want to use these skills:

```bash
cp -r .github/skills /path/to/your/repo/.github/
```

## Quick Start with Material Design 3

1. **Start with the guide**: Read [material-design-3-guide](/.github/skills/material-design-3-guide/SKILL.md)
2. **Choose your library skill**: Pick the right one for your stack (e.g., `m3-web-react`, `m3-web-angular`, `m3-web-vue`, `m3-web-ink`, etc.)
3. **Set up foundations** in order:
   - Color system (`material-design-3-color`)
   - Typography (`material-design-3-typography`)
   - Shape system (`material-design-3-shape`)
   - Icons (`material-design-3-icons`)
   - Layout and spacing (`material-design-3-layout`)
4. **Build components**: Follow specs from `material-design-3-components` + your library skill
5. **Add motion**: Implement animations (`material-design-3-motion`)
6. **Go expressive**: Add M3 Expressive enhancements (emphasized type, expressive shapes, spring physics)

## Skill Structure

Each skill contains:
- `SKILL.md` - Main instructions and guidelines
- Supporting resources (when applicable)

All skills follow the [Agent Skills specification](https://github.com/agentskills/agentskills) and work with GitHub Copilot, Claude, and other compatible AI agents.

## Material Design 3

Material Design 3 is Google's open-source design system, covering the full specification from Material You through M3 Expressive:

### Material You (M3 Baseline)
- **Dynamic Color**: Adaptive themes based on user preferences
- **Token System**: CSS custom properties for consistent theming
- **Component Library**: Complete set of accessible, themed components
- **Type Scale**: 15 baseline type styles across five roles
- **Shape System**: Semantic corner radius scale
- **Elevation System**: Five levels with tinting for depth

### M3 Expressive (Latest Evolution)
- **Expressive Motion**: Physics-based spring animations with haptics
- **Flexible Typography**: 30-style type scale with emphasized variants
- **Distinctive Shapes**: 35 expressive shapes with smooth morphing
- **Enhanced Color**: Fixed accent colors, contrast levels, surface containers
- **New Components**: Split buttons, button groups, floating toolbars, FAB menus
- **Background Blur**: Depth effects for overlays and navigation
- **Material Symbols**: Variable font icon system with 2,500+ icons

Learn more at [m3.material.io](https://m3.material.io/)

### Supported Web Stacks

Each web stack has its own dedicated library skill:

| Stack | Library | Skill |
|-------|---------|-------|
| Vanilla CSS | CSS custom properties | `m3-web-vanilla` |
| Web Components | `@material/web` | `m3-web-webcomponents` |
| React / Next.js | MUI (`@mui/material`) | `m3-web-react` |
| Angular | `@angular/material` | `m3-web-angular` |
| Vue | Vuetify 3 | `m3-web-vue` |
| Svelte | SMUI | `m3-web-svelte` |
| Tailwind CSS | `tailwind-material-3` | `m3-web-tailwind` |
| Ink (React CLI) | `ink` + `@inkjs/ui` | `m3-web-ink` |
| Flutter | `material` / `m3e_design` | `m3-web-flutter` |
| Android | Jetpack Compose Material 3 | `m3-web-android` |

## Contributing

Contributions are welcome! To add new skills or improve existing ones:

1. Follow the [Agent Skills specification](https://github.com/agentskills/agentskills)
2. Create a new directory in `.github/skills/`
3. Add a `SKILL.md` file with proper frontmatter
4. Update this README with your new skill
5. Submit a pull request

## License

This repository is licensed under the Apache License 2.0. See [LICENSE](LICENSE) for details.

## Resources

- [Agent Skills Specification](https://github.com/agentskills/agentskills)
- [GitHub Copilot Skills Documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Material Design 3](https://m3.material.io/)
- [Example Skills Repository](https://github.com/anthropics/skills)

## Acknowledgments

These skills are based on [Material Design 3](https://m3.material.io/) by Google and follow the [Agent Skills specification](https://github.com/agentskills/agentskills).