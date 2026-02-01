# ShadCN Design System - MCP Server

A [Model Context Protocol (MCP)](https://modelcontextprotocol.io) server that provides programmatic access to the ShadCN Design System components. This allows AI assistants and other tools to query and use design system components in a standardized way.

## 📋 Overview

This MCP server exposes the following components:
- **Button** - Interactive button with multiple variants and sizes
- **Card** - Flexible card layout with header, content, and footer
- **Input** - Styled input field with accessibility features
- **Label** - Accessible label component for form fields

## 🚀 Installation

### Prerequisites

- Node.js 18 or higher
- npm or pnpm

### Install Dependencies

```bash
cd mcp-server
npm install
```

## 🛠️ Usage

### Development Mode

Run the server in development mode with auto-reload:

```bash
npm run dev
```

### Production Mode

Build and run the server:

```bash
npm run build
npm start
```

## 🔧 Configuration

### Claude Desktop

Add this configuration to your Claude Desktop config file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`  
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "designsystem-shadcn": {
      "command": "node",
      "args": [
        "/absolute/path/to/DesignSystem-ShadCN/mcp-server/dist/index.js"
      ]
    }
  }
}
```

Or for development mode:

```json
{
  "mcpServers": {
    "designsystem-shadcn": {
      "command": "npx",
      "args": [
        "-y",
        "tsx",
        "/absolute/path/to/DesignSystem-ShadCN/mcp-server/src/index.ts"
      ]
    }
  }
}
```

After adding the configuration, restart Claude Desktop.

## 📚 Available Tools

### 1. `list_components`

Lists all available design system components.

**Parameters:** None

**Example:**
```typescript
await callTool("list_components", {});
```

**Response:**
```json
[
  {
    "name": "Button",
    "description": "A versatile button component...",
    "category": "Interactive",
    "variants": {
      "variant": ["default", "destructive", "outline", "secondary", "ghost", "link"],
      "size": ["default", "sm", "lg", "icon"]
    }
  },
  ...
]
```

### 2. `get_component_info`

Get detailed information about a specific component.

**Parameters:**
- `name` (string, required) - Component name (Button, Card, Input, or Label)

**Example:**
```typescript
await callTool("get_component_info", { name: "Button" });
```

**Response:** Complete component metadata including props, variants, and examples.

### 3. `get_component_code`

Get the complete source code of a component.

**Parameters:**
- `name` (string, required) - Component name

**Example:**
```typescript
await callTool("get_component_code", { name: "Button" });
```

**Response:** TypeScript/React source code of the component.

### 4. `generate_usage_example`

Generate a customized usage example for a component.

**Parameters:**
- `name` (string, required) - Component name
- `variant` (string, optional) - Variant to use
- `size` (string, optional) - Size to use
- `props` (object, optional) - Additional props

**Example:**
```typescript
await callTool("generate_usage_example", {
  name: "Button",
  variant: "destructive",
  size: "lg",
  props: { children: "Delete Account" }
});
```

**Response:**
```tsx
<Button variant="destructive" size="lg">Delete Account</Button>
```

### 5. `search_components`

Search for components by keyword or functionality.

**Parameters:**
- `query` (string, required) - Search query

**Example:**
```typescript
await callTool("search_components", { query: "form input" });
```

**Response:** Array of matching components with relevance scores.

## 🔌 Available Resources

Resources provide read-only access to component data via URIs.

### Resource URIs

- `component://{name}` - Full component metadata
- `component://{name}/props` - Component props and variants
- `component://{name}/examples` - Usage examples
- `component://{name}/code` - Source code

**Example:**
```typescript
await readResource("component://Button");
await readResource("component://Button/props");
await readResource("component://Card/examples");
```

## 💡 Usage Examples

### Example 1: Finding a Component

**Query:** "I need a red button for delete actions"

**Tools Called:**
1. `search_components` with query "red button delete"
2. `get_component_info` with name "Button"
3. `generate_usage_example` with variant "destructive"

**Result:**
```tsx
<Button variant="destructive">Delete</Button>
```

### Example 2: Building a Form

**Query:** "Show me how to create a login form"

**Tools Called:**
1. `list_components` - Discover available components
2. `get_component_info` for Card, Input, Label, Button
3. `generate_usage_example` for Card with form structure

**Result:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" />
      </div>
    </form>
  </CardContent>
  <CardFooter>
    <Button>Sign In</Button>
  </CardFooter>
</Card>
```

### Example 3: Exploring Component Variants

**Query:** "What button styles are available?"

**Tools Called:**
1. `get_component_info` with name "Button"

**Result:** Lists all variants (default, destructive, outline, secondary, ghost, link) and sizes (default, sm, lg, icon)

## 🏗️ Architecture

```
mcp-server/
├── src/
│   ├── index.ts          # Main MCP server with stdio transport
│   ├── components.ts     # Component registry and metadata
│   ├── tools.ts          # Tool handlers implementation
│   └── types.ts          # TypeScript type definitions
├── dist/                 # Compiled JavaScript (after build)
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md            # This file
```

## 🔍 Component Metadata Structure

Each component has the following metadata:

```typescript
{
  name: string;              // Component name
  path: string;              // Path to source file
  description: string;       // Component description
  category?: string;         // Category (Interactive, Form, Layout)
  variants?: {              // Available variants
    [key: string]: string[];
  };
  props: Array<{            // Component props
    name: string;
    type: string;
    description: string;
    required?: boolean;
    defaultValue?: string;
  }>;
  examples: Array<{         // Usage examples
    title: string;
    description: string;
    code: string;
  }>;
  subComponents?: string[]; // Related sub-components
}
```

## 🐛 Debugging

The server logs to stderr. To see debug logs:

```bash
# Development mode shows logs automatically
npm run dev

# Production mode
npm start 2> server.log
```

## 📝 Adding New Components

To add a new component to the MCP server:

1. Add component metadata to `src/components.ts`:
```typescript
export const COMPONENTS = {
  // ... existing components
  NewComponent: {
    name: 'NewComponent',
    path: 'src/components/ui/new-component.tsx',
    description: 'Description of the component',
    // ... other metadata
  }
};
```

2. Update the search and example generation logic in `src/tools.ts` if needed.

3. Rebuild the server:
```bash
npm run build
```

## 🤝 Contributing

This MCP server is part of the DesignSystem-ShadCN repository. Contributions are welcome!

## 📄 License

ISC

## 🔗 Resources

- [Model Context Protocol Documentation](https://modelcontextprotocol.io)
- [MCP SDK on GitHub](https://github.com/modelcontextprotocol/sdk)
- [ShadCN UI](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)

## ❓ FAQ

### How do I know if the server is running?

When properly configured in Claude Desktop, the server will appear in the available MCP servers list. You can also test it by asking Claude to list design system components.

### Can I use this with other MCP clients?

Yes! This server follows the MCP specification and can be used with any MCP-compatible client.

### What if a component is not found?

The server will return an error with a list of available components. Make sure you're using the exact component name: Button, Card, Input, or Label.

### How do I update component metadata?

Edit `src/components.ts` and rebuild the server with `npm run build`.

### Can I query component source code?

Yes, use the `get_component_code` tool or the `component://{name}/code` resource.
