(()=>{"use strict";var e={42:(e,t,r)=>{r.d(t,{A:()=>l});var n=r(168),o=r.n(n),a=r(433),i=r.n(a)()(o());i.push([e.id,".jfb-ai-modal .badge{background:var(--wp-components-color-accent,var(--wp-admin-theme-color,#3858e9));color:var(--wp-components-color-accent-inverted,#fff);font-size:0.65em;padding:0.2em 0.5em;border-radius:1em}.jfb-ai-modal .components-notice{margin:0 0 2em 0}",""]);const l=i},433:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);n&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},168:e=>{e.exports=function(e){return e[1]}},673:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],l=0;l<e.length;l++){var c=e[l],s=n.base?c[0]+n.base:c[0],u=a[s]||0,m="".concat(s," ").concat(u);a[s]=u+1;var d=r(m),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var f=o(p,n);n.byIndex=l,t.splice(l,0,{identifier:m,updater:f,references:1})}i.push(m)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var l=r(a[i]);t[l].references--}for(var c=n(e,o),s=0;s<a.length;s++){var u=r(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},262:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},357:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},657:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},598:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},626:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{const e=window.React;var t=r(673),n=r.n(t),o=r(598),a=r.n(o),i=r(262),l=r.n(i),c=r(657),s=r.n(c),u=r(357),m=r.n(u),d=r(626),p=r.n(d),f=r(42),h={};h.styleTagTransform=p(),h.setAttributes=s(),h.insert=l().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=m(),n()(f.A,h),f.A&&f.A.locals&&f.A.locals;const v=window.wp.components,b=window.wp.element,g=window.wp.i18n,y=window.wp.apiFetch;var w=r.n(y);const{parseHTMLtoBlocks:_,getFormInnerFields:E}=JetFormBuilderParser,j=["Registration form with minimum inputs","Opt-in form with gender selector like radio","Quiz form with 5 questions with choices about math"],x=function({setShowModal:t,footer:r=(()=>"Here may be buttons")}){const[n,o]=(0,b.useState)(""),[a,i]=(0,b.useState)(""),[l,c]=(0,b.useState)(!1),[s,u]=(0,b.useState)(""),[m,d]=(0,b.useState)(0),[p,f]=(0,b.useState)(0);return(0,e.createElement)(v.Modal,{style:{width:"60vw"},onRequestClose:()=>t(!1),title:(0,e.createElement)(v.Flex,null,(0,g.__)("Generate Form with AI","jet-form-builder"),(0,e.createElement)("span",{className:"badge"},(0,g.__)("Beta. Limited 10 requests per month","jet-form-builder"))),className:"jfb-ai-modal"},s&&(0,e.createElement)(v.Notice,{status:"error",onRemove:()=>u("")},(0,e.createElement)(v.Flex,{direction:"column"},s,(0,e.createElement)(v.ExternalLink,{href:"https://support.crocoblock.com/support/home/"},(0,g.__)("Contact Crocoblock support","jet-form-builder")))),Boolean(a.length)?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{dangerouslySetInnerHTML:{__html:a},style:{padding:"2em 1em",backgroundColor:"#f6f7f7",marginBottom:"1em"}}),(0,e.createElement)(r,{clearHTML:()=>i(""),formHTML:a,prompt:n},(0,e.createElement)("span",{style:{flex:"1",textAlign:"end",color:"rgb( 117, 117, 117 )"}},(0,g.sprintf)((0,g.__)("Requests used: %d/%d","jet-form-builder"),m,p)))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)(v.TextareaControl,{label:(0,g.__)("Describe the form you want","jet-form-builder"),value:n,onChange:o,help:(0,g.__)("Prompt example: Simple contact form","jet-form-builder")}),Boolean(n.length)&&(0,e.createElement)(v.Button,{variant:"primary",isBusy:l,disabled:l,onClick:()=>{c(!0),w()({path:"/jet-form-builder/v1/ai/generate",method:"POST",data:{prompt:n}}).then((e=>{u(""),i(E(e.form)),console.group((0,g.__)("JFB: Parsed blocks from generated HTML","jet-form-builder")),console.log(_(e.form)),console.groupEnd(),d(e.usage),f(e.limit)})).catch((e=>{var t;u(null!==(t=e?.message)&&void 0!==t?t:(0,g.__)("Undefined error.","jet-form-builder"))})).finally((()=>{c(!1)}))}},(0,g.__)("Generate","jet-form-builder")),(0,e.createElement)("h4",null,(0,g.__)("Tips to write good prompt:","jet-form-builder")),(0,e.createElement)("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},(0,e.createElement)("li",null,(0,g.__)("Start with the main purpose of the form.","jet-form-builder")),(0,e.createElement)("li",null,(0,g.__)("If you need specific fields – describe them in the prompt as well.","jet-form-builder")),(0,e.createElement)("li",null,(0,g.__)("It is better to use the English language for the prompt, as AI understands it better than others.","jet-form-builder"))),(0,e.createElement)("h4",null,(0,g.__)("Examples of the good prompts:","jet-form-builder")),(0,e.createElement)("ul",{style:{listStyle:"disc",paddingInlineStart:"1em"}},j.map((t=>(0,e.createElement)("li",{key:t},(0,e.createElement)(v.Button,{onClick:()=>o(t),variant:"link"},t)))))))};function S({name:e,attributes:t}){return`\x3c!-- wp:${e} ${JSON.stringify(t)} /--\x3e`}const C=function(e){return e.map(S).join("\n\n")},{parseHTMLtoBlocks:T}=JetFormBuilderParser,M=function({clearHTML:t,formHTML:r,prompt:n,children:o=null}){return(0,e.createElement)(v.Flex,{justify:"flex-start"},(0,e.createElement)(v.Button,{variant:"primary",onClick:()=>{const e=T(r);e.length?w()({method:"POST",path:"/wp/v2/jet-form-builder",data:{title:n,content:C(e),status:"publish"}}).then((e=>{window.location.href=(e=>{const t=new URL(JetFormBuilderAdmin.edit_url);return t.searchParams.set("post",e),t.href})(e.id)})).catch(console.error):console.error((0,g.__)("JFB: Invalid html","jet-form-builder"),r)}},(0,g.__)("Create form with this template","jet-form-builder")),(0,e.createElement)(v.Button,{variant:"secondary",onClick:t},(0,g.__)("Change generation prompt","jet-form-builder")),o)},k=function(){const[t,r]=(0,b.useState)(!1);return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("a",{href:"#",className:"page-title-action",onClick:e=>{e.preventDefault(),r((e=>!e))}},(0,g.__)("Generate with AI","jet-form-builder")),t&&(0,e.createElement)(x,{setShowModal:r,footer:M}))},F=window.wp.domReady;r.n(F)()((()=>{const t=document.createElement("div");t.style.display="inline-flex",document.querySelector('.page-title-action[href*="post-new.php"]').after(t),(0,b.createRoot)(t).render((0,e.createElement)(k,null))}))})()})();