import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w3ELUKlZdgcvxepmqDsDX3/-shadcn-ui-components-with-variables---Tailwind-classes---Updated-November-2025--Community-?node-id=73-1984',
    },
    docs: {
      description: {
        component: 'Caixa de seleção para múltiplas escolhas em formulários.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label htmlFor="terms">Aceitar termos e condições</label>
    </div>
  ),
};

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <label htmlFor="checked">Opção selecionada</label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="disabled" disabled />
      <label htmlFor="disabled">Opção desabilitada</label>
    </div>
  ),
};
