/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js ***!
  \****************************************************************/
/***/ (function(module) {

/*!
  * Bootstrap v5.3.5 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";const t=new Map,e={set(e,i,n){t.has(e)||t.set(e,new Map);const s=t.get(e);s.has(i)||0===s.size?s.set(i,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get:(e,i)=>t.has(e)&&t.get(e).get(i)||null,remove(e,i){if(!t.has(e))return;const n=t.get(e);n.delete(i),0===n.size&&t.delete(e)}},i="transitionend",n=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,((t,e)=>`#${CSS.escape(e)}`))),t),s=t=>{t.dispatchEvent(new Event(i))},o=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),r=t=>o(t)?t.jquery?t[0]:t:"string"==typeof t&&t.length>0?document.querySelector(n(t)):null,a=t=>{if(!o(t)||0===t.getClientRects().length)return!1;const e="visible"===getComputedStyle(t).getPropertyValue("visibility"),i=t.closest("details:not([open])");if(!i)return e;if(i!==t){const e=t.closest("summary");if(e&&e.parentNode!==i)return!1;if(null===e)return!1}return e},l=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),c=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?c(t.parentNode):null},h=()=>{},d=t=>{t.offsetHeight},u=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,f=[],p=()=>"rtl"===document.documentElement.dir,m=t=>{var e;e=()=>{const e=u();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(f.length||document.addEventListener("DOMContentLoaded",(()=>{for(const t of f)t()})),f.push(e)):e()},g=(t,e=[],i=t)=>"function"==typeof t?t.call(...e):i,_=(t,e,n=!0)=>{if(!n)return void g(t);const o=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let r=!1;const a=({target:n})=>{n===e&&(r=!0,e.removeEventListener(i,a),g(t))};e.addEventListener(i,a),setTimeout((()=>{r||s(e)}),o)},b=(t,e,i,n)=>{const s=t.length;let o=t.indexOf(e);return-1===o?!i&&n?t[s-1]:t[0]:(o+=i?1:-1,n&&(o=(o+s)%s),t[Math.max(0,Math.min(o,s-1))])},v=/[^.]*(?=\..*)\.|.*/,y=/\..*/,w=/::\d+$/,A={};let E=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},C=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function O(t,e){return e&&`${e}::${E++}`||t.uidEvent||E++}function x(t){const e=O(t);return t.uidEvent=e,A[e]=A[e]||{},A[e]}function k(t,e,i=null){return Object.values(t).find((t=>t.callable===e&&t.delegationSelector===i))}function L(t,e,i){const n="string"==typeof e,s=n?i:e||i;let o=I(t);return C.has(o)||(o=t),[n,s,o]}function S(t,e,i,n,s){if("string"!=typeof e||!t)return;let[o,r,a]=L(e,i,n);if(e in T){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};r=t(r)}const l=x(t),c=l[a]||(l[a]={}),h=k(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=O(r,e.replace(v,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(const a of o)if(a===r)return P(s,{delegateTarget:r}),n.oneOff&&N.off(t,s.type,e,i),i.apply(r,[s])}}(t,i,r):function(t,e){return function i(n){return P(n,{delegateTarget:t}),i.oneOff&&N.off(t,n.type,e),e.apply(t,[n])}}(t,r);u.delegationSelector=o?i:null,u.callable=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function D(t,e,i,n,s){const o=k(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function $(t,e,i,n){const s=e[i]||{};for(const[o,r]of Object.entries(s))o.includes(n)&&D(t,e,i,r.callable,r.delegationSelector)}function I(t){return t=t.replace(y,""),T[t]||t}const N={on(t,e,i,n){S(t,e,i,n,!1)},one(t,e,i,n){S(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=L(e,i,n),a=r!==e,l=x(t),c=l[r]||{},h=e.startsWith(".");if(void 0===o){if(h)for(const i of Object.keys(l))$(t,l,i,e.slice(1));for(const[i,n]of Object.entries(c)){const s=i.replace(w,"");a&&!e.includes(s)||D(t,l,r,n.callable,n.delegationSelector)}}else{if(!Object.keys(c).length)return;D(t,l,r,o,s?i:null)}},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=u();let s=null,o=!0,r=!0,a=!1;e!==I(e)&&n&&(s=n.Event(e,i),n(t).trigger(s),o=!s.isPropagationStopped(),r=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const l=P(new Event(e,{bubbles:o,cancelable:!0}),i);return a&&l.preventDefault(),r&&t.dispatchEvent(l),l.defaultPrevented&&s&&s.preventDefault(),l}};function P(t,e={}){for(const[i,n]of Object.entries(e))try{t[i]=n}catch(e){Object.defineProperty(t,i,{configurable:!0,get:()=>n})}return t}function j(t){if("true"===t)return!0;if("false"===t)return!1;if(t===Number(t).toString())return Number(t);if(""===t||"null"===t)return null;if("string"!=typeof t)return t;try{return JSON.parse(decodeURIComponent(t))}catch(e){return t}}function M(t){return t.replace(/[A-Z]/g,(t=>`-${t.toLowerCase()}`))}const F={setDataAttribute(t,e,i){t.setAttribute(`data-bs-${M(e)}`,i)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${M(e)}`)},getDataAttributes(t){if(!t)return{};const e={},i=Object.keys(t.dataset).filter((t=>t.startsWith("bs")&&!t.startsWith("bsConfig")));for(const n of i){let i=n.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1),e[i]=j(t.dataset[n])}return e},getDataAttribute:(t,e)=>j(t.getAttribute(`data-bs-${M(e)}`))};class H{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(t){return t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t}_mergeConfigObj(t,e){const i=o(e)?F.getDataAttribute(e,"config"):{};return{...this.constructor.Default,..."object"==typeof i?i:{},...o(e)?F.getDataAttributes(e):{},..."object"==typeof t?t:{}}}_typeCheckConfig(t,e=this.constructor.DefaultType){for(const[n,s]of Object.entries(e)){const e=t[n],r=o(e)?"element":null==(i=e)?`${i}`:Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(s).test(r))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${s}".`)}var i}}class W extends H{constructor(t,i){super(),(t=r(t))&&(this._element=t,this._config=this._getConfig(i),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const t of Object.getOwnPropertyNames(this))this[t]=null}_queueCallback(t,e,i=!0){_(t,e,i)}_getConfig(t){return t=this._mergeConfigObj(t,this._element),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}static getInstance(t){return e.get(r(t),this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.3.5"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(t){return`${t}${this.EVENT_KEY}`}}const B=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),e=i&&"#"!==i?i.trim():null}return e?e.split(",").map((t=>n(t))).join(","):null},z={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter((t=>t.matches(e))),parents(t,e){const i=[];let n=t.parentNode.closest(e);for(;n;)i.push(n),n=n.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((t=>`${t}:not([tabindex^="-"])`)).join(",");return this.find(e,t).filter((t=>!l(t)&&a(t)))},getSelectorFromElement(t){const e=B(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=B(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=B(t);return e?z.find(e):[]}},R=(t,e="hide")=>{const i=`click.dismiss${t.EVENT_KEY}`,n=t.NAME;N.on(document,i,`[data-bs-dismiss="${n}"]`,(function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),l(this))return;const s=z.getElementFromSelector(this)||this.closest(`.${n}`);t.getOrCreateInstance(s)[e]()}))},q=".bs.alert",V=`close${q}`,K=`closed${q}`;class Q extends W{static get NAME(){return"alert"}close(){if(N.trigger(this._element,V).defaultPrevented)return;this._element.classList.remove("show");const t=this._element.classList.contains("fade");this._queueCallback((()=>this._destroyElement()),this._element,t)}_destroyElement(){this._element.remove(),N.trigger(this._element,K),this.dispose()}static jQueryInterface(t){return this.each((function(){const e=Q.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}R(Q,"close"),m(Q);const X='[data-bs-toggle="button"]';class Y extends W{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=Y.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}N.on(document,"click.bs.button.data-api",X,(t=>{t.preventDefault();const e=t.target.closest(X);Y.getOrCreateInstance(e).toggle()})),m(Y);const U=".bs.swipe",G=`touchstart${U}`,J=`touchmove${U}`,Z=`touchend${U}`,tt=`pointerdown${U}`,et=`pointerup${U}`,it={endCallback:null,leftCallback:null,rightCallback:null},nt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class st extends H{constructor(t,e){super(),this._element=t,t&&st.isSupported()&&(this._config=this._getConfig(e),this._deltaX=0,this._supportPointerEvents=Boolean(window.PointerEvent),this._initEvents())}static get Default(){return it}static get DefaultType(){return nt}static get NAME(){return"swipe"}dispose(){N.off(this._element,U)}_start(t){this._supportPointerEvents?this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX):this._deltaX=t.touches[0].clientX}_end(t){this._eventIsPointerPenTouch(t)&&(this._deltaX=t.clientX-this._deltaX),this._handleSwipe(),g(this._config.endCallback)}_move(t){this._deltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this._deltaX}_handleSwipe(){const t=Math.abs(this._deltaX);if(t<=40)return;const e=t/this._deltaX;this._deltaX=0,e&&g(e>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,tt,(t=>this._start(t))),N.on(this._element,et,(t=>this._end(t))),this._element.classList.add("pointer-event")):(N.on(this._element,G,(t=>this._start(t))),N.on(this._element,J,(t=>this._move(t))),N.on(this._element,Z,(t=>this._end(t))))}_eventIsPointerPenTouch(t){return this._supportPointerEvents&&("pen"===t.pointerType||"touch"===t.pointerType)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const ot=".bs.carousel",rt=".data-api",at="ArrowLeft",lt="ArrowRight",ct="next",ht="prev",dt="left",ut="right",ft=`slide${ot}`,pt=`slid${ot}`,mt=`keydown${ot}`,gt=`mouseenter${ot}`,_t=`mouseleave${ot}`,bt=`dragstart${ot}`,vt=`load${ot}${rt}`,yt=`click${ot}${rt}`,wt="carousel",At="active",Et=".active",Tt=".carousel-item",Ct=Et+Tt,Ot={[at]:ut,[lt]:dt},xt={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},kt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Lt extends W{constructor(t,e){super(t,e),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===wt&&this.cycle()}static get Default(){return xt}static get DefaultType(){return kt}static get NAME(){return"carousel"}next(){this._slide(ct)}nextWhenVisible(){!document.hidden&&a(this._element)&&this.next()}prev(){this._slide(ht)}pause(){this._isSliding&&s(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval((()=>this.nextWhenVisible()),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,pt,(()=>this.cycle())):this.cycle())}to(t){const e=this._getItems();if(t>e.length-1||t<0)return;if(this._isSliding)return void N.one(this._element,pt,(()=>this.to(t)));const i=this._getItemIndex(this._getActive());if(i===t)return;const n=t>i?ct:ht;this._slide(n,e[t])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(t){return t.defaultInterval=t.interval,t}_addEventListeners(){this._config.keyboard&&N.on(this._element,mt,(t=>this._keydown(t))),"hover"===this._config.pause&&(N.on(this._element,gt,(()=>this.pause())),N.on(this._element,_t,(()=>this._maybeEnableCycle()))),this._config.touch&&st.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const t of z.find(".carousel-item img",this._element))N.on(t,bt,(t=>t.preventDefault()));const t={leftCallback:()=>this._slide(this._directionToOrder(dt)),rightCallback:()=>this._slide(this._directionToOrder(ut)),endCallback:()=>{"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout((()=>this._maybeEnableCycle()),500+this._config.interval))}};this._swipeHelper=new st(this._element,t)}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=Ot[t.key];e&&(t.preventDefault(),this._slide(this._directionToOrder(e)))}_getItemIndex(t){return this._getItems().indexOf(t)}_setActiveIndicatorElement(t){if(!this._indicatorsElement)return;const e=z.findOne(Et,this._indicatorsElement);e.classList.remove(At),e.removeAttribute("aria-current");const i=z.findOne(`[data-bs-slide-to="${t}"]`,this._indicatorsElement);i&&(i.classList.add(At),i.setAttribute("aria-current","true"))}_updateInterval(){const t=this._activeElement||this._getActive();if(!t)return;const e=Number.parseInt(t.getAttribute("data-bs-interval"),10);this._config.interval=e||this._config.defaultInterval}_slide(t,e=null){if(this._isSliding)return;const i=this._getActive(),n=t===ct,s=e||b(this._getItems(),i,n,this._config.wrap);if(s===i)return;const o=this._getItemIndex(s),r=e=>N.trigger(this._element,e,{relatedTarget:s,direction:this._orderToDirection(t),from:this._getItemIndex(i),to:o});if(r(ft).defaultPrevented)return;if(!i||!s)return;const a=Boolean(this._interval);this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=s;const l=n?"carousel-item-start":"carousel-item-end",c=n?"carousel-item-next":"carousel-item-prev";s.classList.add(c),d(s),i.classList.add(l),s.classList.add(l),this._queueCallback((()=>{s.classList.remove(l,c),s.classList.add(At),i.classList.remove(At,c,l),this._isSliding=!1,r(pt)}),i,this._isAnimated()),a&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return z.findOne(Ct,this._element)}_getItems(){return z.find(Tt,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(t){return p()?t===dt?ht:ct:t===dt?ct:ht}_orderToDirection(t){return p()?t===ht?dt:ut:t===ht?ut:dt}static jQueryInterface(t){return this.each((function(){const e=Lt.getOrCreateInstance(this,t);if("number"!=typeof t){if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}else e.to(t)}))}}N.on(document,yt,"[data-bs-slide], [data-bs-slide-to]",(function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(wt))return;t.preventDefault();const i=Lt.getOrCreateInstance(e),n=this.getAttribute("data-bs-slide-to");return n?(i.to(n),void i._maybeEnableCycle()):"next"===F.getDataAttribute(this,"slide")?(i.next(),void i._maybeEnableCycle()):(i.prev(),void i._maybeEnableCycle())})),N.on(window,vt,(()=>{const t=z.find('[data-bs-ride="carousel"]');for(const e of t)Lt.getOrCreateInstance(e)})),m(Lt);const St=".bs.collapse",Dt=`show${St}`,$t=`shown${St}`,It=`hide${St}`,Nt=`hidden${St}`,Pt=`click${St}.data-api`,jt="show",Mt="collapse",Ft="collapsing",Ht=`:scope .${Mt} .${Mt}`,Wt='[data-bs-toggle="collapse"]',Bt={parent:null,toggle:!0},zt={parent:"(null|element)",toggle:"boolean"};class Rt extends W{constructor(t,e){super(t,e),this._isTransitioning=!1,this._triggerArray=[];const i=z.find(Wt);for(const t of i){const e=z.getSelectorFromElement(t),i=z.find(e).filter((t=>t===this._element));null!==e&&i.length&&this._triggerArray.push(t)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Bt}static get DefaultType(){return zt}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let t=[];if(this._config.parent&&(t=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t=>t!==this._element)).map((t=>Rt.getOrCreateInstance(t,{toggle:!1})))),t.length&&t[0]._isTransitioning)return;if(N.trigger(this._element,Dt).defaultPrevented)return;for(const e of t)e.hide();const e=this._getDimension();this._element.classList.remove(Mt),this._element.classList.add(Ft),this._element.style[e]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=`scroll${e[0].toUpperCase()+e.slice(1)}`;this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt,jt),this._element.style[e]="",N.trigger(this._element,$t)}),this._element,!0),this._element.style[e]=`${this._element[i]}px`}hide(){if(this._isTransitioning||!this._isShown())return;if(N.trigger(this._element,It).defaultPrevented)return;const t=this._getDimension();this._element.style[t]=`${this._element.getBoundingClientRect()[t]}px`,d(this._element),this._element.classList.add(Ft),this._element.classList.remove(Mt,jt);for(const t of this._triggerArray){const e=z.getElementFromSelector(t);e&&!this._isShown(e)&&this._addAriaAndCollapsedClass([t],!1)}this._isTransitioning=!0,this._element.style[t]="",this._queueCallback((()=>{this._isTransitioning=!1,this._element.classList.remove(Ft),this._element.classList.add(Mt),N.trigger(this._element,Nt)}),this._element,!0)}_isShown(t=this._element){return t.classList.contains(jt)}_configAfterMerge(t){return t.toggle=Boolean(t.toggle),t.parent=r(t.parent),t}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const t=this._getFirstLevelChildren(Wt);for(const e of t){const t=z.getElementFromSelector(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))}}_getFirstLevelChildren(t){const e=z.find(Ht,this._config.parent);return z.find(t,this._config.parent).filter((t=>!e.includes(t)))}_addAriaAndCollapsedClass(t,e){if(t.length)for(const i of t)i.classList.toggle("collapsed",!e),i.setAttribute("aria-expanded",e)}static jQueryInterface(t){const e={};return"string"==typeof t&&/show|hide/.test(t)&&(e.toggle=!1),this.each((function(){const i=Rt.getOrCreateInstance(this,e);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t]()}}))}}N.on(document,Pt,Wt,(function(t){("A"===t.target.tagName||t.delegateTarget&&"A"===t.delegateTarget.tagName)&&t.preventDefault();for(const t of z.getMultipleElementsFromSelector(this))Rt.getOrCreateInstance(t,{toggle:!1}).toggle()})),m(Rt);var qt="top",Vt="bottom",Kt="right",Qt="left",Xt="auto",Yt=[qt,Vt,Kt,Qt],Ut="start",Gt="end",Jt="clippingParents",Zt="viewport",te="popper",ee="reference",ie=Yt.reduce((function(t,e){return t.concat([e+"-"+Ut,e+"-"+Gt])}),[]),ne=[].concat(Yt,[Xt]).reduce((function(t,e){return t.concat([e,e+"-"+Ut,e+"-"+Gt])}),[]),se="beforeRead",oe="read",re="afterRead",ae="beforeMain",le="main",ce="afterMain",he="beforeWrite",de="write",ue="afterWrite",fe=[se,oe,re,ae,le,ce,he,de,ue];function pe(t){return t?(t.nodeName||"").toLowerCase():null}function me(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ge(t){return t instanceof me(t).Element||t instanceof Element}function _e(t){return t instanceof me(t).HTMLElement||t instanceof HTMLElement}function be(t){return"undefined"!=typeof ShadowRoot&&(t instanceof me(t).ShadowRoot||t instanceof ShadowRoot)}const ve={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];_e(s)&&pe(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});_e(n)&&pe(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function ye(t){return t.split("-")[0]}var we=Math.max,Ae=Math.min,Ee=Math.round;function Te(){var t=navigator.userAgentData;return null!=t&&t.brands&&Array.isArray(t.brands)?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function Ce(){return!/^((?!chrome|android).)*safari/i.test(Te())}function Oe(t,e,i){void 0===e&&(e=!1),void 0===i&&(i=!1);var n=t.getBoundingClientRect(),s=1,o=1;e&&_e(t)&&(s=t.offsetWidth>0&&Ee(n.width)/t.offsetWidth||1,o=t.offsetHeight>0&&Ee(n.height)/t.offsetHeight||1);var r=(ge(t)?me(t):window).visualViewport,a=!Ce()&&i,l=(n.left+(a&&r?r.offsetLeft:0))/s,c=(n.top+(a&&r?r.offsetTop:0))/o,h=n.width/s,d=n.height/o;return{width:h,height:d,top:c,right:l+h,bottom:c+d,left:l,x:l,y:c}}function xe(t){var e=Oe(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function ke(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&be(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Le(t){return me(t).getComputedStyle(t)}function Se(t){return["table","td","th"].indexOf(pe(t))>=0}function De(t){return((ge(t)?t.ownerDocument:t.document)||window.document).documentElement}function $e(t){return"html"===pe(t)?t:t.assignedSlot||t.parentNode||(be(t)?t.host:null)||De(t)}function Ie(t){return _e(t)&&"fixed"!==Le(t).position?t.offsetParent:null}function Ne(t){for(var e=me(t),i=Ie(t);i&&Se(i)&&"static"===Le(i).position;)i=Ie(i);return i&&("html"===pe(i)||"body"===pe(i)&&"static"===Le(i).position)?e:i||function(t){var e=/firefox/i.test(Te());if(/Trident/i.test(Te())&&_e(t)&&"fixed"===Le(t).position)return null;var i=$e(t);for(be(i)&&(i=i.host);_e(i)&&["html","body"].indexOf(pe(i))<0;){var n=Le(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Pe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function je(t,e,i){return we(t,Ae(e,i))}function Me(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function Fe(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}const He={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=ye(i.placement),l=Pe(a),c=[Qt,Kt].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return Me("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:Fe(t,Yt))}(s.padding,i),d=xe(o),u="y"===l?qt:Qt,f="y"===l?Vt:Kt,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ne(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,A=je(v,w,y),E=l;i.modifiersData[n]=((e={})[E]=A,e.centerOffset=A-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&ke(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function We(t){return t.split("-")[1]}var Be={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ze(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.variation,r=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,h=t.roundOffsets,d=t.isFixed,u=r.x,f=void 0===u?0:u,p=r.y,m=void 0===p?0:p,g="function"==typeof h?h({x:f,y:m}):{x:f,y:m};f=g.x,m=g.y;var _=r.hasOwnProperty("x"),b=r.hasOwnProperty("y"),v=Qt,y=qt,w=window;if(c){var A=Ne(i),E="clientHeight",T="clientWidth";A===me(i)&&"static"!==Le(A=De(i)).position&&"absolute"===a&&(E="scrollHeight",T="scrollWidth"),(s===qt||(s===Qt||s===Kt)&&o===Gt)&&(y=Vt,m-=(d&&A===w&&w.visualViewport?w.visualViewport.height:A[E])-n.height,m*=l?1:-1),s!==Qt&&(s!==qt&&s!==Vt||o!==Gt)||(v=Kt,f-=(d&&A===w&&w.visualViewport?w.visualViewport.width:A[T])-n.width,f*=l?1:-1)}var C,O=Object.assign({position:a},c&&Be),x=!0===h?function(t,e){var i=t.x,n=t.y,s=e.devicePixelRatio||1;return{x:Ee(i*s)/s||0,y:Ee(n*s)/s||0}}({x:f,y:m},me(i)):{x:f,y:m};return f=x.x,m=x.y,l?Object.assign({},O,((C={})[y]=b?"0":"",C[v]=_?"0":"",C.transform=(w.devicePixelRatio||1)<=1?"translate("+f+"px, "+m+"px)":"translate3d("+f+"px, "+m+"px, 0)",C)):Object.assign({},O,((e={})[y]=b?m+"px":"",e[v]=_?f+"px":"",e.transform="",e))}const Re={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:ye(e.placement),variation:We(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,ze(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,ze(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}};var qe={passive:!0};const Ve={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=me(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,qe)})),a&&l.addEventListener("resize",i.update,qe),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,qe)})),a&&l.removeEventListener("resize",i.update,qe)}},data:{}};var Ke={left:"right",right:"left",bottom:"top",top:"bottom"};function Qe(t){return t.replace(/left|right|bottom|top/g,(function(t){return Ke[t]}))}var Xe={start:"end",end:"start"};function Ye(t){return t.replace(/start|end/g,(function(t){return Xe[t]}))}function Ue(t){var e=me(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ge(t){return Oe(De(t)).left+Ue(t).scrollLeft}function Je(t){var e=Le(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Ze(t){return["html","body","#document"].indexOf(pe(t))>=0?t.ownerDocument.body:_e(t)&&Je(t)?t:Ze($e(t))}function ti(t,e){var i;void 0===e&&(e=[]);var n=Ze(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=me(n),r=s?[o].concat(o.visualViewport||[],Je(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(ti($e(r)))}function ei(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function ii(t,e,i){return e===Zt?ei(function(t,e){var i=me(t),n=De(t),s=i.visualViewport,o=n.clientWidth,r=n.clientHeight,a=0,l=0;if(s){o=s.width,r=s.height;var c=Ce();(c||!c&&"fixed"===e)&&(a=s.offsetLeft,l=s.offsetTop)}return{width:o,height:r,x:a+Ge(t),y:l}}(t,i)):ge(e)?function(t,e){var i=Oe(t,!1,"fixed"===e);return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}(e,i):ei(function(t){var e,i=De(t),n=Ue(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=we(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=we(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ge(t),l=-n.scrollTop;return"rtl"===Le(s||i).direction&&(a+=we(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(De(t)))}function ni(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?ye(s):null,r=s?We(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case qt:e={x:a,y:i.y-n.height};break;case Vt:e={x:a,y:i.y+i.height};break;case Kt:e={x:i.x+i.width,y:l};break;case Qt:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Pe(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case Ut:e[c]=e[c]-(i[h]/2-n[h]/2);break;case Gt:e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function si(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.strategy,r=void 0===o?t.strategy:o,a=i.boundary,l=void 0===a?Jt:a,c=i.rootBoundary,h=void 0===c?Zt:c,d=i.elementContext,u=void 0===d?te:d,f=i.altBoundary,p=void 0!==f&&f,m=i.padding,g=void 0===m?0:m,_=Me("number"!=typeof g?g:Fe(g,Yt)),b=u===te?ee:te,v=t.rects.popper,y=t.elements[p?b:u],w=function(t,e,i,n){var s="clippingParents"===e?function(t){var e=ti($e(t)),i=["absolute","fixed"].indexOf(Le(t).position)>=0&&_e(t)?Ne(t):t;return ge(i)?e.filter((function(t){return ge(t)&&ke(t,i)&&"body"!==pe(t)})):[]}(t):[].concat(e),o=[].concat(s,[i]),r=o[0],a=o.reduce((function(e,i){var s=ii(t,i,n);return e.top=we(s.top,e.top),e.right=Ae(s.right,e.right),e.bottom=Ae(s.bottom,e.bottom),e.left=we(s.left,e.left),e}),ii(t,r,n));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}(ge(y)?y:y.contextElement||De(t.elements.popper),l,h,r),A=Oe(t.elements.reference),E=ni({reference:A,element:v,placement:s}),T=ei(Object.assign({},v,E)),C=u===te?T:A,O={top:w.top-C.top+_.top,bottom:C.bottom-w.bottom+_.bottom,left:w.left-C.left+_.left,right:C.right-w.right+_.right},x=t.modifiersData.offset;if(u===te&&x){var k=x[s];Object.keys(O).forEach((function(t){var e=[Kt,Vt].indexOf(t)>=0?1:-1,i=[qt,Vt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function oi(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?ne:l,h=We(n),d=h?a?ie:ie.filter((function(t){return We(t)===h})):Yt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=si(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[ye(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}const ri={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=ye(g),b=l||(_!==g&&p?function(t){if(ye(t)===Xt)return[];var e=Qe(t);return[Ye(t),e,Ye(e)]}(g):[Qe(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat(ye(i)===Xt?oi(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,A=new Map,E=!0,T=v[0],C=0;C<v.length;C++){var O=v[C],x=ye(O),k=We(O)===Ut,L=[qt,Vt].indexOf(x)>=0,S=L?"width":"height",D=si(e,{placement:O,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),$=L?k?Kt:Qt:k?Vt:qt;y[S]>w[S]&&($=Qe($));var I=Qe($),N=[];if(o&&N.push(D[x]<=0),a&&N.push(D[$]<=0,D[I]<=0),N.every((function(t){return t}))){T=O,E=!1;break}A.set(O,N)}if(E)for(var P=function(t){var e=v.find((function(e){var i=A.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},j=p?3:1;j>0&&"break"!==P(j);j--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function ai(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function li(t){return[qt,Kt,Vt,Qt].some((function(e){return t[e]>=0}))}const ci={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=si(e,{elementContext:"reference"}),a=si(e,{altBoundary:!0}),l=ai(r,n),c=ai(a,s,o),h=li(l),d=li(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},hi={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=ne.reduce((function(t,i){return t[i]=function(t,e,i){var n=ye(t),s=[Qt,qt].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[Qt,Kt].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},di={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=ni({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})},data:{}},ui={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=si(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=ye(e.placement),b=We(e.placement),v=!b,y=Pe(_),w="x"===y?"y":"x",A=e.modifiersData.popperOffsets,E=e.rects.reference,T=e.rects.popper,C="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,O="number"==typeof C?{mainAxis:C,altAxis:C}:Object.assign({mainAxis:0,altAxis:0},C),x=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,k={x:0,y:0};if(A){if(o){var L,S="y"===y?qt:Qt,D="y"===y?Vt:Kt,$="y"===y?"height":"width",I=A[y],N=I+g[S],P=I-g[D],j=f?-T[$]/2:0,M=b===Ut?E[$]:T[$],F=b===Ut?-T[$]:-E[$],H=e.elements.arrow,W=f&&H?xe(H):{width:0,height:0},B=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},z=B[S],R=B[D],q=je(0,E[$],W[$]),V=v?E[$]/2-j-q-z-O.mainAxis:M-q-z-O.mainAxis,K=v?-E[$]/2+j+q+R+O.mainAxis:F+q+R+O.mainAxis,Q=e.elements.arrow&&Ne(e.elements.arrow),X=Q?"y"===y?Q.clientTop||0:Q.clientLeft||0:0,Y=null!=(L=null==x?void 0:x[y])?L:0,U=I+K-Y,G=je(f?Ae(N,I+V-Y-X):N,I,f?we(P,U):P);A[y]=G,k[y]=G-I}if(a){var J,Z="x"===y?qt:Qt,tt="x"===y?Vt:Kt,et=A[w],it="y"===w?"height":"width",nt=et+g[Z],st=et-g[tt],ot=-1!==[qt,Qt].indexOf(_),rt=null!=(J=null==x?void 0:x[w])?J:0,at=ot?nt:et-E[it]-T[it]-rt+O.altAxis,lt=ot?et+E[it]+T[it]-rt-O.altAxis:st,ct=f&&ot?function(t,e,i){var n=je(t,e,i);return n>i?i:n}(at,et,lt):je(f?at:nt,et,f?lt:st);A[w]=ct,k[w]=ct-et}e.modifiersData[n]=k}},requiresIfExists:["offset"]};function fi(t,e,i){void 0===i&&(i=!1);var n,s,o=_e(e),r=_e(e)&&function(t){var e=t.getBoundingClientRect(),i=Ee(e.width)/t.offsetWidth||1,n=Ee(e.height)/t.offsetHeight||1;return 1!==i||1!==n}(e),a=De(e),l=Oe(t,r,i),c={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(o||!o&&!i)&&(("body"!==pe(e)||Je(a))&&(c=(n=e)!==me(n)&&_e(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:Ue(n)),_e(e)?((h=Oe(e,!0)).x+=e.clientLeft,h.y+=e.clientTop):a&&(h.x=Ge(a))),{x:l.left+c.scrollLeft-h.x,y:l.top+c.scrollTop-h.y,width:l.width,height:l.height}}function pi(t){var e=new Map,i=new Set,n=[];function s(t){i.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!i.has(t)){var n=e.get(t);n&&s(n)}})),n.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||s(t)})),n}var mi={placement:"bottom",modifiers:[],strategy:"absolute"};function gi(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function _i(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?mi:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},mi,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){var s="function"==typeof i?i(a.options):i;d(),a.options=Object.assign({},o,a.options,s),a.scrollParents={reference:ge(t)?ti(t):t.contextElement?ti(t.contextElement):[],popper:ti(e)};var r,c,u=function(t){var e=pi(t);return fe.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((r=[].concat(n,a.options.modifiers),c=r.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(c).map((function(t){return c[t]}))));return a.orderedModifiers=u.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(gi(e,i)){a.rects={reference:fi(e,Ne(i),"fixed"===a.options.strategy),popper:xe(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!gi(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var bi=_i(),vi=_i({defaultModifiers:[Ve,di,Re,ve]}),yi=_i({defaultModifiers:[Ve,di,Re,ve,hi,ri,ui,He,ci]});const wi=Object.freeze(Object.defineProperty({__proto__:null,afterMain:ce,afterRead:re,afterWrite:ue,applyStyles:ve,arrow:He,auto:Xt,basePlacements:Yt,beforeMain:ae,beforeRead:se,beforeWrite:he,bottom:Vt,clippingParents:Jt,computeStyles:Re,createPopper:yi,createPopperBase:bi,createPopperLite:vi,detectOverflow:si,end:Gt,eventListeners:Ve,flip:ri,hide:ci,left:Qt,main:le,modifierPhases:fe,offset:hi,placements:ne,popper:te,popperGenerator:_i,popperOffsets:di,preventOverflow:ui,read:oe,reference:ee,right:Kt,start:Ut,top:qt,variationPlacements:ie,viewport:Zt,write:de},Symbol.toStringTag,{value:"Module"})),Ai="dropdown",Ei=".bs.dropdown",Ti=".data-api",Ci="ArrowUp",Oi="ArrowDown",xi=`hide${Ei}`,ki=`hidden${Ei}`,Li=`show${Ei}`,Si=`shown${Ei}`,Di=`click${Ei}${Ti}`,$i=`keydown${Ei}${Ti}`,Ii=`keyup${Ei}${Ti}`,Ni="show",Pi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',ji=`${Pi}.${Ni}`,Mi=".dropdown-menu",Fi=p()?"top-end":"top-start",Hi=p()?"top-start":"top-end",Wi=p()?"bottom-end":"bottom-start",Bi=p()?"bottom-start":"bottom-end",zi=p()?"left-start":"right-start",Ri=p()?"right-start":"left-start",qi={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},Vi={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ki extends W{constructor(t,e){super(t,e),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,Mi)[0]||z.prev(this._element,Mi)[0]||z.findOne(Mi,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return qi}static get DefaultType(){return Vi}static get NAME(){return Ai}toggle(){return this._isShown()?this.hide():this.show()}show(){if(l(this._element)||this._isShown())return;const t={relatedTarget:this._element};if(!N.trigger(this._element,Li,t).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ni),this._element.classList.add(Ni),N.trigger(this._element,Si,t)}}hide(){if(l(this._element)||!this._isShown())return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(t){if(!N.trigger(this._element,xi,t).defaultPrevented){if("ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ni),this._element.classList.remove(Ni),this._element.setAttribute("aria-expanded","false"),F.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,ki,t)}}_getConfig(t){if("object"==typeof(t=super._getConfig(t)).reference&&!o(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError(`${Ai.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return t}_createPopper(){if(void 0===wi)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let t=this._element;"parent"===this._config.reference?t=this._parent:o(this._config.reference)?t=r(this._config.reference):"object"==typeof this._config.reference&&(t=this._config.reference);const e=this._getPopperConfig();this._popper=yi(t,this._menu,e)}_isShown(){return this._menu.classList.contains(Ni)}_getPlacement(){const t=this._parent;if(t.classList.contains("dropend"))return zi;if(t.classList.contains("dropstart"))return Ri;if(t.classList.contains("dropup-center"))return"top";if(t.classList.contains("dropdown-center"))return"bottom";const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?Hi:Fi:e?Bi:Wi}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||"static"===this._config.display)&&(F.setDataAttribute(this._menu,"popper","static"),t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,...g(this._config.popperConfig,[void 0,t])}}_selectMenuItem({key:t,target:e}){const i=z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter((t=>a(t)));i.length&&b(i,e,t===Oi,!i.includes(e)).focus()}static jQueryInterface(t){return this.each((function(){const e=Ki.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}static clearMenus(t){if(2===t.button||"keyup"===t.type&&"Tab"!==t.key)return;const e=z.find(ji);for(const i of e){const e=Ki.getInstance(i);if(!e||!1===e._config.autoClose)continue;const n=t.composedPath(),s=n.includes(e._menu);if(n.includes(e._element)||"inside"===e._config.autoClose&&!s||"outside"===e._config.autoClose&&s)continue;if(e._menu.contains(t.target)&&("keyup"===t.type&&"Tab"===t.key||/input|select|option|textarea|form/i.test(t.target.tagName)))continue;const o={relatedTarget:e._element};"click"===t.type&&(o.clickEvent=t),e._completeHide(o)}}static dataApiKeydownHandler(t){const e=/input|textarea/i.test(t.target.tagName),i="Escape"===t.key,n=[Ci,Oi].includes(t.key);if(!n&&!i)return;if(e&&!i)return;t.preventDefault();const s=this.matches(Pi)?this:z.prev(this,Pi)[0]||z.next(this,Pi)[0]||z.findOne(Pi,t.delegateTarget.parentNode),o=Ki.getOrCreateInstance(s);if(n)return t.stopPropagation(),o.show(),void o._selectMenuItem(t);o._isShown()&&(t.stopPropagation(),o.hide(),s.focus())}}N.on(document,$i,Pi,Ki.dataApiKeydownHandler),N.on(document,$i,Mi,Ki.dataApiKeydownHandler),N.on(document,Di,Ki.clearMenus),N.on(document,Ii,Ki.clearMenus),N.on(document,Di,Pi,(function(t){t.preventDefault(),Ki.getOrCreateInstance(this).toggle()})),m(Ki);const Qi="backdrop",Xi="show",Yi=`mousedown.bs.${Qi}`,Ui={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Gi={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Ji extends H{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return Ui}static get DefaultType(){return Gi}static get NAME(){return Qi}show(t){if(!this._config.isVisible)return void g(t);this._append();const e=this._getElement();this._config.isAnimated&&d(e),e.classList.add(Xi),this._emulateAnimation((()=>{g(t)}))}hide(t){this._config.isVisible?(this._getElement().classList.remove(Xi),this._emulateAnimation((()=>{this.dispose(),g(t)}))):g(t)}dispose(){this._isAppended&&(N.off(this._element,Yi),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=r(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),N.on(t,Yi,(()=>{g(this._config.clickCallback)})),this._isAppended=!0}_emulateAnimation(t){_(t,this._getElement(),this._config.isAnimated)}}const Zi=".bs.focustrap",tn=`focusin${Zi}`,en=`keydown.tab${Zi}`,nn="backward",sn={autofocus:!0,trapElement:null},on={autofocus:"boolean",trapElement:"element"};class rn extends H{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return sn}static get DefaultType(){return on}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Zi),N.on(document,tn,(t=>this._handleFocusin(t))),N.on(document,en,(t=>this._handleKeydown(t))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Zi))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=z.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===nn?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){"Tab"===t.key&&(this._lastTabNavDirection=t.shiftKey?nn:"forward")}}const an=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ln=".sticky-top",cn="padding-right",hn="margin-right";class dn{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,cn,(e=>e+t)),this._setElementAttributes(an,cn,(e=>e+t)),this._setElementAttributes(ln,hn,(e=>e-t))}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,cn),this._resetElementAttributes(an,cn),this._resetElementAttributes(ln,hn)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,(t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,`${i(Number.parseFloat(s))}px`)}))}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&F.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,(t=>{const i=F.getDataAttribute(t,e);null!==i?(F.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)}))}_applyManipulationCallback(t,e){if(o(t))e(t);else for(const i of z.find(t,this._element))e(i)}}const un=".bs.modal",fn=`hide${un}`,pn=`hidePrevented${un}`,mn=`hidden${un}`,gn=`show${un}`,_n=`shown${un}`,bn=`resize${un}`,vn=`click.dismiss${un}`,yn=`mousedown.dismiss${un}`,wn=`keydown.dismiss${un}`,An=`click${un}.data-api`,En="modal-open",Tn="show",Cn="modal-static",On={backdrop:!0,focus:!0,keyboard:!0},xn={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class kn extends W{constructor(t,e){super(t,e),this._dialog=z.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new dn,this._addEventListeners()}static get Default(){return On}static get DefaultType(){return xn}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||N.trigger(this._element,gn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(En),this._adjustDialog(),this._backdrop.show((()=>this._showElement(t))))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,fn).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(Tn),this._queueCallback((()=>this._hideModal()),this._element,this._isAnimated())))}dispose(){N.off(window,un),N.off(this._dialog,un),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Ji({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_showElement(t){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const e=z.findOne(".modal-body",this._dialog);e&&(e.scrollTop=0),d(this._element),this._element.classList.add(Tn),this._queueCallback((()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,_n,{relatedTarget:t})}),this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,wn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())})),N.on(window,bn,(()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()})),N.on(this._element,yn,(t=>{N.one(this._element,vn,(e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())}))}))}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(En),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,mn)}))}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,pn).defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._element.style.overflowY;"hidden"===e||this._element.classList.contains(Cn)||(t||(this._element.style.overflowY="hidden"),this._element.classList.add(Cn),this._queueCallback((()=>{this._element.classList.remove(Cn),this._queueCallback((()=>{this._element.style.overflowY=e}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;if(i&&!t){const t=p()?"paddingLeft":"paddingRight";this._element.style[t]=`${e}px`}if(!i&&t){const t=p()?"paddingRight":"paddingLeft";this._element.style[t]=`${e}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}N.on(document,An,'[data-bs-toggle="modal"]',(function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),N.one(e,gn,(t=>{t.defaultPrevented||N.one(e,mn,(()=>{a(this)&&this.focus()}))}));const i=z.findOne(".modal.show");i&&kn.getInstance(i).hide(),kn.getOrCreateInstance(e).toggle(this)})),R(kn),m(kn);const Ln=".bs.offcanvas",Sn=".data-api",Dn=`load${Ln}${Sn}`,$n="show",In="showing",Nn="hiding",Pn=".offcanvas.show",jn=`show${Ln}`,Mn=`shown${Ln}`,Fn=`hide${Ln}`,Hn=`hidePrevented${Ln}`,Wn=`hidden${Ln}`,Bn=`resize${Ln}`,zn=`click${Ln}${Sn}`,Rn=`keydown.dismiss${Ln}`,qn={backdrop:!0,keyboard:!0,scroll:!1},Vn={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Kn extends W{constructor(t,e){super(t,e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return qn}static get DefaultType(){return Vn}static get NAME(){return"offcanvas"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||N.trigger(this._element,jn,{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||(new dn).hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(In),this._queueCallback((()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add($n),this._element.classList.remove(In),N.trigger(this._element,Mn,{relatedTarget:t})}),this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,Fn).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Nn),this._backdrop.hide(),this._queueCallback((()=>{this._element.classList.remove($n,Nn),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||(new dn).reset(),N.trigger(this._element,Wn)}),this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const t=Boolean(this._config.backdrop);return new Ji({className:"offcanvas-backdrop",isVisible:t,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:t?()=>{"static"!==this._config.backdrop?this.hide():N.trigger(this._element,Hn)}:null})}_initializeFocusTrap(){return new rn({trapElement:this._element})}_addEventListeners(){N.on(this._element,Rn,(t=>{"Escape"===t.key&&(this._config.keyboard?this.hide():N.trigger(this._element,Hn))}))}static jQueryInterface(t){return this.each((function(){const e=Kn.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}N.on(document,zn,'[data-bs-toggle="offcanvas"]',(function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this))return;N.one(e,Wn,(()=>{a(this)&&this.focus()}));const i=z.findOne(Pn);i&&i!==e&&Kn.getInstance(i).hide(),Kn.getOrCreateInstance(e).toggle(this)})),N.on(window,Dn,(()=>{for(const t of z.find(Pn))Kn.getOrCreateInstance(t).show()})),N.on(window,Bn,(()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))"fixed"!==getComputedStyle(t).position&&Kn.getOrCreateInstance(t).hide()})),R(Kn),m(Kn);const Qn={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Xn=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Yn=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,Un=(t,e)=>{const i=t.nodeName.toLowerCase();return e.includes(i)?!Xn.has(i)||Boolean(Yn.test(t.nodeValue)):e.filter((t=>t instanceof RegExp)).some((t=>t.test(i)))},Gn={allowList:Qn,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Jn={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},Zn={entry:"(string|element|function|null)",selector:"(string|element)"};class ts extends H{constructor(t){super(),this._config=this._getConfig(t)}static get Default(){return Gn}static get DefaultType(){return Jn}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map((t=>this._resolvePossibleFunction(t))).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(t){return this._checkContent(t),this._config.content={...this._config.content,...t},this}toHtml(){const t=document.createElement("div");t.innerHTML=this._maybeSanitize(this._config.template);for(const[e,i]of Object.entries(this._config.content))this._setContent(t,i,e);const e=t.children[0],i=this._resolvePossibleFunction(this._config.extraClass);return i&&e.classList.add(...i.split(" ")),e}_typeCheckConfig(t){super._typeCheckConfig(t),this._checkContent(t.content)}_checkContent(t){for(const[e,i]of Object.entries(t))super._typeCheckConfig({selector:e,entry:i},Zn)}_setContent(t,e,i){const n=z.findOne(i,t);n&&((e=this._resolvePossibleFunction(e))?o(e)?this._putElementInTemplate(r(e),n):this._config.html?n.innerHTML=this._maybeSanitize(e):n.textContent=e:n.remove())}_maybeSanitize(t){return this._config.sanitize?function(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=[].concat(...n.body.querySelectorAll("*"));for(const t of s){const i=t.nodeName.toLowerCase();if(!Object.keys(e).includes(i)){t.remove();continue}const n=[].concat(...t.attributes),s=[].concat(e["*"]||[],e[i]||[]);for(const e of n)Un(e,s)||t.removeAttribute(e.nodeName)}return n.body.innerHTML}(t,this._config.allowList,this._config.sanitizeFn):t}_resolvePossibleFunction(t){return g(t,[void 0,this])}_putElementInTemplate(t,e){if(this._config.html)return e.innerHTML="",void e.append(t);e.textContent=t.textContent}}const es=new Set(["sanitize","allowList","sanitizeFn"]),is="fade",ns="show",ss=".tooltip-inner",os=".modal",rs="hide.bs.modal",as="hover",ls="focus",cs={AUTO:"auto",TOP:"top",RIGHT:p()?"left":"right",BOTTOM:"bottom",LEFT:p()?"right":"left"},hs={allowList:Qn,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},ds={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class us extends W{constructor(t,e){if(void 0===wi)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(t,e),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return hs}static get DefaultType(){return ds}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest(os),rs,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const t=N.trigger(this._element,this.constructor.eventName("show")),e=(c(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(t.defaultPrevented||!e)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:n}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(n.append(i),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(i),i.classList.add(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.on(t,"mouseover",h);this._queueCallback((()=>{N.trigger(this._element,this.constructor.eventName("shown")),!1===this._isHovered&&this._leave(),this._isHovered=!1}),this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(ns),"ontouchstart"in document.documentElement)for(const t of[].concat(...document.body.children))N.off(t,"mouseover",h);this._activeTrigger.click=!1,this._activeTrigger[ls]=!1,this._activeTrigger[as]=!1,this._isHovered=null,this._queueCallback((()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))}),this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return Boolean(this._getTitle())}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(t){const e=this._getTemplateFactory(t).toHtml();if(!e)return null;e.classList.remove(is,ns),e.classList.add(`bs-${this.constructor.NAME}-auto`);const i=(t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t})(this.constructor.NAME).toString();return e.setAttribute("id",i),this._isAnimated()&&e.classList.add(is),e}setContent(t){this._newContent=t,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(t){return this._templateFactory?this._templateFactory.changeContent(t):this._templateFactory=new ts({...this._config,content:t,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[ss]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(t){return this.constructor.getOrCreateInstance(t.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(is)}_isShown(){return this.tip&&this.tip.classList.contains(ns)}_createPopper(t){const e=g(this._config.placement,[this,t,this._element]),i=cs[e.toUpperCase()];return yi(this._element,t,this._getPopperConfig(i))}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map((t=>Number.parseInt(t,10))):"function"==typeof t?e=>t(e,this._element):t}_resolvePossibleFunction(t){return g(t,[this._element,this._element])}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:t=>{this._getTipElement().setAttribute("data-popper-placement",t.state.placement)}}]};return{...e,...g(this._config.popperConfig,[void 0,e])}}_setListeners(){const t=this._config.trigger.split(" ");for(const e of t)if("click"===e)N.on(this._element,this.constructor.eventName("click"),this._config.selector,(t=>{this._initializeOnDelegatedTarget(t).toggle()}));else if("manual"!==e){const t=e===as?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),i=e===as?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,t,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusin"===t.type?ls:as]=!0,e._enter()})),N.on(this._element,i,this._config.selector,(t=>{const e=this._initializeOnDelegatedTarget(t);e._activeTrigger["focusout"===t.type?ls:as]=e._element.contains(t.relatedTarget),e._leave()}))}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest(os),rs,this._hideModalHandler)}_fixTitle(){const t=this._element.getAttribute("title");t&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",t),this._element.setAttribute("data-bs-original-title",t),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout((()=>{this._isHovered&&this.show()}),this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout((()=>{this._isHovered||this.hide()}),this._config.delay.hide))}_setTimeout(t,e){clearTimeout(this._timeout),this._timeout=setTimeout(t,e)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(t){const e=F.getDataAttributes(this._element);for(const t of Object.keys(e))es.has(t)&&delete e[t];return t={...e,..."object"==typeof t&&t?t:{}},t=this._mergeConfigObj(t),t=this._configAfterMerge(t),this._typeCheckConfig(t),t}_configAfterMerge(t){return t.container=!1===t.container?document.body:r(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),t}_getDelegateConfig(){const t={};for(const[e,i]of Object.entries(this._config))this.constructor.Default[e]!==i&&(t[e]=i);return t.selector=!1,t.trigger="manual",t}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(t){return this.each((function(){const e=us.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(us);const fs=".popover-header",ps=".popover-body",ms={...us.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},gs={...us.DefaultType,content:"(null|string|element|function)"};class _s extends us{static get Default(){return ms}static get DefaultType(){return gs}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[fs]:this._getTitle(),[ps]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(t){return this.each((function(){const e=_s.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}m(_s);const bs=".bs.scrollspy",vs=`activate${bs}`,ys=`click${bs}`,ws=`load${bs}.data-api`,As="active",Es="[href]",Ts=".nav-link",Cs=`${Ts}, .nav-item > ${Ts}, .list-group-item`,Os={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},xs={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class ks extends W{constructor(t,e){super(t,e),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement="visible"===getComputedStyle(this._element).overflowY?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return Os}static get DefaultType(){return xs}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const t of this._observableSections.values())this._observer.observe(t)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(t){return t.target=r(t.target)||document.body,t.rootMargin=t.offset?`${t.offset}px 0px -30%`:t.rootMargin,"string"==typeof t.threshold&&(t.threshold=t.threshold.split(",").map((t=>Number.parseFloat(t)))),t}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,ys),N.on(this._config.target,ys,Es,(t=>{const e=this._observableSections.get(t.target.hash);if(e){t.preventDefault();const i=this._rootElement||window,n=e.offsetTop-this._element.offsetTop;if(i.scrollTo)return void i.scrollTo({top:n,behavior:"smooth"});i.scrollTop=n}})))}_getNewObserver(){const t={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver((t=>this._observerCallback(t)),t)}_observerCallback(t){const e=t=>this._targetLinks.get(`#${t.target.id}`),i=t=>{this._previousScrollData.visibleEntryTop=t.target.offsetTop,this._process(e(t))},n=(this._rootElement||document.documentElement).scrollTop,s=n>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=n;for(const o of t){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(e(o));continue}const t=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(s&&t){if(i(o),!n)return}else s||t||i(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const t=z.find(Es,this._config.target);for(const e of t){if(!e.hash||l(e))continue;const t=z.findOne(decodeURI(e.hash),this._element);a(t)&&(this._targetLinks.set(decodeURI(e.hash),e),this._observableSections.set(e.hash,t))}}_process(t){this._activeTarget!==t&&(this._clearActiveClass(this._config.target),this._activeTarget=t,t.classList.add(As),this._activateParents(t),N.trigger(this._element,vs,{relatedTarget:t}))}_activateParents(t){if(t.classList.contains("dropdown-item"))z.findOne(".dropdown-toggle",t.closest(".dropdown")).classList.add(As);else for(const e of z.parents(t,".nav, .list-group"))for(const t of z.prev(e,Cs))t.classList.add(As)}_clearActiveClass(t){t.classList.remove(As);const e=z.find(`${Es}.${As}`,t);for(const t of e)t.classList.remove(As)}static jQueryInterface(t){return this.each((function(){const e=ks.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(window,ws,(()=>{for(const t of z.find('[data-bs-spy="scroll"]'))ks.getOrCreateInstance(t)})),m(ks);const Ls=".bs.tab",Ss=`hide${Ls}`,Ds=`hidden${Ls}`,$s=`show${Ls}`,Is=`shown${Ls}`,Ns=`click${Ls}`,Ps=`keydown${Ls}`,js=`load${Ls}`,Ms="ArrowLeft",Fs="ArrowRight",Hs="ArrowUp",Ws="ArrowDown",Bs="Home",zs="End",Rs="active",qs="fade",Vs="show",Ks=".dropdown-toggle",Qs=`:not(${Ks})`,Xs='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ys=`.nav-link${Qs}, .list-group-item${Qs}, [role="tab"]${Qs}, ${Xs}`,Us=`.${Rs}[data-bs-toggle="tab"], .${Rs}[data-bs-toggle="pill"], .${Rs}[data-bs-toggle="list"]`;class Gs extends W{constructor(t){super(t),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,Ps,(t=>this._keydown(t))))}static get NAME(){return"tab"}show(){const t=this._element;if(this._elemIsActive(t))return;const e=this._getActiveElem(),i=e?N.trigger(e,Ss,{relatedTarget:t}):null;N.trigger(t,$s,{relatedTarget:e}).defaultPrevented||i&&i.defaultPrevented||(this._deactivate(e,t),this._activate(t,e))}_activate(t,e){t&&(t.classList.add(Rs),this._activate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.removeAttribute("tabindex"),t.setAttribute("aria-selected",!0),this._toggleDropDown(t,!0),N.trigger(t,Is,{relatedTarget:e})):t.classList.add(Vs)}),t,t.classList.contains(qs)))}_deactivate(t,e){t&&(t.classList.remove(Rs),t.blur(),this._deactivate(z.getElementFromSelector(t)),this._queueCallback((()=>{"tab"===t.getAttribute("role")?(t.setAttribute("aria-selected",!1),t.setAttribute("tabindex","-1"),this._toggleDropDown(t,!1),N.trigger(t,Ds,{relatedTarget:e})):t.classList.remove(Vs)}),t,t.classList.contains(qs)))}_keydown(t){if(![Ms,Fs,Hs,Ws,Bs,zs].includes(t.key))return;t.stopPropagation(),t.preventDefault();const e=this._getChildren().filter((t=>!l(t)));let i;if([Bs,zs].includes(t.key))i=e[t.key===Bs?0:e.length-1];else{const n=[Fs,Ws].includes(t.key);i=b(e,t.target,n,!0)}i&&(i.focus({preventScroll:!0}),Gs.getOrCreateInstance(i).show())}_getChildren(){return z.find(Ys,this._parent)}_getActiveElem(){return this._getChildren().find((t=>this._elemIsActive(t)))||null}_setInitialAttributes(t,e){this._setAttributeIfNotExists(t,"role","tablist");for(const t of e)this._setInitialAttributesOnChild(t)}_setInitialAttributesOnChild(t){t=this._getInnerElement(t);const e=this._elemIsActive(t),i=this._getOuterElement(t);t.setAttribute("aria-selected",e),i!==t&&this._setAttributeIfNotExists(i,"role","presentation"),e||t.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(t,"role","tab"),this._setInitialAttributesOnTargetPanel(t)}_setInitialAttributesOnTargetPanel(t){const e=z.getElementFromSelector(t);e&&(this._setAttributeIfNotExists(e,"role","tabpanel"),t.id&&this._setAttributeIfNotExists(e,"aria-labelledby",`${t.id}`))}_toggleDropDown(t,e){const i=this._getOuterElement(t);if(!i.classList.contains("dropdown"))return;const n=(t,n)=>{const s=z.findOne(t,i);s&&s.classList.toggle(n,e)};n(Ks,Rs),n(".dropdown-menu",Vs),i.setAttribute("aria-expanded",e)}_setAttributeIfNotExists(t,e,i){t.hasAttribute(e)||t.setAttribute(e,i)}_elemIsActive(t){return t.classList.contains(Rs)}_getInnerElement(t){return t.matches(Ys)?t:z.findOne(Ys,t)}_getOuterElement(t){return t.closest(".nav-item, .list-group-item")||t}static jQueryInterface(t){return this.each((function(){const e=Gs.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t]()}}))}}N.on(document,Ns,Xs,(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),l(this)||Gs.getOrCreateInstance(this).show()})),N.on(window,js,(()=>{for(const t of z.find(Us))Gs.getOrCreateInstance(t)})),m(Gs);const Js=".bs.toast",Zs=`mouseover${Js}`,to=`mouseout${Js}`,eo=`focusin${Js}`,io=`focusout${Js}`,no=`hide${Js}`,so=`hidden${Js}`,oo=`show${Js}`,ro=`shown${Js}`,ao="hide",lo="show",co="showing",ho={animation:"boolean",autohide:"boolean",delay:"number"},uo={animation:!0,autohide:!0,delay:5e3};class fo extends W{constructor(t,e){super(t,e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return uo}static get DefaultType(){return ho}static get NAME(){return"toast"}show(){N.trigger(this._element,oo).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ao),d(this._element),this._element.classList.add(lo,co),this._queueCallback((()=>{this._element.classList.remove(co),N.trigger(this._element,ro),this._maybeScheduleHide()}),this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,no).defaultPrevented||(this._element.classList.add(co),this._queueCallback((()=>{this._element.classList.add(ao),this._element.classList.remove(co,lo),N.trigger(this._element,so)}),this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(lo),super.dispose()}isShown(){return this._element.classList.contains(lo)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout((()=>{this.hide()}),this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,Zs,(t=>this._onInteraction(t,!0))),N.on(this._element,to,(t=>this._onInteraction(t,!1))),N.on(this._element,eo,(t=>this._onInteraction(t,!0))),N.on(this._element,io,(t=>this._onInteraction(t,!1)))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=fo.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return R(fo),m(fo),{Alert:Q,Button:Y,Carousel:Lt,Collapse:Rt,Dropdown:Ki,Modal:kn,Offcanvas:Kn,Popover:_s,ScrollSpy:ks,Tab:Gs,Toast:fo,Tooltip:us}}));
//# sourceMappingURL=bootstrap.bundle.min.js.map

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;


/***/ }),

/***/ "./src/assets/styles/fonts.css":
/*!*************************************!*\
  !*** ./src/assets/styles/fonts.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/environments/enviroment.js":
/*!****************************************!*\
  !*** ./src/environments/enviroment.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// Configuración de entorno
var isProduction = "development" === 'production';
var environment = {
  production: isProduction,
  // API para rankings (PvP/PK)
  apiUrl: isProduction ? 'https://l2terra.online' : 'https://l2terra.online',
  // API para descargas de archivos
  downloadUrl: 'https://patch.l2terra.online'
};

/***/ }),

/***/ "./src/scripts/externalLinks.js":
/*!**************************************!*\
  !*** ./src/scripts/externalLinks.js ***!
  \**************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// Función para abrir enlaces externos
function openExternalLink(url) {
  console.log('=== DEBUG: Función openExternalLink llamada ===');
  console.log('URL:', url);
  console.log('window.electron existe:', !!window.electron);
  if (window.electron) {
    console.log('window.electron.openExternalLink existe:', !!window.electron.openExternalLink);
    console.log('Métodos disponibles en window.electron:', Object.keys(window.electron));
  }
  if (window.electron && window.electron.openExternalLink) {
    console.log('Usando Electron API');
    window.electron.openExternalLink(url).then(function (result) {
      console.log('Resultado de Electron:', result);
      if (result.success) {
        console.log('Enlace abierto exitosamente');
      } else {
        console.error('Error abriendo enlace:', result.error);
        // Fallback al navegador por defecto
        window.open(url, '_blank');
      }
    })["catch"](function (error) {
      console.error('Error en Electron API:', error);
      // Fallback al navegador por defecto
      window.open(url, '_blank');
    });
  } else {
    console.log('Electron no disponible, usando fallback');
    // Fallback si electron no está disponible
    window.open(url, '_blank');
  }
}

// Event listeners para los enlaces
document.addEventListener('DOMContentLoaded', function () {
  console.log('=== DOM cargado, configurando event listeners ===');

  // Encontrar todos los enlaces con data-url
  var externalLinks = document.querySelectorAll('.nav-link[data-url]');
  console.log('Enlaces externos encontrados:', externalLinks.length);
  externalLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var url = this.getAttribute('data-url');
      console.log('Clic en enlace externo:', url);
      openExternalLink(url);
    });
  });
});

// Verificar que la función se carga
console.log('=== Script externalLinks.js cargado ===');
console.log('Función openExternalLink disponible:', _typeof(openExternalLink));

/***/ }),

/***/ "./src/scripts/folderSelector.js":
/*!***************************************!*\
  !*** ./src/scripts/folderSelector.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initFolderSelector: () => (/* binding */ initFolderSelector)
/* harmony export */ });
function initFolderSelector() {
  console.log('=== Initializing FolderSelector ===');
  var selectFolderButton = document.getElementById('btnSelectFolder');
  var folderPathElement = document.getElementById('folderPath');
  if (!selectFolderButton || !folderPathElement) {
    console.error('DOM elements not found in folderSelector:', {
      selectFolderButton: !!selectFolderButton,
      folderPathElement: !!folderPathElement
    });
    return;
  }
  console.log('DOM elements found correctly');
  function updateUI() {
    var savedFolderPath = localStorage.getItem('selectedFolder');
    console.log('Folder saved in localStorage:', savedFolderPath);
    if (savedFolderPath) {
      selectFolderButton.textContent = 'Change Folder';
      folderPathElement.innerText = "Selected folder: ".concat(savedFolderPath);
    } else {
      selectFolderButton.textContent = 'Select Folder';
      folderPathElement.innerText = 'Selected folder: No folder selected';
    }
  }
  updateUI();

  // Función para inicializar cuando window.electron esté disponible
  function initWhenElectronReady() {
    if (window.electron) {
      // Elimina listeners previos
      var newBtn = selectFolderButton.cloneNode(true);
      selectFolderButton.parentNode.replaceChild(newBtn, selectFolderButton);
      newBtn.addEventListener('click', function () {
        console.log('=== Select Folder button clicked ===');
        console.log('window.electron exists:', !!window.electron);
        console.log('window.electron.openFolderDialog exists:', !!window.electron.openFolderDialog);
        window.electron.openFolderDialog();
      });
      window.electron.onFolderSelected(function (folderPath) {
        console.log('=== Folder selected ===');
        console.log('folderPath:', folderPath);
        if (folderPath) {
          localStorage.setItem('selectedFolder', folderPath);
          console.log('Folder saved in localStorage');

          // Limpiar estado de la carpeta anterior si existe
          var previousFolder = localStorage.getItem('previousSelectedFolder');
          if (previousFolder && previousFolder !== folderPath && window.gameLauncher) {
            console.log('Clearing state for previous folder:', previousFolder);
            window.gameLauncher.patchDownloader.clearStateForFolder(previousFolder);
          }

          // Guardar la carpeta actual como anterior para la próxima vez
          localStorage.setItem('previousSelectedFolder', folderPath);
        } else {
          localStorage.removeItem('selectedFolder');
          console.log('Folder removed from localStorage');
        }
        updateUI();

        // Check client status after selecting folder
        if (window.gameLauncher) {
          console.log('Checking client status...');
          window.gameLauncher.checkClientStatus();
        } else {
          console.log('window.gameLauncher not available');
        }
      });
    } else {
      // Si window.electron no está disponible, reintentar en 100ms
      setTimeout(initWhenElectronReady, 100);
    }
  }

  // Iniciar cuando esté listo
  initWhenElectronReady();
}

/***/ }),

/***/ "./src/scripts/gameLauncher.js":
/*!*************************************!*\
  !*** ./src/scripts/gameLauncher.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gameLauncher: () => (/* binding */ gameLauncher),
/* harmony export */   setupDownloadButton: () => (/* binding */ setupDownloadButton)
/* harmony export */ });
/* harmony import */ var _patchDownloader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./patchDownloader.js */ "./src/scripts/patchDownloader.js");
/* harmony import */ var _installer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./installer.js */ "./src/scripts/installer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// gameLauncher.js


var GameLauncher = /*#__PURE__*/function () {
  function GameLauncher() {
    _classCallCheck(this, GameLauncher);
    this.patchDownloader = new _patchDownloader_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.installer = new _installer_js__WEBPACK_IMPORTED_MODULE_1__.Installer();
    this.isDownloading = false;
    this.isInstalling = false;
    this.currentDownload = null;
    this.downloadStats = {
      totalFiles: 0,
      completedFiles: 0,
      currentFile: null,
      currentProgress: 0
    };
    this.isClientReady = false;
  }

  // Toast notification function
  return _createClass(GameLauncher, [{
    key: "showToast",
    value: function showToast(message) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
      var toast = document.getElementById('toast');
      var toastMessage = toast.querySelector('.toast-message');

      // Set message and type
      toastMessage.textContent = message;
      toast.className = "toast ".concat(type);

      // Show toast
      toast.classList.add('show');

      // Hide toast after duration
      setTimeout(function () {
        toast.classList.remove('show');
      }, duration);
    }
  }, {
    key: "setupDownloadButton",
    value: function setupDownloadButton() {
      var _this = this;
      var btnUpdate = document.getElementById('btnUpdate');
      var btnPlay = document.getElementById('btnPlay');
      var btnRepair = document.getElementById('btnRepair');
      var btnSelectFolder = document.getElementById('btnSelectFolder');
      var progressFill = document.getElementById('progressFill');
      var progressPercent = document.getElementById('progressPercent');
      var progressStatus = document.getElementById('progressStatus');
      var folderPath = document.getElementById('folderPath');

      // Verificar que todos los elementos estén presentes
      var requiredElements = {
        btnUpdate: btnUpdate,
        btnPlay: btnPlay,
        btnRepair: btnRepair,
        btnSelectFolder: btnSelectFolder,
        progressFill: progressFill,
        progressPercent: progressPercent,
        progressStatus: progressStatus,
        folderPath: folderPath
      };
      var missingElements = Object.entries(requiredElements).filter(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          name = _ref2[0],
          element = _ref2[1];
        return !element;
      }).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
          name = _ref4[0];
        return name;
      });
      if (missingElements.length > 0) {
        console.error('Elementos del DOM no encontrados:', missingElements);
        return;
      }
      console.log('All DOM elements found correctly');

      // Configure update button
      btnUpdate.addEventListener('click', function () {
        console.log('=== Update button clicked ===');
        if (_this.isDownloading) {
          console.log('Already downloading, ignoring click');
          return; // Avoid multiple downloads
        }
        console.log('Starting update...');
        _this.startUpdate(progressFill, progressPercent, progressStatus, btnUpdate, btnPlay);
      });

      // Configure play button
      btnPlay.addEventListener('click', function () {
        var selectedFolder = localStorage.getItem('selectedFolder');
        if (selectedFolder) {
          if (window.electron) {
            window.electron.launchGame(selectedFolder);
          } else {
            _this.showToast('Electron is not available.', 'error');
          }
        } else {
          _this.showToast('You must select a folder before playing.', 'error');
        }
      });

      // Configure repair button
      btnRepair.addEventListener('click', function () {
        _this.startRepair(progressFill, progressPercent, progressStatus, btnRepair);
      });

      // Verificar estado inicial
      this.checkClientStatus();
    }
  }, {
    key: "checkClientStatus",
    value: function () {
      var _checkClientStatus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var selectedFolder, progressFill, progressPercent, progressStatus, btnPlay, serverFiles, localFiles, filesToUpdate, percentage, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              selectedFolder = localStorage.getItem('selectedFolder');
              progressFill = document.getElementById('progressFill');
              progressPercent = document.getElementById('progressPercent');
              progressStatus = document.getElementById('progressStatus');
              btnPlay = document.getElementById('btnPlay');
              if (selectedFolder) {
                _context.n = 1;
                break;
              }
              progressFill.style.width = '0%';
              progressPercent.textContent = '0%';
              progressStatus.textContent = 'Select a folder to start';
              btnPlay.disabled = true;
              return _context.a(2);
            case 1:
              _context.p = 1;
              progressStatus.textContent = 'Checking client status...';

              // Initialize downloader
              _context.n = 2;
              return this.patchDownloader.initialize();
            case 2:
              _context.n = 3;
              return this.patchDownloader.getAvailableFiles();
            case 3:
              serverFiles = _context.v;
              _context.n = 4;
              return this.patchDownloader.getLocalFiles(selectedFolder);
            case 4:
              localFiles = _context.v;
              _context.n = 5;
              return this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);
            case 5:
              filesToUpdate = _context.v;
              if (filesToUpdate.length === 0) {
                // Everything is updated
                progressFill.style.width = '100%';
                progressPercent.textContent = '100%';
                progressStatus.textContent = 'Client updated ✓';
                btnPlay.disabled = false;
                this.isClientReady = true;
              } else {
                // Files need updating
                percentage = Math.round((serverFiles.length - filesToUpdate.length) / serverFiles.length * 100);
                progressFill.style.width = "".concat(percentage, "%");
                progressPercent.textContent = "".concat(percentage, "%");
                progressStatus.textContent = "".concat(filesToUpdate.length, " file(s) need updating");
                btnPlay.disabled = true;
                this.isClientReady = false;
              }
              _context.n = 7;
              break;
            case 6:
              _context.p = 6;
              _t = _context.v;
              console.error('Error checking client status:', _t);
              progressStatus.textContent = 'Error checking client status';
              btnPlay.disabled = true;
            case 7:
              return _context.a(2);
          }
        }, _callee, this, [[1, 6]]);
      }));
      function checkClientStatus() {
        return _checkClientStatus.apply(this, arguments);
      }
      return checkClientStatus;
    }()
  }, {
    key: "startUpdate",
    value: function () {
      var _startUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(progressFill, progressPercent, progressStatus, btnUpdate, btnPlay) {
        var _this2 = this;
        var selectedFolder, serverFiles, localFiles, filesToUpdate, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              console.log('=== startUpdate method started ===');
              _context2.p = 1;
              // Check if folder is selected
              selectedFolder = localStorage.getItem('selectedFolder');
              console.log('Selected folder:', selectedFolder);
              if (selectedFolder) {
                _context2.n = 2;
                break;
              }
              console.log('No folder selected');
              this.showToast('You must select a folder before updating.', 'error');
              return _context2.a(2);
            case 2:
              this.isDownloading = true;
              btnUpdate.disabled = true;
              progressStatus.textContent = 'Checking for updates...';
              progressFill.style.width = '0%';
              progressPercent.textContent = '0%';

              // Initialize downloader
              _context2.n = 3;
              return this.patchDownloader.initialize();
            case 3:
              progressStatus.textContent = 'Checking available files...';

              // Check if updates are needed
              console.log('=== Checking for updates ===');
              _context2.n = 4;
              return this.patchDownloader.getAvailableFiles();
            case 4:
              serverFiles = _context2.v;
              console.log('Server files:', serverFiles);
              _context2.n = 5;
              return this.patchDownloader.getLocalFiles(selectedFolder);
            case 5:
              localFiles = _context2.v;
              console.log('Local files:', localFiles);
              _context2.n = 6;
              return this.patchDownloader.getFilesToUpdate(serverFiles, localFiles);
            case 6:
              filesToUpdate = _context2.v;
              console.log('Files to update:', filesToUpdate);
              console.log('Files to update length:', filesToUpdate.length);
              if (!(filesToUpdate.length === 0)) {
                _context2.n = 7;
                break;
              }
              // No updates needed
              console.log('=== No updates needed ===');
              progressStatus.textContent = 'Game is already up to date ✓';
              progressFill.style.width = '100%';
              progressPercent.textContent = '100%';
              btnUpdate.disabled = false;
              this.isDownloading = false;

              // Show toast notification
              this.showToast('Game is already up to date!', 'success');
              return _context2.a(2);
            case 7:
              // Start download and extraction process
              this.patchDownloader.downloadAndExtractAllFiles(selectedFolder,
              // Download progress callback
              function (filename, downloaded, total, percent) {
                progressStatus.textContent = "Downloading: ".concat(filename);
                progressFill.style.width = "".concat(percent, "%");
                progressPercent.textContent = "".concat(percent, "%");
              },
              // Extraction progress callback
              function (filename, percent) {
                progressStatus.textContent = "Installing: ".concat(filename);
                progressFill.style.width = "".concat(percent, "%");
                progressPercent.textContent = "".concat(percent, "%");
              },
              // File completed callback
              function (filename, completed, total) {
                var totalProgress = Math.round(completed / total * 100);
                progressFill.style.width = "".concat(totalProgress, "%");
                progressPercent.textContent = "".concat(totalProgress, "%");
                progressStatus.textContent = "Processing files... ".concat(completed, "/").concat(total, " (").concat(totalProgress, "%)");
              },
              // Completed callback
              function (summary) {
                progressStatus.textContent = 'Update completed ✓';
                progressFill.style.width = '100%';
                progressPercent.textContent = '100%';
                btnPlay.disabled = false;
                _this2.isClientReady = true;
                btnUpdate.disabled = false;
                _this2.isDownloading = false;
                console.log('Update completed:', summary);

                // Show success toast
                var successMessage = typeof summary === 'string' ? summary : "Update completed. ".concat(summary.downloaded, " files processed").concat(summary.failed > 0 ? ", ".concat(summary.failed, " failed") : '');
                _this2.showToast(successMessage, 'success');
              },
              // Error callback
              function (error) {
                progressStatus.textContent = "Error: ".concat(error.message);
                btnUpdate.disabled = false;
                _this2.isDownloading = false;
                console.error('Update error:', error);

                // Show error toast
                _this2.showToast("Update error: ".concat(error.message), 'error');
              });
              _context2.n = 9;
              break;
            case 8:
              _context2.p = 8;
              _t2 = _context2.v;
              progressStatus.textContent = "Error: ".concat(_t2.message);
              btnUpdate.disabled = false;
              this.isDownloading = false;
              console.error('Error in startUpdate:', _t2);

              // Show error toast
              this.showToast("Update error: ".concat(_t2.message), 'error');
            case 9:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 8]]);
      }));
      function startUpdate(_x, _x2, _x3, _x4, _x5) {
        return _startUpdate.apply(this, arguments);
      }
      return startUpdate;
    }()
  }, {
    key: "startRepair",
    value: function () {
      var _startRepair = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(progressFill, progressPercent, progressStatus, btnRepair) {
        var selectedFolder, i, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              selectedFolder = localStorage.getItem('selectedFolder');
              if (selectedFolder) {
                _context3.n = 1;
                break;
              }
              this.showToast('You must select a folder before repairing.', 'error');
              return _context3.a(2);
            case 1:
              this.isDownloading = true;
              btnRepair.disabled = true;
              progressStatus.textContent = 'Starting repair...';
              progressFill.style.width = '0%';
              progressPercent.textContent = '0%';

              // Simulate repair process
              i = 0;
            case 2:
              if (!(i <= 100)) {
                _context3.n = 5;
                break;
              }
              if (this.isDownloading) {
                _context3.n = 3;
                break;
              }
              return _context3.a(3, 5);
            case 3:
              progressFill.style.width = "".concat(i, "%");
              progressPercent.textContent = "".concat(i, "%");
              progressStatus.textContent = "Repairing files... ".concat(i, "%");
              _context3.n = 4;
              return new Promise(function (resolve) {
                return setTimeout(resolve, 200);
              });
            case 4:
              i += 10;
              _context3.n = 2;
              break;
            case 5:
              if (this.isDownloading) {
                progressFill.style.width = '100%';
                progressPercent.textContent = '100%';
                progressStatus.textContent = 'Repair completed ✓';
                btnRepair.disabled = false;
                this.isDownloading = false;
                this.showToast('Files have been repaired successfully!', 'success');
              }
              _context3.n = 7;
              break;
            case 6:
              _context3.p = 6;
              _t3 = _context3.v;
              progressStatus.textContent = "Repair error: ".concat(_t3.message);
              btnRepair.disabled = false;
              this.isDownloading = false;
              console.error('Repair error:', _t3);
            case 7:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 6]]);
      }));
      function startRepair(_x6, _x7, _x8, _x9) {
        return _startRepair.apply(this, arguments);
      }
      return startRepair;
    }()
  }, {
    key: "updateFileList",
    value: function updateFileList(filename, progress, status) {
      var fileList = document.getElementById('fileList');
      if (!fileList) return;
      fileList.style.display = 'block';

      // Buscar o crear elemento para este archivo
      var fileElement = fileList.querySelector("[data-filename=\"".concat(filename, "\"]"));
      if (!fileElement) {
        fileElement = document.createElement('div');
        fileElement.setAttribute('data-filename', filename);
        fileElement.className = 'file-item';
        fileList.appendChild(fileElement);
      }

      // Actualizar contenido del elemento
      var statusIcon = status === 'downloading' ? '📥' : status === 'completed' ? '✅' : status === 'error' ? '❌' : '⏳';
      fileElement.innerHTML = "\n      <div style=\"display: flex; justify-content: space-between; align-items: center;\">\n        <span>".concat(statusIcon, " ").concat(filename, "</span>\n        <span>").concat(progress, "%</span>\n      </div>\n      ").concat(status === 'downloading' ? "<div class=\"file-progress\"><div class=\"file-progress-fill\" style=\"width: ".concat(progress, "%;\"></div></div>") : '', "\n    ");
    }
  }, {
    key: "calculateDownloadSpeed",
    value: function calculateDownloadSpeed(downloaded, total) {
      if (!downloaded || !total) return '';
      var downloadedMB = (downloaded / (1024 * 1024)).toFixed(1);
      var totalMB = (total / (1024 * 1024)).toFixed(1);
      return "".concat(downloadedMB, "MB / ").concat(totalMB, "MB");
    }
  }, {
    key: "showNotification",
    value: function showNotification(title, message) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'info';
      // Crear notificación visual
      var notification = document.createElement('div');
      notification.className = "notification ".concat(type);
      notification.innerHTML = "\n      <strong>".concat(title, "</strong><br>\n      ").concat(message, "\n    ");
      document.body.appendChild(notification);

      // Remover después de 5 segundos
      setTimeout(function () {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 5000);
    }

    // Verificar actualizaciones disponibles
  }, {
    key: "checkForUpdates",
    value: function () {
      var _checkForUpdates = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var files, _t4;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              _context4.n = 1;
              return this.patchDownloader.initialize();
            case 1:
              _context4.n = 2;
              return this.patchDownloader.getAvailableFiles();
            case 2:
              files = _context4.v;
              console.log('Archivos disponibles:', files);
              return _context4.a(2, files);
            case 3:
              _context4.p = 3;
              _t4 = _context4.v;
              console.error('Error verificando actualizaciones:', _t4);
              return _context4.a(2, null);
          }
        }, _callee4, this, [[0, 3]]);
      }));
      function checkForUpdates() {
        return _checkForUpdates.apply(this, arguments);
      }
      return checkForUpdates;
    }() // Obtener información de un archivo específico
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(filename) {
        var info, _t5;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              _context5.n = 1;
              return this.patchDownloader.getFileInfo(filename);
            case 1:
              info = _context5.v;
              console.log('Información del archivo:', info);
              return _context5.a(2, info);
            case 2:
              _context5.p = 2;
              _t5 = _context5.v;
              console.error('Error obteniendo información del archivo:', _t5);
              return _context5.a(2, null);
          }
        }, _callee5, this, [[0, 2]]);
      }));
      function getFileInfo(_x0) {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }() // Obtener estadísticas de descarga
  }, {
    key: "getDownloadStats",
    value: function getDownloadStats() {
      return this.patchDownloader.getDownloadStats();
    }

    // Las barras de progreso ahora están siempre visibles en el HTML
    // No necesitamos crear barras dinámicamente
  }, {
    key: "createProgressBars",
    value: function createProgressBars(fileList) {
      // Las barras ya están en el HTML, solo mostrar la lista de archivos si es necesario
      if (fileList) {
        fileList.style.display = 'block';
      }
    }

    // Actualizar progreso de descarga
  }, {
    key: "updateDownloadProgress",
    value: function updateDownloadProgress(filename, percent) {
      var downloadProgressFill = document.getElementById('downloadProgressFill');
      var downloadProgressPercent = document.getElementById('downloadProgressPercent');
      var downloadStatus = document.getElementById('downloadStatus');
      if (downloadProgressFill && downloadProgressPercent && downloadStatus) {
        downloadProgressFill.style.width = "".concat(percent, "%");
        downloadProgressPercent.textContent = "".concat(percent, "%");
        downloadStatus.textContent = "Descargando: ".concat(filename);
      }
    }

    // Actualizar progreso de instalación (extracción)
  }, {
    key: "updateInstallationProgress",
    value: function updateInstallationProgress(filename, percent) {
      var installationProgressFill = document.getElementById('installationProgressFill');
      var installationProgressPercent = document.getElementById('installationProgressPercent');
      var installationStatus = document.getElementById('installationStatus');
      if (installationProgressFill && installationProgressPercent && installationStatus) {
        installationProgressFill.style.width = "".concat(percent, "%");
        installationProgressPercent.textContent = "".concat(percent, "%");
        installationStatus.textContent = "Instalando: ".concat(filename);
      }
    }

    // Ocultar lista de archivos (las barras siempre están visibles)
  }, {
    key: "hideProgressBars",
    value: function hideProgressBars() {
      var fileList = document.getElementById('fileList');
      if (fileList) {
        fileList.style.display = 'none';
      }

      // Resetear barras de progreso
      this.resetProgressBars();
    }

    // Resetear barras de progreso
  }, {
    key: "resetProgressBars",
    value: function resetProgressBars() {
      var downloadProgressFill = document.getElementById('downloadProgressFill');
      var downloadProgressPercent = document.getElementById('downloadProgressPercent');
      var downloadStatus = document.getElementById('downloadStatus');
      var installationProgressFill = document.getElementById('installationProgressFill');
      var installationProgressPercent = document.getElementById('installationProgressPercent');
      var installationStatus = document.getElementById('installationStatus');
      if (downloadProgressFill && downloadProgressPercent && downloadStatus) {
        downloadProgressFill.style.width = '0%';
        downloadProgressPercent.textContent = '0%';
        downloadStatus.textContent = 'Esperando...';
      }
      if (installationProgressFill && installationProgressPercent && installationStatus) {
        installationProgressFill.style.width = '0%';
        installationProgressPercent.textContent = '0%';
        installationStatus.textContent = 'Esperando...';
      }
    }

    // Cargar rankings desde API
  }, {
    key: "loadRankings",
    value: function () {
      var _loadRankings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var mockPvpRankings, mockPkRankings;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.n) {
            case 0:
              try {
                // Mock data por ahora - aquí se conectaría a la API real
                mockPvpRankings = [{
                  position: 1,
                  name: 'DragonSlayer',
                  score: 1250
                }, {
                  position: 2,
                  name: 'ShadowKnight',
                  score: 1180
                }, {
                  position: 3,
                  name: 'BloodWarrior',
                  score: 1120
                }, {
                  position: 4,
                  name: 'DarkMage',
                  score: 1050
                }, {
                  position: 5,
                  name: 'IronGuard',
                  score: 980
                }];
                mockPkRankings = [{
                  position: 1,
                  name: 'DeathBringer',
                  score: 850
                }, {
                  position: 2,
                  name: 'NightHunter',
                  score: 780
                }, {
                  position: 3,
                  name: 'ChaosLord',
                  score: 720
                }, {
                  position: 4,
                  name: 'VoidWalker',
                  score: 680
                }, {
                  position: 5,
                  name: 'SoulReaper',
                  score: 620
                }];
                this.updateRankings('topPvpList', mockPvpRankings);
                this.updateRankings('topPkList', mockPkRankings);

                // En el futuro, aquí se haría la llamada real a la API:
                // const pvpRankings = await fetch('/api/rankings/pvp').then(r => r.json());
                // const pkRankings = await fetch('/api/rankings/pk').then(r => r.json());
              } catch (error) {
                console.error('Error cargando rankings:', error);
              }
            case 1:
              return _context6.a(2);
          }
        }, _callee6, this);
      }));
      function loadRankings() {
        return _loadRankings.apply(this, arguments);
      }
      return loadRankings;
    }() // Actualizar rankings en el DOM
  }, {
    key: "updateRankings",
    value: function updateRankings(listId, rankings) {
      var listElement = document.getElementById(listId);
      if (!listElement) return;
      listElement.innerHTML = '';
      rankings.forEach(function (ranking) {
        var item = document.createElement('div');
        item.className = 'ranking-item';
        item.innerHTML = "\n        <span class=\"ranking-position\">".concat(ranking.position, "</span>\n        <span class=\"ranking-name\">").concat(ranking.name, "</span>\n        <span class=\"ranking-score\">").concat(ranking.score.toLocaleString(), "</span>\n      ");
        listElement.appendChild(item);
      });
    }
  }]);
}(); // Instanciar y configurar
var gameLauncher = new GameLauncher();
function setupDownloadButton() {
  gameLauncher.setupDownloadButton();
}


/***/ }),

/***/ "./src/scripts/installer.js":
/*!**********************************!*\
  !*** ./src/scripts/installer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Installer: () => (/* binding */ Installer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// installer.js
var path = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
var Installer = /*#__PURE__*/function () {
  function Installer() {
    _classCallCheck(this, Installer);
    this.isInstalling = false;
    this.currentStep = '';
    this.totalSteps = 0;
    this.currentStepNumber = 0;
    this.installedFiles = new Set();
    this.failedFiles = new Set();
  }

  // Inicializar el instalador
  return _createClass(Installer, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              console.log('[INSTALLER] Inicializando instalador...');
              this.isInstalling = false;
              this.currentStep = '';
              this.totalSteps = 0;
              this.currentStepNumber = 0;
              this.installedFiles.clear();
              this.failedFiles.clear();
            case 1:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }() // Proceso completo de instalación
  }, {
    key: "installAllFiles",
    value: function () {
      var _installAllFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(destFolder, patchDownloader, onProgress, onComplete, onError) {
        var summary, _t;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              if (!this.isInstalling) {
                _context2.n = 1;
                break;
              }
              console.log('[INSTALLER] Ya hay una instalación en progreso');
              return _context2.a(2);
            case 1:
              _context2.p = 1;
              this.isInstalling = true;
              this.totalSteps = 4; // Descargar, Extraer, Instalar, Limpiar
              this.currentStepNumber = 0;
              console.log('[INSTALLER] Iniciando proceso de instalación completo...');

              // Paso 1: Descargar archivos
              _context2.n = 2;
              return this.downloadFiles(destFolder, patchDownloader, onProgress);
            case 2:
              if (this.isInstalling) {
                _context2.n = 3;
                break;
              }
              return _context2.a(2);
            case 3:
              _context2.n = 4;
              return this.extractFiles(destFolder, onProgress);
            case 4:
              if (this.isInstalling) {
                _context2.n = 5;
                break;
              }
              return _context2.a(2);
            case 5:
              _context2.n = 6;
              return this.installFiles(destFolder, onProgress);
            case 6:
              if (this.isInstalling) {
                _context2.n = 7;
                break;
              }
              return _context2.a(2);
            case 7:
              _context2.n = 8;
              return this.cleanupFiles(destFolder, onProgress);
            case 8:
              // Resumen final
              summary = {
                totalSteps: this.totalSteps,
                completedSteps: this.currentStepNumber,
                installedFiles: Array.from(this.installedFiles),
                failedFiles: Array.from(this.failedFiles),
                message: 'Instalación completada exitosamente'
              };
              console.log('[INSTALLER] Instalación completada:', summary);
              onComplete === null || onComplete === void 0 || onComplete(summary);
              _context2.n = 10;
              break;
            case 9:
              _context2.p = 9;
              _t = _context2.v;
              console.error('[INSTALLER] Error en instalación:', _t);
              onError === null || onError === void 0 || onError(_t);
            case 10:
              _context2.p = 10;
              this.isInstalling = false;
              return _context2.f(10);
            case 11:
              return _context2.a(2);
          }
        }, _callee2, this, [[1, 9, 10, 11]]);
      }));
      function installAllFiles(_x, _x2, _x3, _x4, _x5) {
        return _installAllFiles.apply(this, arguments);
      }
      return installAllFiles;
    }() // Paso 1: Descargar archivos
  }, {
    key: "downloadFiles",
    value: function () {
      var _downloadFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(destFolder, patchDownloader, onProgress) {
        var _this = this;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              this.currentStep = 'Descargando archivos...';
              this.currentStepNumber = 1;
              this.updateProgress(onProgress);
              console.log('[INSTALLER] Paso 1: Descargando archivos...');

              // Crear carpeta temporal para descargas
              this.tempDownloadFolder = path.join(destFolder, 'temp_downloads');
              console.log("[INSTALLER] Carpeta temporal creada: ".concat(this.tempDownloadFolder));
              return _context3.a(2, new Promise(function (resolve, reject) {
                patchDownloader.downloadAllFiles(_this.tempDownloadFolder,
                // Descargar en carpeta temporal
                function (completed, total, percent) {
                  // Progreso de descarga
                  _this.updateProgress(onProgress, percent);
                }, function (filename, downloaded, total, percent) {
                  // Progreso de archivo individual
                  console.log("[INSTALLER] Descargando ".concat(filename, ": ").concat(percent, "%"));
                }, function (summary) {
                  console.log('[INSTALLER] Descarga completada:', summary);
                  // Verificar si se descargaron archivos o si todos están actualizados
                  if (summary.downloaded > 0 || typeof summary === 'string' && summary.includes('actualizados')) {
                    resolve(summary);
                  } else {
                    reject(new Error('No se descargaron archivos'));
                  }
                }, function (error) {
                  console.error('[INSTALLER] Error en descarga:', error);
                  reject(error);
                });
              }));
          }
        }, _callee3, this);
      }));
      function downloadFiles(_x6, _x7, _x8) {
        return _downloadFiles.apply(this, arguments);
      }
      return downloadFiles;
    }() // Paso 2: Extraer archivos ZIP
  }, {
    key: "extractFiles",
    value: function () {
      var _extractFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(destFolder, onProgress) {
        var files, zipFiles, i, zipFile, zipPath, extractProgress, _t2, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              this.currentStep = 'Extrayendo archivos...';
              this.currentStepNumber = 2;
              this.updateProgress(onProgress);
              console.log('[INSTALLER] Paso 2: Extrayendo archivos...');
              console.log("[INSTALLER] Carpeta temporal: ".concat(this.tempDownloadFolder));
              console.log("[INSTALLER] Carpeta destino: ".concat(destFolder));
              _context4.p = 1;
              // Verificar que la carpeta temporal existe
              console.log("[INSTALLER] Verificando existencia de carpeta temporal...");

              // Usar IPC para obtener la lista de archivos de la carpeta temporal
              _context4.n = 2;
              return window.electron.getDirectoryFiles(this.tempDownloadFolder);
            case 2:
              files = _context4.v;
              console.log("[INSTALLER] Archivos encontrados en carpeta temporal:", files);
              zipFiles = files.filter(function (file) {
                return file.endsWith('.zip');
              });
              console.log("[INSTALLER] Archivos ZIP encontrados:", zipFiles);
              if (!(zipFiles.length === 0)) {
                _context4.n = 3;
                break;
              }
              console.log('[INSTALLER] No hay archivos ZIP para extraer');
              // Si no hay archivos ZIP, continuar con el siguiente paso
              return _context4.a(2);
            case 3:
              console.log("[INSTALLER] Encontrados ".concat(zipFiles.length, " archivos ZIP para extraer"));
              i = 0;
            case 4:
              if (!(i < zipFiles.length)) {
                _context4.n = 10;
                break;
              }
              if (this.isInstalling) {
                _context4.n = 5;
                break;
              }
              return _context4.a(3, 10);
            case 5:
              zipFile = zipFiles[i];
              zipPath = path.join(this.tempDownloadFolder, zipFile);
              console.log("[INSTALLER] Extrayendo ".concat(zipFile, " a ").concat(destFolder, "..."));
              console.log("[INSTALLER] Ruta completa del ZIP: ".concat(zipPath));
              _context4.p = 6;
              _context4.n = 7;
              return this.extractZipFile(zipPath, destFolder);
            case 7:
              this.installedFiles.add(zipFile);

              // Progreso de extracción
              extractProgress = Math.round((i + 1) / zipFiles.length * 100);
              this.updateProgress(onProgress, extractProgress);
              _context4.n = 9;
              break;
            case 8:
              _context4.p = 8;
              _t2 = _context4.v;
              console.error("[INSTALLER] Error extrayendo ".concat(zipFile, ":"), _t2);
              this.failedFiles.add(zipFile);
            case 9:
              i++;
              _context4.n = 4;
              break;
            case 10:
              _context4.n = 12;
              break;
            case 11:
              _context4.p = 11;
              _t3 = _context4.v;
              console.error('[INSTALLER] Error en extracción:', _t3);
              throw _t3;
            case 12:
              return _context4.a(2);
          }
        }, _callee4, this, [[6, 8], [1, 11]]);
      }));
      function extractFiles(_x9, _x0) {
        return _extractFiles.apply(this, arguments);
      }
      return extractFiles;
    }() // Extraer archivo ZIP individual
  }, {
    key: "extractZipFile",
    value: function () {
      var _extractZipFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(zipPath, destFolder) {
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.n) {
            case 0:
              return _context5.a(2, new Promise(function (resolve, reject) {
                // Usar IPC para comunicarse con el proceso principal
                window.electron.extractZipFile(zipPath, destFolder).then(function () {
                  console.log("[INSTALLER] Extracci\xF3n completada: ".concat(path.basename(zipPath)));
                  resolve();
                })["catch"](function (error) {
                  console.error("[INSTALLER] Error en extracci\xF3n:", error);
                  reject(new Error("Error extrayendo archivo: ".concat(error)));
                });
              }));
          }
        }, _callee5);
      }));
      function extractZipFile(_x1, _x10) {
        return _extractZipFile.apply(this, arguments);
      }
      return extractZipFile;
    }() // Paso 3: Instalar archivos (mover a ubicaciones finales)
  }, {
    key: "installFiles",
    value: function () {
      var _installFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(destFolder, onProgress) {
        var extractedFiles, i, file, installProgress, _t4, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              this.currentStep = 'Instalando archivos...';
              this.currentStepNumber = 3;
              this.updateProgress(onProgress);
              console.log('[INSTALLER] Paso 3: Instalando archivos...');
              _context6.p = 1;
              _context6.n = 2;
              return this.findExtractedFiles(destFolder);
            case 2:
              extractedFiles = _context6.v;
              console.log("[INSTALLER] Encontrados ".concat(extractedFiles.length, " archivos para instalar"));
              if (!(extractedFiles.length === 0)) {
                _context6.n = 3;
                break;
              }
              console.log('[INSTALLER] No hay archivos para instalar');
              return _context6.a(2);
            case 3:
              i = 0;
            case 4:
              if (!(i < extractedFiles.length)) {
                _context6.n = 10;
                break;
              }
              if (this.isInstalling) {
                _context6.n = 5;
                break;
              }
              return _context6.a(3, 10);
            case 5:
              file = extractedFiles[i];
              _context6.p = 6;
              _context6.n = 7;
              return this.installFile(file, destFolder);
            case 7:
              this.installedFiles.add(path.basename(file));

              // Progreso de instalación
              installProgress = Math.round((i + 1) / extractedFiles.length * 100);
              this.updateProgress(onProgress, installProgress);
              _context6.n = 9;
              break;
            case 8:
              _context6.p = 8;
              _t4 = _context6.v;
              console.error("[INSTALLER] Error instalando ".concat(file, ":"), _t4);
              this.failedFiles.add(path.basename(file));
            case 9:
              i++;
              _context6.n = 4;
              break;
            case 10:
              _context6.n = 12;
              break;
            case 11:
              _context6.p = 11;
              _t5 = _context6.v;
              console.error('[INSTALLER] Error en instalación:', _t5);
              throw _t5;
            case 12:
              return _context6.a(2);
          }
        }, _callee6, this, [[6, 8], [1, 11]]);
      }));
      function installFiles(_x11, _x12) {
        return _installFiles.apply(this, arguments);
      }
      return installFiles;
    }() // Encontrar archivos extraídos
  }, {
    key: "findExtractedFiles",
    value: function () {
      var _findExtractedFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(destFolder) {
        var files, filesToProcess, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              _context7.n = 1;
              return window.electron.getDirectoryFilesRecursive(destFolder);
            case 1:
              files = _context7.v;
              // Filtrar archivos que necesitan ser procesados
              filesToProcess = files.filter(function (file) {
                // Excluir archivos ZIP
                if (file.endsWith('.zip')) return false;

                // Solo incluir archivos que están en subdirectorios (no en la raíz)
                var relativePath = file.replace(destFolder, '').replace(/^[\\\/]/, '');
                var pathParts = relativePath.split(/[\\\/]/);

                // Si el archivo está en un subdirectorio, necesita ser movido
                return pathParts.length > 1;
              });
              console.log("[INSTALLER] Archivos que necesitan ser movidos: ".concat(filesToProcess.length));
              return _context7.a(2, filesToProcess);
            case 2:
              _context7.p = 2;
              _t6 = _context7.v;
              console.error('[INSTALLER] Error obteniendo archivos extraídos:', _t6);
              return _context7.a(2, []);
          }
        }, _callee7, null, [[0, 2]]);
      }));
      function findExtractedFiles(_x13) {
        return _findExtractedFiles.apply(this, arguments);
      }
      return findExtractedFiles;
    }() // Instalar archivo individual
  }, {
    key: "installFile",
    value: function () {
      var _installFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(filePath, destFolder) {
        var fileName, targetPath, _t7;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.p = _context8.n) {
            case 0:
              _context8.p = 0;
              fileName = path.basename(filePath);
              targetPath = path.join(destFolder, fileName); // Verificar si el archivo ya está en la ubicación correcta
              if (!(filePath === targetPath)) {
                _context8.n = 1;
                break;
              }
              console.log("[INSTALLER] Archivo ya en ubicaci\xF3n correcta: ".concat(fileName));
              return _context8.a(2);
            case 1:
              _context8.n = 2;
              return window.electron.moveFile(filePath, targetPath);
            case 2:
              console.log("[INSTALLER] Instalado: ".concat(fileName));
              _context8.n = 4;
              break;
            case 3:
              _context8.p = 3;
              _t7 = _context8.v;
              console.error("[INSTALLER] Error instalando archivo:", _t7);
              throw _t7;
            case 4:
              return _context8.a(2);
          }
        }, _callee8, null, [[0, 3]]);
      }));
      function installFile(_x14, _x15) {
        return _installFile.apply(this, arguments);
      }
      return installFile;
    }() // Paso 4: Limpiar archivos temporales
  }, {
    key: "cleanupFiles",
    value: function () {
      var _cleanupFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(destFolder, onProgress) {
        var _t8;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              this.currentStep = 'Limpiando archivos temporales...';
              this.currentStepNumber = 4;
              this.updateProgress(onProgress);
              console.log('[INSTALLER] Paso 4: Limpiando archivos temporales...');
              _context9.p = 1;
              if (!this.tempDownloadFolder) {
                _context9.n = 3;
                break;
              }
              console.log("[INSTALLER] Eliminando carpeta temporal: ".concat(this.tempDownloadFolder));
              _context9.n = 2;
              return window.electron.removeDirectory(this.tempDownloadFolder);
            case 2:
              console.log('[INSTALLER] Carpeta temporal eliminada');
            case 3:
              _context9.n = 5;
              break;
            case 4:
              _context9.p = 4;
              _t8 = _context9.v;
              console.error('[INSTALLER] Error en limpieza:', _t8);
              // No lanzar error aquí, la limpieza no es crítica
            case 5:
              return _context9.a(2);
          }
        }, _callee9, this, [[1, 4]]);
      }));
      function cleanupFiles(_x16, _x17) {
        return _cleanupFiles.apply(this, arguments);
      }
      return cleanupFiles;
    }() // Actualizar progreso
  }, {
    key: "updateProgress",
    value: function updateProgress(onProgress) {
      var stepProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var overallProgress = Math.round((this.currentStepNumber - 1) / this.totalSteps * 100 + stepProgress / this.totalSteps);
      onProgress === null || onProgress === void 0 || onProgress({
        step: this.currentStepNumber,
        totalSteps: this.totalSteps,
        currentStep: this.currentStep,
        stepProgress: stepProgress,
        overallProgress: overallProgress
      });
    }

    // Cancelar instalación
  }, {
    key: "cancelInstallation",
    value: function cancelInstallation() {
      console.log('[INSTALLER] Cancelando instalación...');
      this.isInstalling = false;
    }

    // Obtener estadísticas de instalación
  }, {
    key: "getInstallStats",
    value: function getInstallStats() {
      return {
        isInstalling: this.isInstalling,
        currentStep: this.currentStep,
        currentStepNumber: this.currentStepNumber,
        totalSteps: this.totalSteps,
        installedFiles: Array.from(this.installedFiles),
        failedFiles: Array.from(this.failedFiles)
      };
    }
  }]);
}();


/***/ }),

/***/ "./src/scripts/patchDownloader.js":
/*!****************************************!*\
  !*** ./src/scripts/patchDownloader.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _environments_enviroment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/enviroment.js */ "./src/environments/enviroment.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// patchDownloader.js

var PatchDownloader = /*#__PURE__*/function () {
  function PatchDownloader() {
    _classCallCheck(this, PatchDownloader);
    this.baseUrl = _environments_enviroment_js__WEBPACK_IMPORTED_MODULE_0__.environment.downloadUrl;
    this.token = null;
    this.tokenExpiry = null;
    this.downloadQueue = [];
    this.isDownloading = false;
    this.currentDownload = null;
    this.retryAttempts = 3;
    this.downloadedFiles = new Set();
    this.failedFiles = new Set();
    this.tempDownloadFolder = null;
    this.userDataFolder = null;
    this.updateStateFile = null;
    this.extractionProgress = 0;
    this.downloadProgress = 0;
    this.currentFolder = null; // Nueva propiedad para trackear la carpeta actual
  }

  // Función para generar un hash simple de la ruta de la carpeta
  return _createClass(PatchDownloader, [{
    key: "generateFolderHash",
    value: function generateFolderHash(folderPath) {
      // Crear un hash simple basado en la ruta de la carpeta
      var hash = 0;
      for (var i = 0; i < folderPath.length; i++) {
        var _char = folderPath.charCodeAt(i);
        hash = (hash << 5) - hash + _char;
        hash = hash & hash; // Convertir a entero de 32 bits
      }
      return Math.abs(hash).toString(16);
    }

    // Inicializar el downloader
  }, {
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              console.log('[PATCH] Inicializando PatchDownloader...');

              // Obtener carpeta userData para archivo de estado
              if (!window.electron) {
                _context.n = 2;
                break;
              }
              _context.n = 1;
              return window.electron.getUserDataPath();
            case 1:
              this.userDataFolder = _context.v;
              console.log('[PATCH] UserData folder:', this.userDataFolder);
            case 2:
              _context.n = 3;
              return this.getToken();
            case 3:
              console.log('[PATCH] Inicialización completada');
              return _context.a(2, true);
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('[PATCH] Error en inicialización:', _t);
              throw _t;
            case 5:
              return _context.a(2);
          }
        }, _callee, this, [[0, 4]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }() // Actualizar el estado de la carpeta actual
  }, {
    key: "updateCurrentFolder",
    value: function updateCurrentFolder(folderPath) {
      this.currentFolder = folderPath;
      if (this.currentFolder && window.electron) {
        var folderHash = this.generateFolderHash(this.currentFolder);
        this.updateStateFile = window.electron.path.join(this.userDataFolder, "update_state_".concat(folderHash, ".json"));
        console.log('[PATCH] Current folder updated:', this.currentFolder);
        console.log('[PATCH] Folder hash:', folderHash);
        console.log('[PATCH] Update state file:', this.updateStateFile);
      }
    }

    // Limpiar estado cuando se cambia de carpeta
  }, {
    key: "clearStateForFolder",
    value: function clearStateForFolder(folderPath) {
      if (window.electron && this.userDataFolder) {
        var folderHash = this.generateFolderHash(folderPath);
        var stateFile = window.electron.path.join(this.userDataFolder, "update_state_".concat(folderHash, ".json"));
        try {
          // Intentar eliminar el archivo de estado si existe
          window.electron.writeFile(stateFile, '').then(function () {
            console.log('[PATCH] Cleared state for folder:', folderPath);
          })["catch"](function () {
            // Si el archivo no existe, no hay problema
            console.log('[PATCH] No state file to clear for folder:', folderPath);
          });
        } catch (error) {
          console.log('[PATCH] Error clearing state:', error);
        }
      }
    }

    // Obtener token JWT del servidor
  }, {
    key: "getToken",
    value: function () {
      var _getToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log('[PATCH] === Getting JWT token ===');
              console.log('[PATCH] Requesting from URL:', this.baseUrl);
              _context2.n = 1;
              return fetch(this.baseUrl);
            case 1:
              response = _context2.v;
              console.log('[PATCH] Response status:', response.status);
              if (response.ok) {
                _context2.n = 2;
                break;
              }
              throw new Error("Error HTTP: ".concat(response.status));
            case 2:
              _context2.n = 3;
              return response.json();
            case 3:
              data = _context2.v;
              console.log('[PATCH] Token response data:', data);
              if (data.success) {
                _context2.n = 4;
                break;
              }
              throw new Error(data.message || 'Error al obtener token');
            case 4:
              this.token = data.token;
              this.tokenExpiry = Date.now() + data.expires_in * 1000;
              console.log('[PATCH] Token obtained successfully');
              console.log('[PATCH] Token expiry:', new Date(this.tokenExpiry));
              return _context2.a(2, this.token);
            case 5:
              _context2.p = 5;
              _t2 = _context2.v;
              console.error('[PATCH] Error obteniendo token:', _t2);
              throw _t2;
            case 6:
              return _context2.a(2);
          }
        }, _callee2, this, [[0, 5]]);
      }));
      function getToken() {
        return _getToken.apply(this, arguments);
      }
      return getToken;
    }() // Verificar si el token está expirado y renovarlo si es necesario
  }, {
    key: "checkAndUpdateToken",
    value: function () {
      var _checkAndUpdateToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var now, bufferTime;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              now = Date.now();
              bufferTime = 5 * 60 * 1000; // 5 minutos de buffer
              if (!(!this.token || this.tokenExpiry && now >= this.tokenExpiry - bufferTime)) {
                _context3.n = 1;
                break;
              }
              console.log('[PATCH] Token expirado o próximo a expirar, renovando...');
              _context3.n = 1;
              return this.getToken();
            case 1:
              return _context3.a(2, this.token);
          }
        }, _callee3, this);
      }));
      function checkAndUpdateToken() {
        return _checkAndUpdateToken.apply(this, arguments);
      }
      return checkAndUpdateToken;
    }() // Obtener archivos disponibles del servidor
  }, {
    key: "getAvailableFiles",
    value: function () {
      var _getAvailableFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
        var requestUrl, response, data, _t3;
        return _regenerator().w(function (_context4) {
          while (1) switch (_context4.p = _context4.n) {
            case 0:
              _context4.p = 0;
              console.log('[PATCH] === Getting available files ===');
              console.log('[PATCH] Base URL:', this.baseUrl);
              _context4.n = 1;
              return this.checkAndUpdateToken();
            case 1:
              console.log('[PATCH] Token obtained:', this.token ? 'YES' : 'NO');
              requestUrl = "".concat(this.baseUrl, "?action=list&token=").concat(this.token);
              console.log('[PATCH] Request URL:', requestUrl);
              _context4.n = 2;
              return fetch(requestUrl);
            case 2:
              response = _context4.v;
              console.log('[PATCH] Response status:', response.status);
              if (response.ok) {
                _context4.n = 3;
                break;
              }
              throw new Error("Error HTTP: ".concat(response.status));
            case 3:
              _context4.n = 4;
              return response.json();
            case 4:
              data = _context4.v;
              console.log('[PATCH] Response data:', data);
              if (data.success) {
                _context4.n = 5;
                break;
              }
              throw new Error(data.message || 'Error al obtener lista de archivos');
            case 5:
              console.log('[PATCH] Archivos disponibles:', data.files);
              return _context4.a(2, data.files || []);
            case 6:
              _context4.p = 6;
              _t3 = _context4.v;
              console.error('[PATCH] Error obteniendo archivos disponibles:', _t3);
              throw _t3;
            case 7:
              return _context4.a(2);
          }
        }, _callee4, this, [[0, 6]]);
      }));
      function getAvailableFiles() {
        return _getAvailableFiles.apply(this, arguments);
      }
      return getAvailableFiles;
    }() // Obtener archivos locales
  }, {
    key: "getLocalFiles",
    value: function () {
      var _getLocalFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(destFolder) {
        var _t4;
        return _regenerator().w(function (_context5) {
          while (1) switch (_context5.p = _context5.n) {
            case 0:
              _context5.p = 0;
              console.log('[PATCH] === Getting local files ===');
              console.log('[PATCH] Destination folder:', destFolder);

              // Actualizar la carpeta actual
              this.updateCurrentFolder(destFolder);
              if (!window.electron) {
                _context5.n = 2;
                break;
              }
              console.log('[PATCH] Using Electron API');
              _context5.n = 1;
              return window.electron.getLocalFiles(destFolder);
            case 1:
              return _context5.a(2, _context5.v);
            case 2:
              console.log('[PATCH] Electron no está disponible, usando fallback');
              // Fallback: simular archivos locales vacíos
              return _context5.a(2, []);
            case 3:
              _context5.n = 5;
              break;
            case 4:
              _context5.p = 4;
              _t4 = _context5.v;
              console.error('[PATCH] Error obteniendo archivos locales:', _t4);
              return _context5.a(2, []);
            case 5:
              return _context5.a(2);
          }
        }, _callee5, this, [[0, 4]]);
      }));
      function getLocalFiles(_x) {
        return _getLocalFiles.apply(this, arguments);
      }
      return getLocalFiles;
    }() // Leer estado de actualización guardado
  }, {
    key: "getUpdateState",
    value: function () {
      var _getUpdateState = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
        var stateData, state, _t5;
        return _regenerator().w(function (_context6) {
          while (1) switch (_context6.p = _context6.n) {
            case 0:
              _context6.p = 0;
              if (!(!this.updateStateFile || !window.electron || !this.currentFolder)) {
                _context6.n = 1;
                break;
              }
              console.log('[PATCH] No update state file available - folder not set or electron not available');
              return _context6.a(2, null);
            case 1:
              _context6.n = 2;
              return window.electron.readFile(this.updateStateFile);
            case 2:
              stateData = _context6.v;
              if (!stateData) {
                _context6.n = 3;
                break;
              }
              state = JSON.parse(stateData);
              console.log('[PATCH] Update state loaded for folder:', this.currentFolder);
              console.log('[PATCH] Update state:', state);
              return _context6.a(2, state);
            case 3:
              console.log('[PATCH] No update state file found for folder:', this.currentFolder);
              return _context6.a(2, null);
            case 4:
              _context6.p = 4;
              _t5 = _context6.v;
              console.log('[PATCH] Error reading update state:', _t5);
              return _context6.a(2, null);
          }
        }, _callee6, this, [[0, 4]]);
      }));
      function getUpdateState() {
        return _getUpdateState.apply(this, arguments);
      }
      return getUpdateState;
    }() // Guardar estado de actualización en userData
  }, {
    key: "saveUpdateState",
    value: function () {
      var _saveUpdateState = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(serverFiles) {
        var state, _t6;
        return _regenerator().w(function (_context7) {
          while (1) switch (_context7.p = _context7.n) {
            case 0:
              _context7.p = 0;
              if (!(!this.updateStateFile || !window.electron || !this.currentFolder)) {
                _context7.n = 1;
                break;
              }
              console.log('[PATCH] Cannot save update state - no file path available or folder not set');
              return _context7.a(2);
            case 1:
              state = {
                folderPath: this.currentFolder,
                lastUpdate: Date.now(),
                serverFiles: serverFiles.map(function (file) {
                  return {
                    name: file.name,
                    size: file.size,
                    modified: file.modified,
                    modified_date: file.modified_date
                  };
                })
              };
              _context7.n = 2;
              return window.electron.writeFile(this.updateStateFile, JSON.stringify(state, null, 2));
            case 2:
              console.log('[PATCH] Update state saved for folder:', this.currentFolder);
              console.log('[PATCH] State:', state);
              _context7.n = 4;
              break;
            case 3:
              _context7.p = 3;
              _t6 = _context7.v;
              console.error('[PATCH] Error saving update state:', _t6);
            case 4:
              return _context7.a(2);
          }
        }, _callee7, this, [[0, 3]]);
      }));
      function saveUpdateState(_x2) {
        return _saveUpdateState.apply(this, arguments);
      }
      return saveUpdateState;
    }() // Comparar archivos y obtener los que faltan o están desactualizados
  }, {
    key: "getMissingFiles",
    value: function getMissingFiles(serverFiles, localFiles) {
      var localFileNames = new Set(localFiles.map(function (f) {
        return f.name;
      }));
      return serverFiles.filter(function (file) {
        return !localFileNames.has(file.name);
      });
    }

    // Verificar si un archivo local está actualizado
  }, {
    key: "isFileUpToDate",
    value: function isFileUpToDate(localFile, serverFile) {
      console.log("[PATCH] === Checking file: ".concat(serverFile.name, " ==="));
      console.log("[PATCH] Local file:", localFile);
      console.log("[PATCH] Server file:", serverFile);
      if (!localFile || !serverFile) {
        console.log("[PATCH] ".concat(serverFile.name, ": Missing file data"));
        return false;
      }

      // Comparar tamaños
      if (localFile.size !== serverFile.size) {
        console.log("[PATCH] ".concat(serverFile.name, ": Tama\xF1o diferente (local: ").concat(localFile.size, ", servidor: ").concat(serverFile.size, ")"));
        return false;
      }

      // Comparar fechas de modificación
      if (localFile.modified && serverFile.modified) {
        var localDate = new Date(localFile.modified * 1000);
        var serverDate = new Date(serverFile.modified * 1000);
        console.log("[PATCH] ".concat(serverFile.name, ": Local date: ").concat(localDate.toISOString()));
        console.log("[PATCH] ".concat(serverFile.name, ": Server date: ").concat(serverDate.toISOString()));
        if (localDate.getTime() < serverDate.getTime()) {
          console.log("[PATCH] ".concat(serverFile.name, ": Fecha desactualizada (local: ").concat(localDate.toISOString(), ", servidor: ").concat(serverDate.toISOString(), ")"));
          return false;
        }
      } else {
        console.log("[PATCH] ".concat(serverFile.name, ": No modification dates available"));
      }
      console.log("[PATCH] ".concat(serverFile.name, ": Archivo actualizado \u2713"));
      return true;
    }

    // Obtener archivos que necesitan actualización
  }, {
    key: "getFilesToUpdate",
    value: function () {
      var _getFilesToUpdate = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee8(serverFiles, localFiles) {
        var updateState, savedFilesMap, _filesToUpdate, _iterator, _step, serverFile, savedFile, localFilesMap, filesToUpdate, _iterator2, _step2, _serverFile, localFile;
        return _regenerator().w(function (_context8) {
          while (1) switch (_context8.n) {
            case 0:
              console.log('[PATCH] === Comparing files ===');
              console.log('[PATCH] Server files count:', serverFiles.length);
              console.log('[PATCH] Local files count:', localFiles.length);
              console.log('[PATCH] Current folder:', this.currentFolder);

              // Primero intentar usar el estado guardado
              _context8.n = 1;
              return this.getUpdateState();
            case 1:
              updateState = _context8.v;
              if (!(updateState && updateState.serverFiles && updateState.folderPath === this.currentFolder)) {
                _context8.n = 2;
                break;
              }
              console.log('[PATCH] Using saved update state for comparison');
              savedFilesMap = new Map(updateState.serverFiles.map(function (f) {
                return [f.name, f];
              }));
              _filesToUpdate = [];
              _iterator = _createForOfIteratorHelper(serverFiles);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  serverFile = _step.value;
                  console.log("[PATCH] Checking server file: ".concat(serverFile.name));
                  savedFile = savedFilesMap.get(serverFile.name);
                  if (!savedFile) {
                    // Archivo nuevo en el servidor
                    console.log("[PATCH] ".concat(serverFile.name, ": Archivo nuevo en servidor"));
                    _filesToUpdate.push(serverFile);
                  } else if (savedFile.modified !== serverFile.modified || savedFile.size !== serverFile.size) {
                    // Archivo actualizado en el servidor
                    console.log("[PATCH] ".concat(serverFile.name, ": Actualizado en servidor"));
                    _filesToUpdate.push(serverFile);
                  } else {
                    console.log("[PATCH] ".concat(serverFile.name, ": Ya est\xE1 actualizado"));
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              console.log('[PATCH] Total files to update (using state):', _filesToUpdate.length);
              return _context8.a(2, _filesToUpdate);
            case 2:
              if (updateState && updateState.folderPath !== this.currentFolder) {
                console.log('[PATCH] Saved state is for different folder, ignoring state');
              }
            case 3:
              // Fallback: comparar con archivos locales
              console.log('[PATCH] No saved state or different folder, comparing with local files');
              localFilesMap = new Map(localFiles.map(function (f) {
                return [f.name, f];
              }));
              filesToUpdate = [];
              _iterator2 = _createForOfIteratorHelper(serverFiles);
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _serverFile = _step2.value;
                  console.log("[PATCH] Checking server file: ".concat(_serverFile.name));
                  localFile = localFilesMap.get(_serverFile.name);
                  if (!localFile) {
                    // Archivo no existe localmente
                    console.log("[PATCH] ".concat(_serverFile.name, ": Archivo nuevo"));
                    filesToUpdate.push(_serverFile);
                  } else if (!this.isFileUpToDate(localFile, _serverFile)) {
                    // Archivo existe pero está desactualizado
                    console.log("[PATCH] ".concat(_serverFile.name, ": Necesita actualizaci\xF3n"));
                    filesToUpdate.push(_serverFile);
                  } else {
                    console.log("[PATCH] ".concat(_serverFile.name, ": Ya est\xE1 actualizado"));
                  }
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              console.log('[PATCH] Total files to update (using local files):', filesToUpdate.length);
              return _context8.a(2, filesToUpdate);
          }
        }, _callee8, this);
      }));
      function getFilesToUpdate(_x3, _x4) {
        return _getFilesToUpdate.apply(this, arguments);
      }
      return getFilesToUpdate;
    }() // Crear carpeta temporal para descargas
  }, {
    key: "createTempDownloadFolder",
    value: function () {
      var _createTempDownloadFolder = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee9(destFolder) {
        var _t7;
        return _regenerator().w(function (_context9) {
          while (1) switch (_context9.p = _context9.n) {
            case 0:
              _context9.p = 0;
              if (window.electron) {
                _context9.n = 1;
                break;
              }
              throw new Error('Electron no está disponible');
            case 1:
              // Usar la función path del preload
              this.tempDownloadFolder = window.electron.path.join(destFolder, 'temp_download');
              _context9.n = 2;
              return window.electron.createDirectory(this.tempDownloadFolder);
            case 2:
              console.log('[PATCH] Carpeta temporal creada:', this.tempDownloadFolder);
              return _context9.a(2, this.tempDownloadFolder);
            case 3:
              _context9.p = 3;
              _t7 = _context9.v;
              console.error('[PATCH] Error creando carpeta temporal:', _t7);
              throw _t7;
            case 4:
              return _context9.a(2);
          }
        }, _callee9, this, [[0, 3]]);
      }));
      function createTempDownloadFolder(_x5) {
        return _createTempDownloadFolder.apply(this, arguments);
      }
      return createTempDownloadFolder;
    }() // Descargar y extraer todos los archivos automáticamente
  }, {
    key: "downloadAndExtractAllFiles",
    value: function () {
      var _downloadAndExtractAllFiles = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee0(destFolder, onDownloadProgress, onExtractionProgress, onFileComplete, onComplete, onError) {
        var _this = this;
        var serverFiles, localFiles, filesToUpdate, completedFiles, totalFiles, _iterator3, _step3, _loop, summary, _t9, _t0;
        return _regenerator().w(function (_context1) {
          while (1) switch (_context1.p = _context1.n) {
            case 0:
              if (!this.isDownloading) {
                _context1.n = 1;
                break;
              }
              console.log('[PATCH] Ya hay una descarga en progreso');
              return _context1.a(2);
            case 1:
              _context1.p = 1;
              this.isDownloading = true;
              this.downloadedFiles.clear();
              this.failedFiles.clear();
              this.extractionProgress = 0;
              this.downloadProgress = 0;
              console.log('[PATCH] Iniciando descarga y extracción de todos los archivos...');

              // Crear carpeta temporal
              _context1.n = 2;
              return this.createTempDownloadFolder(destFolder);
            case 2:
              _context1.n = 3;
              return this.getAvailableFiles();
            case 3:
              serverFiles = _context1.v;
              if (!(serverFiles.length === 0)) {
                _context1.n = 4;
                break;
              }
              onComplete === null || onComplete === void 0 || onComplete('No hay archivos para descargar');
              return _context1.a(2);
            case 4:
              _context1.n = 5;
              return this.getLocalFiles(destFolder);
            case 5:
              localFiles = _context1.v;
              _context1.n = 6;
              return this.getFilesToUpdate(serverFiles, localFiles);
            case 6:
              filesToUpdate = _context1.v;
              if (!(filesToUpdate.length === 0)) {
                _context1.n = 7;
                break;
              }
              console.log('[PATCH] Todos los archivos están actualizados');
              onComplete === null || onComplete === void 0 || onComplete('Todos los archivos están actualizados ✓');
              return _context1.a(2);
            case 7:
              console.log("[PATCH] Descargando y extrayendo ".concat(filesToUpdate.length, " archivos de ").concat(serverFiles.length, " totales..."));
              completedFiles = 0;
              totalFiles = filesToUpdate.length; // Procesar archivos uno por uno
              _iterator3 = _createForOfIteratorHelper(filesToUpdate);
              _context1.p = 8;
              _loop = /*#__PURE__*/_regenerator().m(function _loop() {
                var file, zipPath, _t8;
                return _regenerator().w(function (_context0) {
                  while (1) switch (_context0.p = _context0.n) {
                    case 0:
                      file = _step3.value;
                      if (_this.isDownloading) {
                        _context0.n = 1;
                        break;
                      }
                      console.log('[PATCH] Proceso cancelado por el usuario');
                      return _context0.a(2, 1);
                    case 1:
                      _context0.p = 1;
                      console.log("[PATCH] Procesando archivo: ".concat(file.name));

                      // Descargar archivo
                      _context0.n = 2;
                      return _this.downloadFile(file.name, _this.tempDownloadFolder, function (progress) {
                        _this.downloadProgress = progress.percent;
                        onDownloadProgress === null || onDownloadProgress === void 0 || onDownloadProgress(file.name, progress.downloaded, progress.total, progress.percent);
                      });
                    case 2:
                      zipPath = _context0.v;
                      _context0.n = 3;
                      return _this.extractFile(zipPath, destFolder, function (progress) {
                        _this.extractionProgress = progress;
                        onExtractionProgress === null || onExtractionProgress === void 0 || onExtractionProgress(file.name, progress);
                      });
                    case 3:
                      _context0.n = 4;
                      return _this.moveZipToTemp(zipPath, file.name);
                    case 4:
                      console.log("[PATCH] Archivo procesado exitosamente: ".concat(file.name));
                      _this.downloadedFiles.add(file.name);
                      completedFiles++;

                      // Notificar completado del archivo
                      onFileComplete === null || onFileComplete === void 0 || onFileComplete(file.name, completedFiles, totalFiles);
                      _context0.n = 6;
                      break;
                    case 5:
                      _context0.p = 5;
                      _t8 = _context0.v;
                      console.error("[PATCH] Error procesando ".concat(file.name, ":"), _t8);
                      _this.failedFiles.add(file.name);
                      completedFiles++;
                    case 6:
                      return _context0.a(2);
                  }
                }, _loop, null, [[1, 5]]);
              });
              _iterator3.s();
            case 9:
              if ((_step3 = _iterator3.n()).done) {
                _context1.n = 12;
                break;
              }
              return _context1.d(_regeneratorValues(_loop()), 10);
            case 10:
              if (!_context1.v) {
                _context1.n = 11;
                break;
              }
              return _context1.a(3, 12);
            case 11:
              _context1.n = 9;
              break;
            case 12:
              _context1.n = 14;
              break;
            case 13:
              _context1.p = 13;
              _t9 = _context1.v;
              _iterator3.e(_t9);
            case 14:
              _context1.p = 14;
              _iterator3.f();
              return _context1.f(14);
            case 15:
              _context1.n = 16;
              return this.cleanupTempFolder();
            case 16:
              if (!(this.downloadedFiles.size > 0)) {
                _context1.n = 17;
                break;
              }
              _context1.n = 17;
              return this.saveUpdateState(serverFiles);
            case 17:
              // Generar resumen final
              summary = {
                total: totalFiles,
                downloaded: this.downloadedFiles.size,
                failed: this.failedFiles.size,
                downloadedFiles: Array.from(this.downloadedFiles),
                failedFiles: Array.from(this.failedFiles)
              };
              console.log('[PATCH] Proceso completado:', summary);
              onComplete === null || onComplete === void 0 || onComplete(summary);
              _context1.n = 19;
              break;
            case 18:
              _context1.p = 18;
              _t0 = _context1.v;
              console.error('[PATCH] Error en proceso masivo:', _t0);
              onError === null || onError === void 0 || onError(_t0);
            case 19:
              _context1.p = 19;
              this.isDownloading = false;
              return _context1.f(19);
            case 20:
              return _context1.a(2);
          }
        }, _callee0, this, [[8, 13, 14, 15], [1, 18, 19, 20]]);
      }));
      function downloadAndExtractAllFiles(_x6, _x7, _x8, _x9, _x0, _x1) {
        return _downloadAndExtractAllFiles.apply(this, arguments);
      }
      return downloadAndExtractAllFiles;
    }() // Descargar archivo individual
  }, {
    key: "downloadFile",
    value: function () {
      var _downloadFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee1(filename, destFolder, onProgress) {
        var _this2 = this;
        var downloadUrl, _t1;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.p = _context10.n) {
            case 0:
              _context10.p = 0;
              if (window.electron) {
                _context10.n = 1;
                break;
              }
              throw new Error('Electron no está disponible');
            case 1:
              _context10.n = 2;
              return this.checkAndUpdateToken();
            case 2:
              // Construir URL de descarga
              downloadUrl = "".concat(this.baseUrl, "?action=download&token=").concat(this.token, "&file=").concat(filename);
              console.log('[PATCH] Iniciando descarga:', filename, 'en carpeta:', destFolder);

              // Usar la API de Electron para descarga con progreso
              return _context10.a(2, new Promise(function (resolve, reject) {
                // Configurar listeners para progreso y eventos
                _this2.setupDownloadListeners(onProgress, resolve, reject);

                // Iniciar descarga
                window.electron.downloadFile(downloadUrl, destFolder, filename);
              }));
            case 3:
              _context10.p = 3;
              _t1 = _context10.v;
              console.error('[PATCH] Error iniciando descarga:', _t1);
              throw _t1;
            case 4:
              return _context10.a(2);
          }
        }, _callee1, this, [[0, 3]]);
      }));
      function downloadFile(_x10, _x11, _x12) {
        return _downloadFile.apply(this, arguments);
      }
      return downloadFile;
    }() // Extraer archivo ZIP
  }, {
    key: "extractFile",
    value: function () {
      var _extractFile = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee10(zipPath, destFolder, onProgress) {
        var _this3 = this;
        var _t10;
        return _regenerator().w(function (_context11) {
          while (1) switch (_context11.p = _context11.n) {
            case 0:
              _context11.p = 0;
              if (window.electron) {
                _context11.n = 1;
                break;
              }
              throw new Error('Electron no está disponible');
            case 1:
              console.log('[PATCH] Extrayendo archivo:', zipPath, 'a:', destFolder);
              return _context11.a(2, new Promise(function (resolve, reject) {
                // Configurar listener para progreso de extracción
                _this3.setupExtractionListeners(onProgress, resolve, reject);

                // Iniciar extracción
                window.electron.extractZipFile(zipPath, destFolder);
              }));
            case 2:
              _context11.p = 2;
              _t10 = _context11.v;
              console.error('[PATCH] Error extrayendo archivo:', _t10);
              throw _t10;
            case 3:
              return _context11.a(2);
          }
        }, _callee10, null, [[0, 2]]);
      }));
      function extractFile(_x13, _x14, _x15) {
        return _extractFile.apply(this, arguments);
      }
      return extractFile;
    }() // Mover ZIP a carpeta temporal
  }, {
    key: "moveZipToTemp",
    value: function () {
      var _moveZipToTemp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee11(zipPath, filename) {
        var tempZipPath, _t11;
        return _regenerator().w(function (_context12) {
          while (1) switch (_context12.p = _context12.n) {
            case 0:
              _context12.p = 0;
              if (window.electron) {
                _context12.n = 1;
                break;
              }
              console.error('[PATCH] Electron no está disponible');
              return _context12.a(2);
            case 1:
              // Verificar si el archivo ya está en la carpeta temporal
              tempZipPath = window.electron.path.join(this.tempDownloadFolder, filename);
              if (!(zipPath === tempZipPath)) {
                _context12.n = 2;
                break;
              }
              console.log('[PATCH] ZIP ya está en carpeta temporal:', filename);
              return _context12.a(2);
            case 2:
              _context12.n = 3;
              return window.electron.copyFile(zipPath, tempZipPath);
            case 3:
              console.log('[PATCH] ZIP copiado a carpeta temporal:', filename);
              _context12.n = 5;
              break;
            case 4:
              _context12.p = 4;
              _t11 = _context12.v;
              console.error('[PATCH] Error copiando ZIP:', _t11);
              // No lanzar error, solo log
            case 5:
              return _context12.a(2);
          }
        }, _callee11, this, [[0, 4]]);
      }));
      function moveZipToTemp(_x16, _x17) {
        return _moveZipToTemp.apply(this, arguments);
      }
      return moveZipToTemp;
    }() // Limpiar carpeta temporal
  }, {
    key: "cleanupTempFolder",
    value: function () {
      var _cleanupTempFolder = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee12() {
        var _t12;
        return _regenerator().w(function (_context13) {
          while (1) switch (_context13.p = _context13.n) {
            case 0:
              _context13.p = 0;
              if (window.electron) {
                _context13.n = 1;
                break;
              }
              console.error('[PATCH] Electron no está disponible');
              return _context13.a(2);
            case 1:
              if (!this.tempDownloadFolder) {
                _context13.n = 3;
                break;
              }
              console.log('[PATCH] Limpiando carpeta temporal:', this.tempDownloadFolder);
              _context13.n = 2;
              return window.electron.removeDirectory(this.tempDownloadFolder);
            case 2:
              this.tempDownloadFolder = null;
              console.log('[PATCH] Carpeta temporal eliminada');
            case 3:
              _context13.n = 5;
              break;
            case 4:
              _context13.p = 4;
              _t12 = _context13.v;
              console.error('[PATCH] Error limpiando carpeta temporal:', _t12);
              // No lanzar error, solo log
            case 5:
              return _context13.a(2);
          }
        }, _callee12, this, [[0, 4]]);
      }));
      function cleanupTempFolder() {
        return _cleanupTempFolder.apply(this, arguments);
      }
      return cleanupTempFolder;
    }() // Configurar listeners para eventos de descarga
  }, {
    key: "setupDownloadListeners",
    value: function setupDownloadListeners(onProgress, onComplete, onError) {
      var _this4 = this;
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        console.error('[PATCH] Electron no está disponible para configurar listeners');
        return;
      }

      // Limpiar listeners anteriores
      this.cleanupDownloadListeners();

      // Configurar nuevos listeners
      this.downloadProgressListener = function (progressData) {
        console.log('[PATCH] Progreso descarga:', progressData);
        onProgress === null || onProgress === void 0 || onProgress(progressData);
      };
      this.downloadErrorListener = function (error) {
        console.error('[PATCH] Error en descarga:', error);
        _this4.cleanupDownloadListeners();
        onError === null || onError === void 0 || onError(error);
      };
      this.downloadCompleteListener = function (info) {
        console.log('[PATCH] Descarga completada:', info);
        _this4.cleanupDownloadListeners();
        onComplete === null || onComplete === void 0 || onComplete(info.destPath);
      };

      // Registrar listeners
      window.electron.onDownloadProgress(this.downloadProgressListener);
      window.electron.onDownloadError(this.downloadErrorListener);
      window.electron.onDownloadDone(this.downloadCompleteListener);
    }

    // Configurar listeners para eventos de extracción
  }, {
    key: "setupExtractionListeners",
    value: function setupExtractionListeners(onProgress, onComplete, onError) {
      var _this5 = this;
      // Verificar que window.electron esté disponible
      if (!window.electron) {
        console.error('[PATCH] Electron no está disponible para configurar listeners de extracción');
        return;
      }

      // Limpiar listeners anteriores
      this.cleanupExtractionListeners();

      // Configurar nuevos listeners
      this.extractionProgressListener = function (progressData) {
        console.log('[PATCH] Progreso extracción:', progressData);
        onProgress === null || onProgress === void 0 || onProgress(progressData);
      };
      this.extractionErrorListener = function (error) {
        console.error('[PATCH] Error en extracción:', error);
        _this5.cleanupExtractionListeners();
        onError === null || onError === void 0 || onError(error);
      };
      this.extractionCompleteListener = function (info) {
        console.log('[PATCH] Extracción completada:', info);
        _this5.cleanupExtractionListeners();
        onComplete === null || onComplete === void 0 || onComplete(info);
      };

      // Registrar listeners
      window.electron.onExtractionProgress(this.extractionProgressListener);
      window.electron.onExtractionError(this.extractionErrorListener);
      window.electron.onExtractionDone(this.extractionCompleteListener);
    }

    // Limpiar listeners de descarga
  }, {
    key: "cleanupDownloadListeners",
    value: function cleanupDownloadListeners() {
      if (this.downloadProgressListener) {
        // En una implementación real, necesitarías remover los listeners
        // Por ahora, simplemente los sobrescribimos
      }
    }

    // Limpiar listeners de extracción
  }, {
    key: "cleanupExtractionListeners",
    value: function cleanupExtractionListeners() {
      if (this.extractionProgressListener) {
        // En una implementación real, necesitarías remover los listeners
        // Por ahora, simplemente los sobrescribimos
      }
    }

    // Cancelar proceso actual
  }, {
    key: "cancelDownload",
    value: function cancelDownload() {
      if (this.isDownloading) {
        console.log('[PATCH] Cancelando proceso...');
        this.isDownloading = false;
        this.cleanupDownloadListeners();
        this.cleanupExtractionListeners();
        this.currentDownload = null;

        // Limpiar carpeta temporal
        this.cleanupTempFolder();
      }
    }

    // Reintentar descarga con backoff exponencial
  }, {
    key: "retryDownload",
    value: function () {
      var _retryDownload = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee13(filename, destFolder, onProgress, onComplete, onError) {
        var _this6 = this;
        var attempt,
          delay,
          _args14 = arguments,
          _t13;
        return _regenerator().w(function (_context14) {
          while (1) switch (_context14.p = _context14.n) {
            case 0:
              attempt = _args14.length > 5 && _args14[5] !== undefined ? _args14[5] : 1;
              _context14.p = 1;
              _context14.n = 2;
              return this.downloadFile(filename, destFolder, onProgress, onComplete, onError);
            case 2:
              _context14.n = 4;
              break;
            case 3:
              _context14.p = 3;
              _t13 = _context14.v;
              if (attempt < this.retryAttempts) {
                console.log("[PATCH] Reintentando descarga (".concat(attempt, "/").concat(this.retryAttempts, ")..."));
                delay = Math.pow(2, attempt) * 1000; // Backoff exponencial
                setTimeout(function () {
                  _this6.retryDownload(filename, destFolder, onProgress, onComplete, onError, attempt + 1);
                }, delay);
              } else {
                console.error('[PATCH] Máximo de reintentos alcanzado');
                onError === null || onError === void 0 || onError("Error despu\xE9s de ".concat(this.retryAttempts, " intentos: ").concat(_t13));
              }
            case 4:
              return _context14.a(2);
          }
        }, _callee13, this, [[1, 3]]);
      }));
      function retryDownload(_x18, _x19, _x20, _x21, _x22) {
        return _retryDownload.apply(this, arguments);
      }
      return retryDownload;
    }() // Obtener información del archivo
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee14(filename) {
        var response, _t14;
        return _regenerator().w(function (_context15) {
          while (1) switch (_context15.p = _context15.n) {
            case 0:
              _context15.p = 0;
              _context15.n = 1;
              return this.checkAndUpdateToken();
            case 1:
              _context15.n = 2;
              return fetch("".concat(this.baseUrl, "?action=info&file=").concat(filename, "&token=").concat(this.token));
            case 2:
              response = _context15.v;
              if (response.ok) {
                _context15.n = 3;
                break;
              }
              throw new Error("Error HTTP: ".concat(response.status));
            case 3:
              _context15.n = 4;
              return response.json();
            case 4:
              return _context15.a(2, _context15.v);
            case 5:
              _context15.p = 5;
              _t14 = _context15.v;
              console.error('[PATCH] Error obteniendo información del archivo:', _t14);
              throw _t14;
            case 6:
              return _context15.a(2);
          }
        }, _callee14, this, [[0, 5]]);
      }));
      function getFileInfo(_x23) {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }() // Verificar espacio disponible
  }, {
    key: "checkDiskSpace",
    value: function () {
      var _checkDiskSpace = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee15(requiredBytes) {
        var _t15;
        return _regenerator().w(function (_context16) {
          while (1) switch (_context16.p = _context16.n) {
            case 0:
              _context16.p = 0;
              return _context16.a(2, true);
            case 1:
              _context16.p = 1;
              _t15 = _context16.v;
              console.error('[PATCH] Error verificando espacio en disco:', _t15);
              return _context16.a(2, false);
          }
        }, _callee15, null, [[0, 1]]);
      }));
      function checkDiskSpace(_x24) {
        return _checkDiskSpace.apply(this, arguments);
      }
      return checkDiskSpace;
    }() // Obtener estadísticas de descarga
  }, {
    key: "getDownloadStats",
    value: function getDownloadStats() {
      return {
        isDownloading: this.isDownloading,
        downloadedFiles: Array.from(this.downloadedFiles),
        failedFiles: Array.from(this.failedFiles),
        totalDownloaded: this.downloadedFiles.size,
        totalFailed: this.failedFiles.size,
        downloadProgress: this.downloadProgress,
        extractionProgress: this.extractionProgress
      };
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PatchDownloader);

/***/ }),

/***/ "./src/scripts/rankingService.js":
/*!***************************************!*\
  !*** ./src/scripts/rankingService.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _environments_enviroment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/enviroment.js */ "./src/environments/enviroment.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Servicio para manejar los rankings de PvP y PK
 */

var RankingService = /*#__PURE__*/function () {
  function RankingService() {
    _classCallCheck(this, RankingService);
    this.baseUrl = _environments_enviroment_js__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.cache = {
      pvp: null,
      pk: null,
      lastUpdate: null
    };
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutos
  }

  /**
   * Obtiene el ranking de PvP desde la API
   * @returns {Promise<Array>} Array de jugadores con posición, nombre y puntuación
   */
  return _createClass(RankingService, [{
    key: "getTopPvP",
    value: (function () {
      var _getTopPvP = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var response, data, players, _t;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.p = _context.n) {
            case 0:
              _context.p = 0;
              console.log('📊 Obteniendo ranking PvP desde:', "".concat(this.baseUrl, "/api/game/ranking/top-pvp"));
              _context.n = 1;
              return fetch("".concat(this.baseUrl, "/api/game/ranking/top-pvp"));
            case 1:
              response = _context.v;
              console.log(this.baseUrl);
              if (response.ok) {
                _context.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context.n = 3;
              return response.json();
            case 3:
              data = _context.v;
              console.log('📊 Datos PvP recibidos:', data);

              // Transformar datos del formato API al formato esperado
              players = data.topPvp.map(function (player, index) {
                return {
                  position: index + 1,
                  name: player.name,
                  score: player.kills
                };
              });
              return _context.a(2, players);
            case 4:
              _context.p = 4;
              _t = _context.v;
              console.error('Error obteniendo ranking PvP:', _t);
              return _context.a(2, this.getDefaultPvPRanking());
          }
        }, _callee, this, [[0, 4]]);
      }));
      function getTopPvP() {
        return _getTopPvP.apply(this, arguments);
      }
      return getTopPvP;
    }()
    /**
     * Obtiene el ranking de PK desde la API
     * @returns {Promise<Array>} Array de jugadores con posición, nombre y puntuación
     */
    )
  }, {
    key: "getTopPK",
    value: (function () {
      var _getTopPK = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var response, data, players, _t2;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              _context2.p = 0;
              console.log('📊 Obteniendo ranking PK desde:', "".concat(this.baseUrl, "/api/game/ranking/top-pk"));
              _context2.n = 1;
              return fetch("".concat(this.baseUrl, "/api/game/ranking/top-pk"));
            case 1:
              response = _context2.v;
              if (response.ok) {
                _context2.n = 2;
                break;
              }
              throw new Error("HTTP error! status: ".concat(response.status));
            case 2:
              _context2.n = 3;
              return response.json();
            case 3:
              data = _context2.v;
              console.log('📊 Datos PK recibidos:', data);
              players = data.topPk.map(function (player, index) {
                return {
                  position: index + 1,
                  name: player.name,
                  score: player.kills
                };
              });
              return _context2.a(2, players);
            case 4:
              _context2.p = 4;
              _t2 = _context2.v;
              console.error('Error obteniendo ranking PK:', _t2);
              return _context2.a(2, this.getDefaultPKRanking());
          }
        }, _callee2, this, [[0, 4]]);
      }));
      function getTopPK() {
        return _getTopPK.apply(this, arguments);
      }
      return getTopPK;
    }()
    /**
     * Actualiza ambos rankings en la interfaz
     */
    )
  }, {
    key: "updateRankings",
    value: (function () {
      var _updateRankings = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _yield$Promise$all, _yield$Promise$all2, pvpData, pkData, _t3;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.p = _context3.n) {
            case 0:
              _context3.p = 0;
              _context3.n = 1;
              return Promise.all([this.getTopPvP(), this.getTopPK()]);
            case 1:
              _yield$Promise$all = _context3.v;
              _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 2);
              pvpData = _yield$Promise$all2[0];
              pkData = _yield$Promise$all2[1];
              this.updatePvPTable(pvpData);
              this.updatePKTable(pkData);
              _context3.n = 3;
              break;
            case 2:
              _context3.p = 2;
              _t3 = _context3.v;
              console.error('Error actualizando rankings:', _t3);
            case 3:
              return _context3.a(2);
          }
        }, _callee3, this, [[0, 2]]);
      }));
      function updateRankings() {
        return _updateRankings.apply(this, arguments);
      }
      return updateRankings;
    }()
    /**
     * Actualiza la tabla de PvP en el DOM
     * @param {Array} data - Array de jugadores
     */
    )
  }, {
    key: "updatePvPTable",
    value: function updatePvPTable(data) {
      var tbody = document.querySelector('.top-pvp tbody');
      if (!tbody) return;
      tbody.innerHTML = '';
      data.forEach(function (player) {
        var row = document.createElement('tr');
        row.innerHTML = "\n        <td style=\"font-weight: 700;\">".concat(player.position, "</td>\n        <td>").concat(player.name, "</td>\n        <td>").concat(player.score.toLocaleString(), "</td>\n      ");
        tbody.appendChild(row);
      });
    }

    /**
     * Actualiza la tabla de PK en el DOM
     * @param {Array} data - Array de jugadores
     */
  }, {
    key: "updatePKTable",
    value: function updatePKTable(data) {
      var tbody = document.querySelector('.top-pk tbody');
      if (!tbody) return;
      tbody.innerHTML = '';
      data.forEach(function (player) {
        var row = document.createElement('tr');
        row.innerHTML = "\n        <td>".concat(player.position, "</td>\n        <td>").concat(player.name, "</td>\n        <td>").concat(player.score.toLocaleString(), "</td>\n      ");
        tbody.appendChild(row);
      });
    }

    /**
     * Datos por defecto para PvP (fallback)
     * @returns {Array} Array de jugadores por defecto
     */
  }, {
    key: "getDefaultPvPRanking",
    value: function getDefaultPvPRanking() {
      return [{
        position: 1,
        name: "DragonSlayer",
        score: 1250
      }, {
        position: 2,
        name: "ShadowKnight",
        score: 1180
      }, {
        position: 3,
        name: "BloodWarrior",
        score: 1120
      }, {
        position: 4,
        name: "IronFist",
        score: 1050
      }, {
        position: 5,
        name: "ThunderLord",
        score: 980
      }, {
        position: 6,
        name: "FrostMage",
        score: 920
      }, {
        position: 7,
        name: "FireBlade",
        score: 870
      }, {
        position: 8,
        name: "StormRider",
        score: 820
      }, {
        position: 9,
        name: "DarkHunter",
        score: 780
      }, {
        position: 10,
        name: "LightBringer",
        score: 740
      }];
    }

    /**
     * Datos por defecto para PK (fallback)
     * @returns {Array} Array de jugadores por defecto
     */
  }, {
    key: "getDefaultPKRanking",
    value: function getDefaultPKRanking() {
      return [{
        position: 1,
        name: "DeathBringer",
        score: 890
      }, {
        position: 2,
        name: "ChaosLord",
        score: 820
      }, {
        position: 3,
        name: "VoidWalker",
        score: 780
      }, {
        position: 4,
        name: "NightStalker",
        score: 740
      }, {
        position: 5,
        name: "DemonSlayer",
        score: 690
      }, {
        position: 6,
        name: "ShadowReaper",
        score: 650
      }, {
        position: 7,
        name: "BloodThirst",
        score: 610
      }, {
        position: 8,
        name: "DarkSoul",
        score: 570
      }, {
        position: 9,
        name: "VoidMaster",
        score: 530
      }, {
        position: 10,
        name: "ChaosKnight",
        score: 490
      }];
    }

    /**
     * Limpia el cache para forzar una nueva actualización
     */
  }, {
    key: "clearCache",
    value: function clearCache() {
      this.cache.pvp = null;
      this.cache.pk = null;
      this.cache.lastUpdate = null;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RankingService);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*********************************!*\
  !*** ./src/scripts/renderer.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle.min.js */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _assets_styles_fonts_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/styles/fonts.css */ "./src/assets/styles/fonts.css");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _externalLinks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./externalLinks.js */ "./src/scripts/externalLinks.js");
/* harmony import */ var _externalLinks_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_externalLinks_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _folderSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./folderSelector */ "./src/scripts/folderSelector.js");
/* harmony import */ var _gameLauncher_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gameLauncher.js */ "./src/scripts/gameLauncher.js");
/* harmony import */ var _rankingService_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rankingService.js */ "./src/scripts/rankingService.js");










// Funcionalidad para la barra de título personalizada
function initTitleBarControls() {
  // Función para inicializar cuando window.electron esté disponible
  function initWhenElectronReady() {
    if (window.electron) {
      // Botón minimizar
      var minimizeBtn = document.getElementById('minimizeBtn');
      if (minimizeBtn) {
        minimizeBtn.addEventListener('click', function () {
          window.electron.minimizeWindow();
        });
      }

      // Botón cerrar
      var closeBtn = document.getElementById('closeBtn');
      if (closeBtn) {
        closeBtn.addEventListener('click', function () {
          window.electron.closeWindow();
        });
      }
    } else {
      // Si window.electron no está disponible, reintentar en 100ms
      setTimeout(initWhenElectronReady, 100);
    }
  }

  // Iniciar cuando esté listo
  initWhenElectronReady();
}
document.addEventListener('DOMContentLoaded', function () {
  (0,_folderSelector__WEBPACK_IMPORTED_MODULE_6__.initFolderSelector)();
  (0,_gameLauncher_js__WEBPACK_IMPORTED_MODULE_7__.setupDownloadButton)(); // <-- conectamos el botón acá

  // Inicializar controles de la barra de título
  initTitleBarControls();

  // Exponer gameLauncher globalmente para que folderSelector pueda acceder
  window.gameLauncher = _gameLauncher_js__WEBPACK_IMPORTED_MODULE_7__.gameLauncher;

  // Inicializar y cargar rankings
  var rankingService = new _rankingService_js__WEBPACK_IMPORTED_MODULE_8__["default"]();
  rankingService.updateRankings();

  // Actualizar rankings cada 5 minutos
  setInterval(function () {
    rankingService.updateRankings();
  }, 5 * 60 * 1000);
});
})();

/******/ })()
;
//# sourceMappingURL=renderer.bundle.js.map