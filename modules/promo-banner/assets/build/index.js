(()=>{"use strict";var e;e=jQuery,window.jfbPromoBanner&&e(window).load((()=>{!function(n){const o=document.createElement("div"),r=document.createElement("a");o.classList.add("jfb-promo-banner"),window.jfbPromoBanner.classes&&o.classList.add(window.jfbPromoBanner.classes),r.classList.add("jfb-promo-banner__dismiss"),r.setAttribute("href","#"),r.setAttribute("aria-label","Dismiss JetFormBuilder Promo Banner"),r.setAttribute("role","button"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><rect x="0" fill="none" width="20" height="20"/><g><path d="M14.95 6.46L11.41 10l3.54 3.54-1.41 1.41L10 11.42l-3.53 3.53-1.42-1.42L8.58 10 5.05 6.47l1.42-1.42L10 8.58l3.54-3.53z"/></g></svg>',o.innerHTML=n,o.appendChild(r);const t=document.getElementById("wpbody-content"),a=document.querySelector(".wrap");a?a.prepend(o):t.prepend(o),e(o).on("click",".jfb-promo-banner__dismiss",(n=>{n.preventDefault(),o.remove(),e.ajax({url:window.ajaxurl,type:"POST",dataType:"json",data:{action:window.jfbPromoBanner.action,hash:window.jfbPromoBanner.hash,nonce:window.jfbPromoBanner.nonce}})}))}(window.jfbPromoBanner.banner)}))})();