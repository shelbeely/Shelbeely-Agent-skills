# Shelbeely Agent Skills

A collection of agent skills for GitHub Copilot and other AI agents. Skills are organized into groups by topic, with each group in its own directory.

## Install

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

Or install with any agent that supports [skills.sh](https://skills.sh/).

## Skill Groups

Skills are organized into directories by topic. Each directory contains related skills that can be installed together or individually.

### 📐 [Material Design 3](.github/skills/material-design-3/)

The full Material Design 3 specification — from Material You through M3 Expressive — with 18 skills covering core design principles and library-specific implementations.

**Core Skills** (general-purpose, framework-agnostic):

| Skill | Description |
|-------|-------------|
| [material-design-3-guide](.github/skills/material-design-3/material-design-3-guide) | Master guide — start here |
| [material-design-3-color](.github/skills/material-design-3/material-design-3-color) | Color palettes, dynamic theming, 26+ color roles, accessibility |
| [material-design-3-typography](.github/skills/material-design-3/material-design-3-typography) | 30-style type scale, variable fonts, text hierarchy |
| [material-design-3-shape](.github/skills/material-design-3/material-design-3-shape) | 35 expressive shapes, corner radii, morphing, containment |
| [material-design-3-motion](.github/skills/material-design-3/material-design-3-motion) | Spring animations, transitions, haptics |
| [material-design-3-layout](.github/skills/material-design-3/material-design-3-layout) | Spacing, grids, blur, depth, interaction states |
| [material-design-3-components](.github/skills/material-design-3/material-design-3-components) | Complete component catalog — buttons, cards, FABs, navigation, etc. |
| [material-design-3-icons](.github/skills/material-design-3/material-design-3-icons) | Material Symbols variable font icon system (2,500+ icons) |

**Library-Specific Skills** (framework setup, theming, components):

| Skill | Stack | Library |
|-------|-------|---------|
| [m3-web-vanilla](.github/skills/material-design-3/m3-web-vanilla) | Vanilla CSS | CSS custom properties |
| [m3-web-webcomponents](.github/skills/material-design-3/m3-web-webcomponents) | Web Components | `@material/web` |
| [m3-web-react](.github/skills/material-design-3/m3-web-react) | React / Next.js | MUI (`@mui/material`) |
| [m3-web-angular](.github/skills/material-design-3/m3-web-angular) | Angular | `@angular/material` |
| [m3-web-vue](.github/skills/material-design-3/m3-web-vue) | Vue | Vuetify 3 |
| [m3-web-svelte](.github/skills/material-design-3/m3-web-svelte) | Svelte | SMUI |
| [m3-web-tailwind](.github/skills/material-design-3/m3-web-tailwind) | Tailwind CSS | `tailwind-material-3` |
| [m3-web-ink](.github/skills/material-design-3/m3-web-ink) | Ink (React CLI) | `ink` + `@inkjs/ui` |
| [m3-web-flutter](.github/skills/material-design-3/m3-web-flutter) | Flutter | `material` / `m3e_design` |
| [m3-web-android](.github/skills/material-design-3/m3-web-android) | Android | Jetpack Compose Material 3 |

## How It Works

### With [skills.sh](https://skills.sh/)

Install all skills from this repo into your project:

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

The CLI recursively scans for `SKILL.md` files across all skill groups and lets you pick which ones to install.

### With GitHub Copilot

Skills in `.github/skills/` are automatically discovered when you work in this repository. Symlinks at the root of `.github/skills/` point into each group directory, so Copilot finds them at the top level as required.

**Examples**:
- "Apply Material Design 3 colors to this button" → Loads `material-design-3-color`
- "Add M3 spring animations" → Loads `material-design-3-motion`
- "Create an M3 card using MUI" → Loads `m3-web-react` + `material-design-3-components`

### Manual Install

```bash
# Install all M3 skills into your project
cp -r .github/skills/material-design-3/* /path/to/project/.github/skills/

# Install a single skill
cp -r .github/skills/material-design-3/material-design-3-color /path/to/project/.github/skills/

# Install globally for all projects
cp -r .github/skills/material-design-3/* ~/.copilot/skills/
```

## Repository Structure

```
.github/skills/
├── material-design-3/          ← Skill group directory (actual files)
│   ├── README.md
│   ├── material-design-3-guide/
│   ├── material-design-3-color/
│   ├── material-design-3-typography/
│   ├── ...
│   ├── m3-web-react/
│   ├── m3-web-angular/
│   └── ...
├── material-design-3-guide -> material-design-3/material-design-3-guide  ← symlink
├── material-design-3-color -> material-design-3/material-design-3-color  ← symlink
├── m3-web-react -> material-design-3/m3-web-react                        ← symlink
└── ...
```

**Why symlinks?** GitHub Copilot only scans direct children of `.github/skills/`. The symlinks ensure Copilot discovers all skills while keeping files organized in group directories. Tools like `skills.sh` scan recursively, so they find skills in the group directories directly.

## Quick Start with Material Design 3

1. **Install**: `npx skills add shelbeely/Shelbeely-Agent-skills`
2. **Start with the guide**: Read [material-design-3-guide](.github/skills/material-design-3/material-design-3-guide/SKILL.md)
3. **Choose your stack**: Pick a library skill (e.g., `m3-web-react`, `m3-web-vue`, `m3-web-ink`)
4. **Set up foundations**: Color → Typography → Shape → Icons → Layout
5. **Build components**: Follow `material-design-3-components` + your library skill
6. **Add motion**: Implement animations with `material-design-3-motion`

## Contributing

To add a new skill group:

1. Create a directory in `.github/skills/` (e.g., `.github/skills/my-topic/`)
2. Add skill subdirectories with `SKILL.md` files following the [Agent Skills spec](https://agentskills.io/specification)
3. Create symlinks at `.github/skills/` root for each skill (for Copilot discovery)
4. Update this README with your new skill group
5. Submit a pull request

## License

Apache License 2.0. See [LICENSE](LICENSE).

## Resources

- [skills.sh — The Open Agent Skills Ecosystem](https://skills.sh/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [GitHub Copilot Skills Documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Material Design 3](https://m3.material.io/)