(()=>{"use strict";function t(t){return 1==+t.dataset.repeater}const{Observable:e,CalculatedFormula:r}=JetFormBuilderAbstract;function n(t){e.call(this,t),this.calc=1,this.initedCalc=!1}n.prototype=Object.create(e.prototype),n.prototype.calc=1,n.prototype.initedCalc=!1,n.prototype.observe=function(t){e.prototype.observe.call(this,t),this.parent.lastObserved.current=this},n.prototype.removeManually=function(){this.remove(),this.parent.remove(this),this.rootNode.remove()},n.prototype.initCalc=function(){if(this.initedCalc)return;this.initedCalc=!0;const[t]=this.parent.nodes,e=t.dataset?.formula;if(!e||"default"===this.parent.calcType)return;const n=new r(this);n.observe(e),n.setResult=()=>{this.calc=n.calculate(),this.parent.value.notify()},n.relatedCallback=function(t){return t.calcValue},n.emptyValue=function(){return 0},this.calc=n.calculate(),this.parent.silenceNotify()};const i=n,{InputData:o,ReactiveVar:s}=JetFormBuilderAbstract;function a(){o.call(this),this.buttonNode=!1,this.template=null,this.container=null,this.lastObserved=new s,this.lastObserved.make(),this.isSupported=function(e){return t(e)},this.addListeners=function(){this.reporting.makeInvalid=()=>{},this.reporting.makeValid=()=>{}},this.hasAutoScroll=function(){return!1},this.setValue=function(){const[t]=this.nodes;this.value.current=[];for(const e of t.querySelectorAll(".jet-form-builder-repeater__row")){const t=new i(this);t.rootNode=e,this.value.current.push(t)}for(const t of this.value.current)t.observe();for(const t of this.value.current)t.initCalc();const e=this.container.querySelectorAll(".jet-form-builder-repeater__remove");for(const t of e){const e=this.closestRow(t);e&&t.addEventListener("click",(()=>e.removeManually()))}if(this.isManualCount)return void this.buttonNode.addEventListener("click",(()=>this.addNew()));const r=this.root.getInput(this.itemsField);r?(r.watch((()=>this.recalculateItems(r))),this.recalculateItems(r)):console.error(`JetFormBuilder error: undefined input by name [${this.itemsField}]`)},this.setNode=function(t){o.prototype.setNode.call(this,t),this.nodes=[t],this.name=t.dataset.fieldName,this.rawName=this.name,this.inputType="repeater",this.manageItems=t.dataset?.manageItems||"manually",this.calcType=t.dataset?.calcType||"default",this.itemsField=t.dataset?.itemsField,this.isManualCount=!this.itemsField||"manually"===this.manageItems,this.buttonNode=t.querySelector(".jet-form-builder-repeater__new"),this.template=t.querySelector(".jet-form-builder-repeater__initial"),this.container=t.querySelector(".jet-form-builder-repeater__items")},this.onClear=function(){this.value.current=[]},this.populateInner=function(){if(!this.value.current?.length)return!1;const t=[],e=this.value.current;for(const r of e)for(const e of r.getInputs())e.reporting?.restrictions?.length&&t.push(e);return t},this.onRemove=function(){const t=this.value.current;for(const e of t)e.remove()},this.reQueryValue=function(){this.value.current?.length&&this.value.current.forEach((t=>{t.getInputs().forEach((t=>t.setValue()))}))}}a.prototype=Object.create(o.prototype),a.prototype.buttonNode=null,a.prototype.template=null,a.prototype.container=null,a.prototype.itemsField=!1,a.prototype.lastObserved=null,a.prototype.addNew=function(t=1){var e;this.value.current=[...null!==(e=this.value?.current)&&void 0!==e?e:[],...new Array(t).fill(null).map((()=>new i(this)))]},a.prototype.findIndex=function(t){return Array.isArray(this.value.current)?this.value.current.findIndex((e=>e===t)):-1},a.prototype.closestRow=function(t){const e=t.closest(".jet-form-builder-repeater__row");if(!e)return!1;const r=this.value.current;for(const t of r)if(t.rootNode===e)return t;return!1},a.prototype.remove=function(t){this.value.current=this.value.current.filter((e=>e!==t))},a.prototype.recalculateItems=function(t){var e;const r=(null!==(e=this.value.current?.length)&&void 0!==e?e:0)-t.calcValue;0!==r&&(r<0?this.addNew(-1*r):this.value.current=this.value.current.slice(0,-1*r))};const u=a,{BaseSignal:l}=window.JetFormBuilderAbstract;function c(){l.call(this),this.isSupported=function(e,r){return t(e)},this.runSignal=function(t=[]){const{current:e}=this.input.value;t?.length&&t.length>e.length&&this.removePrevItems(t);for(const t of Object.keys(e))e.hasOwnProperty(t)&&this.runItem(+t);let r=0;for(const t of Object.values(e))t.initCalc(),r+=t.calc;this.input.calcValue=r},this.runItem=function(t){const e=this.input.value.current[t];if(e.isObserved)return;const r=document.createElement("template");r.innerHTML=this.input.template.innerHTML.trim(),r.innerHTML=r.innerHTML.replace(/__i__/g,t),r.content.firstChild.dataset.index=""+t,this.input.container.append(r.content.firstChild);const n=this.input.container.lastChild;this.input.isManualCount&&n.querySelector(".jet-form-builder-repeater__remove").addEventListener("click",(()=>e.removeManually())),e.observe(n)},this.removePrevItems=function(t){const{current:e}=this.input.value;for(const r of t)e.includes(r)||r.removeManually()}}c.prototype=Object.create(l.prototype);const h=c;let{AdvancedRestriction:p,Restriction:d}=JetFormBuilderAbstract;function f(){p.call(this),this.isSupported=function(e,r){return t(e)},this.validate=function(){return!0},this.getRawMessage=function(){return""}}p=p||d,f.prototype=Object.create(p.prototype);const m=f,{addFilter:v,addAction:y}=JetPlugins.hooks;v("jet.fb.inputs","jet-form-builder/repeater-field",(function(t){return[u,...t]})),v("jet.fb.signals","jet-form-builder/repeater-field",(function(t){return[h,...t]}));const b=t=>(t.push(m),t);v("jet.fb.restrictions.default","jet-form-builder/repeater-field",b),v("jet.fb.restrictions","jet-form-builder/repeater-field",b),y("jet.fb.multistep.page.observed.input","jet-form-builder/repeater-field",(function(t,e){if("repeater"!==t.inputType)return;const r=t.value.current||[];function n(t){e.handleInputEnter(t),t.reporting?.restrictions?.length&&t.watchValidity((()=>e.updateState()))}t.watch((()=>e.updateState()));for(const t of r)t.getInputs().forEach(n);t.lastObserved.watch((()=>{t.lastObserved.current.getInputs().forEach(n)}))}))})();