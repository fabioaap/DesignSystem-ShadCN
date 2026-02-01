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
  },

  Checkbox: {
    name: 'Checkbox',
    path: 'src/components/ui/checkbox.tsx',
    description: 'Caixa de seleção para múltiplas escolhas em formulários',
    category: 'Forms',
    props: [
      {
        name: 'checked',
        type: 'boolean | "indeterminate"',
        description: 'Estado do checkbox (controlado)'
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        description: 'Estado inicial (não controlado)'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Desabilita interação'
      },
      {
        name: 'onCheckedChange',
        type: '(checked: boolean | "indeterminate") => void',
        description: 'Callback quando estado muda'
      }
    ],
    examples: [
      {
        title: 'Default Checkbox',
        description: 'Checkbox básico',
        code: '<Checkbox id="terms" />'
      },
      {
        title: 'Checked Checkbox',
        description: 'Checkbox marcado por padrão',
        code: '<Checkbox defaultChecked disabled />'
      }
    ]
  },

  RadioGroup: {
    name: 'RadioGroup',
    path: 'src/components/ui/radio-group.tsx',
    description: 'Grupo de opções onde apenas uma pode ser selecionada',
    category: 'Forms',
    subComponents: ['RadioGroup', 'RadioGroupItem'],
    props: [
      {
        name: 'value',
        type: 'string',
        description: 'Valor selecionado (controlado)'
      },
      {
        name: 'defaultValue',
        type: 'string',
        description: 'Valor inicial (não controlado)'
      },
      {
        name: 'onValueChange',
        type: '(value: string) => void',
        description: 'Callback quando valor muda'
      }
    ],
    examples: [
      {
        title: 'Basic Radio Group',
        description: 'Grupo de radio buttons',
        code: `<RadioGroup defaultValue="option-1">
  <RadioGroupItem value="option-1" />
  <RadioGroupItem value="option-2" />
</RadioGroup>`
      }
    ]
  },

  Select: {
    name: 'Select',
    path: 'src/components/ui/select.tsx',
    description: 'Dropdown de seleção com busca e múltiplas opções',
    category: 'Forms',
    subComponents: ['Select', 'SelectTrigger', 'SelectContent', 'SelectItem', 'SelectValue', 'SelectGroup', 'SelectLabel', 'SelectSeparator'],
    props: [
      {
        name: 'value',
        type: 'string',
        description: 'Valor selecionado'
      },
      {
        name: 'onValueChange',
        type: '(value: string) => void',
        description: 'Callback quando valor muda'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Desabilita select'
      }
    ],
    examples: [
      {
        title: 'Basic Select',
        description: 'Select simples',
        code: `<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
  </SelectContent>
</Select>`
      }
    ]
  },

  Textarea: {
    name: 'Textarea',
    path: 'src/components/ui/textarea.tsx',
    description: 'Campo de texto multilinha para entradas longas',
    category: 'Forms',
    props: [
      {
        name: 'placeholder',
        type: 'string',
        description: 'Texto de placeholder'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Desabilita campo'
      },
      {
        name: 'rows',
        type: 'number',
        description: 'Número de linhas visíveis'
      }
    ],
    examples: [
      {
        title: 'Basic Textarea',
        description: 'Campo de texto multilinha',
        code: '<Textarea placeholder="Digite sua mensagem..." />'
      }
    ]
  },

  Switch: {
    name: 'Switch',
    path: 'src/components/ui/switch.tsx',
    description: 'Toggle switch para ativar/desativar opções',
    category: 'Forms',
    props: [
      {
        name: 'checked',
        type: 'boolean',
        description: 'Estado do switch'
      },
      {
        name: 'onCheckedChange',
        type: '(checked: boolean) => void',
        description: 'Callback quando estado muda'
      },
      {
        name: 'disabled',
        type: 'boolean',
        description: 'Desabilita switch'
      }
    ],
    examples: [
      {
        title: 'Basic Switch',
        description: 'Switch simples',
        code: '<Switch />'
      }
    ]
  },

  Calendar: {
    name: 'Calendar',
    path: 'src/components/ui/calendar.tsx',
    description: 'Calendário para seleção de datas',
    category: 'Forms',
    props: [
      {
        name: 'mode',
        type: '"single" | "multiple" | "range"',
        description: 'Modo de seleção (single, multiple, range)'
      },
      {
        name: 'selected',
        type: 'Date | Date[] | DateRange',
        description: 'Data(s) selecionada(s)'
      },
      {
        name: 'onSelect',
        type: '(date: Date | Date[] | DateRange) => void',
        description: 'Callback quando data é selecionada'
      }
    ],
    examples: [
      {
        title: 'Single Date Calendar',
        description: 'Calendário para seleção única',
        code: `<Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
/>`
      }
    ]
  },

  InputOTP: {
    name: 'InputOTP',
    path: 'src/components/ui/input-otp.tsx',
    description: 'Input especializado para códigos OTP de verificação',
    category: 'Forms',
    subComponents: ['InputOTP', 'InputOTPGroup', 'InputOTPSlot', 'InputOTPSeparator'],
    props: [
      {
        name: 'maxLength',
        type: 'number',
        description: 'Número máximo de dígitos'
      },
      {
        name: 'value',
        type: 'string',
        description: 'Valor do OTP'
      },
      {
        name: 'onChange',
        type: '(value: string) => void',
        description: 'Callback quando valor muda'
      }
    ],
    examples: [
      {
        title: 'Basic OTP Input',
        description: 'Input OTP de 6 dígitos',
        code: `<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`
      }
    ]
  },

  Slider: {
    name: 'Slider',
    path: 'src/components/ui/slider.tsx',
    description: 'Controle deslizante para seleção de valores numéricos',
    category: 'Forms',
    props: [
      {
        name: 'min',
        type: 'number',
        description: 'Valor mínimo',
        defaultValue: '0'
      },
      {
        name: 'max',
        type: 'number',
        description: 'Valor máximo',
        defaultValue: '100'
      },
      {
        name: 'step',
        type: 'number',
        description: 'Incremento do valor'
      },
      {
        name: 'value',
        type: 'number[]',
        description: 'Valor(es) atual(is)'
      },
      {
        name: 'onValueChange',
        type: '(value: number[]) => void',
        description: 'Callback quando valor muda'
      }
    ],
    examples: [
      {
        title: 'Basic Slider',
        description: 'Slider simples',
        code: '<Slider defaultValue={[50]} max={100} step={1} />'
      },
      {
        title: 'Range Slider',
        description: 'Slider com range',
        code: '<Slider defaultValue={[25, 75]} max={100} step={1} />'
      }
    ]
  },

  Form: {
    name: 'Form',
    path: 'src/components/ui/form.tsx',
    description: 'Wrapper para formulários com validação integrada',
    category: 'Forms',
    subComponents: ['Form', 'FormField', 'FormItem', 'FormLabel', 'FormControl', 'FormDescription', 'FormMessage'],
    props: [
      {
        name: 'form',
        type: 'UseFormReturn',
        description: 'Instância do react-hook-form'
      }
    ],
    examples: [
      {
        title: 'Form with Validation',
        description: 'Formulário com validação usando zod',
        code: `<Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)}>
    <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  </form>
</Form>`
      }
    ]
  },

  // === NEW COMPONENTS ===

  Accordion: {
    name: 'Accordion',
    path: 'src/components/ui/accordion.tsx',
    description: 'A vertically stacked set of interactive headings that reveal/hide content.',
    category: 'Layout',
    subComponents: ['Accordion', 'AccordionItem', 'AccordionTrigger', 'AccordionContent'],
    props: [
      { name: 'type', type: '"single" | "multiple"', description: 'Whether single or multiple items can be open' },
      { name: 'collapsible', type: 'boolean', description: 'Allow closing all items (single mode)' }
    ],
    examples: [
      { title: 'Default', description: 'Basic accordion', code: '<Accordion type="single" collapsible><AccordionItem value="item-1"><AccordionTrigger>Title</AccordionTrigger><AccordionContent>Content</AccordionContent></AccordionItem></Accordion>' }
    ]
  },

  Alert: {
    name: 'Alert',
    path: 'src/components/ui/alert.tsx',
    description: 'Displays a callout for user attention with variant styles.',
    category: 'Feedback',
    variants: { variant: ['default', 'destructive'] },
    subComponents: ['Alert', 'AlertTitle', 'AlertDescription'],
    props: [
      { name: 'variant', type: '"default" | "destructive"', description: 'Visual style variant', defaultValue: 'default' }
    ],
    examples: [
      { title: 'Default', description: 'Info alert', code: '<Alert><AlertTitle>Info</AlertTitle><AlertDescription>Message</AlertDescription></Alert>' }
    ]
  },

  AlertDialog: {
    name: 'AlertDialog',
    path: 'src/components/ui/alert-dialog.tsx',
    description: 'Modal dialog that interrupts the user with important content requiring acknowledgment.',
    category: 'Overlay',
    subComponents: ['AlertDialog', 'AlertDialogTrigger', 'AlertDialogContent', 'AlertDialogHeader', 'AlertDialogTitle', 'AlertDialogDescription', 'AlertDialogFooter', 'AlertDialogAction', 'AlertDialogCancel'],
    props: [],
    examples: [
      { title: 'Confirmation', description: 'Delete confirmation dialog', code: '<AlertDialog><AlertDialogTrigger>Delete</AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Are you sure?</AlertDialogTitle></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>' }
    ]
  },

  Avatar: {
    name: 'Avatar',
    path: 'src/components/ui/avatar.tsx',
    description: 'An image element with fallback for user profile pictures.',
    category: 'Data Display',
    subComponents: ['Avatar', 'AvatarImage', 'AvatarFallback'],
    props: [],
    examples: [
      { title: 'With Image', description: 'Avatar with profile image', code: '<Avatar><AvatarImage src="url" /><AvatarFallback>CN</AvatarFallback></Avatar>' }
    ]
  },

  Badge: {
    name: 'Badge',
    path: 'src/components/ui/badge.tsx',
    description: 'A small status descriptor for UI elements.',
    category: 'Data Display',
    variants: { variant: ['default', 'secondary', 'destructive', 'outline'] },
    props: [
      { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', description: 'Visual style variant', defaultValue: 'default' }
    ],
    examples: [
      { title: 'Default', description: 'Badge with variants', code: '<Badge>Badge</Badge>' }
    ]
  },

  Breadcrumb: {
    name: 'Breadcrumb',
    path: 'src/components/ui/breadcrumb.tsx',
    description: 'Displays the path to the current resource using a hierarchy of links.',
    category: 'Navigation',
    subComponents: ['Breadcrumb', 'BreadcrumbList', 'BreadcrumbItem', 'BreadcrumbLink', 'BreadcrumbPage', 'BreadcrumbSeparator'],
    props: [],
    examples: [
      { title: 'Default', description: 'Navigation breadcrumb', code: '<Breadcrumb><BreadcrumbList><BreadcrumbItem><BreadcrumbLink href="/">Home</BreadcrumbLink></BreadcrumbItem><BreadcrumbSeparator /><BreadcrumbItem><BreadcrumbPage>Current</BreadcrumbPage></BreadcrumbItem></BreadcrumbList></Breadcrumb>' }
    ]
  },

  Carousel: {
    name: 'Carousel',
    path: 'src/components/ui/carousel.tsx',
    description: 'A carousel with motion and swipe built using Embla.',
    category: 'Layout',
    subComponents: ['Carousel', 'CarouselContent', 'CarouselItem', 'CarouselPrevious', 'CarouselNext'],
    props: [
      { name: 'orientation', type: '"horizontal" | "vertical"', description: 'Carousel orientation', defaultValue: 'horizontal' }
    ],
    examples: [
      { title: 'Default', description: 'Basic carousel', code: '<Carousel><CarouselContent><CarouselItem>Slide 1</CarouselItem></CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>' }
    ]
  },

  Collapsible: {
    name: 'Collapsible',
    path: 'src/components/ui/collapsible.tsx',
    description: 'An interactive component which expands/collapses a panel.',
    category: 'Layout',
    subComponents: ['Collapsible', 'CollapsibleTrigger', 'CollapsibleContent'],
    props: [],
    examples: [
      { title: 'Default', description: 'Expandable section', code: '<Collapsible><CollapsibleTrigger>Toggle</CollapsibleTrigger><CollapsibleContent>Content</CollapsibleContent></Collapsible>' }
    ]
  },

  Command: {
    name: 'Command',
    path: 'src/components/ui/command.tsx',
    description: 'Fast, composable command menu using cmdk.',
    category: 'Navigation',
    subComponents: ['Command', 'CommandDialog', 'CommandInput', 'CommandList', 'CommandEmpty', 'CommandGroup', 'CommandItem', 'CommandShortcut', 'CommandSeparator'],
    props: [],
    examples: [
      { title: 'Default', description: 'Command palette', code: '<Command><CommandInput placeholder="Search..." /><CommandList><CommandEmpty>No results</CommandEmpty><CommandGroup heading="Suggestions"><CommandItem>Calendar</CommandItem></CommandGroup></CommandList></Command>' }
    ]
  },

  ContextMenu: {
    name: 'ContextMenu',
    path: 'src/components/ui/context-menu.tsx',
    description: 'Displays a menu to the user on right click.',
    category: 'Navigation',
    subComponents: ['ContextMenu', 'ContextMenuTrigger', 'ContextMenuContent', 'ContextMenuItem', 'ContextMenuSeparator'],
    props: [],
    examples: [
      { title: 'Default', description: 'Right-click menu', code: '<ContextMenu><ContextMenuTrigger>Right click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Profile</ContextMenuItem></ContextMenuContent></ContextMenu>' }
    ]
  },

  Dialog: {
    name: 'Dialog',
    path: 'src/components/ui/dialog.tsx',
    description: 'A window overlaid on the primary window.',
    category: 'Overlay',
    subComponents: ['Dialog', 'DialogTrigger', 'DialogContent', 'DialogHeader', 'DialogTitle', 'DialogDescription', 'DialogFooter'],
    props: [],
    examples: [
      { title: 'Default', description: 'Modal dialog', code: '<Dialog><DialogTrigger>Open</DialogTrigger><DialogContent><DialogHeader><DialogTitle>Title</DialogTitle></DialogHeader></DialogContent></Dialog>' }
    ]
  },

  Drawer: {
    name: 'Drawer',
    path: 'src/components/ui/drawer.tsx',
    description: 'A drawer component using Vaul library.',
    category: 'Overlay',
    subComponents: ['Drawer', 'DrawerTrigger', 'DrawerContent', 'DrawerHeader', 'DrawerTitle', 'DrawerDescription', 'DrawerFooter', 'DrawerClose'],
    props: [],
    examples: [
      { title: 'Default', description: 'Bottom drawer', code: '<Drawer><DrawerTrigger>Open</DrawerTrigger><DrawerContent><DrawerHeader><DrawerTitle>Title</DrawerTitle></DrawerHeader></DrawerContent></Drawer>' }
    ]
  },

  DropdownMenu: {
    name: 'DropdownMenu',
    path: 'src/components/ui/dropdown-menu.tsx',
    description: 'Displays a menu of actions/options triggered by a button.',
    category: 'Navigation',
    subComponents: ['DropdownMenu', 'DropdownMenuTrigger', 'DropdownMenuContent', 'DropdownMenuItem', 'DropdownMenuSeparator', 'DropdownMenuLabel', 'DropdownMenuShortcut'],
    props: [],
    examples: [
      { title: 'Default', description: 'Dropdown menu', code: '<DropdownMenu><DropdownMenuTrigger>Open</DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Profile</DropdownMenuItem></DropdownMenuContent></DropdownMenu>' }
    ]
  },

  HoverCard: {
    name: 'HoverCard',
    path: 'src/components/ui/hover-card.tsx',
    description: 'For sighted users to preview content behind a link.',
    category: 'Overlay',
    subComponents: ['HoverCard', 'HoverCardTrigger', 'HoverCardContent'],
    props: [],
    examples: [
      { title: 'Default', description: 'Hover preview', code: '<HoverCard><HoverCardTrigger>Hover</HoverCardTrigger><HoverCardContent>Content</HoverCardContent></HoverCard>' }
    ]
  },

  Menubar: {
    name: 'Menubar',
    path: 'src/components/ui/menubar.tsx',
    description: 'A visually persistent menu common in desktop applications.',
    category: 'Navigation',
    subComponents: ['Menubar', 'MenubarMenu', 'MenubarTrigger', 'MenubarContent', 'MenubarItem'],
    props: [],
    examples: [
      { title: 'Default', description: 'Application menubar', code: '<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New</MenubarItem></MenubarContent></MenubarMenu></Menubar>' }
    ]
  },

  NavigationMenu: {
    name: 'NavigationMenu',
    path: 'src/components/ui/navigation-menu.tsx',
    description: 'A collection of links for navigating websites.',
    category: 'Navigation',
    subComponents: ['NavigationMenu', 'NavigationMenuList', 'NavigationMenuItem', 'NavigationMenuTrigger', 'NavigationMenuContent', 'NavigationMenuLink'],
    props: [],
    examples: [
      { title: 'Default', description: 'Site navigation', code: '<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuLink>Link</NavigationMenuLink></NavigationMenuItem></NavigationMenuList></NavigationMenu>' }
    ]
  },

  Pagination: {
    name: 'Pagination',
    path: 'src/components/ui/pagination.tsx',
    description: 'Pagination with page navigation, next/previous and ellipsis.',
    category: 'Navigation',
    subComponents: ['Pagination', 'PaginationContent', 'PaginationItem', 'PaginationLink', 'PaginationPrevious', 'PaginationNext', 'PaginationEllipsis'],
    props: [],
    examples: [
      { title: 'Default', description: 'Page pagination', code: '<Pagination><PaginationContent><PaginationItem><PaginationPrevious /></PaginationItem><PaginationItem><PaginationLink>1</PaginationLink></PaginationItem><PaginationItem><PaginationNext /></PaginationItem></PaginationContent></Pagination>' }
    ]
  },

  Popover: {
    name: 'Popover',
    path: 'src/components/ui/popover.tsx',
    description: 'Displays rich content in a portal triggered by a button.',
    category: 'Overlay',
    subComponents: ['Popover', 'PopoverTrigger', 'PopoverContent'],
    props: [],
    examples: [
      { title: 'Default', description: 'Popover content', code: '<Popover><PopoverTrigger>Open</PopoverTrigger><PopoverContent>Content</PopoverContent></Popover>' }
    ]
  },

  Progress: {
    name: 'Progress',
    path: 'src/components/ui/progress.tsx',
    description: 'Displays an indicator showing the completion progress of a task.',
    category: 'Feedback',
    props: [
      { name: 'value', type: 'number', description: 'Progress value 0-100' }
    ],
    examples: [
      { title: 'Default', description: 'Progress bar', code: '<Progress value={60} />' }
    ]
  },

  Resizable: {
    name: 'Resizable',
    path: 'src/components/ui/resizable.tsx',
    description: 'Resizable panel groups and handles.',
    category: 'Layout',
    subComponents: ['ResizablePanelGroup', 'ResizablePanel', 'ResizableHandle'],
    props: [],
    examples: [
      { title: 'Default', description: 'Resizable panels', code: '<ResizablePanelGroup direction="horizontal"><ResizablePanel>One</ResizablePanel><ResizableHandle /><ResizablePanel>Two</ResizablePanel></ResizablePanelGroup>' }
    ]
  },

  ScrollArea: {
    name: 'ScrollArea',
    path: 'src/components/ui/scroll-area.tsx',
    description: 'Augments native scroll functionality for custom cross-browser styling.',
    category: 'Layout',
    subComponents: ['ScrollArea', 'ScrollBar'],
    props: [],
    examples: [
      { title: 'Default', description: 'Scrollable area', code: '<ScrollArea className="h-72 w-48"><div>Long content...</div></ScrollArea>' }
    ]
  },

  Separator: {
    name: 'Separator',
    path: 'src/components/ui/separator.tsx',
    description: 'Visually or semantically separates content.',
    category: 'Layout',
    props: [
      { name: 'orientation', type: '"horizontal" | "vertical"', description: 'Orientation', defaultValue: 'horizontal' }
    ],
    examples: [
      { title: 'Default', description: 'Divider line', code: '<Separator />' }
    ]
  },

  Sheet: {
    name: 'Sheet',
    path: 'src/components/ui/sheet.tsx',
    description: 'Extends Dialog to display content in a side panel.',
    category: 'Overlay',
    variants: { side: ['top', 'bottom', 'left', 'right'] },
    subComponents: ['Sheet', 'SheetTrigger', 'SheetContent', 'SheetHeader', 'SheetTitle', 'SheetDescription', 'SheetFooter', 'SheetClose'],
    props: [
      { name: 'side', type: '"top" | "bottom" | "left" | "right"', description: 'Sheet position', defaultValue: 'right' }
    ],
    examples: [
      { title: 'Default', description: 'Side sheet', code: '<Sheet><SheetTrigger>Open</SheetTrigger><SheetContent><SheetHeader><SheetTitle>Title</SheetTitle></SheetHeader></SheetContent></Sheet>' }
    ]
  },

  Skeleton: {
    name: 'Skeleton',
    path: 'src/components/ui/skeleton.tsx',
    description: 'Used to show a placeholder while content is loading.',
    category: 'Feedback',
    props: [],
    examples: [
      { title: 'Default', description: 'Loading placeholder', code: '<Skeleton className="h-4 w-[200px]" />' }
    ]
  },

  Sonner: {
    name: 'Sonner',
    path: 'src/components/ui/sonner.tsx',
    description: 'Toast notification component using Sonner library.',
    category: 'Feedback',
    props: [],
    examples: [
      { title: 'Default', description: 'Toast notification', code: 'toast("Event created")' }
    ]
  },

  Table: {
    name: 'Table',
    path: 'src/components/ui/table.tsx',
    description: 'A responsive table component.',
    category: 'Data Display',
    subComponents: ['Table', 'TableHeader', 'TableBody', 'TableFooter', 'TableRow', 'TableHead', 'TableCell', 'TableCaption'],
    props: [],
    examples: [
      { title: 'Default', description: 'Data table', code: '<Table><TableHeader><TableRow><TableHead>Name</TableHead></TableRow></TableHeader><TableBody><TableRow><TableCell>Value</TableCell></TableRow></TableBody></Table>' }
    ]
  },

  Tabs: {
    name: 'Tabs',
    path: 'src/components/ui/tabs.tsx',
    description: 'A set of layered sections of content.',
    category: 'Navigation',
    subComponents: ['Tabs', 'TabsList', 'TabsTrigger', 'TabsContent'],
    props: [],
    examples: [
      { title: 'Default', description: 'Tabbed content', code: '<Tabs defaultValue="tab1"><TabsList><TabsTrigger value="tab1">Tab 1</TabsTrigger></TabsList><TabsContent value="tab1">Content</TabsContent></Tabs>' }
    ]
  },

  Toggle: {
    name: 'Toggle',
    path: 'src/components/ui/toggle.tsx',
    description: 'A two-state button that can be on or off.',
    category: 'Interactive',
    variants: { variant: ['default', 'outline'], size: ['default', 'sm', 'lg'] },
    props: [
      { name: 'variant', type: '"default" | "outline"', description: 'Visual style', defaultValue: 'default' },
      { name: 'size', type: '"default" | "sm" | "lg"', description: 'Size of toggle', defaultValue: 'default' }
    ],
    examples: [
      { title: 'Default', description: 'Toggle button', code: '<Toggle>Toggle</Toggle>' }
    ]
  },

  ToggleGroup: {
    name: 'ToggleGroup',
    path: 'src/components/ui/toggle-group.tsx',
    description: 'A set of two-state buttons grouped together.',
    category: 'Interactive',
    subComponents: ['ToggleGroup', 'ToggleGroupItem'],
    props: [
      { name: 'type', type: '"single" | "multiple"', description: 'Selection mode' }
    ],
    examples: [
      { title: 'Default', description: 'Toggle group', code: '<ToggleGroup type="single"><ToggleGroupItem value="a">A</ToggleGroupItem><ToggleGroupItem value="b">B</ToggleGroupItem></ToggleGroup>' }
    ]
  },

  Tooltip: {
    name: 'Tooltip',
    path: 'src/components/ui/tooltip.tsx',
    description: 'A popup that displays information related to an element.',
    category: 'Overlay',
    subComponents: ['Tooltip', 'TooltipTrigger', 'TooltipContent', 'TooltipProvider'],
    props: [],
    examples: [
      { title: 'Default', description: 'Hover tooltip', code: '<TooltipProvider><Tooltip><TooltipTrigger>Hover</TooltipTrigger><TooltipContent>Content</TooltipContent></Tooltip></TooltipProvider>' }
    ]
  },

  AspectRatio: {
    name: 'AspectRatio',
    path: 'src/components/ui/aspect-ratio.tsx',
    description: 'Displays content within a desired ratio.',
    category: 'Layout',
    props: [
      { name: 'ratio', type: 'number', description: 'Aspect ratio (e.g., 16/9)', defaultValue: '1' }
    ],
    examples: [
      { title: 'Default', description: '16:9 ratio', code: '<AspectRatio ratio={16/9}><img src="..." /></AspectRatio>' }
    ]
  },

  Chart: {
    name: 'Chart',
    path: 'src/components/ui/chart.tsx',
    description: 'Chart components built on top of Recharts.',
    category: 'Data Display',
    subComponents: ['ChartContainer', 'ChartTooltip', 'ChartTooltipContent', 'ChartLegend', 'ChartLegendContent'],
    props: [
      { name: 'config', type: 'ChartConfig', description: 'Chart configuration with colors and labels' }
    ],
    examples: [
      { title: 'Default', description: 'Bar chart', code: '<ChartContainer config={chartConfig}><BarChart data={data}><Bar dataKey="value" /></BarChart></ChartContainer>' }
    ]
  },

  Sidebar: {
    name: 'Sidebar',
    path: 'src/components/ui/sidebar.tsx',
    description: 'A composable, themeable and customizable sidebar component.',
    category: 'Layout',
    subComponents: ['Sidebar', 'SidebarProvider', 'SidebarContent', 'SidebarGroup', 'SidebarGroupLabel', 'SidebarGroupContent', 'SidebarMenu', 'SidebarMenuItem', 'SidebarMenuButton'],
    props: [],
    examples: [
      { title: 'Default', description: 'App sidebar', code: '<SidebarProvider><Sidebar><SidebarContent><SidebarGroup><SidebarGroupLabel>App</SidebarGroupLabel></SidebarGroup></SidebarContent></Sidebar></SidebarProvider>' }
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
