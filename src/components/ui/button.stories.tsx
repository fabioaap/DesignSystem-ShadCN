import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import { buttonSnippets } from '../../lib/code-snippets';
import { CodePreview } from './code-preview';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.default.react,
      },
    },
  },
};

/**
 * Code snippets showing usage in React, Vue and Vanilla HTML/JS
 */
export const CodeExamples: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
  render: (args) => (
    <div className="space-y-6 w-full max-w-3xl">
      <div className="flex justify-center p-6 border rounded-lg bg-background">
        <Button {...args}>{args.children}</Button>
      </div>
      <CodePreview 
        react={buttonSnippets.default.react}
        vue={buttonSnippets.default.vue}
        vanilla={buttonSnippets.default.vanilla}
      />
    </div>
  ),
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.destructive.react,
      },
    },
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.outline.react,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.secondary.react,
      },
    },
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.ghost.react,
      },
    },
  },
};

export const Link: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.link.react,
      },
    },
  },
};

export const Small: Story = {
  args: {
    children: 'Small Button',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large Button',
    size: 'lg',
  },
};

/**
 * All variants displayed together with code examples
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

/**
 * All sizes displayed together
 */
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
