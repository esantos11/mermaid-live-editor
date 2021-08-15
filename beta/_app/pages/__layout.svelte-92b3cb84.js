import{S as e,i as s,s as a,e as t,t as l,c as r,a as n,g as c,d as o,f as i,D as h,E as u,b as f,F as m,G as d,H as g,I as p,J as v,K as $,A as b,L as k,M as x,k as E,n as w,h as y,j,l as I,m as D,o as N,N as V,O as _,P as A,x as O,u as S,v as T}from"../chunks/vendor-d678ff84.js";import{b as L}from"../chunks/paths-45dac81d.js";import{t as M,l as P}from"../chunks/state-5310f965.js";import{t as W,s as q}from"../chunks/theme-a6627a38.js";import"../chunks/preload-helper-b2c28c98.js";function z(e,s,a){const t=e.slice();return t[5]=s[a],t}function B(e){let s,a,f,m=e[5]+"";return{c(){s=t("option"),a=l(m),this.h()},l(e){s=r(e,"OPTION",{});var t=n(s);a=c(t,m),t.forEach(o),this.h()},h(){s.__value=f=e[5],s.value=s.__value},m(e,t){i(e,s,t),h(s,a)},p:u,d(e){e&&o(s)}}}function C(e){let s,a,l,c=e[1],h=[];for(let t=0;t<c.length;t+=1)h[t]=B(z(e,c,t));return{c(){s=t("select");for(let e=0;e<h.length;e+=1)h[e].c();this.h()},l(e){s=r(e,"SELECT",{class:!0});var a=n(s);for(let s=0;s<h.length;s+=1)h[s].l(a);a.forEach(o),this.h()},h(){f(s,"class","select select-bordered w-full max-w-xs"),void 0===e[0]&&m((()=>e[2].call(s)))},m(t,r){i(t,s,r);for(let e=0;e<h.length;e+=1)h[e].m(s,null);d(s,e[0]),a||(l=[g(s,"change",e[2]),g(s,"change",e[3])],a=!0)},p(e,[a]){if(2&a){let t;for(c=e[1],t=0;t<c.length;t+=1){const l=z(e,c,t);h[t]?h[t].p(l,a):(h[t]=B(l),h[t].c(),h[t].m(s,null))}for(;t<h.length;t+=1)h[t].d(1);h.length=c.length}3&a&&d(s,e[0])},i:u,o:u,d(e){e&&o(s),p(h,e),a=!1,v(l)}}}function F(e,s,a){let t;$(e,W,(e=>a(4,t=e)));const l=["light","dark","cupcake","bumblebee","emerald","corporate","synthwave","retro","cyberpunk","valentine","halloween","garden","forest","aqua","lofi","pastel","fantasy","wireframe","black","luxury","dracula"];let r=t.theme;b((()=>{W.subscribe((({theme:e,isDark:s})=>{document.getElementsByTagName("html")[0].setAttribute("data-theme",e),M(s)}))}));return[r,l,function(){r=k(this),a(0,r),a(1,l)},()=>q(r)]}class G extends e{constructor(e){super(),s(this,e,F,C,a,{})}}function H(e){let s,a,u,m,d,g,p=e[1].message+"";return{c(){s=t("div"),a=t("div"),u=t("div"),m=E(),d=t("div"),g=l(p),this.h()},l(e){s=r(e,"DIV",{class:!0});var t=n(s);a=r(t,"DIV",{class:!0});var l=n(a);u=r(l,"DIV",{class:!0}),n(u).forEach(o),m=w(l),d=r(l,"DIV",{});var i=n(d);g=c(i,p),i.forEach(o),l.forEach(o),t.forEach(o),this.h()},h(){f(u,"class","loader mx-auto svelte-1ub1m40"),f(a,"class","text-indigo-100 text-4xl font-bold my-auto"),f(s,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,t){i(e,s,t),h(s,a),h(a,u),h(a,m),h(a,d),h(d,g)},p(e,s){2&s&&p!==(p=e[1].message+"")&&y(g,p)},d(e){e&&o(s)}}}function J(e){let s,a,l,c,u,m;a=new G({});const d=e[3].default,g=x(d,e,e[2],null);let p=e[1].loading&&H(e);return{c(){s=t("main"),j(a.$$.fragment),l=E(),g&&g.c(),c=E(),p&&p.c(),u=I(),this.h()},l(e){s=r(e,"MAIN",{class:!0,"data-theme":!0});var t=n(s);D(a.$$.fragment,t),l=w(t),g&&g.l(t),t.forEach(o),c=w(e),p&&p.l(e),u=I(),this.h()},h(){f(s,"class","h-screen"),f(s,"data-theme",e[0])},m(e,t){i(e,s,t),N(a,s,null),h(s,l),g&&g.m(s,null),i(e,c,t),p&&p.m(e,t),i(e,u,t),m=!0},p(e,[a]){g&&g.p&&(!m||4&a)&&V(g,d,e,e[2],m?A(d,e[2],a,null):_(e[2]),null),(!m||1&a)&&f(s,"data-theme",e[0]),e[1].loading?p?p.p(e,a):(p=H(e),p.c(),p.m(u.parentNode,u)):p&&(p.d(1),p=null)},i(e){m||(O(a.$$.fragment,e),O(g,e),m=!0)},o(e){S(a.$$.fragment,e),S(g,e),m=!1},d(e){e&&o(s),T(a),g&&g.d(e),e&&o(c),p&&p.d(e),e&&o(u)}}}function K(e,s,a){let t,l;$(e,W,(e=>a(0,t=e))),$(e,P,(e=>a(1,l=e)));let{$$slots:r={},$$scope:n}=s;return b((()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(`${L}/service-worker.js`,{scope:`${L}/`}).then((function(e){console.log("Registration successful, scope is:",e.scope)})).catch((function(e){console.log("Service worker registration failed, error:",e)}))})),e.$$set=e=>{"$$scope"in e&&a(2,n=e.$$scope)},[t,l,n,r]}class R extends e{constructor(e){super(),s(this,e,K,J,a,{})}}export{R as default};
