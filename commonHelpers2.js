import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as m,l as a}from"./assets/vendor-78be7656.js";const i=document.querySelector("iframe"),t=new m(i),r="videoplayer-current-time",e=localStorage.getItem(r);e&&t.setCurrentTime(Number(e));const n=({seconds:o})=>{localStorage.setItem(r,o)};t.on("timeupdate",a(n,1e3));
//# sourceMappingURL=commonHelpers2.js.map