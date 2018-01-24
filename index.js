/*
 * xtrica-connection v1.0.1516817549 (https://xtrica.com)
 * Copyright 2017-2018 (or 2150?) Xtrica
 * Licensed under MIT
 */
"use strict";export default function(){this.status=!1;this.mutex=!1;this.interval=null;this.setStatus=(value)=>{console.log('navigator detects: '+(value?'online':'offline'));let vm=this;vm.mutex=!0;vm.status=value?!0:!1};this.setStatusOffline=()=>{console.log('window detects: offline');let vm=this;vm.mutex=!0;vm.status=!1};this.setStatusOnline=()=>{console.log('window detects: online');let vm=this;vm.mutex=!0;vm.status=!0};this.cleanup=()=>{let vm=this
clearInterval(vm.interval);window.removeEventListener('online',vm.setStatusOnline);window.removeEventListener('offline',vm.setStatusOffline);if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.removeEventListener('onLine',vm.setStatus)}};if(!!navigator&&typeof navigator==='object'&&navigator.hasOwnProperty('onLine')){navigator.addEventListener('onLine',this.setStatus)}
window.addEventListener('offline',this.setStatusOffline);window.addEventListener('online',this.setStatusOnline);this.interval=setInterval(()=>{let vm=this
if(vm.mutex===!1){try{let x=new XMLHttpRequest();x.open('HEAD','/?time='+(new Date()).getTime(),!0);x.onload=()=>{console.log('request detects: '+(parseInt(x.status)===200?'online':'offline'));vm.status=parseInt(x.status)===200?!0:!1};x.send()}catch(error){console.log(error)}}else{vm.mutex=!1}},1100)}