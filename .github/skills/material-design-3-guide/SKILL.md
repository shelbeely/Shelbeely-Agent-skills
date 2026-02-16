---
name: material-design-3-guide
description: Master guide for Material Design 3 — covering the full specification from Material You foundations through M3 Expressive. Explains when to use each Material Design 3 skill subset (color, motion, typography, shape, layout, components, icons). Use this when starting a Material Design 3 project, when you need to understand which M3 skill to apply, or when the user asks about Material Design 3 in general.
license: Apache-2.0
---

# Material Design 3 Guide

## Overview

This is the master guide for implementing Material Design 3 (M3) — covering the full specification from Material You foundations through M3 Expressive enhancements. It explains the overall system and directs you to specialized skills for each aspect.

**Keywords**: Material Design 3, M3, Material Design, design system, Google design, Material You, expressive design, UI design, M3 Expressive, React, MUI, Angular Material, Vue, Vuetify, Svelte, SMUI, Tailwind CSS, Next.js, Flutter, Jetpack Compose, web components, Beer CSS, Ink, CLI, terminal UI

## What is Material Design 3?

Material Design 3 is Google's open-source design system for creating digital products. It has evolved through two major phases:

### Material You (M3 Baseline)
The foundational M3 system introduced:
- **Dynamic Color**: Adaptive themes derived from user wallpapers and preferences
- **Tonal Palettes**: Five key palettes with systematic tonal generation
- **Type Scale**: 15 baseline type styles across five roles
- **Shape System**: Semantic corner radius scale from none to full
- **Elevation System**: Five levels with tinting for depth
- **Component Library**: Complete set of accessible, themed components
- **Token System**: CSS custom properties for consistent theming

### M3 Expressive (Latest Evolution)
Building on Material You, M3 Expressive adds:
- **30-Style Type Scale**: 15 emphasized variants alongside the 15 baseline styles
- **35 Expressive Shapes**: Decorative shape library with smooth morphing
- **Physics-Based Motion**: Spring parameters (stiffness, damping, velocity) replacing traditional easing
- **Fixed Accent Colors**: Colors that stay constant across light and dark themes
- **Contrast Levels**: Standardized standard, medium, and high contrast modes
- **New Components**: Split buttons, button groups, floating toolbars, FAB menus
- **Background Blur**: Depth effects for overlays and navigation
- **Haptic Integration**: Coordinated vibration with spring animations

## The Seven Pillars of Material Design 3

Material Design 3 is built on seven interconnected design pillars:

### 1. Color and Dynamic Theming
**What**: Vibrant, adaptive color systems with 26+ roles, proper contrast, and accessibility
**Use the `material-design-3-color` skill when**:
- Setting up color palettes or themes
- Implementing dynamic color (Material You)
- Working with primary, secondary, tertiary color roles
- Ensuring color accessibility and contrast
- Creating light and dark themes
- Defining color tokens and variables
- Applying state layers (hover, focus, pressed)
- Implementing elevation tinting
- Setting up fixed accent colors for branding (M3 Expressive)
- Configuring contrast levels (standard, medium, high) (M3 Expressive)
- Defining surface container hierarchy

**Key concepts**: Tonal palettes, color roles, dynamic color, accessibility, theming, fixed accents, contrast levels, surface containers

### 2. Motion and Animation
**What**: Physics-based, natural animations that guide attention and provide feedback
**Use the `material-design-3-motion` skill when**:
- Adding transitions between screens or states
- Implementing micro-interactions (hover, focus, press)
- Creating page or view transitions
- Animating component states
- Building loading states or progress indicators
- Implementing ripple effects
- Creating stagger animations for lists
- Morphing containers or shapes
- Choosing between expressive and standard motion (M3 Expressive)
- Integrating haptic feedback with animations (M3 Expressive)

**Key concepts**: Spring physics, stiffness/damping/velocity, easing curves, duration, transitions, haptics

### 3. Typography
**What**: Clear, readable type hierarchy using variable fonts and defined scales
**Use the `material-design-3-typography` skill when**:
- Setting up text styles and hierarchy
- Defining font families and weights
- Implementing the type scale (display, headline, title, body, label)
- Working with variable fonts
- Ensuring text readability and accessibility
- Setting line heights and letter spacing
- Creating responsive typography
- Using emphasized type styles for key moments (M3 Expressive)

**Key concepts**: Type scale (15 baseline + 15 emphasized), variable fonts, hierarchy, readability, medium contrast

### 4. Shape and Containment
**What**: Rounded corners, morphing shapes, and expressive decorative forms
**Use the `material-design-3-shape` skill when**:
- Defining border radius for components
- Creating rounded corners on cards, buttons, dialogs
- Implementing shape tokens (updated: Large 20dp, XL 32dp, XXL 48dp)
- Morphing shapes between states
- Working with containers and containment
- Styling buttons, FABs, chips, or input fields
- Using the 35 expressive shape library (M3 Expressive)
- Implementing expressive shape morphing (M3 Expressive)

**Key concepts**: Border radius, shape scale, morphing, containment, 35 expressive shapes, rounded corners

### 5. Layout and Size Hierarchy
**What**: Strategic use of spacing, size, containment, and depth to create visual flow
**Use the `material-design-3-layout` skill when**:
- Setting up page layouts and grids
- Defining spacing systems
- Creating responsive layouts
- Implementing size-based hierarchy
- Working with breakpoints
- Positioning components
- Creating visual emphasis through size
- Implementing elevation and depth
- Using background blur for overlays (M3 Expressive)
- Defining explicit vs implicit containment
- Implementing interaction states (hover, focus, pressed, disabled)

**Key concepts**: Spacing scale, grid systems, responsive design, visual hierarchy, background blur, containment, state layers

### 6. Components
**What**: Complete library of accessible, themed UI components
**Use the `material-design-3-components` skill when**:
- Building buttons, cards, dialogs, navigation, or any UI component
- Looking up component specifications (sizing, spacing, colors)
- Implementing new M3 Expressive components (split buttons, button groups, toolbars)
- Understanding component interaction states
- Choosing the right component for a use case
- Implementing FABs, chips, text fields, tabs, or menus

**Key concepts**: Action, containment, communication, navigation, selection, text input components

### 7. Icons
**What**: Material Symbols variable font icon system with 2,500+ icons
**Use the `material-design-3-icons` skill when**:
- Adding icons to an interface
- Configuring Material Symbols (fill, weight, grade, optical size)
- Implementing icon accessibility
- Using icon fill transitions for selection state
- Sizing icons correctly for different components
- Choosing an icon style (outlined, rounded, sharp)

**Key concepts**: Material Symbols, variable font axes (FILL, wght, GRAD, opsz), icon accessibility

## When to Use Which Skill

### Starting a New Material Design 3 Project

**Step 1: Color Foundation**
- Use `material-design-3-color` first
- Set up your color palette and theme
- Define all color tokens (primary, secondary, tertiary, surfaces, fixed accents)
- Implement both light and dark themes
- Configure contrast levels

**Step 2: Typography System**
- Use `material-design-3-typography`
- Define your type scale and font families (baseline + emphasized)
- Set up typography tokens
- Choose Roboto or custom brand fonts

**Step 3: Shape System**
- Use `material-design-3-shape`
- Define shape tokens for all corner radii (updated values)
- Set up component-specific shapes

**Step 4: Icons**
- Use `material-design-3-icons`
- Load Material Symbols (choose one style)
- Configure default variable font axes

**Step 5: Layout Foundation**
- Use `material-design-3-layout`
- Set up spacing scale and grid system
- Define breakpoints for responsive design
- Set up containment patterns and interaction states

**Step 6: Build Components**
- Use `material-design-3-components`
- Build all UI components using the established tokens
- Follow component-specific specifications

**Step 7: Add Motion**
- Use `material-design-3-motion`
- Implement transitions and animations (choose expressive vs standard)
- Add micro-interactions to interactive elements
- Integrate haptic feedback where appropriate

### Working on Specific Components

**Buttons**:
- Components: `material-design-3-components` (specs, variants, button groups)
- Shape: `material-design-3-shape` (full radius, pill shape)
- Color: `material-design-3-color` (primary/secondary/tertiary)
- Typography: `material-design-3-typography` (label-large)
- Motion: `material-design-3-motion` (hover, focus, press states)
- Layout: `material-design-3-layout` (spacing, sizing)
- Icons: `material-design-3-icons` (button icons)

**Cards**:
- Components: `material-design-3-components` (elevated, filled, outlined)
- Shape: `material-design-3-shape` (medium radius, 12dp)
- Color: `material-design-3-color` (surface container variants)
- Typography: `material-design-3-typography` (title + body text)
- Motion: `material-design-3-motion` (elevation change on hover)
- Layout: `material-design-3-layout` (padding, content flow)

**Dialogs/Modals**:
- Components: `material-design-3-components` (dialog specs)
- Shape: `material-design-3-shape` (extra-large radius, 32dp)
- Color: `material-design-3-color` (surface-container-high)
- Typography: `material-design-3-typography` (headline + body)
- Motion: `material-design-3-motion` (enter/exit animations)
- Layout: `material-design-3-layout` (centered, max-width, background blur)

**Navigation**:
- Components: `material-design-3-components` (bar, rail, drawer, tabs)
- Color: `material-design-3-color` (surface variant, active states)
- Typography: `material-design-3-typography` (label-large)
- Shape: `material-design-3-shape` (indicators, pills)
- Motion: `material-design-3-motion` (transition animations)
- Layout: `material-design-3-layout` (nav structure)
- Icons: `material-design-3-icons` (navigation icons with fill toggle)

**Forms/Inputs**:
- Components: `material-design-3-components` (text fields, selectors)
- Shape: `material-design-3-shape` (extra-small radius, 4dp)
- Color: `material-design-3-color` (surface variant, outlines)
- Typography: `material-design-3-typography` (body text, labels)
- Motion: `material-design-3-motion` (focus animations)
- Layout: `material-design-3-layout` (field spacing, alignment)

### Common Scenarios

**"Make it look Material Design 3"**:
1. Start with `material-design-3-color` - set up the color system
2. Apply `material-design-3-shape` - add rounded corners
3. Use `material-design-3-typography` - implement the type scale
4. Load `material-design-3-icons` - set up Material Symbols
5. Build with `material-design-3-components` - use M3 component specs
6. Add `material-design-3-motion` - implement spring animations
7. Apply `material-design-3-layout` - ensure proper spacing

**"Make it M3 Expressive"**:
1. Follow the standard M3 setup above
2. Add emphasized type styles from `material-design-3-typography`
3. Use expressive shapes from `material-design-3-shape` for decorative moments
4. Switch to expressive motion mode from `material-design-3-motion`
5. Implement new components (split buttons, button groups, toolbars) from `material-design-3-components`
6. Add fixed accent colors and contrast levels from `material-design-3-color`
7. Use background blur from `material-design-3-layout`

**"Add Material Design animations"**:
- Primarily use `material-design-3-motion`
- May need `material-design-3-color` for state layers
- May need `material-design-3-shape` for morphing shapes

**"Fix Material Design colors"**:
- Use `material-design-3-color` exclusively
- Focus on color roles, contrast, and theming

**"Style this button/card/dialog"**:
- Start with `material-design-3-components` for specs
- Then apply shape + color + typography as needed

**"Make it responsive"**:
- Primarily `material-design-3-layout`
- May need `material-design-3-typography` for responsive text
- May need `material-design-3-shape` for responsive radii

**"Implement dark mode"**:
- Use `material-design-3-color` for theme switching
- Ensure all color tokens are defined for both themes
- Adjust icon grade for dark mode via `material-design-3-icons`

**"Add icons"**:
- Use `material-design-3-icons` for Material Symbols setup
- Use `material-design-3-color` for icon color tokens

## Integration Principles

### All Skills Work Together

Material Design 3 is a holistic system - the skills are designed to be used together:

- **Color** defines the palette
- **Typography** defines the text
- **Shape** defines the form
- **Motion** defines the behavior
- **Layout** defines the structure
- **Components** define the building blocks
- **Icons** define the visual language

### Consistency is Key

When using multiple skills:
- Use tokens/variables defined in each skill
- Don't hard-code values
- Maintain consistency across all design aspects
- Test the combined result, not just individual parts

### Example: Complete Button Implementation

```css
/* Uses all seven pillars */
.md3-button {
  /* Shape */
  border-radius: var(--md-sys-shape-corner-full);
  
  /* Color */
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  
  /* Typography */
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  
  /* Layout */
  padding: var(--md-sys-spacing-2) var(--md-sys-spacing-6);
  min-height: 40px;
  display: inline-flex;
  align-items: center;
  gap: var(--md-sys-spacing-2);
  
  /* Motion */
  transition: 
    background-color var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard),
    box-shadow var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard),
    transform var(--md-sys-motion-duration-short2) var(--md-sys-motion-easing-standard);
}

.md3-button:hover {
  /* Color - state layer */
  background-color: var(--md-sys-color-primary);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  /* Motion */
  transform: translateY(-1px);
}

/* Icons in button */
.md3-button .material-symbols-outlined {
  font-size: 18px;
  font-variation-settings: 'opsz' 20;
}
```

## Quick Reference

### Which Skill for Which Property?

| Property | Skill |
|----------|-------|
| `color`, `background-color` | material-design-3-color |
| `font-size`, `font-family`, `line-height`, `font-weight`, `letter-spacing` | material-design-3-typography |
| `border-radius`, `clip-path` | material-design-3-shape |
| `transition`, `animation`, `@keyframes` | material-design-3-motion |
| `margin`, `padding`, `gap`, `width`, `height`, `display`, `grid` | material-design-3-layout |
| `box-shadow` (elevation) | material-design-3-layout (+ motion for transitions) |
| `backdrop-filter` (blur) | material-design-3-layout |
| `font-variation-settings` (icons) | material-design-3-icons |
| Component-specific specs | material-design-3-components |

### Which Skill for Which Component?

| Component | Primary Skill | Supporting Skills |
|-----------|--------------|-------------------|
| Buttons | components | color, shape, typography, motion |
| Cards | components | color, shape, layout |
| Dialogs | components | color, shape, layout, motion |
| Navigation | components | color, icons, layout, motion |
| Text Fields | components | color, shape, typography |
| FABs | components | color, shape, icons, motion |
| Chips | components | color, shape, typography |
| Tabs | components | color, typography, icons, motion |
| Lists | components | color, typography, layout |
| Menus | components | color, shape, layout |

### File Organization

When implementing M3, organize your code:

```
styles/
├── tokens/
│   ├── color.css          # From material-design-3-color
│   ├── typography.css     # From material-design-3-typography
│   ├── shape.css          # From material-design-3-shape
│   ├── motion.css         # From material-design-3-motion
│   ├── layout.css         # From material-design-3-layout
│   └── icons.css          # From material-design-3-icons
├── components/
│   ├── button.css         # Uses all skills
│   ├── card.css           # Uses all skills
│   ├── dialog.css         # Uses all skills
│   ├── navigation.css     # Uses all skills
│   └── text-field.css     # Uses all skills
└── main.css               # Imports all tokens
```

## Best Practices

### Do's

1. ✅ **Use all seven pillars** - M3 works best when all aspects are implemented
2. ✅ **Start with tokens** - Define all design tokens before building components
3. ✅ **Follow the skills** - Each skill provides tested, research-backed guidelines
4. ✅ **Test accessibility** - All skills include accessibility requirements
5. ✅ **Support both themes** - Always implement light and dark modes
6. ✅ **Use semantic names** - Use token names, not hard-coded values
7. ✅ **Be consistent** - Apply the same patterns across all components
8. ✅ **Cover the full spec** - Include Material You baseline and M3 Expressive additions

### Don'ts

1. ❌ **Don't cherry-pick** - Using only color without shape/motion isn't really M3
2. ❌ **Don't hard-code** - Always use the defined tokens and variables
3. ❌ **Don't skip accessibility** - Contrast, sizing, and motion preferences matter
4. ❌ **Don't ignore dark mode** - It's a core part of M3
5. ❌ **Don't improvise values** - Use the scales provided in each skill
6. ❌ **Don't mix design systems** - Don't combine M3 with other design languages
7. ❌ **Don't forget motion** - Static M3 misses the "expressive" part
8. ❌ **Don't skip icons** - Material Symbols are integral to the M3 visual language

## Material Design 3 for Different Web Stacks

M3 can be implemented across many web stacks. Each framework has different libraries, maturity levels, and approaches. Choose the right option for your project:

### Web Stack Overview

| Stack | Primary Library | M3 Support | Status |
|-------|----------------|------------|--------|
| **Vanilla CSS** | CSS custom properties | Full (manual) | Stable |
| **Web Components** | `@material/web` (Lit) | Full M3 | Maintenance mode |
| **React** | MUI (`@mui/material`) | M3 theming (evolving) | Active development |
| **React** | `@material/web` + wrappers | Full M3 | Maintenance mode |
| **Angular** | `@angular/material` | Full M3 | Active, official |
| **Vue** | Vuetify 3 | Full M3 | Active development |
| **Svelte** | SMUI (Svelte Material UI) | Partial M3 | Active, community |
| **Tailwind CSS** | `tailwind-material-3` plugin | Token-based M3 | Community |
| **CSS Framework** | Beer CSS | Full M3 | Active, lightweight |
| **Next.js** | MUI + `@mui/material-nextjs` | M3 + SSR | Active |
| **Ink (React CLI)** | `ink` + `@inkjs/ui` | Token-based M3 | Active, community |
| **Flutter** | `material` / `m3e_design` | Full M3 | Official (Expressive paused) |
| **Android** | Jetpack Compose Material 3 | Full M3, Expressive (Android 16+) | Official, active |

---

### Vanilla CSS / Custom Properties

The most flexible approach — implement M3 using only CSS custom properties and semantic classes. No framework dependency. All other M3 skills in this repository use this approach as the canonical reference.

**When to use**: Static sites, simple web apps, any project where you want zero dependencies, or when you need full control over every design token.

**Setup**:
```css
/* Define M3 tokens as CSS custom properties */
:root {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-surface: #FEF7FF;
  /* ... all tokens from material-design-3-color */
}

/* Apply to components */
.md3-button-filled {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: var(--md-sys-shape-corner-full);
  font: var(--md-sys-typescale-label-large-weight)
        var(--md-sys-typescale-label-large-size)
        var(--md-sys-typescale-label-large-font);
}
```

**CSS-only frameworks**:
- **Beer CSS** (`beercss`): First CSS framework fully based on M3. Zero dependencies, semantic HTML, very small bundle. All major M3 components styled. https://www.beercss.com/
- **Material Design Light**: Lightweight SCSS framework compiled to plain CSS with M3 component styles. https://github.com/mdlightdev/material-design-light
- **GMX.css**: Minimal-JS M3 CSS implementation with predefined color schemes. https://www.cssscript.com/material-design-framework-gmx/

---

### Web Components — `@material/web` (Official, Lit-based)

Google's official M3 web component library. Framework-agnostic — works with any framework that supports Custom Elements. Built on Lit for small bundle size and interoperability.

**When to use**: When you want Google's official M3 implementation, need cross-framework components, or want standardized web components.

**Status**: Maintenance mode — stable but not receiving major new features. Consider for projects that value stability.

**Install**:
```bash
npm install @material/web
```

**Usage**:
```html
<script type="module">
  import '@material/web/button/filled-button.js';
  import '@material/web/textfield/outlined-text-field.js';
  import '@material/web/checkbox/checkbox.js';
</script>

<md-filled-button>Click me</md-filled-button>
<md-outlined-text-field label="Email"></md-outlined-text-field>
<md-checkbox></md-checkbox>
```

**Theming** (via CSS custom properties):
```css
:root {
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-ref-typeface-brand: 'Roboto';
  --md-ref-typeface-plain: 'Roboto';
}
```

**Resources**:
- Documentation: https://material-web.dev/
- GitHub: https://github.com/material-components/material-web
- npm: https://www.npmjs.com/package/@material/web

---

### React — MUI (Material UI)

MUI (`@mui/material`) is the most popular React UI library. MUI v6 adds Pigment CSS engine for better performance. M3 theming support is evolving — MUI still primarily implements M2 component APIs but supports M3 color tokens and theming through customization.

**When to use**: React projects where you want the largest ecosystem, most mature library, and best React/Next.js integration. Customize the theme to match M3 guidelines.

**Install**:
```bash
npm install @mui/material @emotion/react @emotion/styled
```

**M3-aligned theming**:
```jsx
import { createTheme, ThemeProvider } from '@mui/material/styles';

const m3Theme = createTheme({
  palette: {
    primary: { main: '#6750A4' },
    secondary: { main: '#625B71' },
    error: { main: '#B3261E' },
    background: {
      default: '#FEF7FF',
      paper: '#F3EDF7',
    },
  },
  shape: { borderRadius: 20 }, // M3 Large radius
  typography: {
    fontFamily: '"Roboto", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={m3Theme}>
      {/* Your M3-styled components */}
    </ThemeProvider>
  );
}
```

**Using `@material/web` in React** (alternative):
```jsx
// Client component (Next.js or Vite)
'use client';
import '@material/web/button/filled-button.js';

export function M3Button({ children }) {
  return <md-filled-button>{children}</md-filled-button>;
}
```

React wrappers: `material-web-components-react` provides thin React abstractions over `@material/web`.

**Resources**:
- MUI: https://mui.com/material-ui/
- MUI + Next.js: https://mui.com/material-ui/integrations/nextjs/
- M3 adoption issue: https://github.com/mui/material-ui/issues/29345

---

### Angular — Angular Material (Official)

Angular Material (`@angular/material`) has first-class M3 support since v17.2+. The Angular team works closely with Google's Material team. Full M3 theming via design tokens, SCSS mixins, and CLI schematics.

**When to use**: Angular projects. This is the most official, well-integrated M3 implementation for any web framework.

**Install**:
```bash
ng add @angular/material
```

**Generate M3 theme**:
```bash
ng generate @angular/material:m3-theme
```

**Theme setup** (SCSS):
```scss
@use '@angular/material' as mat;
@include mat.core();

$my-theme: mat.define-theme((
  color: (
    theme-type: light,
    primary: #6750A4,
    secondary: #625B71,
    tertiary: #7D5260,
  ),
));

:root {
  @include mat.all-component-themes($my-theme);
  color-scheme: light;
}

// Dark theme
html.dark-theme {
  @include mat.all-component-colors($dark-theme);
  color-scheme: dark;
}
```

**Component usage**:
```html
<button mat-raised-button color="primary">Filled Button</button>
<mat-form-field>
  <mat-label>Email</mat-label>
  <input matInput />
</mat-form-field>
```

**Resources**:
- Guide: https://material.angular.dev/guide/theming
- M3 migration: https://v17.material.angular.dev/guide/material-3
- Design tokens: https://konstantin-denerz.com/angular-material-3-theming-design-tokens-and-system-variables/

---

### Vue — Vuetify 3

Vuetify 3 is the leading Material Design library for Vue.js with strong M3 support. Dynamic color theming, M3-aligned components, design tokens, and accessibility are built in.

**When to use**: Vue.js projects. Enterprise-ready M3 with excellent documentation, component library, and active development.

**Install**:
```bash
npm install vuetify
```

**Setup**:
```js
// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#6750A4',
          secondary: '#625B71',
          'surface-variant': '#E7E0EC',
          error: '#B3261E',
          background: '#FEF7FF',
          surface: '#FEF7FF',
        },
      },
      dark: {
        colors: {
          primary: '#D0BCFF',
          secondary: '#CCC2DC',
          background: '#141218',
          surface: '#141218',
        },
      },
    },
  },
});
```

**Component usage**:
```vue
<template>
  <v-btn color="primary" rounded="pill">Filled Button</v-btn>
  <v-card rounded="lg" elevation="1">
    <v-card-title>Card Title</v-card-title>
    <v-card-text>Card content following M3 specs</v-card-text>
  </v-card>
  <v-text-field label="Email" variant="outlined" />
</template>
```

**Resources**:
- Documentation: https://vuetifyjs.com/
- M3 adaptation guide: https://store.vuetifyjs.com/blogs/vuetify-blog/material-design-3-how-to-adapt-to-the-next-generation-of-interfaces

---

### Svelte — SMUI (Svelte Material UI)

SMUI wraps Google's MDC-Web foundation logic in Svelte-native components. Evolving towards M3 with MDC v10 integration. Svelte 5 compatible (v8+).

**When to use**: Svelte/SvelteKit projects. Best Material library for Svelte, though M3 coverage is not as complete as Angular Material or Vuetify.

**Install**:
```bash
npm install svelte-material-ui
```

**Usage**:
```svelte
<script>
  import Button from '@smui/button';
  import Card from '@smui/card';
  import Textfield from '@smui/textfield';
</script>

<Button variant="raised">Filled Button</Button>

<Card>
  <div class="card-content">
    <h2>Card Title</h2>
    <p>Card content</p>
  </div>
</Card>

<Textfield variant="outlined" label="Email" />
```

**Alternative — use `@material/web` directly in Svelte**:
```svelte
<script>
  import '@material/web/button/filled-button.js';
</script>

<md-filled-button>Click me</md-filled-button>
```

Svelte has excellent Custom Elements support, making `@material/web` components easy to use directly.

**Resources**:
- SMUI: https://sveltematerialui.com/
- GitHub: https://github.com/hperrin/svelte-material-ui

---

### Tailwind CSS — M3 Tokens Integration

Tailwind CSS can integrate M3 design tokens by mapping them to Tailwind's theme configuration. Use the `tailwind-material-3` plugin or manually map tokens.

**When to use**: Projects already using Tailwind CSS where you want M3's design language without switching to a component library. Great for utility-first M3 styling.

**Plugin approach**:
```bash
npm install tailwind-material-3
```

```js
// tailwind.config.js
const m3Plugin = require('tailwind-material-3');

module.exports = {
  plugins: [m3Plugin],
  // M3 tokens are now available as Tailwind utilities
};
```

**Manual token mapping**:
```css
/* globals.css */
:root {
  --color-primary: #6750A4;
  --color-on-primary: #FFFFFF;
  --color-surface: #FEF7FF;
  --color-on-surface: #1D1B20;
}
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
      },
      borderRadius: {
        'md3-sm': '8px',
        'md3-md': '12px',
        'md3-lg': '20px',
        'md3-xl': '32px',
        'md3-full': '9999px',
      },
    },
  },
};
```

**Usage**:
```html
<button class="bg-primary text-on-primary rounded-md3-full px-6 py-2.5 
               text-sm font-medium tracking-wide">
  Filled Button
</button>
```

**Resources**:
- Plugin: https://github.com/rinturaj/tailwind-material-3
- Token mapping guide: https://nicolalazzari.ai/articles/integrating-design-tokens-with-tailwind-css

---

### Next.js — MUI + SSR

For Next.js App Router with React Server Components, use MUI with the `@mui/material-nextjs` integration package for proper SSR/streaming support.

**When to use**: Next.js projects that need M3 styling with server-side rendering and React Server Components.

**Install**:
```bash
npm install @mui/material @emotion/react @emotion/styled @mui/material-nextjs
```

**Layout setup**:
```tsx
// app/layout.tsx
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { m3Theme } from './theme';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={m3Theme}>
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
```

**Alternative — `@material/web` in Next.js**:
```tsx
// components/M3Button.tsx (client component)
'use client';
import '@material/web/button/filled-button.js';

export function M3Button({ children }) {
  return <md-filled-button>{children}</md-filled-button>;
}

// app/page.tsx (server component)
import { M3Button } from '@/components/M3Button';

export default function Page() {
  return <M3Button>Click me</M3Button>;
}
```

**Resources**:
- MUI + Next.js: https://mui.com/material-ui/integrations/nextjs/

---

### Flutter

Flutter has built-in M3 support since version 3.16. The `material` library provides M3 components, dynamic color, and theming. Full M3 Expressive support is being developed as modular packages (`m3e_design`).

**When to use**: Cross-platform mobile/web/desktop apps using Flutter.

**Setup**:
```dart
MaterialApp(
  theme: ThemeData(
    useMaterial3: true,
    colorSchemeSeed: const Color(0xFF6750A4),
  ),
  darkTheme: ThemeData(
    useMaterial3: true,
    brightness: Brightness.dark,
    colorSchemeSeed: const Color(0xFF6750A4),
  ),
  home: const MyApp(),
);
```

**M3 Expressive package**:
```yaml
# pubspec.yaml
dependencies:
  m3e_design: ^latest
```

**Resources**:
- Flutter M3 guide: https://docs.flutter.dev/ui/design/material
- M3 for Flutter: https://m3.material.io/develop/flutter
- M3 Expressive tracking: https://github.com/flutter/flutter/issues/168813

---

### Ink (React CLI) — Terminal UI with M3 Tokens

Ink is a React renderer for building interactive command-line interfaces. Combined with `@inkjs/ui`, it provides themeable CLI components. M3 design tokens can be mapped to terminal colors for consistent, Material-styled CLI experiences.

**When to use**: Node.js CLI tools, developer tooling, interactive terminal applications where you want M3-consistent styling in the terminal.

**Install**:
```bash
npm install ink react @inkjs/ui
```

**M3 theme setup**:
```jsx
// m3-theme.js — Map M3 tokens to terminal colors
export const m3Theme = {
  colors: {
    primary: '#6750A4',
    onPrimary: '#FFFFFF',
    secondary: '#625B71',
    tertiary: '#7D5260',
    error: '#B3261E',
    surface: '#FEF7FF',
    onSurface: '#1D1B20',
    outline: '#79747E',
    // Terminal-friendly named colors (for broader compatibility)
    primaryTerminal: 'magenta',
    secondaryTerminal: 'gray',
    errorTerminal: 'red',
    successTerminal: 'green',
  },
};

// For dark terminal backgrounds
export const m3ThemeDark = {
  colors: {
    primary: '#D0BCFF',
    onPrimary: '#381E72',
    secondary: '#CCC2DC',
    error: '#F2B8B5',
    surface: '#141218',
    onSurface: '#E6E0E9',
    primaryTerminal: 'magentaBright',
    errorTerminal: 'redBright',
  },
};
```

**Using M3 tokens with Ink components**:
```jsx
import React from 'react';
import {render, Box, Text} from 'ink';
import {TextInput, Select, Spinner, Badge} from '@inkjs/ui';
import {m3Theme} from './m3-theme.js';

function App() {
  return (
    <Box flexDirection="column" padding={1} gap={1}>
      {/* M3 Primary colored heading */}
      <Text color={m3Theme.colors.primary} bold>
        ✦ Material Design 3 CLI
      </Text>

      {/* M3 Surface container */}
      <Box
        borderStyle="round"
        borderColor={m3Theme.colors.outline}
        paddingX={2}
        paddingY={1}
        flexDirection="column"
        gap={1}
      >
        <Text color={m3Theme.colors.onSurface}>
          Welcome to the M3-styled terminal
        </Text>

        <TextInput
          placeholder="Enter your name..."
          onSubmit={name => {}}
        />

        <Select
          options={[
            {label: 'Option 1', value: '1'},
            {label: 'Option 2', value: '2'},
          ]}
          onChange={value => {}}
        />
      </Box>

      {/* M3 Status indicators */}
      <Box gap={1}>
        <Badge color="green">Success</Badge>
        <Badge color={m3Theme.colors.errorTerminal}>Error</Badge>
      </Box>

      <Spinner label="Loading..." />
    </Box>
  );
}

render(<App />);
```

**Using `@inkjs/ui` ThemeProvider for M3**:
```jsx
import {ThemeProvider, extendTheme} from '@inkjs/ui';

const m3InkTheme = extendTheme({
  components: {
    TextInput: {
      styles: {
        focusColor: 'magenta', // M3 primary
      },
    },
    Select: {
      styles: {
        highlightColor: 'magenta',
      },
    },
    Spinner: {
      styles: {
        color: 'magenta',
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={m3InkTheme}>
      {/* All child components use M3-inspired theme */}
    </ThemeProvider>
  );
}
```

**Terminal color considerations**:
- Modern terminals support 24-bit (true color) via hex values — use full M3 hex tokens
- For legacy terminals (256/16 color), map M3 roles to named ANSI colors:
  - Primary → `magenta` (closest to M3 purple primary)
  - Secondary → `gray`
  - Tertiary → `cyan`
  - Error → `red`
  - Success → `green` (custom role for CLI)
- Detect color support with `chalk.level` or `supports-color` package
- Always provide fallback named colors for maximum compatibility

**M3 component mapping for CLI**:

| M3 Component | Ink/ink-ui Equivalent | Notes |
|--------------|----------------------|-------|
| Filled Button | `<Box>` + `<Text>` styled | Background color + text |
| Text Field | `<TextInput>` | From `@inkjs/ui` |
| Select / Menu | `<Select>` | From `@inkjs/ui` |
| Multi-select | `<MultiSelect>` | From `@inkjs/ui` |
| Progress Indicator | `<Spinner>`, `<ProgressBar>` | From `@inkjs/ui` |
| Badge / Chip | `<Badge>` | From `@inkjs/ui` |
| Confirm Dialog | `<ConfirmInput>` | From `@inkjs/ui` |
| Card | `<Box borderStyle="round">` | Bordered container |
| Divider | `<Text>{'─'.repeat(n)}</Text>` | Horizontal rule |
| List | `<UnorderedList>`, `<OrderedList>` | From `@inkjs/ui` |
| Alert / Snackbar | `<Alert>` | From `@inkjs/ui` |

**Resources**:
- Ink: https://github.com/vadimdemedes/ink
- Ink UI components: https://github.com/vadimdemedes/ink-ui
- npm (ink): https://www.npmjs.com/package/ink
- npm (@inkjs/ui): https://www.npmjs.com/package/@inkjs/ui

---

### Android — Jetpack Compose Material 3

Jetpack Compose has the most complete M3 implementation, including M3 Expressive components. Full dynamic color (Material You) support on Android 12+.

**When to use**: Native Android development.

**Setup**:
```kotlin
// build.gradle
implementation("androidx.compose.material3:material3:1.4.0")
```

```kotlin
MaterialTheme(
    colorScheme = dynamicLightColorScheme(context),
    typography = Typography,
    shapes = Shapes
) {
    // Your Compose UI
}
```

**M3 Expressive components** (Android 16+):
- `ExpressiveButton`, `SplitButton`, `FloatingToolbar`, `FABMenu`
- Enhanced progress indicators, animated sliders, carousel

**Resources**:
- Guide: https://developer.android.com/develop/ui/compose/designsystems/material3
- M3 Compose: https://m3.material.io/develop/android/jetpack-compose
- Compose Material 3 releases: https://developer.android.com/jetpack/androidx/releases/compose-material3

---

### Choosing the Right Stack

**Decision guide**:

| If your project uses... | Recommended M3 library | Why |
|-------------------------|----------------------|-----|
| No framework (vanilla) | CSS custom properties | Full control, zero dependencies |
| React | MUI v6 (or `@material/web` via wrappers) | Largest ecosystem, best SSR support with Next.js |
| Angular | `@angular/material` | Official, best M3 integration of any web framework |
| Vue | Vuetify 3 | Enterprise-ready, excellent documentation |
| Svelte | SMUI or `@material/web` directly | Best available for Svelte ecosystem |
| Tailwind CSS | `tailwind-material-3` plugin | Keeps utility-first approach with M3 tokens |
| Any framework | `@material/web` | Official, framework-agnostic web components |
| Flutter | Built-in `material` library | Official, cross-platform |
| Android | Jetpack Compose Material 3 | Official, most complete M3 implementation |
| Ink (CLI) | `ink` + `@inkjs/ui` | React-based, themeable, M3 token-compatible |

**Tips for choosing**:
1. **Angular projects**: Use `@angular/material` — it has the best official M3 support of any web framework
2. **React projects**: Use MUI for the best React experience, or `@material/web` for official Google components
3. **Vue projects**: Use Vuetify 3 — mature, well-documented, actively developed
4. **Framework-agnostic**: Use `@material/web` or vanilla CSS custom properties
5. **Prototype quickly**: Use Beer CSS (CSS-only) or `@material/web` via CDN
6. **Need Tailwind**: Map M3 tokens to Tailwind config or use the plugin
7. **Mobile + Web**: Use Flutter for cross-platform M3
8. **CLI / Terminal**: Use Ink with `@inkjs/ui` and map M3 color tokens to terminal colors

## Resources

### Material Design 3 Skills Available

- `material-design-3-color` - Color palettes, theming, accessibility, fixed accents, contrast levels
- `material-design-3-motion` - Animations, transitions, micro-interactions, spring physics, haptics
- `material-design-3-typography` - Type scale (30 styles), fonts, hierarchy, emphasized variants
- `material-design-3-shape` - Border radius, containment, morphing, 35 expressive shapes
- `material-design-3-layout` - Spacing, grids, responsive design, background blur, interaction states
- `material-design-3-components` - Complete component catalog with specs and implementation
- `material-design-3-icons` - Material Symbols, variable font axes, icon accessibility

### External Resources

- **Official M3 Site**: https://m3.material.io/
- **M3 Components**: https://m3.material.io/components
- **M3 Styles**: https://m3.material.io/styles
- **M3 Foundations**: https://m3.material.io/foundations
- **Material Theme Builder**: https://m3.material.io/theme-builder
- **Material Symbols**: https://fonts.google.com/icons
- **Figma M3 Kit**: Official design resources
- **M3 for Android**: https://m3.material.io/develop/android/jetpack-compose
- **M3 for Flutter**: https://m3.material.io/develop/flutter
- **M3 for Web**: https://material-web.dev/
- **Beer CSS** (CSS-only M3): https://www.beercss.com/
- **MUI** (React): https://mui.com/material-ui/
- **Angular Material**: https://material.angular.dev/
- **Vuetify** (Vue): https://vuetifyjs.com/
- **SMUI** (Svelte): https://sveltematerialui.com/
- **Tailwind M3 Plugin**: https://github.com/rinturaj/tailwind-material-3

## Checklist for Material Design 3 Projects

Starting a new M3 project? Follow this checklist:

### Foundation
- [ ] Review this guide to understand the seven pillars
- [ ] Set up color system using `material-design-3-color`
- [ ] Define typography using `material-design-3-typography`
- [ ] Create shape tokens using `material-design-3-shape`
- [ ] Load Material Symbols using `material-design-3-icons`
- [ ] Establish spacing/layout system using `material-design-3-layout`

### Implementation
- [ ] Build components using `material-design-3-components` specs
- [ ] Implement both light and dark themes
- [ ] Add motion and transitions using `material-design-3-motion`
- [ ] Test on multiple screen sizes (responsive)
- [ ] Verify accessibility (contrast, sizing, motion preferences)

### M3 Expressive Enhancements (Optional)
- [ ] Add emphasized type styles for key moments
- [ ] Use expressive shapes for decorative delight
- [ ] Switch to expressive motion mode for hero interactions
- [ ] Implement fixed accent colors for branding
- [ ] Add contrast level support
- [ ] Use new components (split buttons, button groups, toolbars)
- [ ] Add background blur for overlays and navigation

### Quality Assurance
- [ ] All colors use semantic tokens (no hard-coded hex)
- [ ] All text uses the type scale (baseline or emphasized)
- [ ] All shapes use the shape scale
- [ ] All animations use spring physics
- [ ] All spacing uses the spacing scale
- [ ] All icons use Material Symbols with correct axes
- [ ] Dark mode works correctly
- [ ] Reduced motion is respected
- [ ] Touch targets are 48×48dp minimum
- [ ] Text contrast meets WCAG AA (4.5:1)
- [ ] All components have proper interaction states
- [ ] Fixed accent colors remain consistent across themes

## Summary

Material Design 3 is a complete design system covering the full specification from Material You foundations through M3 Expressive enhancements. It is built on seven interconnected pillars, each with a dedicated skill:

1. **Color** - The palette, themes, and accessibility
2. **Motion** - The behavior, physics, and haptics
3. **Typography** - The voice, hierarchy, and emphasis
4. **Shape** - The personality, form, and expression
5. **Layout** - The structure, depth, and containment
6. **Components** - The building blocks and interactions
7. **Icons** - The visual language and symbols

Use this guide to understand which skill to apply for your specific needs, and remember that M3 works best when all seven pillars work together in harmony.
