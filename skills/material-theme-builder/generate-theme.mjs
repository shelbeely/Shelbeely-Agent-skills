#!/usr/bin/env node
/**
 * Material Theme Builder — Theme Generation Script
 *
 * Generates a complete M3 color theme from a source hex color and outputs
 * CSS custom properties for both light and dark themes.
 *
 * Powered by @material/material-color-utilities, the same engine behind
 * Google's Material Theme Builder
 * (https://github.com/material-foundation/material-theme-builder).
 *
 * Usage:
 *   npm install @material/material-color-utilities
 *   node generate-theme.mjs "#FF9800"
 *   node generate-theme.mjs "#FF9800" --json
 *
 * License: Apache-2.0
 */

import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from "@material/material-color-utilities";

const args = process.argv.slice(2);
const sourceHex = args.find((a) => a.startsWith("#")) || "#FF9800";
const outputJson = args.includes("--json");

const theme = themeFromSourceColor(argbFromHex(sourceHex));

const neutral = theme.palettes.neutral;
const primary = theme.palettes.primary;
const secondary = theme.palettes.secondary;
const tertiary = theme.palettes.tertiary;

function hex(argb) {
  return hexFromArgb(argb).toUpperCase();
}

// Convert camelCase to kebab-case
function kebab(str) {
  return str.replace(/([A-Z])/g, "-$1").toLowerCase();
}

// Build complete token map for a scheme
function buildTokens(scheme, surfaceTones) {
  const tokens = {};

  // Core roles from scheme
  for (const [key, argb] of Object.entries(scheme.toJSON())) {
    tokens[`--md-sys-color-${kebab(key)}`] = hex(argb);
  }

  // Surface containers
  for (const [key, argb] of Object.entries(surfaceTones)) {
    tokens[`--md-sys-color-${kebab(key)}`] = hex(argb);
  }

  // Fixed colors (same in light and dark)
  const fixed = {
    "primary-fixed": primary.tone(90),
    "on-primary-fixed": primary.tone(10),
    "primary-fixed-dim": primary.tone(80),
    "on-primary-fixed-variant": primary.tone(30),
    "secondary-fixed": secondary.tone(90),
    "on-secondary-fixed": secondary.tone(10),
    "secondary-fixed-dim": secondary.tone(80),
    "on-secondary-fixed-variant": secondary.tone(30),
    "tertiary-fixed": tertiary.tone(90),
    "on-tertiary-fixed": tertiary.tone(10),
    "tertiary-fixed-dim": tertiary.tone(80),
    "on-tertiary-fixed-variant": tertiary.tone(30),
  };
  for (const [key, argb] of Object.entries(fixed)) {
    tokens[`--md-sys-color-${key}`] = hex(argb);
  }

  return tokens;
}

const lightSurfaces = {
  surfaceDim: neutral.tone(87),
  surfaceBright: neutral.tone(98),
  surfaceContainerLowest: neutral.tone(100),
  surfaceContainerLow: neutral.tone(96),
  surfaceContainer: neutral.tone(94),
  surfaceContainerHigh: neutral.tone(92),
  surfaceContainerHighest: neutral.tone(90),
};

const darkSurfaces = {
  surfaceDim: neutral.tone(6),
  surfaceBright: neutral.tone(24),
  surfaceContainerLowest: neutral.tone(4),
  surfaceContainerLow: neutral.tone(10),
  surfaceContainer: neutral.tone(12),
  surfaceContainerHigh: neutral.tone(17),
  surfaceContainerHighest: neutral.tone(22),
};

const lightTokens = buildTokens(theme.schemes.light, lightSurfaces);
const darkTokens = buildTokens(theme.schemes.dark, darkSurfaces);

if (outputJson) {
  // JSON output
  const json = { source: sourceHex, light: lightTokens, dark: darkTokens };
  console.log(JSON.stringify(json, null, 2));
} else {
  // CSS output
  console.log(`/*`);
  console.log(` * M3 Color Tokens — generated from source: ${sourceHex}`);
  console.log(` * Material Theme Builder (https://github.com/material-foundation/material-theme-builder)`);
  console.log(` */\n`);

  console.log(`:root {`);
  for (const [prop, val] of Object.entries(lightTokens)) {
    console.log(`  ${prop}: ${val};`);
  }
  console.log(`}\n`);

  console.log(`[data-theme="dark"] {`);
  for (const [prop, val] of Object.entries(darkTokens)) {
    console.log(`  ${prop}: ${val};`);
  }
  console.log(`}`);
}
