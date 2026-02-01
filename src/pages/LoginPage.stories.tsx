import type { Meta, StoryObj } from '@storybook/react';
import { LoginPage } from './LoginPage';

const meta = {
    title: 'Pages/Login',
    component: LoginPage,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Página completa de login com autenticação social, formulário e painel lateral ilustrativo.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
