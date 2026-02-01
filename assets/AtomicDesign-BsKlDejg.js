import{j as n}from"./jsx-runtime-D504mV7P.js";import{useMDXComponents as r}from"./index-CqGkrt5j.js";import{M as o}from"./blocks-DxLW8F1I.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-BZ7zkwJU.js";import"./index-DkSwWaKu.js";function i(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(o,{title:"Introduction/Atomic Design"}),`
`,n.jsx(s.h1,{id:"️-atomic-design",children:"⚛️ Atomic Design"}),`
`,n.jsxs(s.p,{children:["Este Design System segue a metodologia ",n.jsx(s.strong,{children:"Atomic Design"})," criada por Brad Frost, organizando componentes por nível de complexidade."]}),`
`,n.jsx(s.h2,{id:"o-que-é-atomic-design",children:"O que é Atomic Design?"}),`
`,n.jsx(s.p,{children:"Atomic Design é uma metodologia para criar sistemas de design escaláveis e consistentes, usando uma analogia com a química:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`Átomos → Moléculas → Organismos → Templates → Páginas
`})}),`
`,n.jsx(s.p,{children:"Cada nível aumenta em complexidade, construindo sobre os anteriores."}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"níveis-da-hierarquia",children:"Níveis da Hierarquia"}),`
`,n.jsx(s.h3,{id:"-atoms-átomos",children:"🔹 Atoms (Átomos)"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Definição:"})," Componentes básicos e indivisíveis. São os blocos de construção fundamentais."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Características:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Não podem ser quebrados em partes menores"}),`
`,n.jsx(s.li,{children:"Altamente reutilizáveis"}),`
`,n.jsx(s.li,{children:"Sem lógica de negócio complexa"}),`
`,n.jsx(s.li,{children:"Geralmente sem estado próprio"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Exemplos no projeto:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Button"})," - Botão básico com variantes"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Input"})," - Campo de entrada de texto"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Label"})," - Rótulo de formulário"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Badge"})," - Marcador visual"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Avatar"})," - Imagem circular de perfil"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Checkbox"})," - Caixa de seleção"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Switch"})," - Alternador on/off"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Slider"})," - Controle deslizante"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Separator"})," - Linha divisória"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Skeleton"})," - Placeholder de carregamento"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Progress"})," - Barra de progresso"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Toggle"})," - Botão de alternância"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Textarea"})," - Campo de texto multilinha"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Total: 16 Atoms"})," 🧬"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"-molecules-moléculas",children:"🔹 Molecules (Moléculas)"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Definição:"})," Combinações de 2+ átomos que formam componentes funcionais simples."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Características:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Combinam múltiplos atoms"}),`
`,n.jsx(s.li,{children:"Têm propósito específico"}),`
`,n.jsx(s.li,{children:"Podem ter estado interno simples"}),`
`,n.jsx(s.li,{children:"Reutilizáveis em diferentes contextos"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Exemplos no projeto:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Card"})," - Contêiner com header/content/footer"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Alert"})," - Notificação com ícone e texto"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"AlertDialog"})," - Diálogo de confirmação"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Breadcrumb"})," - Navegação hierárquica"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Calendar"})," - Seletor de data"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"InputOTP"})," - Input com campos separados"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"HoverCard"})," - Card que aparece no hover"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tooltip"})," - Dica contextual"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Popover"})," - Menu flutuante"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ContextMenu"})," - Menu de contexto (clique direito)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"DropdownMenu"})," - Menu dropdown"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"NavigationMenu"})," - Menu de navegação"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Menubar"})," - Barra de menus"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Sonner"})," - Toast notification"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Resizable"})," - Painel redimensionável"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Total: 15 Molecules"})," 🧪"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"-organisms-organismos",children:"🔹 Organisms (Organismos)"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Definição:"})," Componentes complexos que combinam múltiplas moléculas e/ou átomos."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Características:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Alta complexidade"}),`
`,n.jsx(s.li,{children:"Lógica de negócio"}),`
`,n.jsx(s.li,{children:"Gerenciam estado complexo"}),`
`,n.jsx(s.li,{children:"Específicos para contexto de uso"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Exemplos no projeto:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Form"})," - Formulário completo com validação"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Table"})," - Tabela de dados com sorting/filtering"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Sheet"})," - Painel lateral deslizante"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Dialog"})," - Modal dialog"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Drawer"})," - Gaveta deslizante"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Collapsible"})," - Conteúdo recolhível"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Accordion"})," - Lista de itens expansíveis"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Carousel"})," - Carrossel de imagens"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Command"})," - Command palette (Cmd+K)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Tabs"})," - Abas de navegação"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Sidebar"})," - Barra lateral de navegação"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Chart"})," - Gráficos de dados"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Pagination"})," - Navegação por páginas"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ToggleGroup"})," - Grupo de toggles"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Total: 14 Organisms"})," 🦠"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"-templates",children:"🔹 Templates"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Definição:"})," Layouts que organizam organismos, moléculas e átomos. Sem dados reais."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Características:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Define estrutura da página"}),`
`,n.jsx(s.li,{children:"Props para slots de conteúdo"}),`
`,n.jsx(s.li,{children:"Responsivo"}),`
`,n.jsx(s.li,{children:"Reutilizável para múltiplas páginas"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Exemplos no projeto:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"DashboardTemplate"})," - Layout de dashboard (sidebar + header + content)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"AuthTemplate"})," - Layout de autenticação (form + aside)"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"FormTemplate"})," - Layout de formulário (form + help sidebar)"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Total: 3 Templates"})," 📐"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h3,{id:"-pages-páginas",children:"🔹 Pages (Páginas)"}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Definição:"})," Templates preenchidos com dados reais. Representam instâncias específicas."]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Características:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"Usa template como base"}),`
`,n.jsx(s.li,{children:"Dados mockados ou reais"}),`
`,n.jsx(s.li,{children:"Representa tela final do usuário"}),`
`,n.jsx(s.li,{children:"Pronto para copy-paste em projetos"}),`
`]}),`
`,n.jsx(s.p,{children:n.jsx(s.strong,{children:"Exemplos no projeto:"})}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"LoginPage"})," - Página de login completa"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"DashboardPage"})," - Dashboard com métricas e gráficos"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"ProfilePage"})," - Página de perfil do usuário"]}),`
`]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"Total: 3 Pages"})," 📄"]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"estrutura-no-storybook",children:"Estrutura no Storybook"}),`
`,n.jsx(s.p,{children:"A navegação lateral segue esta hierarquia:"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{children:`📁 Introduction/
   └─ Atomic Design (este documento)

📁 Atoms/ (16 componentes)
   ├─ Button
   ├─ Input
   ├─ Label
   └─ ...

📁 Molecules/ (15 componentes)
   ├─ Card
   ├─ Alert
   ├─ Breadcrumb
   └─ ...

📁 Organisms/ (14 componentes)
   ├─ Form
   ├─ Table
   ├─ Dialog
   └─ ...

📁 Templates/ (3 templates)
   ├─ Dashboard
   ├─ Auth
   └─ Form

📁 Pages/ (3 páginas)
   ├─ Login
   ├─ Dashboard
   └─ Profile
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"benefícios-desta-arquitetura",children:"Benefícios desta Arquitetura"}),`
`,n.jsx(s.h3,{id:"-para-desenvolvedores",children:"✅ Para Desenvolvedores"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Navegação Intuitiva"})," - Fácil encontrar componentes por complexidade"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Reutilização Clara"})," - Atoms nunca dependem de outros, Molecules combinam Atoms"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Testes Focados"})," - Testar Atoms isoladamente, depois composição"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Documentação Natural"})," - A hierarquia já documenta as dependências"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Onboarding Rápido"})," - Novos devs entendem a arquitetura visualmente"]}),`
`]}),`
`,n.jsx(s.h3,{id:"-para-designers",children:"✅ Para Designers"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Consistência"})," - Sistema baseado em componentes fundamentais"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Escalabilidade"})," - Fácil adicionar novos componentes"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Manutenção"})," - Mudanças em Atoms propagam automaticamente"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Prototipagem"})," - Templates e Pages servem como referência"]}),`
`]}),`
`,n.jsx(s.h3,{id:"-para-plataformas-de-ia",children:"✅ Para Plataformas de IA"}),`
`,n.jsxs(s.ol,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Copy-Paste Fácil"})," - Pages prontas para implementar"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Composição Clara"})," - Código mostra hierarquia de dependências"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Exemplos Completos"})," - Templates demonstram uso correto"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Modular"})," - IA pode combinar componentes corretamente"]}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"regras-de-composição",children:"Regras de Composição"}),`
`,n.jsx(s.h3,{id:"-atoms",children:"📌 Atoms"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Podem usar apenas HTML e CSS"}),`
`,n.jsx(s.li,{children:"✅ Props simples (string, number, boolean)"}),`
`,n.jsxs(s.li,{children:["❌ ",n.jsx(s.strong,{children:"Nunca"})," importam outros componentes do design system"]}),`
`,n.jsxs(s.li,{children:["❌ ",n.jsx(s.strong,{children:"Nunca"})," fazem chamadas de API"]}),`
`]}),`
`,n.jsx(s.h3,{id:"-molecules",children:"📌 Molecules"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Combinam 2 ou mais Atoms"}),`
`,n.jsx(s.li,{children:"✅ Podem ter estado interno simples"}),`
`,n.jsx(s.li,{children:"✅ Props podem incluir callbacks"}),`
`,n.jsxs(s.li,{children:["❌ ",n.jsx(s.strong,{children:"Nunca"})," fazem chamadas de API diretas"]}),`
`,n.jsxs(s.li,{children:["❌ ",n.jsx(s.strong,{children:"Evitar"})," dependências entre Molecules"]}),`
`]}),`
`,n.jsx(s.h3,{id:"-organisms",children:"📌 Organisms"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Combinam Molecules, Atoms e outros Organisms"}),`
`,n.jsx(s.li,{children:"✅ Gerenciam estado complexo"}),`
`,n.jsx(s.li,{children:"✅ Podem fazer chamadas de API (via hooks)"}),`
`,n.jsx(s.li,{children:"✅ Implementam lógica de negócio"}),`
`,n.jsx(s.li,{children:"⚠️ Devem ser testáveis de forma isolada"}),`
`]}),`
`,n.jsx(s.h3,{id:"-templates-1",children:"📌 Templates"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Definem layouts com slots"}),`
`,n.jsx(s.li,{children:"✅ Props para injetar conteúdo"}),`
`,n.jsx(s.li,{children:"✅ Responsivos por padrão"}),`
`,n.jsxs(s.li,{children:["❌ ",n.jsx(s.strong,{children:"Nunca"})," contêm dados reais"]}),`
`]}),`
`,n.jsx(s.h3,{id:"-pages",children:"📌 Pages"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:"✅ Usam Templates como base"}),`
`,n.jsx(s.li,{children:"✅ Dados mockados ou reais"}),`
`,n.jsx(s.li,{children:"✅ Representam telas finais"}),`
`,n.jsx(s.li,{children:"✅ Prontas para copy-paste"}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"como-adicionar-novos-componentes",children:"Como Adicionar Novos Componentes"}),`
`,n.jsx(s.h3,{id:"1-identifique-o-nível",children:"1. Identifique o Nível"}),`
`,n.jsx(s.p,{children:"Pergunte-se:"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"É indivisível?"})," → Atom"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Combina 2-3 componentes simples?"})," → Molecule"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"É complexo e específico?"})," → Organism"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"Define um layout?"})," → Template"]}),`
`,n.jsxs(s.li,{children:[n.jsx(s.strong,{children:"É uma tela completa?"})," → Page"]}),`
`]}),`
`,n.jsx(s.h3,{id:"2-crie-o-componente",children:"2. Crie o Componente"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-bash",children:`# Atoms
src/components/ui/my-atom.tsx
src/components/ui/my-atom.stories.tsx

# Molecules
src/components/ui/my-molecule.tsx
src/components/ui/my-molecule.stories.tsx

# Organisms
src/components/ui/my-organism.tsx
src/components/ui/my-organism.stories.tsx

# Templates
src/templates/MyTemplate.tsx
src/templates/MyTemplate.stories.tsx

# Pages
src/pages/MyPage.tsx
src/pages/MyPage.stories.tsx
`})}),`
`,n.jsx(s.h3,{id:"3-configure-a-story",children:"3. Configure a Story"}),`
`,n.jsx(s.pre,{children:n.jsx(s.code,{className:"language-tsx",children:`const meta = {
  title: 'Atoms/MyAtom',  // ou Molecules/... Organisms/... Templates/... Pages/...
  component: MyAtom,
  parameters: { layout: 'centered' },  // 'fullscreen' para Templates e Pages
  tags: ['autodocs'],
} satisfies Meta<typeof MyAtom>;
`})}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"recursos-adicionais",children:"Recursos Adicionais"}),`
`,n.jsxs(s.ul,{children:[`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://atomicdesign.bradfrost.com/",rel:"nofollow",children:"Atomic Design por Brad Frost"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://storybook.js.org/docs/writing-stories",rel:"nofollow",children:"Storybook Best Practices"})}),`
`,n.jsx(s.li,{children:n.jsx(s.a,{href:"https://ui.shadcn.com/",rel:"nofollow",children:"shadcn/ui Components"})}),`
`]}),`
`,n.jsx(s.hr,{}),`
`,n.jsx(s.h2,{id:"estatísticas-do-projeto",children:"Estatísticas do Projeto"}),`
`,n.jsxs(s.p,{children:[`| Categoria | Quantidade | % do Total |
|-----------|------------|------------|
| Atoms | 16 | 31% |
| Molecules | 15 | 29% |
| Organisms | 14 | 27% |
| Templates | 3 | 6% |
| Pages | 3 | 6% |
| `,n.jsx(s.strong,{children:"Total"})," | ",n.jsx(s.strong,{children:"51"})," | ",n.jsx(s.strong,{children:"100%"})," |"]}),`
`,n.jsxs(s.p,{children:[n.jsx(s.strong,{children:"51 componentes"})," organizados em ",n.jsx(s.strong,{children:"5 níveis"})," de Atomic Design! 🚀"]})]})}function j(e={}){const{wrapper:s}={...r(),...e.components};return s?n.jsx(s,{...e,children:n.jsx(i,{...e})}):i(e)}export{j as default};
