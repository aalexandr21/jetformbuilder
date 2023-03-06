"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[748],{3748:(e,t,r)=>{function n(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a,o,i=[],s=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){u=!0,l=e}finally{try{if(!s&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,{default:()=>F});var i=JetFBComponents,s=i.WrapperRequiredControl,u=i.ActionMessages,c=JetFBActions,m=(c.addAction,c.getFormFieldsBlocks),d=c.Tools.withPlaceholder,f=c.convertListToFieldsMap,_=JetFBHooks.withRequestFields,p=wp.components,b=p.TextControl,w=p.ToggleControl,g=p.SelectControl,y=p.BaseControl,h=wp.i18n.__,v=wp.data.withSelect,E=wp.element,k=E.useState,C=E.useEffect;const F=v(_)((function(e){var t=e.settings,r=e.source,a=e.label,o=e.help,i=e.onChangeSettingObj,c=e.getMapField,_=e.setMapField,p=e.requestFields,v=l(k([]),2),E=v[0],F=v[1],S=l(k([]),2),j=S[0],A=S[1];C((function(){var e=m();F([].concat(n(e),n(p))),A(f(e,p)),t.add_user_id&&i({requestFields:[r.requestFields.user_id]})}),[]);var q=Object.entries(r.userFields);return wp.element.createElement(React.Fragment,{key:"register_user"},wp.element.createElement(w,{key:"allow_register",label:a("allow_register"),checked:t.allow_register,onChange:function(e){return i({allow_register:e})}}),t.allow_register&&wp.element.createElement(g,{key:"role_can_register",label:a("role_can_register"),labelPosition:"side",value:t.role_can_register,options:r.allUserRoles,onChange:function(e){return i({role_can_register:e})}}),wp.element.createElement(y,{label:a("fields_map"),key:"user_fields_map"},wp.element.createElement("div",{className:"jet-user-fields-map__list"},wp.element.createElement("span",{className:"description-controls"},h("Set form fields names to to get user data from","jet-form-builder")),q.map((function(e){var t=l(e,2),r=t[0],n=t[1];return wp.element.createElement(s,{field:[r,n]},wp.element.createElement(g,{className:"full-width",key:"user_fields_".concat(r),value:c({name:r}),options:d(E),onChange:function(e){return _({nameField:r,value:e})}}))})))),wp.element.createElement(g,{key:"user_role_list",className:"full-width",label:a("user_role"),labelPosition:"side",value:t.user_role,options:r.userRoles,onChange:function(e){return i({user_role:e})}}),wp.element.createElement(y,{label:a("user_meta"),key:"user_meta_list"},wp.element.createElement("div",{className:"jet-user-fields-map__list"},wp.element.createElement("span",{className:"description-controls"},h("Set user meta fields to save appropriate form fields into","jet-form-builder")),j.map((function(e){var t=l(e,2),r=t[0],n=t[1];return wp.element.createElement(s,{field:[r,n]},wp.element.createElement(b,{key:"form_fields_".concat(r),value:c({source:"meta_fields_map",name:r}),onChange:function(e){return _({nameField:r,value:e,source:"meta_fields_map"})}}))})))),wp.element.createElement(w,{key:"log_in",label:a("log_in"),checked:t.log_in,onChange:function(e){return i({log_in:e})}}),t.log_in&&wp.element.createElement(g,{key:"remember_me_field",label:a("remember_me_field"),labelPosition:"side",value:t.remember_me_field,options:d(E),onChange:function(e){return i({remember_me_field:e})}}),wp.element.createElement(w,{key:"add_user_id_control",label:a("add_user_id"),checked:t.add_user_id,onChange:function(e){return i({add_user_id:e,requestFields:e?[r.requestFields.user_id]:[]})},help:o("add_user_id")}),wp.element.createElement(u,e))}))}}]);