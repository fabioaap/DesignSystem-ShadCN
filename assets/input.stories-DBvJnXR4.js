import{j as m}from"./jsx-runtime-D504mV7P.js";import{I as n}from"./input-Dg0CqUVg.js";import{L as l}from"./label-m1Edf8ai.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./utils-CDN07tui.js";import"./index-C7IQjYoj.js";import"./index-BZ7zkwJU.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";const y={title:"Atoms/Input",component:n,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{placeholder:"Enter text..."}},r={render:()=>m.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[m.jsx(l,{htmlFor:"email",children:"Email"}),m.jsx(n,{type:"email",id:"email",placeholder:"Email"})]})},a={args:{placeholder:"Disabled input",disabled:!0}},s={args:{value:"Sample text",readOnly:!0}},t={args:{type:"password",placeholder:"Enter password"}},o={args:{type:"number",placeholder:"Enter number"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Disabled input',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Sample text',
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'number',
    placeholder: 'Enter number'
  }
}`,...o.parameters?.docs?.source}}};const f=["Default","WithLabel","Disabled","WithValue","Password","Number"];export{e as Default,a as Disabled,o as Number,t as Password,r as WithLabel,s as WithValue,f as __namedExportsOrder,y as default};
