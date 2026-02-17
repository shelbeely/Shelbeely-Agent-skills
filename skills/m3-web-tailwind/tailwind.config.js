/**
 * Material Design 3 — Tailwind CSS Configuration
 *
 * Ready-to-use Tailwind config with M3 design tokens mapped to utilities.
 * Includes color roles, shape scale, and typography.
 * Based on the M3 baseline orange palette (source: #FF9800).
 *
 * Generated with Material Theme Builder
 * (https://github.com/material-foundation/material-theme-builder)
 *
 * Usage:
 *   1. Copy this file into your project root
 *   2. Define CSS custom properties for colors (see globals.css below)
 *   3. Use M3 utilities: class="bg-primary text-on-primary rounded-md3-full"
 *
 * Pair with a globals.css that defines --color-* custom properties,
 * or replace var(--color-*) values with hex codes directly.
 *
 * License: Apache-2.0
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        /* Primary */
        primary: 'var(--color-primary, #8B5000)',
        'on-primary': 'var(--color-on-primary, #FFFFFF)',
        'primary-container': 'var(--color-primary-container, #FFDCBE)',
        'on-primary-container': 'var(--color-on-primary-container, #2C1600)',

        /* Secondary */
        secondary: 'var(--color-secondary, #725A42)',
        'on-secondary': 'var(--color-on-secondary, #FFFFFF)',
        'secondary-container': 'var(--color-secondary-container, #FFDCBE)',
        'on-secondary-container': 'var(--color-on-secondary-container, #291806)',

        /* Tertiary */
        tertiary: 'var(--color-tertiary, #58633A)',
        'on-tertiary': 'var(--color-on-tertiary, #FFFFFF)',
        'tertiary-container': 'var(--color-tertiary-container, #DCE8B4)',
        'on-tertiary-container': 'var(--color-on-tertiary-container, #161E01)',

        /* Error */
        error: 'var(--color-error, #BA1A1A)',
        'on-error': 'var(--color-on-error, #FFFFFF)',
        'error-container': 'var(--color-error-container, #FFDAD6)',
        'on-error-container': 'var(--color-on-error-container, #410002)',

        /* Surface */
        surface: 'var(--color-surface, #FFF8F5)',
        'on-surface': 'var(--color-on-surface, #201B16)',
        'surface-variant': 'var(--color-surface-variant, #F2DFD1)',
        'on-surface-variant': 'var(--color-on-surface-variant, #51453A)',
        'surface-container-lowest': 'var(--color-surface-container-lowest, #FFFFFF)',
        'surface-container-low': 'var(--color-surface-container-low, #FDF2EA)',
        'surface-container': 'var(--color-surface-container, #F7ECE4)',
        'surface-container-high': 'var(--color-surface-container-high, #F1E6DF)',
        'surface-container-highest': 'var(--color-surface-container-highest, #EBE0D9)',

        /* Outline */
        outline: 'var(--color-outline, #837468)',
        'outline-variant': 'var(--color-outline-variant, #D5C3B5)',

        /* Inverse */
        'inverse-surface': 'var(--color-inverse-surface, #352F2B)',
        'inverse-on-surface': 'var(--color-inverse-on-surface, #FAEFE7)',
        'inverse-primary': 'var(--color-inverse-primary, #FFB870)',
      },
      borderRadius: {
        'md3-none': '0px',
        'md3-xs': '4px',
        'md3-sm': '8px',
        'md3-md': '12px',
        'md3-lg': '16px',
        'md3-xl': '28px',
        'md3-full': '9999px',
      },
      fontSize: {
        'display-lg': ['3.562rem', { lineHeight: '4rem', fontWeight: '400', letterSpacing: '-0.25px' }],
        'display-md': ['2.812rem', { lineHeight: '3.25rem', fontWeight: '400' }],
        'display-sm': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '400' }],
        'headline-lg': ['2rem', { lineHeight: '2.5rem', fontWeight: '400' }],
        'headline-md': ['1.75rem', { lineHeight: '2.25rem', fontWeight: '400' }],
        'headline-sm': ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }],
        'title-lg': ['1.375rem', { lineHeight: '1.75rem', fontWeight: '400' }],
        'title-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '500', letterSpacing: '0.15px' }],
        'title-sm': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500', letterSpacing: '0.1px' }],
        'body-lg': ['1rem', { lineHeight: '1.5rem', fontWeight: '400', letterSpacing: '0.5px' }],
        'body-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '400', letterSpacing: '0.25px' }],
        'body-sm': ['0.75rem', { lineHeight: '1rem', fontWeight: '400', letterSpacing: '0.4px' }],
        'label-lg': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '500', letterSpacing: '0.1px' }],
        'label-md': ['0.75rem', { lineHeight: '1rem', fontWeight: '500', letterSpacing: '0.5px' }],
        'label-sm': ['0.687rem', { lineHeight: '1rem', fontWeight: '500', letterSpacing: '0.5px' }],
      },
      boxShadow: {
        'md3-1': '0 1px 2px rgba(0,0,0,0.3), 0 1px 3px 1px rgba(0,0,0,0.15)',
        'md3-2': '0 1px 2px rgba(0,0,0,0.3), 0 2px 6px 2px rgba(0,0,0,0.15)',
        'md3-3': '0 4px 8px 3px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.3)',
        'md3-4': '0 6px 10px 4px rgba(0,0,0,0.15), 0 2px 3px rgba(0,0,0,0.3)',
        'md3-5': '0 8px 12px 6px rgba(0,0,0,0.15), 0 4px 4px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
};
