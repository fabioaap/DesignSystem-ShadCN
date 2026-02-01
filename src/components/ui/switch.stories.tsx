import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './switch';
import { Label } from './label';

const meta = {
  title: 'Components/Forms/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w3ELUKlZdgcvxepmqDsDX3/-shadcn-ui-components-with-variables---Tailwind-classes---Updated-November-2025--Community-?node-id=73-1984',
    },
    docs: {
      description: {
        component: 'Toggle switch para ativar/desativar opções.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Modo avião</Label>
    </div>
  ),
};
