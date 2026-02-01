import{j as e}from"./jsx-runtime-D504mV7P.js";import{F as d,I as p}from"./FormTemplate-BwPQC5MA.js";import{B as a}from"./button-BBoxL1xH.js";import{I as l}from"./input-Dg0CqUVg.js";import{L as s}from"./label-m1Edf8ai.js";import{T as m}from"./textarea-mLNJLieK.js";import{S as h,a as u,b as x,c as j,d as c}from"./select-CLH57jvW.js";import{S as f}from"./switch-ATeiYld7.js";import{A as v,a as g,b as N}from"./alert-DU8cPWgS.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./createLucideIcon-8xmj4FwI.js";import"./utils-CDN07tui.js";import"./card-BN2eZ0Yy.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./index-C7IQjYoj.js";import"./index-BZ7zkwJU.js";import"./index-BdQq_4o_.js";import"./index-BiErVdCm.js";import"./index-C9lDhzoQ.js";import"./index-hQSASD9G.js";import"./index-9H9P9Kel.js";import"./index-CioxGjvK.js";import"./index-B26hlpGq.js";import"./index-WaT0DkFa.js";import"./index-Baaj9jgv.js";import"./index-BnIzK0Qe.js";import"./index-BzuEsdI1.js";import"./index-CvjVisU5.js";import"./index-DR67NSka.js";import"./index-FjpTna57.js";import"./index-BVY6hRgR.js";import"./index-Dy0O2O2J.js";import"./chevron-down-uKEq_1D9.js";import"./check-DSosjyHM.js";const te={title:"Templates/Form",component:d,parameters:{layout:"fullscreen",docs:{description:{component:"Template de formulário com título, campos, ações e painel lateral opcional para ajuda/informações."}}},tags:["autodocs"]},n=()=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid gap-4 md:grid-cols-2",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"firstName",children:"Nome"}),e.jsx(l,{id:"firstName",placeholder:"João"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"lastName",children:"Sobrenome"}),e.jsx(l,{id:"lastName",placeholder:"Silva"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"email",children:"Email"}),e.jsx(l,{id:"email",type:"email",placeholder:"joao@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"bio",children:"Bio"}),e.jsx(m,{id:"bio",placeholder:"Conte-nos sobre você...",className:"resize-none",rows:4})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"country",children:"País"}),e.jsxs(h,{children:[e.jsx(u,{id:"country",children:e.jsx(x,{placeholder:"Selecione um país"})}),e.jsxs(j,{children:[e.jsx(c,{value:"br",children:"Brasil"}),e.jsx(c,{value:"us",children:"Estados Unidos"}),e.jsx(c,{value:"pt",children:"Portugal"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(s,{htmlFor:"notifications",children:"Notificações por email"}),e.jsx("div",{className:"text-sm text-muted-foreground",children:"Receber atualizações por email"})]}),e.jsx(f,{id:"notifications"})]})]}),S=()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Dicas de perfil"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Preencha suas informações para personalizar sua experiência."})]}),e.jsxs(v,{children:[e.jsx(p,{className:"h-4 w-4"}),e.jsx(g,{children:"Privacidade"}),e.jsx(N,{className:"text-sm",children:"Suas informações estão seguras e nunca serão compartilhadas sem seu consentimento."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-medium",children:"Links úteis"}),e.jsxs("ul",{className:"space-y-1 text-sm text-muted-foreground",children:[e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-primary",children:"Política de Privacidade"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-primary",children:"Termos de Uso"})}),e.jsx("li",{children:e.jsx("a",{href:"#",className:"hover:text-primary",children:"Suporte"})})]})]})]}),r={args:{title:"Perfil",description:"Gerencie suas informações pessoais",children:e.jsx(n,{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",children:"Cancelar"}),e.jsx(a,{children:"Salvar alterações"})]}),aside:e.jsx(S,{})}},i={args:{title:"Configurações",description:"Configure suas preferências",children:e.jsx(n,{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",children:"Cancelar"}),e.jsx(a,{children:"Salvar"})]}),variant:"plain"}},t={args:{title:"Editar Perfil",description:"Atualize suas informações",children:e.jsx(n,{}),actions:e.jsxs(e.Fragment,{children:[e.jsx(a,{variant:"outline",children:"Cancelar"}),e.jsx(a,{children:"Salvar"})]})}},o={args:{title:"Formulário Simples",children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"simple-input",children:"Campo de texto"}),e.jsx(l,{id:"simple-input",placeholder:"Digite algo..."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{htmlFor:"simple-textarea",children:"Mensagem"}),e.jsx(m,{id:"simple-textarea",placeholder:"Sua mensagem...",rows:3})]})]}),actions:e.jsx(a,{children:"Enviar"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Perfil',
    description: 'Gerencie suas informações pessoais',
    children: <ProfileFields />,
    actions: <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar alterações</Button>
            </>,
    aside: <HelpAside />
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Configurações',
    description: 'Configure suas preferências',
    children: <ProfileFields />,
    actions: <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
            </>,
    variant: 'plain'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Editar Perfil',
    description: 'Atualize suas informações',
    children: <ProfileFields />,
    actions: <>
                <Button variant="outline">Cancelar</Button>
                <Button>Salvar</Button>
            </>
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Formulário Simples',
    children: <>
                <div className="space-y-2">
                    <Label htmlFor="simple-input">Campo de texto</Label>
                    <Input id="simple-input" placeholder="Digite algo..." />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="simple-textarea">Mensagem</Label>
                    <Textarea id="simple-textarea" placeholder="Sua mensagem..." rows={3} />
                </div>
            </>,
    actions: <Button>Enviar</Button>
  }
}`,...o.parameters?.docs?.source}}};const oe=["Default","WithoutCard","WithoutAside","SimpleForm"];export{r as Default,o as SimpleForm,t as WithoutAside,i as WithoutCard,oe as __namedExportsOrder,te as default};
