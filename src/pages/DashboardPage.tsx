"use client";

import React from 'react';
import { DashboardTemplate } from '@/templates/DashboardTemplate';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
    Home,
    Settings,
    Users,
    Search,
    Bell,
    BarChart3,
    ShoppingCart,
    TrendingUp,
    DollarSign
} from 'lucide-react';

const Sidebar = () => (
    <div className="flex flex-col h-full p-4">
        <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
            <p className="text-sm text-muted-foreground">Analytics & Reports</p>
        </div>
        <nav className="flex-1 space-y-2">
            <Button variant="default" className="w-full justify-start gap-2">
                <Home className="h-4 w-4" />
                Visão Geral
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <BarChart3 className="h-4 w-4" />
                Analytics
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <ShoppingCart className="h-4 w-4" />
                Vendas
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Users className="h-4 w-4" />
                Clientes
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Configurações
            </Button>
        </nav>
        <div className="pt-4 border-t">
            <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">João Silva</p>
                    <p className="text-xs text-muted-foreground truncate">Admin</p>
                </div>
            </div>
        </div>
    </div>
);

const Header = () => (
    <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center gap-4 flex-1">
            <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Buscar transações, clientes..." className="pl-10" />
            </div>
        </div>
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JS</AvatarFallback>
            </Avatar>
        </div>
    </div>
);

const Content = () => (
    <div className="space-y-6">
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Visão Geral</h1>
                <p className="text-muted-foreground">
                    Acompanhe suas métricas e performance em tempo real
                </p>
            </div>
            <div className="flex gap-2">
                <Button variant="outline">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Exportar
                </Button>
                <Button>
                    <BarChart3 className="mr-2 h-4 w-4" />
                    Relatório
                </Button>
            </div>
        </div>

        {/* Métricas principais */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">R$ 45.231,89</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+20.1%</span> em relação ao mês passado
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">2.543</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+15.2%</span> novos usuários
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Vendas</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1.234</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+12.5%</span> em relação ao mês passado
                    </p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">12.5%</div>
                    <p className="text-xs text-muted-foreground">
                        <span className="text-green-500">+5.3%</span> em relação ao mês passado
                    </p>
                </CardContent>
            </Card>
        </div>

        {/* Gráficos e tabelas */}
        <div className="grid gap-4 lg:grid-cols-7">
            <Card className="lg:col-span-4">
                <CardHeader>
                    <CardTitle>Vendas Recentes</CardTitle>
                    <CardDescription>
                        Últimas 5 transações realizadas
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {[
                            { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+R$ 1.999,00" },
                            { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+R$ 39,00" },
                            { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+R$ 299,00" },
                            { name: "William Kim", email: "will@email.com", amount: "+R$ 99,00" },
                            { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+R$ 39,00" },
                        ].map((sale, i) => (
                            <div key={i} className="flex items-center">
                                <Avatar className="h-9 w-9">
                                    <AvatarFallback>{sale.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 space-y-1 flex-1">
                                    <p className="text-sm font-medium leading-none">{sale.name}</p>
                                    <p className="text-sm text-muted-foreground">{sale.email}</p>
                                </div>
                                <div className="ml-auto font-medium text-green-500">
                                    {sale.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Metas do Mês</CardTitle>
                    <CardDescription>
                        Acompanhe o progresso das suas metas
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Receita</span>
                            <span className="text-muted-foreground">R$ 45k / R$ 50k</span>
                        </div>
                        <Progress value={90} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Novos Clientes</span>
                            <span className="text-muted-foreground">234 / 300</span>
                        </div>
                        <Progress value={78} />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Produtos Vendidos</span>
                            <span className="text-muted-foreground">1.2k / 2k</span>
                        </div>
                        <Progress value={60} />
                    </div>
                    <div className="pt-4 border-t">
                        <Badge variant="outline" className="w-full justify-center">
                            Meta mensal em andamento
                        </Badge>
                    </div>
                </CardContent>
            </Card>
        </div>
    </div>
);

export const DashboardPage = () => {
    return (
        <DashboardTemplate
            sidebar={<Sidebar />}
            header={<Header />}
            content={<Content />}
        />
    );
};
