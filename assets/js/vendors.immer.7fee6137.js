"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[340],{96772:function(t,e,r){function n(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function o(t){return!!t&&!!t[q]}function i(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return"function"==typeof r&&Function.toString.call(r)===B}(t)||Array.isArray(t)||!!t[X]||!!t.constructor[X]||y(t)||v(t))}function u(t){return o(t)||n(23,t),t[q].t}function f(t,e,r){void 0===r&&(r=!1),0===c(t)?(r?Object.keys:G)(t).forEach((function(n){r&&"symbol"==typeof n||e(n,t[n],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function c(t){var e=t[q];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:y(t)?2:v(t)?3:0}function a(t,e){return 2===c(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function l(t,e){return 2===c(t)?t.get(e):t[e]}function s(t,e,r){var n=c(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function p(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function y(t){return $&&t instanceof Map}function v(t){return J&&t instanceof Set}function d(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=H(t);delete e[q];for(var r=G(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function b(t,e){return void 0===e&&(e=!1),m(t)||o(t)||!i(t)||(c(t)>1&&(t.set=t.add=t.clear=t.delete=P),Object.freeze(t),e&&f(t,(function(t,e){return b(e,!0)}),!0)),t}function P(){n(2)}function m(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function O(t){var e=L[t];return e||n(18,t),e}function g(){return N}function w(t,e){e&&(O("Patches"),t.u=[],t.s=[],t.v=e)}function j(t){A(t),t.p.forEach(D),t.p=null}function A(t){t===N&&(N=t.l)}function S(t){return N={p:[],l:N,h:t,m:!0,_:0}}function D(t){var e=t[q];0===e.i||1===e.i?e.j():e.g=!0}function F(t,e){e._=e.p.length;var r=e.p[0],o=void 0!==t&&t!==r;return e.h.O||O("ES5").S(e,t,o),o?(r[q].P&&(j(e),n(4)),i(t)&&(t=k(e,t),e.l||_(e,t)),e.u&&O("Patches").M(r[q],t,e.u,e.s)):t=k(e,r,[]),j(e),e.u&&e.v(e.u,e.s),t!==V?t:void 0}function k(t,e,r){if(m(e))return e;var n=e[q];if(!n)return f(e,(function(o,i){return x(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return _(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;f(3===n.i?new Set(o):o,(function(e,i){return x(t,n,o,e,i,r)})),_(t,o,!1),r&&t.u&&O("Patches").R(n,r,t.u,t.s)}return n.o}function x(t,e,r,n,u,f){if(o(u)){var c=k(t,u,f&&e&&3!==e.i&&!a(e.D,n)?f.concat(n):void 0);if(s(r,n,c),!o(c))return;t.m=!1}if(i(u)&&!m(u)){if(!t.h.F&&t._<1)return;k(t,u),e&&e.A.l||_(t,u)}}function _(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&b(e,r)}function E(t,e){var r=t[q];return(r?d(r):t)[e]}function z(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function I(t){t.P||(t.P=!0,t.l&&I(t.l))}function R(t){t.o||(t.o=h(t.t))}function K(t,e,r){var n=y(e)?O("MapSet").N(e,r):v(e)?O("MapSet").T(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:g(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Q;r&&(o=[n],i=Y);var u=Proxy.revocable(o,i),f=u.revoke,c=u.proxy;return n.k=c,n.j=f,c}(e,r):O("ES5").J(e,r);return(r?r.A:g()).p.push(n),n}function M(t){return o(t)||n(22,t),function t(e){if(!i(e))return e;var r,n=e[q],o=c(e);if(n){if(!n.P&&(n.i<4||!O("ES5").K(n)))return n.t;n.I=!0,r=C(e,o),n.I=!1}else r=C(e,o);return f(r,(function(e,o){n&&l(n.t,e)===o||s(r,e,t(o))})),3===o?new Set(r):r}(t)}function C(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}r.d(e,{Ve:function(){return Z},mv:function(){return o},Js:function(){return u}});var W,N,U="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),$="undefined"!=typeof Map,J="undefined"!=typeof Set,T="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,V=U?Symbol.for("immer-nothing"):((W={})["immer-nothing"]=!0,W),X=U?Symbol.for("immer-draftable"):"__$immer_draftable",q=U?Symbol.for("immer-state"):"__$immer_state",B=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),G="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,H=Object.getOwnPropertyDescriptors||function(t){var e={};return G(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},L={},Q={get:function(t,e){if(e===q)return t;var r=d(t);if(!a(r,e))return function(t,e,r){var n,o=z(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!i(n)?n:n===E(t.t,e)?(R(t),t.o[e]=K(t.A.h,n,t)):n},has:function(t,e){return e in d(t)},ownKeys:function(t){return Reflect.ownKeys(d(t))},set:function(t,e,r){var n=z(d(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=E(d(t),e),i=null==o?void 0:o[q];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(p(r,o)&&(void 0!==r||a(t.t,e)))return!0;R(t),I(t)}return t.o[e]===r&&"number"!=typeof r||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==E(t.t,e)||e in t.t?(t.D[e]=!1,R(t),I(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=d(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){n(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){n(12)}},Y={};f(Q,(function(t,e){Y[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Y.deleteProperty=function(t,e){return Q.deleteProperty.call(this,t[0],e)},Y.set=function(t,e,r){return Q.set.call(this,t[0],e,r,t[0])};var Z=function(){function t(t){var e=this;this.O=T,this.F=!0,this.produce=function(t,r,o){if("function"==typeof t&&"function"!=typeof r){var u=r;r=t;var f=e;return function(t){var e=this;void 0===t&&(t=u);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return f.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var c;if("function"!=typeof r&&n(6),void 0!==o&&"function"!=typeof o&&n(7),i(t)){var a=S(e),l=K(e,t,void 0),s=!0;try{c=r(l),s=!1}finally{s?j(a):A(a)}return"undefined"!=typeof Promise&&c instanceof Promise?c.then((function(t){return w(a,o),F(t,a)}),(function(t){throw j(a),t})):(w(a,o),F(c,a))}if(!t||"object"!=typeof t){if((c=r(t))===V)return;return void 0===c&&(c=t),e.F&&b(c,!0),c}n(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){i(t)||n(8),o(t)&&(t=M(t));var e=S(this),r=K(this,t,void 0);return r[q].C=!0,A(e),r},e.finishDraft=function(t,e){var r=(t&&t[q]).A;return w(r,e),F(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!T&&n(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var i=O("Patches").$;return o(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(r+1))}))},t}(),tt=new Z;tt.produce,tt.produceWithPatches.bind(tt),tt.setAutoFreeze.bind(tt),tt.setUseProxies.bind(tt),tt.applyPatches.bind(tt),tt.createDraft.bind(tt),tt.finishDraft.bind(tt)}}]);