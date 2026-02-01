import{j as e}from"./jsx-runtime-D504mV7P.js";import{B as t}from"./button-BBoxL1xH.js";import{r as S}from"./iframe-B_O_Lmrz.js";import{c as w}from"./utils-CDN07tui.js";import{C as _}from"./check-DSosjyHM.js";import{c as D}from"./createLucideIcon-8xmj4FwI.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./preload-helper-BvMMX7ns.js";const V=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],O=D("copy",V),r={default:{react:`import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return <Button>Click me</Button>
}`,vue:`<template>
  <Button>Click me</Button>
</template>

<script setup>
import { Button } from '@/components/ui/button'
<\/script>`,vanilla:`<!-- HTML -->
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
</style>`},secondary:{react:`import { Button } from "@/components/ui/button"

export function ButtonSecondary() {
  return <Button variant="secondary">Secondary</Button>
}`},destructive:{react:`import { Button } from "@/components/ui/button"

export function ButtonDestructive() {
  return <Button variant="destructive">Delete</Button>
}`},outline:{react:`import { Button } from "@/components/ui/button"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}`},ghost:{react:`import { Button } from "@/components/ui/button"

export function ButtonGhost() {
  return <Button variant="ghost">Ghost</Button>
}`},link:{react:`import { Button } from "@/components/ui/button"

export function ButtonLink() {
  return <Button variant="link">Link</Button>
}`}},N={react:"React",vue:"Vue",vanilla:"Vanilla HTML/JS"},T={react:"tsx",vue:"vue",vanilla:"html"};function x({react:n,vue:f,vanilla:y,className:B}){const[a,b]=S.useState("react"),[C,j]=S.useState(!1),k={react:n,vue:f,vanilla:y},L=async()=>{await navigator.clipboard.writeText(k[a]),j(!0),setTimeout(()=>j(!1),2e3)};return e.jsxs("div",{className:w("rounded-lg border bg-zinc-950 text-zinc-50 overflow-hidden",B),children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4",children:[e.jsx("div",{className:"flex",children:Object.keys(N).map(c=>e.jsx("button",{onClick:()=>b(c),className:w("px-4 py-2 text-sm font-medium transition-colors border-b-2 -mb-px",a===c?"border-blue-500 text-blue-400":"border-transparent text-zinc-400 hover:text-zinc-200"),children:N[c]},c))}),e.jsx("button",{onClick:L,className:"flex items-center gap-1.5 rounded px-2 py-1 text-xs text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200 transition-colors",children:C?e.jsxs(e.Fragment,{children:[e.jsx(_,{className:"h-3.5 w-3.5"}),"Copied!"]}):e.jsxs(e.Fragment,{children:[e.jsx(O,{className:"h-3.5 w-3.5"}),"Copy"]})})]}),e.jsx("div",{className:"relative",children:e.jsx("pre",{className:"overflow-x-auto p-4 text-sm leading-relaxed",children:e.jsx("code",{className:`language-${T[a]}`,children:k[a]})})})]})}function z({children:n,react:f,vue:y,vanilla:B}){const[a,b]=S.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex justify-end",children:e.jsx("button",{onClick:()=>b(!a),className:"text-sm text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors",children:a?"Hide Code":"Show Code"})}),e.jsx("div",{className:"p-6 border rounded-lg bg-background",children:n}),a&&e.jsx(x,{react:f,vue:y,vanilla:B})]})}try{x.displayName="CodePreview",x.__docgenInfo={description:"",displayName:"CodePreview",props:{react:{defaultValue:null,description:"",name:"react",required:!0,type:{name:"string"}},vue:{defaultValue:null,description:"",name:"vue",required:!0,type:{name:"string"}},vanilla:{defaultValue:null,description:"",name:"vanilla",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}}}}}catch{}try{z.displayName="StoryWithCode",z.__docgenInfo={description:"",displayName:"StoryWithCode",props:{react:{defaultValue:null,description:"",name:"react",required:!0,type:{name:"string"}},vue:{defaultValue:null,description:"",name:"vue",required:!0,type:{name:"string"}},vanilla:{defaultValue:null,description:"",name:"vanilla",required:!0,type:{name:"string"}}}}}catch{}const F={title:"Atoms/Button",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive","outline","secondary","ghost","link"]},size:{control:"select",options:["default","sm","lg","icon"]}}},l={args:{children:"Button",variant:"default"},parameters:{docs:{source:{code:r.default.react}}}},s={args:{children:"Button",variant:"default"},render:n=>e.jsxs("div",{className:"space-y-6 w-full max-w-3xl",children:[e.jsx("div",{className:"flex justify-center p-6 border rounded-lg bg-background",children:e.jsx(t,{...n,children:n.children})}),e.jsx(x,{react:r.default.react,vue:r.default.vue,vanilla:r.default.vanilla})]})},d={args:{children:"Delete",variant:"destructive"},parameters:{docs:{source:{code:r.destructive.react}}}},u={args:{children:"Outline",variant:"outline"},parameters:{docs:{source:{code:r.outline.react}}}},p={args:{children:"Secondary",variant:"secondary"},parameters:{docs:{source:{code:r.secondary.react}}}},m={args:{children:"Ghost",variant:"ghost"},parameters:{docs:{source:{code:r.ghost.react}}}},v={args:{children:"Link",variant:"link"},parameters:{docs:{source:{code:r.link.react}}}},g={args:{children:"Small Button",size:"sm"}},h={args:{children:"Large Button",size:"lg"}},o={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"link",children:"Link"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.default.react
      }
    }
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'default'
  },
  render: args => <div className="space-y-6 w-full max-w-3xl">
      <div className="flex justify-center p-6 border rounded-lg bg-background">
        <Button {...args}>{args.children}</Button>
      </div>
      <CodePreview react={buttonSnippets.default.react} vue={buttonSnippets.default.vue} vanilla={buttonSnippets.default.vanilla} />
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Code snippets showing usage in React, Vue and Vanilla HTML/JS",...s.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete',
    variant: 'destructive'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.destructive.react
      }
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline',
    variant: 'outline'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.outline.react
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.secondary.react
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost',
    variant: 'ghost'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.ghost.react
      }
    }
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Link',
    variant: 'link'
  },
  parameters: {
    docs: {
      source: {
        code: buttonSnippets.link.react
      }
    }
  }
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
}`,...o.parameters?.docs?.source},description:{story:"All variants displayed together with code examples",...o.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
}`,...i.parameters?.docs?.source},description:{story:"All sizes displayed together",...i.parameters?.docs?.description}}};const J=["Default","CodeExamples","Destructive","Outline","Secondary","Ghost","Link","Small","Large","AllVariants","AllSizes"];export{i as AllSizes,o as AllVariants,s as CodeExamples,l as Default,d as Destructive,m as Ghost,h as Large,v as Link,u as Outline,p as Secondary,g as Small,J as __namedExportsOrder,F as default};
