import{j as n}from"./jsx-runtime-D504mV7P.js";import{useMDXComponents as r}from"./index-CqGkrt5j.js";import{M as a}from"./blocks-DxLW8F1I.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-BZ7zkwJU.js";import"./index-DkSwWaKu.js";function i(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Introduction/Vue and Vanilla Support"}),`
`,n.jsx(e.h1,{id:"vue-e-vanilla-javascript---suporte-e-limitações",children:"Vue e Vanilla JavaScript - Suporte e Limitações"}),`
`,n.jsx(e.h2,{id:"️-importante-este-é-um-design-system-react",children:"⚠️ Importante: Este é um Design System React"}),`
`,n.jsxs(e.p,{children:["Este Design System é ",n.jsx(e.strong,{children:"construído com React"})," e depende de bibliotecas React como:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React 18/19"})," - Core"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Radix UI"})," - Primitivos acessíveis (apenas React)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React Hook Form"})," - Formulários"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"class-variance-authority"})," - Gerenciamento de variantes"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-sobre-os-snippets-vue-e-vanilla",children:"📝 Sobre os Snippets Vue e Vanilla"}),`
`,n.jsxs(e.p,{children:["Os snippets de ",n.jsx(e.strong,{children:"Vue"})," e ",n.jsx(e.strong,{children:"Vanilla"})," no Storybook são:"]}),`
`,n.jsxs(e.p,{children:["✅ ",n.jsx(e.strong,{children:"Exemplos educacionais"}),` - Mostram como a lógica seria implementada
✅ `,n.jsx(e.strong,{children:"Referência de estrutura"}),` - Padrões HTML e comportamento
✅ `,n.jsx(e.strong,{children:"Guia de adaptação"})," - Base para criar sua própria versão"]}),`
`,n.jsxs(e.p,{children:["❌ ",n.jsx(e.strong,{children:"NÃO são copy-paste"}),` - Precisam de trabalho adicional
❌ `,n.jsx(e.strong,{children:"NÃO têm todas as features"}),` - Versões simplificadas
❌ `,n.jsx(e.strong,{children:"NÃO têm Radix UI"})," - Precisam de alternativas"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-opções-para-vue",children:"🎯 Opções para Vue"}),`
`,n.jsx(e.h3,{id:"opção-1-shadcn-vue-recomendado",children:"Opção 1: shadcn-vue (Recomendado)"}),`
`,n.jsxs(e.p,{children:["Existe um ",n.jsx(e.strong,{children:"port oficial do shadcn para Vue 3"}),":"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Site:"})," https://www.shadcn-vue.com/"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`# Instalar shadcn-vue
npm install -D @shadcn/vue

# Adicionar componentes
npx shadcn-vue@latest add button
npx shadcn-vue@latest add card
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Exemplo de uso:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
<\/script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
    </CardHeader>
    <CardContent>
      <Button>Click me</Button>
    </CardContent>
  </Card>
</template>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Stack necessária:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Vue 3.3+"}),`
`,n.jsx(e.li,{children:"TypeScript (opcional)"}),`
`,n.jsx(e.li,{children:"Tailwind CSS 3+"}),`
`,n.jsx(e.li,{children:"Radix Vue (alternativa ao Radix UI React)"}),`
`]}),`
`,n.jsx(e.h3,{id:"opção-2-adaptar-manualmente-do-storybook",children:"Opção 2: Adaptar Manualmente do Storybook"}),`
`,n.jsxs(e.p,{children:["Use os snippets Vue como ",n.jsx(e.strong,{children:"referência"})," e adapte:"]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"O que você precisa fazer:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Substituir Radix UI por Radix Vue:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install radix-vue
`})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-vue",children:`<!-- Nosso snippet (exemplo) -->
<script setup>
import { Dialog } from '@/components/ui/dialog'
<\/script>

<!-- Adaptar para -->
<script setup>
import {
  DialogRoot,
  DialogTrigger,
  DialogPortal,
  DialogOverlay,
  DialogContent
} from 'radix-vue'
<\/script>

<template>
  <DialogRoot>
    <DialogTrigger>Open</DialogTrigger>
    <DialogPortal>
      <DialogOverlay />
      <DialogContent>
        <!-- Conteúdo -->
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>
`})}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Adaptar hooks para Composition API:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// React
const [open, setOpen] = useState(false)

// Vue
const open = ref(false)
`})}),`
`,n.jsxs(e.ol,{start:"3",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Adaptar eventos:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-typescript",children:`// React
onClick={() => setOpen(true)}

// Vue
@click="open = true"
`})}),`
`,n.jsx(e.h3,{id:"opção-3-outras-bibliotecas-vue",children:"Opção 3: Outras Bibliotecas Vue"}),`
`,n.jsx(e.p,{children:"Alternativas completas para Vue:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Nuxt UI"})," - https://ui.nuxt.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"PrimeVue"})," - https://primevue.org/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Element Plus"})," - https://element-plus.org/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vuetify"})," - https://vuetifyjs.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headless UI"})," - https://headlessui.com/ (Vue 3)"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-opções-para-vanilla-javascript",children:"🌐 Opções para Vanilla JavaScript"}),`
`,n.jsx(e.h3,{id:"opção-1-usar-os-snippets-vanilla-limitado",children:"Opção 1: Usar os Snippets Vanilla (Limitado)"}),`
`,n.jsxs(e.p,{children:["Os snippets Vanilla no Storybook mostram ",n.jsx(e.strong,{children:"apenas a estrutura HTML + CSS"}),"."]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"O que funciona:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Layout visual"}),`
`,n.jsx(e.li,{children:"✅ Classes Tailwind"}),`
`,n.jsx(e.li,{children:"✅ Estrutura HTML"}),`
`,n.jsx(e.li,{children:"✅ Estilos básicos"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"O que NÃO funciona:"})}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"❌ Interatividade (você precisa adicionar)"}),`
`,n.jsx(e.li,{children:"❌ Acessibilidade completa (falta ARIA dinâmico)"}),`
`,n.jsx(e.li,{children:"❌ Animações complexas"}),`
`,n.jsx(e.li,{children:"❌ Gerenciamento de estado"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Exemplo - Button Vanilla:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- HTML puro com classes Tailwind -->
<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-primary text-primary-foreground shadow-xs 
  hover:bg-primary/90 h-9 px-4 py-2">
  Click me
</button>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Adicionar interatividade você mesmo:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<button id="myButton" class="...">Click me</button>

<script>
document.getElementById('myButton').addEventListener('click', () => {
  alert('Clicked!')
})
<\/script>
`})}),`
`,n.jsx(e.h3,{id:"opção-2-web-components-avançado",children:"Opção 2: Web Components (Avançado)"}),`
`,n.jsx(e.p,{children:"Criar Web Components customizados baseados nos padrões do Storybook:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-javascript",children:`class ShadcnButton extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    const variant = this.getAttribute('variant') || 'default'
    
    this.shadowRoot.innerHTML = \`
      <style>
        @import url('/path/to/tailwind.css');
      </style>
      <button class="\${this.getClasses(variant)}">
        <slot></slot>
      </button>
    \`
  }

  getClasses(variant) {
    const base = "inline-flex items-center justify-center..."
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      outline: "border border-input bg-background hover:bg-accent",
      // ...
    }
    return \`\${base} \${variants[variant] || variants.default}\`
  }
}

customElements.define('shadcn-button', ShadcnButton)
`})}),`
`,n.jsx(e.p,{children:"Uso:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<shadcn-button variant="default">Click me</shadcn-button>
`})}),`
`,n.jsx(e.h3,{id:"opção-3-bibliotecas-javascript-puras",children:"Opção 3: Bibliotecas JavaScript Puras"}),`
`,n.jsx(e.p,{children:"Se quer UI pronta em Vanilla JS:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alpine.js"})," - https://alpinejs.dev/ (mais próximo do React)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headless UI"})," - https://headlessui.com/ (tem Vanilla JS)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Floating UI"})," - https://floating-ui.com/ (tooltips, popovers)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tippy.js"})," - https://atomiks.github.io/tippyjs/ (tooltips)"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Exemplo com Alpine.js:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  
  <div x-show="open" 
       x-transition
       class="border rounded-lg p-4">
    Content
  </div>
</div>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-comparação-de-suporte",children:"📊 Comparação de Suporte"}),`
`,n.jsxs(e.p,{children:[`| Recurso | React (shadcn) | Vue (shadcn-vue) | Vanilla (Snippets) |
|---------|----------------|------------------|--------------------|
| `,n.jsx(e.strong,{children:"Instalação"}),` | ✅ CLI | ✅ CLI | ⚠️ Manual |
| `,n.jsx(e.strong,{children:"Componentes"}),` | ✅ 46 componentes | ✅ ~40 componentes | ❌ Apenas HTML |
| `,n.jsx(e.strong,{children:"Interatividade"}),` | ✅ Completa | ✅ Completa | ❌ Você implementa |
| `,n.jsx(e.strong,{children:"Acessibilidade"}),` | ✅ ARIA completo | ✅ ARIA completo | ⚠️ ARIA básico |
| `,n.jsx(e.strong,{children:"TypeScript"}),` | ✅ Nativo | ✅ Nativo | ❌ N/A |
| `,n.jsx(e.strong,{children:"Animações"}),` | ✅ Framer Motion | ✅ Vue Transitions | ⚠️ CSS puro |
| `,n.jsx(e.strong,{children:"Forms"}),` | ✅ Hook Form + Zod | ✅ VeeValidate | ❌ Você implementa |
| `,n.jsx(e.strong,{children:"Dark Mode"}),` | ✅ next-themes | ✅ VueUse | ⚠️ CSS + JS manual |
| `,n.jsx(e.strong,{children:"Complexidade"})," | 🟢 Fácil | 🟢 Fácil | 🔴 Difícil |"]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-recomendações",children:"🎯 Recomendações"}),`
`,n.jsx(e.h3,{id:"para-vue",children:"Para Vue:"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Use shadcn-vue oficial:"})," https://www.shadcn-vue.com/"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm create vue@latest
npm install -D tailwindcss
npx shadcn-vue@latest init
npx shadcn-vue@latest add button card dialog
`})}),`
`,n.jsx(e.h3,{id:"para-vanilla-js",children:"Para Vanilla JS:"}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Opção A - Estrutura + Alpine.js:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-html",children:`<!-- 1. Copie o HTML do snippet Vanilla -->
<div x-data="{ open: false }">
  <button @click="open = !open" class="...">
    Toggle
  </button>
  <div x-show="open" class="...">
    Content
  </div>
</div>

<!-- 2. Adicione Alpine.js -->
<script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"><\/script>
`})}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Opção B - Apenas CSS (sem interatividade):"})}),`
`,n.jsxs(e.p,{children:["Use os snippets Vanilla apenas para ",n.jsx(e.strong,{children:"componentes estáticos"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Card"}),`
`,n.jsx(e.li,{children:"Badge"}),`
`,n.jsx(e.li,{children:"Avatar (com imagem fixa)"}),`
`,n.jsx(e.li,{children:"Alert"}),`
`,n.jsx(e.li,{children:"Separator"}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Opção C - Framework alternativo:"})}),`
`,n.jsx(e.p,{children:"Se precisa de componentes interativos em Vanilla, considere:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Preact"})," (React leve, 3KB)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lit"})," (Web Components)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Svelte"})," (compila para Vanilla JS)"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-por-que-os-snippets-não-são-completos",children:"💡 Por Que os Snippets Não São Completos?"}),`
`,n.jsx(e.h3,{id:"radix-ui-é-react-only",children:"Radix UI é React-only"}),`
`,n.jsx(e.p,{children:"Componentes complexos como Dialog, Dropdown, Tooltip dependem de:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["✅ ",n.jsx(e.strong,{children:"Radix UI"})," (React) - Gerenciamento de estado, foco, ARIA"]}),`
`,n.jsx(e.li,{children:"❌ Não existe em Vanilla puro"}),`
`]}),`
`,n.jsx(e.h3,{id:"reimplementar-seria-complexo",children:"Reimplementar seria complexo"}),`
`,n.jsxs(e.p,{children:["Para ter a ",n.jsx(e.strong,{children:"mesma qualidade"})," do shadcn em Vanilla, você precisaria:"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gerenciamento de estado"})," - useState, useReducer"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Lifecycle"})," - useEffect, refs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Portals"})," - Renderizar fora do DOM pai"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Focus management"})," - Trap focus, restore focus"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Keyboard navigation"})," - Arrow keys, Tab, Escape"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"ARIA dinâmico"})," - aria-expanded, aria-controls, etc."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Animações"})," - Enter/exit transitions"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Composição"})," - Slot, asChild pattern"]}),`
`]}),`
`,n.jsxs(e.p,{children:["Isso são ",n.jsx(e.strong,{children:"centenas de linhas de código"})," por componente."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-decisão-rápida",children:"🚀 Decisão Rápida"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Eu uso React?"}),`
→ ✅ Use este Design System (shadcn)`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Eu uso Vue?"}),`
→ ✅ Use shadcn-vue (https://www.shadcn-vue.com/)`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Eu uso Vanilla JS?"}),`
→ ⚠️ Use snippets para layout + Alpine.js para interatividade
→ Ou considere Preact/Lit/Svelte`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Eu uso Angular/Svelte/Solid?"}),`
→ ❌ Procure alternativas:`]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"Angular: Angular Material, PrimeNG"}),`
`,n.jsx(e.li,{children:"Svelte: Flowbite Svelte, Skeleton UI"}),`
`,n.jsx(e.li,{children:"Solid: Solid UI, Hope UI"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-recursos-úteis",children:"📚 Recursos Úteis"}),`
`,n.jsx(e.h3,{id:"para-vue-1",children:"Para Vue:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"shadcn-vue:"})," https://www.shadcn-vue.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Radix Vue:"})," https://www.radix-vue.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Nuxt UI:"})," https://ui.nuxt.com/"]}),`
`]}),`
`,n.jsx(e.h3,{id:"para-vanilla",children:"Para Vanilla:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alpine.js:"})," https://alpinejs.dev/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Headless UI:"})," https://headlessui.com/"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Floating UI:"})," https://floating-ui.com/"]}),`
`]}),`
`,n.jsx(e.h3,{id:"alternativas-completas",children:"Alternativas Completas:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Tailwind UI:"})," https://tailwindui.com/ (pago, multi-stack)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"daisyUI:"})," https://daisyui.com/ (Tailwind components)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Flowbite:"})," https://flowbite.com/ (multi-stack grátis)"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-resumo",children:"✅ Resumo"}),`
`,n.jsxs(e.p,{children:[`| Stack | Solução Recomendada |
|-------|---------------------|
| `,n.jsx(e.strong,{children:"React"}),` | ✅ Este Design System (shadcn) |
| `,n.jsx(e.strong,{children:"Vue 3"}),` | ✅ shadcn-vue oficial |
| `,n.jsx(e.strong,{children:"Vanilla"}),` | ⚠️ Snippets + Alpine.js OU Preact |
| `,n.jsx(e.strong,{children:"Angular"}),` | ❌ Angular Material |
| `,n.jsx(e.strong,{children:"Svelte"}),` | ❌ Flowbite Svelte |
| `,n.jsx(e.strong,{children:"Solid"})," | ❌ Hope UI |"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Conclusão:"})," Os snippets Vue e Vanilla são ",n.jsx(e.strong,{children:"guias educacionais"}),", não soluções completas. Para produção, use as ferramentas apropriadas para cada stack."]})]})}function x(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{x as default};
