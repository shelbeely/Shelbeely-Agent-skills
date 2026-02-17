# Agent Skills

A collection of skills for AI coding agents. Skills are packaged instructions that extend agent capabilities.

Skills follow the [Agent Skills](https://agentskills.io/) format.

## Available Skills

### material-design-3-guide

Master guide for Material Design 3 — orchestrates all M3 design pillars from Material You baseline through M3 Expressive.

**Use when:**
- Starting a new M3 project
- "Apply Material Design 3"
- "Set up M3 theming"
- Reviewing a UI for M3 compliance

### material-design-3-color

M3 color system with 26+ color roles, dynamic color, surface container hierarchy, and contrast levels (standard/medium/high).

**Use when:**
- Setting up a color theme
- Implementing dark mode
- Choosing accessible color combinations
- "Apply M3 colors"

### material-design-3-typography

30-style type scale (15 baseline + 15 emphasized) with variable font support and medium contrast.

**Use when:**
- Setting up font hierarchy
- Choosing type styles for components
- Implementing responsive typography
- "Set up M3 typography"

### material-design-3-shape

35 expressive shapes, corner radius tokens, shape morphing, and the full M3 shape library.

**Use when:**
- Applying corner radius to components
- Using expressive shapes (squircle, clover, etc.)
- Implementing shape transitions
- "Apply M3 shapes"

### material-design-3-motion

Physics-based spring animations, expressive vs standard motion modes, haptics integration.

**Use when:**
- Adding animations or transitions
- Implementing spring-based motion
- Choosing easing curves
- "Add M3 motion"

### material-design-3-layout

Responsive layout, spacing, containment, background blur, depth effects, interaction states.

**Use when:**
- Setting up responsive grids
- Implementing spacing and padding
- Adding state layers and interaction feedback
- "Apply M3 layout"

### material-design-3-components

Complete M3 component catalog — buttons (5 types), FABs, cards, navigation, dialogs, text fields, chips, and more.

**Use when:**
- Building UI components
- Choosing the right button variant
- Implementing navigation patterns
- "Build M3 components"

### material-design-3-icons

Material Symbols variable font icon system — 3 styles, 4 axes (fill, weight, grade, optical size), 2,500+ icons.

**Use when:**
- Adding icons to a project
- Configuring icon styles
- "Set up Material Symbols"

### m3-web-react

React and Next.js M3 implementation with MUI (`@mui/material`). Theme setup, component usage, SSR configuration.

**Use when:**
- Building a React or Next.js project with Material Design 3
- "Set up MUI theming"
- Using `@mui/material` components

### m3-web-angular

Angular Material M3 implementation. SCSS theming, schematics, component integration.

**Use when:**
- Building an Angular project with Material Design 3
- "Set up Angular Material theming"
- Using `@angular/material` components

### m3-web-vue

Vue 3 M3 implementation with Vuetify 3. Theme configuration, component usage, dark mode.

**Use when:**
- Building a Vue project with Material Design 3
- "Set up Vuetify 3 theming"
- Using Vuetify components

### m3-web-svelte

Svelte M3 implementation with SMUI and direct `@material/web` usage.

**Use when:**
- Building a Svelte project with Material Design 3
- "Set up SMUI"
- Using Material web components in Svelte

### m3-web-webcomponents

Official M3 Web Components via `@material/web` (Lit-based). Framework-agnostic, standards-based.

**Use when:**
- Using `@material/web` directly
- Building with Web Components
- "Set up Material Web Components"

### m3-web-tailwind

Tailwind CSS M3 integration. Token mapping, plugin configuration, utility classes.

**Use when:**
- Using Tailwind CSS with Material Design 3
- "Map M3 tokens to Tailwind"
- Configuring `tailwind.config.js` for M3

### m3-web-vanilla

Vanilla CSS M3 implementation using custom properties. Also covers Beer CSS.

**Use when:**
- Building without a framework
- Using CSS custom properties for M3 tokens
- "Set up M3 with plain CSS"

### m3-web-ink

Ink (React for CLIs) M3 implementation with `@inkjs/ui`. Terminal-aware theming.

**Use when:**
- Building CLI apps with Ink
- "Apply M3 to a terminal UI"
- Using `@inkjs/ui` components

### m3-web-flutter

Flutter Material 3 implementation. `ThemeData`, dynamic color, M3 Expressive packages.

**Use when:**
- Building a Flutter app with Material Design 3
- "Set up Flutter M3 theming"
- Using `useMaterial3: true`

### m3-web-android

Android Jetpack Compose Material 3 implementation. `MaterialTheme`, dynamic color, M3 Expressive (Android 16+).

**Use when:**
- Building an Android app with Material Design 3
- "Set up Compose Material 3"
- Using `androidx.compose.material3`

## Installation

```bash
npx skills add shelbeely/Shelbeely-Agent-skills
```

## Usage

Skills are automatically available once installed. The agent will use them when relevant tasks are detected.

**Examples:**
```
Apply Material Design 3 to my React app
```
```
Set up M3 color theming with dark mode
```
```
Build a navigation component following M3 guidelines
```

## Figma MCP Server

This repository includes a [Figma MCP server](https://developers.figma.com/docs/figma-mcp-server/remote-server-installation/) configuration for the [GitHub Copilot coding agent](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp). The configuration is in [`.github/copilot/mcp.json`](.github/copilot/mcp.json) and uses the [`figma-developer-mcp`](https://www.npmjs.com/package/figma-developer-mcp) local server with a Figma Personal Access Token.

> **Note:** The Copilot coding agent [does not support OAuth-based remote MCP servers](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp), so this configuration uses the local `figma-developer-mcp` package with a Personal Access Token instead of Figma's remote OAuth endpoint.

With the Figma MCP server enabled, the coding agent can:
- Generate code from Figma design frames
- Extract design context (variables, components, layout data)
- Keep design system components consistent with Code Connect

### Setup

1. Generate a Personal Access Token in Figma (**Account Settings > Security > Personal Access Tokens**).
2. In your repository, go to **Settings > Environments** and create a `copilot` environment (if it doesn't exist).
3. Add an environment secret named `COPILOT_MCP_FIGMA_API_KEY` with your Figma PAT as the value.
4. Copy the MCP configuration from `.github/copilot/mcp.json` into your repository's **Settings > Copilot > Coding agent > MCP configuration**.

## Skill Structure

Each skill contains:
- `SKILL.md` — Instructions for the agent (YAML frontmatter + Markdown)

## License

Apache License 2.0. See [LICENSE](LICENSE).