import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from './drawer';

const meta = {
    title: 'Components/Drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Edit Profile</DrawerTitle>
                    <DrawerDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                    <p className="text-sm text-muted-foreground">
                        This is the drawer content area. You can add any content here.
                    </p>
                </div>
                <DrawerFooter>
                    <Button>Save changes</Button>
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};
