/*
 * xtrica-connection v1.0.1551980492 (https://xtrica.com)
 * Copyright 2017-2019 (or 2150?) Xtrica
 * Licensed under MIT
 */
"use strict";export default function(filepath){this.filepath=((!!filepath&&typeof filepath==="string"&&filepath.length)?filepath:"/");this.status=!0;this.statusChangedTo=!0;this.statusChangedConfirmations=0;this.mutex=!1;this.interval=null;this.changed=!1;this.setStatus=(value)=>{let vm=this;vm.changed=!0;vm.status=value?!0:!1};this.setStatusOffline=()=>{let vm=this;vm.changed=!0;vm.status=!1};this.setStatusOnline=()=>{let vm=this;vm.changed=!0;vm.status=!0};this.cleanup=()=>{let vm=this
window.removeEventListener("online",vm.setStatusOnline);window.removeEventListener("offline",vm.setStatusOffline)};window.addEventListener("offline",this.setStatusOffline);window.addEventListener("online",this.setStatusOnline)}