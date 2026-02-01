import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-vitest",
    "@storybook/addon-themes",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-designs",
    "storybook-addon-pseudo-states",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {},
  },

  docs: {},

  staticDirs: ['../public'],

  // Configuração para GitHub Pages
  managerHead: (head) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/DesignSystem-ShadCN/' : '/';
    return `
      ${head}
      <base href="${basePath}">
      <link rel="icon" type="image/svg+xml" href="${basePath}favicon.svg" />
    `;
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  // Para GitHub Pages com subpath
  viteFinal: async (config) => {
    // Set base path for GitHub Pages
    config.base = process.env.NODE_ENV === 'production' ? '/DesignSystem-ShadCN/' : '/';
    return config;
  }
};

export default config;