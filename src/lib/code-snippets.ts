/**
 * Helper utilities for multi-framework code snippets in Storybook
 * Provides React, Vue, and Vanilla HTML/JS code examples for each component
 */

export interface CodeSnippet {
  react: string;
  vue: string;
  vanilla: string;
}

export interface ComponentSnippets {
  [key: string]: CodeSnippet;
}

/**
 * Button component code snippets
 */
export const buttonSnippets: ComponentSnippets = {
  default: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,
    vue: `<template>
  <Button>Click me</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<!-- HTML -->
<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-primary text-primary-foreground shadow-xs 
  hover:bg-primary/90 h-9 px-4 py-2">
  Click me
</button>

<!-- CSS (Tailwind classes applied) -->
<style>
  .btn-primary {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-weight: 500;
  }
</style>`,
  },
  secondary: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`,
    vue: `<template>
  <Button variant="secondary">Secondary</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-secondary text-secondary-foreground shadow-xs 
  hover:bg-secondary/80 h-9 px-4 py-2">
  Secondary
</button>`,
  },
  destructive: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonDestructive() {
  return <Button variant="destructive">Delete</Button>
}`,
    vue: `<template>
  <Button variant="destructive">Delete</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-destructive text-white shadow-xs 
  hover:bg-destructive/90 h-9 px-4 py-2">
  Delete
</button>`,
  },
  outline: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`,
    vue: `<template>
  <Button variant="outline">Outline</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  border border-input bg-background shadow-xs 
  hover:bg-accent hover:text-accent-foreground 
  h-9 px-4 py-2">
  Outline
</button>`,
  },
  ghost: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`,
    vue: `<template>
  <Button variant="ghost">Ghost</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  hover:bg-accent hover:text-accent-foreground 
  h-9 px-4 py-2">
  Ghost
</button>`,
  },
  link: {
    react: `import { Button } from "@/components/ui/button"

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`,
    vue: `<template>
  <Button variant="link">Link</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap text-sm font-medium 
  text-primary underline-offset-4 hover:underline 
  h-9 px-4 py-2">
  Link
</button>`,
  },
  withIcon: {
    react: `import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function ButtonWithIcon() {
  return (
    <Button>
      <Mail /> Login with Email
    </Button>
  )
}`,
    vue: `<template>
  <Button>
    <Mail class="mr-2 h-4 w-4" /> Login with Email
  </Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Mail } from 'lucide-vue-next'
</script>`,
    vanilla: `<button class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-primary text-primary-foreground shadow-xs 
  hover:bg-primary/90 h-9 px-4 py-2">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
    viewBox="0 0 24 24" fill="none" stroke="currentColor" 
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
  Login with Email
</button>`,
  },
  loading: {
    react: `import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export function ButtonLoading() {
  return (
    <Button disabled>
      <Loader2 className="animate-spin" />
      Please wait
    </Button>
  )
}`,
    vue: `<template>
  <Button disabled>
    <Loader2 class="mr-2 h-4 w-4 animate-spin" />
    Please wait
  </Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'
</script>`,
    vanilla: `<button disabled class="inline-flex items-center justify-center gap-2 
  whitespace-nowrap rounded-md text-sm font-medium 
  bg-primary text-primary-foreground shadow-xs 
  opacity-50 cursor-not-allowed h-9 px-4 py-2">
  <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" 
    fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" 
      stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" 
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
  Please wait
</button>`,
  },
};

/**
 * Input component code snippets
 */
export const inputSnippets: ComponentSnippets = {
  default: {
    react: `import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}`,
    vue: `<template>
  <Input type="email" placeholder="Email" />
</template>

<script setup>
import { Input } from '@/components/ui/input'
</script>`,
    vanilla: `<input 
  type="email" 
  placeholder="Email"
  class="flex h-9 w-full rounded-md border border-input 
    bg-transparent px-3 py-1 text-base shadow-xs 
    transition-colors file:border-0 file:bg-transparent 
    file:text-sm file:font-medium placeholder:text-muted-foreground 
    focus-visible:outline-none focus-visible:ring-1 
    focus-visible:ring-ring disabled:cursor-not-allowed 
    disabled:opacity-50 md:text-sm"
/>`,
  },
  withLabel: {
    react: `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputWithLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}`,
    vue: `<template>
  <div class="grid w-full max-w-sm items-center gap-1.5">
    <Label for="email">Email</Label>
    <Input type="email" id="email" placeholder="Email" />
  </div>
</template>

<script setup>
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
</script>`,
    vanilla: `<div class="grid w-full max-w-sm items-center gap-1.5">
  <label for="email" class="text-sm font-medium leading-none 
    peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    Email
  </label>
  <input 
    type="email" 
    id="email"
    placeholder="Email"
    class="flex h-9 w-full rounded-md border border-input 
      bg-transparent px-3 py-1 text-base shadow-xs 
      placeholder:text-muted-foreground 
      focus-visible:outline-none focus-visible:ring-1 
      focus-visible:ring-ring md:text-sm"
  />
</div>`,
  },
  disabled: {
    react: `import { Input } from "@/components/ui/input"

export function InputDisabled() {
  return <Input disabled type="email" placeholder="Email" />
}`,
    vue: `<template>
  <Input disabled type="email" placeholder="Email" />
</template>

<script setup>
import { Input } from '@/components/ui/input'
</script>`,
    vanilla: `<input 
  type="email" 
  placeholder="Email"
  disabled
  class="flex h-9 w-full rounded-md border border-input 
    bg-transparent px-3 py-1 text-base shadow-xs 
    placeholder:text-muted-foreground 
    disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
/>`,
  },
};

/**
 * Card component code snippets
 */
export const cardSnippets: ComponentSnippets = {
  default: {
    react: `import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CardDemo() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`,
    vue: `<template>
  <Card class="w-[350px]">
    <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>Card content goes here.</p>
    </CardContent>
    <CardFooter>
      <Button>Deploy</Button>
    </CardFooter>
  </Card>
</template>

<script setup>
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<div class="rounded-xl border bg-card text-card-foreground shadow w-[350px]">
  <div class="flex flex-col space-y-1.5 p-6">
    <h3 class="font-semibold leading-none tracking-tight">Create project</h3>
    <p class="text-sm text-muted-foreground">Deploy your new project in one-click.</p>
  </div>
  <div class="p-6 pt-0">
    <p>Card content goes here.</p>
  </div>
  <div class="flex items-center p-6 pt-0">
    <button class="inline-flex items-center justify-center gap-2 
      whitespace-nowrap rounded-md text-sm font-medium 
      bg-primary text-primary-foreground shadow-xs 
      hover:bg-primary/90 h-9 px-4 py-2">
      Deploy
    </button>
  </div>
</div>`,
  },
};

/**
 * Dialog component code snippets
 */
export const dialogSnippets: ComponentSnippets = {
  default: {
    react: `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}`,
    vue: `<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button variant="outline">Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone.
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>

<script setup>
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
</script>`,
    vanilla: `<!-- Trigger -->
<button onclick="openDialog()" class="inline-flex items-center 
  justify-center gap-2 rounded-md border border-input 
  bg-background shadow-xs hover:bg-accent 
  hover:text-accent-foreground h-9 px-4 py-2 text-sm font-medium">
  Open Dialog
</button>

<!-- Dialog Overlay + Content -->
<div id="dialog" class="hidden fixed inset-0 z-50">
  <!-- Backdrop -->
  <div class="fixed inset-0 bg-black/80" onclick="closeDialog()"></div>
  
  <!-- Dialog -->
  <div class="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 
    w-full max-w-lg border bg-background p-6 shadow-lg rounded-lg">
    <h2 class="text-lg font-semibold">Are you sure?</h2>
    <p class="text-sm text-muted-foreground">This action cannot be undone.</p>
    <button onclick="closeDialog()" class="absolute right-4 top-4">✕</button>
  </div>
</div>

<script>
function openDialog() {
  document.getElementById('dialog').classList.remove('hidden');
}
function closeDialog() {
  document.getElementById('dialog').classList.add('hidden');
}
</script>`,
  },
};

/**
 * Tabs component code snippets
 */
export const tabsSnippets: ComponentSnippets = {
  default: {
    react: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account settings here.</TabsContent>
      <TabsContent value="password">Password settings here.</TabsContent>
    </Tabs>
  )
}`,
    vue: `<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>
    <TabsContent value="account">Account settings here.</TabsContent>
    <TabsContent value="password">Password settings here.</TabsContent>
  </Tabs>
</template>

<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>`,
    vanilla: `<div class="w-[400px]">
  <!-- Tab List -->
  <div class="inline-flex h-9 items-center justify-center rounded-lg 
    bg-muted p-1 text-muted-foreground" role="tablist">
    <button role="tab" aria-selected="true" data-tab="account"
      class="inline-flex items-center justify-center whitespace-nowrap 
        rounded-md px-3 py-1 text-sm font-medium ring-offset-background 
        transition-all focus-visible:outline-none focus-visible:ring-2 
        data-[state=active]:bg-background data-[state=active]:text-foreground 
        data-[state=active]:shadow"
      onclick="switchTab('account')">
      Account
    </button>
    <button role="tab" aria-selected="false" data-tab="password"
      class="inline-flex items-center justify-center whitespace-nowrap 
        rounded-md px-3 py-1 text-sm font-medium"
      onclick="switchTab('password')">
      Password
    </button>
  </div>
  
  <!-- Tab Content -->
  <div id="tab-account" class="mt-2 p-4">Account settings here.</div>
  <div id="tab-password" class="mt-2 p-4 hidden">Password settings here.</div>
</div>

<script>
function switchTab(tab) {
  document.querySelectorAll('[role="tab"]').forEach(t => t.setAttribute('aria-selected', 'false'));
  document.querySelector(\`[data-tab="\${tab}"]\`).setAttribute('aria-selected', 'true');
  document.querySelectorAll('[id^="tab-"]').forEach(c => c.classList.add('hidden'));
  document.getElementById(\`tab-\${tab}\`).classList.remove('hidden');
}
</script>`,
  },
};

/**
 * Get all snippets for a component
 */
export function getComponentSnippets(component: string): ComponentSnippets | undefined {
  const snippetsMap: Record<string, ComponentSnippets> = {
    button: buttonSnippets,
    input: inputSnippets,
    card: cardSnippets,
    dialog: dialogSnippets,
    tabs: tabsSnippets,
  };
  return snippetsMap[component.toLowerCase()];
}

/**
 * Format code for display
 */
export function formatCode(code: string): string {
  return code.trim();
}
