"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[131],{8131:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,"string");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],c=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,l=e}finally{try{if(!c&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.r(t),n.d(t,{default:()=>x});var p=JetFBActions,m=p.globalTab,f=p.Tools.withPlaceholder,b=p.getFormFieldsBlocks,y=p.convertListToFieldsMap,d=JetFBComponents,g=d.ActionFieldsMap,v=d.WrapperRequiredControl,w=d.ActionFetchButton,_=d.DynamicPropertySelect,h=d.ToggleControl,j=JetFBHooks,k=j.withRequestFields,O=j.withSelectActionLoading,S=wp.components,E=S.TextControl,P=S.SelectControl,A=S.BaseControl,C=wp.i18n.__,F=wp.element,T=F.useState,B=F.useEffect,I=wp.data.withSelect,D=wp.compose.compose,N={first_name:"firstName",last_name:"lastName"};const x=D(I(k),I(O))((function(e){var t,n=e.settings,r=e.onChangeSettingObj,l=e.source,o=e.label,u=e.help,s=e.requestFields,p=e.loadingState,d=m({slug:"active-campaign-tab"}),j=c(T((function(){return[].concat(i(b([],"--")),i(s))})),1)[0];B((function(){for(var e={},t=0,l=Object.entries(null!==(a=n.fields_map)&&void 0!==a?a:{});t<l.length;t++){var a,o=c(l[t],2),i=o[0],u=o[1];N.hasOwnProperty(i)?e[N[i]]=u:e[i]=u}r({fields_map:e})}),[]);var k=function(e){var t;return n.use_global?d[e]:null!==(t=n[e])&&void 0!==t?t:""};return wp.element.createElement(React.Fragment,null,wp.element.createElement(h,{checked:n.use_global,onChange:function(e){return r({use_global:Boolean(e)})}},C("Use","jet-form-builder")+" ",wp.element.createElement("a",{href:JetFormEditorData.global_settings_url+"#active-campaign-tab"},C("Global Settings","jet-form-builder"))),wp.element.createElement(A,{label:o("api_data"),key:"activecampaign_input_key"},wp.element.createElement("div",{className:"jet-control-clear-full jet-d-flex-between"},wp.element.createElement("div",null,wp.element.createElement(E,{key:"api_url",help:o("api_url"),className:"jet-control-clear",disabled:n.use_global,value:k("api_url"),onChange:function(e){return r({api_url:e})}}),wp.element.createElement(E,{key:"api_key",help:o("api_key"),className:"jet-control-clear",disabled:n.use_global,value:k("api_key"),onChange:function(e){return r({api_key:e})}})),wp.element.createElement(w,{initialLabel:o("validate_api_key"),label:o("retry_request"),apiArgs:a(a({},l.fetch),{},{headers:{"API-TOKEN":k("api_key"),"API-URL":k("api_url")}})}))),wp.element.createElement("div",{style:{paddingBottom:"1.2em"}},u("api_key_link_prefix")," ",wp.element.createElement("a",{href:u("api_key_link")},u("api_key_link_suffix"))),p.success&&wp.element.createElement(React.Fragment,null,wp.element.createElement(P,{key:"activecampaign_select_lists",label:o("list_id"),labelPosition:"side",value:n.list_id,onChange:function(e){return r({list_id:e})},options:f(null!==(t=p.response.lists)&&void 0!==t?t:[])}),wp.element.createElement(E,{key:"activecampaign_tags",label:o("tags"),value:n.tags,help:u("tags"),onChange:function(e){return r({tags:e})}}),wp.element.createElement(g,{label:o("fields_map"),fields:y(p.response.fields)},wp.element.createElement(v,null,wp.element.createElement(_,{properties:j})))))}))}}]);