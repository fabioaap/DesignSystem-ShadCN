#!/usr/bin/env node

/**
 * MCP Server for ShadCN Design System
 * Provides programmatic access to design system components via Model Context Protocol
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListResourcesRequestSchema,
  ListToolsRequestSchema,
  ReadResourceRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';

import {
  handleListComponents,
  handleGetComponentInfo,
  handleGetComponentCode,
  handleGenerateUsageExample,
  handleSearchComponents,
} from './tools.js';
import { COMPONENTS, getComponent } from './components.js';

/**
 * Create and configure the MCP server
 */
function createServer(): Server {
  const server = new Server(
    {
      name: 'designsystem-shadcn-mcp',
      version: '1.0.0',
    },
    {
      capabilities: {
        tools: {},
        resources: {},
      },
    }
  );

  /**
   * List available tools
   */
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: 'list_components',
          description: 'List all available design system components with their basic information',
          inputSchema: {
            type: 'object',
            properties: {},
          },
        },
        {
          name: 'get_component_info',
          description: 'Get detailed information about a specific component including props, variants, and examples',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the component (e.g., Button, Card, Input, Label)',
              },
            },
            required: ['name'],
          },
        },
        {
          name: 'get_component_code',
          description: 'Get the complete source code of a component',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the component',
              },
            },
            required: ['name'],
          },
        },
        {
          name: 'generate_usage_example',
          description: 'Generate a customized usage example for a component with specific variants and props',
          inputSchema: {
            type: 'object',
            properties: {
              name: {
                type: 'string',
                description: 'Name of the component',
              },
              variant: {
                type: 'string',
                description: 'Variant to use (e.g., for Button: default, destructive, outline, secondary, ghost, link)',
              },
              size: {
                type: 'string',
                description: 'Size to use (e.g., for Button: default, sm, lg, icon)',
              },
              props: {
                type: 'object',
                description: 'Additional props to include in the example',
              },
            },
            required: ['name'],
          },
        },
        {
          name: 'search_components',
          description: 'Search for components by keyword, functionality, or feature',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query (e.g., "button", "form input", "destructive", "card")',
              },
            },
            required: ['query'],
          },
        },
      ],
    };
  });

  /**
   * Handle tool calls
   */
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    try {
      let result: string;

      switch (name) {
        case 'list_components':
          result = handleListComponents();
          break;

        case 'get_component_info':
          result = handleGetComponentInfo(args as any);
          break;

        case 'get_component_code':
          result = handleGetComponentCode(args as any);
          break;

        case 'generate_usage_example':
          result = handleGenerateUsageExample(args as any);
          break;

        case 'search_components':
          result = handleSearchComponents(args as any);
          break;

        default:
          throw new Error(`Unknown tool: ${name}`);
      }

      return {
        content: [
          {
            type: 'text',
            text: result,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      return {
        content: [
          {
            type: 'text',
            text: `Error: ${errorMessage}`,
          },
        ],
        isError: true,
      };
    }
  });

  /**
   * List available resources
   */
  server.setRequestHandler(ListResourcesRequestSchema, async () => {
    const resources = [];

    // Add resources for each component
    for (const [name, component] of Object.entries(COMPONENTS)) {
      resources.push({
        uri: `component://${name}`,
        mimeType: 'application/json',
        name: `${name} Component`,
        description: component.description,
      });

      resources.push({
        uri: `component://${name}/props`,
        mimeType: 'application/json',
        name: `${name} Props`,
        description: `Props and variants for ${name}`,
      });

      resources.push({
        uri: `component://${name}/examples`,
        mimeType: 'application/json',
        name: `${name} Examples`,
        description: `Usage examples for ${name}`,
      });

      resources.push({
        uri: `component://${name}/code`,
        mimeType: 'text/plain',
        name: `${name} Source Code`,
        description: `Complete source code for ${name}`,
      });
    }

    return { resources };
  });

  /**
   * Handle resource reads
   */
  server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
    const { uri } = request.params;

    try {
      const match = uri.match(/^component:\/\/([^\/]+)(?:\/(.+))?$/);
      if (!match) {
        throw new Error(`Invalid resource URI: ${uri}`);
      }

      const [, componentName, resourceType] = match;
      const component = getComponent(componentName);

      if (!component) {
        throw new Error(`Component "${componentName}" not found`);
      }

      let content: string;
      let mimeType: string;

      if (!resourceType) {
        // Return full component metadata
        content = JSON.stringify(component, null, 2);
        mimeType = 'application/json';
      } else if (resourceType === 'props') {
        // Return props and variants
        content = JSON.stringify(
          {
            props: component.props,
            variants: component.variants,
          },
          null,
          2
        );
        mimeType = 'application/json';
      } else if (resourceType === 'examples') {
        // Return examples
        content = JSON.stringify(component.examples, null, 2);
        mimeType = 'application/json';
      } else if (resourceType === 'code') {
        // Return source code
        const { getComponentCode } = await import('./components.js');
        content = getComponentCode(componentName);
        mimeType = 'text/plain';
      } else {
        throw new Error(`Unknown resource type: ${resourceType}`);
      }

      return {
        contents: [
          {
            uri,
            mimeType,
            text: content,
          },
        ],
      };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to read resource: ${errorMessage}`);
    }
  });

  return server;
}

/**
 * Main function to start the server
 */
async function main() {
  console.error('Starting ShadCN Design System MCP Server...');
  
  const server = createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);
  
  console.error('Server running on stdio');
  console.error('Available components: Button, Card, Input, Label');
  console.error('Ready to accept requests');
}

// Start the server
main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
