import type { Preview } from "@storybook/nextjs-vite";
import { withThemeByClassName } from '@storybook/addon-themes';
import '../src/app/globals.css';
import { darkTheme } from './theme';

// Importar fontes
import '@fontsource-variable/inter';
import '@fontsource/fira-code';

const preview: Preview = {
  parameters: {
    layout: 'centered',
    
    // Backgrounds
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0a0a0a',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'zinc',
          value: '#18181b',
        },
      ],
    },
    
    // Controls
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
      expanded: true,
      sort: 'requiredFirst',
    },
    
    // Actions
    actions: { 
      argTypesRegex: "^on[A-Z].*" 
    },
    
    // Docs
    docs: {
      theme: darkTheme,
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h1, h2, h3',
        title: 'Índice',
        disable: false,
      },
    },
    
    // Viewport
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: { width: '375px', height: '667px' },
        },
        tablet: {
          name: 'Tablet',
          styles: { width: '768px', height: '1024px' },
        },
        desktop: {
          name: 'Desktop',
          styles: { width: '1440px', height: '900px' },
        },
      },
    },
    
    // Options
    options: {
      storySort: {
        order: [
          'Introdução',
          ['Bem-vindo', 'Instalação', 'Contribuindo'],
          'Fundamentos',
          ['Cores', 'Tipografia', 'Espaçamento', 'Ícones'],
          'Componentes',
          [
            'Formulários',
            'Navegação',
            'Feedback',
            'Overlays',
            'Layout',
            'Outros'
          ],
        ],
      },
    },
  },
  
  // Theme toggle
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],
  
  // Global types
  globalTypes: {
    theme: {
      name: 'Tema',
      description: 'Tema global para os componentes',
      defaultValue: 'dark',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
        dynamicTitle: true,
      },
    },
  },
};

export default preview;