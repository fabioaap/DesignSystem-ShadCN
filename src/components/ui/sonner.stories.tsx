import type { Meta, StoryObj } from '@storybook/react';
import { toast } from 'sonner';
import { Button } from './button';
import { Toaster } from './sonner';

const meta = {
    title: 'Molecules/Sonner',
    component: Toaster,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div>
            <Toaster />
            <Button
                variant="outline"
                onClick={() =>
                    toast('Event has been created', {
                        description: 'Sunday, December 03, 2023 at 9:00 AM',
                        action: {
                            label: 'Undo',
                            onClick: () => console.log('Undo'),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    ),
};

export const Types: Story = {
    render: () => (
        <div className="flex gap-2">
            <Toaster />
            <Button variant="outline" onClick={() => toast('Default toast')}>
                Default
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.success('Success toast')}
            >
                Success
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.error('Error toast')}
            >
                Error
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.warning('Warning toast')}
            >
                Warning
            </Button>
            <Button
                variant="outline"
                onClick={() => toast.info('Info toast')}
            >
                Info
            </Button>
        </div>
    ),
};
