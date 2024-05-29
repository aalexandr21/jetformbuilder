(()=>{"use strict";var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=window.React,r=window.wp.components,n=window.wp.element,o=window.wp.i18n,l=window.wp.apiFetch;var a=e.n(l);const{parseHTMLtoBlocks:i,getFormInnerFields:m}=JetFormBuilderParser,s=["Registration form with minimum inputs","Opt-in form with gender selector like radio","Quiz form with 5 questions with choices about math"],c=function({setShowModal:e,footer:l=(()=>"Here may be buttons")}){const[c,d]=(0,n.useState)(""),[u,p]=(0,n.useState)(""),[L,f]=(0,n.useState)(!1),[h,b]=(0,n.useState)(""),[w,E]=(0,n.useState)(0),[g,_]=(0,n.useState)(0);return(0,t.createElement)(r.Modal,{style:{width:"60vw"},onRequestClose:()=>e(!1),title:(0,t.createElement)(r.Flex,null,(0,o.__)("Generate Form with AI","jet-form-builder"),(0,t.createElement)("span",{className:"badge"},(0,o.__)("Beta. Limited 10 requests per month","jet-form-builder"))),className:"jfb-ai-modal"},h&&(0,t.createElement)(r.Notice,{status:"error",onRemove:()=>b("")},(0,t.createElement)(r.Flex,{direction:"column"},h,(0,t.createElement)(r.ExternalLink,{href:"https://support.crocoblock.com/support/home/"},(0,o.__)("Contact Crocoblock support","jet-form-builder")))),Boolean(u.length)?(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{dangerouslySetInnerHTML:{__html:u},style:{padding:"2em 1em",backgroundColor:"#f6f7f7",marginBottom:"1em"}}),(0,t.createElement)(l,{clearHTML:()=>p(""),formHTML:u,prompt:c},(0,t.createElement)("span",{style:{flex:"1",textAlign:"end",color:"rgb( 117, 117, 117 )"}},(0,o.sprintf)((0,o.__)("Requests used: %d/%d","jet-form-builder"),w,g)))):(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.TextareaControl,{label:(0,o.__)("Describe the form you want","jet-form-builder"),value:c,onChange:d,help:(0,o.__)("Prompt example: Simple contact form","jet-form-builder")}),Boolean(c.length)&&(0,t.createElement)(r.Button,{variant:"primary",isBusy:L,disabled:L,onClick:()=>{f(!0),a()({path:"/jet-form-builder/v1/ai/generate",method:"POST",data:{prompt:c}}).then((e=>{b(""),p(m(e.form)),console.group((0,o.__)("JFB: Parsed blocks from generated HTML","jet-form-builder")),console.log(i(e.form)),console.groupEnd(),E(e.usage),_(e.limit)})).catch((e=>{var t;b(null!==(t=e?.message)&&void 0!==t?t:(0,o.__)("Undefined error.","jet-form-builder"))})).finally((()=>{f(!1)}))}},(0,o.__)("Generate","jet-form-builder")),(0,t.createElement)("h4",null,(0,o.__)("Tips to write good prompt:","jet-form-builder")),(0,t.createElement)("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},(0,t.createElement)("li",null,(0,o.__)("Start with the main purpose of the form.","jet-form-builder")),(0,t.createElement)("li",null,(0,o.__)("If you need specific fields – describe them in the prompt as well.","jet-form-builder")),(0,t.createElement)("li",null,(0,o.__)("It is better to use the English language for the prompt, as AI understands it better than others.","jet-form-builder"))),(0,t.createElement)("h4",null,(0,o.__)("Examples of the good prompts:","jet-form-builder")),(0,t.createElement)("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},s.map((e=>(0,t.createElement)("li",{key:e},(0,t.createElement)(r.Button,{onClick:()=>d(e),variant:"link"},e)))))))},{parseHTMLtoBlocks:d}=JetFormBuilderParser,{useTriggerPopover:u,usePattern:p}=JetFBHooks,L=function({clearHTML:e,formHTML:n,children:l=null}){const{showPopover:a,setShowPopover:i,ref:m,popoverProps:s}=u(),{insert:c,append:L,blocks:f}=p({name:"ai"});return(0,t.createElement)(r.Flex,{justify:"flex-start"},(0,t.createElement)(r.Button,{ref:m,variant:"primary",onClick:()=>f.length?i((e=>!e)):c({blocks:d(n)})},(0,o.__)("Use this form","jet-form-builder")),(0,t.createElement)(r.Button,{variant:"secondary",onClick:e},(0,o.__)("Change generation prompt","jet-form-builder")),a&&(0,t.createElement)(r.Popover,{position:"top-start",noArrow:!1,...s},(0,t.createElement)("div",{style:{padding:"0.5em",width:"max-content"}},(0,t.createElement)("span",null,(0,o.__)("I want to","jet-form-builder"))," ",(0,t.createElement)(r.Button,{isLink:!0,isDestructive:!0,onClick:()=>c({blocks:d(n)})},(0,o.__)("replace","jet-form-builder"))," / ",(0,t.createElement)(r.Button,{isLink:!0,onClick:()=>L({blocks:d(n)})},(0,o.__)("append","jet-form-builder"))," ",(0,t.createElement)("span",null,(0,o.__)("form settings and blocks","jet-form-builder")))),l)},{PatternInserterButton:f}=JetFBComponents,h=window.wp.data,b=window.wp.domReady;var w=e.n(b);const E=document.createElement("div");E.classList.add("jfb-generate-form-ai-wrapper"),(0,n.createRoot)(E).render((0,t.createElement)((function(){const[e,l]=(0,n.useState)(!1);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.Button,{variant:"tertiary",iconSize:"16",icon:(0,t.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 22 22",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M7.5 3.6L10 5L8.6 2.5L10 0L7.5 1.4L5 0L6.4 2.5L5 5L7.5 3.6ZM19.5 13.4L17 12L18.4 14.5L17 17L19.5 15.6L22 17L20.6 14.5L22 12L19.5 13.4ZM22 0L19.5 1.4L17 0L18.4 2.5L17 5L19.5 3.6L22 5L20.6 2.5L22 0ZM14.37 5.29C13.98 4.9 13.35 4.9 12.96 5.29L1.29 16.96C0.899998 17.35 0.899998 17.98 1.29 18.37L3.63 20.71C4.02 21.1 4.65 21.1 5.04 20.71L16.7 9.05C17.09 8.66 17.09 8.03 16.7 7.64L14.37 5.29ZM13.34 10.78L11.22 8.66L13.66 6.22L15.78 8.34L13.34 10.78Z",fill:"currentColor"})),onClick:()=>l((e=>!e))},(0,o.__)("Generate Form with AI","jet-form-builder")),e&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c,{setShowModal:l,footer:L})))}),null)),w()((()=>{const e={isAddedTimeout:!1};setTimeout((()=>{const t=(0,h.subscribe)((()=>function(e,t){const r=document.querySelector(".edit-post-header-toolbar");r&&(r.appendChild(E),t.isAddedTimeout||(t.isAddedTimeout=!0,setTimeout(e,500)))}(t,e)))}))})),(0,h.dispatch)("jet-forms/patterns").register({name:"ai",title:"Generate via AI",view:function({pattern:e}){const[l,a]=(0,n.useState)(!1);return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.FlexItem,{style:{height:"calc( 32px + 3em )",margin:"0.6em",alignSelf:"center"}},(0,o.__)("or","jet-form-builder")),(0,t.createElement)("li",null,(0,t.createElement)(f,{patternName:"ai",variant:"secondary",withPatternIcon:!0,iconSize:32,className:"block-editor-block-variation-picker__variation",onClick:()=>a(!0)}),(0,t.createElement)("span",{className:"block-editor-block-variation-picker__variation-label"},e.title)),l&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(c,{setShowModal:a,footer:L})))},icon:(0,t.createElement)("svg",{width:"48",height:"48",viewBox:"0 0 48 48",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("path",{d:"M40 16L36 13.76L32 16L34.24 12L32 8L36 10.24L40 8L37.76 12L40 16Z"}),(0,t.createElement)("path",{d:"M21 18L17 15.76L13 18L15.24 14L13 10L17 12.24L21 10L18.76 14L21 18Z"}),(0,t.createElement)("path",{d:"M34.32 30L36 27L33 28.68L30 27L31.68 30L30 33L33 31.32L36 33L34.32 30Z"}),(0,t.createElement)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.59073 33.7046C7.80309 34.4923 7.80309 35.7693 8.59073 36.5569L11.4431 39.4093C12.2307 40.1969 13.5077 40.1969 14.2954 39.4093L31.4093 22.2954C32.1969 21.5077 32.1969 20.2307 31.4093 19.4431L28.5569 16.5907C27.7693 15.8031 26.4923 15.8031 25.7046 16.5907L8.59073 33.7046ZM22.8548 22.269L10.0049 35.1188L10.002 35.1221L10.0013 35.123C10.0011 35.1236 10 35.1266 10 35.1308C10 35.1332 10.0003 35.135 10.0005 35.1363L10.0011 35.1382C10.0012 35.1383 10.0023 35.1401 10.0049 35.1427L12.8573 37.9951C12.8581 37.9959 12.8588 37.9966 12.8594 37.9971C12.8599 37.9975 12.8603 37.9978 12.8606 37.9981L12.8614 37.9987C12.862 37.9989 12.865 38 12.8692 38C12.8716 38 12.8735 37.9997 12.8748 37.9994C12.8757 37.9992 12.8763 37.999 12.8766 37.9989C12.8767 37.9988 12.8785 37.9977 12.8812 37.9951L25.731 25.1452L22.8548 22.269ZM24.269 20.8548L27.1452 23.731L29.9951 20.8812L29.9978 20.8781L29.9987 20.877L29.9995 20.8743C29.9998 20.8731 30 20.8713 30 20.8692C30 20.8674 29.9998 20.8659 29.9996 20.8647C29.9994 20.8631 29.999 20.8622 29.9989 20.8618C29.9988 20.8617 29.9977 20.8599 29.9951 20.8573L27.1427 18.0049C27.1401 18.0023 27.1387 18.0014 27.1386 18.0013C27.1384 18.0012 27.1375 18.0009 27.1369 18.0007C27.1356 18.0004 27.1336 18 27.1308 18C27.1266 18 27.124 18.0009 27.1234 18.0011C27.1233 18.0012 27.1215 18.0023 27.1188 18.0049L24.269 20.8548Z"}))})})();