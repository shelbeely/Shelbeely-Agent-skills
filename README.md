# Shelbeely Agent Skills

A distribution repo of agent skills for AI coding agents. Install skills into your projects using [skills.sh](https://skills.sh/).

## Install

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

Or install with any agent that supports [skills.sh](https://skills.sh/).

## Skill Groups

Skills are organized into directories by topic. Each directory contains related skills that can be installed together or individually.

### 📐 [Material Design 3](skills/material-design-3/)

The full Material Design 3 specification — from Material You through M3 Expressive — with 18 skills covering core design principles and library-specific implementations.

**Core Skills** (general-purpose, framework-agnostic):

| Skill | Description |
|-------|-------------|
| [material-design-3-guide](skills/material-design-3/material-design-3-guide) | Master guide — start here |
| [material-design-3-color](skills/material-design-3/material-design-3-color) | Color palettes, dynamic theming, 26+ color roles, accessibility |
| [material-design-3-typography](skills/material-design-3/material-design-3-typography) | 30-style type scale, variable fonts, text hierarchy |
| [material-design-3-shape](skills/material-design-3/material-design-3-shape) | 35 expressive shapes, corner radii, morphing, containment |
| [material-design-3-motion](skills/material-design-3/material-design-3-motion) | Spring animations, transitions, haptics |
| [material-design-3-layout](skills/material-design-3/material-design-3-layout) | Spacing, grids, blur, depth, interaction states |
| [material-design-3-components](skills/material-design-3/material-design-3-components) | Complete component catalog — buttons, cards, FABs, navigation, etc. |
| [material-design-3-icons](skills/material-design-3/material-design-3-icons) | Material Symbols variable font icon system (2,500+ icons) |

**Library-Specific Skills** (framework setup, theming, components):

| Skill | Stack | Library |
|-------|-------|---------|
| [m3-web-vanilla](skills/material-design-3/m3-web-vanilla) | Vanilla CSS | CSS custom properties |
| [m3-web-webcomponents](skills/material-design-3/m3-web-webcomponents) | Web Components | `@material/web` |
| [m3-web-react](skills/material-design-3/m3-web-react) | React / Next.js | MUI (`@mui/material`) |
| [m3-web-angular](skills/material-design-3/m3-web-angular) | Angular | `@angular/material` |
| [m3-web-vue](skills/material-design-3/m3-web-vue) | Vue | Vuetify 3 |
| [m3-web-svelte](skills/material-design-3/m3-web-svelte) | Svelte | SMUI |
| [m3-web-tailwind](skills/material-design-3/m3-web-tailwind) | Tailwind CSS | `tailwind-material-3` |
| [m3-web-ink](skills/material-design-3/m3-web-ink) | Ink (React CLI) | `ink` + `@inkjs/ui` |
| [m3-web-flutter](skills/material-design-3/m3-web-flutter) | Flutter | `material` / `m3e_design` |
| [m3-web-android](skills/material-design-3/m3-web-android) | Android | Jetpack Compose Material 3 |

## How It Works

This is a **distribution repo** — it holds skill source files that get installed into your projects.

### With [skills.sh](https://skills.sh/)

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

The CLI scans the `skills/` directory for `SKILL.md` files, then installs them into your project's `.github/skills/` where agents like GitHub Copilot discover them automatically.

### Manual Install

```bash
# Install all M3 skills into your project
cp -r skills/material-design-3/* /path/to/project/.github/skills/

# Install a single skill
cp -r skills/material-design-3/material-design-3-color /path/to/project/.github/skills/
```

## Repository Structure

```
skills/                             ← Distribution directory (skills.sh convention)
└── material-design-3/              ← Skill group
    ├── README.md
    ├── material-design-3-guide/    ← Core skills
    ├── material-design-3-color/
    ├── material-design-3-typography/
    ├── ...
    ├── m3-web-react/               ← Library-specific skills
    ├── m3-web-angular/
    └── ...
```

When installed into a project, skills land in `.github/skills/` where agents discover them automatically.

## Quick Start with Material Design 3

1. **Install**: `npx skills add shelbeely/Shelbeely-Agent-skills`
2. **Start with the guide**: Read [material-design-3-guide](skills/material-design-3/material-design-3-guide/SKILL.md)
3. **Choose your stack**: Pick a library skill (e.g., `m3-web-react`, `m3-web-vue`, `m3-web-ink`)
4. **Set up foundations**: Color → Typography → Shape → Icons → Layout
5. **Build components**: Follow `material-design-3-components` + your library skill
6. **Add motion**: Implement animations with `material-design-3-motion`

## Contributing

To add a new skill group:

1. Create a directory in `skills/` (e.g., `skills/my-topic/`)
2. Add skill subdirectories with `SKILL.md` files following the [Agent Skills spec](https://agentskills.io/specification)
3. Update this README with your new skill group
4. Submit a pull request

## License

Apache License 2.0. See [LICENSE](LICENSE).

## Resources

- [skills.sh — The Open Agent Skills Ecosystem](https://skills.sh/)
- [Agent Skills Specification](https://agentskills.io/specification)
- [GitHub Copilot Skills Documentation](https://docs.github.com/en/copilot/concepts/agents/about-agent-skills)
- [Material Design 3](https://m3.material.io/)