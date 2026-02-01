import type { StorybookConfig } from '@storybook/nextjs-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding"
  ],
  "framework": "@storybook/nextjs-vite",
  
  // Para GitHub Pages com subpath
  viteFinal: async (config) => {
    // Set base path for GitHub Pages
    config.base = process.env.NODE_ENV === 'production' ? '/DesignSystem-ShadCN/' : '/';
    return config;
  }
};
export default config;