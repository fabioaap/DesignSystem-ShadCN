import{j as e}from"./jsx-runtime-D504mV7P.js";import{A as j}from"./AuthTemplate-BGVVO27g.js";import{B as l}from"./button-BBoxL1xH.js";import{I as s}from"./input-Dg0CqUVg.js";import{L as a}from"./label-m1Edf8ai.js";import{C as c,a as d,b as m,c as p,d as x,e as h}from"./card-BN2eZ0Yy.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./utils-CDN07tui.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./index-C7IQjYoj.js";import"./index-BZ7zkwJU.js";const B={title:"Templates/Auth",component:j,parameters:{layout:"fullscreen",docs:{description:{component:"Template de autenticação com formulário e painel lateral ilustrativo. Responsivo com layout adaptativo."}}},tags:["autodocs"]},i=()=>e.jsxs(c,{children:[e.jsxs(d,{className:"space-y-1",children:[e.jsx(m,{className:"text-2xl font-bold",children:"Entrar"}),e.jsx(p,{children:"Digite seu email e senha para acessar sua conta"})]}),e.jsxs(x,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"email",children:"Email"}),e.jsx(s,{id:"email",type:"email",placeholder:"seu@email.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"password",children:"Senha"}),e.jsx(s,{id:"password",type:"password",placeholder:"••••••••"})]}),e.jsx(l,{className:"w-full",children:"Entrar"})]}),e.jsx(h,{className:"flex flex-col space-y-4",children:e.jsxs("div",{className:"text-sm text-muted-foreground text-center",children:["Não tem uma conta?"," ",e.jsx("a",{href:"#",className:"text-primary hover:underline",children:"Cadastre-se"})]})})]}),g=()=>e.jsxs(c,{children:[e.jsxs(d,{className:"space-y-1",children:[e.jsx(m,{className:"text-2xl font-bold",children:"Criar conta"}),e.jsx(p,{children:"Preencha seus dados para criar uma nova conta"})]}),e.jsxs(x,{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"name",children:"Nome completo"}),e.jsx(s,{id:"name",type:"text",placeholder:"João Silva"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-email",children:"Email"}),e.jsx(s,{id:"signup-email",type:"email",placeholder:"seu@email.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"signup-password",children:"Senha"}),e.jsx(s,{id:"signup-password",type:"password",placeholder:"••••••••"})]}),e.jsx(l,{className:"w-full",children:"Criar conta"})]}),e.jsx(h,{className:"flex flex-col space-y-4",children:e.jsxs("div",{className:"text-sm text-muted-foreground text-center",children:["Já tem uma conta?"," ",e.jsx("a",{href:"#",className:"text-primary hover:underline",children:"Entrar"})]})})]}),u=()=>e.jsx("div",{className:"relative w-full h-full flex items-center justify-center p-12",children:e.jsxs("div",{className:"space-y-6 text-center",children:[e.jsx("h2",{className:"text-4xl font-bold tracking-tight",children:"Bem-vindo ao nosso Design System"}),e.jsx("p",{className:"text-lg text-muted-foreground",children:"Componentes modernos e acessíveis para construir interfaces incríveis"}),e.jsxs("div",{className:"flex justify-center gap-2",children:[e.jsx("div",{className:"h-2 w-2 rounded-full bg-primary animate-pulse"}),e.jsx("div",{className:"h-2 w-2 rounded-full bg-primary animate-pulse delay-150"}),e.jsx("div",{className:"h-2 w-2 rounded-full bg-primary animate-pulse delay-300"})]})]})}),r={args:{children:e.jsx(i,{}),aside:e.jsx(u,{})}},t={args:{children:e.jsx(g,{}),aside:e.jsx(u,{})}},n={args:{children:e.jsx(i,{}),showAside:!1}},o={args:{children:e.jsxs("div",{className:"text-center space-y-6",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-bold",children:"Logo"}),e.jsx("p",{className:"text-muted-foreground mt-2",children:"Acesse sua conta"})]}),e.jsx(i,{})]}),showAside:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <LoginForm />,
    aside: <AsideContent />
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: <SignUpForm />,
    aside: <AsideContent />
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <LoginForm />,
    showAside: false
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="text-center space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Logo</h1>
                    <p className="text-muted-foreground mt-2">
                        Acesse sua conta
                    </p>
                </div>
                <LoginForm />
            </div>,
    showAside: false
  }
}`,...o.parameters?.docs?.source}}};const D=["Login","SignUp","WithoutAside","CenteredOnly"];export{o as CenteredOnly,r as Login,t as SignUp,n as WithoutAside,D as __namedExportsOrder,B as default};
