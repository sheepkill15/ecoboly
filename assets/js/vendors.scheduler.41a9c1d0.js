/*! For license information please see vendors.scheduler.41a9c1d0.js.LICENSE.txt */
(self.webpackChunkweb=self.webpackChunkweb||[]).push([[905],{33963:function(e,n){"use strict";function t(e){return(t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r,o,a,l;if("object"===("undefined"===typeof performance?"undefined":t(performance))&&"function"===typeof performance.now){var i=performance;n.unstable_now=function(){return i.now()}}else{var u=Date,s=u.now();n.unstable_now=function(){return u.now()-s}}if("undefined"===typeof window||"function"!==typeof MessageChannel){var c=null,f=null,b=function e(){if(null!==c)try{var t=n.unstable_now();c(!0,t),c=null}catch(r){throw setTimeout(e,0),r}};r=function(e){null!==c?setTimeout(r,0,e):(c=e,setTimeout(b,0))},o=function(e,n){f=setTimeout(e,n)},a=function(){clearTimeout(f)},n.unstable_shouldYield=function(){return!1},l=n.unstable_forceFrameRate=function(){}}else{var p=window.setTimeout,d=window.clearTimeout;if("undefined"!==typeof console){var y=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!==typeof y&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var m=!1,v=null,w=-1,h=5,k=0;n.unstable_shouldYield=function(){return n.unstable_now()>=k},l=function(){},n.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):h=0<e?Math.floor(1e3/e):5};var _=new MessageChannel,T=_.port2;_.port1.onmessage=function(){if(null!==v){var e=n.unstable_now();k=e+h;try{v(!0,e)?T.postMessage(null):(m=!1,v=null)}catch(t){throw T.postMessage(null),t}}else m=!1},r=function(e){v=e,m||(m=!0,T.postMessage(null))},o=function(e,t){w=p((function(){e(n.unstable_now())}),t)},a=function(){d(w),w=-1}}function g(e,n){var t=e.length;e.push(n);e:for(;;){var r=t-1>>>1,o=e[r];if(!(void 0!==o&&0<P(o,n)))break e;e[r]=n,e[t]=o,t=r}}function x(e){return void 0===(e=e[0])?null:e}function C(e){var n=e[0];if(void 0!==n){var t=e.pop();if(t!==n){e[0]=t;e:for(var r=0,o=e.length;r<o;){var a=2*(r+1)-1,l=e[a],i=a+1,u=e[i];if(void 0!==l&&0>P(l,t))void 0!==u&&0>P(u,l)?(e[r]=u,e[i]=t,r=i):(e[r]=l,e[a]=t,r=a);else{if(!(void 0!==u&&0>P(u,t)))break e;e[r]=u,e[i]=t,r=i}}}return n}return null}function P(e,n){var t=e.sortIndex-n.sortIndex;return 0!==t?t:e.id-n.id}var F=[],I=[],M=1,S=null,j=3,A=!1,L=!1,q=!1;function R(e){for(var n=x(I);null!==n;){if(null===n.callback)C(I);else{if(!(n.startTime<=e))break;C(I),n.sortIndex=n.expirationTime,g(F,n)}n=x(I)}}function Y(e){if(q=!1,R(e),!L)if(null!==x(F))L=!0,r(E);else{var n=x(I);null!==n&&o(Y,n.startTime-e)}}function E(e,t){L=!1,q&&(q=!1,a()),A=!0;var r=j;try{for(R(t),S=x(F);null!==S&&(!(S.expirationTime>t)||e&&!n.unstable_shouldYield());){var l=S.callback;if("function"===typeof l){S.callback=null,j=S.priorityLevel;var i=l(S.expirationTime<=t);t=n.unstable_now(),"function"===typeof i?S.callback=i:S===x(F)&&C(F),R(t)}else C(F);S=x(F)}if(null!==S)var u=!0;else{var s=x(I);null!==s&&o(Y,s.startTime-t),u=!1}return u}finally{S=null,j=r,A=!1}}var N=l;n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(e){e.callback=null},n.unstable_continueExecution=function(){L||A||(L=!0,r(E))},n.unstable_getCurrentPriorityLevel=function(){return j},n.unstable_getFirstCallbackNode=function(){return x(F)},n.unstable_next=function(e){switch(j){case 1:case 2:case 3:var n=3;break;default:n=j}var t=j;j=n;try{return e()}finally{j=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=N,n.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var t=j;j=e;try{return n()}finally{j=t}},n.unstable_scheduleCallback=function(e,l,i){var u=n.unstable_now();switch("object"===t(i)&&null!==i?i="number"===typeof(i=i.delay)&&0<i?u+i:u:i=u,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:M++,callback:l,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>u?(e.sortIndex=i,g(I,e),null===x(F)&&e===x(I)&&(q?a():q=!0,o(Y,i-u))):(e.sortIndex=s,g(F,e),L||A||(L=!0,r(E))),e},n.unstable_wrapCallback=function(e){var n=j;return function(){var t=j;j=n;try{return e.apply(this,arguments)}finally{j=t}}}},39096:function(e,n,t){"use strict";e.exports=t(33963)}}]);