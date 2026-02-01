# DesignSystem-ShadCN

A modern design system built with [shadcn/ui](https://ui.shadcn.com/) components and [Storybook](https://storybook.js.org/).

## Features

- 🎨 Built with shadcn/ui components
- 📚 Interactive component documentation with Storybook
- ⚡️ Next.js 16 with App Router
- 🎭 TypeScript support
- 🌈 Tailwind CSS for styling
- 🎯 ESLint for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Or with npm
npm install
```

### Development

```bash
# Run Next.js development server
pnpm dev

# Run Storybook
pnpm storybook
```

### Build

```bash
# Build Next.js app
pnpm build

# Build Storybook
pnpm build-storybook
```

## Components

This design system includes the following shadcn/ui components:

- **Button** - Various button variants (default, destructive, outline, secondary, ghost, link)
- **Card** - Card component with header, content, and footer
- **Input** - Text input component
- **Label** - Label component for form fields

## 📚 Storybook

Acesse nosso catálogo de componentes online:

**[Ver Storybook →](https://fabioaap.github.io/DesignSystem-ShadCN/)**

### Desenvolvimento Local

```bash
# Executar Storybook localmente
pnpm storybook

# Build do Storybook
pnpm build-storybook
```

Depois abra [http://localhost:6006](http://localhost:6006) no seu navegador.

### Componentes Disponíveis

- **Button** - Botões com variantes (default, destructive, outline, secondary, ghost, link)
- **Card** - Cards para conteúdo estruturado
- **Input** - Campos de entrada de texto
- **Label** - Rótulos para formulários

## Project Structure

```
.
├── .storybook/           # Storybook configuration
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utility functions
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## License

ISC
