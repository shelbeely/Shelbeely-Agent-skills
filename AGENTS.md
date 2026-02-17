# AGENTS.md

This file provides guidance to AI coding agents working with this repository.

## Repository Overview

A collection of Material Design 3 agent skills covering the full specification from M3 You baseline through M3 Expressive. Skills are packaged instructions that extend AI coding agent capabilities for implementing Material Design 3 in any project.

## Skill Structure

```
skills/
  {skill-name}/           # kebab-case directory name
    SKILL.md              # Required: skill definition with YAML frontmatter
.github/
  skills/
    {skill-name} -> ../../skills/{skill-name}   # Symlinks for Copilot discovery
```

Skills are authored in `skills/` and symlinked into `.github/skills/` so that GitHub Copilot coding agent can discover them as project skills (per [GitHub docs](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/create-skills)).

### SKILL.md Format

```markdown
---
name: {skill-name}
description: {One sentence describing when to use this skill}
license: Apache-2.0
---

# {Skill Title}

{Guidelines, examples, and checklists for the agent}
```

### Required Frontmatter Fields

- `name`: Unique identifier (lowercase, hyphens)
- `description`: Brief explanation of when the skill activates
- `license`: License identifier (Apache-2.0 for this repo)

## Skill Categories

### Core Design Skills

General-purpose M3 skills that apply regardless of framework:

- `material-design-3-guide` — Meta-skill orchestrating all M3 design pillars
- `material-design-3-color` — Color system, tokens, dynamic color, contrast
- `material-design-3-typography` — Type scale, font hierarchy, emphasis
- `material-design-3-shape` — Corner radius, expressive shapes
- `material-design-3-motion` — Animation, transitions, spring physics
- `material-design-3-layout` — Responsive layout, containment, spacing
- `material-design-3-components` — Component catalog and specs
- `material-design-3-icons` — Material Symbols implementation

### Library-Specific Skills

Framework/library implementation skills — use when a project uses a specific stack:

- `m3-web-react` — React with MUI / Next.js
- `m3-web-angular` — Angular Material
- `m3-web-vue` — Vue with Vuetify 3
- `m3-web-svelte` — Svelte with SMUI
- `m3-web-webcomponents` — @material/web (Lit)
- `m3-web-tailwind` — Tailwind CSS with M3 tokens
- `m3-web-vanilla` — Vanilla CSS / Beer CSS
- `m3-web-ink` — Ink (React CLI) with @inkjs/ui
- `m3-web-flutter` — Flutter Material 3
- `m3-web-android` — Android Jetpack Compose

## Adding a New Skill

1. Create `skills/{skill-name}/SKILL.md`
2. Add YAML frontmatter with `name`, `description`, and `license`
3. Write clear guidelines, code examples, and a checklist
4. Add a symlink: `ln -s ../../skills/{skill-name} .github/skills/{skill-name}`
5. Update `README.md` with the new skill description
