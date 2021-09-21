"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[571],{52540:function(t,e,n){n.d(e,{nj:function(){return et},xf:function(){return kt}});var r=n(44326),o=n(15166),i=n(57218),a=n(18051),u=n(90780),c=n(63284),l=n(62721),s=["android_ripple","pressColor","pressOpacity","style"];function f(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?f(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function b(){return b=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},b.apply(this,arguments)}var h="android"===a.Z.OS&&a.Z.Version>=21;function v(t){var e=t.android_ripple,n=t.pressColor,o=void 0===n?"rgba(0, 0, 0, .32)":n,i=t.pressOpacity,a=t.style,u=d(t,s);return r.createElement(l.Z,b({android_ripple:h?p({color:o},e):void 0,style:function(t){var e=t.pressed;return[{opacity:e&&!h?i:1},"function"===typeof a?a({pressed:e}):a]}},u))}function g(t){return g="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function O(t,e){return O=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},O(t,e)}function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=E(t);if(e){var o=E(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return j(this,n)}}function j(t,e){if(e&&("object"===g(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return P(t)}function P(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function E(t){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},E(t)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var T=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&O(t,e)}(l,t);var e,n,a,u=S(l);function l(){var t;m(this,l);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return x(P(t=u.call.apply(u,[this].concat(n))),"getActiveOpacity",(function(t,e,n){if(e.length>1){var r=e.map((function(t,e){return e}));return t.interpolate({inputRange:r,outputRange:r.map((function(t){return t===n?1:0}))})}return 1})),x(P(t),"getInactiveOpacity",(function(t,e,n){if(e.length>1){var r=e.map((function(t,e){return e}));return t.interpolate({inputRange:r,outputRange:r.map((function(t){return t===n?0:1}))})}return 0})),t}return e=l,(n=[{key:"render",value:function(){var t=this.props,e=t.route,n=t.position,a=t.navigationState,u=t.renderLabel,l=t.renderIcon,s=t.renderBadge,f=t.getLabelText,p=t.getTestID,y=t.getAccessibilityLabel,d=t.getAccessible,b=t.activeColor,h=t.inactiveColor,g=t.pressColor,m=t.pressOpacity,w=t.labelStyle,O=t.style,S=t.onLayout,j=t.onPress,P=t.onLongPress,E=a.routes.indexOf(e),x=a.index===E,T=i.Z.flatten(w||{}).color,Z=void 0!==b?b:"string"===typeof T?T:"rgba(255, 255, 255, 1)",C=void 0!==h?h:"string"===typeof T?T:"rgba(255, 255, 255, 0.7)",k=this.getActiveOpacity(n,a.routes,E),D=this.getInactiveOpacity(n,a.routes,E),_=null,I=null;if(l){var L=l({route:e,focused:!0,color:Z}),A=l({route:e,focused:!1,color:C});null!=A&&null!=L&&(_=r.createElement(c.Z,{style:R.icon},r.createElement(o.Z.View,{style:{opacity:D}},A),r.createElement(o.Z.View,{style:[i.Z.absoluteFill,{opacity:k}]},L)))}var M=void 0!==u?u:function(t){var e=t.route,n=t.color,i=f({route:e});return"string"===typeof i?r.createElement(o.Z.Text,{style:[R.label,_?{marginTop:0}:null,w,{color:n}]},i):i};if(M){var W=M({route:e,focused:!0,color:Z}),V=M({route:e,focused:!1,color:C});I=r.createElement(c.Z,null,r.createElement(o.Z.View,{style:{opacity:D}},V),r.createElement(o.Z.View,{style:[i.Z.absoluteFill,{opacity:k}]},W))}var B=i.Z.flatten(O),z=void 0!==(null===B||void 0===B?void 0:B.width)?null:{flex:1},F={route:e},H=y(F);H="undefined"!==typeof H?H:f(F);var X=s?s(F):null;return r.createElement(v,{android_ripple:{borderless:!0},testID:p(F),accessible:d(F),accessibilityLabel:H,accessibilityRole:"tab",accessibilityState:{selected:x},accessibilityStates:x?["selected"]:[],pressColor:g,pressOpacity:m,delayPressIn:0,onLayout:S,onPress:j,onLongPress:P,style:[R.pressable,z]},r.createElement(c.Z,{pointerEvents:"none",style:[R.item,B]},_,I,null!=X?r.createElement(c.Z,{style:R.badge},X):null))}}])&&w(e.prototype,n),a&&w(e,a),l}(r.Component),R=i.Z.create({label:{margin:4,backgroundColor:"transparent",textTransform:"uppercase"},icon:{margin:2},item:{flex:1,alignItems:"center",justifyContent:"center",padding:10,minHeight:48},badge:{position:"absolute",top:0,right:0},pressable:{backgroundColor:"transparent"}}),Z=n(48773);function C(t){return C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function k(t){return function(t){if(Array.isArray(t))return D(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function L(t,e){return L=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},L(t,e)}function A(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=V(t);if(e){var o=V(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return M(this,n)}}function M(t,e){if(e&&("object"===C(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return W(t)}function W(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function V(t){return V=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},V(t)}function B(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&L(t,e)}(l,t);var e,n,i,c=A(l);function l(){var t;_(this,l);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return B(W(t=c.call.apply(c,[this].concat(n))),"fadeInIndicator",(function(){var e=t.props,n=e.navigationState,r=e.layout,i=e.width,a=e.getTabWidth;!t.isIndicatorShown&&"auto"===i&&r.width&&n.routes.every((function(t,e){return a(e)}))&&(t.isIndicatorShown=!0,o.Z.timing(t.opacity,{toValue:1,duration:150,easing:Z.Z.in(Z.Z.linear),useNativeDriver:!0}).start())})),B(W(t),"isIndicatorShown",!1),B(W(t),"opacity",new o.Z.Value("auto"===t.props.width?0:1)),B(W(t),"getTranslateX",(function(t,e,n){var r=e.map((function(t,e){return e})),i=e.reduce((function(t,e,r){return 0===r?[0]:[].concat(k(t),[t[r-1]+n(r-1)])}),[]),a=t.interpolate({inputRange:r,outputRange:i,extrapolate:"clamp"});return o.Z.multiply(a,u.Z.isRTL?-1:1)})),t}return e=l,(n=[{key:"componentDidMount",value:function(){this.fadeInIndicator()}},{key:"componentDidUpdate",value:function(){this.fadeInIndicator()}},{key:"render",value:function(){var t=this.props,e=t.position,n=t.navigationState,i=t.getTabWidth,u=t.width,c=t.style,l=t.layout,s=n.routes,f=[];if(l.width){var p=s.length>1?this.getTranslateX(e,s,i):0;f.push({translateX:p})}if("auto"===u){var y=s.map((function(t,e){return e})),d=y.map(i);f.push({scaleX:s.length>1?e.interpolate({inputRange:y,outputRange:d,extrapolate:"clamp"}):d[0]},{translateX:.5})}return r.createElement(o.Z.View,{style:[F.indicator,{width:"auto"===u?1:u},l.width&&"macos"!==a.Z.OS?{left:0}:{left:"".concat(100/s.length*n.index,"%")},{transform:f},"auto"===u?{opacity:this.opacity}:null,c]})}}])&&I(e.prototype,n),i&&I(e,i),l}(r.Component),F=i.Z.create({indicator:{backgroundColor:"#ffeb3b",position:"absolute",left:0,bottom:0,right:0,height:2}});function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function X(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(Object(n),!0).forEach((function(e){U(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function U(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function N(t){return N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},N(t)}function $(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function G(t,e){return G=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},G(t,e)}function J(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Y(t);if(e){var o=Y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return K(this,n)}}function K(t,e){if(e&&("object"===N(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Q(t)}function Q(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Y(t){return Y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},Y(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var et=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&G(t,e)}(f,t);var e,n,l,s=J(f);function f(){var t;$(this,f);for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return tt(Q(t=s.call.apply(s,[this].concat(n))),"state",{layout:{width:0,height:0},tabWidths:{}}),tt(Q(t),"measuredTabWidths",{}),tt(Q(t),"scrollAmount",new o.Z.Value(0)),tt(Q(t),"scrollViewRef",r.createRef()),tt(Q(t),"getFlattenedTabWidth",(function(t){var e=i.Z.flatten(t);return e?e.width:void 0})),tt(Q(t),"getComputedTabWidth",(function(t,e,n,r,o,i){if("auto"===i)return o[n[t].key]||0;switch(N(i)){case"number":return i;case"string":if(i.endsWith("%")){var a=parseFloat(i);if(Number.isFinite(a))return e.width*(a/100)}}return r?e.width/5*2:e.width/n.length})),tt(Q(t),"getMaxScrollDistance",(function(t,e){return t-e})),tt(Q(t),"getTabBarWidth",(function(e,n){var r=n.layout,o=n.tabWidths,i=e.scrollEnabled,a=e.tabStyle,u=e.navigationState.routes;return u.reduce((function(e,n,c){return e+t.getComputedTabWidth(c,r,u,i,o,t.getFlattenedTabWidth(a))}),0)})),tt(Q(t),"normalizeScrollValue",(function(e,n,r){var o=n.layout,i=t.getTabBarWidth(e,n),c=t.getMaxScrollDistance(i,o.width),l=Math.max(Math.min(r,c),0);return"android"===a.Z.OS&&u.Z.isRTL?c-l:l})),tt(Q(t),"getScrollAmount",(function(e,n,r){var o=n.layout,i=n.tabWidths,a=e.scrollEnabled,u=e.tabStyle,c=e.navigationState.routes,l=Array.from({length:r+1}).reduce((function(e,n,l){var s=t.getComputedTabWidth(l,o,c,a,i,t.getFlattenedTabWidth(u));return e+(r===l?s/2:s)}),0)-o.width/2;return t.normalizeScrollValue(e,n,l)})),tt(Q(t),"resetScroll",(function(e){var n;t.props.scrollEnabled&&(null===(n=t.scrollViewRef.current)||void 0===n||n.scrollTo({x:t.getScrollAmount(t.props,t.state,e),animated:!0}))})),tt(Q(t),"handleLayout",(function(e){var n=e.nativeEvent.layout,r=n.height,o=n.width;t.state.layout.width===o&&t.state.layout.height===r||t.setState({layout:{height:r,width:o}})})),tt(Q(t),"getTranslateX",(function(t,e){return o.Z.multiply("android"===a.Z.OS&&u.Z.isRTL?o.Z.add(e,o.Z.multiply(t,-1)):t,u.Z.isRTL?1:-1)})),t}return e=f,(n=[{key:"componentDidUpdate",value:function(t,e){var n=this.props.navigationState,r=this.state,o=r.layout,i=r.tabWidths;if(t.navigationState.routes.length!==n.routes.length||t.navigationState.index!==n.index||e.layout.width!==o.width||e.tabWidths!==i){if("auto"===this.getFlattenedTabWidth(this.props.tabStyle)&&(!o.width||!n.routes.every((function(t){return"number"===typeof i[t.key]}))))return;this.resetScroll(n.index)}}},{key:"render",value:function(){var t=this,e=this.props,n=e.position,i=e.navigationState,a=e.jumpTo,u=e.scrollEnabled,l=e.bounces,s=e.getAccessibilityLabel,f=e.getAccessible,p=e.getLabelText,y=e.getTestID,d=e.renderBadge,b=e.renderIcon,h=e.renderLabel,v=e.renderTabBarItem,g=e.activeColor,m=e.inactiveColor,w=e.pressColor,O=e.pressOpacity,S=e.onTabPress,j=e.onTabLongPress,P=e.tabStyle,E=e.labelStyle,x=e.indicatorStyle,R=e.contentContainerStyle,Z=e.style,C=e.indicatorContainerStyle,k=this.state,D=k.layout,_=k.tabWidths,I=i.routes,L="auto"===this.getFlattenedTabWidth(P),A=this.getTabBarWidth(this.props,this.state),M="".concat(40*I.length,"%"),W=this.getTranslateX(this.scrollAmount,this.getMaxScrollDistance(A,D.width));return r.createElement(o.Z.View,{onLayout:this.handleLayout,style:[nt.tabBar,Z]},r.createElement(o.Z.View,{pointerEvents:"none",style:[nt.indicatorContainer,u?{transform:[{translateX:W}]}:null,A?{width:A}:u?{width:M}:null,C]},this.props.renderIndicator({position:n,layout:D,navigationState:i,jumpTo:a,width:L?"auto":"".concat(100/I.length,"%"),style:x,getTabWidth:function(e){return t.getComputedTabWidth(e,D,I,u,_,t.getFlattenedTabWidth(P))}})),r.createElement(c.Z,{style:nt.scroll},r.createElement(o.Z.ScrollView,{horizontal:!0,accessibilityRole:"tablist",keyboardShouldPersistTaps:"handled",scrollEnabled:u,bounces:l,alwaysBounceHorizontal:!1,scrollsToTop:!1,showsHorizontalScrollIndicator:!1,automaticallyAdjustContentInsets:!1,overScrollMode:"never",contentContainerStyle:[nt.tabContent,u?{width:A||M}:nt.container,R],scrollEventThrottle:16,onScroll:o.Z.event([{nativeEvent:{contentOffset:{x:this.scrollAmount}}}],{useNativeDriver:!0}),ref:this.scrollViewRef},I.map((function(e){var o={key:e.key,position:n,route:e,navigationState:i,getAccessibilityLabel:s,getAccessible:f,getLabelText:p,getTestID:y,renderBadge:d,renderIcon:b,renderLabel:h,activeColor:g,inactiveColor:m,pressColor:w,pressOpacity:O,onLayout:L?function(n){t.measuredTabWidths[e.key]=n.nativeEvent.layout.width,I.every((function(e){return"number"===typeof t.measuredTabWidths[e.key]}))&&t.setState({tabWidths:X({},t.measuredTabWidths)})}:void 0,onPress:function(){var n={route:e,defaultPrevented:!1,preventDefault:function(){n.defaultPrevented=!0}};null===S||void 0===S||S(n),n.defaultPrevented||t.props.jumpTo(e.key)},onLongPress:function(){return null===j||void 0===j?void 0:j({route:e})},labelStyle:E,style:P};return v?v(o):r.createElement(T,o)})))))}}])&&q(e.prototype,n),l&&q(e,l),f}(r.Component);tt(et,"defaultProps",{getLabelText:function(t){return t.route.title},getAccessible:function(t){var e=t.route;return"undefined"===typeof e.accessible||e.accessible},getAccessibilityLabel:function(t){var e=t.route;return"string"===typeof e.accessibilityLabel?e.accessibilityLabel:"string"===typeof e.title?e.title:void 0},getTestID:function(t){return t.route.testID},renderIndicator:function(t){return r.createElement(z,t)}});var nt=i.Z.create({container:{flex:1},scroll:{overflow:a.Z.select({default:"scroll",web:void 0})},tabBar:{backgroundColor:"#2196f3",elevation:4,shadowColor:"black",shadowOpacity:.1,shadowRadius:i.Z.hairlineWidth,shadowOffset:{height:i.Z.hairlineWidth,width:0},zIndex:1},tabContent:{flexDirection:"row",flexWrap:"nowrap"},indicatorContainer:{position:"absolute",top:0,left:0,right:0,bottom:0}});function rt(t){return rt="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt(t)}function ot(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function at(t,e){return at=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},at(t,e)}function ut(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ct(this,n)}}function ct(t,e){if(e&&("object"===rt(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return lt(t)}function lt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function st(t){return st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},st(t)}function ft(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var pt=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&at(t,e)}(u,t);var e,n,o,a=ut(u);function u(){var t;ot(this,u);for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return ft(lt(t=a.call.apply(a,[this].concat(n))),"state",{loading:Math.abs(t.props.navigationState.index-t.props.index)>t.props.lazyPreloadDistance}),ft(lt(t),"timerHandler",void 0),ft(lt(t),"unsubscribe",null),ft(lt(t),"handleEnter",(function(e){e===t.props.index&&t.setState((function(t){return t.loading?{loading:!1}:null}))})),t}return e=u,o=[{key:"getDerivedStateFromProps",value:function(t,e){return e.loading&&Math.abs(t.navigationState.index-t.index)<=t.lazyPreloadDistance?{loading:!1}:null}}],(n=[{key:"componentDidMount",value:function(){var t=this;this.props.lazy?this.unsubscribe=this.props.addEnterListener(this.handleEnter):this.state.loading&&(this.timerHandler=setTimeout((function(){return t.setState({loading:!1})}),0))}},{key:"componentDidUpdate",value:function(t,e){var n,r;this.props.lazy===t.lazy&&this.state.loading===e.loading||(this.props.lazy&&this.state.loading?(null===(n=this.unsubscribe)||void 0===n||n.call(this),this.unsubscribe=this.props.addEnterListener(this.handleEnter)):null===(r=this.unsubscribe)||void 0===r||r.call(this))}},{key:"componentWillUnmount",value:function(){var t;null===(t=this.unsubscribe)||void 0===t||t.call(this),this.timerHandler&&(clearTimeout(this.timerHandler),this.timerHandler=void 0)}},{key:"render",value:function(){var t=this.props,e=t.navigationState,n=t.index,o=t.layout,a=t.style,u=this.state.loading,l=e.index===n;return r.createElement(c.Z,{accessibilityElementsHidden:!l,importantForAccessibility:l?"auto":"no-hide-descendants",style:[yt.route,o.width?{width:o.width}:l?i.Z.absoluteFill:null,a]},l||o.width?this.props.children({loading:u}):null)}}])&&it(e.prototype,n),o&&it(e,o),u}(r.Component),yt=i.Z.create({route:{flex:1,overflow:"hidden"}}),dt=n(64889),bt=n(1853);var ht=["timing"];function vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function gt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?vt(Object(n),!0).forEach((function(e){mt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function mt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function wt(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function Ot(){return Ot=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ot.apply(this,arguments)}var St={timing:o.Z.spring,stiffness:1e3,damping:500,mass:3,overshootClamping:!0};function jt(t){var e,n,a=t.layout,l=t.keyboardDismissMode,s=void 0===l?"auto":l,f=t.swipeEnabled,p=void 0===f||f,y=t.navigationState,d=t.onIndexChange,b=t.onSwipeStart,h=t.onSwipeEnd,v=t.children,g=t.style,m=y.routes,w=y.index,O=(e=0,void 0===(n=r.useRef()).current&&(n.current=new o.Z.Value(e)),n.current),S=r.useRef([]),j=r.useRef(y),P=r.useRef(a),E=r.useRef(d),x=r.useRef(w),T=r.useRef(),R=a.width/1.75,Z=r.useCallback((function(t){var e=-t*P.current.width,n=St.timing,r=wt(St,ht);o.Z.parallel([n(O,gt(gt({},r),{},{toValue:e,useNativeDriver:!1}))]).start((function(e){e.finished&&(E.current(t),T.current=void 0)})),T.current=t}),[O]);r.useEffect((function(){j.current=y,P.current=a,E.current=d})),r.useEffect((function(){var t=-j.current.index*a.width;O.setValue(t)}),[a.width,O]),r.useEffect((function(){"auto"===s&&dt.Z.dismiss(),a.width&&x.current!==w&&(x.current=w,Z(w))}),[Z,s,a.width,w]);var C=function(t,e){if(!1===p)return!1;var n=u.Z.isRTL?-e.dx:e.dx;return function(t,e){return Math.abs(e.dx)>Math.abs(2*e.dy)&&Math.abs(e.vx)>Math.abs(2*e.vy)}(0,e)&&(n>=12&&x.current>0||n<=-12&&x.current<m.length-1)},k=function(t,e){O.flattenOffset(),null===h||void 0===h||h();var n="number"===typeof T.current?T.current:x.current,r=n;Math.abs(e.dx)>Math.abs(e.dy)&&Math.abs(e.vx)>Math.abs(e.vy)&&(Math.abs(e.dx)>R||Math.abs(e.vx)>.15)&&(r=Math.round(Math.min(Math.max(0,u.Z.isRTL?n+e.dx/Math.abs(e.dx):n-e.dx/Math.abs(e.dx)),m.length-1)),x.current=r),isFinite(r)||(r=n),Z(r)},D=r.useCallback((function(t){return S.current.push(t),function(){var e=S.current.indexOf(t);e>-1&&S.current.splice(e,1)}}),[]),_=r.useCallback((function(t){var e=j.current.routes.findIndex((function(e){return e.key===t}));Z(e)}),[Z]),I=bt.Z.create({onMoveShouldSetPanResponder:C,onMoveShouldSetPanResponderCapture:C,onPanResponderGrant:function(){null===b||void 0===b||b(),"on-drag"===s&&dt.Z.dismiss(),O.stopAnimation(),O.setOffset(O._value)},onPanResponderMove:function(t,e){var n=u.Z.isRTL?-e.dx:e.dx;if(!(n>0&&w<=0||n<0&&w>=m.length-1)){if(a.width){var r=(O._offset+n)/-a.width,o=r>w?Math.ceil(r):Math.floor(r);o!==w&&S.current.forEach((function(t){return t(o)}))}O.setValue(n)}},onPanResponderTerminate:k,onPanResponderRelease:k,onPanResponderTerminationRequest:function(){return!0}}),L=a.width*(m.length-1),A=o.Z.multiply(O.interpolate({inputRange:[-L,0],outputRange:[-L,0],extrapolate:"clamp"}),u.Z.isRTL?-1:1);return v({position:a.width?o.Z.divide(O,-a.width):new o.Z.Value(w),addEnterListener:D,jumpTo:_,render:function(t){return r.createElement(o.Z.View,Ot({style:[Pt.sheet,a.width?{width:m.length*a.width,transform:[{translateX:A}]}:null,g]},I.panHandlers),r.Children.map(t,(function(t,e){var n=m[e],o=e===w;return r.createElement(c.Z,{key:n.key,style:a.width?{width:a.width}:o?i.Z.absoluteFill:null},o||a.width?t:null)})))}})}var Pt=i.Z.create({sheet:{flex:1,flexDirection:"row",alignItems:"stretch"}});function Et(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function xt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Et(Object(n),!0).forEach((function(e){Tt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Et(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Rt(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return Zt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zt(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Zt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ct(){return Ct=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ct.apply(this,arguments)}function kt(t){var e=t.onIndexChange,n=t.navigationState,o=t.renderScene,i=t.initialLayout,a=t.keyboardDismissMode,u=void 0===a?"auto":a,l=t.lazy,s=void 0!==l&&l,f=t.lazyPreloadDistance,p=void 0===f?0:f,y=t.onSwipeStart,d=t.onSwipeEnd,b=t.renderLazyPlaceholder,h=void 0===b?function(){return null}:b,v=t.renderTabBar,g=void 0===v?function(t){return r.createElement(et,t)}:v,m=t.sceneContainerStyle,w=t.style,O=t.swipeEnabled,S=void 0===O||O,j=t.tabBarPosition,P=void 0===j?"top":j,E=Rt(r.useState(xt({width:0,height:0},i)),2),x=E[0],T=E[1];return r.createElement(c.Z,{onLayout:function(t){var e=t.nativeEvent.layout,n=e.height,r=e.width;T((function(t){return t.width===r&&t.height===n?t:{height:n,width:r}}))},style:[Dt.pager,w]},r.createElement(jt,{layout:x,navigationState:n,keyboardDismissMode:u,swipeEnabled:S,onSwipeStart:y,onSwipeEnd:d,onIndexChange:function(t){t!==n.index&&e(t)}},(function(t){var e=t.position,i=t.render,a=t.addEnterListener,u=t.jumpTo,c={position:e,layout:x,jumpTo:u};return r.createElement(r.Fragment,null,"top"===P&&g(xt(xt({},c),{},{navigationState:n})),i(n.routes.map((function(t,e){return r.createElement(pt,Ct({},c,{addEnterListener:a,key:t.key,index:e,lazy:"function"===typeof s?s({route:t}):s,lazyPreloadDistance:p,navigationState:n,style:m}),(function(e){return e.loading?h({route:t}):o(xt(xt({},c),{},{route:t}))}))}))),"bottom"===P&&g(xt(xt({},c),{},{navigationState:n})))})))}var Dt=i.Z.create({pager:{flex:1,overflow:"hidden"}});function _t(t){return _t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_t(t)}var It=["component"];function Lt(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function At(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Mt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Wt(t,e){return Wt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},Wt(t,e)}function Vt(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=zt(t);if(e){var o=zt(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Bt(this,n)}}function Bt(t,e){if(e&&("object"===_t(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function zt(t){return zt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},zt(t)}r.PureComponent}}]);