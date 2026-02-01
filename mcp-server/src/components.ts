/**
 * Component registry with metadata for all available design system components
 */
import { ComponentMetadata } from './types.js';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the root directory (go up from mcp-server/src to repository root)
const ROOT_DIR = join(__dirname, '..', '..');

/**
 * Registry of all available components
 */
export const COMPONENTS: Record<string, ComponentMetadata> = {
  Button: {
    name: 'Button',
    path: 'src/components/ui/button.tsx',
    description: 'A versatile button component with multiple variants, sizes, and states. Built with Radix UI Slot for composition.',
    category: 'Interactive',
    variants: {
      variant: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
      size: ['default', 'sm', 'lg', 'icon']
    },
    props: [
      {
        name: 'variant',
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        description: 'Visual style variant of the button',
        defaultValue: 'default'
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg" | "icon"',
        description: 'Size of the button',
        defaultValue: 'default'
      },
      {
        name: 'asChild',
        type: 'boolean',
        description: 'Render as a Radix UI Slot to merge props with child component',
        defaultValue: 'false'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Whether the button is disabled'
      }
    ],
    examples: [
      {
        title: 'Default Button',
        description: 'A standard button with default styling',
        code: '<Button>Click me</Button>'
      },
      {
        title: 'Destructive Button',
        description: 'A red button for destructive actions',
        code: '<Button variant="destructive">Delete</Button>'
      },
      {
        title: 'Outline Button',
        description: 'A button with outline styling',
        code: '<Button variant="outline">Cancel</Button>'
      },
      {
        title: 'Large Button',
        description: 'A larger button for primary actions',
        code: '<Button size="lg">Submit Form</Button>'
      },
      {
        title: 'Small Button',
        description: 'A smaller, compact button',
        code: '<Button size="sm">Save</Button>'
      },
      {
        title: 'Icon Button',
        description: 'A square button for icons',
        code: '<Button size="icon"><ChevronRight /></Button>'
      },
      {
        title: 'Link Button',
        description: 'A button styled as a link',
        code: '<Button variant="link">Learn more</Button>'
      },
      {
        title: 'Ghost Button',
        description: 'A subtle button with no background',
        code: '<Button variant="ghost">Options</Button>'
      }
    ]
  },
  
  Card: {
    name: 'Card',
    path: 'src/components/ui/card.tsx',
    description: 'A flexible card component with header, content, and footer sections. Perfect for grouping related information.',
    category: 'Layout',
    subComponents: ['Card', 'CardHeader', 'CardTitle', 'CardDescription', 'CardContent', 'CardFooter'],
    props: [
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply to the card'
      }
    ],
    examples: [
      {
        title: 'Basic Card',
        description: 'A simple card with content',
        code: `<Card>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>`
      },
      {
        title: 'Card with Header',
        description: 'A card with title and description',
        code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content of the card</p>
  </CardContent>
</Card>`
      },
      {
        title: 'Complete Card',
        description: 'A card with all sections',
        code: `<Card>
  <CardHeader>
    <CardTitle>Complete Card</CardTitle>
    <CardDescription>This card has all sections</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content with important information</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`
      },
      {
        title: 'Form Card',
        description: 'Using card for a form layout',
        code: `<Card>
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials</CardDescription>
  </CardHeader>
  <CardContent>
    <form>
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
    </form>
  </CardContent>
  <CardFooter>
    <Button>Sign In</Button>
  </CardFooter>
</Card>`
      }
    ]
  },
  
  Input: {
    name: 'Input',
    path: 'src/components/ui/input.tsx',
    description: 'A styled input field component with focus states and accessibility features.',
    category: 'Form',
    props: [
      {
        name: 'type',
        type: 'string',
        description: 'HTML input type (text, password, email, etc.)',
        defaultValue: 'text'
      },
      {
        name: 'placeholder',
        type: 'string',
        description: 'Placeholder text for the input'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Whether the input is disabled'
      },
      {
        name: 'value',
        type: 'string',
        description: 'Controlled input value'
      },
      {
        name: 'onChange',
        type: '(e: React.ChangeEvent<HTMLInputElement>) => void',
        description: 'Change event handler'
      }
    ],
    examples: [
      {
        title: 'Text Input',
        description: 'A basic text input',
        code: '<Input type="text" placeholder="Enter your name" />'
      },
      {
        title: 'Email Input',
        description: 'An input for email addresses',
        code: '<Input type="email" placeholder="email@example.com" />'
      },
      {
        title: 'Password Input',
        description: 'A password input field',
        code: '<Input type="password" placeholder="Enter password" />'
      },
      {
        title: 'Disabled Input',
        description: 'A disabled input field',
        code: '<Input disabled placeholder="Cannot edit" />'
      },
      {
        title: 'Input with Label',
        description: 'Input combined with a label',
        code: `<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="your@email.com" />
</div>`
      }
    ]
  },
  
  Label: {
    name: 'Label',
    path: 'src/components/ui/label.tsx',
    description: 'An accessible label component built with Radix UI Label primitive. Provides proper form field labeling.',
    category: 'Form',
    props: [
      {
        name: 'htmlFor',
        type: 'string',
        description: 'ID of the input element this label is for'
      },
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS classes to apply'
      }
    ],
    examples: [
      {
        title: 'Basic Label',
        description: 'A simple label',
        code: '<Label>Username</Label>'
      },
      {
        title: 'Label with Input',
        description: 'Label connected to an input',
        code: `<div>
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
</div>`
      },
      {
        title: 'Form Field',
        description: 'Complete form field with label',
        code: `<div className="space-y-2">
  <Label htmlFor="email">Email Address</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
  <p className="text-sm text-gray-500">We'll never share your email.</p>
</div>`
      }
    ]
  }
};

/**
 * Get component metadata by name
 */
export function getComponent(name: string): ComponentMetadata | undefined {
  return COMPONENTS[name];
}

/**
 * Get all component names
 */
export function getAllComponentNames(): string[] {
  return Object.keys(COMPONENTS);
}

/**
 * Get component source code
 */
export function getComponentCode(name: string): string {
  const component = COMPONENTS[name];
  if (!component) {
    throw new Error(`Component "${name}" not found`);
  }
  
  const filePath = join(ROOT_DIR, component.path);
  try {
    return readFileSync(filePath, 'utf-8');
  } catch (error) {
    throw new Error(`Failed to read component file: ${component.path}`);
  }
}

/**
 * Search components by query
 */
export function searchComponents(query: string): ComponentMetadata[] {
  const lowerQuery = query.toLowerCase();
  const results: ComponentMetadata[] = [];
  
  for (const component of Object.values(COMPONENTS)) {
    // Search in name
    if (component.name.toLowerCase().includes(lowerQuery)) {
      results.push(component);
      continue;
    }
    
    // Search in description
    if (component.description.toLowerCase().includes(lowerQuery)) {
      results.push(component);
      continue;
    }
    
    // Search in category
    if (component.category?.toLowerCase().includes(lowerQuery)) {
      results.push(component);
      continue;
    }
    
    // Search in variants
    if (component.variants) {
      const variantMatch = Object.entries(component.variants).some(([key, values]) => {
        return key.toLowerCase().includes(lowerQuery) || 
               values.some(v => v.toLowerCase().includes(lowerQuery));
      });
      if (variantMatch) {
        results.push(component);
        continue;
      }
    }
    
    // Search in props
    const propsMatch = component.props.some(prop => 
      prop.name.toLowerCase().includes(lowerQuery) ||
      prop.description.toLowerCase().includes(lowerQuery)
    );
    if (propsMatch) {
      results.push(component);
      continue;
    }
  }
  
  return results;
}
