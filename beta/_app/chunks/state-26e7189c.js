var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,n=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&i(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&i(e,a,t[a]);return e},c=(e,r)=>t(e,a(r));import{C as l,J as d,K as m,L as p,M as u,N as y,O as g}from"./vendor-f68abb6e.js";import{_ as f}from"./preload-helper-c90670b7.js";const b=l({loading:!1}),h=async(e,t)=>{b.set({loading:!0,message:e});const a=await t;return b.set({loading:!1}),a};let O;const v=async()=>{if(!O)try{const{Analytics:e}=await f((()=>import("./analytics.browser.es-d53875b8.js")),[]),t=await f((()=>import("./analytics-plugin-ga.browser.es-1cdb0512.js")),[]);O=e({app:"mermaid-live-editor",plugins:[t.init({trackingId:"UA-153180559-1"})]})}catch{console.info("Analytics blocked ;)")}};let S;const j={code:"graph TD\n    A[Christmas] --\x3e|Get money| B(Go shopping)\n    B --\x3e C{Let me think}\n    C --\x3e|One| D[Laptop]\n    C --\x3e|Two| E[iPhone]\n    C --\x3e|Three| F[fa:fa-car Car]\n  ",mermaid:JSON.stringify({theme:"default"},null,2),updateEditor:!1,autoSync:!0,updateDiagram:!0},E=d(l(j),m(),"codeStore"),L=p([E],(([e],t)=>{t(u(JSON.stringify(e),!0))})),_=e=>{let t;try{const a=g(e);console.log(`Trying to load state: ${a}`),t=JSON.parse(a);const r="string"==typeof t.mermaid?JSON.parse(t.mermaid):t.mermaid;r.securityLevel&&"strict"!==r.securityLevel&&confirm(`Removing "securityLevel":"${r.securityLevel}" from the config for safety.\nClick Cancel if you trust the source of this Diagram.`)&&delete r.securityLevel,t.mermaid=JSON.stringify(r,null,2)}catch(a){e&&console.error("Init error",a),t=y(E),console.log(t)}w(c(n({},t),{updateEditor:!0}))},w=e=>{E.update((t=>n(n({},t),e)))};let C=!1;const T=(e,t,a=!1)=>{var r;r=e,O&&(clearTimeout(S),S=setTimeout((function(){const e=r.replace(/^\s*%%.*\n/g,"\n").trimStart().split(" ")[0];console.debug("ga:","send","event","render",e),O.track("render",{graphType:e})}),5e3));if((e.match(/\n/g)||"").length+1>50&&!C&&y(E).autoSync){const e=confirm("Long diagram detected. Turn off Auto Sync? Click the sync logo to manually sync.");C=!0,e&&w({autoSync:!1})}E.update((r=>c(n({},r),{code:e,updateEditor:t,updateDiagram:a})))},k=(e,t)=>{E.update((a=>c(n({},a),{mermaid:e,updateEditor:t})))},J=e=>{E.update((t=>{const a=JSON.parse(t.mermaid);return a.theme&&!["dark","default"].includes(a.theme)||(a.theme=e?"dark":"default"),c(n({},t),{mermaid:JSON.stringify(a,null,2),updateEditor:!0})}))},N=()=>{L.subscribe((e=>{history.replaceState(void 0,void 0,`#${e}`)}))},D=()=>JSON.stringify(y(E));export{O as a,L as b,E as c,k as d,j as e,w as f,D as g,N as h,h as i,v as j,_ as k,b as l,J as t,T as u};
