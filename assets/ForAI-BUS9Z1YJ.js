import{j as n}from"./jsx-runtime-D504mV7P.js";import{useMDXComponents as t}from"./index-CqGkrt5j.js";import{M as s}from"./blocks-DxLW8F1I.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-BZ7zkwJU.js";import"./index-DkSwWaKu.js";function a(o){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...o.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Introduction/For AI Platforms"}),`
`,n.jsx(e.h1,{id:"-guia-para-plataformas-de-vibe-coding",children:"🤖 Guia para Plataformas de Vibe Coding"}),`
`,n.jsxs(e.p,{children:["Este guia mostra como usar nosso Design System em ",n.jsx(e.strong,{children:"todas as principais plataformas de desenvolvimento assistido por IA"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-lovable-lovabledev",children:"🎨 Lovable (lovable.dev)"}),`
`,n.jsx(e.h3,{id:"quick-start",children:"Quick Start"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Método 1: shadcn CLI (Recomendado)
npx shadcn@latest add button card dialog

# Método 2: Copiar código do Storybook
# Acesse: https://fabioaap.github.io/DesignSystem-ShadCN/
# Copie da aba "React" em cada componente
`})}),`
`,n.jsx(e.h3,{id:"prompt-otimizado",children:"Prompt Otimizado"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Crie uma [página/componente] usando o Design System shadcn/ui.

Componentes disponíveis em: https://fabioaap.github.io/DesignSystem-ShadCN/

Use:
- Button (variantes: default, destructive, outline, ghost)
- Card (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- Input + Label (com validação via react-hook-form + zod)

Stack: React 19, TypeScript, Tailwind CSS 4, Next.js 16

Siga os exemplos da aba "Code Examples" de cada componente.
`})}),`
`,n.jsx(e.h3,{id:"configuração-inicial",children:"Configuração Inicial"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// utils/cn.ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Instalar dependências essenciais
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npm install tailwindcss-animate
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-v0dev-vercel",children:"⚡ v0.dev (Vercel)"}),`
`,n.jsx(e.h3,{id:"como-usar",children:"Como Usar"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"No chat do v0, cole este prompt:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Use o Design System shadcn/ui para criar [seu objetivo].

Referência completa: https://fabioaap.github.io/DesignSystem-ShadCN/

Componentes que vou usar:
- Button (https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button)
- Card
- Dialog

Copie o código da aba "React" de cada componente.
Use as variantes documentadas no Storybook.
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:"O v0 já tem shadcn/ui integrado, então pode usar diretamente:"}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Component() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
`})}),`
`,n.jsx(e.h3,{id:"dica-pro",children:"Dica Pro"}),`
`,n.jsx(e.p,{children:"v0 reconhece automaticamente componentes shadcn. Apenas mencione o nome:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`"Crie um form de login com Button, Input e Card do shadcn/ui"
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-boltnew-stackblitz",children:"🚀 Bolt.new (StackBlitz)"}),`
`,n.jsx(e.h3,{id:"instalação-via-terminal",children:"Instalação Via Terminal"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# 1. Abra o terminal no Bolt.new
# 2. Instale shadcn
npx shadcn@latest init

# 3. Adicione componentes
npx shadcn@latest add button input card dialog form
`})}),`
`,n.jsx(e.h3,{id:"prompt-para-bolt",children:"Prompt para Bolt"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Crie uma aplicação [descrição] usando Next.js + shadcn/ui.

Referência: https://fabioaap.github.io/DesignSystem-ShadCN/

Setup inicial:
1. npx shadcn@latest init
2. npx shadcn@latest add [componentes necessários]

Use os componentes conforme documentado no Storybook.
`})}),`
`,n.jsx(e.h3,{id:"estrutura-inicial",children:"Estrutura Inicial"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// components/ui/button.tsx
// Copie o código completo da aba React do Storybook
// https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// ... resto do código do Button
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-cursor-cursorsh",children:"🖱️ Cursor (cursor.sh)"}),`
`,n.jsx(e.h3,{id:"configuração-do-cursor-rules",children:"Configuração do Cursor Rules"}),`
`,n.jsxs(e.p,{children:["Crie ",n.jsx(e.code,{children:".cursorrules"})," na raiz do projeto:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`# Design System Rules

Use shadcn/ui components from: https://fabioaap.github.io/DesignSystem-ShadCN/

## Component Usage

1. Always use components from @/components/ui/[component]
2. Follow the examples in the Storybook "Code Examples" tab
3. Use TypeScript with proper types
4. Apply variants as documented: variant="default" | "destructive" | "outline"

## Installation

Run: npx shadcn@latest add [component-name]

## Available Components

Button, Card, Dialog, Input, Label, Select, Form, Table, Tabs, Accordion, 
Alert, Avatar, Badge, Calendar, Checkbox, Command, Dropdown Menu, Sheet, 
Sidebar, Skeleton, Toast, Tooltip, and 33 more.

## Code Style

- Use cn() utility for className merging
- Prefer composition over prop drilling
- Use forwardRef for component refs
- Export both component and variants (if applicable)
`})}),`
`,n.jsx(e.h3,{id:"chat-do-cursor",children:"Chat do Cursor"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`@web https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button

Crie um componente usando o Button do shadcn/ui.
Siga exatamente o código da aba "React" no Storybook.
`})}),`
`,n.jsx(e.h3,{id:"composer-do-cursor",children:"Composer do Cursor"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Criar página de dashboard com:
- Sidebar (shadcn/ui)
- Card com estatísticas
- Table com dados
- Button para ações

Referência: https://fabioaap.github.io/DesignSystem-ShadCN/
Use npx shadcn@latest add [componente] para instalar.
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-github-copilot",children:"🐙 GitHub Copilot"}),`
`,n.jsx(e.h3,{id:"configuração-no-vscode",children:"Configuração no VSCode"}),`
`,n.jsxs(e.p,{children:["Adicione ao ",n.jsx(e.code,{children:".github/copilot-instructions.md"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-markdown",children:`# Design System Guidelines

Use shadcn/ui components for all UI elements.

Reference: https://fabioaap.github.io/DesignSystem-ShadCN/

## Component Import Pattern

\`\`\`typescript
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
`})}),`
`,n.jsx(e.h2,{id:"installation-command",children:"Installation Command"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx shadcn@latest add [component-name]
`})}),`
`,n.jsx(e.h2,{id:"available-components-46-total",children:"Available Components (46 total)"}),`
`,n.jsx(e.p,{children:`Button, Card, Dialog, Input, Label, Select, Form, Table, Tabs, Accordion,
Alert, Alert Dialog, Avatar, Badge, Breadcrumb, Calendar, Carousel, Chart,
Checkbox, Collapsible, Command, Context Menu, Drawer, Dropdown Menu,
Hover Card, Menubar, Navigation Menu, Pagination, Popover, Progress,
Radio Group, Resizable, Scroll Area, Separator, Sheet, Sidebar, Skeleton,
Slider, Sonner, Switch, Textarea, Toggle, Toggle Group, Tooltip`}),`
`,n.jsx(e.h2,{id:"examples",children:"Examples"}),`
`,n.jsx(e.p,{children:'See complete examples in Storybook under "Code Examples" tab.'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`
### Inline Comments para Copilot

\`\`\`typescript
// Create a login form using shadcn/ui Button, Input, Card
// Reference: https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button
export function LoginForm() {
  // Copilot will autocomplete based on shadcn patterns
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-replit-agent",children:"🔧 Replit Agent"}),`
`,n.jsx(e.h3,{id:"prompt-para-replit",children:"Prompt para Replit"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Crie uma aplicação [descrição] usando Next.js + shadcn/ui.

Design System: https://fabioaap.github.io/DesignSystem-ShadCN/

Setup:
1. Inicializar Next.js com TypeScript e Tailwind
2. Instalar shadcn: npx shadcn@latest init
3. Adicionar componentes necessários: npx shadcn@latest add button card input

Componentes para usar:
- Button (variantes: default, outline, ghost, destructive)
- Card (estrutura: CardHeader, CardTitle, CardContent, CardFooter)
- Input + Label (para formulários)

Copie o código exato da aba "React" de cada componente no Storybook.
`})}),`
`,n.jsx(e.h3,{id:"estrutura-de-pastas",children:"Estrutura de Pastas"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`my-app/
├── components/
│   └── ui/              # Componentes shadcn
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts         # Função cn()
├── app/
│   ├── globals.css      # CSS tokens
│   └── page.tsx
└── components.json      # Config shadcn
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-claude--claude-artifacts",children:"🎭 Claude + Claude Artifacts"}),`
`,n.jsx(e.h3,{id:"usando-no-claudeai",children:"Usando no Claude.ai"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Crie um [componente/página] usando shadcn/ui.

Referência completa: https://fabioaap.github.io/DesignSystem-ShadCN/

Componentes:
- Button: https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button
- Card: https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-card

Copie o código da aba "React" e adapte para Artifacts.

Dependências para incluir:
\`\`\`typescript
import { cn } from "./utils"
import { cva } from "class-variance-authority"
`})}),`
`,n.jsx(e.h3,{id:"artifacts-setup",children:"Artifacts Setup"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// Artifact: "Button Component"
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

// Utility function
function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ")
}

// Cole o código do Button do Storybook aqui
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2...",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        // ... resto das variantes
      }
    }
  }
)

export default function App() {
  return (
    <div className="p-8 space-y-4">
      <button className={cn(buttonVariants({ variant: "default" }))}>
        Default Button
      </button>
    </div>
  )
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"️-codesandbox-ai",children:"🏖️ CodeSandbox AI"}),`
`,n.jsx(e.h3,{id:"inicialização",children:"Inicialização"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# No terminal do CodeSandbox
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install

# Instalar shadcn
npx shadcn@latest init
npx shadcn@latest add button card dialog
`})}),`
`,n.jsx(e.h3,{id:"prompt-para-codesandbox-ai",children:"Prompt para CodeSandbox AI"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Criar aplicação React + TypeScript usando shadcn/ui.

Referência: https://fabioaap.github.io/DesignSystem-ShadCN/

Setup:
1. Vite + React + TypeScript
2. Tailwind CSS configurado
3. shadcn/ui instalado

Componentes disponíveis em /components/ui/
Use as variantes documentadas no Storybook.
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-configuração-universal-todas-as-plataformas",children:"📦 Configuração Universal (Todas as Plataformas)"}),`
`,n.jsx(e.h3,{id:"tailwindconfigts",children:"tailwind.config.ts"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
`})}),`
`,n.jsx(e.h3,{id:"globalscss-design-tokens",children:"globals.css (Design Tokens)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 5.9% 10%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}
`})}),`
`,n.jsx(e.h3,{id:"libutilsts",children:"lib/utils.ts"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-prompt-template-universal",children:"🎯 Prompt Template Universal"}),`
`,n.jsxs(e.p,{children:["Use este template em ",n.jsx(e.strong,{children:"qualquer plataforma"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`Crie [descrição do projeto] usando shadcn/ui.

📚 Referência: https://fabioaap.github.io/DesignSystem-ShadCN/

🔧 Stack:
- React 19 + TypeScript
- Tailwind CSS 4
- shadcn/ui components

📦 Componentes necessários:
- Button (https://fabioaap.github.io/DesignSystem-ShadCN/?path=/docs/components-button)
- Card
- Input + Label
- [outros componentes]

✅ Instruções:
1. Instalar: npx shadcn@latest add [componentes]
2. Copiar código da aba "React" no Storybook
3. Usar variantes documentadas: variant="default" | "outline" | "ghost"
4. Incluir validação com react-hook-form + zod (se form)

🎨 Design:
- Seguir exemplos do Storybook
- Manter acessibilidade (ARIA, keyboard nav)
- Suportar dark mode
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-comparação-de-plataformas",children:"🚀 Comparação de Plataformas"}),`
`,n.jsxs(e.p,{children:[`| Plataforma | Instalação shadcn | Acesso ao Storybook | Suporte TypeScript | Melhor Para |
|------------|-------------------|---------------------|-------------------|-------------|
| `,n.jsx(e.strong,{children:"Lovable"}),` | ✅ Terminal | ✅ Direto | ✅ Completo | Landing pages, apps completos |
| `,n.jsx(e.strong,{children:"v0.dev"}),` | ✅ Nativo | ✅ URL no prompt | ✅ Completo | Protótipos rápidos |
| `,n.jsx(e.strong,{children:"Bolt.new"}),` | ✅ Terminal | ✅ URL no prompt | ✅ Completo | Full-stack apps |
| `,n.jsx(e.strong,{children:"Cursor"}),` | ✅ Terminal | ✅ @web tag | ✅ Completo | Desenvolvimento local |
| `,n.jsx(e.strong,{children:"Copilot"}),` | ✅ Terminal | ✅ Via comments | ✅ Completo | Codificação assistida |
| `,n.jsx(e.strong,{children:"Replit"}),` | ✅ Terminal | ✅ URL no prompt | ✅ Completo | Apps colaborativos |
| `,n.jsx(e.strong,{children:"Claude"}),` | ⚠️ Manual | ✅ URL direto | ✅ Artifacts | Componentes isolados |
| `,n.jsx(e.strong,{children:"CodeSandbox"})," | ✅ Terminal | ✅ URL no prompt | ✅ Completo | Demos e exemplos |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-suporte",children:"📞 Suporte"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook:"})," https://fabioaap.github.io/DesignSystem-ShadCN/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentação:"})," https://ui.shadcn.com"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub:"})," https://github.com/fabioaap/DesignSystem-ShadCN"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Issues:"})," https://github.com/fabioaap/DesignSystem-ShadCN/issues"]}),`
`]})]})}function h(o={}){const{wrapper:e}={...t(),...o.components};return e?n.jsx(e,{...o,children:n.jsx(a,{...o})}):a(o)}export{h as default};
