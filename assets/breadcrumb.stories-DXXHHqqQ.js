import{j as r}from"./jsx-runtime-D504mV7P.js";import{r as i}from"./iframe-B_O_Lmrz.js";import{S as _}from"./index-CU_znxRc.js";import{c as p}from"./utils-CDN07tui.js";import{C as f}from"./chevron-right-qsnUR8X5.js";import"./preload-helper-BvMMX7ns.js";import"./index-Yqugrw3y.js";import"./createLucideIcon-8xmj4FwI.js";const m=i.forwardRef(({...e},a)=>r.jsx("nav",{ref:a,"aria-label":"breadcrumb",...e}));m.displayName="Breadcrumb";const t=i.forwardRef(({className:e,...a},d)=>r.jsx("ol",{ref:d,className:p("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",e),...a}));t.displayName="BreadcrumbList";const c=i.forwardRef(({className:e,...a},d)=>r.jsx("li",{ref:d,className:p("inline-flex items-center gap-1.5",e),...a}));c.displayName="BreadcrumbItem";const s=i.forwardRef(({asChild:e,className:a,...d},b)=>{const B=e?_:"a";return r.jsx(B,{ref:b,className:p("transition-colors hover:text-foreground",a),...d})});s.displayName="BreadcrumbLink";const o=i.forwardRef(({className:e,...a},d)=>r.jsx("span",{ref:d,role:"link","aria-disabled":"true","aria-current":"page",className:p("font-normal text-foreground",e),...a}));o.displayName="BreadcrumbPage";const n=({children:e,className:a,...d})=>r.jsx("li",{role:"presentation","aria-hidden":"true",className:p("[&>svg]:w-3.5 [&>svg]:h-3.5",a),...d,children:e??r.jsx(f,{})});n.displayName="BreadcrumbSeparator";try{m.displayName="Breadcrumb",m.__docgenInfo={description:"",displayName:"Breadcrumb",props:{separator:{defaultValue:null,description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}try{t.displayName="BreadcrumbList",t.__docgenInfo={description:"",displayName:"BreadcrumbList",props:{}}}catch{}try{c.displayName="BreadcrumbItem",c.__docgenInfo={description:"",displayName:"BreadcrumbItem",props:{}}}catch{}try{s.displayName="BreadcrumbLink",s.__docgenInfo={description:"",displayName:"BreadcrumbLink",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{o.displayName="BreadcrumbPage",o.__docgenInfo={description:"",displayName:"BreadcrumbPage",props:{}}}catch{}try{n.displayName="BreadcrumbSeparator",n.__docgenInfo={description:"",displayName:"BreadcrumbSeparator",props:{}}}catch{}try{BreadcrumbElipssis.displayName="BreadcrumbElipssis",BreadcrumbElipssis.__docgenInfo={description:"",displayName:"BreadcrumbElipssis",props:{}}}catch{}const k={title:"Molecules/Breadcrumb",component:m,parameters:{layout:"centered"},tags:["autodocs"]},u={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(c,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(c,{children:r.jsx(s,{href:"/components",children:"Components"})}),r.jsx(n,{}),r.jsx(c,{children:r.jsx(o,{children:"Breadcrumb"})})]})})},l={render:()=>r.jsx(m,{children:r.jsxs(t,{children:[r.jsx(c,{children:r.jsx(s,{href:"/",children:"Home"})}),r.jsx(n,{}),r.jsx(c,{children:r.jsx(s,{href:"/docs",children:"Documentation"})}),r.jsx(n,{}),r.jsx(c,{children:r.jsx(s,{href:"/docs/components",children:"Components"})}),r.jsx(n,{}),r.jsx(c,{children:r.jsx(o,{children:"Breadcrumb"})})]})})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/docs/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
}`,...l.parameters?.docs?.source}}};const S=["Default","WithEllipsis"];export{u as Default,l as WithEllipsis,S as __namedExportsOrder,k as default};
