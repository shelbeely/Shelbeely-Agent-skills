# Shelbeely Agent Skills

A collection of agent skills for GitHub Copilot and other AI agents, focusing on Material Design 3 design principles — covering the full specification from Material You through M3 Expressive.

## What are Agent Skills?

Agent skills are folders of instructions, scripts, and resources that AI agents can discover and use to perform better at specialized tasks. They work with:
- GitHub Copilot coding agent
- GitHub Copilot CLI  
- Claude (via `.claude/skills`)
- Other AI systems supporting the [Agent Skills specification](https://github.com/agentskills/agentskills)

## Available Skills

### Material Design 3 Skills

This repository contains a comprehensive set of skills for implementing Google's Material Design 3 design system — from Material You foundations through M3 Expressive enhancements:

#### 🎨 [material-design-3-guide](/.github/skills/material-design-3-guide)
**Master guide** that explains when to use each Material Design 3 skill subset. Start here if you're new to Material Design 3 or need to understand which skill to apply.

**Use this skill when**: Starting an M3 project, understanding the M3 system, or deciding which specific M3 skill to use.

#### 🌈 [material-design-3-color](/.github/skills/material-design-3-color)
Color palettes, dynamic theming, and accessibility for Material Design 3. Covers 26+ color roles, fixed accent colors, surface container hierarchy, and three contrast levels.

**Use this skill when**: Setting up color systems, implementing themes, working with Material You dynamic colors, ensuring color accessibility, adding fixed accent colors for branding.

#### ✨ [material-design-3-motion](/.github/skills/material-design-3-motion)
Physics-based spring animations, transitions, and micro-interactions. Covers expressive vs standard motion modes, haptics integration, and spring parameters.

**Use this skill when**: Adding animations, implementing transitions, creating micro-interactions, making interfaces feel alive and responsive.

#### 📝 [material-design-3-typography](/.github/skills/material-design-3-typography)
Type scales (30 styles: 15 baseline + 15 emphasized), variable fonts, and text hierarchy.

**Use this skill when**: Setting up typography systems, implementing type scales, working with Roboto or custom fonts, ensuring text readability, adding emphasized type for key moments.

#### 🔲 [material-design-3-shape](/.github/skills/material-design-3-shape)
Rounded corners, 35 expressive shapes, morphing shapes, and containment. Covers updated corner radii (Large: 20dp, XL: 32dp, XXL: 48dp).

**Use this skill when**: Defining component shapes, working with border radius, creating rounded corners, morphing shapes between states, using expressive decorative shapes.

#### 📐 [material-design-3-layout](/.github/skills/material-design-3-layout)
Spacing systems, responsive grids, size hierarchy, background blur, depth effects, containment, and interaction states.

**Use this skill when**: Creating layouts, implementing spacing, building responsive designs, working with grids and elevation, adding background blur for overlays.

#### 🧩 [material-design-3-components](/.github/skills/material-design-3-components)
Complete component catalog — buttons, cards, dialogs, navigation, FABs, chips, text fields, tabs, menus, and M3 Expressive additions (split buttons, button groups, floating toolbars, FAB menus).

**Use this skill when**: Building or styling any UI component following M3 guidelines, looking up component specifications, implementing new M3 Expressive components.

#### 🔣 [material-design-3-icons](/.github/skills/material-design-3-icons)
Material Symbols variable font icon system — 2,500+ icons with four customizable axes (fill, weight, grade, optical size).

**Use this skill when**: Adding icons to an interface, configuring Material Symbols, implementing icon accessibility, using icon fill transitions.

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
2. **Choose your web stack**: The guide covers M3 implementation for React (MUI), Angular Material, Vue (Vuetify), Svelte (SMUI), Web Components (`@material/web`), vanilla CSS, Tailwind CSS, Next.js, Flutter, and Android (Jetpack Compose)
3. **Set up foundations** in order:
   - Color system (`material-design-3-color`)
   - Typography (`material-design-3-typography`)
   - Shape system (`material-design-3-shape`)
   - Icons (`material-design-3-icons`)
   - Layout and spacing (`material-design-3-layout`)
4. **Build components**: Follow specs from (`material-design-3-components`) — includes cross-framework examples
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

These skills include implementation guidance for:

| Stack | Library | M3 Support |
|-------|---------|------------|
| Vanilla CSS | CSS custom properties | Full (manual) |
| Web Components | `@material/web` | Full M3 (official) |
| React | MUI (`@mui/material`) | M3 theming |
| Angular | `@angular/material` | Full M3 (official) |
| Vue | Vuetify 3 | Full M3 |
| Svelte | SMUI | Partial M3 |
| Tailwind CSS | `tailwind-material-3` | Token-based M3 |
| CSS Framework | Beer CSS | Full M3 |
| Next.js | MUI + `@mui/material-nextjs` | M3 + SSR |
| Ink (React CLI) | `ink` + `@inkjs/ui` | Token-based M3 |
| Flutter | `material` / `m3e_design` | Full M3 |
| Android | Jetpack Compose Material 3 | Full M3 + Expressive |

See the [material-design-3-guide](/.github/skills/material-design-3-guide/SKILL.md) for detailed setup instructions per stack.

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