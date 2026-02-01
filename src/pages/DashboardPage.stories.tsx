import type { Meta, StoryObj } from '@storybook/react';
import { DashboardPage } from './DashboardPage';

const meta = {
    title: 'Pages/Dashboard',
    component: DashboardPage,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Página completa de dashboard com sidebar, métricas, gráficos e tabelas. Exemplo real de aplicação administrativa.',
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DashboardPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
