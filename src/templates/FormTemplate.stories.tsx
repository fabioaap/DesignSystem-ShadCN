import type { Meta, StoryObj } from '@storybook/react';
import { FormTemplate } from './FormTemplate';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

const meta = {
    title: 'Templates/Form',
    component: FormTemplate,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Template de formulário com título, campos, ações e painel lateral opcional para ajuda/informações.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FormTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

// Campos de formulário de perfil
const ProfileFields = () => (
    <>
        <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
                <Label htmlFor="firstName">Nome</Label>
                <Input id="firstName" placeholder="João" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="lastName">Sobrenome</Label>
                <Input id="lastName" placeholder="Silva" />
            </div>
        </div>

        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="joao@exemplo.com" />
        </div>

        <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
                id="bio"
                placeholder="Conte-nos sobre você..."
                className="resize-none"
                rows={4}
            />
        </div>

        <div className="space-y-2">
            <Label htmlFor="country">País</Label>
            <Select>
                <SelectTrigger id="country">
                    <SelectValue placeholder="Selecione um país" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="br">Brasil</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="pt">Portugal</SelectItem>
                </SelectContent>
            </Select>
        </div>

        <div className="flex items-center justify-between">
            <div className="space-y-0.5">
                <Label htmlFor="notifications">Notificações por email</Label>
                <div className="text-sm text-muted-foreground">
                    Receber atualizações por email
                </div>
            </div>
            <Switch id="notifications" />
        </div>
    </>
);

// Painel lateral com ajuda
const HelpAside = () => (
    <div className="space-y-4">
        <div>
            <h3 className="font-semibold mb-2">Dicas de perfil</h3>
            <p className="text-sm text-muted-foreground">
                Preencha suas informações para personalizar sua experiência.
            </p>
        </div>

        <Alert>
            <InfoIcon className="h-4 w-4" />
            <AlertTitle>Privacidade</AlertTitle>
            <AlertDescription className="text-sm">
                Suas informações estão seguras e nunca serão compartilhadas sem seu consentimento.
            </AlertDescription>
        </Alert>

        <div className="space-y-2">
            <h4 className="text-sm font-medium">Links úteis</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                    <a href="#" className="hover:text-primary">
                        Política de Privacidade
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary">
                        Termos de Uso
                    </a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary">
                        Suporte
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

export const Default: Story = {
    args: {
        title: 'Perfil',
        description: 'Gerencie suas informações pessoais',
        children: <ProfileFields />,
        actions: (
            <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar alterações</Button>
            </>
        ),
        aside: <HelpAside />,
    },
};

export const WithoutCard: Story = {
    args: {
        title: 'Configurações',
        description: 'Configure suas preferências',
        children: <ProfileFields />,
        actions: (
            <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
            </>
        ),
        variant: 'plain',
    },
};

export const WithoutAside: Story = {
    args: {
        title: 'Editar Perfil',
        description: 'Atualize suas informações',
        children: <ProfileFields />,
        actions: (
            <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
            </>
        ),
    },
};

export const SimpleForm: Story = {
    args: {
        title: 'Formulário Simples',
        children: (
            <>
                <div className="space-y-2">
                    <Label htmlFor="simple-input">Campo de texto</Label>
                    <Input id="simple-input" placeholder="Digite algo..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="simple-textarea">Mensagem</Label>
                    <Textarea
                        id="simple-textarea"
                        placeholder="Sua mensagem..."
                        rows={3}
                    />
                </div>
            </>
        ),
        actions: <Button>Enviar</Button>,
    },
};
