import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w3ELUKlZdgcvxepmqDsDX3/-shadcn-ui-components-with-variables---Tailwind-classes---Updated-November-2025--Community-?node-id=73-1984',
    },
    docs: {
      description: {
        component: 'Campo de texto multilinha para entradas longas.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Digite sua mensagem aqui...',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Campo desabilitado',
    disabled: true,
  },
};
