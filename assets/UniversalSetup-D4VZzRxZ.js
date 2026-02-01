import{j as n}from"./jsx-runtime-D504mV7P.js";import{useMDXComponents as r}from"./index-CqGkrt5j.js";import{M as a}from"./blocks-DxLW8F1I.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-BZ7zkwJU.js";import"./index-DkSwWaKu.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Introduction/Universal Setup"}),`
`,n.jsx(e.h1,{id:"-setup-universal---qualquer-plataforma",children:"🌍 Setup Universal - Qualquer Plataforma"}),`
`,n.jsxs(e.p,{children:["Este Design System funciona em ",n.jsx(e.strong,{children:"qualquer plataforma, ferramenta ou ambiente"})," que suporte:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ React (versão 18+)"}),`
`,n.jsx(e.li,{children:"✅ TypeScript (opcional mas recomendado)"}),`
`,n.jsx(e.li,{children:"✅ Tailwind CSS (versão 3+)"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-funciona-em",children:"✨ Funciona Em"}),`
`,n.jsx(e.h3,{id:"plataformas-de-desenvolvimento",children:"Plataformas de Desenvolvimento"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Create React App"}),`
`,n.jsx(e.li,{children:"Vite"}),`
`,n.jsx(e.li,{children:"Parcel"}),`
`,n.jsx(e.li,{children:"Webpack"}),`
`,n.jsx(e.li,{children:"Turbopack"}),`
`,n.jsx(e.li,{children:"esbuild"}),`
`]}),`
`,n.jsx(e.h3,{id:"frameworks",children:"Frameworks"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Next.js"})," (App Router ou Pages Router)"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Remix"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Gatsby"})}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Astro"})," (com React)"]}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Qwik"})}),`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Docusaurus"})}),`
`]}),`
`,n.jsx(e.h3,{id:"ides-e-editores",children:"IDEs e Editores"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"VSCode"}),`
`,n.jsx(e.li,{children:"WebStorm"}),`
`,n.jsx(e.li,{children:"Zed"}),`
`,n.jsx(e.li,{children:"Neovim (com LSP)"}),`
`,n.jsx(e.li,{children:"Emacs"}),`
`,n.jsx(e.li,{children:"Sublime Text"}),`
`]}),`
`,n.jsx(e.h3,{id:"ambientes-cloud",children:"Ambientes Cloud"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"GitHub Codespaces"}),`
`,n.jsx(e.li,{children:"GitPod"}),`
`,n.jsx(e.li,{children:"AWS Cloud9"}),`
`,n.jsx(e.li,{children:"Google Cloud Shell"}),`
`,n.jsx(e.li,{children:"Azure DevSpaces"}),`
`]}),`
`,n.jsx(e.h3,{id:"builders-visuais",children:"Builders Visuais"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Framer"}),`
`,n.jsx(e.li,{children:"Webflow (com código customizado)"}),`
`,n.jsx(e.li,{children:"Plasmic"}),`
`,n.jsx(e.li,{children:"Builder.io"}),`
`]}),`
`,n.jsx(e.h3,{id:"plataformas-mobile",children:"Plataformas Mobile"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"React Native Web"}),`
`,n.jsx(e.li,{children:"Expo (com Web)"}),`
`,n.jsx(e.li,{children:"Tamagui"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-setup-em-3-passos-universal",children:"🚀 Setup em 3 Passos (Universal)"}),`
`,n.jsx(e.h3,{id:"passo-1-verificar-requisitos",children:"Passo 1: Verificar Requisitos"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Seu projeto deve ter:
node --version    # v18+ recomendado
npm --version     # ou pnpm, yarn, bun
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`// package.json deve incluir:
{
  "dependencies": {
    "react": "^18.0.0",     // ou 19
    "react-dom": "^18.0.0"   // ou 19
  }
}
`})}),`
`,n.jsx(e.h3,{id:"passo-2-instalar-tailwind-css",children:"Passo 2: Instalar Tailwind CSS"}),`
`,n.jsx(e.p,{children:"Se ainda não tem Tailwind:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
`})}),`
`,n.jsxs(e.p,{children:["Configure ",n.jsx(e.code,{children:"tailwind.config.js"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
`})}),`
`,n.jsxs(e.p,{children:["Adicione ao seu CSS principal (ex: ",n.jsx(e.code,{children:"globals.css"})," ou ",n.jsx(e.code,{children:"index.css"}),"):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;
    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;
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
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;
    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;
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
`,n.jsx(e.h3,{id:"passo-3a-usar-shadcn-cli-recomendado",children:"Passo 3A: Usar shadcn CLI (Recomendado)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Inicializar shadcn (uma vez apenas)
npx shadcn@latest init

# Responda as perguntas:
# ✓ TypeScript: Yes
# ✓ Style: Default
# ✓ Color: Zinc
# ✓ CSS variables: Yes

# Instalar componentes
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
# ... etc
`})}),`
`,n.jsx(e.h3,{id:"passo-3b-copiar-manualmente-alternativa",children:"Passo 3B: Copiar Manualmente (Alternativa)"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Acesse https://fabioaap.github.io/DesignSystem-ShadCN/"}),`
`,n.jsx(e.li,{children:"Navegue até o componente desejado"}),`
`,n.jsx(e.li,{children:'Vá na aba "React" da story "Code Examples"'}),`
`,n.jsx(e.li,{children:"Copie o código completo"}),`
`,n.jsxs(e.li,{children:["Cole em ",n.jsx(e.code,{children:"components/ui/[component-name].tsx"})]}),`
`]}),`
`,n.jsxs(e.p,{children:["Não esqueça de criar o utilitário ",n.jsx(e.code,{children:"lib/utils.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,n.jsx(e.p,{children:"E instalar dependências:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install clsx tailwind-merge class-variance-authority
npm install @radix-ui/react-slot
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-exemplos-por-ambiente",children:"🎯 Exemplos por Ambiente"}),`
`,n.jsx(e.h3,{id:"create-react-app-cra",children:"Create React App (CRA)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx create-react-app my-app --template typescript
cd my-app
npm install -D tailwindcss
npx tailwindcss init
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
npx shadcn@latest init
`})}),`
`,n.jsx(e.h3,{id:"vite",children:"Vite"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npx shadcn@latest init
`})}),`
`,n.jsx(e.h3,{id:"remix",children:"Remix"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx create-remix@latest
cd my-remix-app
npm install -D tailwindcss
npx tailwindcss init
npx shadcn@latest init
`})}),`
`,n.jsx(e.h3,{id:"astro-com-react",children:"Astro (com React)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm create astro@latest
# Escolha "Use blog template" ou "Empty"
npm install react react-dom @astrojs/react
npx astro add react
npx astro add tailwind
npx shadcn@latest init
`})}),`
`,n.jsx(e.h3,{id:"nextjs-já-documentado",children:"Next.js (já documentado)"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx create-next-app@latest
npx shadcn@latest init
`})}),`
`,n.jsx(e.h3,{id:"gatsby",children:"Gatsby"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npx gatsby new my-gatsby-site
cd my-gatsby-site
npm install -D tailwindcss
npx tailwindcss init
npx shadcn@latest init
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-ambientes-sem-npmterminal",children:"🔧 Ambientes Sem npm/Terminal"}),`
`,n.jsxs(e.p,{children:["Se você está em um ambiente onde ",n.jsx(e.strong,{children:"não pode rodar comandos"})," (ex: alguns builders visuais), use este método:"]}),`
`,n.jsx(e.h3,{id:"1-copiar-código-manualmente",children:"1. Copiar Código Manualmente"}),`
`,n.jsx(e.p,{children:"Estrutura de pastas necessária:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`src/
├── lib/
│   └── utils.ts          # Função cn()
└── components/
    └── ui/
        ├── button.tsx
        ├── card.tsx
        └── ... outros componentes
`})}),`
`,n.jsx(e.h3,{id:"2-instalar-via-cdn-não-recomendado-mas-funciona",children:"2. Instalar via CDN (Não Recomendado, mas funciona)"}),`
`,n.jsx(e.p,{children:"Se não puder usar npm, adicione ao seu HTML:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- Tailwind CSS via CDN -->
<script src="https://cdn.tailwindcss.com"><\/script>

<script>
  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          border: "hsl(var(--border))",
          // ... resto da config
        }
      }
    }
  }
<\/script>
`})}),`
`,n.jsx(e.p,{children:"Depois copie os componentes do Storybook e cole diretamente no seu código."}),`
`,n.jsx(e.h3,{id:"3-bundler-online",children:"3. Bundler Online"}),`
`,n.jsx(e.p,{children:"Use um bundler online como:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"CodeSandbox"})," - https://codesandbox.io/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"StackBlitz"})," - https://stackblitz.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"JSFiddle"})," - https://jsfiddle.net/"]}),`
`]}),`
`,n.jsx(e.p,{children:"Todos suportam npm e você pode usar shadcn CLI normalmente."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-react-native-limitado",children:"📱 React Native (Limitado)"}),`
`,n.jsx(e.p,{children:"Para React Native, use alternativas como:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"NativeWind"})," - Tailwind CSS para React Native"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tamagui"})," - UI kit alternativo"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React Native Paper"})," - Material Design"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Este Design System é focado em ",n.jsx(e.strong,{children:"React Web"}),", mas os padrões podem ser adaptados."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-plataformas-visuais",children:"🎨 Plataformas Visuais"}),`
`,n.jsx(e.h3,{id:"framer",children:"Framer"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Importe componentes React customizados"}),`
`,n.jsx(e.li,{children:"Cole o código dos componentes do Storybook"}),`
`,n.jsx(e.li,{children:"Configure Tailwind no projeto Framer"}),`
`]}),`
`,n.jsx(e.h3,{id:"builderio",children:"Builder.io"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Crie componentes customizados"}),`
`,n.jsx(e.li,{children:"Registre componentes shadcn como custom components"}),`
`,n.jsx(e.li,{children:"Use no editor visual"}),`
`]}),`
`,n.jsx(e.h3,{id:"plasmic",children:"Plasmic"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Code components"}),`
`,n.jsx(e.li,{children:"Importe componentes do shadcn"}),`
`,n.jsx(e.li,{children:"Configure props no editor"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-checklist-de-compatibilidade",children:"✅ Checklist de Compatibilidade"}),`
`,n.jsx(e.p,{children:"Seu ambiente é compatível se tiver:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Suporte a React 18+"}),`
`,n.jsx(e.li,{children:"✅ Suporte a JSX/TSX"}),`
`,n.jsx(e.li,{children:"✅ Suporte a CSS Modules ou Tailwind"}),`
`,n.jsx(e.li,{children:"✅ Bundler (Webpack, Vite, etc)"}),`
`,n.jsx(e.li,{children:"✅ npm/pnpm/yarn/bun"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Não funciona com:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ jQuery"}),`
`,n.jsx(e.li,{children:"❌ Angular"}),`
`,n.jsx(e.li,{children:"❌ Vue 2 (funciona com Vue 3 + adaptações)"}),`
`,n.jsx(e.li,{children:"❌ Svelte (precisa adaptação)"}),`
`,n.jsx(e.li,{children:'❌ Vanilla JS puro (veja aba "Vanilla" no Storybook)'}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-problemas-comuns",children:"🆘 Problemas Comuns"}),`
`,n.jsx(e.h3,{id:"module-not-found-radix-uireact-slot",children:'"Module not found: @radix-ui/react-slot"'}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @radix-ui/react-slot
`})}),`
`,n.jsx(e.h3,{id:"cn-is-not-defined",children:'"cn is not defined"'}),`
`,n.jsxs(e.p,{children:["Crie ",n.jsx(e.code,{children:"lib/utils.ts"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
`})}),`
`,n.jsx(e.h3,{id:"tailwind-classes-not-working",children:'"Tailwind classes not working"'}),`
`,n.jsx(e.p,{children:"Verifique se:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:"Tailwind está configurado corretamente"}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"@tailwind"})," directives estão no CSS"]}),`
`,n.jsx(e.li,{children:"Content paths incluem seus arquivos de componentes"}),`
`,n.jsx(e.li,{children:"CSS está importado no entry point"}),`
`]}),`
`,n.jsx(e.h3,{id:"dark-mode-not-working",children:'"Dark mode not working"'}),`
`,n.jsxs(e.p,{children:["Adicione ",n.jsx(e.code,{children:'darkMode: ["class"]'})," no ",n.jsx(e.code,{children:"tailwind.config.js"})," e toggle a classe ",n.jsx(e.code,{children:"dark"})," no elemento root."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-recursos-adicionais",children:"📚 Recursos Adicionais"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentação Completa:"})," https://ui.shadcn.com"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook:"})," https://fabioaap.github.io/DesignSystem-ShadCN/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub:"})," https://github.com/fabioaap/DesignSystem-ShadCN"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-dica-final",children:"💡 Dica Final"}),`
`,n.jsxs(e.p,{children:["Se sua plataforma/framework não está listada aqui, mas suporta React + Tailwind, ",n.jsx(e.strong,{children:"funciona 100%"}),"!"]}),`
`,n.jsx(e.p,{children:"Use os 3 passos universais acima e adapte conforme necessário."})]})}function p(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{p as default};
