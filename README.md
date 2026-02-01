# DesignSystem-ShadCN

Um sistema de design moderno construído com componentes [shadcn/ui](https://ui.shadcn.com/) e [Storybook](https://storybook.js.org/).

## ✨ Características

- 🎨 Construído com componentes shadcn/ui
- 📚 Documentação interativa de componentes com Storybook
- ⚡️ Next.js 16 com App Router
- 🎭 Suporte a TypeScript
- 🌈 Tailwind CSS para estilização
- 🎯 ESLint para qualidade de código
- 🤖 Servidor MCP para integração com IAs

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar dependências
pnpm install

# Ou com npm
npm install
```

### Desenvolvimento

```bash
# Executar servidor de desenvolvimento Next.js
pnpm dev

# Executar Storybook
pnpm storybook
```

### Build

```bash
# Build da aplicação Next.js
pnpm build

# Build do Storybook
pnpm build-storybook
```

## 📚 Storybook Online

Acesse nosso catálogo de componentes publicado:

**[Ver Storybook →](https://fabioaap.github.io/DesignSystem-ShadCN/)**

### Desenvolvimento Local

```bash
# Executar Storybook localmente
pnpm storybook
```

Depois abra [http://localhost:6006](http://localhost:6006) no seu navegador.

### Deploy do Storybook

O Storybook é automaticamente implantado no GitHub Pages através de GitHub Actions. Para informações sobre configuração, troubleshooting e alternativas de deploy, consulte o **[README-DEPLOY.md](README-DEPLOY.md)**.

## 🎨 Componentes

Este sistema de design inclui os seguintes componentes shadcn/ui:

- **Button** - Botões com várias variantes (default, destructive, outline, secondary, ghost, link)
- **Card** - Componente de card com header, conteúdo e footer
- **Input** - Campo de entrada de texto
- **Label** - Rótulo para campos de formulário

## 🤖 Servidor MCP

Este projeto inclui um servidor MCP (Model Context Protocol) que permite que IAs e desenvolvedores consultem e utilizem o Design System de forma programática.

### Início Rápido

```bash
cd mcp-server
npm install
npm run build
npm start
```

Para instruções detalhadas de configuração, exemplos de configuração e guia de uso, consulte o [README do Servidor MCP](mcp-server/README.md).

### Ferramentas Disponíveis

- `list_components` - Lista todos os componentes disponíveis
- `get_component_info` - Obtém informações detalhadas sobre um componente
- `get_component_code` - Retorna o código fonte de um componente
- `generate_usage_example` - Gera exemplos de uso personalizados
- `search_components` - Busca componentes por funcionalidade

## 📁 Estrutura do Projeto

```
.
├── .github/
│   └── workflows/        # GitHub Actions workflows
├── .storybook/           # Configuração do Storybook
├── mcp-server/           # Servidor MCP para integração com IAs
│   ├── src/              # Código fonte do servidor MCP
│   └── README.md         # Documentação do servidor MCP
├── src/
│   ├── app/              # Diretório da aplicação Next.js
│   ├── components/
│   │   └── ui/           # Componentes shadcn/ui
│   └── lib/              # Funções utilitárias
├── components.json       # Configuração shadcn/ui
├── tailwind.config.ts    # Configuração Tailwind CSS
└── tsconfig.json         # Configuração TypeScript
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📄 Licença

ISC

## 👥 Autores

- **Fabio Alves** - [@fabioaap](https://github.com/fabioaap)

---

**Desenvolvido com ❤️ usando shadcn/ui e Storybook**
