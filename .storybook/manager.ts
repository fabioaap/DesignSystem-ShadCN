import { addons } from '@storybook/manager-api';
import { darkTheme } from './theme';

addons.setConfig({
  theme: darkTheme,
  
  // Sidebar
  sidebar: {
    showRoots: true,
    collapsedRoots: ['other'],
  },
  
  // Toolbar
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: false },
    eject: { hidden: false },
    copy: { hidden: false },
    fullscreen: { hidden: false },
  },
  
  // Panel
  enableShortcuts: true,
  showPanel: true,
  selectedPanel: 'controls',
  
  // UI behavior
  initialActive: 'sidebar',
});
