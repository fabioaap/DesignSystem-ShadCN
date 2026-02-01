import{j as e}from"./jsx-runtime-D504mV7P.js";import{A as s,a,b as n}from"./alert-DU8cPWgS.js";import{c as o}from"./createLucideIcon-8xmj4FwI.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const c=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],i=o("circle-alert",c);const l=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],p=o("terminal",l),g={title:"Molecules/Alert",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","destructive"]}}},r={render:()=>e.jsxs(s,{className:"w-[400px]",children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx(a,{children:"Heads up!"}),e.jsx(n,{children:"You can add components to your app using the cli."})]})},t={render:()=>e.jsxs(s,{variant:"destructive",className:"w-[400px]",children:[e.jsx(i,{className:"h-4 w-4"}),e.jsx(a,{children:"Error"}),e.jsx(n,{children:"Your session has expired. Please log in again."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Alert className="w-[400px]">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive" className="w-[400px]">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...t.parameters?.docs?.source}}};const j=["Default","Destructive"];export{r as Default,t as Destructive,j as __namedExportsOrder,g as default};
