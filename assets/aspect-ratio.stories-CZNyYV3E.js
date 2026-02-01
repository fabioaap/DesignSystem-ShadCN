import{j as e}from"./jsx-runtime-D504mV7P.js";import{r as p}from"./iframe-B_O_Lmrz.js";import{P as n}from"./index-C7IQjYoj.js";import"./preload-helper-BvMMX7ns.js";import"./index-BZ7zkwJU.js";import"./index-CU_znxRc.js";import"./index-Yqugrw3y.js";var u="AspectRatio",c=p.forwardRef((o,d)=>{const{ratio:i=1/1,style:m,...l}=o;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/i}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(n.div,{...l,ref:d,style:{...m,position:"absolute",top:0,right:0,bottom:0,left:0}})})});c.displayName=u;var h=c;const a=h;try{a.displayName="AspectRatio",a.__docgenInfo={description:"",displayName:"AspectRatio",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const j={title:"Atoms/AspectRatio",component:a,parameters:{layout:"centered"},tags:["autodocs"]},s={render:()=>e.jsx("div",{className:"w-[450px]",children:e.jsx(a,{ratio:16/9,className:"bg-muted",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-md object-cover"})})})},t={render:()=>e.jsx("div",{className:"w-[300px]",children:e.jsx(a,{ratio:1,className:"bg-muted",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-md object-cover"})})})},r={render:()=>e.jsx("div",{className:"w-[200px]",children:e.jsx(a,{ratio:3/4,className:"bg-muted",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",alt:"Photo by Drew Beamer",className:"h-full w-full rounded-md object-cover"})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[450px]">
            <AspectRatio ratio={16 / 9} className="bg-muted">
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-md object-cover" />
            </AspectRatio>
        </div>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[300px]">
            <AspectRatio ratio={1} className="bg-muted">
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-md object-cover" />
            </AspectRatio>
        </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-[200px]">
            <AspectRatio ratio={3 / 4} className="bg-muted">
                <img src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" alt="Photo by Drew Beamer" className="h-full w-full rounded-md object-cover" />
            </AspectRatio>
        </div>
}`,...r.parameters?.docs?.source}}};const y=["Default","Square","Portrait"];export{s as Default,r as Portrait,t as Square,y as __namedExportsOrder,j as default};
