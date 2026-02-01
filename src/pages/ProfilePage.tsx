"use client";

import React from 'react';
import { FormTemplate } from '@/templates/FormTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { InfoIcon, Upload } from 'lucide-react';

const ProfileFields = () => (
    <>
        <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JS</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
                <Button variant="outline" size="sm">
                    <Upload className="mr-2 h-4 w-4" />
                    Alterar foto
                </Button>
                <p className="text-xs text-muted-foreground">
                    JPG, GIF ou PNG. Máximo 800KB.
                </p>
            </div>
        </div>

        <Separator />

        <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="firstName">Nome</Label>
                    <Input id="firstName" defaultValue="João" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input id="lastName" defaultValue="Silva" />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="username">Nome de usuário</Label>
                <div className="flex gap-2">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-muted text-sm text-muted-foreground">
                        @
                    </span>
                    <Input
                        id="username"
                        className="rounded-l-none"
                        defaultValue="joaosilva"
                    />
                </div>
                <p className="text-xs text-muted-foreground">
                    Seu nome de usuário é único e público.
                </p>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="joao@exemplo.com" />
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Verificado</Badge>
                    <span className="text-xs text-muted-foreground">
                        Email confirmado
                    </span>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                    id="bio"
                    placeholder="Conte-nos sobre você..."
                    className="resize-none"
                    rows={4}
                    defaultValue="Desenvolvedor apaixonado por criar experiências incríveis."
                />
                <p className="text-xs text-muted-foreground">
                    Máximo 160 caracteres. Aparece no seu perfil público.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Select defaultValue="br">
                        <SelectTrigger id="country">
                            <SelectValue placeholder="Selecione um país" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="br">🇧🇷 Brasil</SelectItem>
                            <SelectItem value="us">🇺🇸 Estados Unidos</SelectItem>
                            <SelectItem value="pt">🇵🇹 Portugal</SelectItem>
                            <SelectItem value="es">🇪🇸 Espanha</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="timezone">Fuso horário</Label>
                    <Select defaultValue="brasilia">
                        <SelectTrigger id="timezone">
                            <SelectValue placeholder="Selecione o fuso" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="brasilia">Brasília (GMT-3)</SelectItem>
                            <SelectItem value="nyc">New York (GMT-5)</SelectItem>
                            <SelectItem value="london">London (GMT+0)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </div>

        <Separator />

        <div className="space-y-4">
            <h3 className="text-lg font-semibold">Preferências</h3>

            <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                    <Label htmlFor="marketing">Emails de marketing</Label>
                    <p className="text-sm text-muted-foreground">
                        Receber emails sobre novidades e atualizações
                    </p>
                </div>
                <Switch id="marketing" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                    <Label htmlFor="notifications">Notificações por email</Label>
                    <p className="text-sm text-muted-foreground">
                        Receber notificações de atividades importantes
                    </p>
                </div>
                <Switch id="notifications" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
                <div className="space-y-0.5 flex-1">
                    <Label htmlFor="public">Perfil público</Label>
                    <p className="text-sm text-muted-foreground">
                        Tornar seu perfil visível para outros usuários
                    </p>
                </div>
                <Switch id="public" defaultChecked />
            </div>
        </div>
    </>
);

const HelpAside = () => (
    <div className="space-y-6">
        <div>
            <h3 className="font-semibold mb-2">Sobre seu perfil</h3>
            <p className="text-sm text-muted-foreground">
                Seu perfil é a sua identidade na plataforma. Preencha com informações verdadeiras e atualizadas.
            </p>
        </div>

        <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Privacidade</AlertTitle>
            <AlertDescription className="text-sm">
                Você controla quais informações são públicas. Suas informações privadas nunca serão compartilhadas.
            </AlertDescription>
        </Alert>

        <Separator />

        <div className="space-y-3">
            <h4 className="text-sm font-medium">Visibilidade do perfil</h4>
            <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Público</Badge>
                    <span className="text-muted-foreground">Nome, avatar, bio</span>
                </div>
                <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Privado</Badge>
                    <span className="text-muted-foreground">Email, telefone</span>
                </div>
            </div>
        </div>

        <Separator />

        <div className="space-y-2">
            <h4 className="text-sm font-medium">Links úteis</h4>
            <ul className="space-y-1 text-sm">
                <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        Política de Privacidade
                    </a>
                </li>
                <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        Termos de Uso
                    </a>
                </li>
                <li>
                    <a href="#" className="text-muted-foreground hover:text-primary">
                        Central de Ajuda
                    </a>
                </li>
            </ul>
        </div>

        <Separator />

        <Button variant="destructive" className="w-full" size="sm">
            Excluir conta
        </Button>
        <p className="text-xs text-muted-foreground text-center">
            Esta ação não pode ser desfeita
        </p>
    </div>
);

export const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="border-b">
                <div className="container flex h-16 items-center px-6">
                    <div className="flex items-center gap-6 flex-1">
                        <h2 className="text-lg font-semibold">Configurações</h2>
                        <nav className="flex gap-6">
                            <a href="#" className="text-sm font-medium border-b-2 border-primary pb-4">
                                Perfil
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground pb-4">
                                Segurança
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground pb-4">
                                Notificações
                            </a>
                            <a href="#" className="text-sm text-muted-foreground hover:text-foreground pb-4">
                                Aparência
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <FormTemplate
                title="Perfil Público"
                description="Gerencie suas informações pessoais e como elas aparecem para outros usuários"
                children={<ProfileFields />}
                actions={
                    <>
                        <Button variant="outline">Cancelar</Button>
                        <Button>Salvar alterações</Button>
                    </>
                }
                aside={<HelpAside />}
            />
        </div>
    );
};
