"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[858],{9858:(e,t,n)=>{function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:()=>ot});var l={type:"send_email",id:JetFBActions.Tools.getRandomID(),settings:{},conditions:[],events:[],provideEvents:[]},a=[o(o({},JSON.parse(JSON.stringify(l))),{},{settings:{send_email:{subject:"New order on website",content:"Hi admin!\n\nThere are new order on your website.\n\nOrder details:\n- Post ID: %post_id%"}}})],c=window.JetFormEditorData.actionConditionSettings;function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=JetFBHooks.useActions,w=wp.data,v=w.useSelect,g=w.useDispatch,O=function(){var e=f(y(),2),t=e[0],n=e[1],r=function(e,r){var o=t.map((function(t){return e!==t.id?t:s(s({},JSON.parse(JSON.stringify(t))),r)}));n(m(o))};return{actions:t,setActions:n,moveAction:function(e,r){var o=JSON.parse(JSON.stringify(t[e])),i=JSON.parse(JSON.stringify(t[r]));t.splice(r,1,o),t.splice(e,1,i),n(m(t))},deleteAction:function(e){t.splice(e,1),n(m(t))},updateActionObj:r,toggleExecute:function(e){var t;r(e.id,{is_execute:!(null===(t=e.is_execute)||void 0===t||t)})}}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return v((function(t){return e?t("jet-forms/actions").getCallback(e):t("jet-forms/actions").getCurrentCallback()}),[e])},h=function(){var e=f(v((function(e){return[e("jet-forms/actions").getCurrentAction(),e("jet-forms/actions").getCurrentSettings()]})),2);return{currentAction:e[0],currentSettings:e[1]}},E=function(){var e=h().currentAction,t=O().updateActionObj;return function(n){t(e.id,n)}},C=function(){var e=h().currentAction,t=g("jet-forms/actions",[]),n=t.setCurrentAction,r=t.clearCurrent,o=t.updateCurrentConditions;return{setCurrentAction:n,setTypeSettings:function(t){n(s(s({},e),{},{settings:s(s({},e.settings),{},p({},e.type,t))}))},clearCurrent:r,updateCurrentConditions:o}},P=JetFBComponents.ActionModal,S=wp.data.useSelect;const A=function(){var e=h(),t=e.currentAction,n=e.currentSettings,r=S((function(e){return e("jet-forms/actions").isSettingsModal()})),o=j(),i=E(),l=C(),a=l.setTypeSettings,c=l.clearCurrent;return r?wp.element.createElement(P,{classNames:["width-60"],title:"Edit Action",onRequestClose:c,onCancelClick:c,onUpdateClick:function(){i({settings:t.settings}),c()}},o&&wp.element.createElement(o,{settings:n,actionId:t.id,onChange:function(e){return a(e)}})):null};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=JetFBComponents,N=T.FieldWithPreset,J=T.DynamicPreset,I=T.RepeaterItemContext,R=T.Repeater,B=T.RepeaterAddNew,M=T.SafeDeleteToggle,H=T.RepeaterState,L=T.BaseHelp,U=JetFBHooks.useRequestEvents,q=JetFBActions.getFormFieldsBlocks,z=wp.components,$=z.SelectControl,W=z.TextareaControl,G=z.ToggleControl,V=z.FormTokenField,K=(z.BaseControl,z.TabPanel),Q=wp.i18n.__,X=(wp.compose.compose,wp.data.useSelect),Y=wp.element,Z=Y.useEffect,ee=Y.useState,te=Y.useContext,ne=Y.RawHTML,re=[{value:"and",label:Q("AND (ALL conditions must be met)","jet-form-builder")},{value:"or",label:Q("OR (at least ONE condition must be met)","jet-form-builder")}];function oe(e,t){var n=c[e].find((function(e){return e.value===t}));return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n&&n[e]||t}}function ie(e){var t=e.formFields,n=te(I),r=n.currentItem,o=n.changeCurrentItem,i=Q("To fulfill this condition, the result of the check must be","jet-form-builder")+" ";i+=r.execute?"TRUE":"FALSE";var l=oe("compare_value_formats",r.compare_value_format),a=oe("operators",r.operator);return wp.element.createElement(React.Fragment,null,wp.element.createElement(G,{label:i,checked:r.execute,onChange:function(e){o({execute:e})}}),wp.element.createElement($,{label:"Operator",labelPosition:"side",help:a("help"),value:r.operator,options:c.operators,onChange:function(e){return o({operator:e})}}),wp.element.createElement($,{label:"Field",labelPosition:"side",value:r.field,options:t,onChange:function(e){return o({field:e})}}),wp.element.createElement($,{label:Q("Type transform comparing value","jet-form-builder"),labelPosition:"side",value:r.compare_value_format,options:c.compare_value_formats,onChange:function(e){o({compare_value_format:e})}}),l("help").length>0&&wp.element.createElement("p",{className:"components-base-control__help",style:{marginTop:"0px",color:"rgb(117, 117, 117)"},dangerouslySetInnerHTML:{__html:l("help")}}),wp.element.createElement(N,{baseControlProps:{label:"Value to Compare"},ModalEditor:function(e){var t=e.actionClick,n=e.onRequestClose;return wp.element.createElement(J,{value:r.default,isSaveAction:t,onSavePreset:function(e){o({default:e})},excludeSources:["query_var"],onUnMount:n})},triggerClasses:["trigger__textarea"]},wp.element.createElement(W,{className:"jet-control-clear jet-user-fields-map__list",value:r.default,help:a("need_explode")?c.help_for_exploding_compare:"",onChange:function(e){o({default:e})}})))}function le(e){var t,n=e.events,r=h().currentAction,o=C().setCurrentAction,i=x(ee(!1),2),l=i[0],a=i[1],c=X((function(e){return e("jet-forms/events").getHelpMap()}));return wp.element.createElement(React.Fragment,null,wp.element.createElement(V,{label:Q("Add event","jet-form-builder"),value:null!==(t=r.events)&&void 0!==t?t:[],suggestions:n,onChange:function(e){return o(D(D({},r),{},{events:e}))},tokenizeOnSpace:!0,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:""}),wp.element.createElement(L,null,Q("Separate with commas or the Enter key.")+" ",wp.element.createElement("a",{href:"javascript:void(0)",onClick:function(){return a((function(e){return!e}))}},Q(l?"Hide":"Details","jet-form-builder"))),l&&wp.element.createElement("ul",{className:"jet-fb-ul-revert-layer"},n.map((function(e){return wp.element.createElement("li",null,wp.element.createElement("b",null,e),": ",wp.element.createElement(ne,null,c[e]))}))))}function ae(){var e,t=x(ee([]),2),n=t[0],r=t[1];Z((function(){r(q([],"--"))}),[]);var o=h().currentAction,i=C(),l=i.setCurrentAction,a=i.updateCurrentConditions;return wp.element.createElement(React.Fragment,null,wp.element.createElement($,{key:"SelectControl-operator",label:Q("Condition Operator","jet-form-builder"),labelPosition:"side",value:o.condition_operator||"and",options:re,onChange:function(e){return l(D(D({},o),{},{condition_operator:e}))}}),wp.element.createElement(H,{state:a},wp.element.createElement(M,null,wp.element.createElement(R,{items:null!==(e=o.conditions)&&void 0!==e?e:[]},wp.element.createElement(ie,{formFields:n}))),wp.element.createElement(B,null,Q("Add New Condition","jet-form-builder"))))}const ce=function(){var e=U();return 1===e.length?wp.element.createElement(ae,null):wp.element.createElement(React.Fragment,null,wp.element.createElement(K,{className:"jfb-conditions-tab-panel",initialTabName:"fields",tabs:[{name:"fields",title:Q("Fields comparison","jet-form-builder"),edit:wp.element.createElement(ae,null)},{name:"events",title:Q("Events match","jet-form-builder"),edit:wp.element.createElement(le,{events:e})}]},(function(e){return e.edit})))};function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function se(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var pe=wp.i18n.__,me=JetFBComponents.ActionModal,fe=JetFBHooks.useRequestEvents,de=wp.data,be=de.useDispatch,ye=de.useSelect;const we=function(){var e=ye((function(e){return e("jet-forms/actions").isConditionalModal()})),t=be("jet-forms/actions",[]).clearCurrent,n=E(),r=h().currentAction,o=fe();if(!e)return null;var i=["width-60"];return 1!==o.length&&i.push("without-margin"),wp.element.createElement(me,{classNames:i,title:pe("Edit Action Conditions & Events","jet-form-builder"),onRequestClose:t,onCancelClick:t,onUpdateClick:function(){n(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){se(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r)),t()}},wp.element.createElement(ce,null))};function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Oe=wp.data,je=(Oe.useDispatch,Oe.useSelect),he=(wp.components.Popover,wp.element),Ee=he.useContext,Ce=(he.useState,JetFBComponents.ActionListItemContext),Pe=wp.i18n.__;function Se(e){var t,n,r=e.slug,o=e.index,i=je((function(e){return e("jet-forms/events").getType(r)})),l=Ee(Ce).action,a=O().updateActionObj,c=[null!==(t=null==i?void 0:i.title)&&void 0!==t?t:"",Pe("(Click to delete)","jet-form-builder")].join(" ");return wp.element.createElement("button",{type:"button",className:"jfb-events-item",title:c,onClick:function(){l.events.splice(o,1),a(l.id,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){ge(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l))}},null!==(n=null==i?void 0:i.value)&&void 0!==n?n:r)}const Ae=function(e){var t=e.events;return(void 0===t?[]:t).map((function(e,t){return wp.element.createElement(Se,{key:e,slug:e,index:t})}))};function _e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_e(Object(n),!0).forEach((function(t){ke(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ke(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var xe=wp.data,Fe=xe.useDispatch,Te=xe.useSelect,Ne=wp.hooks.applyFilters,Je=wp.i18n.__,Ie=wp.components,Re=Ie.SelectControl,Be=Ie.Button,Me=Ie.Card,He=Ie.CardBody,Le=Ie.CardHeader,Ue=Ie.CardFooter,qe=Ie.DropdownMenu,ze=Ie.Flex,$e=JetFBComponents,We=$e.ActionListItemContext,Ge=$e.MacrosButtonTemplate,Ve=window.jetFormActionTypes.map((function(e){return{value:e.id,label:e.name,disabled:e.disabled}}));const Ke=function(e){var t,n,r,o=e.action,i=e.index,l=O(),a=l.moveAction,c=l.deleteAction,u=l.actions,s=l.updateActionObj,p=l.toggleExecute,m=j(o.type),f=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return v((function(t){return e?t("jet-forms/actions").getDetail(e):t("jet-forms/actions").getCurrentDetail()}),[e])}(o.type),d=Fe("jet-forms/actions",[]),b=d.setCurrentAction,y=d.setMeta,w=Te((function(e){return e("jet-forms/actions").getCurrentAction()})),g=Ne("jet.fb.section.actions.header.".concat(o.type),null,o),h=null!=o&&null!==(t=o.conditions)&&void 0!==t&&t.length?wp.element.createElement("span",{className:"dashicon dashicons dashicons-randomize","data-count":null==o?void 0:o.conditions.length}):wp.element.createElement("span",{className:"dashicon dashicons dashicons-randomize"}),E=["jet-form-action"],C=null===(n=o.is_execute)||void 0===n||n;return C||E.push("is-disabled"),(null==w?void 0:w.id)===o.id&&E.push("is-current"),wp.element.createElement(Me,{elevation:2,key:o.id,size:"extraSmall",className:E},g&&wp.element.createElement(Le,null,g),wp.element.createElement(He,null,wp.element.createElement(Re,{value:o.type,options:Ve,onChange:function(e){return s(o.id,{type:e})}},Ve.map((function(e){return wp.element.createElement("option",{key:o.id+"__"+e.value,value:e.value,disabled:e.disabled,dangerouslySetInnerHTML:{__html:e.label}})}))),Ne("jet.fb.section.actions.afterSelect.".concat(o.type),null,o,u),wp.element.createElement(ze,{style:{marginTop:"0.5em"},justify:"space-around"},wp.element.createElement(Be,{disabled:!m,icon:"edit",label:Je("Edit Action","jet-form-builder"),onClick:function(){b(De(De({},o),{},{index:i})),y({index:i,modalType:"settings"})}}),wp.element.createElement(Be,{className:"jet-fb-button",icon:h,label:Je("Edit Conditions & Events","jet-form-builder"),onClick:function(){b(De(De({},o),{},{index:i})),y({index:i,modalType:"conditions"})}}),wp.element.createElement((function(){return wp.element.createElement(qe,{icon:"ellipsis",label:"Edit, move or delete",controls:[{title:Je("Up","jet-form-builder"),icon:"arrow-up",disabled:0===i,onClick:function(){a(i,i-1)}},{title:Je("Down","jet-form-builder"),icon:"arrow-down",disabled:u.length-1===i,onClick:function(){a(i,i+1)}},{title:Je("Delete","jet-form-builder"),icon:"trash",onClick:function(){c(i)}},{title:Je(C?"Turn off":"Turn on","jet-form-builder"),icon:C?"no-alt":"yes",onClick:function(){p(o)}}]})}),null),wp.element.createElement(Ge,{variant:null,isSmall:!1,icon:"editor-help",label:Je("Show details about selected action","jet-form-builder")},wp.element.createElement("div",{className:"jet-fb-control p-06em flex flex-dir-column gap-default"},wp.element.createElement("div",{"data-title":Je("ID:","jet-form-builder")},wp.element.createElement("b",null,o.id)),f&&wp.element.createElement(f,null))))),Boolean(null===(r=o.events)||void 0===r?void 0:r.length)&&wp.element.createElement(Ue,{style:{flexWrap:"wrap",rowGap:"0.5em"}},wp.element.createElement(We.Provider,{value:{index:i,action:o}},wp.element.createElement(Ae,{events:o.events}))))};function Qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Qe(Object(n),!0).forEach((function(t){Ye(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Ye(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ze(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var et=JetFBActions.Tools,tt=wp.element.useEffect,nt=wp.components.Button,rt=wp.i18n.__;const ot=function(){var e=O(),t=e.actions,n=e.setActions;return tt((function(){0===t.length&&n(a)}),[]),wp.element.createElement(React.Fragment,null,t&&t.map((function(e,t){return wp.element.createElement(Ke,{key:e.id,action:e,index:t})})),wp.element.createElement("div",{className:"jet-fb-control flex jc-space-between"},wp.element.createElement(nt,{isPrimary:!0,onClick:function(){var e;n([].concat(function(e){if(Array.isArray(e))return Ze(e)}(e=t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Ze(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ze(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[Xe(Xe({},JSON.parse(JSON.stringify(l))),{},{id:et.getRandomID()})]))}},rt("+ New Action","jet-form-builder")),!JetFormEditorData.isActivePro&&wp.element.createElement(nt,{href:JetFormEditorData.utmLinks.allProActions,variant:"link"},rt("All PRO Actions","jet-form-builder"))),wp.element.createElement(A,null),wp.element.createElement(we,null))}}}]);