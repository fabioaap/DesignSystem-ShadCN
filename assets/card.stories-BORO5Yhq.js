import{j as e}from"./jsx-runtime-D504mV7P.js";import{C as n,a as d,b as o,c as i,d as c,e as l}from"./card-BN2eZ0Yy.js";import{B as t}from"./button-BBoxL1xH.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./utils-CDN07tui.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";const f={title:"Molecules/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Card Title"}),e.jsx(i,{children:"Card Description"})]}),e.jsx(c,{children:e.jsx("p",{children:"Card Content"})}),e.jsx(l,{children:e.jsx(t,{children:"Action"})})]})},a={render:()=>e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Simple Card"}),e.jsx(i,{children:"This is a simple card example"})]}),e.jsx(c,{children:e.jsx("p",{children:"This card contains some simple content to demonstrate the component."})})]})},s={render:()=>e.jsxs(n,{className:"w-[350px]",children:[e.jsxs(d,{children:[e.jsx(o,{children:"Notifications"}),e.jsx(i,{children:"You have 3 unread messages."})]}),e.jsx(c,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm",children:"Message 1"}),e.jsx("p",{className:"text-sm",children:"Message 2"}),e.jsx("p",{className:"text-sm",children:"Message 3"})]})}),e.jsxs(l,{className:"flex justify-between",children:[e.jsx(t,{variant:"outline",children:"Cancel"}),e.jsx(t,{children:"Mark all as read"})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Simple Card</CardTitle>
        <CardDescription>This is a simple card example</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card contains some simple content to demonstrate the component.</p>
      </CardContent>
    </Card>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p className="text-sm">Message 1</p>
          <p className="text-sm">Message 2</p>
          <p className="text-sm">Message 3</p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Mark all as read</Button>
      </CardFooter>
    </Card>
}`,...s.parameters?.docs?.source}}};const g=["Default","Simple","WithFooter"];export{r as Default,a as Simple,s as WithFooter,g as __namedExportsOrder,f as default};
