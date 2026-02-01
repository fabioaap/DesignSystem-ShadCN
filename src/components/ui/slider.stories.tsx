import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './slider';

const meta = {
  title: 'Components/Forms/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w3ELUKlZdgcvxepmqDsDX3/-shadcn-ui-components-with-variables---Tailwind-classes---Updated-November-2025--Community-?node-id=73-1984',
    },
    docs: {
      description: {
        component: 'Controle deslizante para seleção de valores numéricos.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  ),
};

export const Range: Story = {
  render: () => (
    <div className="w-[300px]">
      <Slider defaultValue={[25, 75]} max={100} step={1} />
    </div>
  ),
};
