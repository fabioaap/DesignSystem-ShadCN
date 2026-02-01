import type { Meta, StoryObj } from '@storybook/react';
import {
    Calendar,
    Home,
    Inbox,
    Search,
    Settings,
} from 'lucide-react';
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from './sidebar';

const meta = {
    title: 'Organisms/Sidebar',
    component: Sidebar,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
    { title: 'Home', url: '#', icon: Home },
    { title: 'Inbox', url: '#', icon: Inbox },
    { title: 'Calendar', url: '#', icon: Calendar },
    { title: 'Search', url: '#', icon: Search },
    { title: 'Settings', url: '#', icon: Settings },
];

export const Default: Story = {
    render: () => (
        <SidebarProvider>
            <div className="flex min-h-[400px] w-full">
                <Sidebar>
                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Application</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {items.map((item) => (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <a href={item.url}>
                                                    <item.icon />
                                                    <span>{item.title}</span>
                                                </a>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>
                </Sidebar>
                <main className="flex-1 p-6">
                    <h1 className="text-2xl font-bold">Main Content</h1>
                    <p className="text-muted-foreground mt-2">
                        This is the main content area next to the sidebar.
                    </p>
                </main>
            </div>
        </SidebarProvider>
    ),
};
