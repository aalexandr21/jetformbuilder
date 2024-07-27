(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{fetchApiData:()=>E});var n={};e.r(n),e.d(n,{getFetchError:()=>v,getFields:()=>b,getLists:()=>y,isFetchLoading:()=>w});const r=window.React,l=window.wp.i18n,a=window.wp.element,o=window.wp.data,i=window.jfb.components,c=window.wp.components,s="SET_LISTS",u="SET_FIELDS",d="START_FETCH",m="END_FETCH",p="SET_FETCH_ERROR",g=(0,o.combineReducers)({api:function(e={},t){switch(t?.type){case s:return{...e,lists:t.payload};case u:return{...e,fields:t.payload}}return e},fetch:function(e={},t){switch(t?.type){case d:return{...e,loading:!0};case m:return{...e,loading:!1};case p:return{...e,error:t.error}}return e}}),_=window.wp.apiFetch;var f=e.n(_);const h=window.wp.url,E=({apiKey:e,apiUrl:t})=>async({dispatch:n})=>{if(!e||!t)return;n({type:d}),n({type:p,error:!1});const r=(0,h.addQueryArgs)("jet-form-builder/v1/active-campaign",{apiKey:e,apiUrl:t});let l;try{l=await f()({path:r})}catch(e){return void n({type:p,error:e})}finally{n({type:m})}n({type:s,payload:l.lists}),n({type:u,payload:l.fields})};function y(e){var t;return null!==(t=e?.api?.lists)&&void 0!==t?t:[]}function b(e){var t;return null!==(t=e?.api?.fields)&&void 0!==t?t:[]}function w(e){var t;return null!==(t=e.fetch?.loading)&&void 0!==t&&t}function v(e){var t;return null!==(t=e.fetch?.error)&&void 0!==t&&t}const F="jet-forms/active-campaign",S=(0,o.createReduxStore)(F,{reducer:g,actions:t,selectors:n}),j=function({...e}){return(0,r.createElement)("div",{...e},(0,l.__)("How to obtain your ActiveCampaign API URL and Key?","jet-form-builder")," ",(0,r.createElement)(c.ExternalLink,{href:"https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API"},(0,l.__)("More info here","jet-form-builder")))},C=window.wp.compose,x=window.wp.primitives,L=(0,r.createElement)(x.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(x.Path,{d:"M17.3 10.1c0-2.5-2.1-4.4-4.8-4.4-2.2 0-4.1 1.4-4.6 3.3h-.2C5.7 9 4 10.7 4 12.8c0 2.1 1.7 3.8 3.7 3.8h9c1.8 0 3.2-1.5 3.2-3.3.1-1.6-1.1-2.9-2.6-3.2zm-.5 5.1h-9c-1.2 0-2.2-1.1-2.2-2.3s1-2.4 2.2-2.4h1.3l.3-1.1c.4-1.3 1.7-2.2 3.2-2.2 1.8 0 3.3 1.3 3.3 2.9v1.3l1.3.2c.8.1 1.4.9 1.4 1.8-.1 1-.9 1.8-1.8 1.8z"})),I=function({apiKey:e,apiUrl:t}){const{fetchApiData:n}=(0,o.useDispatch)(F),a=(0,o.useSelect)((e=>e(F).isFetchLoading()),[]);return(0,r.createElement)(c.Button,{onClick:()=>n({apiKey:e,apiUrl:t}),disabled:a,isBusy:a,icon:L,variant:"secondary",__next40pxDefaultSize:!0},(0,l.__)("Fetch","jet-form-builder"))};var R=function(){const e=Array.prototype.slice.call(arguments).filter(Boolean),t={},n=[];e.forEach((e=>{(e?e.split(" "):[]).forEach((e=>{if(e.startsWith("atm_")){const[,n]=e.split("_");t[n]=e}else n.push(e)}))}));const r=[];for(const e in t)Object.prototype.hasOwnProperty.call(t,e)&&r.push(t[e]);return r.push(...n),r.join(" ")};const B=window.jfb.actions,T=function({settings:e,onChangeSettingObj:t}){const n=(0,o.useSelect)((e=>e(F).getFetchError()),[]),{hasError:a,setShowError:s}=(0,B.useActionValidatorProvider)({isSupported:e=>"api_key"===e?.property}),{hasError:u,setShowError:d}=(0,B.useActionValidatorProvider)({isSupported:e=>"api_url"===e?.property}),m=(0,C.useInstanceId)(i.RowControl,"jfb-control"),p=(0,C.useInstanceId)(i.RowControl,"jfb-control");return(0,r.createElement)(i.RowControl,{createId:!1},(0,r.createElement)(i.Label,null,(0,l.__)("API Data","jet-form-builder")),(0,r.createElement)(c.Flex,{className:R(i.RowControlEndStyle,Boolean(n)&&i.ControlWithErrorStyle),gap:3,direction:"column"},Boolean(n)&&(0,r.createElement)(i.IconText,null,(0,l.__)("Fetching data was failed","jet-form-builder")),(0,r.createElement)(i.RequiredLabel,{htmlFor:m},(0,l.__)("API URL","jet-form-builder")),u&&(0,r.createElement)(i.IconText,null,(0,l.__)("Please fill this required field","jet-form-builder")),(0,r.createElement)(c.TextControl,{id:m,value:e.api_url,onChange:e=>t({api_url:e}),onBlur:()=>d(!0),className:u&&i.ControlWithErrorStyle,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,r.createElement)(i.RequiredLabel,{htmlFor:p},(0,l.__)("API Key","jet-form-builder")),a&&(0,r.createElement)(i.IconText,null,(0,l.__)("Please fill this required field","jet-form-builder")),(0,r.createElement)(c.TextControl,{id:p,value:e.api_key,onChange:e=>t({api_key:e}),onBlur:()=>s(!0),className:a&&i.ControlWithErrorStyle,__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)(I,{apiKey:e.api_key,apiUrl:e.api_url})),(0,r.createElement)(j,null)))},A=window.jfb.data,O=function(){const e=(0,o.useSelect)((e=>e(F).getFetchError()),[]),{value:t,onChange:n}=(0,A.useSiteOptionJSON)("jet_form_builder_settings__active-campaign-tab"),a=(0,C.useInstanceId)(i.RowControl,"jfb-control"),s=(0,C.useInstanceId)(i.RowControl,"jfb-control");return(0,r.createElement)(i.RowControl,{createId:!1},(0,r.createElement)(i.Label,null,(0,l.__)("API Data","jet-form-builder")),(0,r.createElement)(c.Flex,{className:R(i.RowControlEndStyle,Boolean(e)&&i.ControlWithErrorStyle),gap:3,direction:"column"},Boolean(e)&&(0,r.createElement)(i.IconText,null,(0,l.__)("Fetching data was failed","jet-form-builder")),(0,r.createElement)(i.RequiredLabel,{htmlFor:a},(0,l.__)("API URL","jet-form-builder")),(0,r.createElement)(c.TextControl,{id:a,value:t.api_url,onChange:e=>n({...t,api_url:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,r.createElement)(i.RequiredLabel,{htmlFor:s},(0,l.__)("API Key","jet-form-builder")),(0,r.createElement)(c.TextControl,{id:s,value:t.api_key,onChange:e=>n({...t,api_key:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}),(0,r.createElement)(c.FlexItem,null,(0,r.createElement)(I,{apiUrl:t.api_url,apiKey:t.api_key})),(0,r.createElement)(j,null)))},M=function({settings:e,onChangeSettingObj:t}){const n=(0,o.useSelect)((e=>e(F).getLists()),[]);return(0,r.createElement)(i.RowControl,null,(({id:a})=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.Label,{htmlFor:a},(0,l.__)("List Id","jet-form-builder")),(0,r.createElement)(c.SelectControl,{id:a,value:e.list_id,onChange:e=>t({list_id:e}),options:[{value:"",label:"--"},...n],__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))))},P=window.jfb.blocksToActions,N=function({getMapField:e,setMapField:t}){const n=(0,P.useFields)({withInner:!1,placeholder:"--"}),a=(0,o.useSelect)((e=>e(F).getFields()),[]);return(0,r.createElement)(i.RowControl,null,(0,r.createElement)(i.Label,null,(0,l.__)("Fields map","jet-form-builder")),(0,r.createElement)(c.Flex,{className:R(i.RowControlEndStyle),direction:"column",gap:4},a.map((l=>(0,r.createElement)(B.FieldsMapField,{key:l.value,tag:l.value,label:l.label,isRequired:l.required,formFields:n,value:e({name:l.value}),onChange:e=>t({nameField:l.value,value:e})})))))},k=function({settings:e,onChangeSettingObj:t}){return(0,r.createElement)(i.RowControl,{createId:!1},(0,r.createElement)(i.Label,null,(0,l.__)("Tags","jet-form-builder")),(0,r.createElement)(c.FormTokenField,{value:e.tags,onChange:e=>t({tags:e}),__next40pxDefaultSize:!0,__nextHasNoMarginBottom:!0}))},{ToggleControl:D}=JetFBComponents,H={first_name:"firstName",last_name:"lastName"},z=(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},(0,r.createElement)("rect",{x:"0",fill:"none",width:"20",height:"20"}),(0,r.createElement)("g",null,(0,r.createElement)("path",{d:"M16 1.1L4 5.9c-1.1.4-2 1.8-2 3v8.7c0 1.2.9 1.8 2 1.4l12-4.8c1.1-.4 2-1.8 2-3V2.5c0-1.2-.9-1.8-2-1.4zm.6 2.6l-6 9.3-6.7-4.5c-.1-.1-.4-.4-.2-.7.2-.4.7-.2.7-.2l6.3 2.3s4.8-6.3 5.1-6.7c.1-.2.4-.3.7-.1.3.2.2.5.1.6z"}))),U=[({settings:e})=>!e.use_global&&!e?.api_key&&{type:"empty",property:"api_key"},({settings:e})=>!e.use_global&&!e?.api_url&&{type:"empty",property:"api_url"},({settings:e})=>{const t=(0,o.select)(F).getFields();if(!Object.keys(t).length)return!1;const n=[];if(!t?.length)return!1;for(const r of t){if(!r.required)continue;const t=e?.fields_map?.[r.value];t||n.push({type:"empty",property:"field_"+r.value})}return n}],q={type:"active_campaign",label:(0,l.__)("Active Campaign","jet-form-builder"),edit:function(e){const{settings:t,onChangeSettingObj:n,getMapField:s,setMapField:u}=e,{isFetchLoading:d,hasLists:m,fields:p,hasError:g}=(0,o.useSelect)((e=>({isFetchLoading:e(F).isFetchLoading(),hasError:Boolean(e(F).getFetchError()),hasLists:Boolean(e(F).getLists().length),fields:e(F).getFields()})),[]);return(0,a.useEffect)((()=>{const e={};for(const[n,l]of Object.entries(null!==(r=t.fields_map)&&void 0!==r?r:{})){var r;H.hasOwnProperty(n)?e[H[n]]=l:e[n]=l}n({fields_map:e})}),[]),(0,a.useEffect)((()=>{if(!p?.length)return;const e=new Set(p.map((e=>e.value))),r={};for(const[n,l]of Object.entries(t.fields_map))e.has(n)&&(r[n]=l);n({fields_map:r})}),[d]),(0,a.useEffect)((()=>{t.tags&&!Array.isArray(t.tags)&&n({tags:t.tags.split(",").map((e=>e.trim()))})}),[]),(0,r.createElement)(c.Flex,{direction:"column"},(0,r.createElement)(D,{className:i.ClearBaseControlStyle,checked:t.use_global,onChange:e=>n({use_global:Boolean(e)}),__nextHasNoMarginBottom:!0},(0,l.__)("Use","jet-form-builder")+" ",(0,r.createElement)("a",{href:JetFormEditorData.global_settings_url+"#active-campaign-tab"},(0,l.__)("Global Settings","jet-form-builder"))),(0,r.createElement)(i.WideLine,null),t.use_global?(0,r.createElement)(O,null):(0,r.createElement)(T,{settings:t,onChangeSettingObj:n}),!g&&Boolean(p.length)&&(0,r.createElement)(r.Fragment,null,m&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(i.WideLine,null),(0,r.createElement)(M,{settings:t,onChangeSettingObj:n})),(0,r.createElement)(i.WideLine,null),(0,r.createElement)(k,{settings:t,onChangeSettingObj:n}),(0,r.createElement)(i.WideLine,null),(0,r.createElement)(N,{getMapField:s,setMapField:u})))},icon:z,docHref:"https://jetformbuilder.com/features/activecampaign/",category:"communication",validators:U};(0,o.register)(S),(0,o.dispatch)("jet-forms/actions").registerAction(q)})();