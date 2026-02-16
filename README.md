# Shelbeely Agent Skills

A collection of agent skills for GitHub Copilot and other AI agents, focusing on Material Design 3 Expressive design principles.

## What are Agent Skills?

Agent skills are folders of instructions, scripts, and resources that AI agents can discover and use to perform better at specialized tasks. They work with:
- GitHub Copilot coding agent
- GitHub Copilot CLI  
- Claude (via `.claude/skills`)
- Other AI systems supporting the [Agent Skills specification](https://github.com/agentskills/agentskills)

## Available Skills

### Material Design 3 Expressive Skills

This repository contains a comprehensive set of skills for implementing Google's Material Design 3 Expressive design system:

#### 🎨 [material-design-3-guide](/.github/skills/material-design-3-guide)
**Master guide** that explains when to use each Material Design 3 skill subset. Start here if you're new to Material Design 3 or need to understand which skill to apply.

**Use this skill when**: Starting an M3 project, understanding the M3 system, or deciding which specific M3 skill to use.

#### 🌈 [material-design-3-color](/.github/skills/material-design-3-color)
Color palettes, dynamic theming, and accessibility for Material Design 3.

**Use this skill when**: Setting up color systems, implementing themes, working with Material You dynamic colors, ensuring color accessibility.

#### ✨ [material-design-3-motion](/.github/skills/material-design-3-motion)
Spring-based animations, transitions, and micro-interactions.

**Use this skill when**: Adding animations, implementing transitions, creating micro-interactions, making interfaces feel alive and responsive.

#### 📝 [material-design-3-typography](/.github/skills/material-design-3-typography)
Type scales, variable fonts, and text hierarchy.

**Use this skill when**: Setting up typography systems, implementing type scales, working with Roboto or custom fonts, ensuring text readability.

#### 🔲 [material-design-3-shape](/.github/skills/material-design-3-shape)
Rounded corners, morphing shapes, and containment.

**Use this skill when**: Defining component shapes, working with border radius, creating rounded corners, morphing shapes between states.

#### 📐 [material-design-3-layout](/.github/skills/material-design-3-layout)
Spacing systems, responsive grids, and size hierarchy.

**Use this skill when**: Creating layouts, implementing spacing, building responsive designs, working with grids and elevation.

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
2. **Set up foundations** in order:
   - Color system (`material-design-3-color`)
   - Typography (`material-design-3-typography`)
   - Shape system (`material-design-3-shape`)
   - Layout and spacing (`material-design-3-layout`)
3. **Add motion**: Implement animations (`material-design-3-motion`)
4. **Build components**: Use all skills together for complete M3 components

## Skill Structure

Each skill contains:
- `SKILL.md` - Main instructions and guidelines
- Supporting resources (when applicable)

All skills follow the [Agent Skills specification](https://github.com/agentskills/agentskills) and work with GitHub Copilot, Claude, and other compatible AI agents.

## Material Design 3 Expressive

Material Design 3 Expressive is Google's latest evolution of its design system, focused on:
- **Dynamic Color**: Adaptive themes based on user preferences
- **Expressive Motion**: Spring-based, natural animations
- **Flexible Typography**: Variable fonts and clear hierarchy
- **Distinctive Shapes**: Rounded corners and morphing forms
- **Thoughtful Layout**: Size-based hierarchy and responsive design

Learn more at [m3.material.io](https://m3.material.io/)

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