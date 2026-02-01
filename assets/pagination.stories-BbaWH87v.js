import{j as e}from"./jsx-runtime-D504mV7P.js";import{r as g}from"./iframe-B_O_Lmrz.js";import{c as o}from"./utils-CDN07tui.js";import{b as f}from"./button-BBoxL1xH.js";import{C as P}from"./chevron-left-B9_z6E7O.js";import{c as _}from"./createLucideIcon-8xmj4FwI.js";import{C as y}from"./chevron-right-qsnUR8X5.js";import"./preload-helper-BvMMX7ns.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";const x=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],h=_("ellipsis",x),r=({className:a,...i})=>e.jsx("nav",{role:"navigation","aria-label":"pagination",className:o("mx-auto flex w-full justify-center",a),...i});r.displayName="Pagination";const l=g.forwardRef(({className:a,...i},s)=>e.jsx("ul",{ref:s,className:o("flex flex-row items-center gap-1",a),...i}));l.displayName="PaginationContent";const n=g.forwardRef(({className:a,...i},s)=>e.jsx("li",{ref:s,className:o("",a),...i}));n.displayName="PaginationItem";const t=({className:a,isActive:i,size:s="icon",...u})=>e.jsx("a",{"aria-current":i?"page":void 0,className:o(f({variant:i?"outline":"ghost",size:s}),a),...u});t.displayName="PaginationLink";const d=({className:a,...i})=>e.jsxs(t,{"aria-label":"Go to previous page",size:"default",className:o("gap-1 pl-2.5",a),...i,children:[e.jsx(P,{className:"h-4 w-4"}),e.jsx("span",{children:"Previous"})]});d.displayName="PaginationPrevious";const p=({className:a,...i})=>e.jsxs(t,{"aria-label":"Go to next page",size:"default",className:o("gap-1 pr-2.5",a),...i,children:[e.jsx("span",{children:"Next"}),e.jsx(y,{className:"h-4 w-4"})]});p.displayName="PaginationNext";const m=({className:a,...i})=>e.jsxs("span",{"aria-hidden":!0,className:o("flex h-9 w-9 items-center justify-center",a),...i,children:[e.jsx(h,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"More pages"})]});m.displayName="PaginationEllipsis";try{r.displayName="Pagination",r.__docgenInfo={description:"",displayName:"Pagination",props:{}}}catch{}try{l.displayName="PaginationContent",l.__docgenInfo={description:"",displayName:"PaginationContent",props:{}}}catch{}try{t.displayName="PaginationLink",t.__docgenInfo={description:"",displayName:"PaginationLink",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}}}}}catch{}try{n.displayName="PaginationItem",n.__docgenInfo={description:"",displayName:"PaginationItem",props:{}}}catch{}try{d.displayName="PaginationPrevious",d.__docgenInfo={description:"",displayName:"PaginationPrevious",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}}}}}catch{}try{p.displayName="PaginationNext",p.__docgenInfo={description:"",displayName:"PaginationNext",props:{isActive:{defaultValue:null,description:"",name:"isActive",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"icon"},description:"",name:"size",required:!1,type:{name:'"default" | "sm" | "lg" | "icon" | null | undefined'}}}}}catch{}try{m.displayName="PaginationEllipsis",m.__docgenInfo={description:"",displayName:"PaginationEllipsis",props:{}}}catch{}const A={title:"Organisms/Pagination",component:r,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsx(r,{children:e.jsxs(l,{children:[e.jsx(n,{children:e.jsx(d,{href:"#"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"1"})}),e.jsx(n,{children:e.jsx(t,{href:"#",isActive:!0,children:"2"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"3"})}),e.jsx(n,{children:e.jsx(m,{})}),e.jsx(n,{children:e.jsx(p,{href:"#"})})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
}`,...c.parameters?.docs?.source}}};const V=["Default"];export{c as Default,V as __namedExportsOrder,A as default};
