import{j as o}from"./jsx-runtime-D504mV7P.js";import{B as i}from"./button-BBoxL1xH.js";import{T as t,a as p,b as n,c as r}from"./tooltip-D7TuS7c4.js";import"./iframe-B_O_Lmrz.js";import"./preload-helper-BvMMX7ns.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./index-BiErVdCm.js";import"./index-BZ7zkwJU.js";import"./index-hQSASD9G.js";import"./index-CioxGjvK.js";import"./index-B26hlpGq.js";import"./index-Baaj9jgv.js";import"./index-BnIzK0Qe.js";import"./index-BzuEsdI1.js";import"./index-CvjVisU5.js";import"./index-DR67NSka.js";import"./index-BHkut8Yo.js";import"./index-FjpTna57.js";import"./index-Dy0O2O2J.js";const H={title:"Molecules/Tooltip",component:t,parameters:{layout:"centered"},tags:["autodocs"]},e={render:()=>o.jsx(p,{children:o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Hover me"})}),o.jsx(r,{children:o.jsx("p",{children:"Add to library"})})]})})},l={render:()=>o.jsx(p,{children:o.jsxs("div",{className:"flex gap-4",children:[o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Top"})}),o.jsx(r,{side:"top",children:o.jsx("p",{children:"Tooltip on top"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Bottom"})}),o.jsx(r,{side:"bottom",children:o.jsx("p",{children:"Tooltip on bottom"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Left"})}),o.jsx(r,{side:"left",children:o.jsx("p",{children:"Tooltip on left"})})]}),o.jsxs(t,{children:[o.jsx(n,{asChild:!0,children:o.jsx(i,{variant:"outline",children:"Right"})}),o.jsx(r,{side:"right",children:o.jsx("p",{children:"Tooltip on right"})})]})]})})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="outline">Hover me</Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Add to library</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <TooltipProvider>
            <div className="flex gap-4">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Top</Button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                        <p>Tooltip on top</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Bottom</Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                        <p>Tooltip on bottom</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Left</Button>
                    </TooltipTrigger>
                    <TooltipContent side="left">
                        <p>Tooltip on left</p>
                    </TooltipContent>
                </Tooltip>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button variant="outline">Right</Button>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Tooltip on right</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
}`,...l.parameters?.docs?.source}}};const L=["Default","Positions"];export{e as Default,l as Positions,L as __namedExportsOrder,H as default};
