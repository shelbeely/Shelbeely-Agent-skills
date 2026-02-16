---
name: material-design-3-guide
description: Master guide for Material Design 3 Expressive that explains when to use each Material Design 3 skill subset (color, motion, typography, shape, layout). Use this when starting a Material Design 3 project, when you need to understand which M3 skill to apply, or when the user asks about Material Design 3 in general.
license: Apache-2.0
---

# Material Design 3 Expressive Guide

## Overview

This is the master guide for implementing Material Design 3 (M3) Expressive design principles. It explains the overall system and directs you to specialized skills for each aspect of Material Design 3.

**Keywords**: Material Design 3, M3, Material Design, design system, Google design, Material You, expressive design, UI design

## What is Material Design 3 Expressive?

Material Design 3 Expressive is Google's latest evolution of its design system, focused on creating digital products that are:
- **Usable**: Clear, intuitive, and accessible
- **Beautiful**: Visually striking and polished
- **Emotionally Engaging**: Memorable and delightful
- **Adaptive**: Personalized to user preferences (Material You)

M3 Expressive builds on dynamic color, expressive motion, flexible typography, distinctive shapes, and thoughtful layout to create interfaces that feel alive and responsive.

## The Five Pillars of Material Design 3

Material Design 3 Expressive is built on five interconnected design pillars:

### 1. Color and Dynamic Theming
**What**: Vibrant, adaptive color systems with proper contrast and accessibility
**Use the `material-design-3-color` skill when**:
- Setting up color palettes or themes
- Implementing dynamic color (Material You)
- Working with primary, secondary, tertiary color roles
- Ensuring color accessibility and contrast
- Creating light and dark themes
- Defining color tokens and variables
- Applying state layers (hover, focus, pressed)
- Implementing elevation tinting

**Key concepts**: Tonal palettes, color roles, dynamic color, accessibility, theming

### 2. Motion and Animation
**What**: Spring-based, natural animations that guide attention and provide feedback
**Use the `material-design-3-motion` skill when**:
- Adding transitions between screens or states
- Implementing micro-interactions (hover, focus, press)
- Creating page or view transitions
- Animating component states
- Building loading states or progress indicators
- Implementing ripple effects
- Creating stagger animations for lists
- Morphing containers or shapes
- Ensuring animations feel natural and springy

**Key concepts**: Spring physics, easing curves, duration, transitions, micro-interactions

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
- Styling headings, body text, or labels

**Key concepts**: Type scale, variable fonts, hierarchy, readability, Roboto

### 4. Shape and Containment
**What**: Rounded corners and morphing shapes that create personality and hierarchy
**Use the `material-design-3-shape` skill when**:
- Defining border radius for components
- Creating rounded corners on cards, buttons, dialogs
- Implementing shape tokens
- Morphing shapes between states
- Working with containers and containment
- Styling buttons, FABs, chips, or input fields
- Creating custom shapes or cutouts
- Grouping components with shared edges

**Key concepts**: Border radius, shape scale, morphing, containment, rounded corners

### 5. Layout and Size Hierarchy
**What**: Strategic use of spacing and size to create visual flow and emphasis
**Use the `material-design-3-layout` skill when**:
- Setting up page layouts and grids
- Defining spacing systems
- Creating responsive layouts
- Implementing size-based hierarchy
- Working with breakpoints
- Positioning components
- Creating visual emphasis through size
- Implementing elevation and depth

**Key concepts**: Spacing scale, grid systems, responsive design, visual hierarchy

## When to Use Which Skill

### Starting a New Material Design 3 Project

**Step 1: Color Foundation**
- Use `material-design-3-color` first
- Set up your color palette and theme
- Define all color tokens (primary, secondary, tertiary, surfaces)
- Implement both light and dark themes

**Step 2: Typography System**
- Use `material-design-3-typography`
- Define your type scale and font families
- Set up typography tokens
- Choose Roboto or custom brand fonts

**Step 3: Shape System**
- Use `material-design-3-shape`
- Define shape tokens for all corner radii
- Set up component-specific shapes

**Step 4: Layout Foundation**
- Use `material-design-3-layout`
- Set up spacing scale and grid system
- Define breakpoints for responsive design

**Step 5: Add Motion**
- Use `material-design-3-motion`
- Implement transitions and animations
- Add micro-interactions to interactive elements

### Working on Specific Components

**Buttons**:
- Shape: `material-design-3-shape` (full radius, pill shape)
- Color: `material-design-3-color` (primary/secondary/tertiary)
- Typography: `material-design-3-typography` (label-large)
- Motion: `material-design-3-motion` (hover, focus, press states)
- Layout: `material-design-3-layout` (spacing, sizing)

**Cards**:
- Shape: `material-design-3-shape` (medium radius, 12dp)
- Color: `material-design-3-color` (surface colors, elevation tint)
- Typography: `material-design-3-typography` (title + body text)
- Motion: `material-design-3-motion` (elevation change on hover)
- Layout: `material-design-3-layout` (padding, content flow)

**Dialogs/Modals**:
- Shape: `material-design-3-shape` (extra-large radius, 28dp)
- Color: `material-design-3-color` (surface colors)
- Typography: `material-design-3-typography` (headline + body)
- Motion: `material-design-3-motion` (enter/exit animations)
- Layout: `material-design-3-layout` (centered, max-width)

**Navigation**:
- Color: `material-design-3-color` (surface variant, active states)
- Typography: `material-design-3-typography` (label-large)
- Shape: `material-design-3-shape` (indicators, pills)
- Motion: `material-design-3-motion` (transition animations)
- Layout: `material-design-3-layout` (nav structure)

**Forms/Inputs**:
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
4. Add `material-design-3-motion` - implement spring animations
5. Apply `material-design-3-layout` - ensure proper spacing

**"Add Material Design animations"**:
- Primarily use `material-design-3-motion`
- May need `material-design-3-color` for state layers
- May need `material-design-3-shape` for morphing shapes

**"Fix Material Design colors"**:
- Use `material-design-3-color` exclusively
- Focus on color roles, contrast, and theming

**"Style this button/card/dialog"**:
- Check the component guide above
- Usually need 2-3 skills (shape + color + typography)

**"Make it responsive"**:
- Primarily `material-design-3-layout`
- May need `material-design-3-typography` for responsive text
- May need `material-design-3-shape` for responsive radii

**"Implement dark mode"**:
- Use `material-design-3-color` for theme switching
- Ensure all color tokens are defined for both themes

## Integration Principles

### All Skills Work Together

Material Design 3 is a holistic system - the skills are designed to be used together:

- **Color** defines the palette
- **Typography** defines the text
- **Shape** defines the form
- **Motion** defines the behavior
- **Layout** defines the structure

### Consistency is Key

When using multiple skills:
- Use tokens/variables defined in each skill
- Don't hard-code values
- Maintain consistency across all design aspects
- Test the combined result, not just individual parts

### Example: Complete Button Implementation

```css
/* Uses all five skills */
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
```

## Quick Reference

### Which Skill for Which Property?

| Property | Skill |
|----------|-------|
| `color`, `background-color` | material-design-3-color |
| `font-size`, `font-family`, `line-height`, `font-weight`, `letter-spacing` | material-design-3-typography |
| `border-radius` | material-design-3-shape |
| `transition`, `animation`, `@keyframes` | material-design-3-motion |
| `margin`, `padding`, `gap`, `width`, `height`, `display`, `grid` | material-design-3-layout |
| `box-shadow` (elevation) | material-design-3-layout (+ motion for transitions) |

### File Organization

When implementing M3, organize your code:

```
styles/
├── tokens/
│   ├── color.css          # From material-design-3-color
│   ├── typography.css     # From material-design-3-typography
│   ├── shape.css          # From material-design-3-shape
│   ├── motion.css         # From material-design-3-motion
│   └── layout.css         # From material-design-3-layout
├── components/
│   ├── button.css         # Uses all skills
│   ├── card.css          # Uses all skills
│   └── dialog.css        # Uses all skills
└── main.css              # Imports all tokens
```

## Best Practices

### Do's

1. ✅ **Use all five pillars** - M3 works best when all aspects are implemented
2. ✅ **Start with tokens** - Define all design tokens before building components
3. ✅ **Follow the skills** - Each skill provides tested, research-backed guidelines
4. ✅ **Test accessibility** - All skills include accessibility requirements
5. ✅ **Support both themes** - Always implement light and dark modes
6. ✅ **Use semantic names** - Use token names, not hard-coded values
7. ✅ **Be consistent** - Apply the same patterns across all components

### Don'ts

1. ❌ **Don't cherry-pick** - Using only color without shape/motion isn't really M3
2. ❌ **Don't hard-code** - Always use the defined tokens and variables
3. ❌ **Don't skip accessibility** - Contrast, sizing, and motion preferences matter
4. ❌ **Don't ignore dark mode** - It's a core part of M3
5. ❌ **Don't improvise values** - Use the scales provided in each skill
6. ❌ **Don't mix design systems** - Don't combine M3 with other design languages
7. ❌ **Don't forget motion** - Static M3 misses the "expressive" part

## Resources

### Material Design 3 Skills Available

- `material-design-3-color` - Color palettes, theming, accessibility
- `material-design-3-motion` - Animations, transitions, micro-interactions
- `material-design-3-typography` - Type scale, fonts, hierarchy
- `material-design-3-shape` - Border radius, containment, morphing
- `material-design-3-layout` - Spacing, grids, responsive design

### External Resources

- **Official M3 Site**: https://m3.material.io/
- **M3 Components**: https://m3.material.io/components
- **Material Theme Builder**: Online tool for generating M3 color schemes
- **Figma M3 Kit**: Official design resources
- **Android M3**: Material 3 implementation for Android

## Getting Help

### Choosing the Right Skill

**When in doubt**:
1. Read the skill descriptions (in the frontmatter)
2. Check the "Use when" sections in each skill
3. Look at the keywords listed in each skill's overview
4. Refer to the "Common Scenarios" section above

**For complete implementations**:
- Use all five skills together
- Start with color and typography (foundation)
- Add shape and layout (structure)
- Finish with motion (enhancement)

**For specific problems**:
- Identify which design aspect you're working on
- Use the "Quick Reference" table above
- Focus on the relevant skill(s)

## Checklist for Material Design 3 Projects

Starting a new M3 project? Follow this checklist:

### Foundation
- [ ] Review this guide to understand the five pillars
- [ ] Set up color system using `material-design-3-color`
- [ ] Define typography using `material-design-3-typography`
- [ ] Create shape tokens using `material-design-3-shape`
- [ ] Establish spacing/layout system using `material-design-3-layout`

### Implementation
- [ ] Build components using tokens from all skills
- [ ] Implement both light and dark themes
- [ ] Add motion and transitions using `material-design-3-motion`
- [ ] Test on multiple screen sizes (responsive)
- [ ] Verify accessibility (contrast, sizing, motion preferences)

### Quality Assurance
- [ ] All colors use semantic tokens (no hard-coded hex)
- [ ] All text uses the type scale
- [ ] All shapes use the shape scale
- [ ] All animations use spring physics
- [ ] All spacing uses the spacing scale
- [ ] Dark mode works correctly
- [ ] Reduced motion is respected
- [ ] Touch targets are 48×48dp minimum
- [ ] Text contrast meets WCAG AA (4.5:1)

## Summary

Material Design 3 Expressive is a complete design system built on five interconnected pillars. Each pillar has a dedicated skill in this repository:

1. **Color** - The palette and theme
2. **Motion** - The behavior and life
3. **Typography** - The voice and hierarchy  
4. **Shape** - The personality and form
5. **Layout** - The structure and flow

Use this guide to understand which skill to apply for your specific needs, and remember that M3 works best when all five pillars work together in harmony.
