/*
 * xtrica-connection v1.0.1519353783 (https://xtrica.com)
 * Copyright 2017-2018 (or 2150?) Xtrica
 * Licensed under MIT
 */
"use strict";export default function(){this.status=!0;this.statusChangedTo=!0;this.statusChangedConfirmations=0;this.mutex=!1;this.interval=null;this.changed=!1;this.setStatus=(value)=>{let vm=this;vm.changed=!0;vm.status=value?!0:!1};this.setStatusOffline=()=>{let vm=this;vm.changed=!0;vm.status=!1};this.setStatusOnline=()=>{let vm=this;vm.changed=!0;vm.status=!0};this.cleanup=()=>{let vm=this
if(window.location.hostname==='localhost'){window.removeEventListener('online',vm.setStatusOnline);window.removeEventListener('offline',vm.setStatusOffline);if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.removeEventListener('onLine',vm.setStatus)}}else{clearInterval(vm.interval)}};if(window.location.hostname==='localhost'){if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.addEventListener('onLine',this.setStatus)}
window.addEventListener('offline',this.setStatusOffline);window.addEventListener('online',this.setStatusOnline)}else{this.interval=setInterval(()=>{let vm=this
if(vm.mutex===!1){vm.mutex=!0;try{let x=new XMLHttpRequest();x.open('HEAD','/?time='+(new Date()).getTime());let timeout=setTimeout(()=>{x.abort();vm.mutex=!1},300);x.onreadystatechange=()=>{if(x.readyState===4){clearTimeout(timeout);let newStatus=((parseInt(x.status)===200)?!0:!1);if(vm.statusChangedTo===newStatus){vm.statusChangedConfirmations+=1;if(vm.statusChangedConfirmations>=2){vm.status=((vm.statusChangedTo===!0)?!0:!1)}}else{vm.statusChangedTo=((newStatus===!0)?!0:!1);vm.statusChangedConfirmations=0}
vm.mutex=!1}};x.send(null)}catch(error){vm.mutex=!1}}},333)}}