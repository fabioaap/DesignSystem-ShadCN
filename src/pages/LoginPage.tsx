"use client";

import React from 'react';
import { AuthTemplate } from '@/templates/AuthTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github } from 'lucide-react';

const LoginForm = () => (
    <Card>
        <CardHeader className="space-y-1">
            <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">DS</span>
                </div>
            </div>
            <CardTitle className="text-2xl font-bold text-center">Bem-vindo de volta</CardTitle>
            <CardDescription className="text-center">
                Entre com sua conta para continuar
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    Github
                </Button>
                <Button variant="outline" className="w-full">
                    <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Google
                </Button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Ou continue com
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    defaultValue="demo@example.com"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <Label htmlFor="password">Senha</Label>
                    <a href="#" className="text-sm text-primary hover:underline">
                        Esqueceu a senha?
                    </a>
                </div>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    defaultValue="password123"
                />
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Lembrar por 30 dias
                </label>
            </div>

            <Button className="w-full" size="lg">
                Entrar
            </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-muted-foreground text-center">
                Não tem uma conta?{' '}
                <a href="#" className="text-primary hover:underline font-medium">
                    Cadastre-se gratuitamente
                </a>
            </div>
        </CardFooter>
    </Card>
);

const AsideContent = () => (
    <div className="relative w-full h-full flex items-center justify-center p-12 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
        <div className="space-y-6 text-center max-w-md">
            <div className="space-y-2">
                <h2 className="text-4xl font-bold tracking-tight">
                    Transforme suas ideias em realidade
                </h2>
                <p className="text-lg text-muted-foreground">
                    Acesse nosso design system com componentes modernos, acessíveis e prontos para produção.
                </p>
            </div>

            <div className="flex flex-col items-center gap-4 pt-8">
                <div className="flex -space-x-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="h-12 w-12 rounded-full border-4 border-background bg-muted flex items-center justify-center"
                        >
                            <span className="text-xs font-medium">+{i * 2}k</span>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">
                    Mais de <span className="font-bold text-foreground">10.000 desenvolvedores</span> confiam em nós
                </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="space-y-1">
                    <div className="text-3xl font-bold">46</div>
                    <div className="text-xs text-muted-foreground">Componentes</div>
                </div>
                <div className="space-y-1">
                    <div className="text-3xl font-bold">99%</div>
                    <div className="text-xs text-muted-foreground">Acessível</div>
                </div>
                <div className="space-y-1">
                    <div className="text-3xl font-bold">24/7</div>
                    <div className="text-xs text-muted-foreground">Suporte</div>
                </div>
            </div>
        </div>
    </div>
);

export const LoginPage = () => {
    return (
        <AuthTemplate aside={<AsideContent />}>
            <LoginForm />
        </AuthTemplate>
    );
};
