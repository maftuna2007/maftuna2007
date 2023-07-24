"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["profile","app_assets_modules_github_fetch_ts"],{98105:(e,t,n)=>{function r(e){let t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}}function o(e){let t=e,n=t.ownerDocument;if(!n||!t.offsetParent)return;let r=n.defaultView.HTMLElement;if(t!==n.body){for(;t!==n.body;){if(!(t.parentElement instanceof r))return;t=t.parentElement;let{position:e,overflowY:n,overflowX:o}=getComputedStyle(t);if("fixed"===e||"auto"===n||"auto"===o||"scroll"===n||"scroll"===o)break}return t instanceof Document?null:t}}function i(e,t){let n=t,r=e.ownerDocument;if(!r)return;let o=r.documentElement;if(!o||e===o)return;let i=s(e,n);if(!i)return;n=i._container;let a=n===r.documentElement&&r.defaultView?{top:r.defaultView.pageYOffset,left:r.defaultView.pageXOffset}:{top:n.scrollTop,left:n.scrollLeft},l=i.top-a.top,c=i.left-a.left,u=n.clientHeight,d=n.clientWidth,f=u-(l+e.offsetHeight),p=d-(c+e.offsetWidth);return{top:l,left:c,bottom:f,right:p,height:u,width:d}}function s(e,t){let n,r,o,i=e,s=i.ownerDocument;if(!s)return;let c=s.documentElement;if(!c)return;let u=s.defaultView.HTMLElement,d=0,f=0,p=i.offsetHeight,h=i.offsetWidth;for(;!(i===s.body||i===t);){if(d+=i.offsetTop||0,f+=i.offsetLeft||0,!(i.offsetParent instanceof u))return;i=i.offsetParent}if(t&&t!==s&&t!==s.defaultView&&t!==s.documentElement&&t!==s.body){if(!(t instanceof u))return;o=t,n=t.scrollHeight,r=t.scrollWidth}else o=c,n=a(s.body,c),r=l(s.body,c);let m=n-(d+p),g=r-(f+h);return{top:d,left:f,bottom:m,right:g,_container:o}}function a(e,t){return Math.max(e.scrollHeight,t.scrollHeight,e.offsetHeight,t.offsetHeight,t.clientHeight)}function l(e,t){return Math.max(e.scrollWidth,t.scrollWidth,e.offsetWidth,t.offsetWidth,t.clientWidth)}n.d(t,{VZ:()=>o,_C:()=>i,cv:()=>r,oE:()=>s})},59753:(e,t,n)=>{function r(){if(!(this instanceof r))return new r;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}n.d(t,{f:()=>R,S:()=>x,on:()=>q});var o,i=window.document.documentElement,s=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;r.prototype.matchesSelector=function(e,t){return s.call(e,t)},r.prototype.querySelectorAll=function(e,t){return t.querySelectorAll(e)},r.prototype.indexes=[];var a=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"ID",selector:function(e){var t;if(t=e.match(a))return t[0].slice(1)},element:function(e){if(e.id)return[e.id]}});var l=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"CLASS",selector:function(e){var t;if(t=e.match(l))return t[0].slice(1)},element:function(e){var t=e.className;if(t){if("string"==typeof t)return t.split(/\s/);if("object"==typeof t&&"baseVal"in t)return t.baseVal.split(/\s/)}}});var c=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;r.prototype.indexes.push({name:"TAG",selector:function(e){var t;if(t=e.match(c))return t[0].toUpperCase()},element:function(e){return[e.nodeName.toUpperCase()]}}),r.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},o="function"==typeof window.Map?window.Map:function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e+" "]},e.prototype.set=function(e,t){this.map[e+" "]=t},e}();var u=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function d(e,t){var n,r,o,i,s,a,l=(e=e.slice(0).concat(e.default)).length,c=t,d=[];do if(u.exec(""),(o=u.exec(c))&&(c=o[3],o[2]||!c)){for(n=0;n<l;n++)if(s=(a=e[n]).selector(o[1])){for(r=d.length,i=!1;r--;)if(d[r].index===a&&d[r].key===s){i=!0;break}i||d.push({index:a,key:s});break}}while(o)return d}function f(e,t){var n,r,o;for(n=0,r=e.length;n<r;n++)if(o=e[n],t.isPrototypeOf(o))return o}function p(e,t){return e.id-t.id}r.prototype.logDefaultIndexUsed=function(){},r.prototype.add=function(e,t){var n,r,i,s,a,l,c,u,p=this.activeIndexes,h=this.selectors,m=this.selectorObjects;if("string"==typeof e){for(r=0,m[(n={id:this.uid++,selector:e,data:t}).id]=n,c=d(this.indexes,e);r<c.length;r++)s=(u=c[r]).key,(a=f(p,i=u.index))||((a=Object.create(i)).map=new o,p.push(a)),i===this.indexes.default&&this.logDefaultIndexUsed(n),(l=a.map.get(s))||(l=[],a.map.set(s,l)),l.push(n);this.size++,h.push(e)}},r.prototype.remove=function(e,t){if("string"==typeof e){var n,r,o,i,s,a,l,c,u=this.activeIndexes,f=this.selectors=[],p=this.selectorObjects,h={},m=1==arguments.length;for(o=0,n=d(this.indexes,e);o<n.length;o++)for(r=n[o],i=u.length;i--;)if(a=u[i],r.index.isPrototypeOf(a)){if(l=a.map.get(r.key))for(s=l.length;s--;)(c=l[s]).selector===e&&(m||c.data===t)&&(l.splice(s,1),h[c.id]=!0);break}for(o in h)delete p[o],this.size--;for(o in p)f.push(p[o].selector)}},r.prototype.queryAll=function(e){if(!this.selectors.length)return[];var t,n,r,o,i,s,a,l,c={},u=[],d=this.querySelectorAll(this.selectors.join(", "),e);for(t=0,r=d.length;t<r;t++)for(n=0,i=d[t],o=(s=this.matches(i)).length;n<o;n++)c[(l=s[n]).id]?a=c[l.id]:(a={id:l.id,selector:l.selector,data:l.data,elements:[]},c[l.id]=a,u.push(a)),a.elements.push(i);return u.sort(p)},r.prototype.matches=function(e){if(!e)return[];var t,n,r,o,i,s,a,l,c,u,d,f=this.activeIndexes,h={},m=[];for(t=0,o=f.length;t<o;t++)if(l=(a=f[t]).element(e)){for(n=0,i=l.length;n<i;n++)if(c=a.map.get(l[n]))for(r=0,s=c.length;r<s;r++)!h[d=(u=c[r]).id]&&this.matchesSelector(e,u.selector)&&(h[d]=!0,m.push(u))}return m.sort(p)};var h={},m={},g=new WeakMap,y=new WeakMap,w=new WeakMap,b=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function v(e,t,n){var r=e[t];return e[t]=function(){return n.apply(e,arguments),r.apply(e,arguments)},e}function S(e,t,n){var r=[],o=t;do{if(1!==o.nodeType)break;var i=e.matches(o);if(i.length){var s={node:o,observers:i};n?r.unshift(s):r.push(s)}}while(o=o.parentElement)return r}function E(){g.set(this,!0)}function L(){g.set(this,!0),y.set(this,!0)}function T(){return w.get(this)||null}function _(e,t){b&&Object.defineProperty(e,"currentTarget",{configurable:!0,enumerable:!0,get:t||b.get})}function j(e){try{return e.eventPhase,!0}catch(e){return!1}}function A(e){if(j(e)){var t=(1===e.eventPhase?m:h)[e.type];if(t){var n=S(t,e.target,1===e.eventPhase);if(n.length){v(e,"stopPropagation",E),v(e,"stopImmediatePropagation",L),_(e,T);for(var r=0,o=n.length;r<o&&!g.get(e);r++){var i=n[r];w.set(e,i.node);for(var s=0,a=i.observers.length;s<a&&!y.get(e);s++)i.observers[s].data.call(i.node,e)}w.delete(e),_(e)}}}}function q(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=!!o.capture,s=i?m:h,a=s[e];a||(a=new r,s[e]=a,document.addEventListener(e,A,i)),a.add(t,n)}function x(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=!!r.capture,i=o?m:h,s=i[e];s&&(s.remove(t,n),s.size||(delete i[e],document.removeEventListener(e,A,o)))}function R(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n}))}},55240:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(56959),o=n(4412),i=n(36071),s=n(98105);async function a(e){await o.C,c(e)}function l(e,t){e.style.visibility=t?"hidden":"";let n=e.getAttribute("data-tab-item");if(n){let e=document.querySelector(`[data-menu-item=${n}]`);e instanceof HTMLElement&&(e.hidden=!t)}}function c(e){let t=e.querySelectorAll(".js-responsive-underlinenav-item"),n=e.querySelector(".js-responsive-underlinenav-overflow"),r=(0,s.oE)(n,e);if(!r)return;let o=!1;for(let n of t){let t=(0,s.oE)(n,e);if(t){let e=t.left+n.offsetWidth>=r.left;l(n,e),o=o||e}}n.style.visibility=o?"":"hidden"}(0,i.N7)(".js-responsive-underlinenav",{constructor:HTMLElement,subscribe:e=>(a(e),(0,r.RB)(window,"resize",()=>c(e)))})},34892:(e,t,n)=>{n.d(t,{DF:()=>f,Fr:()=>p,a_:()=>d});var r=n(67525);function o(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let i=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function s(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new i(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new i(`expected response with text/html or application/json, but was ${r}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new i("response X-HTML-Safe nonce did not match",t)}else throw new i("missing X-HTML-Safe nonce",t)}var a=n(22490),l=n(7180);let c="server-x-safe-html",u=a.Z.createPolicy(c,{createHTML:(e,t)=>l.O.apply({policy:()=>(s(o(document),t),e),policyName:c,fallback:e,silenceErrorReporting:!0})});async function d(e,t,n){let o=new Request(t,n);o.headers.append("X-Requested-With","XMLHttpRequest");let i=await self.fetch(o);if(i.status<200||i.status>=300)throw Error(`HTTP ${i.status}${i.statusText||""}`);let s=u.createHTML(await i.text(),i);return(0,r.r)(e,s)}function f(e,t,n=1e3,r=[200]){return async function n(o){let i=new Request(e,t);i.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(i);if(202===s.status)return await new Promise(e=>setTimeout(e,o)),n(1.5*o);if(r.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(n)}async function p(e,t,n){let{wait:r=500,acceptedStatusCodes:o=[200],max:i=3,attempt:s=0}=n||{},a=async()=>new Promise((n,a)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(r);if(o.includes(a.status)||s+1===i)return n(a);n("retry")}catch(e){a(e)}},r*s)}),l=await a();return"retry"!==l?l:p(e,t,{wait:r,acceptedStatusCodes:o,max:i,attempt:s+1})}},9302:(e,t,n)=>{let r,o;n.d(t,{lO:()=>p,qA:()=>f,y0:()=>a});let i=[],s=0;function a(){return r}function l(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function c(){return l()-1+s}function u(e){r=e;let t=location.href;i[c()]={url:t,state:r},i.length=l(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function d(){return new Date().getTime()}function f(e,t,n){s=0;let r={_id:d(),...e};history.pushState(r,t,n),u(r)}function p(e,t,n){let r={...a(),...e};history.replaceState(r,t,n),u(r)}r=function(){let e={_id:new Date().getTime(),...history.state};return u(e),e}(),window.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier,r=i[c()-1]?.state?.turbo?.restorationIdentifier;r===n?s--:s++,u(t)},!0),window.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(o=e.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==o&&(s=0,p(history.state,"",""))}),window.addEventListener("hashchange",function(){if(l()>i.length){let e={_id:d()};history.replaceState(e,"",location.href),u(e)}},!0),window.addEventListener("pageshow",()=>{i=[],s=0})},67525:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(22490),o=n(7180);let i="parse-html-no-op",s=r.Z.createPolicy(i,{createHTML:e=>o.O.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function a(e,t){let n=e.createElement("template");return n.innerHTML=s.createHTML(t),e.importNode(n.content,!0)}},29130:(e,t,n)=>{var r=n(76006),o=n(58700),i=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};let s=class WaitingFormElement extends HTMLElement{async submitPolitely(){this.submit.disabled=!0;try{this.prerequisites.length>0&&await Promise.all(this.prerequisites.map(e=>this.getPrerequisitePromise(e))),(0,o.Bt)(this.form)}finally{this.submit.disabled=!1}}getPrerequisitePromise(e){let t=e.getAttribute("data-waiting-form-method")||"getPromise";return e[t]()}};i([r.fA],s.prototype,"form",void 0),i([r.GO],s.prototype,"prerequisites",void 0),i([r.fA],s.prototype,"submit",void 0),s=i([r.Ih],s);let a=class SocialAccountEditorElement extends HTMLElement{recognizeUrl(){this.recognitionPromise=new Promise(async e=>{this.preprocessUrl();let t=await this.findMatchingSocialAccountIconOption(this.urlField.value);this.setChosenSocialIcon(t),e()})}resetToDefault(){this.urlField.value!==this.urlField.defaultValue&&(0,o.Se)(this.urlField,this.urlField.defaultValue)}waitForRecognition(){return this.recognitionPromise}preprocessUrl(){let e=this.urlField.value.trim();0===e.length||/^https?:\/\//.test(e)||(this.urlField.value=`https://${e}`)}setChosenSocialIcon(e){let t=e.getAttribute("data-provider-key")||"generic";for(let t of this.iconOptions)t.hidden=t!==e;this.iconSpinner.hidden=!0,this.iconField.value=t}async findMatchingSocialAccountIconOption(e){for(let t of this.iconOptions)for(let n of t.querySelectorAll("[data-provider-pattern]")){let r=RegExp(n.getAttribute("data-provider-pattern"),"i");if(r.test(e))return t}let t=await this.findNodeInfoIconOption(e);return t||this.iconGeneric}async findNodeInfoIconOption(e){if(0===this.nodeinfoSoftwareUrl.trim().length)return null;let t=new Map;for(let n of this.iconOptions)for(let r of n.querySelectorAll("[data-try-nodeinfo-pattern]")){let o=RegExp(r.getAttribute("data-try-nodeinfo-pattern"),"i"),i=r.getAttribute("data-nodeinfo-software"),s=e.match(o);s&&i&&t.set(i,n)}if(0===t.size)return null;let n=null;try{n=new URL(e,window.location.origin)}catch(e){return null}this.showSpinner();let r=new URL(this.nodeinfoSoftwareUrl,window.location.origin);r.searchParams.set("host",n.host);let o=await fetch(r,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}),i=await o.json(),s=i?.software_name;return s&&t.get(s)||null}showSpinner(){for(let e of this.iconOptions)e.hidden=!0;this.iconSpinner.hidden=!1}constructor(...e){super(...e),this.recognitionPromise=Promise.resolve(),this.nodeinfoSoftwareUrl=""}};i([r.fA],a.prototype,"urlField",void 0),i([r.fA],a.prototype,"iconField",void 0),i([r.GO],a.prototype,"iconOptions",void 0),i([r.fA],a.prototype,"iconGeneric",void 0),i([r.fA],a.prototype,"iconSpinner",void 0),i([r.Lj],a.prototype,"nodeinfoSoftwareUrl",void 0),a=i([r.Ih],a)},5742:(e,t,n)=>{var r=n(36071),o=n(59753);let i=null,s=null;function a(e){let{item:t,oldIndex:n}=e,{parentNode:r}=t;s=r.children[n+1]}async function l(e){let{oldIndex:t,newIndex:n,item:r}=e;if(t===n)return;let o=r.closest(".js-pinned-items-reorder-form"),a=o.closest(".js-pinned-items-reorder-container"),l=a.querySelector(".js-pinned-items-spinner"),c=a.querySelector(".js-pinned-items-reorder-message"),u=l&&c;u&&(c.textContent="",l.style.display="inline-block"),i.option("disabled",!0);let d=await fetch(o.action,{method:o.method,body:new FormData(o),headers:{"X-Requested-With":"XMLHttpRequest"}});if(!d.ok){u&&(c.textContent=c.getAttribute("data-error-text")||"",l.style.display="none");let e=r.parentNode;s?e.insertBefore(r,s):e.appendChild(r);return}u&&(c.textContent=c.getAttribute("data-success-text")||"",l.style.display="none"),i.option("disabled",!1)}(0,r.N7)(".js-pinned-items-reorder-list",{async add(e){let{Sortable:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,66884));i=t.create(e,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:l,onStart:a,chosenClass:"is-dragging"})}}),(0,o.on)("submit",".js-pinned-items-reorder-form",function(e){e.preventDefault()}),(0,o.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:e}){let{moveWithButton:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,66884));t(e,e.closest(".js-pinned-item-list-item"),l)})},57801:(e,t,n)=>{(0,n(59753).on)("change",".js-profile-editable-pronouns-select",function(){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom"),n=t.getAttribute("data-initial-value");"Custom"===e.value?([...e.options].find(e=>e.value===n)?t.value="":t.value=n,t.hidden=!1,t.focus()):(t.value=e.value,t.hidden=!0)})},60864:(e,t,n)=>{var r,o=n(76006),i=n(59753),s=n(9302),a=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s};function l(e){let t=e.currentTarget,n=t.getAttribute("data-achievement-slug"),r=new URL(window.location.href,window.location.origin),o=new URLSearchParams(r.search);t.hasAttribute("open")&&n?o.set("achievement",n):o.delete("achievement"),r.search=o.toString(),(0,s.qA)(null,"",r.toString())}(0,i.on)("toggle",".js-achievement-card-details",l,{capture:!0});let c=((r=class AchievementBadgeFlipElement extends HTMLElement{connectedCallback(){if(this.tierCount<=1||!this.animate)return;let e=this.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${this.maxRotation}deg)`}],{duration:this.duration,easing:"cubic-bezier(0, 0, 0.25, 1)"});if(this.animations.set(this,e),!this.createTierAnimations()){let e=new MutationObserver((e,t)=>{this.createTierAnimations()&&t.disconnect()});e.observe(this,{childList:!0})}}get duration(){return 500*this.tierCount}get maxRotation(){return 180*this.tierCount}createTierAnimations(){for(let e of this.tiers)this.ensureTierAnimation(e);return this.tiers.length>=this.tierCount}ensureTierAnimation(e){if(this.animations.has(e))return;let t=this.tiers.indexOf(e);if(t<0)return;let n=this.BADGE_SIDE_KEYFRAMES[this.tierCount];if(!n)return;let r=this.tierCount%2==1,o=n.map((e,o)=>{let i=o===t||o===t+1||0===t&&o===this.tierCount,s={offset:e,opacity:i?1:0,easing:"step-start"};if(r&&0===t){let e=o===n.length-1?180:0;s.transform=`rotateY(${e}deg)`}return s}),i=e.animate(o,{duration:this.duration});this.animations.set(e,i)}flip(){for(let e of this.animations.values())if("running"===e.playState)return;for(let e of this.animations.values())e.play()}constructor(...e){super(...e),this.animations=new Map,this.BADGE_SIDE_KEYFRAMES=[[],[0,1],[0,.22,1],[0,.13,.34,1],[0,.09,.22,.42,1],[0,.07,.16,.29,.47,1]],this.tierCount=0}}).attrPrefix="",r);a([o.Lj],c.prototype,"tierCount",void 0),a([o.GO],c.prototype,"tiers",void 0),c=a([o.Ih],c),(0,i.on)("click",".js-new-user-contrib-example",async function(e){let t=document.querySelector(".js-calendar-graph");if(t.classList.contains("sample-graph"))return;t.classList.add("sample-graph");let n=e.currentTarget.getAttribute("data-url"),r=await fetch(n,{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!r.ok){t.classList.remove("sample-graph");return}let o=await r.text(),i=document.createElement("div");i.innerHTML=o;let s=t.querySelector(".js-calendar-graph-table");s?.replaceWith(i.children[0])});var u=n(34892),d=n(36071),f=n(65935),p=n(22114);let h=null,m=document.createElement("div");function g(){let e=document.querySelector(".js-calendar-graph"),t=e.getAttribute("data-url");return new URL(t,window.location.origin)}function y(e){if("key"in e&&"Enter"!==e.key)return;let t=e.currentTarget;if(!((t instanceof HTMLElement||t instanceof SVGElement)&&t.matches("[data-level]")))return;let n=t.closest(".js-calendar-graph"),r=n.getAttribute("data-org"),o=t.getAttribute("data-date"),i=t.classList.contains("active"),s="shiftKey"in e&&!0===e.shiftKey;i?$(F()):D(H(o),s,r)}function w(e,t,{key:n,ctrlKey:r}){let o="[data-level]",i=e=>e instanceof HTMLTableCellElement&&e.matches(o)?e:void 0,s=(e,t)=>{let n=e?.querySelectorAll(t)??[];return Array.from(n).at(-1)};if(t instanceof HTMLTableCellElement){let e=`[data-ix="${t.getAttribute("data-ix")}"]`,a=t.parentElement,l=a?.parentElement;switch(n){case"ArrowLeft":return i(t.previousElementSibling)??t;case"ArrowRight":return i(t.nextElementSibling)??t;case"ArrowDown":return i(a?.nextElementSibling?.querySelector(e))??t;case"ArrowUp":return i(a?.previousElementSibling?.querySelector(e))??t;case"Home":return i(r?l?.querySelector(o):a?.querySelector(o));case"End":return i(s(r?l:a,o));case"PageUp":return i(l?.querySelector(e));case"PageDown":return i(s(l,e))}}}function b(){m&&(m.hidden=!0)}function v(e){let t=e.target;if(!((t instanceof HTMLElement||t instanceof SVGElement)&&t.matches("[data-level]")))return;b(),m.textContent=t.textContent,m.hidden=!1;let n=t.getBoundingClientRect(),r=n.left+window.pageXOffset-m.offsetWidth/2+n.width/2,o=n.bottom+window.pageYOffset-m.offsetHeight-2*n.height,i=document.querySelector(".js-calendar-graph"),s=i.getBoundingClientRect();m.style.top=`${o}px`,S(s,r)?(m.style.left=`${L(n)}px`,m.classList.add("left"),m.classList.remove("right")):E(s,r)?(m.style.left=`${T(n)}px`,m.classList.add("right"),m.classList.remove("left")):(m.style.left=`${r}px`,m.classList.remove("left"),m.classList.remove("right"))}function S(e,t){return e.x>t}function E(e,t){return e.x+e.width<t+m.offsetWidth}function L(e){return e.left+window.pageXOffset-.1*m.offsetWidth+e.width/2}function T(e){return e.left+window.pageXOffset-.9*m.offsetWidth+e.width/2}async function _(e){let t=document.getElementById("js-contribution-activity");if(!t)return;t.classList.add("loading");let n=await (0,u.a_)(document,e);t.classList.remove("loading"),t.textContent="",t.append(n)}function j(e,t){let n=new URLSearchParams(e);n.delete("from"),n.delete("to"),n.delete("org");let r=t.fromStr;t.from&&(r=M(t.from,!!t.forceLocalTime)),r&&n.append("from",r);let o=t.toStr;t.to&&(o=M(t.to,!!t.forceLocalTime)),o&&n.append("to",o);let i=t.org;return i&&n.append("org",i),n}async function A(e,t,n){let r=document.querySelector(".js-calendar-graph"),o=r.getAttribute("data-graph-url"),i=new URL(o,window.location.origin),s=j(i.search.slice(1),{from:e,to:t,org:n,forceLocalTime:!0});i.search=s.toString();let a=await (0,u.a_)(document,i.toString());document.querySelector(".js-yearly-contributions").replaceWith(a)}function q(e,t){let n=document.querySelector(".js-calendar-graph"),r=n.querySelectorAll("[data-level]");for(let e of r)e.classList.remove("active"),e.hasAttribute("aria-selected")&&e.setAttribute("aria-selected","false");if(n.classList.remove("days-selected"),e||t)for(let o of(n.classList.add("days-selected"),r))(function(n){let r=H(n.getAttribute("data-date")||"").getTime();return e&&t?e.getTime()<=r&&r<=t.getTime():e?r===e.getTime():void 0})(o)&&(o.classList.add("active"),o.hasAttribute("aria-selected")&&o.setAttribute("aria-selected","true"))}function x(){let e=new URLSearchParams(window.location.search.slice(1)),t=e.get("from"),n=e.get("to");return t&&n?{first:t,last:n}:null}function R(){let e=document.querySelector(".js-calendar-graph"),t=e.querySelectorAll(".active"),n=t[0],r=t[t.length-1],o=n&&n.getAttribute("data-date"),i=r&&r.getAttribute("data-date");return o&&i?{first:o,last:i}:null}function k(){let e=new URL(F(),window.location.origin),t=new URLSearchParams(e.search.slice(1)),n=t.get("from"),r=t.get("to");return n&&r?{first:n,last:r}:null}function P(){let e=document.querySelector(".js-calendar-graph"),t=e.getAttribute("data-from"),n=e.getAttribute("data-to");return{first:t,last:n}}function C(){let e=R()||x()||k();return e}function O(e){return`0${e}`.slice(-2)}function M(e,t){return t?`${e.getFullYear()}-${O(e.getMonth()+1)}-${O(e.getDate())}`:`${e.getUTCFullYear()}-${O(e.getUTCMonth()+1)}-${O(e.getUTCDate())}`}function H(e){let[t,n,r]=e.split("-").map(e=>parseInt(e,10));return new Date(Date.UTC(t,n-1,r))}function D(e,t,n){let r,o;if(h&&t){let t=h.getTime();[r,o]=e>h?[h,e]:[e,h],r=new Date(Math.max(r.getTime(),t-26784e5)),o=new Date(Math.min(o.getTime(),t+26784e5)),h=null}else h=o=r=e;q(r,o);let i=g(),s=j(i.search.slice(1),{from:r,to:o,org:n});s.append("tab","overview"),i.search=s.toString(),_(i.toString())}async function U(e,t){let n=document.getElementById("year-list-container");if(!n)return;t.append("year_list","1"),e.search=t.toString();let r=await (0,u.a_)(document,e.toString());n.textContent="",n.append(r)}async function I(e){let t=R(),n=P(),r=new Date(n.first),o=new Date(n.last);if(await A(r,o,e),t){let e=new Date(t.first),n=new Date(t.last);q(e,n)}}function F(){let e=document.querySelector(".js-profile-timeline-year-list .js-year-link.selected");return e.href||""}function $(e){let t=new URL(e,window.location.origin).search,n=new URLSearchParams(t.slice(1)),r=n.get("org"),o=n.get("from"),i=n.get("to"),s=new Date(o),a=new Date(i);A(s,a,r);let l=g(),c=j(l.search.slice(1),{from:s,to:a,org:r});c.append("tab","overview"),l.search=c.toString(),_(l.toString())}function W(e){let t=e.closest(".js-details-container");t&&t.classList.add("open");let n=e.getBoundingClientRect(),r=window.scrollY+n.top-62-10;window.scrollTo(0,r)}async function N(e){let{initializeOverviewGraphContainer:t}=await n.e("app_assets_modules_github_profile_contributions-spider-graph_ts").then(n.bind(n,98711));t(e)}m.classList.add("svg-tip","svg-tip-one-line"),m.style.pointerEvents="none",m.hidden=!0,document.body.appendChild(m),(0,d.N7)(".js-calendar-graph-table",function(e){let t=e.closest(".js-calendar-graph");for(let t of e.querySelectorAll("[data-level]"))t.addEventListener("mouseover",v),t.addEventListener("mouseleave",b),t.addEventListener("click",y),t.hasAttribute("tabindex")&&(t.addEventListener("focus",v),t.addEventListener("blur",b),t.addEventListener("keypress",y));let n=t.getAttribute("data-from");n&&(h=H(n)),e instanceof HTMLElement&&(0,p.km)(e,{focusInStrategy:"previous",getNextFocusable:w,bindKeys:p.Qw.ArrowAll|p.Qw.HomeAndEnd|p.Qw.PageUpDown,focusOutBehavior:"stop"})}),(0,i.on)("click",".js-org-filter-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.closest(".js-org-filter-links-container"),r=n.querySelector(".js-org-filter-link.selected"),o=new URL(t.href,window.location.origin),i=new URLSearchParams(o.search.slice(1)),a=i.get("org"),l=C(),c=new Date(l.first),u=new Date(l.last);r&&r.classList.remove("selected"),t!==r&&t.classList.add("selected"),I(a);let d=g(),f={org:a,from:null,to:null};i.has("from")&&(f.from=c),i.has("to")&&(f.to=u);let p=j(d.search.slice(1),f);d.search=p.toString(),_(d.toString()),U(d,p),(0,s.qA)(null,"",d.toString())}),(0,i.on)("click",".js-year-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.closest("ul"),r=n.querySelector(".js-year-link.selected");r.classList.remove("selected"),t.classList.add("selected"),$(t.href),(0,s.qA)(null,"",t.href)}),function(){let e=window.location.hash;if(!e||0>e.indexOf("#event-"))return;let t=e.slice(1,e.length),n=document.getElementById(t);n&&W(n)}(),window.addEventListener("hashchange",function(e){let t=e.newURL||window.location.href,n=t.slice(t.indexOf("#")+1,t.length),r=document.getElementById(n);r&&(e.stopPropagation(),W(r))}),(0,f.AC)(".js-show-more-timeline-form",async function(e,t){await t.text();let n=document.querySelector(".js-show-more-timeline-form");if(n){let t=n.getAttribute("data-year"),r=document.querySelector(".js-year-link.selected"),o=document.querySelector(`#year-link-${t}`);r.classList.remove("selected"),o.classList.add("selected");let i=e.getAttribute("data-year");if(t!==i){let e=n.getAttribute("data-from"),t=new Date(e),r=n.getAttribute("data-to"),o=new Date(r),i=n.getAttribute("data-org");A(t,o,i)}}document.title=e.getAttribute("data-title")||"",(0,s.qA)(null,"",e.getAttribute("data-url")||"")}),(0,d.N7)(".js-activity-overview-graph-container",e=>{N(e)});var B=n(57801);function X(e){if(document.querySelector(".js-profile-editable-area").hidden=e,document.querySelector(".js-profile-editable-names").hidden=e,document.querySelector(".js-profile-editable-form").hidden=!e,document.querySelector(".js-profile-editable-error").textContent="",!e){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom");for(let n of(e&&t&&""===t.value&&(e.selectedIndex=0,t.hidden=!0),document.querySelectorAll("social-account-editor")))n.resetToDefault()}}function Y(e){let t=document.querySelector(".js-profile-editable-replace");t.replaceWith(e)}function z(){let e=document.querySelector(".js-user-profile-bio").getAttribute("data-bio-text");if("string"!=typeof e)return;let t=document.querySelector(".js-user-profile-bio-edit");t.value=e}(0,i.on)("click",".js-profile-editable-edit-button",function(){z(),X(!0)}),(0,i.on)("click",".js-profile-editable-cancel",function(){X(!1)}),(0,f.AC)(".js-profile-editable-form",async(e,t)=>{let n;try{n=await t.html()}catch(e){if(422===e.response.status){let t=document.querySelector(".js-profile-editable-error");t.textContent=e.response.json.message}return}Y(n.html),X(!1)});var V=n(29130),G=n(5742);(0,d.N7)(".js-user-profile-sticky-fields.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-stuck")},remove(){e&&e.classList.remove("is-stuck")}}}),(0,d.N7)(".js-user-profile-follow-button.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-follow-stuck")},remove(){e&&e.classList.remove("is-follow-stuck")}}});var K=n(55240);function Z(e){return e>999?`${(e/1e3).toFixed(1)}k`:e.toLocaleString()}function J(e,t){t>0?(e.textContent=Z(t),e.hidden=!1):e.remove()}async function Q(e){let t=new URL(e.getAttribute("data-url"),window.location.origin),n=new URLSearchParams(t.search.slice(1)),r=e.querySelector(".js-profile-repository-count"),o=e.querySelector(".js-profile-project-count"),i=e.querySelector(".js-profile-team-count"),s=e.querySelector(".js-profile-member-count");r&&n.append("repo","1"),o&&n.append("project","1"),i&&n.append("team","1"),s&&n.append("member","1"),t.search=n.toString();let a=await fetch(t.toString(),{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!a.ok)return;let l=await a.json(),c=l.data;r&&c.repositories&&J(r,c.repositories.totalCount),o&&c.projects&&J(o,c.projects.totalCount),i&&c.teams&&J(i,c.teams.totalCount),s&&c.members&&J(s,c.members.totalCount),e.classList.contains("js-responsive-underlinenav")&&(0,K.k)(e)}(0,d.N7)(".js-profile-tab-count-container",function(e){Q(e)})},89359:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function i(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function s(){return`${window.location.protocol}//${window.location.host}${o()+i()}`}n.d(t,{S:()=>s})},24601:(e,t,n)=>{n.d(t,{aJ:()=>_,cI:()=>E,eK:()=>w});var r=n(82918),o=n(83314),i=n(28382),s=n(89359),a=n(68202),l=n(53729),c=n(86283),u=n(46426);let d=!1,f=0,p=Date.now(),h=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message}function g(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&h.has(e.message)||e.name.startsWith("ApiError")&&h.has(e.message))}function w(e,t={}){if((0,u.c)("FAILBOT_HANDLE_NON_ERRORS")){if(!m(e)){let n=Error(),r=g(e),o={type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:E(n)};b(S(o,t));return}y(e)||b(S(v(e),t))}else y(e)||b(S(v(e),t))}async function b(e){if(!A())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(T(e.error.stacktrace)){d=!0;return}f++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:E(e)}}function S(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,s.S)()||window.location.href,readyState:document.readyState,referrer:(0,a.wP)(),timeSinceLoad:Math.round(Date.now()-p),user:_()||void 0,bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function E(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let L=/(chrome|moz|safari)-extension:\/\//;function T(e){return e.some(e=>L.test(e.filename)||L.test(e.function))}function _(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let j=!1;function A(){return!j&&!d&&f<10&&(0,o.Gb)()}if(c.iG?.addEventListener("pageshow",()=>j=!1),c.iG?.addEventListener("pagehide",()=>j=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{w(e.data.error)})}},58700:(e,t,n)=>{n.d(t,{Bt:()=>i,DN:()=>l,KL:()=>d,Se:()=>a,qC:()=>f,sw:()=>c});var r=n(5582);function o(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(s(e,t),(0,r.j)(t)),o(e,"submit",!0)&&e.submit()}function s(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function a(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}o(e,"change",!1)}function l(e,t){for(let n in t){let r=t[n],o=e.elements.namedItem(n);o instanceof HTMLInputElement?o.value=r:o instanceof HTMLTextAreaElement&&(o.value=r)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function u(e){return new URLSearchParams(e)}function d(e,t){let n=new URLSearchParams(e.search),r=u(t);for(let[e,t]of r)n.append(e,t);return n.toString()}function f(e){return u(new FormData(e)).toString()}},5582:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=o(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",o=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=o}else n&&n.remove()}function o(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>r,u:()=>o})},95253:(e,t,n)=>{let r;n.d(t,{Y:()=>f,q:()=>p});var o=n(88149),i=n(86058),s=n(44544),a=n(71643);let{getItem:l}=(0,s.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function d(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,n]of r)u.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(d(e))}function p(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}},56959:(e,t,n)=>{n.d(t,{RB:()=>r,qC:()=>o,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function r(e,t,n,r={capture:!1}){return e.addEventListener(t,n,r),new Subscription(()=>{e.removeEventListener(t,n,r)})}function o(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},7180:(e,t,n)=>{n.d(t,{O:()=>u,d:()=>TrustedTypesPolicyError});var r=n(46426),o=n(71643),i=n(24601),s=n(27856),a=n.n(s),l=n(95253);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};function c({policy:e,policyName:t,fallback:n,fallbackOnError:s=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t});let i=e();return c&&new Promise(e=>{let n=window.performance.now(),r=a().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let s=Error("Trusted Types policy output sanitized"),a=s.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.q)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:a,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return n}let u={apply:c}},22490:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let i={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},s={createPolicy:(e,t)=>({name:e,...i,...t})},a=globalThis.trustedTypes??s,l=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_github_catalyst_lib_index_-7a61950","ui_packages_soft-nav_soft-nav_ts"],()=>t(60864));var n=e.O()}]);
//# sourceMappingURL=profile-8926ee73de4d.js.map