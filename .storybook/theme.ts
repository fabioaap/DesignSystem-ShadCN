import { create } from '@storybook/theming/create';

// Tema Dark (padrão)
export const darkTheme = create({
  base: 'dark',
  
  // Branding
  brandTitle: 'DesignSystem ShadCN',
  brandUrl: 'https://fabioaap.github.io/DesignSystem-ShadCN/',
  brandImage: undefined, // Ou adicionar logo se tiver
  brandTarget: '_self',
  
  // Cores principais
  colorPrimary: '#8b5cf6', // Violet
  colorSecondary: '#a78bfa', // Violet light
  
  // UI
  appBg: '#0a0a0a', // Preto profundo
  appContentBg: '#171717', // Cinza escuro
  appPreviewBg: '#000000', // Preto puro
  appBorderColor: '#262626', // Border sutil
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Fira Code", monospace',
  
  // Text colors
  textColor: '#fafafa', // Quase branco
  textInverseColor: '#0a0a0a', // Preto
  textMutedColor: '#a1a1aa', // Cinza médio
  
  // Toolbar
  barTextColor: '#fafafa',
  barSelectedColor: '#8b5cf6', // Violet
  barHoverColor: '#a78bfa',
  barBg: '#171717',
  
  // Form
  inputBg: '#262626',
  inputBorder: '#3f3f46',
  inputTextColor: '#fafafa',
  inputBorderRadius: 6,
  
  // Buttons
  buttonBg: '#262626',
  buttonBorder: '#3f3f46',
  booleanBg: '#262626',
  booleanSelectedBg: '#8b5cf6',
});

// Tema Light
export const lightTheme = create({
  base: 'light',
  
  // Branding
  brandTitle: 'DesignSystem ShadCN',
  brandUrl: 'https://fabioaap.github.io/DesignSystem-ShadCN/',
  brandImage: undefined,
  brandTarget: '_self',
  
  // Cores principais
  colorPrimary: '#7c3aed', // Violet dark
  colorSecondary: '#8b5cf6',
  
  // UI
  appBg: '#fafafa',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#e4e4e7',
  appBorderRadius: 8,
  
  // Typography
  fontBase: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: '"Fira Code", monospace',
  
  // Text colors
  textColor: '#18181b',
  textInverseColor: '#fafafa',
  textMutedColor: '#71717a',
  
  // Toolbar
  barTextColor: '#18181b',
  barSelectedColor: '#7c3aed',
  barHoverColor: '#8b5cf6',
  barBg: '#ffffff',
  
  // Form
  inputBg: '#ffffff',
  inputBorder: '#d4d4d8',
  inputTextColor: '#18181b',
  inputBorderRadius: 6,
  
  // Buttons
  buttonBg: '#f4f4f5',
  buttonBorder: '#e4e4e7',
  booleanBg: '#f4f4f5',
  booleanSelectedBg: '#7c3aed',
});
