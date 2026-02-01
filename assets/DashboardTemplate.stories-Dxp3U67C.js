import{j as s}from"./jsx-runtime-D504mV7P.js";import{D as h,B as j}from"./DashboardTemplate-C_gF1w63.js";import{B as o}from"./button-BBoxL1xH.js";import{C as l,a as i,b as c,c as d,d as m}from"./card-BN2eZ0Yy.js";import{A as u,a as f,b as g}from"./avatar-liDscsNz.js";import{I as b}from"./input-Dg0CqUVg.js";import{S as v}from"./search-D1YuWfZ6.js";import{H as N}from"./house-COIG139J.js";import{U as C}from"./users-B66F2pQG.js";import{S as E}from"./settings-CGEI3Uf8.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./createLucideIcon-8xmj4FwI.js";import"./utils-CDN07tui.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./index-Dh3K1LF9.js";import"./index-B26hlpGq.js";import"./index-BnIzK0Qe.js";import"./index-C7IQjYoj.js";import"./index-BZ7zkwJU.js";import"./index-DkSwWaKu.js";const J={title:"Templates/Dashboard",component:h,parameters:{layout:"fullscreen",docs:{description:{component:"Template de dashboard com sidebar, header e área de conteúdo. Ideal para aplicações administrativas."}}},tags:["autodocs"]},x=()=>s.jsxs("div",{className:"flex flex-col h-full p-4",children:[s.jsx("div",{className:"mb-8",children:s.jsx("h2",{className:"text-2xl font-bold",children:"Logo"})}),s.jsxs("nav",{className:"flex-1 space-y-2",children:[s.jsxs(o,{variant:"ghost",className:"w-full justify-start gap-2",children:[s.jsx(N,{className:"h-4 w-4"}),"Dashboard"]}),s.jsxs(o,{variant:"ghost",className:"w-full justify-start gap-2",children:[s.jsx(C,{className:"h-4 w-4"}),"Usuários"]}),s.jsxs(o,{variant:"ghost",className:"w-full justify-start gap-2",children:[s.jsx(E,{className:"h-4 w-4"}),"Configurações"]})]})]}),p=()=>s.jsxs("div",{className:"flex items-center justify-between h-16 px-6",children:[s.jsx("div",{className:"flex items-center gap-4 flex-1",children:s.jsxs("div",{className:"relative w-96",children:[s.jsx(v,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),s.jsx(b,{placeholder:"Buscar...",className:"pl-10"})]})}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(o,{variant:"ghost",size:"icon",children:s.jsx(j,{className:"h-5 w-5"})}),s.jsxs(u,{children:[s.jsx(f,{src:"https://github.com/shadcn.png"}),s.jsx(g,{children:"CN"})]})]})]}),n=()=>s.jsxs("div",{className:"space-y-6",children:[s.jsxs("div",{children:[s.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Dashboard"}),s.jsx("p",{className:"text-muted-foreground",children:"Bem-vindo ao painel de controle"})]}),s.jsxs("div",{className:"grid gap-4 md:grid-cols-2 lg:grid-cols-3",children:[s.jsxs(l,{children:[s.jsxs(i,{children:[s.jsx(c,{children:"Total de Usuários"}),s.jsx(d,{children:"+20.1% em relação ao mês passado"})]}),s.jsx(m,{children:s.jsx("div",{className:"text-2xl font-bold",children:"2,543"})})]}),s.jsxs(l,{children:[s.jsxs(i,{children:[s.jsx(c,{children:"Vendas"}),s.jsx(d,{children:"+15.2% em relação ao mês passado"})]}),s.jsx(m,{children:s.jsx("div",{className:"text-2xl font-bold",children:"R$ 45,231"})})]}),s.jsxs(l,{children:[s.jsxs(i,{children:[s.jsx(c,{children:"Conversão"}),s.jsx(d,{children:"+5.3% em relação ao mês passado"})]}),s.jsx(m,{children:s.jsx("div",{className:"text-2xl font-bold",children:"12.5%"})})]})]})]}),e={args:{sidebar:s.jsx(x,{}),header:s.jsx(p,{}),content:s.jsx(n,{})}},a={args:{header:s.jsx(p,{}),content:s.jsx(n,{})}},r={args:{sidebar:s.jsx(x,{}),content:s.jsx(n,{})}},t={args:{content:s.jsx("div",{className:"max-w-4xl mx-auto",children:s.jsx(n,{})})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <SidebarExample />,
    header: <HeaderExample />,
    content: <ContentExample />
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    header: <HeaderExample />,
    content: <ContentExample />
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sidebar: <SidebarExample />,
    content: <ContentExample />
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div className="max-w-4xl mx-auto">
                <ContentExample />
            </div>
  }
}`,...t.parameters?.docs?.source}}};const K=["Default","WithoutSidebar","WithoutHeader","MinimalLayout"];export{e as Default,t as MinimalLayout,r as WithoutHeader,a as WithoutSidebar,K as __namedExportsOrder,J as default};
