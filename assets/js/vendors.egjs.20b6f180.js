/*! For license information please see vendors.egjs.20b6f180.js.LICENSE.txt */
(self.webpackChunkweb=self.webpackChunkweb||[]).push([[455],{20754:function(t,e,n){"use strict";function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a,u="function"!==typeof Object.assign?function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(void 0!==i&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign,c=["","webkit","Moz","MS","ms","o"],h="undefined"===typeof document?{style:{}}:document.createElement("div"),l=Math.round,p=Math.abs,f=Date.now;function v(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<c.length;){if((i=(n=c[o])?n+r:e)in t)return i;o++}}a="undefined"===typeof window?{}:window;var d=v(h.style,"touchAction"),m=void 0!==d;var g="compute",y="auto",T="manipulation",E="none",b="pan-x",w="pan-y",I=function(){if(!m)return!1;var t={},e=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach((function(n){return t[n]=!e||a.CSS.supports("touch-action",n)})),t}(),A="ontouchstart"in a,S=void 0!==v(a,"PointerEvent"),P=A&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),C="touch",_="mouse",D=16,O=24,x=["x","y"],R=["clientX","clientY"];function M(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(void 0!==t.length)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function N(t,e){return"function"===i(t)?t.apply(e&&e[0]||void 0,e):t}function z(t,e){return t.indexOf(e)>-1}var X=function(){function t(t,e){this.manager=t,this.set(e)}var e=t.prototype;return e.set=function(t){t===g&&(t=this.compute()),m&&this.manager.element.style&&I[t]&&(this.manager.element.style[d]=t),this.actions=t.toLowerCase().trim()},e.update=function(){this.set(this.manager.options.touchAction)},e.compute=function(){var t=[];return M(this.manager.recognizers,(function(e){N(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))})),function(t){if(z(t,E))return E;var e=z(t,b),n=z(t,w);return e&&n?E:e||n?e?b:w:z(t,T)?T:y}(t.join(" "))},e.preventDefaults=function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=z(i,E)&&!I.none,o=z(i,w)&&!I["pan-y"],s=z(i,b)&&!I["pan-x"];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}if(!s||!o)return r||o&&6&n||s&&n&O?this.preventSrc(e):void 0}},e.preventSrc=function(t){this.manager.session.prevented=!0,t.preventDefault()},t}();function Y(t,e){for(;t;){if(t===e)return!0;t=t.parentNode}return!1}function F(t){var e=t.length;if(1===e)return{x:l(t[0].clientX),y:l(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:l(n/e),y:l(i/e)}}function k(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:l(t.pointers[n].clientX),clientY:l(t.pointers[n].clientY)},n++;return{timeStamp:f(),pointers:e,center:F(e),deltaX:t.deltaX,deltaY:t.deltaY}}function W(t,e,n){n||(n=x);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function q(t,e,n){n||(n=x);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function L(t,e){return t===e?1:p(t)>=p(e)?t<0?2:4:e<0?8:D}function H(t,e,n){return{x:e/t||0,y:n/t||0}}function j(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=k(e)),r>1&&!n.firstMultiple?n.firstMultiple=k(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,u=e.center=F(i);e.timeStamp=f(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=q(a,u),e.distance=W(a,u),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};1!==e.eventType&&4!==o.eventType||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=L(e.deltaX,e.deltaY);var c,h,l=H(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=l.x,e.overallVelocityY=l.y,e.overallVelocity=p(l.x)>p(l.y)?l.x:l.y,e.scale=s?(c=s.pointers,W((h=i)[0],h[1],R)/W(c[0],c[1],R)):1,e.rotation=s?function(t,e){return q(e[1],e[0],R)+q(t[1],t[0],R)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,o,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(8!==e.eventType&&(a>25||void 0===s.velocity)){var u=e.deltaX-s.deltaX,c=e.deltaY-s.deltaY,h=H(a,u,c);i=h.x,r=h.y,n=p(h.x)>p(h.y)?h.x:h.y,o=L(u,c),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}(n,e);var v,d=t.element,m=e.srcEvent;Y(v=m.composedPath?m.composedPath()[0]:m.path?m.path[0]:m.target,d)&&(d=v),e.target=d}function U(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=1&e&&i-r===0,s=12&e&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,j(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function V(t){return t.trim().split(/\s+/g)}function G(t,e,n){M(V(e),(function(e){t.addEventListener(e,n,!1)}))}function Z(t,e,n){M(V(e),(function(e){t.removeEventListener(e,n,!1)}))}function B(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||window}var $=function(){function t(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){N(t.options.enable,[t])&&n.handler(e)},this.init()}var e=t.prototype;return e.handler=function(){},e.init=function(){this.evEl&&G(this.element,this.evEl,this.domHandler),this.evTarget&&G(this.target,this.evTarget,this.domHandler),this.evWin&&G(B(this.element),this.evWin,this.domHandler)},e.destroy=function(){this.evEl&&Z(this.element,this.evEl,this.domHandler),this.evTarget&&Z(this.target,this.evTarget,this.domHandler),this.evWin&&Z(B(this.element),this.evWin,this.domHandler)},t}();function J(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}var K={pointerdown:1,pointermove:2,pointerup:4,pointercancel:8,pointerout:8},Q={2:C,3:"pen",4:_,5:"kinect"},tt="pointerdown",et="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(tt="MSPointerDown",et="MSPointerMove MSPointerUp MSPointerCancel");var nt=function(t){function e(){var n,i=e.prototype;return i.evEl=tt,i.evWin=et,(n=t.apply(this,arguments)||this).store=n.manager.session.pointerEvents=[],n}return o(e,t),e.prototype.handler=function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=K[i],o=Q[t.pointerType]||t.pointerType,s=o===C,a=J(e,t.pointerId,"pointerId");1&r&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):12&r&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))},e}($);function it(t){return Array.prototype.slice.call(t,0)}function rt(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];J(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort((function(t,n){return t[e]>n[e]})):i.sort()),i}var ot={touchstart:1,touchmove:2,touchend:4,touchcancel:8},st="touchstart touchmove touchend touchcancel",at=function(t){function e(){var n;return e.prototype.evTarget=st,(n=t.apply(this,arguments)||this).targetIds={},n}return o(e,t),e.prototype.handler=function(t){var e=ot[t.type],n=ut.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:C,srcEvent:t})},e}($);function ut(t,e){var n,i,r=it(t.touches),o=this.targetIds;if(3&e&&1===r.length)return o[r[0].identifier]=!0,[r,r];var s=it(t.changedTouches),a=[],u=this.target;if(i=r.filter((function(t){return Y(t.target,u)})),1===e)for(n=0;n<i.length;)o[i[n].identifier]=!0,n++;for(n=0;n<s.length;)o[s[n].identifier]&&a.push(s[n]),12&e&&delete o[s[n].identifier],n++;return a.length?[rt(i.concat(a),"identifier",!0),a]:void 0}var ct={mousedown:1,mousemove:2,mouseup:4},ht="mousedown",lt="mousemove mouseup",pt=function(t){function e(){var n,i=e.prototype;return i.evEl=ht,i.evWin=lt,(n=t.apply(this,arguments)||this).pressed=!1,n}return o(e,t),e.prototype.handler=function(t){var e=ct[t.type];1&e&&0===t.button&&(this.pressed=!0),2&e&&1!==t.which&&(e=4),this.pressed&&(4&e&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:_,srcEvent:t}))},e}($);function ft(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY},i=this.lastTouches;this.lastTouches.push(n);setTimeout((function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)}),2500)}}function vt(t,e){1&t?(this.primaryTouch=e.changedPointers[0].identifier,ft.call(this,e)):12&t&&ft.call(this,e)}function dt(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=25&&s<=25)return!0}return!1}var mt=function(){return function(t){function e(e,n){var i;return(i=t.call(this,e,n)||this).handler=function(t,e,n){var r=n.pointerType===C,o=n.pointerType===_;if(!(o&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(r)vt.call(s(s(i)),e,n);else if(o&&dt.call(s(s(i)),n))return;i.callback(t,e,n)}},i.touch=new at(i.manager,i.handler),i.mouse=new pt(i.manager,i.handler),i.primaryTouch=null,i.lastTouches=[],i}return o(e,t),e.prototype.destroy=function(){this.touch.destroy(),this.mouse.destroy()},e}($)}();function gt(t,e,n){return!!Array.isArray(t)&&(M(t,n[e],n),!0)}var yt=32,Tt=1;function Et(t,e){var n=e.manager;return n?n.get(t):t}function bt(t){return 16&t?"cancel":8&t?"end":4&t?"move":2&t?"start":""}var wt=function(){function t(t){void 0===t&&(t={}),this.options=r({enable:!0},t),this.id=Tt++,this.manager=null,this.state=1,this.simultaneous={},this.requireFail=[]}var e=t.prototype;return e.set=function(t){return u(this.options,t),this.manager&&this.manager.touchAction.update(),this},e.recognizeWith=function(t){if(gt(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Et(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},e.dropRecognizeWith=function(t){return gt(t,"dropRecognizeWith",this)||(t=Et(t,this),delete this.simultaneous[t.id]),this},e.requireFailure=function(t){if(gt(t,"requireFailure",this))return this;var e=this.requireFail;return-1===J(e,t=Et(t,this))&&(e.push(t),t.requireFailure(this)),this},e.dropRequireFailure=function(t){if(gt(t,"dropRequireFailure",this))return this;t=Et(t,this);var e=J(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},e.hasRequireFailures=function(){return this.requireFail.length>0},e.canRecognizeWith=function(t){return!!this.simultaneous[t.id]},e.emit=function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<8&&i(e.options.event+bt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=8&&i(e.options.event+bt(n))},e.tryEmit=function(t){if(this.canEmit())return this.emit(t);this.state=yt},e.canEmit=function(){for(var t=0;t<this.requireFail.length;){if(!(33&this.requireFail[t].state))return!1;t++}return!0},e.recognize=function(t){var e=u({},t);if(!N(this.options.enable,[this,e]))return this.reset(),void(this.state=yt);56&this.state&&(this.state=1),this.state=this.process(e),30&this.state&&this.tryEmit(e)},e.process=function(t){},e.getTouchAction=function(){},e.reset=function(){},t}(),It=function(t){function e(e){var n;return void 0===e&&(e={}),(n=t.call(this,r({event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},e))||this).pTime=!1,n.pCenter=!1,n._timer=null,n._input=null,n.count=0,n}o(e,t);var n=e.prototype;return n.getTouchAction=function(){return[T]},n.process=function(t){var e=this,n=this.options,i=t.pointers.length===n.pointers,r=t.distance<n.threshold,o=t.deltaTime<n.time;if(this.reset(),1&t.eventType&&0===this.count)return this.failTimeout();if(r&&o&&i){if(4!==t.eventType)return this.failTimeout();var s=!this.pTime||t.timeStamp-this.pTime<n.interval,a=!this.pCenter||W(this.pCenter,t.center)<n.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,a&&s?this.count+=1:this.count=1,this._input=t,0===this.count%n.taps)return this.hasRequireFailures()?(this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),n.interval),2):8}return yt},n.failTimeout=function(){var t=this;return this._timer=setTimeout((function(){t.state=yt}),this.options.interval),yt},n.reset=function(){clearTimeout(this._timer)},n.emit=function(){8===this.state&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))},e}(wt),At=function(t){function e(e){return void 0===e&&(e={}),t.call(this,r({pointers:1},e))||this}o(e,t);var n=e.prototype;return n.attrTest=function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},n.process=function(t){var e=this.state,n=t.eventType,i=6&e,r=this.attrTest(t);return i&&(8&n||!r)?16|e:i||r?4&n?8|e:2&e?4|e:2:yt},e}(wt);function St(t){return t===D?"down":8===t?"up":2===t?"left":4===t?"right":""}var Pt=function(t){function e(e){var n;return void 0===e&&(e={}),(n=t.call(this,r({event:"pan",threshold:10,pointers:1,direction:30},e))||this).pX=null,n.pY=null,n}o(e,t);var n=e.prototype;return n.getTouchAction=function(){var t=this.options.direction,e=[];return 6&t&&e.push(w),t&O&&e.push(b),e},n.directionTest=function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(6&e.direction?(r=0===o?1:o<0?2:4,n=o!==this.pX,i=Math.abs(t.deltaX)):(r=0===s?1:s<0?8:D,n=s!==this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},n.attrTest=function(t){return At.prototype.attrTest.call(this,t)&&(2&this.state||!(2&this.state)&&this.directionTest(t))},n.emit=function(e){this.pX=e.deltaX,this.pY=e.deltaY;var n=St(e.direction);n&&(e.additionalEvent=this.options.event+n),t.prototype.emit.call(this,e)},e}(At),Ct=function(t){function e(e){return void 0===e&&(e={}),t.call(this,r({event:"swipe",threshold:10,velocity:.3,direction:30,pointers:1},e))||this}o(e,t);var n=e.prototype;return n.getTouchAction=function(){return Pt.prototype.getTouchAction.call(this)},n.attrTest=function(e){var n,i=this.options.direction;return 30&i?n=e.overallVelocity:6&i?n=e.overallVelocityX:i&O&&(n=e.overallVelocityY),t.prototype.attrTest.call(this,e)&&i&e.offsetDirection&&e.distance>this.options.threshold&&e.maxPointers===this.options.pointers&&p(n)>this.options.velocity&&4&e.eventType},n.emit=function(t){var e=St(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)},e}(At),_t=function(t){function e(e){return void 0===e&&(e={}),t.call(this,r({event:"pinch",threshold:0,pointers:2},e))||this}o(e,t);var n=e.prototype;return n.getTouchAction=function(){return[E]},n.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.scale-1)>this.options.threshold||2&this.state)},n.emit=function(e){if(1!==e.scale){var n=e.scale<1?"in":"out";e.additionalEvent=this.options.event+n}t.prototype.emit.call(this,e)},e}(At),Dt=function(t){function e(e){return void 0===e&&(e={}),t.call(this,r({event:"rotate",threshold:0,pointers:2},e))||this}o(e,t);var n=e.prototype;return n.getTouchAction=function(){return[E]},n.attrTest=function(e){return t.prototype.attrTest.call(this,e)&&(Math.abs(e.rotation)>this.options.threshold||2&this.state)},e}(At),Ot=function(t){function e(e){var n;return void 0===e&&(e={}),(n=t.call(this,r({event:"press",pointers:1,time:251,threshold:9},e))||this)._timer=null,n._input=null,n}o(e,t);var n=e.prototype;return n.getTouchAction=function(){return[y]},n.process=function(t){var e=this,n=this.options,i=t.pointers.length===n.pointers,r=t.distance<n.threshold,o=t.deltaTime>n.time;if(this._input=t,!r||!i||12&t.eventType&&!o)this.reset();else if(1&t.eventType)this.reset(),this._timer=setTimeout((function(){e.state=8,e.tryEmit()}),n.time);else if(4&t.eventType)return 8;return yt},n.reset=function(){clearTimeout(this._timer)},n.emit=function(t){8===this.state&&(t&&4&t.eventType?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=f(),this.manager.emit(this.options.event,this._input)))},e}(wt),xt={domEvents:!1,touchAction:g,enable:!0,inputTarget:null,inputClass:null,cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},Rt=[[Dt,{enable:!1}],[_t,{enable:!1},["rotate"]],[Ct,{direction:6}],[Pt,{direction:6},["swipe"]],[It],[It,{event:"doubletap",taps:2},["tap"]],[Ot]];function Mt(t,e){var n,i=t.element;i.style&&(M(t.options.cssProps,(function(r,o){n=v(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""})),e||(t.oldCssProps={}))}var Nt=function(){function t(t,e){var n,i=this;this.options=u({},xt,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(S?nt:P?at:A?mt:pt))(n,U),this.touchAction=new X(this,this.options.touchAction),Mt(this,!0),M(this.options.recognizers,(function(t){var e=i.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])}),this)}var e=t.prototype;return e.set=function(t){return u(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},e.stop=function(t){this.session.stopped=t?2:1},e.recognize=function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&8&r.state)&&(e.curRecognizer=null,r=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!==r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&14&n.state&&(e.curRecognizer=n,r=n),o++}},e.get=function(t){if(t instanceof wt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event===t)return e[n];return null},e.add=function(t){if(gt(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},e.remove=function(t){if(gt(t,"remove",this))return this;var e=this.get(t);if(t){var n=this.recognizers,i=J(n,e);-1!==i&&(n.splice(i,1),this.touchAction.update())}return this},e.on=function(t,e){if(void 0===t||void 0===e)return this;var n=this.handlers;return M(V(t),(function(t){n[t]=n[t]||[],n[t].push(e)})),this},e.off=function(t,e){if(void 0===t)return this;var n=this.handlers;return M(V(t),(function(t){e?n[t]&&n[t].splice(J(n[t],e),1):delete n[t]})),this},e.emit=function(t,e){this.options.domEvents&&function(t,e){var n=document.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},e.destroy=function(){this.element&&Mt(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null},t}(),zt={touchstart:1,touchmove:2,touchend:4,touchcancel:8},Xt="touchstart",Yt="touchstart touchmove touchend touchcancel",Ft=function(t){function e(){var n,i=e.prototype;return i.evTarget=Xt,i.evWin=Yt,(n=t.apply(this,arguments)||this).started=!1,n}return o(e,t),e.prototype.handler=function(t){var e=zt[t.type];if(1===e&&(this.started=!0),this.started){var n=kt.call(this,t,e);12&e&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:C,srcEvent:t})}},e}($);function kt(t,e){var n=it(t.touches),i=it(t.changedTouches);return 12&e&&(n=rt(n.concat(i),"identifier",!0)),[n,i]}function Wt(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=window.console&&(window.console.warn||window.console.log);return r&&r.call(window.console,i,n),t.apply(this,arguments)}}var qt=Wt((function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&void 0===t[i[r]])&&(t[i[r]]=e[i[r]]),r++;return t}),"extend","Use `assign`."),Lt=Wt((function(t,e){return qt(t,e,!0)}),"merge","Use `assign`.");function Ht(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&u(i,n)}function jt(t,e){return function(){return t.apply(e,arguments)}}var Ut=function(){var t=function(t,e){return void 0===e&&(e={}),new Nt(t,r({recognizers:Rt.concat()},e))};return t.VERSION="2.0.17-rc",t.DIRECTION_ALL=30,t.DIRECTION_DOWN=D,t.DIRECTION_LEFT=2,t.DIRECTION_RIGHT=4,t.DIRECTION_UP=8,t.DIRECTION_HORIZONTAL=6,t.DIRECTION_VERTICAL=O,t.DIRECTION_NONE=1,t.DIRECTION_DOWN=D,t.INPUT_START=1,t.INPUT_MOVE=2,t.INPUT_END=4,t.INPUT_CANCEL=8,t.STATE_POSSIBLE=1,t.STATE_BEGAN=2,t.STATE_CHANGED=4,t.STATE_ENDED=8,t.STATE_RECOGNIZED=8,t.STATE_CANCELLED=16,t.STATE_FAILED=yt,t.Manager=Nt,t.Input=$,t.TouchAction=X,t.TouchInput=at,t.MouseInput=pt,t.PointerEventInput=nt,t.TouchMouseInput=mt,t.SingleTouchInput=Ft,t.Recognizer=wt,t.AttrRecognizer=At,t.Tap=It,t.Pan=Pt,t.Swipe=Ct,t.Pinch=_t,t.Rotate=Dt,t.Press=Ot,t.on=G,t.off=Z,t.each=M,t.merge=Lt,t.extend=qt,t.bindFn=jt,t.assign=u,t.inherit=Ht,t.bindFn=jt,t.prefixed=v,t.toArray=it,t.inArray=J,t.uniqueArray=rt,t.splitStr=V,t.boolOrFn=N,t.hasParent=Y,t.addEventListeners=G,t.removeEventListeners=Z,t.defaults=u({},xt,{preset:Rt}),t}();Ut.defaults;e.ZP=Ut}}]);