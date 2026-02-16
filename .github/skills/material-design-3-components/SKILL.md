---
name: material-design-3-components
description: Comprehensive guide to Material Design 3 components — from baseline Material You through M3 Expressive. Covers action, containment, communication, navigation, selection, and text input components with specifications, states, and implementation guidelines. Use this when building or styling UI components following Material Design 3 guidelines.
license: Apache-2.0
---

# Material Design 3 Components

## Overview

This skill provides a comprehensive reference for all Material Design 3 (M3) components — covering the full specification from Material You foundations through M3 Expressive enhancements. Each component follows M3's token-based design system for color, shape, typography, motion, and layout.

**Keywords**: Material Design 3, M3, components, buttons, cards, dialogs, navigation, FAB, chips, text fields, tabs, menus, snackbar, bottom sheet, Material You, M3 Expressive

## Component Categories

M3 components are organized into six categories:

1. **Action** — Buttons, FABs, icon buttons, segmented buttons, split buttons, button groups
2. **Containment** — Cards, carousels, dividers, lists, bottom sheets, side sheets
3. **Communication** — Badges, dialogs, progress indicators, snackbars, tooltips
4. **Navigation** — App bars, navigation bar, navigation drawer, navigation rail, tabs, search
5. **Selection** — Checkboxes, chips, date/time pickers, menus, radio buttons, sliders, switches
6. **Text Input** — Text fields (filled, outlined)

---

## Action Components

### Buttons

M3 defines five button types with increasing emphasis:

| Type | Emphasis | Use |
|------|----------|-----|
| Text Button | Lowest | Optional actions, less important actions |
| Outlined Button | Low | Important but not primary actions |
| Tonal Button | Medium | Actions that need more emphasis than outlined |
| Filled Button | High | Primary actions, main CTA |
| Elevated Button | Medium | Actions on visually busy backgrounds |

**Common Button Specs**:
- Height: 40dp
- Min width: 48dp
- Padding: 24dp horizontal, 10dp vertical
- Shape: Full radius (pill)
- Typography: Label Large
- Icon gap: 8dp

```css
/* Filled Button */
.md3-button-filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  min-height: 40px;
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  font-weight: var(--md-sys-typescale-label-large-weight);
  letter-spacing: var(--md-sys-typescale-label-large-tracking);
  border: none;
  cursor: pointer;
}

/* Outlined Button */
.md3-button-outlined {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  min-height: 40px;
}

/* Tonal Button */
.md3-button-tonal {
  background-color: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  min-height: 40px;
  border: none;
}

/* Text Button */
.md3-button-text {
  background-color: transparent;
  color: var(--md-sys-color-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 12px;
  min-height: 40px;
}

/* Elevated Button */
.md3-button-elevated {
  background-color: var(--md-sys-color-surface-container-low);
  color: var(--md-sys-color-primary);
  border: none;
  border-radius: var(--md-sys-shape-corner-full);
  padding: 10px 24px;
  min-height: 40px;
  box-shadow: var(--md-sys-elevation-1);
}
```

### Icon Buttons

Four variants: standard, filled, tonal, outlined.

- Size: 48dp touch target, 40dp visual
- Icon size: 24dp

```css
.md3-icon-button {
  width: 48px;
  height: 48px;
  border-radius: var(--md-sys-shape-corner-full);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
}

.md3-icon-button-filled {
  background-color: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
}
```

### Floating Action Buttons (FABs)

Primary action buttons that float above content:

| Size | Dimensions | Corner Radius | Icon Size |
|------|------------|---------------|-----------|
| Medium (replaces Small) | 40×40dp | 12dp | 24dp |
| Standard | 56×56dp | 20dp | 24dp |
| Large | 96×96dp | 32dp | 36dp |
| Extended | 56dp height, variable width | 20dp | 24dp + text |

```css
/* Standard FAB */
.md3-fab {
  width: 56px;
  height: 56px;
  border-radius: var(--md-sys-shape-corner-large);
  background-color: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
  border: none;
  box-shadow: var(--md-sys-elevation-3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Large FAB */
.md3-fab-large {
  width: 96px;
  height: 96px;
  border-radius: var(--md-sys-shape-corner-extra-large);
}

/* Extended FAB */
.md3-fab-extended {
  height: 56px;
  width: auto;
  border-radius: var(--md-sys-shape-corner-large);
  padding: 0 20px;
  gap: 12px;
}
```

### FAB Menu (M3 Expressive)

Tap a FAB to reveal additional contextual actions:

```css
.md3-fab-menu {
  display: flex;
  flex-direction: column;
  gap: var(--md-sys-spacing-2);
  align-items: flex-end;
}

.md3-fab-menu-item {
  display: flex;
  align-items: center;
  gap: var(--md-sys-spacing-3);
  padding: var(--md-sys-spacing-2) var(--md-sys-spacing-4);
  border-radius: var(--md-sys-shape-corner-large);
  background: var(--md-sys-color-surface-container);
  box-shadow: var(--md-sys-elevation-2);
}
```

### Split Buttons (M3 Expressive)

Combine a primary action with a secondary dropdown:

```css
.md3-split-button {
  display: inline-flex;
  border-radius: var(--md-sys-shape-corner-full);
  overflow: hidden;
}

.md3-split-button-primary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 10px 16px;
  border: none;
}

.md3-split-button-secondary {
  background: var(--md-sys-color-primary);
  color: var(--md-sys-color-on-primary);
  padding: 10px 12px;
  border: none;
  border-left: 1px solid var(--md-sys-color-on-primary);
  opacity: 0.3;
}
```

### Button Groups (M3 Expressive)

Organize related buttons into connected or standard groups:

**Standard Button Group**: Buttons arranged in a container for single or multiple selection.

**Connected Button Group**: Visually merged buttons replacing deprecated segmented buttons.

```css
.md3-button-group {
  display: inline-flex;
  border-radius: var(--md-sys-shape-corner-full);
  overflow: hidden;
  border: 1px solid var(--md-sys-color-outline);
}

.md3-button-group-item {
  padding: 10px 24px;
  background: transparent;
  color: var(--md-sys-color-on-surface);
  border: none;
  border-right: 1px solid var(--md-sys-color-outline);
}

.md3-button-group-item:last-child {
  border-right: none;
}

.md3-button-group-item[aria-pressed="true"] {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
```

### Segmented Buttons (Legacy — replaced by Button Groups in M3 Expressive)

Use button groups instead. Segmented buttons are deprecated in M3 Expressive.

---

## Containment Components

### Cards

Three card types for grouping content:

| Type | Background | Border | Elevation |
|------|-----------|--------|-----------|
| Filled | surface-container-highest | None | Level 0 |
| Elevated | surface-container-low | None | Level 1 |
| Outlined | surface | 1px outline-variant | Level 0 |

```css
/* Elevated Card */
.md3-card-elevated {
  background: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-medium);
  box-shadow: var(--md-sys-elevation-1);
  padding: var(--md-sys-spacing-4);
}

/* Filled Card */
.md3-card-filled {
  background: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
}

/* Outlined Card */
.md3-card-outlined {
  background: var(--md-sys-color-surface);
  border: 1px solid var(--md-sys-color-outline-variant);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
}
```

### Carousel

Horizontally scrollable container for browsing content:

```css
.md3-carousel {
  display: flex;
  gap: var(--md-sys-spacing-2);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: var(--md-sys-spacing-4);
}

.md3-carousel-item {
  scroll-snap-align: start;
  flex-shrink: 0;
  border-radius: var(--md-sys-shape-corner-extra-large);
  overflow: hidden;
}
```

### Bottom Sheets

Supplementary content from the bottom of the screen:

```css
.md3-bottom-sheet {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-extra-extra-large)
                 var(--md-sys-shape-corner-extra-extra-large) 0 0;
  padding: var(--md-sys-spacing-6);
  box-shadow: var(--md-sys-elevation-4);
}

.md3-bottom-sheet-handle {
  width: 32px;
  height: 4px;
  background: var(--md-sys-color-on-surface-variant);
  border-radius: var(--md-sys-shape-corner-full);
  margin: 0 auto var(--md-sys-spacing-4);
  opacity: 0.4;
}
```

### Side Sheets

Slide out from the side for supplementary content:

```css
.md3-side-sheet {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 360px;
  background: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-extra-large) 0 0 var(--md-sys-shape-corner-extra-large);
  padding: var(--md-sys-spacing-6);
  box-shadow: var(--md-sys-elevation-4);
}
```

### Dividers

Separate content within sections:

```css
.md3-divider {
  height: 1px;
  background: var(--md-sys-color-outline-variant);
  border: none;
}

/* Inset divider */
.md3-divider-inset {
  margin-left: var(--md-sys-spacing-4);
}
```

### Lists

Continuous vertical indexes of text or images:

```css
.md3-list-item {
  display: flex;
  align-items: center;
  gap: var(--md-sys-spacing-4);
  padding: var(--md-sys-spacing-2) var(--md-sys-spacing-4);
  min-height: 56px;
}

.md3-list-item-headline {
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  color: var(--md-sys-color-on-surface);
}

.md3-list-item-supporting {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  color: var(--md-sys-color-on-surface-variant);
}
```

---

## Communication Components

### Badges

Small status indicators on icons or avatars:

```css
/* Small badge (dot) */
.md3-badge-small {
  width: 6px;
  height: 6px;
  border-radius: var(--md-sys-shape-corner-full);
  background: var(--md-sys-color-error);
}

/* Large badge (with count) */
.md3-badge-large {
  min-width: 16px;
  height: 16px;
  border-radius: var(--md-sys-shape-corner-full);
  background: var(--md-sys-color-error);
  color: var(--md-sys-color-on-error);
  font-size: var(--md-sys-typescale-label-small-size);
  font-weight: var(--md-sys-typescale-label-small-weight);
  padding: 0 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

### Dialogs

Prompt users for decisions or information:

```css
.md3-dialog {
  background: var(--md-sys-color-surface-container-high);
  border-radius: var(--md-sys-shape-corner-extra-large);
  padding: var(--md-sys-spacing-6);
  min-width: 280px;
  max-width: 560px;
  box-shadow: var(--md-sys-elevation-3);
}

.md3-dialog-title {
  font-family: var(--md-sys-typescale-headline-small-font);
  font-size: var(--md-sys-typescale-headline-small-size);
  color: var(--md-sys-color-on-surface);
  margin-bottom: var(--md-sys-spacing-4);
}

.md3-dialog-content {
  font-family: var(--md-sys-typescale-body-medium-font);
  font-size: var(--md-sys-typescale-body-medium-size);
  color: var(--md-sys-color-on-surface-variant);
  margin-bottom: var(--md-sys-spacing-6);
}

.md3-dialog-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--md-sys-spacing-2);
}

/* Scrim behind dialog */
.md3-dialog-scrim {
  position: fixed;
  inset: 0;
  background: var(--md-sys-color-scrim);
  opacity: 0.32;
}
```

### Progress Indicators

Show process status — linear and circular:

```css
/* Linear Progress */
.md3-progress-linear {
  width: 100%;
  height: 4px;
  background: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-full);
  overflow: hidden;
}

.md3-progress-linear-indicator {
  height: 100%;
  background: var(--md-sys-color-primary);
  border-radius: var(--md-sys-shape-corner-full);
  transition: width 200ms var(--md-sys-motion-easing-standard);
}

/* Circular Progress */
.md3-progress-circular {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 4px solid var(--md-sys-color-surface-container-highest);
  border-top-color: var(--md-sys-color-primary);
  animation: md3-spin 1.4s linear infinite;
}

@keyframes md3-spin {
  to { transform: rotate(360deg); }
}
```

### Snackbars

Brief messages about app processes:

```css
.md3-snackbar {
  background: var(--md-sys-color-inverse-surface);
  color: var(--md-sys-color-inverse-on-surface);
  border-radius: var(--md-sys-shape-corner-extra-small);
  padding: var(--md-sys-spacing-4);
  min-height: 48px;
  display: flex;
  align-items: center;
  gap: var(--md-sys-spacing-2);
  box-shadow: var(--md-sys-elevation-3);
  max-width: 560px;
}

.md3-snackbar-action {
  color: var(--md-sys-color-inverse-primary);
  font-weight: var(--md-sys-typescale-label-large-weight);
}
```

### Tooltips

Informative text on hover or long press:

```css
/* Plain tooltip */
.md3-tooltip {
  background: var(--md-sys-color-inverse-surface);
  color: var(--md-sys-color-inverse-on-surface);
  border-radius: var(--md-sys-shape-corner-extra-small);
  padding: 4px 8px;
  font-size: var(--md-sys-typescale-body-small-size);
  max-width: 200px;
}

/* Rich tooltip */
.md3-tooltip-rich {
  background: var(--md-sys-color-surface-container);
  color: var(--md-sys-color-on-surface);
  border-radius: var(--md-sys-shape-corner-medium);
  padding: var(--md-sys-spacing-4);
  box-shadow: var(--md-sys-elevation-2);
  max-width: 320px;
}
```

---

## Navigation Components

### Top App Bar

Provides navigation and actions at the top:

| Type | Height | Description |
|------|--------|-------------|
| Center-aligned | 64dp | Title centered |
| Small | 64dp | Title left-aligned |
| Medium | 112dp | Title below navigation icons |
| Large | 152dp | Prominent title display |

```css
.md3-top-app-bar {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 var(--md-sys-spacing-4);
  background: var(--md-sys-color-surface);
  color: var(--md-sys-color-on-surface);
  gap: var(--md-sys-spacing-2);
}

.md3-top-app-bar-title {
  font-family: var(--md-sys-typescale-title-large-font);
  font-size: var(--md-sys-typescale-title-large-size);
  flex: 1;
}

/* Scrolled state */
.md3-top-app-bar-scrolled {
  background: var(--md-sys-color-surface-container);
  box-shadow: var(--md-sys-elevation-2);
}
```

### Bottom App Bar (Legacy — replaced by Docked Toolbar in M3 Expressive)

For apps that have not migrated to toolbars:

```css
.md3-bottom-app-bar {
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 var(--md-sys-spacing-4);
  background: var(--md-sys-color-surface-container);
  gap: var(--md-sys-spacing-2);
}
```

### Toolbars (M3 Expressive)

Replace bottom app bars with more flexible options:

**Docked Toolbar**: Full-width for global actions.
**Floating Toolbar**: Floats above content for context-sensitive actions (horizontal or vertical).

```css
/* Docked Toolbar */
.md3-toolbar-docked {
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 var(--md-sys-spacing-4);
  background: var(--md-sys-color-surface-container);
  gap: var(--md-sys-spacing-2);
}

/* Floating Toolbar (horizontal) */
.md3-toolbar-floating {
  display: inline-flex;
  align-items: center;
  height: 56px;
  padding: 0 var(--md-sys-spacing-3);
  background: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-large);
  box-shadow: var(--md-sys-elevation-2);
  gap: var(--md-sys-spacing-1);
  backdrop-filter: blur(12px);
}

/* Floating Toolbar (vertical) */
.md3-toolbar-floating-vertical {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 56px;
  padding: var(--md-sys-spacing-3) 0;
  background: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-large);
  box-shadow: var(--md-sys-elevation-2);
  gap: var(--md-sys-spacing-1);
}

/* Vibrant Toolbar (high emphasis) */
.md3-toolbar-vibrant {
  background: var(--md-sys-color-primary-container);
  color: var(--md-sys-color-on-primary-container);
}
```

### Navigation Bar (Bottom Navigation)

Primary navigation for mobile, displayed at screen bottom:

```css
.md3-navigation-bar {
  display: flex;
  height: 80px;
  background: var(--md-sys-color-surface-container);
  box-shadow: var(--md-sys-elevation-2);
}

.md3-navigation-bar-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--md-sys-color-on-surface-variant);
  min-width: 48px;
}

.md3-navigation-bar-item[aria-selected="true"] {
  color: var(--md-sys-color-on-surface);
}

/* Active indicator */
.md3-navigation-bar-indicator {
  background: var(--md-sys-color-secondary-container);
  border-radius: var(--md-sys-shape-corner-full);
  padding: 4px 20px;
}
```

### Navigation Rail

Vertical navigation for medium-sized screens:

```css
.md3-navigation-rail {
  display: flex;
  flex-direction: column;
  width: 80px;
  background: var(--md-sys-color-surface);
  padding: var(--md-sys-spacing-3) 0;
  align-items: center;
  gap: var(--md-sys-spacing-3);
}
```

### Navigation Drawer

Side panel navigation for large screens:

```css
.md3-navigation-drawer {
  width: 360px;
  background: var(--md-sys-color-surface-container-low);
  border-radius: 0 var(--md-sys-shape-corner-large) var(--md-sys-shape-corner-large) 0;
  padding: var(--md-sys-spacing-3);
}

.md3-navigation-drawer-item {
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 var(--md-sys-spacing-4);
  border-radius: var(--md-sys-shape-corner-full);
  gap: var(--md-sys-spacing-3);
}

.md3-navigation-drawer-item[aria-selected="true"] {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
}
```

### Tabs

Switch between grouped content sections:

```css
.md3-tabs {
  display: flex;
  border-bottom: 1px solid var(--md-sys-color-surface-variant);
}

.md3-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  font-family: var(--md-sys-typescale-title-small-font);
  font-size: var(--md-sys-typescale-title-small-size);
  color: var(--md-sys-color-on-surface-variant);
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
}

.md3-tab[aria-selected="true"] {
  color: var(--md-sys-color-primary);
}

/* Active indicator */
.md3-tab[aria-selected="true"]::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--md-sys-color-primary);
  border-radius: 3px 3px 0 0;
}
```

### Search

Input for querying and filtering content:

```css
.md3-search-bar {
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: var(--md-sys-shape-corner-full);
  background: var(--md-sys-color-surface-container-highest);
  padding: 0 var(--md-sys-spacing-4);
  gap: var(--md-sys-spacing-4);
}

.md3-search-bar input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  color: var(--md-sys-color-on-surface);
  outline: none;
}

.md3-search-bar input::placeholder {
  color: var(--md-sys-color-on-surface-variant);
}
```

---

## Selection Components

### Checkboxes

Multi-selection toggles:

- Size: 18dp visual, 48dp touch target
- Border: 2dp, outline color when unchecked
- Fill: primary when checked
- Check mark: on-primary

### Radio Buttons

Single selection from options:

- Size: 20dp visual, 48dp touch target
- Border: 2dp, outline when unselected
- Fill: primary when selected
- Inner circle: 10dp

### Switches

Toggle settings on or off:

- Track: 52×32dp
- Thumb: 16dp unchecked, 24dp checked
- Selected: primary track, on-primary thumb icon
- Unselected: surface-container-highest track, outline thumb

```css
.md3-switch {
  width: 52px;
  height: 32px;
  border-radius: var(--md-sys-shape-corner-full);
  background: var(--md-sys-color-surface-container-highest);
  border: 2px solid var(--md-sys-color-outline);
  position: relative;
  cursor: pointer;
  transition: background 200ms var(--md-sys-motion-easing-standard);
}

.md3-switch[aria-checked="true"] {
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}

.md3-switch-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--md-sys-color-outline);
  position: absolute;
  top: 50%;
  left: 6px;
  transform: translateY(-50%);
  transition: all 200ms var(--md-sys-motion-easing-standard);
}

.md3-switch[aria-checked="true"] .md3-switch-thumb {
  width: 24px;
  height: 24px;
  background: var(--md-sys-color-on-primary);
  left: calc(100% - 28px);
}
```

### Chips

Compact elements for filtering, input, or actions:

| Type | Use | Selectable |
|------|-----|------------|
| Assist | Suggest actions | No |
| Filter | Filter content | Yes |
| Input | User-entered data | Removable |
| Suggestion | Dynamic suggestions | No |

```css
.md3-chip {
  height: 32px;
  border-radius: var(--md-sys-shape-corner-small);
  padding: 0 16px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--md-sys-typescale-label-large-font);
  font-size: var(--md-sys-typescale-label-large-size);
  border: 1px solid var(--md-sys-color-outline);
  background: transparent;
  color: var(--md-sys-color-on-surface-variant);
  cursor: pointer;
}

.md3-chip[aria-selected="true"] {
  background: var(--md-sys-color-secondary-container);
  color: var(--md-sys-color-on-secondary-container);
  border-color: transparent;
}
```

### Sliders

Range or value selection:

- Track height: 4dp
- Thumb: 20dp
- Active track: primary
- Inactive track: surface-container-highest

### Date Pickers and Time Pickers

Dialogs or inputs for selecting dates and times. Follow M3 dialog patterns with appropriate shape and color tokens.

### Menus

Dropdown or context menus:

```css
.md3-menu {
  background: var(--md-sys-color-surface-container);
  border-radius: var(--md-sys-shape-corner-extra-small);
  box-shadow: var(--md-sys-elevation-2);
  padding: var(--md-sys-spacing-2) 0;
  min-width: 112px;
  max-width: 280px;
}

.md3-menu-item {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 var(--md-sys-spacing-3);
  gap: var(--md-sys-spacing-3);
  color: var(--md-sys-color-on-surface);
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  cursor: pointer;
}
```

---

## Text Input Components

### Text Fields

Two variants: Filled and Outlined.

**Filled Text Field**:
```css
.md3-text-field-filled {
  display: flex;
  flex-direction: column;
  background: var(--md-sys-color-surface-container-highest);
  border-radius: var(--md-sys-shape-corner-extra-small) var(--md-sys-shape-corner-extra-small) 0 0;
  padding: 8px 16px 8px;
  position: relative;
}

.md3-text-field-filled input {
  border: none;
  background: transparent;
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  color: var(--md-sys-color-on-surface);
  outline: none;
  padding: 4px 0;
}

.md3-text-field-filled::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--md-sys-color-on-surface-variant);
}

.md3-text-field-filled:focus-within::after {
  height: 2px;
  background: var(--md-sys-color-primary);
}
```

**Outlined Text Field**:
```css
.md3-text-field-outlined {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--md-sys-color-outline);
  border-radius: var(--md-sys-shape-corner-extra-small);
  padding: 8px 16px;
}

.md3-text-field-outlined:focus-within {
  border-color: var(--md-sys-color-primary);
  border-width: 2px;
}

.md3-text-field-outlined input {
  border: none;
  background: transparent;
  font-family: var(--md-sys-typescale-body-large-font);
  font-size: var(--md-sys-typescale-body-large-size);
  color: var(--md-sys-color-on-surface);
  outline: none;
}
```

**Labels and Supporting Text**:
```css
.md3-text-field-label {
  font-family: var(--md-sys-typescale-body-small-font);
  font-size: var(--md-sys-typescale-body-small-size);
  color: var(--md-sys-color-on-surface-variant);
}

.md3-text-field-supporting {
  font-family: var(--md-sys-typescale-body-small-font);
  font-size: var(--md-sys-typescale-body-small-size);
  color: var(--md-sys-color-on-surface-variant);
  padding: 4px 16px 0;
}

.md3-text-field-error .md3-text-field-supporting {
  color: var(--md-sys-color-error);
}
```

---

## Component Interaction States

All M3 components follow consistent interaction state patterns:

| State | Visual Effect |
|-------|--------------|
| Enabled | Default appearance |
| Hovered | 8% state layer overlay |
| Focused | 12% state layer overlay + focus indicator |
| Pressed | 12% state layer overlay |
| Dragged | 16% state layer overlay |
| Disabled | 38% content opacity, 12% background opacity |

## Framework-Specific Component Usage

M3 components can be implemented using different libraries depending on your web stack. Below are quick-reference examples showing how the same component looks across frameworks.

### Button — Cross-Framework Examples

**Vanilla CSS / HTML**:
```html
<button class="md3-button-filled">Click me</button>
```

**Web Components (`@material/web`)**:
```html
<md-filled-button>Click me</md-filled-button>
<md-outlined-button>Secondary</md-outlined-button>
<md-text-button>Text</md-text-button>
```

**React (MUI)**:
```jsx
import Button from '@mui/material/Button';

<Button variant="contained">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
```

**Angular Material**:
```html
<button mat-raised-button color="primary">Filled</button>
<button mat-stroked-button>Outlined</button>
<button mat-button>Text</button>
```

**Vue (Vuetify 3)**:
```vue
<v-btn color="primary">Filled</v-btn>
<v-btn variant="outlined">Outlined</v-btn>
<v-btn variant="text">Text</v-btn>
```

**Svelte (SMUI)**:
```svelte
<Button variant="raised">Filled</Button>
<Button variant="outlined">Outlined</Button>
<Button>Text</Button>
```

**Tailwind CSS (with M3 tokens)**:
```html
<button class="bg-primary text-on-primary rounded-full px-6 py-2.5 
               text-sm font-medium tracking-wide">
  Filled
</button>
```

**Ink (React CLI)**:
```jsx
import {Box, Text} from 'ink';

// Filled button equivalent in terminal
<Box paddingX={2} paddingY={0}>
  <Text backgroundColor="magenta" color="white" bold> Action </Text>
</Box>
```

### Card — Cross-Framework Examples

**Web Components (`@material/web`)**:
```html
<!-- @material/web does not include a card component — build with tokens -->
<div class="md3-card-elevated">
  <h3 class="md3-title-medium">Title</h3>
  <p class="md3-body-medium">Content</p>
</div>
```

**React (MUI)**:
```jsx
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

<Card elevation={1}>
  <CardContent>
    <Typography variant="h6">Title</Typography>
    <Typography variant="body2">Content</Typography>
  </CardContent>
</Card>
```

**Angular Material**:
```html
<mat-card appearance="raised">
  <mat-card-header>
    <mat-card-title>Title</mat-card-title>
  </mat-card-header>
  <mat-card-content>Content</mat-card-content>
</mat-card>
```

**Vue (Vuetify 3)**:
```vue
<v-card elevation="1" rounded="lg">
  <v-card-title>Title</v-card-title>
  <v-card-text>Content</v-card-text>
</v-card>
```

### Text Field — Cross-Framework Examples

**Web Components (`@material/web`)**:
```html
<md-outlined-text-field label="Email"></md-outlined-text-field>
<md-filled-text-field label="Name"></md-filled-text-field>
```

**React (MUI)**:
```jsx
<TextField label="Email" variant="outlined" />
<TextField label="Name" variant="filled" />
```

**Angular Material**:
```html
<mat-form-field appearance="outline">
  <mat-label>Email</mat-label>
  <input matInput />
</mat-form-field>
```

**Vue (Vuetify 3)**:
```vue
<v-text-field label="Email" variant="outlined" />
<v-text-field label="Name" variant="filled" />
```

**Ink (React CLI)**:
```jsx
import {TextInput} from '@inkjs/ui';

<TextInput placeholder="Email" onSubmit={value => {}} />
```

### Navigation — Cross-Framework Examples

**Web Components (`@material/web`)**:
```html
<md-navigation-bar>
  <md-navigation-tab label="Home">
    <md-icon slot="active-icon">home</md-icon>
    <md-icon slot="inactive-icon">home</md-icon>
  </md-navigation-tab>
</md-navigation-bar>
```

**React (MUI)**:
```jsx
<BottomNavigation value={value} onChange={handleChange}>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Search" icon={<SearchIcon />} />
</BottomNavigation>
```

**Vue (Vuetify 3)**:
```vue
<v-bottom-navigation v-model="value">
  <v-btn value="home"><v-icon>mdi-home</v-icon>Home</v-btn>
  <v-btn value="search"><v-icon>mdi-magnify</v-icon>Search</v-btn>
</v-bottom-navigation>
```

**Ink (React CLI)**:
```jsx
import {Select} from '@inkjs/ui';

<Select
  options={[
    {label: '🏠 Home', value: 'home'},
    {label: '🔍 Search', value: 'search'},
    {label: '⚙️ Settings', value: 'settings'},
  ]}
  onChange={value => {}}
/>
```

### Framework Selection for Components

| Component Type | Best Framework Support |
|---------------|----------------------|
| Buttons (all types) | All frameworks — equally mature |
| Cards | MUI, Vuetify, Angular Material |
| Navigation (bar, rail, drawer) | Angular Material, Vuetify, `@material/web` |
| Text Fields | All frameworks — equally mature |
| Dialogs | All frameworks |
| Chips | MUI, Vuetify, Angular Material |
| FABs | All frameworks |
| Tabs | All frameworks |
| CLI Components (inputs, selects, spinners) | Ink (`@inkjs/ui`) |
| M3 Expressive (split buttons, toolbars) | Custom CSS or `@material/web` (framework support evolving) |

## Accessibility Guidelines for Components

1. **Touch targets**: Minimum 48×48dp for all interactive components
2. **Focus indicators**: Visible outline (2px solid primary, 2px offset)
3. **Color contrast**: 4.5:1 for text, 3:1 for interactive elements
4. **ARIA attributes**: Use appropriate roles, labels, and states
5. **Keyboard navigation**: All components must be fully keyboard operable
6. **Screen reader support**: Use semantic HTML and ARIA announcements

## Checklist for Component Implementation

When implementing M3 components, ensure:

- [ ] Component uses appropriate M3 color tokens (not hard-coded colors)
- [ ] Shape follows the M3 shape scale for that component type
- [ ] Typography uses the correct type scale role
- [ ] All interaction states are implemented (hover, focus, pressed, disabled)
- [ ] Touch targets meet 48×48dp minimum
- [ ] Focus indicators are visible and have adequate contrast
- [ ] Component works in both light and dark themes
- [ ] Disabled states use correct opacity values (38% content, 12% background)
- [ ] Motion uses spring-based easing for transitions
- [ ] ARIA attributes are correctly applied
- [ ] Component is fully keyboard navigable
- [ ] M3 Expressive additions (FAB menu, split buttons, button groups, toolbars) are used where appropriate
- [ ] Framework-specific best practices are followed (see material-design-3-guide for stack-specific guidance)
