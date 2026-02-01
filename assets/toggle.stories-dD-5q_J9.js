import{j as e}from"./jsx-runtime-D504mV7P.js";import{T as a,B as t,I as n,U as i}from"./toggle-YFqBxbUf.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./createLucideIcon-8xmj4FwI.js";import"./index-BiErVdCm.js";import"./index-BZ7zkwJU.js";import"./index-Yqugrw3y.js";import"./index-FjpTna57.js";import"./index-BnIzK0Qe.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";const f={title:"Atoms/Toggle",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outline"]},size:{control:"select",options:["default","sm","lg"]}}},l={render:()=>e.jsx(a,{"aria-label":"Toggle bold",children:e.jsx(t,{className:"h-4 w-4"})})},r={render:()=>e.jsx(a,{variant:"outline","aria-label":"Toggle italic",children:e.jsx(n,{className:"h-4 w-4"})})},s={render:()=>e.jsxs(a,{"aria-label":"Toggle underline",children:[e.jsx(i,{className:"h-4 w-4"}),"Underline"]})},o={render:()=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(a,{size:"sm","aria-label":"Toggle small",children:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{size:"default","aria-label":"Toggle default",children:e.jsx(t,{className:"h-4 w-4"})}),e.jsx(a,{size:"lg","aria-label":"Toggle large",children:e.jsx(t,{className:"h-4 w-4"})})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
        </Toggle>
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle variant="outline" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
        </Toggle>
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
            Underline
        </Toggle>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-2">
            <Toggle size="sm" aria-label="Toggle small">
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle size="default" aria-label="Toggle default">
                <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle size="lg" aria-label="Toggle large">
                <Bold className="h-4 w-4" />
            </Toggle>
        </div>
}`,...o.parameters?.docs?.source}}};const w=["Default","Outline","WithText","Sizes"];export{l as Default,r as Outline,o as Sizes,s as WithText,w as __namedExportsOrder,f as default};
