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

## Storybook

Access the interactive component documentation:

```bash
pnpm storybook
```

Then open [http://localhost:6006](http://localhost:6006) in your browser.

## Project Structure

```
.
├── .storybook/           # Storybook configuration
├── mcp-server/           # Model Context Protocol server
│   ├── src/              # MCP server source code
│   └── README.md         # MCP server documentation
├── src/
│   ├── app/              # Next.js app directory
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   └── lib/              # Utility functions
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## MCP Server

This repository includes a [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that provides programmatic access to the design system components. The MCP server allows AI assistants like Claude to query and use components.

### Quick Start

```bash
cd mcp-server
npm install
npm run build
npm start
```

For detailed setup instructions, configuration examples, and usage guide, see the [MCP Server README](mcp-server/README.md).

### Available Tools

- **list_components** - List all available components
- **get_component_info** - Get detailed component information
- **get_component_code** - Retrieve component source code
- **generate_usage_example** - Generate custom usage examples
- **search_components** - Search components by keyword

## License

ISC
