import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePage } from './ProfilePage';

const meta = {
    title: 'Pages/Profile',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Página completa de perfil do usuário com formulário de edição, upload de avatar, configurações de privacidade e painel de ajuda.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
