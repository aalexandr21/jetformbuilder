(()=>{const{addFilter:o}=wp.hooks;o("jet.fb.insert.post.modifiers","jet-form-builder/woocommerce-compat",(function(o){return[{id:"product",isSupported:o=>"product"===o.post_type},...o]}))})();