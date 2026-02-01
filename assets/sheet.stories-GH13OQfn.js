import{j as e}from"./jsx-runtime-D504mV7P.js";import{B as s}from"./button-BBoxL1xH.js";import{I as c}from"./input-Dg0CqUVg.js";import{L as p}from"./label-m1Edf8ai.js";import{S as i,a,b as o,c as h,d as l,e as d,f as m,g as S}from"./sheet-FxyrYnbA.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./index-C7IQjYoj.js";import"./index-BZ7zkwJU.js";import"./index-DedMhmJ9.js";import"./index-BiErVdCm.js";import"./index-hQSASD9G.js";import"./index-Baaj9jgv.js";import"./index-BnIzK0Qe.js";import"./index-FjpTna57.js";import"./index-CioxGjvK.js";import"./index-B26hlpGq.js";import"./index-WaT0DkFa.js";import"./index-DR67NSka.js";import"./index-BHkut8Yo.js";import"./x-ClkDjTQn.js";import"./createLucideIcon-8xmj4FwI.js";const _={title:"Organisms/Sheet",component:i,parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Sheet"})}),e.jsxs(o,{children:[e.jsxs(h,{children:[e.jsx(l,{children:"Edit profile"}),e.jsx(d,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(c,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(p,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(c,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(m,{children:e.jsx(S,{asChild:!0,children:e.jsx(s,{type:"submit",children:"Save changes"})})})]})]})},r={render:()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Left Sheet"})}),e.jsx(o,{side:"left",children:e.jsxs(h,{children:[e.jsx(l,{children:"Navigation"}),e.jsx(d,{children:"Browse through the available options."})]})})]})},n={render:()=>e.jsxs(i,{children:[e.jsx(a,{asChild:!0,children:e.jsx(s,{variant:"outline",children:"Open Top Sheet"})}),e.jsx(o,{side:"top",children:e.jsxs(h,{children:[e.jsx(l,{children:"Notifications"}),e.jsx(d,{children:"You have 3 unread messages."})]})})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Left Sheet</Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>
                        Browse through the available options.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Open Top Sheet</Button>
            </SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>
                        You have 3 unread messages.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
}`,...n.parameters?.docs?.source}}};const q=["Right","Left","Top"];export{r as Left,t as Right,n as Top,q as __namedExportsOrder,_ as default};
