# Copilot Instructions for DesignSystem-ShadCN

## Project Overview

Design System baseado em **shadcn/ui** com documentação via **Storybook**, construído com Next.js 16, React 19, TypeScript e Tailwind CSS 4. Inclui um servidor MCP para integração com IAs.

## Architecture

```
src/components/ui/    # Componentes shadcn/ui (cada um com .tsx + .stories.tsx)
src/lib/utils.ts      # Utilitário cn() para classes condicionais
src/app/              # Next.js App Router (layout, page, globals.css)
mcp-server/           # Servidor MCP para acesso programático aos componentes
```

## Key Patterns

### Component Structure (shadcn/ui style)

Componentes usam `class-variance-authority` (cva) para variantes e `cn()` para merge de classes:

```tsx
// Padrão obrigatório para componentes
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("base-classes", {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: "default", size: "default" }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";
export { Button, buttonVariants };
```

### Storybook Stories

Cada componente tem um arquivo `.stories.tsx` co-localizado. Padrão:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './component';

const meta = {
  title: 'Components/ComponentName',
  component: Component,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: { /* controles para variantes */ }
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: {...} };
```

### Design Tokens

Tokens definidos como CSS custom properties em [globals.css](src/app/globals.css) via `@theme`:

- Cores: `--color-background`, `--color-primary`, `--color-destructive`, etc.
- Suporte automático dark mode via `@media (prefers-color-scheme: dark)`
- Usar classes semânticas: `bg-background`, `text-foreground`, `text-destructive`

### shadcn/ui Configuration

Configuração em [components.json](components.json): style `new-york`, RSC habilitado, aliases `@/components`, `@/lib/utils`.

## Commands

```bash
pnpm dev              # Next.js dev server (localhost:3000)
pnpm storybook        # Storybook dev (localhost:6006)
pnpm build            # Build Next.js
pnpm build-storybook  # Build Storybook estático
pnpm lint             # ESLint
```

### MCP Server

```bash
cd mcp-server && npm install && npm run build && npm start
```

## Adding New Components

1. Crie `src/components/ui/[component].tsx` seguindo o padrão cva + forwardRef
2. Crie `src/components/ui/[component].stories.tsx` com variantes documentadas
3. Registre no MCP Server: adicione entrada em [mcp-server/src/components.ts](mcp-server/src/components.ts)

## Dependencies Pattern

- **Radix UI**: primitivos acessíveis (`@radix-ui/react-*`)
- **class-variance-authority**: variantes de componentes
- **tailwind-merge + clsx**: merge de classes via `cn()`
- **react-hook-form + zod**: formulários com validação

## Common Gotchas

- Sempre use `asChild` prop com `Slot` do Radix para composição
- Exporte tanto o componente quanto `*Variants` para reutilização
- Componentes client-side devem ter `"use client"` no topo
