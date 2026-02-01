# MCP Server Usage Examples

This document provides practical examples of how to interact with the Design System MCP server.

## Example 1: Discovering Components

**User Query:** "What components are available in this design system?"

**MCP Tool Call:**
```typescript
await callTool("list_components", {});
```

**Response:**
```json
[
  {
    "name": "Button",
    "description": "A versatile button component with multiple variants, sizes, and states...",
    "category": "Interactive",
    "variants": {
      "variant": ["default", "destructive", "outline", "secondary", "ghost", "link"],
      "size": ["default", "sm", "lg", "icon"]
    }
  },
  {
    "name": "Card",
    "description": "A flexible card component with header, content, and footer sections...",
    "category": "Layout",
    "subComponents": ["Card", "CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"]
  },
  ...
]
```

## Example 2: Getting Component Details

**User Query:** "Tell me more about the Button component"

**MCP Tool Call:**
```typescript
await callTool("get_component_info", { name: "Button" });
```

**Response:**
Returns complete component metadata including:
- All props with types and descriptions
- All available variants
- 8 usage examples
- Path to source file

## Example 3: Creating a Delete Button

**User Query:** "Show me how to create a red delete button"

**MCP Tool Calls:**
1. Search for components:
```typescript
await callTool("search_components", { query: "delete button" });
```

2. Generate example:
```typescript
await callTool("generate_usage_example", {
  name: "Button",
  variant: "destructive",
  size: "default"
});
```

**Generated Code:**
```tsx
<Button variant="destructive">Delete</Button>
```

## Example 4: Building a Login Form

**User Query:** "Help me build a login form with email and password fields"

**MCP Tool Calls:**
1. Search for form components:
```typescript
await callTool("search_components", { query: "form input" });
```

2. Get Card info for layout:
```typescript
await callTool("get_component_info", { name: "Card" });
```

3. Generate form example:
```typescript
await callTool("generate_usage_example", {
  name: "Card",
  props: {
    title: "Login",
    description: "Enter your credentials",
    content: "Form fields",
    footer: "<Button>Sign In</Button>"
  }
});
```

**Generated Code:**
```tsx
<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials</CardDescription>
  </CardHeader>
  <CardContent>
    <div>
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
    <div>
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </CardContent>
  <CardFooter>
    <Button>Sign In</Button>
  </CardFooter>
</Card>
```

## Example 5: Understanding Component Implementation

**User Query:** "How is the Button component implemented?"

**MCP Tool Call:**
```typescript
await callTool("get_component_code", { name: "Button" });
```

**Response:**
Returns the complete TypeScript source code with:
- Import statements
- Type definitions
- Variant configuration using class-variance-authority
- Component implementation
- Export statements

## Example 6: Finding Components by Functionality

**User Query:** "I need something for text input"

**MCP Tool Call:**
```typescript
await callTool("search_components", { query: "text input" });
```

**Response:**
```json
{
  "query": "text input",
  "count": 2,
  "results": [
    {
      "name": "Input",
      "description": "A styled input field component...",
      "category": "Form",
      "relevance": 80
    },
    {
      "name": "Label",
      "description": "An accessible label component...",
      "category": "Form",
      "relevance": 30
    }
  ]
}
```

## Example 7: Creating Custom Styled Components

**User Query:** "Create a large outline button with custom text"

**MCP Tool Call:**
```typescript
await callTool("generate_usage_example", {
  name: "Button",
  variant: "outline",
  size: "lg",
  props: {
    children: "Get Started",
    className: "mt-4"
  }
});
```

**Generated Code:**
```tsx
<Button variant="outline" size="lg" className="mt-4">Get Started</Button>
```

## Example 8: Using Resources

Resources provide direct access to component data:

```typescript
// Get full Button metadata
await readResource("component://Button");

// Get only Button props
await readResource("component://Button/props");

// Get Button usage examples
await readResource("component://Button/examples");

// Get Button source code
await readResource("component://Button/code");
```

## Best Practices

1. **Start with search** - Use `search_components` when you're not sure which component to use
2. **Get details first** - Use `get_component_info` to understand available options before generating examples
3. **Iterate on examples** - Generate multiple examples with different variants to find the right fit
4. **Check the source** - Use `get_component_code` when you need to understand implementation details
5. **Use resources for batching** - Use resources when you need multiple pieces of information about a component

## Testing the Server

To verify the server is working:

```bash
cd mcp-server
npm test
```

All 16 tests should pass:
- ✓ Component listing
- ✓ Component info retrieval  
- ✓ Code retrieval
- ✓ Example generation
- ✓ Search functionality
- ✓ Error handling
