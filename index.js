/*
 * xtrica-connection v1.0.1517244717 (https://xtrica.com)
 * Copyright 2017-2018 (or 2150?) Xtrica
 * Licensed under MIT
 */
"use strict";export default function(){this.status=!0;this.mutex=!1;this.changed=!1;this.interval=null;this.setStatus=(value)=>{let vm=this;vm.changed=!0;vm.status=value?!0:!1};this.setStatusOffline=()=>{let vm=this;vm.changed=!0;vm.status=!1};this.setStatusOnline=()=>{let vm=this;vm.changed=!0;vm.status=!0};this.cleanup=()=>{let vm=this
clearInterval(vm.interval);window.removeEventListener('online',vm.setStatusOnline);window.removeEventListener('offline',vm.setStatusOffline);if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.removeEventListener('onLine',vm.setStatus)}};if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.addEventListener('onLine',this.setStatus)}
window.addEventListener('offline',this.setStatusOffline);window.addEventListener('online',this.setStatusOnline);this.interval=setInterval(()=>{let vm=this
if(vm.changed===!1){if(window.location.hostname!=='localhost'){if(vm.mutex===!1){vm.mutex=!0;try{let x=new XMLHttpRequest();x.open('HEAD','/?time='+(new Date()).getTime());let timeout=setTimeout(()=>{x.abort();vm.mutex=!1},2200);x.onreadystatechange=()=>{if(x.readyState===4){clearTimeout(timeout);if(vm.changed===!1){vm.status=parseInt(x.status)===200?!0:!1}
vm.mutex=!1}};x.send(null)}catch(error){vm.mutex=!1}}}}else{vm.changed=!1}},1100)}