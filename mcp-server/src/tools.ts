/**
 * MCP Tools implementation for the Design System
 */
import {
  COMPONENTS,
  getComponent,
  getAllComponentNames,
  getComponentCode,
  searchComponents
} from './components.js';
import {
  GetComponentInfoRequest,
  GetComponentCodeRequest,
  GenerateUsageExampleRequest,
  SearchComponentsRequest,
  ComponentMetadata
} from './types.js';

/**
 * List all available components
 */
export function handleListComponents(): string {
  const components = Object.values(COMPONENTS);
  const componentList = components.map(comp => ({
    name: comp.name,
    description: comp.description,
    category: comp.category,
    variants: comp.variants,
    subComponents: comp.subComponents
  }));
  
  return JSON.stringify(componentList, null, 2);
}

/**
 * Get detailed information about a specific component
 */
export function handleGetComponentInfo(args: GetComponentInfoRequest): string {
  const { name } = args;
  
  const component = getComponent(name);
  if (!component) {
    throw new Error(`Component "${name}" not found. Available components: ${getAllComponentNames().join(', ')}`);
  }
  
  return JSON.stringify(component, null, 2);
}

/**
 * Get the source code of a component
 */
export function handleGetComponentCode(args: GetComponentCodeRequest): string {
  const { name } = args;
  
  try {
    const code = getComponentCode(name);
    return `\`\`\`typescript
${code}
\`\`\``;
  } catch (error) {
    throw new Error(`Failed to get component code: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * Generate a usage example for a component
 */
export function handleGenerateUsageExample(args: GenerateUsageExampleRequest): string {
  const { name, variant, size, props = {} } = args;
  
  const component = getComponent(name);
  if (!component) {
    throw new Error(`Component "${name}" not found. Available components: ${getAllComponentNames().join(', ')}`);
  }
  
  let example = '';
  
  // Generate example based on component type
  switch (name) {
    case 'Button': {
      const attrs: string[] = [];
      
      if (variant) {
        attrs.push(`variant="${variant}"`);
      }
      if (size) {
        attrs.push(`size="${size}"`);
      }
      
      // Add custom props
      Object.entries(props).forEach(([key, value]) => {
        if (typeof value === 'boolean') {
          if (value) attrs.push(key);
        } else if (typeof value === 'string') {
          attrs.push(`${key}="${value}"`);
        } else {
          attrs.push(`${key}={${JSON.stringify(value)}}`);
        }
      });
      
      const attrString = attrs.length > 0 ? ' ' + attrs.join(' ') : '';
      const buttonText = props.children || (variant === 'destructive' ? 'Delete' : 'Click me');
      
      example = `<Button${attrString}>${buttonText}</Button>`;
      break;
    }
    
    case 'Card': {
      const hasHeader = props.title || props.description;
      const content = props.content || 'Card content goes here';
      const hasFooter = props.footer;
      
      example = '<Card>\n';
      
      if (hasHeader) {
        example += '  <CardHeader>\n';
        if (props.title) {
          example += `    <CardTitle>${props.title}</CardTitle>\n`;
        }
        if (props.description) {
          example += `    <CardDescription>${props.description}</CardDescription>\n`;
        }
        example += '  </CardHeader>\n';
      }
      
      example += '  <CardContent>\n';
      example += `    <p>${content}</p>\n`;
      example += '  </CardContent>\n';
      
      if (hasFooter) {
        example += '  <CardFooter>\n';
        example += `    ${props.footer}\n`;
        example += '  </CardFooter>\n';
      }
      
      example += '</Card>';
      break;
    }
    
    case 'Input': {
      const attrs: string[] = [];
      
      if (props.type) {
        attrs.push(`type="${props.type}"`);
      }
      if (props.placeholder) {
        attrs.push(`placeholder="${props.placeholder}"`);
      }
      if (props.disabled) {
        attrs.push('disabled');
      }
      
      // Add other custom props
      Object.entries(props).forEach(([key, value]) => {
        if (!['type', 'placeholder', 'disabled', 'withLabel'].includes(key)) {
          if (typeof value === 'boolean') {
            if (value) attrs.push(key);
          } else if (typeof value === 'string') {
            attrs.push(`${key}="${value}"`);
          }
        }
      });
      
      const attrString = attrs.length > 0 ? ' ' + attrs.join(' ') : '';
      
      if (props.withLabel) {
        const labelText = props.label || 'Label';
        const inputId = props.id || 'input-field';
        example = `<div>\n  <Label htmlFor="${inputId}">${labelText}</Label>\n  <Input id="${inputId}"${attrString} />\n</div>`;
      } else {
        example = `<Input${attrString} />`;
      }
      break;
    }
    
    case 'Label': {
      const text = props.children || props.text || 'Label text';
      const htmlFor = props.htmlFor ? ` htmlFor="${props.htmlFor}"` : '';
      
      example = `<Label${htmlFor}>${text}</Label>`;
      break;
    }
    
    default:
      example = `<${name} />`;
  }
  
  return `\`\`\`tsx
${example}
\`\`\`

**Component:** ${component.name}
**Description:** ${component.description}

${variant ? `**Variant:** ${variant}\n` : ''}${size ? `**Size:** ${size}\n` : ''}
**Available variants:** ${component.variants ? Object.entries(component.variants)
  .map(([key, values]) => `${key}: ${values.join(', ')}`)
  .join(' | ') : 'None'}
`;
}

/**
 * Search components by query
 */
export function handleSearchComponents(args: SearchComponentsRequest): string {
  const { query } = args;
  
  if (!query || query.trim().length === 0) {
    throw new Error('Search query cannot be empty');
  }
  
  const results = searchComponents(query);
  
  if (results.length === 0) {
    return JSON.stringify({
      query,
      count: 0,
      results: [],
      message: `No components found matching "${query}". Try searching for: button, card, input, label, form, or interactive.`
    }, null, 2);
  }
  
  const formattedResults = results.map(comp => ({
    name: comp.name,
    description: comp.description,
    category: comp.category,
    relevance: calculateRelevance(query, comp)
  }));
  
  // Sort by relevance
  formattedResults.sort((a, b) => b.relevance - a.relevance);
  
  return JSON.stringify({
    query,
    count: results.length,
    results: formattedResults
  }, null, 2);
}

/**
 * Calculate relevance score for search results
 */
function calculateRelevance(query: string, component: ComponentMetadata): number {
  const lowerQuery = query.toLowerCase();
  let score = 0;
  
  // Exact name match
  if (component.name.toLowerCase() === lowerQuery) {
    score += 100;
  } else if (component.name.toLowerCase().includes(lowerQuery)) {
    score += 50;
  }
  
  // Description match
  if (component.description.toLowerCase().includes(lowerQuery)) {
    score += 30;
  }
  
  // Category match
  if (component.category?.toLowerCase().includes(lowerQuery)) {
    score += 20;
  }
  
  // Variants match
  if (component.variants) {
    Object.entries(component.variants).forEach(([key, values]: [string, any]) => {
      if (key.toLowerCase().includes(lowerQuery)) {
        score += 15;
      }
      if (values.some((v: string) => v.toLowerCase().includes(lowerQuery))) {
        score += 10;
      }
    });
  }
  
  return score;
}
