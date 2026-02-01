import type { Meta, StoryObj } from '@storybook/react';
import { DashboardTemplate } from './DashboardTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Home, Settings, Users, Search, Bell } from 'lucide-react';

const meta = {
    title: 'Templates/Dashboard',
    component: DashboardTemplate,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Template de dashboard com sidebar, header e área de conteúdo. Ideal para aplicações administrativas.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DashboardTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sidebar mockado
const SidebarExample = () => (
    <div className="flex flex-col h-full p-4">
        <div className="mb-8">
            <h2 className="text-2xl font-bold">Logo</h2>
        </div>
        <nav className="flex-1 space-y-2">
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Dashboard
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Usuários
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Configurações
            </Button>
        </nav>
    </div>
);

// Header mockado
const HeaderExample = () => (
    <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar..." className="pl-10" />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
            </Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </div>
);

// Content mockado
const ContentExample = () => (
    <div className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">
                Bem-vindo ao painel de controle
            </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Total de Usuários</CardTitle>
                    <CardDescription>+20.1% em relação ao mês passado</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2,543</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Vendas</CardTitle>
                    <CardDescription>+15.2% em relação ao mês passado</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">R$ 45,231</div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Conversão</CardTitle>
                    <CardDescription>+5.3% em relação ao mês passado</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12.5%</div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export const Default: Story = {
    args: {
        sidebar: <SidebarExample />,
        header: <HeaderExample />,
        content: <ContentExample />,
    },
};

export const WithoutSidebar: Story = {
    args: {
        header: <HeaderExample />,
        content: <ContentExample />,
    },
};

export const WithoutHeader: Story = {
    args: {
        sidebar: <SidebarExample />,
        content: <ContentExample />,
    },
};

export const MinimalLayout: Story = {
    args: {
        content: (
            <div className="max-w-4xl mx-auto">
                <ContentExample />
            </div>
        ),
    },
};
