import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Forms/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
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
