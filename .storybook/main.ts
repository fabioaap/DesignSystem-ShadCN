import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
    "@storybook/addon-designs",
    "storybook-addon-pseudo-states",
    "@chromatic-com/storybook",
  ],

  framework: {
    name: "@storybook/nextjs-vite",
    options: {
      builder: {
        viteConfigPath: '.storybook/vite.config.ts',
      },
    },
  },

  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },

  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },

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
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        esModuleInterop: true,
      },
    },
    skipBabel: true,
    check: false,
  },

  // Para GitHub Pages com subpath
  viteFinal: async (config) => {
    // Set base path for GitHub Pages
    config.base = process.env.NODE_ENV === 'production' ? '/DesignSystem-ShadCN/' : '/';

    // Otimizações de performance
    config.build = {
      ...config.build,
      target: 'esnext',
      minify: 'esbuild',
      cssMinify: true,
      sourcemap: false,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        ...config.build?.rollupOptions,
        output: {
          manualChunks: (id) => {
            // Separar vendors grandes em chunks
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom')) {
                return 'vendor-react';
              }
              if (id.includes('@radix-ui')) {
                return 'vendor-radix';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (id.includes('recharts') || id.includes('d3-')) {
                return 'vendor-charts';
              }
              if (id.includes('@storybook')) {
                return 'vendor-storybook';
              }
              return 'vendor';
            }
            // Separar stories por categoria
            if (id.includes('stories.tsx')) {
              if (id.includes('button') || id.includes('input') || id.includes('form')) {
                return 'stories-forms';
              }
              if (id.includes('dialog') || id.includes('sheet') || id.includes('drawer')) {
                return 'stories-overlays';
              }
              if (id.includes('tabs') || id.includes('accordion') || id.includes('card')) {
                return 'stories-layout';
              }
              return 'stories-misc';
            }
          },
        },
      },
    };

    // Otimizar deps
    config.optimizeDeps = {
      ...config.optimizeDeps,
      include: [
        'react',
        'react-dom',
        'react/jsx-runtime',
      ],
      exclude: ['@storybook/blocks'],
    };

    // Cache e performance
    config.cacheDir = 'node_modules/.vite-storybook';

    return config;
  }
};

export default config;