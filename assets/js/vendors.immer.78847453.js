(self.webpackChunkweb=self.webpackChunkweb||[]).push([[340],{96772:function(t,e,r){"use strict";function n(t){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+t+(r.length?" "+r.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(t){return!!t&&!!t[B]}function u(t){return!!t&&(function(t){if(!t||"object"!=n(t))return!1;var e=Object.getPrototypeOf(t);if(null===e)return!0;var r=Object.hasOwnProperty.call(e,"constructor")&&e.constructor;return"function"==typeof r&&Function.toString.call(r)===G}(t)||Array.isArray(t)||!!t[q]||!!t.constructor[q]||v(t)||d(t))}function f(t){return i(t)||o(23,t),t[B].t}function c(t,e,r){void 0===r&&(r=!1),0===a(t)?(r?Object.keys:H)(t).forEach((function(o){r&&"symbol"==n(o)||e(o,t[o],t)})):t.forEach((function(r,n){return e(n,r,t)}))}function a(t){var e=t[B];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:v(t)?2:d(t)?3:0}function l(t,e){return 2===a(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function s(t,e){return 2===a(t)?t.get(e):t[e]}function p(t,e,r){var n=a(t);2===n?t.set(e,r):3===n?(t.delete(e),t.add(r)):t[e]=r}function y(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function v(t){return J&&t instanceof Map}function d(t){return V&&t instanceof Set}function b(t){return t.o||t.t}function h(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=L(t);delete e[B];for(var r=H(e),n=0;n<r.length;n++){var o=r[n],i=e[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(e[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:t[o]})}return Object.create(Object.getPrototypeOf(t),e)}function m(t,e){return void 0===e&&(e=!1),O(t)||i(t)||!u(t)||(a(t)>1&&(t.set=t.add=t.clear=t.delete=P),Object.freeze(t),e&&c(t,(function(t,e){return m(e,!0)}),!0)),t}function P(){o(2)}function O(t){return null==t||"object"!=n(t)||Object.isFrozen(t)}function g(t){var e=Q[t];return e||o(18,t),e}function w(){return U}function j(t,e){e&&(g("Patches"),t.u=[],t.s=[],t.v=e)}function S(t){A(t),t.p.forEach(k),t.p=null}function A(t){t===U&&(U=t.l)}function D(t){return U={p:[],l:U,h:t,m:!0,_:0}}function k(t){var e=t[B];0===e.i||1===e.i?e.j():e.g=!0}function F(t,e){e._=e.p.length;var r=e.p[0],n=void 0!==t&&t!==r;return e.h.O||g("ES5").S(e,t,n),n?(r[B].P&&(S(e),o(4)),u(t)&&(t=x(e,t),e.l||E(e,t)),e.u&&g("Patches").M(r[B],t,e.u,e.s)):t=x(e,r,[]),S(e),e.u&&e.v(e.u,e.s),t!==X?t:void 0}function x(t,e,r){if(O(e))return e;var n=e[B];if(!n)return c(e,(function(o,i){return _(t,n,e,o,i,r)}),!0),e;if(n.A!==t)return e;if(!n.P)return E(t,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var o=4===n.i||5===n.i?n.o=h(n.k):n.o;c(3===n.i?new Set(o):o,(function(e,i){return _(t,n,o,e,i,r)})),E(t,o,!1),r&&t.u&&g("Patches").R(n,r,t.u,t.s)}return n.o}function _(t,e,r,n,o,f){if(i(o)){var c=x(t,o,f&&e&&3!==e.i&&!l(e.D,n)?f.concat(n):void 0);if(p(r,n,c),!i(c))return;t.m=!1}if(u(o)&&!O(o)){if(!t.h.F&&t._<1)return;x(t,o),e&&e.A.l||E(t,o)}}function E(t,e,r){void 0===r&&(r=!1),t.h.F&&t.m&&m(e,r)}function z(t,e){var r=t[B];return(r?b(r):t)[e]}function I(t,e){if(e in t)for(var r=Object.getPrototypeOf(t);r;){var n=Object.getOwnPropertyDescriptor(r,e);if(n)return n;r=Object.getPrototypeOf(r)}}function R(t){t.P||(t.P=!0,t.l&&R(t.l))}function K(t){t.o||(t.o=h(t.t))}function M(t,e,r){var n=v(e)?g("MapSet").N(e,r):d(e)?g("MapSet").T(e,r):t.O?function(t,e){var r=Array.isArray(t),n={i:r?1:0,A:e?e.A:w(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},o=n,i=Y;r&&(o=[n],i=Z);var u=Proxy.revocable(o,i),f=u.revoke,c=u.proxy;return n.k=c,n.j=f,c}(e,r):g("ES5").J(e,r);return(r?r.A:w()).p.push(n),n}function C(t){return i(t)||o(22,t),function t(e){if(!u(e))return e;var r,n=e[B],o=a(e);if(n){if(!n.P&&(n.i<4||!g("ES5").K(n)))return n.t;n.I=!0,r=W(e,o),n.I=!1}else r=W(e,o);return c(r,(function(e,o){n&&s(n.t,e)===o||p(r,e,t(o))})),3===o?new Set(r):r}(t)}function W(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return h(t)}r.d(e,{Ve:function(){return tt},Vk:function(){return C},mv:function(){return i},Js:function(){return f}});var N,U,$="undefined"!=typeof Symbol&&"symbol"==n(Symbol("x")),J="undefined"!=typeof Map,V="undefined"!=typeof Set,T="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,X=$?Symbol.for("immer-nothing"):((N={})["immer-nothing"]=!0,N),q=$?Symbol.for("immer-draftable"):"__$immer_draftable",B=$?Symbol.for("immer-state"):"__$immer_state",G=("undefined"!=typeof Symbol&&Symbol.iterator,""+Object.prototype.constructor),H="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,L=Object.getOwnPropertyDescriptors||function(t){var e={};return H(t).forEach((function(r){e[r]=Object.getOwnPropertyDescriptor(t,r)})),e},Q={},Y={get:function(t,e){if(e===B)return t;var r=b(t);if(!l(r,e))return function(t,e,r){var n,o=I(e,r);return o?"value"in o?o.value:null===(n=o.get)||void 0===n?void 0:n.call(t.k):void 0}(t,r,e);var n=r[e];return t.I||!u(n)?n:n===z(t.t,e)?(K(t),t.o[e]=M(t.A.h,n,t)):n},has:function(t,e){return e in b(t)},ownKeys:function(t){return Reflect.ownKeys(b(t))},set:function(t,e,r){var n=I(b(t),e);if(null==n?void 0:n.set)return n.set.call(t.k,r),!0;if(!t.P){var o=z(b(t),e),i=null==o?void 0:o[B];if(i&&i.t===r)return t.o[e]=r,t.D[e]=!1,!0;if(y(r,o)&&(void 0!==r||l(t.t,e)))return!0;K(t),R(t)}return t.o[e]===r&&"number"!=typeof r||(t.o[e]=r,t.D[e]=!0,!0)},deleteProperty:function(t,e){return void 0!==z(t.t,e)||e in t.t?(t.D[e]=!1,K(t),R(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var r=b(t),n=Reflect.getOwnPropertyDescriptor(r,e);return n?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:n.enumerable,value:r[e]}:n},defineProperty:function(){o(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){o(12)}},Z={};c(Y,(function(t,e){Z[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Z.deleteProperty=function(t,e){return Y.deleteProperty.call(this,t[0],e)},Z.set=function(t,e,r){return Y.set.call(this,t[0],e,r,t[0])};var tt=function(){function t(t){var e=this;this.O=T,this.F=!0,this.produce=function(t,r,i){if("function"==typeof t&&"function"!=typeof r){var f=r;r=t;var c=e;return function(t){var e=this;void 0===t&&(t=f);for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return c.produce(t,(function(t){var n;return(n=r).call.apply(n,[e,t].concat(o))}))}}var a;if("function"!=typeof r&&o(6),void 0!==i&&"function"!=typeof i&&o(7),u(t)){var l=D(e),s=M(e,t,void 0),p=!0;try{a=r(s),p=!1}finally{p?S(l):A(l)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(t){return j(l,i),F(t,l)}),(function(t){throw S(l),t})):(j(l,i),F(a,l))}if(!t||"object"!=n(t)){if((a=r(t))===X)return;return void 0===a&&(a=t),e.F&&m(a,!0),a}o(21,t)},this.produceWithPatches=function(t,r){return"function"==typeof t?function(r){for(var n=arguments.length,o=Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return e.produceWithPatches(r,(function(e){return t.apply(void 0,[e].concat(o))}))}:[e.produce(t,r,(function(t,e){n=t,o=e})),n,o];var n,o},"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze)}var e=t.prototype;return e.createDraft=function(t){u(t)||o(8),i(t)&&(t=C(t));var e=D(this),r=M(this,t,void 0);return r[B].C=!0,A(e),r},e.finishDraft=function(t,e){var r=(t&&t[B]).A;return j(r,e),F(void 0,r)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!T&&o(20),this.O=t},e.applyPatches=function(t,e){var r;for(r=e.length-1;r>=0;r--){var n=e[r];if(0===n.path.length&&"replace"===n.op){t=n.value;break}}var o=g("Patches").$;return i(t)?o(t,e):this.produce(t,(function(t){return o(t,e.slice(r+1))}))},t}(),et=new tt;et.produce,et.produceWithPatches.bind(et),et.setAutoFreeze.bind(et),et.setUseProxies.bind(et),et.applyPatches.bind(et),et.createDraft.bind(et),et.finishDraft.bind(et)}}]);