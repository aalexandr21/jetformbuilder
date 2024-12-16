(()=>{"use strict";var t={};function e(t){return t.parentElement.classList.contains("jet-fb-map-field")}t.n=e=>{var i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})},t.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let i=!1;function n(){return!1===i&&(i=new window.JetEngineMapsProvider),i}const{InputData:r}=JetFormBuilderAbstract;function s(){r.call(this),this.isSupported=function(t){return e(t)},this.setNode=function(t){r.prototype.setNode.call(this,t);const e=t.parentElement;this.nodes.push(e.querySelector('[data-map-field="hash"]'),e.querySelector('[data-map-field="lat"]'),e.querySelector('[data-map-field="lng"]')),this.fieldSettings={...this.fieldSettings,...JSON.parse(t.dataset.settings)},this.fieldSettings.zoom=+this.fieldSettings.zoom,this.inputType="map"},this.setValue=function(){const[t]=this.nodes;if(!t.value)return;const e=t=>{const e=t.split(","),i=Number(e[0]),n=Number(e[1]);return 2!==e.length||Number.isNaN(i)||Number.isNaN(n)?{}:{lat:i,lng:n}};switch(this.fieldSettings.format){case"location_string":this.value.current=e(t.value);break;case"location_address":const[i,n,r,s]=this.nodes;if(!r?.value||!s?.value)return!1;this.value.current={lat:Number(r.value),lng:Number(s?.value)};break;case"location_array":try{this.value.current=JSON.parse(t.value)}catch(i){this.value.current=e(t.value)}}},this.makeReactive=function(){r.prototype.makeReactive.call(this),this.reporting.makeInvalid=()=>{},this.reporting.makeValid=()=>{},new IntersectionObserver(((t,e)=>{t.forEach((t=>{t.isIntersecting&&(this.callable.render(),this.silenceNotify(),e.unobserve(t.target))}))})).observe(this.nodes[0].parentElement)},this.hasAutoScroll=function(){return!1}}s.prototype=Object.create(r.prototype),s.prototype.fieldSettings={height:"300",format:"location_string",field_prefix:!1,zoom:14};const o=s,a=window.wp.apiFetch;var l=t.n(a);const{BaseSignal:u}=JetFormBuilderAbstract,{toHTML:p}=JetFormBuilderFunctions;function c(){u.call(this),this.lock.current=!0,this.map=null,this.marker=null,this.mapFrame=null,this.position=null,this.preview=null,this.markerDefaults={...c.prototype.markerDefaults},this.isSupported=function(t,i){return e(t)},this.runSignal=function(){let t;const{current:e}=this.input.value;if(!e||!Object.keys(e).length)return void this.removeMarker();const[i,n,r,s]=this.input.nodes;this.setPreview(JetMapFieldsSettings.i18n.loading);const o=()=>{this.input.reporting.valuePrev=null,this.input.report(),this.input.loading.end()};switch(this.input.loading.start(),this.input.fieldSettings.format){case"location_string":t=e.lat+","+e.lng,this.updateHashFieldPromise(t).then((()=>{i.value=t,this.setPreview(e)})).finally(o);break;case"location_array":t=JSON.stringify(e),this.updateHashFieldPromise(t).then((()=>{i.value=t,this.setPreview(e)})).finally(o);break;case"location_address":l()({method:"get",path:JetMapFieldsSettings.api+"?lat="+e.lat+"&lng="+e.lng,headers:{nonce:JetMapFieldsSettings.nonce}}).then((t=>{t.success?t.data?this.updateHashFieldPromise(t.data).then((()=>{i.value=t.data,this.setPreview(t.data)})).finally(o):(i.value=null,this.setPreview(JetMapFieldsSettings.i18n.notFound),o()):(i.value=null,this.setPreview(t.html),o())})).catch((function(t){console.log(t)}))}r&&(r.value=e.lat),s&&(s.value=e.lng)}}c.prototype=Object.create(u.prototype),c.prototype.map=null,c.prototype.marker=null,c.prototype.preview=null,c.prototype.position=null,c.prototype.mapFrame=null,c.prototype.mapDefaults={center:{lat:41,lng:71},zoom:1},c.prototype.markerDefaults={content:'<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#C92C2C"/></svg>',shadow:!1},c.prototype.removeMarker=function(){const[t,e,i,r]=this.input.nodes;this.marker&&n().removeMarker(this.marker),this.setPreview(null),t.value=null,i&&(i.value=null),r&&(r.value=null),e&&(e.value=null)},c.prototype.setPreview=function(t){let e;e=t&&t.lat&&t.lng?'<span title="Lat">'+t.lat+'</span>, <span title="Lng">'+t.lng+"</span>":t,this.position.innerHTML=e,this.preview.style.display=t?"flex":"none"},c.prototype.updateHashFieldPromise=function(t){const[e,i]=this.input.nodes;return i?l()({method:"get",path:JetMapFieldsSettings.apiHash+"?loc="+t,headers:{nonce:JetMapFieldsSettings.nonce}}).then((t=>{t.success&&(i.value=t.data)})).catch((function(t){console.log(t)})):new Promise((function(t){t()}))},c.prototype.render=function(){const t=this.input.nodes[0].parentElement;this.preview=t.querySelector(".jet-fb-map-field__preview"),this.position=t.querySelector(".jet-fb-map-field__position"),this.mapFrame=t.querySelector(".jet-fb-map-field__frame");const e=n();null!==this.input.value.current&&(this.mapDefaults={...this.mapDefaults,center:this.input.value.current,zoom:this.input.fieldSettings.zoom}),this.map=e.initMap(this.mapFrame,this.mapDefaults),null!==this.input.value.current&&(this.marker=e.addMarker({...this.markerDefaults,position:this.input.value.current,map:this.map})),e.markerOnClick(this.map,this.markerDefaults,(t=>{this.marker&&e.removeMarker(this.marker),this.marker=t,this.input.value.current=e.getMarkerPosition(t,!0)})),t.querySelector(".jet-fb-map-field__reset").addEventListener("click",(()=>{this.input.value.current=null})),this.lock.current=!1},c.prototype.setMarker=function({lat:t,lng:e}){t=Number(t),e=Number(e),this.input.value.current={lat:t,lng:e};const i=n();this.marker=i.addMarker({...this.markerDefaults,position:this.input.value.current,map:this.map}),this.setCenterByPosition()},c.prototype.setCenterByPosition=function(){n().setCenterByPosition({position:this.input.value.current,map:this.map,zoom:12})};const h=c,{NotEmptyRestriction:d=function(){}}=JetFormBuilderAbstract,{isEmpty:m}=JetFormBuilderFunctions;function f(){d.call(this)}f.prototype=Object.create(d.prototype),f.prototype.isSupported=function(t,e){return d.prototype?.isSupported?.call?.(this,t,e)&&"map"===e.input.inputType},f.prototype.validate=function(){const[t]=this.reporting.input.nodes;return d.prototype.validate.call(this)&&!m(t.value)};const v=f,{RequiredRestriction:y}=JetFormBuilderAbstract,{isEmpty:g}=JetFormBuilderFunctions;function b(){y.call(this)}b.prototype=Object.create(y.prototype),b.prototype.isSupported=function(t,e){return y.prototype.isSupported.call(this,t,e)&&"map"===e.input.inputType},b.prototype.validate=function(){const[t]=this.reporting.input.nodes;return y.prototype.validate.call(this)&&!g(t.value)};const k=b,{addFilter:S}=JetPlugins.hooks;S("jet.fb.inputs","jet-form-builder/map-field",(function(t){return[o,...t]})),S("jet.fb.signals","jet-form-builder/map-field",(function(t){return[h,...t]})),S("jet.fb.restrictions","jet-form-builder/map-field",(function(t){return t.push(v),t})),S("jet.fb.restrictions.default","jet-form-builder/map-field",(function(t){return t.push(k),t}))})();