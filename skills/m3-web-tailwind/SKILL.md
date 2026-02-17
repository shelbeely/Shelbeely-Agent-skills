---
name: m3-web-tailwind
description: Implement Material Design 3 with Tailwind CSS by mapping M3 design tokens to Tailwind's theme configuration. Covers the tailwind-material-3 plugin and manual token mapping. Use this when building M3-styled projects with Tailwind CSS.
license: Apache-2.0
---

# Material Design 3 — Tailwind CSS

## Overview

Tailwind CSS can integrate M3 design tokens by mapping them to Tailwind's theme configuration. Use the `tailwind-material-3` plugin or manually map tokens for a utility-first M3 styling approach.

**Keywords**: Material Design 3, M3, Tailwind CSS, tailwind-material-3, utility-first, design tokens, CSS variables

## When to Use

- Projects already using Tailwind CSS
- When you want M3's design language without switching to a component library
- Utility-first M3 styling

## Plugin Approach

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

## Manual Token Mapping

Define M3 tokens as CSS custom properties:

```css
/* globals.css */
:root {
  --color-primary: #6750A4;
  --color-on-primary: #FFFFFF;
  --color-primary-container: #EADDFF;
  --color-on-primary-container: #21005D;
  --color-secondary: #625B71;
  --color-on-secondary: #FFFFFF;
  --color-tertiary: #7D5260;
  --color-error: #B3261E;
  --color-surface: #FEF7FF;
  --color-on-surface: #1D1B20;
  --color-surface-variant: #E7E0EC;
  --color-on-surface-variant: #49454F;
  --color-outline: #79747E;
  --color-outline-variant: #CAC4D0;
}
```

Map to Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'on-primary': 'var(--color-on-primary)',
        'primary-container': 'var(--color-primary-container)',
        'on-primary-container': 'var(--color-on-primary-container)',
        secondary: 'var(--color-secondary)',
        'on-secondary': 'var(--color-on-secondary)',
        tertiary: 'var(--color-tertiary)',
        error: 'var(--color-error)',
        surface: 'var(--color-surface)',
        'on-surface': 'var(--color-on-surface)',
        'surface-variant': 'var(--color-surface-variant)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        outline: 'var(--color-outline)',
        'outline-variant': 'var(--color-outline-variant)',
      },
      borderRadius: {
        'md3-xs': '4px',
        'md3-sm': '8px',
        'md3-md': '12px',
        'md3-lg': '16px',
        'md3-xl': '28px',
        'md3-full': '9999px',
      },
    },
  },
};
```

## Component Examples

### Filled Button

```html
<button class="bg-primary text-on-primary rounded-md3-full px-6 py-2.5 
               text-sm font-medium tracking-wide hover:opacity-92
               disabled:bg-on-surface/12 disabled:text-on-surface/38">
  Filled Button
</button>
```

### Card

```html
<div class="bg-surface rounded-md3-md p-4 shadow-md">
  <h3 class="text-on-surface text-base font-medium">Title</h3>
  <p class="text-on-surface-variant text-sm">Content</p>
</div>
```

### Text Field (Outlined)

```html
<div class="relative">
  <input class="border border-outline rounded-md3-xs px-4 py-4 
                text-on-surface bg-transparent w-full
                focus:border-primary focus:border-2 focus:outline-none"
         placeholder="Email" />
</div>
```

### Chip

```html
<span class="inline-flex items-center border border-outline rounded-md3-sm
             px-3 py-1.5 text-sm text-on-surface-variant">
  Filter Chip
</span>
```

## Checklist

- [ ] M3 color tokens mapped to Tailwind theme (via plugin or manual config)
- [ ] M3 border radius scale added to Tailwind config
- [ ] Dark theme uses CSS custom property overrides
- [ ] Components use semantic token classes (not hard-coded colors)
- [ ] Hover/focus/disabled states use M3 opacity values

## Resources

- `tailwind.config.js` — Ready-to-use Tailwind config with M3 tokens (orange palette) included in this skill's directory. Copy into your project and customize.
- `material-theme-builder` skill — Generate a custom palette from any source color.
- Official M3 CSS tokens: https://github.com/material-foundation/material-tokens
- Plugin: https://github.com/rinturaj/tailwind-material-3
- Token mapping guide: https://nicolalazzari.ai/articles/integrating-design-tokens-with-tailwind-css
- Tailwind theme config: https://tailwindcss.com/docs/theme
