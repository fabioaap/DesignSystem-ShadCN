import type { Meta, StoryObj } from '@storybook/react';
import { AuthTemplate } from './AuthTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const meta = {
    title: 'Templates/Auth',
    component: AuthTemplate,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Template de autenticação com formulário e painel lateral ilustrativo. Responsivo com layout adaptativo.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AuthTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Formulário de Login
const LoginForm = () => (
    <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Entrar</CardTitle>
            <CardDescription>
                Digite seu email e senha para acessar sua conta
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                />
            </div>
            <Button className="w-full">Entrar</Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
                Não tem uma conta?{' '}
                <a href="#" className="text-primary hover:underline">
                    Cadastre-se
                </a>
            </div>
        </CardFooter>
    </Card>
);

// Formulário de Registro
const SignUpForm = () => (
    <Card>
        <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Criar conta</CardTitle>
            <CardDescription>
                Preencha seus dados para criar uma nova conta
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Nome completo</Label>
                <Input
                    id="name"
                    type="text"
                    placeholder="João Silva"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                    id="signup-email"
                    type="email"
                    placeholder="seu@email.com"
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="signup-password">Senha</Label>
                <Input
                    id="signup-password"
                    type="password"
                    placeholder="••••••••"
                />
            </div>
            <Button className="w-full">Criar conta</Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
                Já tem uma conta?{' '}
                <a href="#" className="text-primary hover:underline">
                    Entrar
                </a>
            </div>
        </CardFooter>
    </Card>
);

// Painel lateral ilustrativo
const AsideContent = () => (
    <div className="relative w-full h-full flex items-center justify-center p-12">
        <div className="space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
                Bem-vindo ao nosso Design System
            </h2>
            <p className="text-lg text-muted-foreground">
                Componentes modernos e acessíveis para construir interfaces incríveis
            </p>
            <div className="flex justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-150" />
                <div className="h-2 w-2 rounded-full bg-primary animate-pulse delay-300" />
            </div>
        </div>
    </div>
);

export const Login: Story = {
    args: {
        children: <LoginForm />,
        aside: <AsideContent />,
    },
};

export const SignUp: Story = {
    args: {
        children: <SignUpForm />,
        aside: <AsideContent />,
    },
};

export const WithoutAside: Story = {
    args: {
        children: <LoginForm />,
        showAside: false,
    },
};

export const CenteredOnly: Story = {
    args: {
        children: (
            <div className="text-center space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Logo</h1>
                    <p className="text-muted-foreground mt-2">
                        Acesse sua conta
                    </p>
                </div>
                <LoginForm />
            </div>
        ),
        showAside: false,
    },
};
