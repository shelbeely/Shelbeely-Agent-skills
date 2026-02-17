/**
 * Material Design 3 — MUI Theme Configuration
 *
 * Ready-to-use M3-aligned theme for React projects using MUI.
 * Includes light and dark themes with M3 color roles.
 * Based on the M3 baseline orange palette (source: #FF9800).
 *
 * Generated with Material Theme Builder
 * (https://github.com/material-foundation/material-theme-builder)
 *
 * Usage:
 *   1. Copy this file into your project (e.g., src/theme.ts)
 *   2. Install deps: npm install @mui/material @emotion/react @emotion/styled
 *   3. Wrap your app:
 *      import { ThemeProvider } from '@mui/material/styles';
 *      import { m3ThemeLight } from './theme';
 *      <ThemeProvider theme={m3ThemeLight}>{children}</ThemeProvider>
 *
 * License: Apache-2.0
 */

import { createTheme } from '@mui/material/styles';

// M3 baseline palette (orange, source: #FF9800)
// Replace these with your brand colors or regenerate at
// https://material-foundation.github.io/material-theme-builder/
const m3Colors = {
  light: {
    primary: '#8B5000',
    onPrimary: '#FFFFFF',
    primaryContainer: '#FFDCBE',
    onPrimaryContainer: '#2C1600',
    secondary: '#725A42',
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FFDCBE',
    onSecondaryContainer: '#291806',
    tertiary: '#58633A',
    onTertiary: '#FFFFFF',
    tertiaryContainer: '#DCE8B4',
    onTertiaryContainer: '#161E01',
    error: '#BA1A1A',
    onError: '#FFFFFF',
    errorContainer: '#FFDAD6',
    onErrorContainer: '#410002',
    surface: '#FFF8F5',
    onSurface: '#201B16',
    surfaceVariant: '#F2DFD1',
    onSurfaceVariant: '#51453A',
    surfaceContainerLowest: '#FFFFFF',
    surfaceContainerLow: '#FDF2EA',
    surfaceContainer: '#F7ECE4',
    surfaceContainerHigh: '#F1E6DF',
    surfaceContainerHighest: '#EBE0D9',
    outline: '#837468',
    outlineVariant: '#D5C3B5',
  },
  dark: {
    primary: '#FFB870',
    onPrimary: '#4A2800',
    primaryContainer: '#693C00',
    onPrimaryContainer: '#FFDCBE',
    secondary: '#E1C1A4',
    onSecondary: '#402C18',
    secondaryContainer: '#59422C',
    onSecondaryContainer: '#FFDCBE',
    tertiary: '#C0CC9A',
    onTertiary: '#2B3410',
    tertiaryContainer: '#414B24',
    onTertiaryContainer: '#DCE8B4',
    error: '#FFB4AB',
    onError: '#690005',
    errorContainer: '#93000A',
    onErrorContainer: '#FFB4AB',
    surface: '#17120E',
    onSurface: '#EBE0D9',
    surfaceVariant: '#51453A',
    onSurfaceVariant: '#D5C3B5',
    surfaceContainerLowest: '#120D0A',
    surfaceContainerLow: '#201B16',
    surfaceContainer: '#241F1A',
    surfaceContainerHigh: '#2E2924',
    surfaceContainerHighest: '#3A342F',
    outline: '#9D8E81',
    outlineVariant: '#51453A',
  },
};

export const m3ThemeLight = createTheme({
  palette: {
    mode: 'light',
    primary: { main: m3Colors.light.primary, contrastText: m3Colors.light.onPrimary },
    secondary: { main: m3Colors.light.secondary, contrastText: m3Colors.light.onSecondary },
    error: { main: m3Colors.light.error, contrastText: m3Colors.light.onError },
    background: {
      default: m3Colors.light.surface,
      paper: m3Colors.light.surfaceContainer,
    },
    text: {
      primary: m3Colors.light.onSurface,
      secondary: m3Colors.light.onSurfaceVariant,
    },
    divider: m3Colors.light.outlineVariant,
  },
  shape: { borderRadius: 12 }, // M3 Medium
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: '0.1px' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 9999, minHeight: 40, paddingInline: 24 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: 28 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: { borderRadius: 16 },
      },
    },
  },
});

export const m3ThemeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: m3Colors.dark.primary, contrastText: m3Colors.dark.onPrimary },
    secondary: { main: m3Colors.dark.secondary, contrastText: m3Colors.dark.onSecondary },
    error: { main: m3Colors.dark.error, contrastText: m3Colors.dark.onError },
    background: {
      default: m3Colors.dark.surface,
      paper: m3Colors.dark.surfaceContainer,
    },
    text: {
      primary: m3Colors.dark.onSurface,
      secondary: m3Colors.dark.onSurfaceVariant,
    },
    divider: m3Colors.dark.outlineVariant,
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: { textTransform: 'none', fontWeight: 500, letterSpacing: '0.1px' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 9999, minHeight: 40, paddingInline: 24 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 12 },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { borderRadius: 28 },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 8 },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: { borderRadius: 16 },
      },
    },
  },
});
