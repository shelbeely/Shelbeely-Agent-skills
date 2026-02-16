# Material Design 3 Skills Examples

This directory contains examples demonstrating how to use the Material Design 3 skills.

## Testing Skills Discoverability

To test if the skills are working with GitHub Copilot:

### Test 1: Color System
**Prompt**: "Create a Material Design 3 color token system with primary, secondary, and tertiary colors"
**Expected**: Copilot should load `material-design-3-color` skill and create CSS custom properties

### Test 2: Button Component
**Prompt**: "Create a Material Design 3 button component with all states"
**Expected**: Copilot should load multiple skills (color, shape, typography, motion) and create a complete button

### Test 3: Animation
**Prompt**: "Add Material Design 3 spring animations to this element"
**Expected**: Copilot should load `material-design-3-motion` skill and use spring-based easing

### Test 4: Typography
**Prompt**: "Set up Material Design 3 type scale"
**Expected**: Copilot should load `material-design-3-typography` skill and create the full type scale

### Test 5: Layout
**Prompt**: "Create a Material Design 3 responsive grid layout"
**Expected**: Copilot should load `material-design-3-layout` skill and create a responsive grid

## Example Files

Coming soon:
- `button.html` - Complete M3 button with all skills applied
- `card.html` - M3 card component
- `theme.css` - Complete M3 theme implementation
- `animations.html` - M3 motion examples

## How Skills Work

When you prompt GitHub Copilot with Material Design 3 related requests:

1. **Copilot analyzes your prompt** for keywords like "Material Design 3", "M3", "color palette", "animation", etc.
2. **Copilot reads skill descriptions** in `.github/skills/*/SKILL.md` files
3. **Copilot selects relevant skills** based on matching keywords and context
4. **Copilot loads the skill instructions** into its context
5. **Copilot generates code** following the guidelines in the loaded skills

## Skill Keywords Reference

| Skill | Keywords |
|-------|----------|
| material-design-3-guide | Material Design 3, M3, Material Design, design system |
| material-design-3-color | color, palette, theme, dynamic color, Material You, accessibility |
| material-design-3-motion | animation, transition, motion, spring, micro-interaction |
| material-design-3-typography | typography, type scale, font, text, Roboto, hierarchy |
| material-design-3-shape | shape, border-radius, rounded corners, containment |
| material-design-3-layout | layout, spacing, grid, responsive, breakpoint, elevation |

## Tips for Effective Prompts

**Good prompts** (will trigger skills):
- ✅ "Apply Material Design 3 colors to this component"
- ✅ "Add M3 spring animations"
- ✅ "Create an M3 card with proper spacing"
- ✅ "Set up Material Design 3 typography"

**Less effective prompts** (might not trigger skills):
- ❌ "Make it look nice" (too vague)
- ❌ "Add colors" (missing M3 context)
- ❌ "Animate this" (no M3 reference)

## Verifying Skills Are Loaded

When using GitHub Copilot:
1. The generated code should follow M3 patterns exactly
2. CSS should use token naming (e.g., `--md-sys-color-primary`)
3. Animations should use spring-based easing curves
4. Typography should use the M3 type scale
5. Shapes should use the M3 border radius scale

## Creating Your Own Examples

To create examples using these skills:

```bash
# Create a new file
touch examples/my-component.html

# Start with a prompt like:
# "Create a Material Design 3 card component with:"
# - Primary color scheme
# - Title and body text using M3 typography
# - Medium border radius (12dp)
# - Hover animation with elevation change
# - Responsive padding

# Copilot will load the relevant skills and generate compliant code
```
