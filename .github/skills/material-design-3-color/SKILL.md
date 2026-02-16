---
name: material-design-3-color
description: Applies Material Design 3 Expressive dynamic color and theming principles to user interfaces. Use this when working on color palettes, themes, dynamic color systems, accessibility, or when the user asks to apply Material Design 3 color guidelines to a design or application.
license: Apache-2.0
---

# Material Design 3 Color and Dynamic Theming

## Overview

This skill guides the application of Material Design 3 (M3) Expressive color and theming principles to create vibrant, accessible, and emotionally engaging user interfaces.

**Keywords**: Material Design 3, M3, dynamic color, theming, color palette, Material You, accessibility, color tokens, surface colors, accent colors

## Core Principles

### Dynamic Color System

Material Design 3's color system is built on the concept of dynamic color, allowing interfaces to adapt to user preferences and contexts:

1. **Tonal Palettes**: Use five key tonal palettes (Primary, Secondary, Tertiary, Neutral, Neutral Variant) with multiple tones (0-100)
2. **Color Roles**: Map color roles to UI elements (e.g., primary, onPrimary, primaryContainer, onPrimaryContainer)
3. **Adaptive Theming**: Support both light and dark themes with appropriate contrast
4. **User Personalization**: Allow color schemes to adapt based on user wallpaper or preferences (Material You)

### Color Palette Structure

When creating color palettes, follow this structure:

**Primary Palette** (Main brand color):
- Primary: Main interactive elements (buttons, active states)
- On Primary: Text/icons on primary color
- Primary Container: Standout fill color for key components
- On Primary Container: Text/icons on primary container

**Secondary Palette** (Complementary accent):
- Secondary: Less prominent components
- On Secondary: Text/icons on secondary
- Secondary Container: Tinted backgrounds
- On Secondary Container: Text/icons on secondary container

**Tertiary Palette** (Contrasting accent):
- Tertiary: Contrasting accents and highlights
- On Tertiary: Text/icons on tertiary
- Tertiary Container: Input elements
- On Tertiary Container: Text/icons on tertiary container

**Neutral Palettes** (Surfaces and backgrounds):
- Surface: Default background for components
- On Surface: Text on surface
- Surface Variant: Alternate surface color
- On Surface Variant: Text on surface variant
- Outline: Borders and dividers
- Outline Variant: Decorative elements

**Error/Warning/Success** (Feedback colors):
- Error, Warning, Success with corresponding "On" colors

### Accessibility Guidelines

1. **Contrast Requirements**:
   - Text contrast: Minimum 4.5:1 for body text, 3:1 for large text (WCAG AA)
   - Interactive elements: Minimum 3:1 contrast with background
   - Use "On" colors to ensure proper contrast

2. **Color Independence**:
   - Never rely solely on color to convey information
   - Use icons, text labels, or patterns alongside color
   - Ensure color-blind friendly combinations

3. **Dynamic Range**:
   - Light theme: Higher tones (90-99) for surfaces, lower tones (10-40) for emphasis
   - Dark theme: Lower tones (10-20) for surfaces, higher tones (80-90) for emphasis

## Implementation Guidelines

### Color Token System

Use CSS custom properties (variables) for all colors:

```css
:root {
  /* Primary */
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
  --md-sys-color-primary-container: #EADDFF;
  --md-sys-color-on-primary-container: #21005D;
  
  /* Secondary */
  --md-sys-color-secondary: #625B71;
  --md-sys-color-on-secondary: #FFFFFF;
  --md-sys-color-secondary-container: #E8DEF8;
  --md-sys-color-on-secondary-container: #1D192B;
  
  /* Tertiary */
  --md-sys-color-tertiary: #7D5260;
  --md-sys-color-on-tertiary: #FFFFFF;
  --md-sys-color-tertiary-container: #FFD8E4;
  --md-sys-color-on-tertiary-container: #31111D;
  
  /* Surfaces */
  --md-sys-color-surface: #FEF7FF;
  --md-sys-color-on-surface: #1D1B20;
  --md-sys-color-surface-variant: #E7E0EC;
  --md-sys-color-on-surface-variant: #49454F;
  
  /* Outlines */
  --md-sys-color-outline: #79747E;
  --md-sys-color-outline-variant: #CAC4D0;
  
  /* Error */
  --md-sys-color-error: #B3261E;
  --md-sys-color-on-error: #FFFFFF;
  --md-sys-color-error-container: #F9DEDC;
  --md-sys-color-on-error-container: #410E0B;
}

[data-theme="dark"] {
  /* Primary */
  --md-sys-color-primary: #D0BCFF;
  --md-sys-color-on-primary: #381E72;
  --md-sys-color-primary-container: #4F378B;
  --md-sys-color-on-primary-container: #EADDFF;
  
  /* Secondary */
  --md-sys-color-secondary: #CCC2DC;
  --md-sys-color-on-secondary: #332D41;
  --md-sys-color-secondary-container: #4A4458;
  --md-sys-color-on-secondary-container: #E8DEF8;
  
  /* Tertiary */
  --md-sys-color-tertiary: #EFB8C8;
  --md-sys-color-on-tertiary: #492532;
  --md-sys-color-tertiary-container: #633B48;
  --md-sys-color-on-tertiary-container: #FFD8E4;
  
  /* Surfaces */
  --md-sys-color-surface: #1D1B20;
  --md-sys-color-on-surface: #E6E0E9;
  --md-sys-color-surface-variant: #49454F;
  --md-sys-color-on-surface-variant: #CAC4D0;
  
  /* Outlines */
  --md-sys-color-outline: #938F99;
  --md-sys-color-outline-variant: #49454F;
  
  /* Error */
  --md-sys-color-error: #F2B8B5;
  --md-sys-color-on-error: #601410;
  --md-sys-color-error-container: #8C1D18;
  --md-sys-color-on-error-container: #F9DEDC;
}
```

### Color Application

1. **Interactive Elements**:
   - Filled buttons: Use primary color with on-primary text
   - Outlined buttons: Use outline with primary text
   - Text buttons: Use primary text only
   - FABs: Use primary-container with on-primary-container

2. **Surfaces**:
   - Main background: surface
   - Elevated components (cards, dialogs): surface with elevation tint
   - Input fields: surface-variant

3. **State Layers**:
   - Hover: Apply 8% opacity layer of on-surface
   - Focus: Apply 12% opacity layer of on-surface
   - Pressed: Apply 12% opacity layer of on-surface
   - Dragged: Apply 16% opacity layer of on-surface

### Dynamic Color Generation

When generating color schemes from a source color:

1. **Extract Core Hue**: Identify the dominant hue from the source (e.g., user wallpaper)
2. **Generate Tonal Palettes**: Create five tonal palettes using HCT (Hue, Chroma, Tone) color space
3. **Assign Color Roles**: Map generated tones to semantic color roles
4. **Validate Contrast**: Ensure all role pairs meet accessibility requirements
5. **Support Themes**: Generate both light and dark variants

### Best Practices

1. **Semantic Naming**: Always use semantic color tokens (e.g., `primary`, `error`) rather than literal colors (e.g., `blue`, `red`)
2. **Consistent Application**: Apply colors consistently across all components
3. **Elevation Tinting**: Add subtle tint to elevated surfaces using primary color at very low opacity
4. **Color Hierarchy**: Use primary for main actions, secondary for less important actions, tertiary for contrast
5. **Test Both Themes**: Always test in both light and dark modes
6. **Vibrant Expression**: In M3 Expressive, embrace richer, more vibrant colors while maintaining accessibility
7. **Context Awareness**: Adapt color intensity and palette based on app context and user preferences

## Tools and Resources

- **Material Theme Builder**: Use to generate complete color schemes from source colors
- **Color Contrast Checker**: Validate WCAG compliance for all text and interactive elements
- **HCT Color Space**: Leverage for perceptually uniform color generation
- **CSS Custom Properties**: Implement dynamic theming with CSS variables and data attributes

## Common Pitfalls to Avoid

1. ❌ Hard-coding color values instead of using tokens
2. ❌ Using only one color for all states (no hover, focus, pressed variations)
3. ❌ Ignoring dark theme or treating it as an afterthought
4. ❌ Insufficient contrast between text and background
5. ❌ Overusing accent colors (they should be used sparingly for emphasis)
6. ❌ Not testing with actual user-generated color schemes
7. ❌ Relying only on color to communicate state or information

## Checklist for Color Implementation

When implementing M3 color systems, ensure:

- [ ] All five tonal palettes are defined (Primary, Secondary, Tertiary, Neutral, Neutral Variant)
- [ ] Both light and dark themes are implemented
- [ ] All color pairs meet WCAG contrast requirements
- [ ] Semantic color tokens are used throughout (no hard-coded hex values)
- [ ] State layers (hover, focus, pressed) are implemented with appropriate opacity
- [ ] Elevation tinting is applied to raised surfaces
- [ ] Color scheme can be dynamically generated from user source colors
- [ ] All components use color roles consistently
- [ ] Color is not the only indicator of state or information
- [ ] Documentation includes color token reference and usage guidelines
