/*!
* Vuetify v3.4.7
* Forged by John Leider
* Released under the MIT License.
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("vue")):"function"==typeof define&&define.amd?define(["exports","vue"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).Vuetify={},e.Vue)}(this,(function(e,t){"use strict"
function a(e,t){return a=>Object.keys(e).reduce(((l,o)=>{const n="object"==typeof e[o]&&null!=e[o]&&!Array.isArray(e[o])?e[o]:{type:e[o]}
return l[o]=a&&o in a?{...n,default:a[o]}:n,t&&!l[o].source&&(l[o].source=t),l}),{})}const l=a({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),o="undefined"!=typeof window,n=o&&"IntersectionObserver"in window,r=o&&("ontouchstart"in window||window.navigator.maxTouchPoints>0),i=o&&"EyeDropper"in window
function s(e,t,a){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,a)}function u(e,t,a){return function(e,t,a){if(t.set)t.set.call(e,a)
else{if(!t.writable)throw new TypeError("attempted to set read only private field")
t.value=a}}(e,d(e,t,"set"),a),a}function c(e,t){return function(e,t){if(t.get)return t.get.call(e)
return t.value}(e,d(e,t,"get"))}function d(e,t,a){if(!t.has(e))throw new TypeError("attempted to "+a+" private field on non-instance")
return t.get(e)}function v(e,t,a){const l=t.length-1
if(l<0)return void 0===e?a:e
for(let o=0;o<l;o++){if(null==e)return a
e=e[t[o]]}return null==e||void 0===e[t[l]]?a:e[t[l]]}function p(e,t){if(e===t)return!0
if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1
if(e!==Object(e)||t!==Object(t))return!1
const a=Object.keys(e)
return a.length===Object.keys(t).length&&a.every((a=>p(e[a],t[a])))}function f(e,t,a){return null!=e&&t&&"string"==typeof t?void 0!==e[t]?e[t]:v(e,(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a):a}function m(e,t,a){if(!0===t)return void 0===e?a:e
if(null==t||"boolean"==typeof t)return a
if(e!==Object(e)){if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}if("string"==typeof t)return f(e,t,a)
if(Array.isArray(t))return v(e,t,a)
if("function"!=typeof t)return a
const l=t(e,a)
return void 0===l?a:l}function g(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return Array.from({length:e},((e,a)=>t+a))}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px"
return null==e||""===e?void 0:isNaN(+e)?String(e):isFinite(+e)?`${Number(e)}${t}`:void 0}function y(e){return null!==e&&"object"==typeof e&&!Array.isArray(e)}function b(e){if(e&&"$el"in e){const t=e.$el
return t?.nodeType===Node.TEXT_NODE?t.nextElementSibling:t}return e}const V=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16}),S=Object.freeze({enter:"Enter",tab:"Tab",delete:"Delete",esc:"Escape",space:"Space",up:"ArrowUp",down:"ArrowDown",left:"ArrowLeft",right:"ArrowRight",end:"End",home:"Home",del:"Delete",backspace:"Backspace",insert:"Insert",pageup:"PageUp",pagedown:"PageDown",shift:"Shift"})
function w(e){return Object.keys(e)}function k(e,t){return t.every((t=>e.hasOwnProperty(t)))}function x(e,t){const a={},l=new Set(Object.keys(e))
for(const o of t)l.has(o)&&(a[o]=e[o])
return a}function N(e,t,a){const l=Object.create(null),o=Object.create(null)
for(const n in e)t.some((e=>e instanceof RegExp?e.test(n):e===n))&&!a?.some((e=>e===n))?l[n]=e[n]:o[n]=e[n]
return[l,o]}function C(e,t){const a={...e}
return t.forEach((e=>delete a[e])),a}function _(e,t){const a={}
return t.forEach((t=>a[t]=e[t])),a}const I=/^on[^a-z]/,P=e=>I.test(e),B=["onAfterscriptexecute","onAnimationcancel","onAnimationend","onAnimationiteration","onAnimationstart","onAuxclick","onBeforeinput","onBeforescriptexecute","onChange","onClick","onCompositionend","onCompositionstart","onCompositionupdate","onContextmenu","onCopy","onCut","onDblclick","onFocusin","onFocusout","onFullscreenchange","onFullscreenerror","onGesturechange","onGestureend","onGesturestart","onGotpointercapture","onInput","onKeydown","onKeypress","onKeyup","onLostpointercapture","onMousedown","onMousemove","onMouseout","onMouseover","onMouseup","onMousewheel","onPaste","onPointercancel","onPointerdown","onPointerenter","onPointerleave","onPointermove","onPointerout","onPointerover","onPointerup","onReset","onSelect","onSubmit","onTouchcancel","onTouchend","onTouchmove","onTouchstart","onTransitioncancel","onTransitionend","onTransitionrun","onTransitionstart","onWheel"],A=["ArrowUp","ArrowDown","ArrowRight","ArrowLeft","Enter","Escape","Tab"," "]
function R(e){const[t,a]=N(e,[I]),l=C(t,B),[o,n]=N(a,["class","style","id",/^data-/])
return Object.assign(o,t),Object.assign(n,l),[o,n]}function T(e){return null==e?[]:Array.isArray(e)?e:[e]}function E(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1
return Math.max(t,Math.min(a,e))}function D(e){const t=e.toString().trim()
return t.includes(".")?t.length-t.indexOf(".")-1:0}function F(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0"
return e+a.repeat(Math.max(0,t-e.length))}function $(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0"
return a.repeat(Math.max(0,t-e.length))+e}function M(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3
if(e<t)return`${e} B`
const a=1024===t?["Ki","Mi","Gi"]:["k","M","G"]
let l=-1
for(;Math.abs(e)>=t&&l<a.length-1;)e/=t,++l
return`${e.toFixed(1)} ${a[l]}B`}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0
const l={}
for(const t in e)l[t]=e[t]
for(const o in t){const n=e[o],r=t[o]
y(n)&&y(r)?l[o]=L(n,r,a):Array.isArray(n)&&Array.isArray(r)&&a?l[o]=a(n,r):l[o]=r}return l}function O(e){return e.map((e=>e.type===t.Fragment?O(e.children):e)).flat()}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:""
if(z.cache.has(e))return z.cache.get(e)
const t=e.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase()
return z.cache.set(e,t),t}function j(e,t){if(!t||"object"!=typeof t)return[]
if(Array.isArray(t))return t.map((t=>j(e,t))).flat(1)
if(Array.isArray(t.children))return t.children.map((t=>j(e,t))).flat(1)
if(t.component){if(Object.getOwnPropertySymbols(t.component.provides).includes(e))return[t.component]
if(t.component.subTree)return j(e,t.component.subTree).flat(1)}return[]}z.cache=new Map
var H=new WeakMap,W=new WeakMap
class U{constructor(e){s(this,H,{writable:!0,value:[]}),s(this,W,{writable:!0,value:0}),this.size=e}push(e){c(this,H)[c(this,W)]=e,u(this,W,(c(this,W)+1)%this.size)}values(){return c(this,H).slice(c(this,W)).concat(c(this,H).slice(0,c(this,W)))}}function Y(e){const a=t.reactive({}),l=t.computed(e)
return t.watchEffect((()=>{for(const e in l.value)a[e]=l.value[e]}),{flush:"sync"}),t.toRefs(a)}function G(e,t){return e.includes(t)}function q(e){return e[2].toLowerCase()+e.slice(3)}const K=()=>[Function,Array]
function X(e,a){return!!(e[a="on"+t.capitalize(a)]||e[`${a}Once`]||e[`${a}Capture`]||e[`${a}OnceCapture`]||e[`${a}CaptureOnce`])}function Z(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
if(Array.isArray(e))for(const t of e)t(...a)
else"function"==typeof e&&e(...a)}function J(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a=["button","[href]",'input:not([type="hidden"])',"select","textarea","[tabindex]"].map((e=>`${e}${t?':not([tabindex="-1"])':""}:not([disabled])`)).join(", ")
return[...e.querySelectorAll(a)]}function Q(e,t,a){let l,o=e.indexOf(document.activeElement)
const n="next"===t?1:-1
do{o+=n,l=e[o]}while((!l||null==l.offsetParent||!(a?.(l)??1))&&o<e.length&&o>=0)
return l}function ee(e,t){const a=J(e)
if(t)if("first"===t)a[0]?.focus()
else if("last"===t)a.at(-1)?.focus()
else if("number"==typeof t)a[t]?.focus()
else{const l=Q(a,t)
l?l.focus():ee(e,"next"===t?"first":"last")}else e!==document.activeElement&&e.contains(document.activeElement)||a[0]?.focus()}function te(e){return null==e||"string"==typeof e&&""===e.trim()}function ae(){}function le(e,t){if(!(o&&"undefined"!=typeof CSS&&void 0!==CSS.supports&&CSS.supports(`selector(${t})`)))return null
try{return!!e&&e.matches(t)}catch(e){return null}}function oe(e){return e.some((e=>!t.isVNode(e)||e.type!==t.Comment&&(e.type!==t.Fragment||oe(e.children))))?e:null}const ne=["top","bottom"],re=["start","end","left","right"]
function ie(e,t){let[a,l]=e.split(" ")
return l||(l=G(ne,a)?"start":G(re,a)?"top":"center"),{side:se(a,t),align:se(l,t)}}function se(e,t){return"start"===e?t?"right":"left":"end"===e?t?"left":"right":e}function ue(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function ce(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function de(e){return{side:e.align,align:e.side}}function ve(e){return G(ne,e.side)?"y":"x"}class pe{constructor(e){let{x:t,y:a,width:l,height:o}=e
this.x=t,this.y=a,this.width=l,this.height=o}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function fe(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function me(e){return Array.isArray(e)?new pe({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function ge(e){const t=e.getBoundingClientRect(),a=getComputedStyle(e),l=a.transform
if(l){let o,n,r,i,s
if(l.startsWith("matrix3d("))o=l.slice(9,-1).split(/, /),n=+o[0],r=+o[5],i=+o[12],s=+o[13]
else{if(!l.startsWith("matrix("))return new pe(t)
o=l.slice(7,-1).split(/, /),n=+o[0],r=+o[3],i=+o[4],s=+o[5]}const u=a.transformOrigin,c=t.x-i-(1-n)*parseFloat(u),d=t.y-s-(1-r)*parseFloat(u.slice(u.indexOf(" ")+1)),v=n?t.width/n:e.offsetWidth+1,p=r?t.height/r:e.offsetHeight+1
return new pe({x:c,y:d,width:v,height:p})}return new pe(t)}function he(e,t,a){if(void 0===e.animate)return{finished:Promise.resolve()}
let l
try{l=e.animate(t,a)}catch(e){return{finished:Promise.resolve()}}return void 0===l.finished&&(l.finished=new Promise((e=>{l.onfinish=()=>{e(l)}}))),l}const ye=new WeakMap
function be(e,t){Object.keys(t).forEach((a=>{if(P(a)){const l=q(a),o=ye.get(e)
if(null==t[a])o?.forEach((t=>{const[a,n]=t
a===l&&(e.removeEventListener(l,n),o.delete(t))}))
else if(!o||![...o]?.some((e=>e[0]===l&&e[1]===t[a]))){e.addEventListener(l,t[a])
const n=o||new Set
n.add([l,t[a]]),ye.has(e)||ye.set(e,n)}}else null==t[a]?e.removeAttribute(a):e.setAttribute(a,t[a])}))}function Ve(e,t){Object.keys(t).forEach((t=>{if(P(t)){const a=q(t),l=ye.get(e)
l?.forEach((t=>{const[o,n]=t
o===a&&(e.removeEventListener(a,n),l.delete(t))}))}else e.removeAttribute(t)}))}const Se=2.4,we=.2126729,ke=.7151522,xe=.072175,Ne=.03,Ce=12.82051282051282,_e=.06
function Ie(e,t){const a=(e.r/255)**Se,l=(e.g/255)**Se,o=(e.b/255)**Se,n=(t.r/255)**Se,r=(t.g/255)**Se,i=(t.b/255)**Se
let s,u=a*we+l*ke+o*xe,c=n*we+r*ke+i*xe
if(u<=Ne&&(u+=(Ne-u)**1.45),c<=Ne&&(c+=(Ne-c)**1.45),Math.abs(c-u)<5e-4)return 0
if(c>u){const e=1.25*(c**.55-u**.58)
s=e<.001?0:e<.078?e-e*Ce*_e:e-_e}else{const e=1.25*(c**.62-u**.57)
s=e>-.001?0:e>-.078?e-e*Ce*_e:e+_e}return 100*s}function Pe(e){t.warn(`Vuetify: ${e}`)}function Be(e){t.warn(`Vuetify error: ${e}`)}const Ae=.20689655172413793,Re=e=>e>Ae**3?Math.cbrt(e):e/(3*Ae**2)+4/29,Te=e=>e>Ae?e**3:3*Ae**2*(e-4/29)
function Ee(e){const t=Re,a=t(e[1])
return[116*a-16,500*(t(e[0]/.95047)-a),200*(a-t(e[2]/1.08883))]}function De(e){const t=Te,a=(e[0]+16)/116
return[.95047*t(a+e[1]/500),t(a),1.08883*t(a-e[2]/200)]}const Fe=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],$e=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,Me=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],Le=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4
function Oe(e){const t=Array(3),a=$e,l=Fe
for(let o=0;o<3;++o)t[o]=Math.round(255*E(a(l[o][0]*e[0]+l[o][1]*e[1]+l[o][2]*e[2])))
return{r:t[0],g:t[1],b:t[2]}}function ze(e){let{r:t,g:a,b:l}=e
const o=[0,0,0],n=Le,r=Me
t=n(t/255),a=n(a/255),l=n(l/255)
for(let e=0;e<3;++e)o[e]=r[e][0]*t+r[e][1]*a+r[e][2]*l
return o}function je(e){return!!e&&/^(#|var\(--|(rgb|hsl)a?\()/.test(e)}const He=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,We={rgb:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),rgba:(e,t,a,l)=>({r:e,g:t,b:a,a:l}),hsl:(e,t,a,l)=>Ge({h:e,s:t,l:a,a:l}),hsla:(e,t,a,l)=>Ge({h:e,s:t,l:a,a:l}),hsv:(e,t,a,l)=>Ye({h:e,s:t,v:a,a:l}),hsva:(e,t,a,l)=>Ye({h:e,s:t,v:a,a:l})}
function Ue(e){if("number"==typeof e)return(isNaN(e)||e<0||e>16777215)&&Pe(`'${e}' is not a valid hex color`),{r:(16711680&e)>>16,g:(65280&e)>>8,b:255&e}
if("string"==typeof e&&He.test(e)){const{groups:t}=e.match(He),{fn:a,values:l}=t,o=l.split(/,\s*/).map((e=>e.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(a)?parseFloat(e)/100:parseFloat(e)))
return We[a](...o)}if("string"==typeof e){let t=e.startsWith("#")?e.slice(1):e;[3,4].includes(t.length)?t=t.split("").map((e=>e+e)).join(""):[6,8].includes(t.length)||Pe(`'${e}' is not a valid hex(a) color`)
const a=parseInt(t,16)
return(isNaN(a)||a<0||a>4294967295)&&Pe(`'${e}' is not a valid hex(a) color`),tt(t)}if("object"==typeof e){if(k(e,["r","g","b"]))return e
if(k(e,["h","s","l"]))return Ye(Xe(e))
if(k(e,["h","s","v"]))return Ye(e)}throw new TypeError(`Invalid color: ${null==e?e:String(e)||e.constructor.name}\nExpected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function Ye(e){const{h:t,s:a,v:l,a:o}=e,n=e=>{const o=(e+t/60)%6
return l-l*a*Math.max(Math.min(o,4-o,1),0)},r=[n(5),n(3),n(1)].map((e=>Math.round(255*e)))
return{r:r[0],g:r[1],b:r[2],a:o}}function Ge(e){return Ye(Xe(e))}function qe(e){if(!e)return{h:0,s:1,v:1,a:1}
const t=e.r/255,a=e.g/255,l=e.b/255,o=Math.max(t,a,l),n=Math.min(t,a,l)
let r=0
o!==n&&(o===t?r=60*(0+(a-l)/(o-n)):o===a?r=60*(2+(l-t)/(o-n)):o===l&&(r=60*(4+(t-a)/(o-n)))),r<0&&(r+=360)
const i=[r,0===o?0:(o-n)/o,o]
return{h:i[0],s:i[1],v:i[2],a:e.a}}function Ke(e){const{h:t,s:a,v:l,a:o}=e,n=l-l*a/2
return{h:t,s:1===n||0===n?0:(l-n)/Math.min(n,1-n),l:n,a:o}}function Xe(e){const{h:t,s:a,l,a:o}=e,n=l+a*Math.min(l,1-l)
return{h:t,s:0===n?0:2-2*l/n,v:n,a:o}}function Ze(e){let{r:t,g:a,b:l,a:o}=e
return void 0===o?`rgb(${t}, ${a}, ${l})`:`rgba(${t}, ${a}, ${l}, ${o})`}function Je(e){return Ze(Ye(e))}function Qe(e){const t=Math.round(e).toString(16)
return("00".substr(0,2-t.length)+t).toUpperCase()}function et(e){let{r:t,g:a,b:l,a:o}=e
return`#${[Qe(t),Qe(a),Qe(l),void 0!==o?Qe(Math.round(255*o)):""].join("")}`}function tt(e){e=function(e){e.startsWith("#")&&(e=e.slice(1))
3!==(e=e.replace(/([^0-9a-f])/gi,"F")).length&&4!==e.length||(e=e.split("").map((e=>e+e)).join(""))
6!==e.length&&(e=F(F(e,6),8,"F"))
return e}(e)
let[t,a,l,o]=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1
const a=[]
let l=0
for(;l<e.length;)a.push(e.substr(l,t)),l+=t
return a}(e,2).map((e=>parseInt(e,16)))
return o=void 0===o?o:o/255,{r:t,g:a,b:l,a:o}}function at(e){return qe(tt(e))}function lt(e){return et(Ye(e))}function ot(e,t){const a=Ee(ze(e))
return a[0]=a[0]+10*t,Oe(De(a))}function nt(e,t){const a=Ee(ze(e))
return a[0]=a[0]-10*t,Oe(De(a))}function rt(e){return ze(Ue(e))[1]}function it(e,t){const a=rt(e),l=rt(t)
return(Math.max(a,l)+.05)/(Math.min(a,l)+.05)}function st(e){const t=Math.abs(Ie(Ue(0),Ue(e)))
return Math.abs(Ie(Ue(16777215),Ue(e)))>Math.min(t,50)?"#fff":"#000"}const ut=Symbol.for("vuetify:defaults")
function ct(e){return t.ref(e)}function dt(){const e=t.inject(ut)
if(!e)throw new Error("[Vuetify] Could not find defaults instance")
return e}function vt(e,a){const l=dt(),o=t.ref(e),n=t.computed((()=>{if(t.unref(a?.disabled))return l.value
const e=t.unref(a?.scoped),n=t.unref(a?.reset),r=t.unref(a?.root)
if(null==o.value&&!(e||n||r))return l.value
let i=L(o.value,{prev:l.value})
if(e)return i
if(n||r){const e=Number(n||1/0)
for(let t=0;t<=e&&(i&&"prev"in i);t++)i=i.prev
return i&&"string"==typeof r&&r in i&&(i=L(L(i,{prev:i}),i[r])),i}return i.prev?L(i.prev,i):i}))
return t.provide(ut,n),n}function pt(e,t){return void 0!==e.props?.[t]||void 0!==e.props?.[z(t)]}function ft(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:dt()
const o=St("useDefaults")
if(a=a??o.type.name??o.type.__name,!a)throw new Error("[Vuetify] Could not determine component name")
const n=t.computed((()=>l.value?.[e._as??a])),r=new Proxy(e,{get(e,t){const a=Reflect.get(e,t)
return"class"===t||"style"===t?[n.value?.[t],a].filter((e=>null!=e)):"string"!=typeof t||pt(o.vnode,t)?a:n.value?.[t]??l.value?.global?.[t]??a}}),i=t.shallowRef()
function s(){const e=Bt(ut,o)
t.provide(ut,t.computed((()=>i.value?L(e?.value??{},i.value):e?.value)))}return t.watchEffect((()=>{if(n.value){const e=Object.entries(n.value).filter((e=>{let[t]=e
return t.startsWith(t[0].toUpperCase())}))
i.value=e.length?Object.fromEntries(e):void 0}else i.value=void 0})),{props:r,provideSubDefaults:s}}function mt(e){if(e._setup=e._setup??e.setup,!e.name)return Pe("The component is missing an explicit name, unable to generate default prop value"),e
if(e._setup){e.props=a(e.props??{},e.name)()
const t=Object.keys(e.props).filter((e=>"class"!==e&&"style"!==e))
e.filterProps=function(e){return x(e,t)},e.props._as=String,e.setup=function(t,a){const l=dt()
if(!l.value)return e._setup(t,a)
const{props:o,provideSubDefaults:n}=ft(t,t._as??e.name,l),r=e._setup(o,a)
return n(),r}}return e}function gt(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0]
return a=>(e?mt:t.defineComponent)(a)}function ht(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"div",o=arguments.length>2?arguments[2]:void 0
return gt()({name:o??t.capitalize(t.camelize(e.replace(/__/g,"-"))),props:{tag:{type:String,default:a},...l()},setup(a,l){let{slots:o}=l
return()=>t.h(a.tag,{class:[e,a.class],style:a.style},o.default?.())}})}function yt(e){if("function"!=typeof e.getRootNode){for(;e.parentNode;)e=e.parentNode
return e!==document?null:document}const t=e.getRootNode()
return t!==document&&t.getRootNode({composed:!0})!==document?null:t}const bt="cubic-bezier(0.4, 0, 0.2, 1)"
function Vt(e,t,a){return Object.keys(e).filter((e=>P(e)&&e.endsWith(t))).reduce(((l,o)=>(l[o.slice(0,-t.length)]=t=>e[o](t,a(t)),l)),{})}function St(e,a){const l=t.getCurrentInstance()
if(!l)throw new Error(`[Vuetify] ${e} ${a||"must be called from inside a setup function"}`)
return l}function wt(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"composables"
const t=St(e).type
return z(t?.aliasName||t?.name)}let kt=0,xt=new WeakMap
function Nt(){const e=St("getUid")
if(xt.has(e))return xt.get(e)
{const t=kt++
return xt.set(e,t),t}}function Ct(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
for(;e;){if(t?Pt(e):It(e))return e
e=e.parentElement}return document.scrollingElement}function _t(e,t){const a=[]
if(t&&e&&!t.contains(e))return a
for(;e&&(It(e)&&a.push(e),e!==t);)e=e.parentElement
return a}function It(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return"scroll"===t.overflowY||"auto"===t.overflowY&&e.scrollHeight>e.clientHeight}function Pt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1
const t=window.getComputedStyle(e)
return["scroll","auto"].includes(t.overflowY)}function Bt(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:St("injectSelf")
const{provides:a}=t
if(a&&e in a)return a[e]}function At(e){St("useRender").render=e}function Rt(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"content"
const l=t.ref(),n=t.ref()
if(o){const o=new ResizeObserver((t=>{e?.(t,o),t.length&&(n.value="content"===a?t[0].contentRect:t[0].target.getBoundingClientRect())}))
t.onBeforeUnmount((()=>{o.disconnect()})),t.watch(l,((e,t)=>{t&&(o.unobserve(b(t)),n.value=void 0),e&&o.observe(b(e))}),{flush:"post"})}return{resizeRef:l,contentRect:t.readonly(n)}}Nt.reset=()=>{kt=0,xt=new WeakMap}
const Tt=Symbol.for("vuetify:layout"),Et=Symbol.for("vuetify:layout-item"),Dt=a({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),Ft=a({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item")
function $t(){const e=t.inject(Tt)
if(!e)throw new Error("[Vuetify] Could not find injected layout")
return{getLayoutItem:e.getLayoutItem,mainRect:e.mainRect,mainStyles:e.mainStyles}}function Mt(e){const a=t.inject(Tt)
if(!a)throw new Error("[Vuetify] Could not find injected layout")
const l=e.id??`layout-item-${Nt()}`,o=St("useLayoutItem")
t.provide(Et,{id:l})
const n=t.shallowRef(!1)
t.onDeactivated((()=>n.value=!0)),t.onActivated((()=>n.value=!1))
const{layoutItemStyles:r,layoutItemScrimStyles:i}=a.register(o,{...e,active:t.computed((()=>!n.value&&e.active.value)),id:l})
return t.onBeforeUnmount((()=>a.unregister(l))),{layoutItemStyles:r,layoutRect:a.layoutRect,layoutItemScrimStyles:i}}function Lt(e){const a=t.inject(Tt,null),l=t.computed((()=>a?a.rootZIndex.value-100:1e3)),o=t.ref([]),n=t.reactive(new Map),r=t.reactive(new Map),i=t.reactive(new Map),s=t.reactive(new Map),u=t.reactive(new Map),{resizeRef:c,contentRect:d}=Rt(),v=t.computed((()=>{const t=new Map,a=e.overlaps??[]
for(const e of a.filter((e=>e.includes(":")))){const[a,l]=e.split(":")
if(!o.value.includes(a)||!o.value.includes(l))continue
const i=n.get(a),s=n.get(l),u=r.get(a),c=r.get(l)
i&&s&&u&&c&&(t.set(l,{position:i.value,amount:parseInt(u.value,10)}),t.set(a,{position:s.value,amount:-parseInt(c.value,10)}))}return t})),p=t.computed((()=>{const e=[...new Set([...i.values()].map((e=>e.value)))].sort(((e,t)=>e-t)),t=[]
for(const a of e){const e=o.value.filter((e=>i.get(e)?.value===a))
t.push(...e)}return((e,t,a,l)=>{let o={top:0,left:0,right:0,bottom:0}
const n=[{id:"",layer:{...o}}]
for(const r of e){const e=t.get(r),i=a.get(r),s=l.get(r)
if(!e||!i||!s)continue
const u={...o,[e.value]:parseInt(o[e.value],10)+(s.value?parseInt(i.value,10):0)}
n.push({id:r,layer:u}),o=u}return n})(t,n,r,s)})),f=t.computed((()=>!Array.from(u.values()).some((e=>e.value)))),m=t.computed((()=>p.value[p.value.length-1].layer)),g=t.computed((()=>({"--v-layout-left":h(m.value.left),"--v-layout-right":h(m.value.right),"--v-layout-top":h(m.value.top),"--v-layout-bottom":h(m.value.bottom),...f.value?void 0:{transition:"none"}}))),y=t.computed((()=>p.value.slice(1).map(((e,t)=>{let{id:a}=e
const{layer:l}=p.value[t],o=r.get(a),i=n.get(a)
return{id:a,...l,size:Number(o.value),position:i.value}})))),b=e=>y.value.find((t=>t.id===e)),V=St("createLayout"),S=t.shallowRef(!1)
t.onMounted((()=>{S.value=!0})),t.provide(Tt,{register:(e,a)=>{let{id:c,order:d,position:m,layoutSize:g,elementSize:h,active:b,disableTransitions:w,absolute:k}=a
i.set(c,d),n.set(c,m),r.set(c,g),s.set(c,b),w&&u.set(c,w)
const x=j(Et,V?.vnode).indexOf(e)
x>-1?o.value.splice(x,0,c):o.value.push(c)
const N=t.computed((()=>y.value.findIndex((e=>e.id===c)))),C=t.computed((()=>l.value+2*p.value.length-2*N.value))
return{layoutItemStyles:t.computed((()=>{const e="left"===m.value||"right"===m.value,t="right"===m.value,a="bottom"===m.value,o={[m.value]:0,zIndex:C.value,transform:`translate${e?"X":"Y"}(${(b.value?0:-110)*(t||a?-1:1)}%)`,position:k.value||1e3!==l.value?"absolute":"fixed",...f.value?void 0:{transition:"none"}}
if(!S.value)return o
const n=y.value[N.value]
if(!n)throw new Error(`[Vuetify] Could not find layout item "${c}"`)
const r=v.value.get(c)
return r&&(n[r.position]+=r.amount),{...o,height:e?`calc(100% - ${n.top}px - ${n.bottom}px)`:h.value?`${h.value}px`:void 0,left:t?void 0:`${n.left}px`,right:t?`${n.right}px`:void 0,top:"bottom"!==m.value?`${n.top}px`:void 0,bottom:"top"!==m.value?`${n.bottom}px`:void 0,width:e?h.value?`${h.value}px`:void 0:`calc(100% - ${n.left}px - ${n.right}px)`}})),layoutItemScrimStyles:t.computed((()=>({zIndex:C.value-1}))),zIndex:C}},unregister:e=>{i.delete(e),n.delete(e),r.delete(e),s.delete(e),u.delete(e),o.value=o.value.filter((t=>t!==e))},mainRect:m,mainStyles:g,getLayoutItem:b,items:y,layoutRect:d,rootZIndex:l})
return{layoutClasses:t.computed((()=>["v-layout",{"v-layout--full-height":e.fullHeight}])),layoutStyles:t.computed((()=>({zIndex:a?l.value:void 0,position:a?"relative":void 0,overflow:a?"hidden":void 0}))),getLayoutItem:b,items:y,layoutRect:d,layoutRef:c}}var Ot={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}}
const zt={af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}
function jt(e,a){let l
function o(){l=t.effectScope(),l.run((()=>a.length?a((()=>{l?.stop(),o()})):a()))}t.watch(e,(e=>{e&&!l?o():e||(l?.stop(),l=void 0)}),{immediate:!0}),t.onScopeDispose((()=>{l?.stop()}))}function Ht(e,a,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e=>e,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e=>e
const r=St("useProxiedModel"),i=t.ref(void 0!==e[a]?e[a]:l),s=z(a),u=s!==a,c=u?t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)&&!r.vnode.props?.hasOwnProperty(s)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)&&!r.vnode.props?.hasOwnProperty(`onUpdate:${s}`))))):t.computed((()=>(e[a],!(!r.vnode.props?.hasOwnProperty(a)||!r.vnode.props?.hasOwnProperty(`onUpdate:${a}`)))))
jt((()=>!c.value),(()=>{t.watch((()=>e[a]),(e=>{i.value=e}))}))
const d=t.computed({get(){const t=e[a]
return o(c.value?t:i.value)},set(l){const s=n(l),u=t.toRaw(c.value?e[a]:i.value)
u!==s&&o(u)!==l&&(i.value=s,r?.emit(`update:${a}`,s))}})
return Object.defineProperty(d,"externalValue",{get:()=>c.value?e[a]:i.value}),d}const Wt="$vuetify.",Ut=(e,t)=>e.replace(/\{(\d+)\}/g,((e,a)=>String(t[+a]))),Yt=(e,t,a)=>function(l){for(var o=arguments.length,n=new Array(o>1?o-1:0),r=1;r<o;r++)n[r-1]=arguments[r]
if(!l.startsWith(Wt))return Ut(l,n)
const i=l.replace(Wt,""),s=e.value&&a.value[e.value],u=t.value&&a.value[t.value]
let c=f(s,i,null)
return c||(Pe(`Translation key "${l}" not found in "${e.value}", trying fallback locale`),c=f(u,i,null)),c||(Be(`Translation key "${l}" not found in fallback`),c=l),"string"!=typeof c&&(Be(`Translation key "${l}" has a non-string value`),c=l),Ut(c,n)}
function Gt(e,t){return(a,l)=>new Intl.NumberFormat([e.value,t.value],l).format(a)}function qt(e,a,l){const o=Ht(e,a,e[a]??l.value)
return o.value=e[a]??l.value,t.watch(l,(t=>{null==e[a]&&(o.value=l.value)})),o}function Kt(e){return t=>{const a=qt(t,"locale",e.current),l=qt(t,"fallback",e.fallback),o=qt(t,"messages",e.messages)
return{name:"vuetify",current:a,fallback:l,messages:o,t:Yt(a,l,o),n:Gt(a,l),provide:Kt({current:a,fallback:l,messages:o})}}}const Xt=Symbol.for("vuetify:locale")
function Zt(e){const a=e?.adapter&&(l=e?.adapter,null!=l.name)?e?.adapter:function(e){const a=t.shallowRef(e?.locale??"en"),l=t.shallowRef(e?.fallback??"en"),o=t.ref({en:Ot,...e?.messages})
return{name:"vuetify",current:a,fallback:l,messages:o,t:Yt(a,l,o),n:Gt(a,l),provide:Kt({current:a,fallback:l,messages:o})}}(e)
var l
const o=function(e,a){const l=t.ref(a?.rtl??zt),o=t.computed((()=>l.value[e.current.value]??!1))
return{isRtl:o,rtl:l,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(a,e)
return{...a,...o}}function Jt(){const e=t.inject(Xt)
if(!e)throw new Error("[Vuetify] Could not find injected locale instance")
return e}function Qt(e){const a=t.inject(Xt)
if(!a)throw new Error("[Vuetify] Could not find injected locale instance")
const l=a.provide(e),o=function(e,a,l){const o=t.computed((()=>l.rtl??a.value[e.current.value]??!1))
return{isRtl:o,rtl:a,rtlClasses:t.computed((()=>"v-locale--is-"+(o.value?"rtl":"ltr")))}}(l,a.rtl,e),n={...l,...o}
return t.provide(Xt,n),n}function ea(){const e=t.inject(Xt)
if(!e)throw new Error("[Vuetify] Could not find injected rtl instance")
return{isRtl:e.isRtl,rtlClasses:e.rtlClasses}}const ta=Symbol.for("vuetify:theme"),aa=a({theme:String},"theme")
function la(e){const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
const t={defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}
if(!e)return{...t,isDisabled:!0}
const a={}
for(const[l,o]of Object.entries(e.themes??{})){const e=o.dark||"dark"===l?t.themes?.dark:t.themes?.light
a[l]=L(e,o)}return L(t,{...e,themes:a})}(e),l=t.ref(a.defaultTheme),n=t.ref(a.themes),r=t.computed((()=>{const e={}
for(const[t,l]of Object.entries(n.value)){const o=e[t]={...l,colors:{...l.colors}}
if(a.variations)for(const e of a.variations.colors){const t=o.colors[e]
if(t)for(const l of["lighten","darken"]){const n="lighten"===l?ot:nt
for(const r of g(a.variations[l],1))o.colors[`${e}-${l}-${r}`]=et(n(Ue(t),r))}}for(const e of Object.keys(o.colors)){if(/^on-[a-z]/.test(e)||o.colors[`on-${e}`])continue
const t=`on-${e}`,a=Ue(o.colors[e])
o.colors[t]=st(a)}}return e})),i=t.computed((()=>r.value[l.value])),s=t.computed((()=>{const e=[]
i.value.dark&&ra(e,":root",["color-scheme: dark"]),ra(e,":root",ia(i.value))
for(const[t,a]of Object.entries(r.value))ra(e,`.v-theme--${t}`,["color-scheme: "+(a.dark?"dark":"normal"),...ia(a)])
const t=[],a=[],l=new Set(Object.values(r.value).flatMap((e=>Object.keys(e.colors))))
for(const e of l)/^on-[a-z]/.test(e)?ra(a,`.${e}`,[`color: rgb(var(--v-theme-${e})) !important`]):(ra(t,`.bg-${e}`,[`--v-theme-overlay-multiplier: var(--v-theme-${e}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${e})) !important`,`color: rgb(var(--v-theme-on-${e})) !important`]),ra(a,`.text-${e}`,[`color: rgb(var(--v-theme-${e})) !important`]),ra(a,`.border-${e}`,[`--v-border-color: var(--v-theme-${e})`]))
return e.push(...t,...a),e.map(((e,t)=>0===t?e:`    ${e}`)).join("")}))
function u(){return{style:[{children:s.value,id:"vuetify-theme-stylesheet",nonce:a.cspNonce||!1}]}}const c=t.computed((()=>a.isDisabled?void 0:`v-theme--${l.value}`))
return{install:function(e){if(a.isDisabled)return
const l=e._context.provides.usehead
if(l)if(l.push){const e=l.push(u)
o&&t.watch(s,(()=>{e.patch(u)}))}else o?(l.addHeadObjs(t.computed(u)),t.watchEffect((()=>l.updateDOM()))):l.addHeadObjs(u())
else{let e=o?document.getElementById("vuetify-theme-stylesheet"):null
function l(){if("undefined"!=typeof document&&!e){const t=document.createElement("style")
t.type="text/css",t.id="vuetify-theme-stylesheet",a.cspNonce&&t.setAttribute("nonce",a.cspNonce),e=t,document.head.appendChild(e)}e&&(e.innerHTML=s.value)}o?t.watch(s,l,{immediate:!0}):l()}},isDisabled:a.isDisabled,name:l,themes:n,current:i,computedThemes:r,themeClasses:c,styles:s,global:{name:l,current:i}}}function oa(e){St("provideTheme")
const a=t.inject(ta,null)
if(!a)throw new Error("Could not find Vuetify theme injection")
const l=t.computed((()=>e.theme??a.name.value)),o=t.computed((()=>a.themes.value[l.value])),n=t.computed((()=>a.isDisabled?void 0:`v-theme--${l.value}`)),r={...a,name:l,current:o,themeClasses:n}
return t.provide(ta,r),r}function na(){St("useTheme")
const e=t.inject(ta,null)
if(!e)throw new Error("Could not find Vuetify theme injection")
return e}function ra(e,t,a){e.push(`${t} {\n`,...a.map((e=>`  ${e};\n`)),"}\n")}function ia(e){const t=e.dark?2:1,a=e.dark?1:2,l=[]
for(const[o,n]of Object.entries(e.colors)){const e=Ue(n)
l.push(`--v-theme-${o}: ${e.r},${e.g},${e.b}`),o.startsWith("on-")||l.push(`--v-theme-${o}-overlay-multiplier: ${rt(n)>.18?t:a}`)}for(const[t,a]of Object.entries(e.variables)){const e="string"==typeof a&&a.startsWith("#")?Ue(a):void 0,o=e?`${e.r}, ${e.g}, ${e.b}`:void 0
l.push(`--v-${t}: ${o??a}`)}return l}const sa=a({...l(),...Dt({fullHeight:!0}),...aa()},"VApp"),ua=gt()({name:"VApp",props:sa(),setup(e,a){let{slots:l}=a
const o=oa(e),{layoutClasses:n,getLayoutItem:r,items:i,layoutRef:s}=Lt(e),{rtlClasses:u}=ea()
return At((()=>t.createVNode("div",{ref:s,class:["v-application",o.themeClasses.value,n.value,u.value,e.class],style:[e.style]},[t.createVNode("div",{class:"v-application__wrap"},[l.default?.()])]))),{getLayoutItem:r,items:i,theme:o}}}),ca=a({tag:{type:String,default:"div"}},"tag"),da=a({text:String,...l(),...ca()},"VToolbarTitle"),va=gt()({name:"VToolbarTitle",props:da(),setup(e,a){let{slots:l}=a
return At((()=>{const a=!!(l.default||l.text||e.text)
return t.createVNode(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>[a&&t.createVNode("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,l.default?.()])]})})),{}}}),pa=a({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition")
function fa(e,a,l){return gt()({name:e,props:pa({mode:l,origin:a}),setup(a,l){let{slots:o}=l
const n={onBeforeEnter(e){a.origin&&(e.style.transformOrigin=a.origin)},onLeave(e){if(a.leaveAbsolute){const{offsetTop:t,offsetLeft:a,offsetWidth:l,offsetHeight:o}=e
e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=`${t}px`,e.style.left=`${a}px`,e.style.width=`${l}px`,e.style.height=`${o}px`}a.hideOnLeave&&e.style.setProperty("display","none","important")},onAfterLeave(e){if(a.leaveAbsolute&&e?._transitionInitialStyles){const{position:t,top:a,left:l,width:o,height:n}=e._transitionInitialStyles
delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=a||"",e.style.left=l||"",e.style.width=o||"",e.style.height=n||""}}}
return()=>{const l=a.group?t.TransitionGroup:t.Transition
return t.h(l,{name:a.disabled?"":e,css:!a.disabled,...a.group?void 0:{mode:a.mode},...a.disabled?{}:n},o.default)}}})}function ma(e,a){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out"
return gt()({name:e,props:{mode:{type:String,default:l},disabled:Boolean},setup(l,o){let{slots:n}=o
return()=>t.h(t.Transition,{name:l.disabled?"":e,css:!l.disabled,...l.disabled?{}:a},n.default)}})}function ga(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]&&arguments[1]
const l=a?"width":"height",o=t.camelize(`offset-${l}`)
return{onBeforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[l]:e.style[l]}},onEnter(t){const a=t._initialStyle
t.style.setProperty("transition","none","important"),t.style.overflow="hidden"
const n=`${t[o]}px`
t.style[l]="0",t.offsetHeight,t.style.transition=a.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[l]=n}))},onAfterEnter:r,onEnterCancelled:r,onLeave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[l]:e.style[l]},e.style.overflow="hidden",e.style[l]=`${e[o]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[l]="0"))},onAfterLeave:n,onLeaveCancelled:n}
function n(t){e&&t._parent&&t._parent.classList.remove(e),r(t)}function r(e){const t=e._initialStyle[l]
e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[l]=t),delete e._initialStyle}}const ha=a({target:[Object,Array]},"v-dialog-transition"),ya=gt()({name:"VDialogTransition",props:ha(),setup(e,a){let{slots:l}=a
const o={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(t,a){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),t.style.visibility=""
const{x:l,y:o,sx:n,sy:r,speed:i}=Va(e.target,t),s=he(t,[{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0},{}],{duration:225*i,easing:"cubic-bezier(0.0, 0, 0.2, 1)"})
ba(t)?.forEach((e=>{he(e,[{opacity:0},{opacity:0,offset:.33},{}],{duration:450*i,easing:bt})})),s.finished.then((()=>a()))},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(t,a){await new Promise((e=>requestAnimationFrame(e)))
const{x:l,y:o,sx:n,sy:r,speed:i}=Va(e.target,t)
he(t,[{},{transform:`translate(${l}px, ${o}px) scale(${n}, ${r})`,opacity:0}],{duration:125*i,easing:"cubic-bezier(0.4, 0, 1, 1)"}).finished.then((()=>a())),ba(t)?.forEach((e=>{he(e,[{},{opacity:0,offset:.2},{opacity:0}],{duration:250*i,easing:bt})}))},onAfterLeave(e){e.style.removeProperty("pointer-events")}}
return()=>e.target?t.createVNode(t.Transition,t.mergeProps({name:"dialog-transition"},o,{css:!1}),l):t.createVNode(t.Transition,{name:"dialog-transition"},l)}})
function ba(e){const t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children
return t&&[...t]}function Va(e,t){const a=me(e),l=ge(t),[o,n]=getComputedStyle(t).transformOrigin.split(" ").map((e=>parseFloat(e))),[r,i]=getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ")
let s=a.left+a.width/2
"left"===r||"left"===i?s-=a.width/2:"right"!==r&&"right"!==i||(s+=a.width/2)
let u=a.top+a.height/2
"top"===r||"top"===i?u-=a.height/2:"bottom"!==r&&"bottom"!==i||(u+=a.height/2)
const c=a.width/l.width,d=a.height/l.height,v=Math.max(1,c,d),p=c/v||0,f=d/v||0,m=l.width*l.height/(window.innerWidth*window.innerHeight),g=m>.12?Math.min(1.5,10*(m-.12)+1):1
return{x:s-(o+l.left),y:u-(n+l.top),sx:p,sy:f,speed:g}}const Sa=fa("fab-transition","center center","out-in"),wa=fa("dialog-bottom-transition"),ka=fa("dialog-top-transition"),xa=fa("fade-transition"),Na=fa("scale-transition"),Ca=fa("scroll-x-transition"),_a=fa("scroll-x-reverse-transition"),Ia=fa("scroll-y-transition"),Pa=fa("scroll-y-reverse-transition"),Ba=fa("slide-x-transition"),Aa=fa("slide-x-reverse-transition"),Ra=fa("slide-y-transition"),Ta=fa("slide-y-reverse-transition"),Ea=ma("expand-transition",ga()),Da=ma("expand-x-transition",ga("",!0)),Fa=a({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),$a=gt(!1)({name:"VDefaultsProvider",props:Fa(),setup(e,a){let{slots:l}=a
const{defaults:o,disabled:n,reset:r,root:i,scoped:s}=t.toRefs(e)
return vt(o,{reset:r,root:i,scoped:s,disabled:n}),()=>l.default?.()}}),Ma=a({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension")
function La(e){return{dimensionStyles:t.computed((()=>({height:h(e.height),maxHeight:h(e.maxHeight),maxWidth:h(e.maxWidth),minHeight:h(e.minHeight),minWidth:h(e.minWidth),width:h(e.width)})))}}const Oa=a({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...l(),...Ma()},"VResponsive"),za=gt()({name:"VResponsive",props:Oa(),setup(e,a){let{slots:l}=a
const{aspectStyles:o}=function(e){return{aspectStyles:t.computed((()=>{const t=Number(e.aspectRatio)
return t?{paddingBottom:String(1/t*100)+"%"}:void 0}))}}(e),{dimensionStyles:n}=La(e)
return At((()=>t.createVNode("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[n.value,e.style]},[t.createVNode("div",{class:"v-responsive__sizer",style:o.value},null),l.additional?.(),l.default&&t.createVNode("div",{class:["v-responsive__content",e.contentClass]},[l.default()])]))),{}}}),ja=a({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>!0!==e}},"transition"),Ha=(e,a)=>{let{slots:l}=a
const{transition:o,disabled:n,...r}=e,{component:i=t.Transition,...s}="object"==typeof o?o:{}
return t.h(i,t.mergeProps("string"==typeof o?{name:n?"":o}:s,r,{disabled:n}),l)}
function Wa(e,t){const a=e._observe?.[t.instance.$.uid]
a&&(a.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Ua={mounted:function(e,t){if(!n)return
const a=t.modifiers||{},l=t.value,{handler:o,options:r}="object"==typeof l?l:{handler:l,options:{}},i=new IntersectionObserver((function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0
const r=e._observe?.[t.instance.$.uid]
if(!r)return
const i=l.some((e=>e.isIntersecting))
!o||a.quiet&&!r.init||a.once&&!i&&!r.init||o(i,l,n),i&&a.once?Wa(e,t):r.init=!0}),r)
e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:i},i.observe(e)},unmounted:Wa},Ya=a({alt:String,cover:Boolean,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Oa(),...l(),...ja()},"VImg"),Ga=gt()({name:"VImg",directives:{intersect:Ua},props:Ya(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:l,slots:o}=a
const r=St("VImg"),i=t.shallowRef(""),s=t.ref(),u=t.shallowRef(e.eager?"loading":"idle"),c=t.shallowRef(),d=t.shallowRef(),v=t.computed((()=>e.src&&"object"==typeof e.src?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)})),p=t.computed((()=>v.value.aspect||c.value/d.value||0))
function f(a){if((!e.eager||!a)&&(!n||a||e.eager)){if(u.value="loading",v.value.lazySrc){const e=new Image
e.src=v.value.lazySrc,V(e,null)}v.value.src&&t.nextTick((()=>{l("loadstart",s.value?.currentSrc||v.value.src),setTimeout((()=>{if(!r.isUnmounted)if(s.value?.complete){if(s.value.naturalWidth||g(),"error"===u.value)return
p.value||V(s.value,null),"loading"===u.value&&m()}else p.value||V(s.value),y()}))}))}}function m(){r.isUnmounted||(y(),V(s.value),u.value="loaded",l("load",s.value?.currentSrc||v.value.src))}function g(){r.isUnmounted||(u.value="error",l("error",s.value?.currentSrc||v.value.src))}function y(){const e=s.value
e&&(i.value=e.currentSrc||e.src)}t.watch((()=>e.src),(()=>{f("idle"!==u.value)})),t.watch(p,((e,t)=>{!e&&t&&s.value&&V(s.value)})),t.onBeforeMount((()=>f()))
let b=-1
function V(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100
const a=()=>{if(clearTimeout(b),r.isUnmounted)return
const{naturalHeight:l,naturalWidth:o}=e
l||o?(c.value=o,d.value=l):e.complete||"loading"!==u.value||null==t?(e.currentSrc.endsWith(".svg")||e.currentSrc.startsWith("data:image/svg+xml"))&&(c.value=1,d.value=1):b=window.setTimeout(a,t)}
a()}t.onBeforeUnmount((()=>{clearTimeout(b)}))
const S=t.computed((()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover}))),w=()=>{if(!v.value.src||"idle"===u.value)return null
const a=t.createVNode("img",{class:["v-img__img",S.value],style:{objectPosition:e.position},src:v.value.src,srcset:v.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:s,onLoad:m,onError:g},null),l=o.sources?.()
return t.createVNode(Ha,{transition:e.transition,appear:!0},{default:()=>[t.withDirectives(l?t.createVNode("picture",{class:"v-img__picture"},[l,a]):a,[[t.vShow,"loaded"===u.value]])]})},k=()=>t.createVNode(Ha,{transition:e.transition},{default:()=>[v.value.lazySrc&&"loaded"!==u.value&&t.createVNode("img",{class:["v-img__img","v-img__img--preload",S.value],style:{objectPosition:e.position},src:v.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),x=()=>o.placeholder?t.createVNode(Ha,{transition:e.transition,appear:!0},{default:()=>[("loading"===u.value||"error"===u.value&&!o.error)&&t.createVNode("div",{class:"v-img__placeholder"},[o.placeholder()])]}):null,N=()=>o.error?t.createVNode(Ha,{transition:e.transition,appear:!0},{default:()=>["error"===u.value&&t.createVNode("div",{class:"v-img__error"},[o.error()])]}):null,C=()=>e.gradient?t.createVNode("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,_=t.shallowRef(!1)
{const e=t.watch(p,(t=>{t&&(requestAnimationFrame((()=>{requestAnimationFrame((()=>{_.value=!0}))})),e())}))}return At((()=>{const a=za.filterProps(e)
return t.withDirectives(t.createVNode(za,t.mergeProps({class:["v-img",{"v-img--booting":!_.value},e.class],style:[{width:h("auto"===e.width?c.value:e.width)},e.style]},a,{aspectRatio:p.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>t.createVNode(t.Fragment,null,[t.createVNode(w,null,null),t.createVNode(k,null,null),t.createVNode(C,null,null),t.createVNode(x,null,null),t.createVNode(N,null,null)]),default:o.default}),[[t.resolveDirective("intersect"),{handler:f,options:e.options},null,{once:!0}]])})),{currentSrc:i,image:s,state:u,naturalWidth:c,naturalHeight:d}}}),qa=a({border:[Boolean,Number,String]},"border")
function Ka(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.border,o=[]
if(!0===l||""===l)o.push(`${a}--border`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`border-${e}`)
return o}))
return{borderClasses:l}}function Xa(e){return Y((()=>{const t=[],a={}
if(e.value.background)if(je(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&(je(l=e.value.background)&&!/^((rgb|hsl)a?\()?var\(--/.test(l))){const t=Ue(e.value.background)
if(null==t.a||1===t.a){const e=st(t)
a.color=e,a.caretColor=e}}}else t.push(`bg-${e.value.background}`)
var l
return e.value.text&&(je(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:a}}))}function Za(e,a){const l=t.computed((()=>({text:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=Xa(l)
return{textColorClasses:o,textColorStyles:n}}function Ja(e,a){const l=t.computed((()=>({background:t.isRef(e)?e.value:a?e[a]:null}))),{colorClasses:o,colorStyles:n}=Xa(l)
return{backgroundColorClasses:o,backgroundColorStyles:n}}const Qa=a({elevation:{type:[Number,String],validator(e){const t=parseInt(e)
return!isNaN(t)&&t>=0&&t<=24}}},"elevation")
function el(e){return{elevationClasses:t.computed((()=>{const a=t.isRef(e)?e.value:e.elevation,l=[]
return null==a||l.push(`elevation-${a}`),l}))}}const tl=a({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded")
function al(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>{const l=t.isRef(e)?e.value:e.rounded,o=[]
if(!0===l||""===l)o.push(`${a}--rounded`)
else if("string"==typeof l||0===l)for(const e of String(l).split(" "))o.push(`rounded-${e}`)
return o}))
return{roundedClasses:l}}const ll=[null,"prominent","default","comfortable","compact"],ol=a({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>ll.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...qa(),...l(),...Qa(),...tl(),...ca({tag:"header"}),...aa()},"VToolbar"),nl=gt()({name:"VToolbar",props:ol(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ja(t.toRef(e,"color")),{borderClasses:r}=Ka(e),{elevationClasses:i}=el(e),{roundedClasses:s}=al(e),{themeClasses:u}=oa(e),{rtlClasses:c}=ea(),d=t.shallowRef(!(!e.extended&&!l.extension?.())),v=t.computed((()=>parseInt(Number(e.height)+("prominent"===e.density?Number(e.height):0)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0),10))),p=t.computed((()=>d.value?parseInt(Number(e.extensionHeight)+("prominent"===e.density?Number(e.extensionHeight):0)-("comfortable"===e.density?4:0)-("compact"===e.density?8:0),10):0))
return vt({VBtn:{variant:"text"}}),At((()=>{const a=!(!e.title&&!l.title),f=!(!l.image&&!e.image),m=l.extension?.()
return d.value=!(!e.extended&&!m),t.createVNode(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},o.value,r.value,i.value,s.value,u.value,c.value,e.class],style:[n.value,e.style]},{default:()=>[f&&t.createVNode("div",{key:"image",class:"v-toolbar__image"},[l.image?t.createVNode($a,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):t.createVNode(Ga,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode($a,{defaults:{VTabs:{height:h(v.value)}}},{default:()=>[t.createVNode("div",{class:"v-toolbar__content",style:{height:h(v.value)}},[l.prepend&&t.createVNode("div",{class:"v-toolbar__prepend"},[l.prepend?.()]),a&&t.createVNode(va,{key:"title",text:e.title},{text:l.title}),l.default?.(),l.append&&t.createVNode("div",{class:"v-toolbar__append"},[l.append?.()])])]}),t.createVNode($a,{defaults:{VTabs:{height:h(p.value)}}},{default:()=>[t.createVNode(Ea,null,{default:()=>[d.value&&t.createVNode("div",{class:"v-toolbar__extension",style:{height:h(p.value)}},[m])]})]})]})})),{contentHeight:v,extensionHeight:p}}}),rl=a({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll")
function il(){const e=t.shallowRef(!1)
t.onMounted((()=>{window.requestAnimationFrame((()=>{e.value=!0}))}))
return{ssrBootStyles:t.computed((()=>e.value?void 0:{transition:"none !important"})),isBooted:t.readonly(e)}}const sl=a({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ol(),...Ft(),...rl(),height:{type:[Number,String],default:64}},"VAppBar"),ul=gt()({name:"VAppBar",props:sl(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.ref(),n=Ht(e,"modelValue"),r=t.computed((()=>{const t=new Set(e.scrollBehavior?.split(" ")??[])
return{hide:t.has("hide"),inverted:t.has("inverted"),collapse:t.has("collapse"),elevate:t.has("elevate"),fadeImage:t.has("fade-image")}})),i=t.computed((()=>{const e=r.value
return e.hide||e.inverted||e.collapse||e.elevate||e.fadeImage||!n.value})),{currentScroll:s,scrollThreshold:u,isScrollingUp:c,scrollRatio:d}=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
const{canScroll:l}=a
let o=0
const n=t.ref(null),r=t.shallowRef(0),i=t.shallowRef(0),s=t.shallowRef(0),u=t.shallowRef(!1),c=t.shallowRef(!1),d=t.computed((()=>Number(e.scrollThreshold))),v=t.computed((()=>E((d.value-r.value)/d.value||0))),p=()=>{const e=n.value
!e||l&&!l.value||(o=r.value,r.value="window"in e?e.pageYOffset:e.scrollTop,c.value=r.value<o,s.value=Math.abs(r.value-d.value))}
return t.watch(c,(()=>{i.value=i.value||r.value})),t.watch(u,(()=>{i.value=0})),t.onMounted((()=>{t.watch((()=>e.scrollTarget),(e=>{const t=e?document.querySelector(e):window
t?t!==n.value&&(n.value?.removeEventListener("scroll",p),n.value=t,n.value.addEventListener("scroll",p,{passive:!0})):Pe(`Unable to locate element with identifier ${e}`)}),{immediate:!0})})),t.onBeforeUnmount((()=>{n.value?.removeEventListener("scroll",p)})),l&&t.watch(l,p,{immediate:!0}),{scrollThreshold:d,currentScroll:r,currentThreshold:s,isScrollActive:u,scrollRatio:v,isScrollingUp:c,savedScroll:i}}(e,{canScroll:i}),v=t.computed((()=>e.collapse||r.value.collapse&&(r.value.inverted?d.value>0:0===d.value))),p=t.computed((()=>e.flat||r.value.elevate&&(r.value.inverted?s.value>0:0===s.value))),f=t.computed((()=>r.value.fadeImage?r.value.inverted?1-d.value:d.value:void 0)),m=t.computed((()=>{if(r.value.hide&&r.value.inverted)return 0
return(o.value?.contentHeight??0)+(o.value?.extensionHeight??0)}))
jt(t.computed((()=>!!e.scrollBehavior)),(()=>{t.watchEffect((()=>{r.value.hide?r.value.inverted?n.value=s.value>u.value:n.value=c.value||s.value<u.value:n.value=!0}))}))
const{ssrBootStyles:g}=il(),{layoutItemStyles:h}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"location"),layoutSize:m,elementSize:t.shallowRef(void 0),active:n,absolute:t.toRef(e,"absolute")})
return At((()=>{const a=nl.filterProps(e)
return t.createVNode(nl,t.mergeProps({ref:o,class:["v-app-bar",{"v-app-bar--bottom":"bottom"===e.location},e.class],style:[{...h.value,"--v-toolbar-image-opacity":f.value,height:void 0,...g.value},e.style]},a,{collapse:v.value,flat:p.value}),l)})),{}}}),cl=[null,"default","comfortable","compact"],dl=a({density:{type:String,default:"default",validator:e=>cl.includes(e)}},"density")
function vl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>`${a}--density-${e.density}`))
return{densityClasses:l}}const pl=["elevated","flat","tonal","outlined","text","plain"]
function fl(e,a){return t.createVNode(t.Fragment,null,[e&&t.createVNode("span",{key:"overlay",class:`${a}__overlay`},null),t.createVNode("span",{key:"underlay",class:`${a}__underlay`},null)])}const ml=a({color:String,variant:{type:String,default:"elevated",validator:e=>pl.includes(e)}},"variant")
function gl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>{const{variant:l}=t.unref(e)
return`${a}--variant-${l}`})),{colorClasses:o,colorStyles:n}=Xa(t.computed((()=>{const{variant:a,color:l}=t.unref(e)
return{[["elevated","flat"].includes(a)?"background":"text"]:l}})))
return{colorClasses:o,colorStyles:n,variantClasses:l}}const hl=a({divided:Boolean,...qa(),...l(),...dl(),...Qa(),...tl(),...ca(),...aa(),...ml()},"VBtnGroup"),yl=gt()({name:"VBtnGroup",props:hl(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{densityClasses:n}=vl(e),{borderClasses:r}=Ka(e),{elevationClasses:i}=el(e),{roundedClasses:s}=al(e)
vt({VBtn:{height:"auto",color:t.toRef(e,"color"),density:t.toRef(e,"density"),flat:!0,variant:t.toRef(e,"variant")}}),At((()=>t.createVNode(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},o.value,r.value,n.value,i.value,s.value,e.class],style:e.style},l)))}}),bl=a({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Vl=a({value:null,disabled:Boolean,selectedClass:String},"group-item")
function Sl(e,a){let l=!(arguments.length>2&&void 0!==arguments[2])||arguments[2]
const o=St("useGroupItem")
if(!o)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function")
const n=Nt()
t.provide(Symbol.for(`${a.description}:id`),n)
const r=t.inject(a,null)
if(!r){if(!l)return r
throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const i=t.toRef(e,"value"),s=t.computed((()=>!(!r.disabled.value&&!e.disabled)))
r.register({id:n,value:i,disabled:s},o),t.onBeforeUnmount((()=>{r.unregister(n)}))
const u=t.computed((()=>r.isSelected(n))),c=t.computed((()=>u.value&&[r.selectedClass.value,e.selectedClass]))
return t.watch(u,(e=>{o.emit("group:selected",{value:e})})),{id:n,isSelected:u,toggle:()=>r.select(n,!u.value),select:e=>r.select(n,e),selectedClass:c,value:i,disabled:s,group:r}}function wl(e,a){let l=!1
const o=t.reactive([]),n=Ht(e,"modelValue",[],(e=>null==e?[]:kl(o,T(e))),(t=>{const a=function(e,t){const a=[]
return t.forEach((t=>{const l=e.findIndex((e=>e.id===t))
if(~l){const t=e[l]
a.push(null!=t.value?t.value:l)}})),a}(o,t)
return e.multiple?a:a[0]})),r=St("useGroup")
function i(){const t=o.find((e=>!e.disabled))
t&&"force"===e.mandatory&&!n.value.length&&(n.value=[t.id])}function s(t){if(e.multiple&&Pe('This method is not supported when using "multiple" prop'),n.value.length){const e=n.value[0],a=o.findIndex((t=>t.id===e))
let l=(a+t)%o.length,r=o[l]
for(;r.disabled&&l!==a;)l=(l+t)%o.length,r=o[l]
if(r.disabled)return
n.value=[o[l].id]}else{const e=o.find((e=>!e.disabled))
e&&(n.value=[e.id])}}t.onMounted((()=>{i()})),t.onBeforeUnmount((()=>{l=!0}))
const u={register:function(e,t){const l=e,n=j(Symbol.for(`${a.description}:id`),r?.vnode).indexOf(t)
n>-1?o.splice(n,0,l):o.push(l)},unregister:function(e){if(l)return
i()
const t=o.findIndex((t=>t.id===e))
o.splice(t,1)},selected:n,select:function(t,a){const l=o.find((e=>e.id===t))
if(!a||!l?.disabled)if(e.multiple){const l=n.value.slice(),o=l.findIndex((e=>e===t)),r=~o
if(a=a??!r,r&&e.mandatory&&l.length<=1)return
if(!r&&null!=e.max&&l.length+1>e.max)return
o<0&&a?l.push(t):o>=0&&!a&&l.splice(o,1),n.value=l}else{const l=n.value.includes(t)
if(e.mandatory&&l)return
n.value=a??!l?[t]:[]}},disabled:t.toRef(e,"disabled"),prev:()=>s(o.length-1),next:()=>s(1),isSelected:e=>n.value.includes(e),selectedClass:t.computed((()=>e.selectedClass)),items:t.computed((()=>o)),getItemIndex:e=>function(e,t){const a=kl(e,[t])
return a.length?e.findIndex((e=>e.id===a[0])):-1}(o,e)}
return t.provide(a,u),u}function kl(e,t){const a=[]
return t.forEach((t=>{const l=e.find((e=>p(t,e.value))),o=e[t]
null!=l?.value?a.push(l.id):null!=o&&a.push(o.id)})),a}const xl=Symbol.for("vuetify:v-btn-toggle"),Nl=a({...hl(),...bl()},"VBtnToggle"),Cl=gt()({name:"VBtnToggle",props:Nl(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{isSelected:o,next:n,prev:r,select:i,selected:s}=wl(e,xl)
return At((()=>{const a=yl.filterProps(e)
return t.createVNode(yl,t.mergeProps({class:["v-btn-toggle",e.class]},a,{style:e.style}),{default:()=>[l.default?.({isSelected:o,next:n,prev:r,select:i,selected:s})]})})),{next:n,prev:r,select:i}}}),_l={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},Il={component:e=>t.h(Dl,{...e,class:"mdi"})},Pl=[String,Function,Object,Array],Bl=Symbol.for("vuetify:icons"),Al=a({icon:{type:Pl},tag:{type:String,required:!0}},"icon"),Rl=gt()({name:"VComponentIcon",props:Al(),setup(e,a){let{slots:l}=a
return()=>{const a=e.icon
return t.createVNode(e.tag,null,{default:()=>[e.icon?t.createVNode(a,null,null):l.default?.()]})}}}),Tl=mt({name:"VSvgIcon",inheritAttrs:!1,props:Al(),setup(e,a){let{attrs:l}=a
return()=>t.createVNode(e.tag,t.mergeProps(l,{style:null}),{default:()=>[t.createVNode("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(e.icon)?e.icon.map((e=>Array.isArray(e)?t.createVNode("path",{d:e[0],"fill-opacity":e[1]},null):t.createVNode("path",{d:e},null))):t.createVNode("path",{d:e.icon},null)])]})}}),El=mt({name:"VLigatureIcon",props:Al(),setup:e=>()=>t.createVNode(e.tag,null,{default:()=>[e.icon]})}),Dl=mt({name:"VClassIcon",props:Al(),setup:e=>()=>t.createVNode(e.tag,{class:e.icon},null)}),Fl={svg:{component:Tl},class:{component:Dl}}
function $l(e){return L({defaultSet:"mdi",sets:{...Fl,mdi:Il},aliases:{..._l,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},e)}const Ml=["x-small","small","default","large","x-large"],Ll=a({size:{type:[String,Number],default:"default"}},"size")
function Ol(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
return Y((()=>{let a,l
return G(Ml,e.size)?a=`${t}--size-${e.size}`:e.size&&(l={width:h(e.size),height:h(e.size)}),{sizeClasses:a,sizeStyles:l}}))}const zl=a({color:String,start:Boolean,end:Boolean,icon:Pl,...l(),...Ll(),...ca({tag:"i"}),...aa()},"VIcon"),jl=gt()({name:"VIcon",props:zl(),setup(e,a){let{attrs:l,slots:o}=a
const n=t.ref(),{themeClasses:r}=oa(e),{iconData:i}=(e=>{const a=t.inject(Bl)
if(!a)throw new Error("Missing Vuetify Icons provide!")
return{iconData:t.computed((()=>{const l=t.unref(e)
if(!l)return{component:Rl}
let o=l
if("string"==typeof o&&(o=o.trim(),o.startsWith("$")&&(o=a.aliases?.[o.slice(1)])),!o)throw new Error(`Could not find aliased icon "${l}"`)
if(Array.isArray(o))return{component:Tl,icon:o}
if("string"!=typeof o)return{component:Rl,icon:o}
const n=Object.keys(a.sets).find((e=>"string"==typeof o&&o.startsWith(`${e}:`))),r=n?o.slice(n.length+1):o
return{component:a.sets[n??a.defaultSet].component,icon:r}}))}})(t.computed((()=>n.value||e.icon))),{sizeClasses:s}=Ol(e),{textColorClasses:u,textColorStyles:c}=Za(t.toRef(e,"color"))
return At((()=>{const a=o.default?.()
return a&&(n.value=O(a).filter((e=>e.type===t.Text&&e.children&&"string"==typeof e.children))[0]?.children),t.createVNode(i.value.component,{tag:e.tag,icon:i.value.icon,class:["v-icon","notranslate",r.value,s.value,u.value,{"v-icon--clickable":!!l.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[s.value?void 0:{fontSize:h(e.size),height:h(e.size),width:h(e.size)},c.value,e.style],role:l.onClick?"button":void 0,"aria-hidden":!l.onClick},{default:()=>[a]})})),{}}})
function Hl(e,a){const l=t.ref(),o=t.shallowRef(!1)
if(n){const n=new IntersectionObserver((t=>{e?.(t,n),o.value=!!t.find((e=>e.isIntersecting))}),a)
t.onBeforeUnmount((()=>{n.disconnect()})),t.watch(l,((e,t)=>{t&&(n.unobserve(t),o.value=!1),e&&n.observe(e)}),{flush:"post"})}return{intersectionRef:l,isIntersecting:o}}const Wl=a({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...l(),...Ll(),...ca({tag:"div"}),...aa()},"VProgressCircular"),Ul=gt()({name:"VProgressCircular",props:Wl(),setup(e,a){let{slots:l}=a
const o=2*Math.PI*20,n=t.ref(),{themeClasses:r}=oa(e),{sizeClasses:i,sizeStyles:s}=Ol(e),{textColorClasses:u,textColorStyles:c}=Za(t.toRef(e,"color")),{textColorClasses:d,textColorStyles:v}=Za(t.toRef(e,"bgColor")),{intersectionRef:p,isIntersecting:f}=Hl(),{resizeRef:m,contentRect:g}=Rt(),y=t.computed((()=>Math.max(0,Math.min(100,parseFloat(e.modelValue))))),b=t.computed((()=>Number(e.width))),V=t.computed((()=>s.value?Number(e.size):g.value?g.value.width:Math.max(b.value,32))),S=t.computed((()=>20/(1-b.value/V.value)*2)),w=t.computed((()=>b.value/V.value*S.value)),k=t.computed((()=>h((100-y.value)/100*o)))
return t.watchEffect((()=>{p.value=n.value,m.value=n.value})),At((()=>t.createVNode(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":f.value,"v-progress-circular--disable-shrink":"disable-shrink"===e.indeterminate},r.value,i.value,u.value,e.class],style:[s.value,c.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:y.value},{default:()=>[t.createVNode("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${S.value} ${S.value}`},[t.createVNode("circle",{class:["v-progress-circular__underlay",d.value],style:v.value,fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":w.value,"stroke-dasharray":o,"stroke-dashoffset":0},null),t.createVNode("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:20,"stroke-width":w.value,"stroke-dasharray":o,"stroke-dashoffset":k.value},null)]),l.default&&t.createVNode("div",{class:"v-progress-circular__content"},[l.default({value:y.value})])]}))),{}}}),Yl={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Gl=a({location:String},"location")
function ql(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],l=arguments.length>2?arguments[2]:void 0
const{isRtl:o}=ea(),n=t.computed((()=>{if(!e.location)return{}
const{side:t,align:n}=ie(e.location.split(" ").length>1?e.location:`${e.location} center`,o.value)
function r(e){return l?l(e):0}const i={}
return"center"!==t&&(a?i[Yl[t]]=`calc(100% - ${r(t)}px)`:i[t]=0),"center"!==n?a?i[Yl[n]]=`calc(100% - ${r(n)}px)`:i[n]=0:("center"===t?i.top=i.left="50%":i[{top:"left",bottom:"left",left:"top",right:"top"}[t]]="50%",i.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[t]),i}))
return{locationStyles:n}}const Kl=a({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...l(),...Gl({location:"top"}),...tl(),...ca(),...aa()},"VProgressLinear"),Xl=gt()({name:"VProgressLinear",props:Kl(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),{isRtl:n,rtlClasses:r}=ea(),{themeClasses:i}=oa(e),{locationStyles:s}=ql(e),{textColorClasses:u,textColorStyles:c}=Za(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:v}=Ja(t.computed((()=>e.bgColor||e.color))),{backgroundColorClasses:p,backgroundColorStyles:f}=Ja(e,"color"),{roundedClasses:m}=al(e),{intersectionRef:g,isIntersecting:y}=Hl(),b=t.computed((()=>parseInt(e.max,10))),V=t.computed((()=>parseInt(e.height,10))),S=t.computed((()=>parseFloat(e.bufferValue)/b.value*100)),w=t.computed((()=>parseFloat(o.value)/b.value*100)),k=t.computed((()=>n.value!==e.reverse)),x=t.computed((()=>e.indeterminate?"fade-transition":"slide-x-transition")),N=t.computed((()=>null==e.bgOpacity?e.bgOpacity:parseFloat(e.bgOpacity)))
function C(e){if(!g.value)return
const{left:t,right:a,width:l}=g.value.getBoundingClientRect(),n=k.value?l-e.clientX+(a-l):e.clientX-t
o.value=Math.round(n/l*b.value)}return At((()=>t.createVNode(e.tag,{ref:g,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&y.value,"v-progress-linear--reverse":k.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},m.value,i.value,r.value,e.class],style:[{bottom:"bottom"===e.location?0:void 0,top:"top"===e.location?0:void 0,height:e.active?h(V.value):0,"--v-progress-linear-height":h(V.value),...s.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:w.value,onClick:e.clickable&&C},{default:()=>[e.stream&&t.createVNode("div",{key:"stream",class:["v-progress-linear__stream",u.value],style:{...c.value,[k.value?"left":"right"]:h(-V.value),borderTop:`${h(V.value/2)} dotted`,opacity:N.value,top:`calc(50% - ${h(V.value/4)})`,width:h(100-S.value,"%"),"--v-progress-linear-stream-to":h(V.value*(k.value?1:-1))}},null),t.createVNode("div",{class:["v-progress-linear__background",d.value],style:[v.value,{opacity:N.value,width:h(e.stream?S.value:100,"%")}]},null),t.createVNode(t.Transition,{name:x.value},{default:()=>[e.indeterminate?t.createVNode("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map((e=>t.createVNode("div",{key:e,class:["v-progress-linear__indeterminate",e,p.value],style:f.value},null)))]):t.createVNode("div",{class:["v-progress-linear__determinate",p.value],style:[f.value,{width:h(w.value,"%")}]},null)]}),l.default&&t.createVNode("div",{class:"v-progress-linear__content"},[l.default({value:w.value,buffer:S.value})])]}))),{}}}),Zl=a({loading:[Boolean,String]},"loader")
function Jl(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>({[`${a}--loading`]:e.loading})))
return{loaderClasses:l}}function Ql(e,a){let{slots:l}=a
return t.createVNode("div",{class:`${e.name}__loader`},[l.default?.({color:e.color,isActive:e.active})||t.createVNode(Xl,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const eo=["static","relative","fixed","absolute","sticky"],to=a({position:{type:String,validator:e=>eo.includes(e)}},"position")
function ao(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.computed((()=>e.position?`${a}--${e.position}`:void 0))
return{positionClasses:l}}function lo(){return St("useRouter")?.proxy?.$router}function oo(e,a){const l=t.resolveDynamicComponent("RouterLink"),o=t.computed((()=>!(!e.href&&!e.to))),n=t.computed((()=>o?.value||X(a,"click")||X(e,"click")))
if("string"==typeof l)return{isLink:o,isClickable:n,href:t.toRef(e,"href")}
const r=e.to?l.useLink(e):void 0,i=function(){const e=St("useRoute")
return t.computed((()=>e?.proxy?.$route))}()
return{isLink:o,isClickable:n,route:r?.route,navigate:r?.navigate,isActive:r&&t.computed((()=>e.exact?i.value?r.isExactActive?.value&&p(r.route.value.query,i.value.query):r.isExactActive?.value:r.isActive?.value)),href:t.computed((()=>e.to?r?.route.value.href:e.href))}}const no=a({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router")
let ro=!1
const io=Symbol("rippleStop")
function so(e,t){e.style.transform=t,e.style.webkitTransform=t}function uo(e){return"TouchEvent"===e.constructor.name}function co(e){return"KeyboardEvent"===e.constructor.name}const vo={show(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
if(!t?._ripple?.enabled)return
const l=document.createElement("span"),o=document.createElement("span")
l.appendChild(o),l.className="v-ripple__container",a.class&&(l.className+=` ${a.class}`)
const{radius:n,scale:r,x:i,y:s,centerX:u,centerY:c}=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=0,o=0
if(!co(e)){const a=t.getBoundingClientRect(),n=uo(e)?e.touches[e.touches.length-1]:e
l=n.clientX-a.left,o=n.clientY-a.top}let n=0,r=.3
t._ripple?.circle?(r=.15,n=t.clientWidth/2,n=a.center?n:n+Math.sqrt((l-n)**2+(o-n)**2)/4):n=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2
const i=(t.clientWidth-2*n)/2+"px",s=(t.clientHeight-2*n)/2+"px",u=a.center?i:l-n+"px",c=a.center?s:o-n+"px"
return{radius:n,scale:r,x:u,y:c,centerX:i,centerY:s}}(e,t,a),d=2*n+"px"
o.className="v-ripple__animation",o.style.width=d,o.style.height=d,t.appendChild(l)
const v=window.getComputedStyle(t)
v&&"static"===v.position&&(t.style.position="relative",t.dataset.previousPosition="static"),o.classList.add("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--visible"),so(o,`translate(${i}, ${s}) scale3d(${r},${r},${r})`),o.dataset.activated=String(performance.now()),setTimeout((()=>{o.classList.remove("v-ripple__animation--enter"),o.classList.add("v-ripple__animation--in"),so(o,`translate(${u}, ${c}) scale3d(1,1,1)`)}),0)},hide(e){if(!e?._ripple?.enabled)return
const t=e.getElementsByClassName("v-ripple__animation")
if(0===t.length)return
const a=t[t.length-1]
if(a.dataset.isHiding)return
a.dataset.isHiding="true"
const l=performance.now()-Number(a.dataset.activated),o=Math.max(250-l,0)
setTimeout((()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout((()=>{1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),a.parentNode?.parentNode===e&&e.removeChild(a.parentNode)}),300)}),o)}}
function po(e){return void 0===e||!!e}function fo(e){const t={},a=e.currentTarget
if(a?._ripple&&!a._ripple.touched&&!e[io]){if(e[io]=!0,uo(e))a._ripple.touched=!0,a._ripple.isTouch=!0
else if(a._ripple.isTouch)return
if(t.center=a._ripple.centered||co(e),a._ripple.class&&(t.class=a._ripple.class),uo(e)){if(a._ripple.showTimerCommit)return
a._ripple.showTimerCommit=()=>{vo.show(e,a,t)},a._ripple.showTimer=window.setTimeout((()=>{a?._ripple?.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)}),80)}else vo.show(e,a,t)}}function mo(e){e[io]=!0}function go(e){const t=e.currentTarget
if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=window.setTimeout((()=>{go(e)})))
window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),vo.hide(t)}}function ho(e){const t=e.currentTarget
t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let yo=!1
function bo(e){yo||e.keyCode!==V.enter&&e.keyCode!==V.space||(yo=!0,fo(e))}function Vo(e){yo=!1,go(e)}function So(e){yo&&(yo=!1,go(e))}function wo(e,t,a){const{value:l,modifiers:o}=t,n=po(l)
if(n||vo.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=n,e._ripple.centered=o.center,e._ripple.circle=o.circle,y(l)&&l.class&&(e._ripple.class=l.class),n&&!a){if(o.stop)return e.addEventListener("touchstart",mo,{passive:!0}),void e.addEventListener("mousedown",mo)
e.addEventListener("touchstart",fo,{passive:!0}),e.addEventListener("touchend",go,{passive:!0}),e.addEventListener("touchmove",ho,{passive:!0}),e.addEventListener("touchcancel",go),e.addEventListener("mousedown",fo),e.addEventListener("mouseup",go),e.addEventListener("mouseleave",go),e.addEventListener("keydown",bo),e.addEventListener("keyup",Vo),e.addEventListener("blur",So),e.addEventListener("dragstart",go,{passive:!0})}else!n&&a&&ko(e)}function ko(e){e.removeEventListener("mousedown",fo),e.removeEventListener("touchstart",fo),e.removeEventListener("touchend",go),e.removeEventListener("touchmove",ho),e.removeEventListener("touchcancel",go),e.removeEventListener("mouseup",go),e.removeEventListener("mouseleave",go),e.removeEventListener("keydown",bo),e.removeEventListener("keyup",Vo),e.removeEventListener("dragstart",go),e.removeEventListener("blur",So)}const xo={mounted:function(e,t){wo(e,t,!1)},unmounted:function(e){delete e._ripple,ko(e)},updated:function(e,t){if(t.value===t.oldValue)return
wo(e,t,po(t.oldValue))}},No=a({active:{type:Boolean,default:void 0},symbol:{type:null,default:xl},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Pl,appendIcon:Pl,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...qa(),...l(),...dl(),...Ma(),...Qa(),...Vl(),...Zl(),...Gl(),...to(),...tl(),...no(),...Ll(),...ca({tag:"button"}),...aa(),...ml({variant:"elevated"})},"VBtn"),Co=gt()({name:"VBtn",directives:{Ripple:xo},props:No(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=oa(e),{borderClasses:r}=Ka(e),{colorClasses:i,colorStyles:s,variantClasses:u}=gl(e),{densityClasses:c}=vl(e),{dimensionStyles:d}=La(e),{elevationClasses:v}=el(e),{loaderClasses:p}=Jl(e),{locationStyles:f}=ql(e),{positionClasses:m}=ao(e),{roundedClasses:g}=al(e),{sizeClasses:h,sizeStyles:y}=Ol(e),b=Sl(e,e.symbol,!1),V=oo(e,l),S=t.computed((()=>void 0!==e.active?e.active:V.isLink.value?V.isActive?.value:b?.isSelected.value)),w=t.computed((()=>b?.disabled.value||e.disabled)),k=t.computed((()=>"elevated"===e.variant&&!(e.disabled||e.flat||e.border))),x=t.computed((()=>{if(void 0!==e.value&&"symbol"!=typeof e.value)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value}))
function N(e){w.value||V.isLink.value&&(e.metaKey||e.ctrlKey||e.shiftKey||0!==e.button||"_blank"===l.target)||(V.navigate?.(e),b?.toggle())}return function(e,a){t.watch((()=>e.isActive?.value),(l=>{e.isLink.value&&l&&a&&t.nextTick((()=>{a(!0)}))}),{immediate:!0})}(V,b?.select),At((()=>{const a=V.isLink.value?"a":e.tag,l=!(!e.prependIcon&&!o.prepend),C=!(!e.appendIcon&&!o.append),_=!(!e.icon||!0===e.icon),I=b?.isSelected.value&&(!V.isLink.value||V.isActive?.value)||!b||V.isActive?.value
return t.withDirectives(t.createVNode(a,{type:"a"===a?void 0:"button",class:["v-btn",b?.selectedClass.value,{"v-btn--active":S.value,"v-btn--block":e.block,"v-btn--disabled":w.value,"v-btn--elevated":k.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},n.value,r.value,I?i.value:void 0,c.value,v.value,p.value,m.value,g.value,h.value,u.value,e.class],style:[I?s.value:void 0,d.value,f.value,y.value,e.style],disabled:w.value||void 0,href:V.href.value,onClick:N,value:x.value},{default:()=>[fl(!0,"v-btn"),!e.icon&&l&&t.createVNode("span",{key:"prepend",class:"v-btn__prepend"},[o.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},o.prepend):t.createVNode(jl,{key:"prepend-icon",icon:e.prependIcon},null)]),t.createVNode("span",{class:"v-btn__content","data-no-activator":""},[!o.default&&_?t.createVNode(jl,{key:"content-icon",icon:e.icon},null):t.createVNode($a,{key:"content-defaults",disabled:!_,defaults:{VIcon:{icon:e.icon}}},{default:()=>[o.default?.()??e.text]})]),!e.icon&&C&&t.createVNode("span",{key:"append",class:"v-btn__append"},[o.append?t.createVNode($a,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},o.append):t.createVNode(jl,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&t.createVNode("span",{key:"loader",class:"v-btn__loader"},[o.loader?.()??t.createVNode(Ul,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[t.resolveDirective("ripple"),!w.value&&e.ripple,null]])})),{}}}),_o=a({...No({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),Io=gt()({name:"VAppBarNavIcon",props:_o(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(Co,t.mergeProps(e,{class:["v-app-bar-nav-icon"]}),l))),{}}}),Po=gt()({name:"VAppBarTitle",props:da(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(va,t.mergeProps(e,{class:"v-app-bar-title"}),l))),{}}}),Bo=ht("v-alert-title"),Ao=["success","info","warning","error"],Ro=a({border:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Pl,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Ao.includes(e)},...l(),...dl(),...Ma(),...Qa(),...Gl(),...to(),...tl(),...ca(),...aa(),...ml({variant:"flat"})},"VAlert"),To=gt()({name:"VAlert",props:Ro(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=Ht(e,"modelValue"),r=t.computed((()=>{if(!1!==e.icon)return e.type?e.icon??`$${e.type}`:e.icon})),i=t.computed((()=>({color:e.color??e.type,variant:e.variant}))),{themeClasses:s}=oa(e),{colorClasses:u,colorStyles:c,variantClasses:d}=gl(i),{densityClasses:v}=vl(e),{dimensionStyles:p}=La(e),{elevationClasses:f}=el(e),{locationStyles:m}=ql(e),{positionClasses:g}=ao(e),{roundedClasses:h}=al(e),{textColorClasses:y,textColorStyles:b}=Za(t.toRef(e,"borderColor")),{t:V}=Jt(),S=t.computed((()=>({"aria-label":V(e.closeLabel),onClick(e){n.value=!1,l("click:close",e)}})))
return()=>{const a=!(!o.prepend&&!r.value),l=!(!o.title&&!e.title),i=!(!o.close&&!e.closable)
return n.value&&t.createVNode(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${!0===e.border?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,u.value,v.value,f.value,g.value,h.value,d.value,e.class],style:[c.value,p.value,m.value,e.style],role:"alert"},{default:()=>[fl(!1,"v-alert"),e.border&&t.createVNode("div",{key:"border",class:["v-alert__border",y.value],style:b.value},null),a&&t.createVNode("div",{key:"prepend",class:"v-alert__prepend"},[o.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},o.prepend):t.createVNode(jl,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),t.createVNode("div",{class:"v-alert__content"},[l&&t.createVNode(Bo,{key:"title"},{default:()=>[o.title?.()??e.title]}),o.text?.()??e.text,o.default?.()]),o.append&&t.createVNode("div",{key:"append",class:"v-alert__append"},[o.append()]),i&&t.createVNode("div",{key:"close",class:"v-alert__close"},[o.close?t.createVNode($a,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>[o.close?.({props:S.value})]}):t.createVNode(Co,t.mergeProps({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},S.value),null)])]})}}}),Eo=a({text:String,clickable:Boolean,...l(),...aa()},"VLabel"),Do=gt()({name:"VLabel",props:Eo(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode("label",{class:["v-label",{"v-label--clickable":e.clickable},e.class],style:e.style},[e.text,l.default?.()]))),{}}}),Fo=Symbol.for("vuetify:selection-control-group"),$o=a({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:Pl,trueIcon:Pl,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:p},...l(),...dl(),...aa()},"SelectionControlGroup"),Mo=a({...$o({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup"),Lo=gt()({name:"VSelectionControlGroup",props:Mo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),n=Nt(),r=t.computed((()=>e.id||`v-selection-control-group-${n}`)),i=t.computed((()=>e.name||r.value)),s=new Set
return t.provide(Fo,{modelValue:o,forceUpdate:()=>{s.forEach((e=>e()))},onForceUpdate:e=>{s.add(e),t.onScopeDispose((()=>{s.delete(e)}))}}),vt({[e.defaultsTarget]:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),density:t.toRef(e,"density"),error:t.toRef(e,"error"),inline:t.toRef(e,"inline"),modelValue:o,multiple:t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),name:i,falseIcon:t.toRef(e,"falseIcon"),trueIcon:t.toRef(e,"trueIcon"),readonly:t.toRef(e,"readonly"),ripple:t.toRef(e,"ripple"),type:t.toRef(e,"type"),valueComparator:t.toRef(e,"valueComparator")}}),At((()=>t.createVNode("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:"radio"===e.type?"radiogroup":void 0},[l.default?.()]))),{}}}),Oo=a({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...l(),...$o()},"VSelectionControl")
const zo=gt()({name:"VSelectionControl",directives:{Ripple:xo},inheritAttrs:!1,props:Oo(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{group:n,densityClasses:r,icon:i,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,trueValue:p}=function(e){const a=t.inject(Fo,void 0),{densityClasses:l}=vl(e),o=Ht(e,"modelValue"),n=t.computed((()=>void 0!==e.trueValue?e.trueValue:void 0===e.value||e.value)),r=t.computed((()=>void 0!==e.falseValue&&e.falseValue)),i=t.computed((()=>!!e.multiple||null==e.multiple&&Array.isArray(o.value))),s=t.computed({get(){const t=a?a.modelValue.value:o.value
return i.value?T(t).some((t=>e.valueComparator(t,n.value))):e.valueComparator(t,n.value)},set(t){if(e.readonly)return
const l=t?n.value:r.value
let s=l
i.value&&(s=t?[...T(o.value),l]:T(o.value).filter((t=>!e.valueComparator(t,n.value)))),a?a.modelValue.value=s:o.value=s}}),{textColorClasses:u,textColorStyles:c}=Za(t.computed((()=>{if(!e.error&&!e.disabled)return s.value?e.color:e.baseColor}))),{backgroundColorClasses:d,backgroundColorStyles:v}=Ja(t.computed((()=>!s.value||e.error||e.disabled?void 0:e.color))),p=t.computed((()=>s.value?e.trueIcon:e.falseIcon))
return{group:a,densityClasses:l,trueValue:n,falseValue:r,model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,icon:p}}(e),f=Nt(),m=t.computed((()=>e.id||`input-${f}`)),g=t.shallowRef(!1),h=t.shallowRef(!1),y=t.ref()
function b(e){g.value=!0,!1!==le(e.target,":focus-visible")&&(h.value=!0)}function V(){g.value=!1,h.value=!1}function S(a){e.readonly&&n&&t.nextTick((()=>n.forceUpdate())),s.value=a.target.checked}return n?.onForceUpdate((()=>{y.value&&(y.value.checked=s.value)})),At((()=>{const a=o.label?o.label({label:e.label,props:{for:m.value}}):e.label,[n,f]=R(l),w=t.createVNode("input",t.mergeProps({ref:y,checked:s.value,disabled:!(!e.readonly&&!e.disabled),id:m.value,onBlur:V,onFocus:b,onInput:S,"aria-disabled":!(!e.readonly&&!e.disabled),type:e.type,value:p.value,name:e.name,"aria-checked":"checkbox"===e.type?s.value:void 0},f),null)
return t.createVNode("div",t.mergeProps({class:["v-selection-control",{"v-selection-control--dirty":s.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":h.value,"v-selection-control--inline":e.inline},r.value,e.class]},n,{style:e.style}),[t.createVNode("div",{class:["v-selection-control__wrapper",u.value],style:c.value},[o.default?.({backgroundColorClasses:d,backgroundColorStyles:v}),t.withDirectives(t.createVNode("div",{class:["v-selection-control__input"]},[o.input?.({model:s,textColorClasses:u,textColorStyles:c,backgroundColorClasses:d,backgroundColorStyles:v,inputNode:w,icon:i.value,props:{onFocus:b,onBlur:V,id:m.value}})??t.createVNode(t.Fragment,null,[i.value&&t.createVNode(jl,{key:"icon",icon:i.value},null),w])]),[[t.resolveDirective("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),a&&t.createVNode(Do,{for:m.value,clickable:!0,onClick:e=>e.stopPropagation()},{default:()=>[a]})])})),{isFocused:g,input:y}}}),jo=a({indeterminate:Boolean,indeterminateIcon:{type:Pl,default:"$checkboxIndeterminate"},...Oo({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),Ho=gt()({name:"VCheckboxBtn",props:jo(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"indeterminate"),n=Ht(e,"modelValue")
function r(e){o.value&&(o.value=!1)}const i=t.computed((()=>o.value?e.indeterminateIcon:e.falseIcon)),s=t.computed((()=>o.value?e.indeterminateIcon:e.trueIcon))
return At((()=>{const a=C(zo.filterProps(e),["modelValue"])
return t.createVNode(zo,t.mergeProps(a,{modelValue:n.value,"onUpdate:modelValue":[e=>n.value=e,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:s.value,"aria-checked":o.value?"mixed":void 0}),l)})),{}}})
function Wo(e){const{t:a}=Jt()
return{InputIcon:function(l){let{name:o}=l
const n={prepend:"prependAction",prependInner:"prependAction",append:"appendAction",appendInner:"appendAction",clear:"clear"}[o],r=e[`onClick:${o}`],i=r&&n?a(`$vuetify.input.${n}`,e.label??""):void 0
return t.createVNode(jl,{icon:e[`${o}Icon`],"aria-label":i,onClick:r},null)}}}const Uo=a({active:Boolean,color:String,messages:{type:[Array,String],default:()=>[]},...l(),...ja({transition:{component:Ra,leaveAbsolute:!0,group:!0}})},"VMessages"),Yo=gt()({name:"VMessages",props:Uo(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>T(e.messages))),{textColorClasses:n,textColorStyles:r}=Za(t.computed((()=>e.color)))
return At((()=>t.createVNode(Ha,{transition:e.transition,tag:"div",class:["v-messages",n.value,e.class],style:[r.value,e.style],role:"alert","aria-live":"polite"},{default:()=>[e.active&&o.value.map(((e,a)=>t.createVNode("div",{class:"v-messages__message",key:`${a}-${o.value}`},[l.message?l.message({message:e}):e])))]}))),{}}}),Go=a({focused:Boolean,"onUpdate:focused":K()},"focus")
function qo(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=Ht(e,"focused"),o=t.computed((()=>({[`${a}--focused`]:l.value})))
function n(){l.value=!0}function r(){l.value=!1}return{focusClasses:o,isFocused:l,focus:n,blur:r}}const Ko=Symbol.for("vuetify:form"),Xo=a({disabled:Boolean,fastFail:Boolean,readonly:Boolean,modelValue:{type:Boolean,default:null},validateOn:{type:String,default:"input"}},"form")
function Zo(){return t.inject(Ko,null)}const Jo=a({disabled:{type:Boolean,default:null},error:Boolean,errorMessages:{type:[Array,String],default:()=>[]},maxErrors:{type:[Number,String],default:1},name:String,label:String,readonly:{type:Boolean,default:null},rules:{type:Array,default:()=>[]},modelValue:null,validateOn:String,validationValue:null,...Go()},"validation")
function Qo(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt(),l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Nt()
const o=Ht(e,"modelValue"),n=t.computed((()=>void 0===e.validationValue?o.value:e.validationValue)),r=Zo(),i=t.ref([]),s=t.shallowRef(!0),u=t.computed((()=>!(!T(""===o.value?null:o.value).length&&!T(""===n.value?null:n.value).length))),c=t.computed((()=>!!(e.disabled??r?.isDisabled.value))),d=t.computed((()=>!!(e.readonly??r?.isReadonly.value))),v=t.computed((()=>e.errorMessages?.length?T(e.errorMessages).concat(i.value).slice(0,Math.max(0,+e.maxErrors)):i.value)),p=t.computed((()=>{let t=(e.validateOn??r?.validateOn.value)||"input"
"lazy"===t&&(t="input lazy")
const a=new Set(t?.split(" ")??[])
return{blur:a.has("blur")||a.has("input"),input:a.has("input"),submit:a.has("submit"),lazy:a.has("lazy")}})),f=t.computed((()=>!e.error&&!e.errorMessages?.length&&(!e.rules.length||(s.value?!i.value.length&&!p.value.lazy||null:!i.value.length)))),m=t.shallowRef(!1),g=t.computed((()=>({[`${a}--error`]:!1===f.value,[`${a}--dirty`]:u.value,[`${a}--disabled`]:c.value,[`${a}--readonly`]:d.value}))),h=t.computed((()=>e.name??t.unref(l)))
function y(){o.value=null,t.nextTick(b)}function b(){s.value=!0,p.value.lazy?i.value=[]:V(!0)}async function V(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const a=[]
m.value=!0
for(const t of e.rules){if(a.length>=+(e.maxErrors??1))break
const l="function"==typeof t?t:()=>t,o=await l(n.value)
!0!==o&&(!1===o||"string"==typeof o?a.push(o||""):console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`))}return i.value=a,m.value=!1,s.value=t,i.value}return t.onBeforeMount((()=>{r?.register({id:h.value,validate:V,reset:y,resetValidation:b})})),t.onBeforeUnmount((()=>{r?.unregister(h.value)})),t.onMounted((async()=>{p.value.lazy||await V(!0),r?.update(h.value,f.value,v.value)})),jt((()=>p.value.input),(()=>{t.watch(n,(()=>{if(null!=n.value)V()
else if(e.focused){const a=t.watch((()=>e.focused),(e=>{e||V(),a()}))}}))})),jt((()=>p.value.blur),(()=>{t.watch((()=>e.focused),(e=>{e||V()}))})),t.watch(f,(()=>{r?.update(h.value,f.value,v.value)})),{errorMessages:v,isDirty:u,isDisabled:c,isReadonly:d,isPristine:s,isValid:f,isValidating:m,reset:y,resetValidation:b,validate:V,validationClasses:g}}const en=a({id:String,appendIcon:Pl,centerAffix:{type:Boolean,default:!0},prependIcon:Pl,hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,persistentHint:Boolean,messages:{type:[Array,String],default:()=>[]},direction:{type:String,default:"horizontal",validator:e=>["horizontal","vertical"].includes(e)},"onClick:prepend":K(),"onClick:append":K(),...l(),...dl(),...Jo()},"VInput"),tn=gt()({name:"VInput",props:{...en()},emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const{densityClasses:r}=vl(e),{rtlClasses:i}=ea(),{InputIcon:s}=Wo(e),u=Nt(),c=t.computed((()=>e.id||`input-${u}`)),d=t.computed((()=>`${c.value}-messages`)),{errorMessages:v,isDirty:p,isDisabled:f,isReadonly:m,isPristine:g,isValid:h,isValidating:y,reset:b,resetValidation:V,validate:S,validationClasses:w}=Qo(e,"v-input",c),k=t.computed((()=>({id:c,messagesId:d,isDirty:p,isDisabled:f,isReadonly:m,isPristine:g,isValid:h,isValidating:y,reset:b,resetValidation:V,validate:S}))),x=t.computed((()=>e.errorMessages?.length||!g.value&&v.value.length?v.value:e.hint&&(e.persistentHint||e.focused)?e.hint:e.messages))
return At((()=>{const a=!(!o.prepend&&!e.prependIcon),l=!(!o.append&&!e.appendIcon),n=x.value.length>0,u=!e.hideDetails||"auto"===e.hideDetails&&(n||!!o.details)
return t.createVNode("div",{class:["v-input",`v-input--${e.direction}`,{"v-input--center-affix":e.centerAffix,"v-input--hide-spin-buttons":e.hideSpinButtons},r.value,i.value,w.value,e.class],style:e.style},[a&&t.createVNode("div",{key:"prepend",class:"v-input__prepend"},[o.prepend?.(k.value),e.prependIcon&&t.createVNode(s,{key:"prepend-icon",name:"prepend"},null)]),o.default&&t.createVNode("div",{class:"v-input__control"},[o.default?.(k.value)]),l&&t.createVNode("div",{key:"append",class:"v-input__append"},[e.appendIcon&&t.createVNode(s,{key:"append-icon",name:"append"},null),o.append?.(k.value)]),u&&t.createVNode("div",{class:"v-input__details"},[t.createVNode(Yo,{id:d.value,active:n,messages:x.value},{message:o.message}),o.details?.(k.value)])])})),{reset:b,resetValidation:V,validate:S,isValid:h,errorMessages:v}}}),an=a({...en(),...C(jo(),["inline"])},"VCheckbox"),ln=gt()({name:"VCheckbox",inheritAttrs:!1,props:an(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=Ht(e,"modelValue"),{isFocused:r,focus:i,blur:s}=qo(e),u=Nt(),c=t.computed((()=>e.id||`checkbox-${u}`))
return At((()=>{const[a,u]=R(l),d=tn.filterProps(e),v=Ho.filterProps(e)
return t.createVNode(tn,t.mergeProps({class:["v-checkbox",e.class]},a,d,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,id:c.value,focused:r.value,style:e.style}),{...o,default:e=>{let{id:a,messagesId:l,isDisabled:r,isReadonly:c}=e
return t.createVNode(Ho,t.mergeProps(v,{id:a.value,"aria-describedby":l.value,disabled:r.value,readonly:c.value},u,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,onFocus:i,onBlur:s}),o)}})})),{}}}),on=a({start:Boolean,end:Boolean,icon:Pl,image:String,text:String,...l(),...dl(),...tl(),...Ll(),...ca(),...aa(),...ml({variant:"flat"})},"VAvatar"),nn=gt()({name:"VAvatar",props:on(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{colorClasses:n,colorStyles:r,variantClasses:i}=gl(e),{densityClasses:s}=vl(e),{roundedClasses:u}=al(e),{sizeClasses:c,sizeStyles:d}=Ol(e)
return At((()=>t.createVNode(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},o.value,n.value,s.value,u.value,c.value,i.value,e.class],style:[r.value,d.value,e.style]},{default:()=>[e.image?t.createVNode(Ga,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?t.createVNode(jl,{key:"icon",icon:e.icon},null):l.default?.()??e.text,fl(!1,"v-avatar")]}))),{}}}),rn=Symbol.for("vuetify:v-chip-group"),sn=a({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:p},...l(),...bl({selectedClass:"v-chip--selected"}),...ca(),...aa(),...ml({variant:"tonal"})},"VChipGroup"),un=gt()({name:"VChipGroup",props:sn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=wl(e,rn)
return vt({VChip:{color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled"),filter:t.toRef(e,"filter"),variant:t.toRef(e,"variant")}}),At((()=>t.createVNode(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]}))),{}}}),cn=a({activeClass:String,appendAvatar:String,appendIcon:Pl,closable:Boolean,closeIcon:{type:Pl,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:Pl,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:K(),onClickOnce:K(),...qa(),...l(),...dl(),...Qa(),...Vl(),...tl(),...no(),...Ll(),...ca({tag:"span"}),...aa(),...ml({variant:"tonal"})},"VChip"),dn=gt()({name:"VChip",directives:{Ripple:xo},props:cn(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=Jt(),{borderClasses:i}=Ka(e),{colorClasses:s,colorStyles:u,variantClasses:c}=gl(e),{densityClasses:d}=vl(e),{elevationClasses:v}=el(e),{roundedClasses:p}=al(e),{sizeClasses:f}=Ol(e),{themeClasses:m}=oa(e),g=Ht(e,"modelValue"),h=Sl(e,rn,!1),y=oo(e,l),b=t.computed((()=>!1!==e.link&&y.isLink.value)),V=t.computed((()=>!e.disabled&&!1!==e.link&&(!!h||e.link||y.isClickable.value))),S=t.computed((()=>({"aria-label":r(e.closeLabel),onClick(e){e.stopPropagation(),g.value=!1,o("click:close",e)}})))
function w(e){o("click",e),V.value&&(y.navigate?.(e),h?.toggle())}function k(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),w(e))}return()=>{const a=y.isLink.value?"a":e.tag,l=!(!e.appendIcon&&!e.appendAvatar),o=!(!l&&!n.append),r=!(!n.close&&!e.closable),x=!(!n.filter&&!e.filter)&&h,N=!(!e.prependIcon&&!e.prependAvatar),C=!(!N&&!n.prepend),_=!h||h.isSelected.value
return g.value&&t.withDirectives(t.createVNode(a,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":V.value,"v-chip--filter":x,"v-chip--pill":e.pill},m.value,i.value,_?s.value:void 0,d.value,v.value,p.value,f.value,c.value,h?.selectedClass.value,e.class],style:[_?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:y.href.value,tabindex:V.value?0:void 0,onClick:w,onKeydown:V.value&&!b.value&&k},{default:()=>[fl(V.value,"v-chip"),x&&t.createVNode(Da,{key:"filter"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-chip__filter"},[n.filter?t.createVNode($a,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},n.filter):t.createVNode(jl,{key:"filter-icon",icon:e.filterIcon},null)]),[[t.vShow,h.isSelected.value]])]}),C&&t.createVNode("div",{key:"prepend",class:"v-chip__prepend"},[n.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!N,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},n.prepend):t.createVNode(t.Fragment,null,[e.prependIcon&&t.createVNode(jl,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&t.createVNode(nn,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),t.createVNode("div",{class:"v-chip__content"},[n.default?.({isSelected:h?.isSelected.value,selectedClass:h?.selectedClass.value,select:h?.select,toggle:h?.toggle,value:h?.value.value,disabled:e.disabled})??e.text]),o&&t.createVNode("div",{key:"append",class:"v-chip__append"},[n.append?t.createVNode($a,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},n.append):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(jl,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(nn,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),r&&t.createVNode("button",t.mergeProps({key:"close",class:"v-chip__close"},S.value),[n.close?t.createVNode($a,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},n.close):t.createVNode(jl,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[t.resolveDirective("ripple"),V.value&&e.ripple,null]])}}}),vn=Symbol.for("vuetify:list")
function pn(){const e=t.inject(vn,{hasPrepend:t.shallowRef(!1),updateHasPrepend:()=>null}),a={hasPrepend:t.shallowRef(!1),updateHasPrepend:e=>{e&&(a.hasPrepend.value=e)}}
return t.provide(vn,a),e}function fn(){return t.inject(vn,null)}const mn={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){const e=new Set
e.add(t)
let a=o.get(t)
for(;null!=a;)e.add(a),a=o.get(a)
return e}return l.delete(t),l},select:()=>null},gn={open:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(a){let e=o.get(t)
for(l.add(t);null!=e&&e!==t;)l.add(e),e=o.get(e)
return l}return l.delete(t),l},select:()=>null},hn={open:gn.open,select:e=>{let{id:t,value:a,opened:l,parents:o}=e
if(!a)return l
const n=[]
let r=o.get(t)
for(;null!=r;)n.push(r),r=o.get(r)
return new Set(n)}},yn=e=>{const a={select:a=>{let{id:l,value:o,selected:n}=a
if(l=t.toRaw(l),e&&!o){const e=Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l?[...e,a]:e}),[])
if(1===e.length&&e[0]===l)return n}return n.set(l,o?"on":"off"),n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:e=>{const t=[]
for(const[a,l]of e.entries())"on"===l&&t.push(a)
return t}}
return a},bn=e=>{const a=yn(e)
return{select:e=>{let{selected:l,id:o,...n}=e
o=t.toRaw(o)
const r=l.has(o)?new Map([[o,l.get(o)]]):new Map
return a.select({...n,id:o,selected:r})},in:(e,t,l)=>{let o=new Map
return e?.length&&(o=a.in(e.slice(0,1),t,l)),o},out:(e,t,l)=>a.out(e,t,l)}},Vn=Symbol.for("vuetify:nested"),Sn={id:t.shallowRef(),root:{register:()=>null,unregister:()=>null,parents:t.ref(new Map),children:t.ref(new Map),open:()=>null,openOnSelect:()=>null,select:()=>null,opened:t.ref(new Set),selected:t.ref(new Map),selectedValues:t.ref([])}},wn=a({selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,selected:Array,mandatory:Boolean},"nested"),kn=e=>{let a=!1
const l=t.ref(new Map),o=t.ref(new Map),n=Ht(e,"opened",e.opened,(e=>new Set(e)),(e=>[...e.values()])),r=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
switch(e.selectStrategy){case"single-leaf":return(e=>{const a=bn(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"leaf":return(e=>{const a=yn(e)
return{select:e=>{let{id:l,selected:o,children:n,...r}=e
return l=t.toRaw(l),n.has(l)?o:a.select({id:l,selected:o,children:n,...r})},in:a.in,out:a.out}})(e.mandatory)
case"independent":return yn(e.mandatory)
case"single-independent":return bn(e.mandatory)
case"classic":default:return(e=>{const a={select:a=>{let{id:l,value:o,selected:n,children:r,parents:i}=a
l=t.toRaw(l)
const s=new Map(n),u=[l]
for(;u.length;){const e=u.shift()
n.set(e,o?"on":"off"),r.has(e)&&u.push(...r.get(e))}let c=i.get(l)
for(;c;){const e=r.get(c),t=e.every((e=>"on"===n.get(e))),a=e.every((e=>!n.has(e)||"off"===n.get(e)))
n.set(c,t?"on":a?"off":"indeterminate"),c=i.get(c)}return e&&!o&&0===Array.from(n.entries()).reduce(((e,t)=>{let[a,l]=t
return"on"===l?[...e,a]:e}),[]).length?s:n},in:(e,t,l)=>{let o=new Map
for(const n of e||[])o=a.select({id:n,value:!0,selected:new Map(o),children:t,parents:l})
return o},out:(e,t)=>{const a=[]
for(const[l,o]of e.entries())"on"!==o||t.has(l)||a.push(l)
return a}}
return a})(e.mandatory)}})),i=t.computed((()=>{if("object"==typeof e.openStrategy)return e.openStrategy
switch(e.openStrategy){case"list":return hn
case"single":return mn
case"multiple":default:return gn}})),s=Ht(e,"selected",e.selected,(e=>r.value.in(e,l.value,o.value)),(e=>r.value.out(e,l.value,o.value)))
function u(e){const t=[]
let a=e
for(;null!=a;)t.unshift(a),a=o.value.get(a)
return t}t.onBeforeUnmount((()=>{a=!0}))
const c=St("nested"),d={id:t.shallowRef(),root:{opened:n,selected:s,selectedValues:t.computed((()=>{const e=[]
for(const[t,a]of s.value.entries())"on"===a&&e.push(t)
return e})),register:(e,t,a)=>{t&&e!==t&&o.value.set(e,t),a&&l.value.set(e,[]),null!=t&&l.value.set(t,[...l.value.get(t)||[],e])},unregister:e=>{if(a)return
l.value.delete(e)
const t=o.value.get(e)
if(t){const a=l.value.get(t)??[]
l.value.set(t,a.filter((t=>t!==e)))}o.value.delete(e),n.value.delete(e)},open:(e,t,a)=>{c.emit("click:open",{id:e,value:t,path:u(e),event:a})
const r=i.value.open({id:e,value:t,opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},openOnSelect:(e,t,a)=>{const r=i.value.select({id:e,value:t,selected:new Map(s.value),opened:new Set(n.value),children:l.value,parents:o.value,event:a})
r&&(n.value=r)},select:(e,t,a)=>{c.emit("click:select",{id:e,value:t,path:u(e),event:a})
const n=r.value.select({id:e,value:t,selected:new Map(s.value),children:l.value,parents:o.value,event:a})
n&&(s.value=n),d.root.openOnSelect(e,t,a)},children:l,parents:o}}
return t.provide(Vn,d),d.root},xn=(e,a)=>{const l=t.inject(Vn,Sn),o=Symbol(Nt()),n=t.computed((()=>void 0!==e.value?e.value:o)),r={...l,id:n,open:(e,t)=>l.root.open(n.value,e,t),openOnSelect:(e,t)=>l.root.openOnSelect(n.value,e,t),isOpen:t.computed((()=>l.root.opened.value.has(n.value))),parent:t.computed((()=>l.root.parents.value.get(n.value))),select:(e,t)=>l.root.select(n.value,e,t),isSelected:t.computed((()=>"on"===l.root.selected.value.get(t.toRaw(n.value)))),isIndeterminate:t.computed((()=>"indeterminate"===l.root.selected.value.get(n.value))),isLeaf:t.computed((()=>!l.root.children.value.get(n.value))),isGroupActivator:l.isGroupActivator}
return!l.isGroupActivator&&l.root.register(n.value,l.id.value,a),t.onBeforeUnmount((()=>{!l.isGroupActivator&&l.root.unregister(n.value)})),a&&t.provide(Vn,r),r},Nn=mt({name:"VListGroupActivator",setup(e,a){let{slots:l}=a
return(()=>{const e=t.inject(Vn,Sn)
t.provide(Vn,{...e,isGroupActivator:!0})})(),()=>l.default?.()}}),Cn=a({activeColor:String,baseColor:String,color:String,collapseIcon:{type:Pl,default:"$collapse"},expandIcon:{type:Pl,default:"$expand"},prependIcon:Pl,appendIcon:Pl,fluid:Boolean,subgroup:Boolean,title:String,value:null,...l(),...ca()},"VListGroup"),_n=gt()({name:"VListGroup",props:Cn(),setup(e,a){let{slots:l}=a
const{isOpen:o,open:n,id:r}=xn(t.toRef(e,"value"),!0),i=t.computed((()=>`v-list-group--id-${String(r.value)}`)),s=fn(),{isBooted:u}=il()
function c(e){n(!o.value,e)}const d=t.computed((()=>({onClick:c,class:"v-list-group__header",id:i.value}))),v=t.computed((()=>o.value?e.collapseIcon:e.expandIcon)),p=t.computed((()=>({VListItem:{active:o.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&v.value,appendIcon:e.appendIcon||!e.subgroup&&v.value,title:e.title,value:e.value}})))
return At((()=>t.createVNode(e.tag,{class:["v-list-group",{"v-list-group--prepend":s?.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":o.value},e.class],style:e.style},{default:()=>[l.activator&&t.createVNode($a,{defaults:p.value},{default:()=>[t.createVNode(Nn,null,{default:()=>[l.activator({props:d.value,isOpen:o.value})]})]}),t.createVNode(Ha,{transition:{component:Ea},disabled:!u.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-list-group__items",role:"group","aria-labelledby":i.value},[l.default?.()]),[[t.vShow,o.value]])]})]}))),{}}}),In=ht("v-list-item-subtitle"),Pn=ht("v-list-item-title"),Bn=a({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:Pl,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:Pl,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:K(),onClickOnce:K(),...qa(),...l(),...dl(),...Ma(),...Qa(),...tl(),...no(),...ca(),...aa(),...ml({variant:"text"})},"VListItem"),An=gt()({name:"VListItem",directives:{Ripple:xo},props:Bn(),emits:{click:e=>!0},setup(e,a){let{attrs:l,slots:o,emit:n}=a
const r=oo(e,l),i=t.computed((()=>void 0===e.value?r.href.value:e.value)),{select:s,isSelected:u,isIndeterminate:c,isGroupActivator:d,root:v,parent:p,openOnSelect:f}=xn(i,!1),m=fn(),g=t.computed((()=>!1!==e.active&&(e.active||r.isActive?.value||u.value))),h=t.computed((()=>!1!==e.link&&r.isLink.value)),y=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||r.isClickable.value||null!=e.value&&!!m))),b=t.computed((()=>e.rounded||e.nav)),V=t.computed((()=>e.color??e.activeColor)),S=t.computed((()=>({color:g.value?V.value??e.baseColor:e.baseColor,variant:e.variant})))
t.watch((()=>r.isActive?.value),(e=>{e&&null!=p.value&&v.open(p.value,!0),e&&f(e)}),{immediate:!0})
const{themeClasses:w}=oa(e),{borderClasses:k}=Ka(e),{colorClasses:x,colorStyles:N,variantClasses:C}=gl(S),{densityClasses:_}=vl(e),{dimensionStyles:I}=La(e),{elevationClasses:P}=el(e),{roundedClasses:B}=al(b),A=t.computed((()=>e.lines?`v-list-item--${e.lines}-line`:void 0)),R=t.computed((()=>({isActive:g.value,select:s,isSelected:u.value,isIndeterminate:c.value})))
function T(t){n("click",t),!d&&y.value&&(r.navigate?.(t),null!=e.value&&s(!u.value,t))}function E(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),T(e))}return At((()=>{const a=h.value?"a":e.tag,l=o.title||null!=e.title,n=o.subtitle||null!=e.subtitle,i=!(!e.appendAvatar&&!e.appendIcon),s=!(!i&&!o.append),u=!(!e.prependAvatar&&!e.prependIcon),c=!(!u&&!o.prepend)
var d,v
return m?.updateHasPrepend(c),e.activeColor&&(d="active-color",v=["color","base-color"],v=Array.isArray(v)?v.slice(0,-1).map((e=>`'${e}'`)).join(", ")+` or '${v.at(-1)}'`:`'${v}'`,t.warn(`[Vuetify UPGRADE] '${d}' is deprecated, use ${v} instead.`)),t.withDirectives(t.createVNode(a,{class:["v-list-item",{"v-list-item--active":g.value,"v-list-item--disabled":e.disabled,"v-list-item--link":y.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!c&&m?.hasPrepend.value,"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&g.value},w.value,k.value,x.value,_.value,P.value,A.value,B.value,C.value,e.class],style:[N.value,I.value,e.style],href:r.href.value,tabindex:y.value?m?-2:0:void 0,onClick:T,onKeydown:y.value&&!h.value&&E},{default:()=>[fl(y.value||g.value,"v-list-item"),c&&t.createVNode("div",{key:"prepend",class:"v-list-item__prepend"},[o.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!u,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>[o.prepend?.(R.value)]}):t.createVNode(t.Fragment,null,[e.prependAvatar&&t.createVNode(nn,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&t.createVNode(jl,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)]),t.createVNode("div",{class:"v-list-item__content","data-no-activator":""},[l&&t.createVNode(Pn,{key:"title"},{default:()=>[o.title?.({title:e.title})??e.title]}),n&&t.createVNode(In,{key:"subtitle"},{default:()=>[o.subtitle?.({subtitle:e.subtitle})??e.subtitle]}),o.default?.(R.value)]),s&&t.createVNode("div",{key:"append",class:"v-list-item__append"},[o.append?t.createVNode($a,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>[o.append?.(R.value)]}):t.createVNode(t.Fragment,null,[e.appendIcon&&t.createVNode(jl,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&t.createVNode(nn,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),t.createVNode("div",{class:"v-list-item__spacer"},null)])]}),[[t.resolveDirective("ripple"),y.value&&e.ripple]])})),{}}}),Rn=a({color:String,inset:Boolean,sticky:Boolean,title:String,...l(),...ca()},"VListSubheader"),Tn=gt()({name:"VListSubheader",props:Rn(),setup(e,a){let{slots:l}=a
const{textColorClasses:o,textColorStyles:n}=Za(t.toRef(e,"color"))
return At((()=>{const a=!(!l.default&&!e.title)
return t.createVNode(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},o.value,e.class],style:[{textColorStyles:n},e.style]},{default:()=>[a&&t.createVNode("div",{class:"v-list-subheader__text"},[l.default?.()??e.title])]})})),{}}}),En=a({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...l(),...aa()},"VDivider"),Dn=gt()({name:"VDivider",props:En(),setup(e,a){let{attrs:l}=a
const{themeClasses:o}=oa(e),{textColorClasses:n,textColorStyles:r}=Za(t.toRef(e,"color")),i=t.computed((()=>{const t={}
return e.length&&(t[e.vertical?"maxHeight":"maxWidth"]=h(e.length)),e.thickness&&(t[e.vertical?"borderRightWidth":"borderTopWidth"]=h(e.thickness)),t}))
return At((()=>t.createVNode("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,n.value,e.class],style:[i.value,r.value,e.style],"aria-orientation":l.role&&"separator"!==l.role?void 0:e.vertical?"vertical":"horizontal",role:`${l.role||"separator"}`},null))),{}}}),Fn=a({items:Array,returnObject:Boolean},"VListChildren"),$n=gt()({name:"VListChildren",props:Fn(),setup(e,a){let{slots:l}=a
return pn(),()=>l.default?.()??e.items?.map((a=>{let{children:o,props:n,type:r,raw:i}=a
if("divider"===r)return l.divider?.({props:n})??t.createVNode(Dn,n,null)
if("subheader"===r)return l.subheader?.({props:n})??t.createVNode(Tn,n,null)
const s={subtitle:l.subtitle?e=>l.subtitle?.({...e,item:i}):void 0,prepend:l.prepend?e=>l.prepend?.({...e,item:i}):void 0,append:l.append?e=>l.append?.({...e,item:i}):void 0,title:l.title?e=>l.title?.({...e,item:i}):void 0},u=_n.filterProps(n)
return o?t.createVNode(_n,t.mergeProps({value:n?.value},u),{activator:a=>{let{props:o}=a
const r={...n,...o,value:e.returnObject?i:n.value}
return l.header?l.header({props:r}):t.createVNode(An,r,s)},default:()=>t.createVNode($n,{items:o},l)}):l.item?l.item({props:n}):t.createVNode(An,t.mergeProps(n,{value:e.returnObject?i:n.value}),s)}))}}),Mn=a({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:p}},"list-items")
function Ln(e,t){const a=m(t,e.itemTitle,t),l=m(t,e.itemValue,a),o=m(t,e.itemChildren),n={title:a,value:l,...!0===e.itemProps?"object"!=typeof t||null==t||Array.isArray(t)?void 0:"children"in t?C(t,["children"]):t:m(t,e.itemProps)}
return{title:String(n.title??""),value:n.value,props:n,children:Array.isArray(o)?On(e,o):void 0,raw:t}}function On(e,t){const a=[]
for(const l of t)a.push(Ln(e,l))
return a}function zn(e){const a=t.computed((()=>On(e,e.items))),l=t.computed((()=>a.value.some((e=>null===e.value))))
return{items:a,transformIn:function(t){return l.value||(t=t.filter((e=>null!==e))),t.map((t=>e.returnObject&&"string"==typeof t?Ln(e,t):a.value.find((a=>e.valueComparator(t,a.value)))||Ln(e,t)))},transformOut:function(t){return e.returnObject?t.map((e=>{let{raw:t}=e
return t})):t.map((e=>{let{value:t}=e
return t}))}}}function jn(e,t){const a=m(t,e.itemType,"item"),l=function(e){return"string"==typeof e||"number"==typeof e||"boolean"==typeof e}(t)?t:m(t,e.itemTitle),o=m(t,e.itemValue,void 0),n=m(t,e.itemChildren),r={title:l,value:o,...!0===e.itemProps?C(t,["children"]):m(t,e.itemProps)}
return{type:a,title:r.title,value:r.value,props:r,children:"item"===a&&n?Hn(e,n):void 0,raw:t}}function Hn(e,t){const a=[]
for(const l of t)a.push(jn(e,l))
return a}const Wn=a({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...wn({selectStrategy:"single-leaf",openStrategy:"list"}),...qa(),...l(),...dl(),...Ma(),...Qa(),itemType:{type:String,default:"type"},...Mn(),...tl(),...ca(),...aa(),...ml({variant:"text"})},"VList"),Un=gt()({name:"VList",props:Wn(),emits:{"update:selected":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:select":e=>!0},setup(e,a){let{slots:l}=a
const{items:o}=function(e){return{items:t.computed((()=>Hn(e,e.items)))}}(e),{themeClasses:n}=oa(e),{backgroundColorClasses:r,backgroundColorStyles:i}=Ja(t.toRef(e,"bgColor")),{borderClasses:s}=Ka(e),{densityClasses:u}=vl(e),{dimensionStyles:c}=La(e),{elevationClasses:d}=el(e),{roundedClasses:v}=al(e),{open:p,select:f}=kn(e),m=t.computed((()=>e.lines?`v-list--${e.lines}-line`:void 0)),g=t.toRef(e,"activeColor"),h=t.toRef(e,"baseColor"),y=t.toRef(e,"color")
pn(),vt({VListGroup:{activeColor:g,baseColor:h,color:y},VListItem:{activeClass:t.toRef(e,"activeClass"),activeColor:g,baseColor:h,color:y,density:t.toRef(e,"density"),disabled:t.toRef(e,"disabled"),lines:t.toRef(e,"lines"),nav:t.toRef(e,"nav"),slim:t.toRef(e,"slim"),variant:t.toRef(e,"variant")}})
const b=t.shallowRef(!1),V=t.ref()
function S(e){b.value=!0}function w(e){b.value=!1}function k(e){b.value||e.relatedTarget&&V.value?.contains(e.relatedTarget)||N()}function x(e){if(V.value){if("ArrowDown"===e.key)N("next")
else if("ArrowUp"===e.key)N("prev")
else if("Home"===e.key)N("first")
else{if("End"!==e.key)return
N("last")}e.preventDefault()}}function N(e){if(V.value)return ee(V.value,e)}return At((()=>t.createVNode(e.tag,{ref:V,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav},n.value,r.value,s.value,u.value,d.value,m.value,v.value,e.class],style:[i.value,c.value,e.style],tabindex:e.disabled||b.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:S,onFocusout:w,onFocus:k,onKeydown:x},{default:()=>[t.createVNode($n,{items:o.value,returnObject:e.returnObject},l)]}))),{open:p,select:f,focus:N}}}),Yn=ht("v-list-img"),Gn=a({start:Boolean,end:Boolean,...l(),...ca()},"VListItemAction"),qn=gt()({name:"VListItemAction",props:Gn(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end},e.class],style:e.style},l))),{}}}),Kn=a({start:Boolean,end:Boolean,...l(),...ca()},"VListItemMedia"),Xn=gt()({name:"VListItemMedia",props:Kn(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(e.tag,{class:["v-list-item-media",{"v-list-item-media--start":e.start,"v-list-item-media--end":e.end},e.class],style:e.style},l))),{}}})
function Zn(e,t){return{x:e.x+t.x,y:e.y+t.y}}function Jn(e,t){if("top"===e.side||"bottom"===e.side){const{side:a,align:l}=e
return Zn({x:"left"===l?0:"center"===l?t.width/2:"right"===l?t.width:l,y:"top"===a?0:"bottom"===a?t.height:a},t)}if("left"===e.side||"right"===e.side){const{side:a,align:l}=e
return Zn({x:"left"===a?0:"right"===a?t.width:a,y:"top"===l?0:"center"===l?t.height/2:"bottom"===l?t.height:l},t)}return Zn({x:t.width/2,y:t.height/2},t)}const Qn={static:function(){},connected:function(e,a,l){(Array.isArray(e.target.value)||function(e){for(;e;){if("fixed"===window.getComputedStyle(e).position)return!0
e=e.offsetParent}return!1}(e.target.value))&&Object.assign(l.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0})
const{preferredAnchor:o,preferredOrigin:n}=Y((()=>{const t=ie(a.location,e.isRtl.value),l="overlap"===a.origin?t:"auto"===a.origin?ue(t):ie(a.origin,e.isRtl.value)
return t.side===l.side&&t.align===ce(l).align?{preferredAnchor:de(t),preferredOrigin:de(l)}:{preferredAnchor:t,preferredOrigin:l}})),[r,i,s,u]=["minWidth","minHeight","maxWidth","maxHeight"].map((e=>t.computed((()=>{const t=parseFloat(a[e])
return isNaN(t)?1/0:t})))),c=t.computed((()=>{if(Array.isArray(a.offset))return a.offset
if("string"==typeof a.offset){const e=a.offset.split(" ").map(parseFloat)
return e.length<2&&e.push(0),e}return"number"==typeof a.offset?[a.offset,0]:[0,0]}))
let d=!1
const v=new ResizeObserver((()=>{d&&p()}))
function p(){if(d=!1,requestAnimationFrame((()=>{requestAnimationFrame((()=>d=!0))})),!e.target.value||!e.contentEl.value)return
const t=me(e.target.value),a=function(e,t){t?e.style.removeProperty("left"):e.style.removeProperty("right")
const a=ge(e)
t?a.x+=parseFloat(e.style.right||0):a.x-=parseFloat(e.style.left||0)
return a.y-=parseFloat(e.style.top||0),a}(e.contentEl.value,e.isRtl.value),v=_t(e.contentEl.value)
v.length||(v.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(a.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),a.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)))
const p=v.reduce(((e,t)=>{const a=t.getBoundingClientRect(),l=new pe({x:t===document.documentElement?0:a.x,y:t===document.documentElement?0:a.y,width:t.clientWidth,height:t.clientHeight})
return e?new pe({x:Math.max(e.left,l.left),y:Math.max(e.top,l.top),width:Math.min(e.right,l.right)-Math.max(e.left,l.left),height:Math.min(e.bottom,l.bottom)-Math.max(e.top,l.top)}):l}),void 0)
p.x+=12,p.y+=12,p.width-=24,p.height-=24
let f={anchor:o.value,origin:n.value}
function m(e){const l=new pe(a),o=Jn(e.anchor,t),n=Jn(e.origin,l)
let{x:r,y:i}=(v=n,{x:(d=o).x-v.x,y:d.y-v.y})
var d,v
switch(e.anchor.side){case"top":i-=c.value[0]
break
case"bottom":i+=c.value[0]
break
case"left":r-=c.value[0]
break
case"right":r+=c.value[0]}switch(e.anchor.align){case"top":i-=c.value[1]
break
case"bottom":i+=c.value[1]
break
case"left":r-=c.value[1]
break
case"right":r+=c.value[1]}l.x+=r,l.y+=i,l.width=Math.min(l.width,s.value),l.height=Math.min(l.height,u.value)
return{overflows:fe(l,p),x:r,y:i}}let g=0,y=0
const b={x:0,y:0},V={x:!1,y:!1}
let S=-1
for(;;){if(S++>10){Be("Infinite loop detected in connectedLocationStrategy")
break}const{x:e,y:t,overflows:l}=m(f)
g+=e,y+=t,a.x+=e,a.y+=t
{const e=ve(f.anchor),t=l.x.before||l.x.after,a=l.y.before||l.y.after
let o=!1
if(["x","y"].forEach((n=>{if("x"===n&&t&&!V.x||"y"===n&&a&&!V.y){const t={anchor:{...f.anchor},origin:{...f.origin}},a="x"===n?"y"===e?ce:ue:"y"===e?ue:ce
t.anchor=a(t.anchor),t.origin=a(t.origin)
const{overflows:r}=m(t);(r[n].before<=l[n].before&&r[n].after<=l[n].after||r[n].before+r[n].after<(l[n].before+l[n].after)/2)&&(f=t,o=V[n]=!0)}})),o)continue}l.x.before&&(g+=l.x.before,a.x+=l.x.before),l.x.after&&(g-=l.x.after,a.x-=l.x.after),l.y.before&&(y+=l.y.before,a.y+=l.y.before),l.y.after&&(y-=l.y.after,a.y-=l.y.after)
{const e=fe(a,p)
b.x=p.width-e.x.before-e.x.after,b.y=p.height-e.y.before-e.y.after,g+=e.x.before,a.x+=e.x.before,y+=e.y.before,a.y+=e.y.before}break}const w=ve(f.anchor)
return Object.assign(l.value,{"--v-overlay-anchor-origin":`${f.anchor.side} ${f.anchor.align}`,transformOrigin:`${f.origin.side} ${f.origin.align}`,top:h(tr(y)),left:e.isRtl.value?void 0:h(tr(g)),right:e.isRtl.value?h(tr(-g)):void 0,minWidth:h("y"===w?Math.min(r.value,t.width):r.value),maxWidth:h(ar(E(b.x,r.value===1/0?0:r.value,s.value))),maxHeight:h(ar(E(b.y,i.value===1/0?0:i.value,u.value)))}),{available:b,contentBox:a}}return t.watch([e.target,e.contentEl],((e,t)=>{let[a,l]=e,[o,n]=t
o&&!Array.isArray(o)&&v.unobserve(o),a&&!Array.isArray(a)&&v.observe(a),n&&v.unobserve(n),l&&v.observe(l)}),{immediate:!0}),t.onScopeDispose((()=>{v.disconnect()})),t.watch((()=>[o.value,n.value,a.offset,a.minWidth,a.minHeight,a.maxWidth,a.maxHeight]),(()=>p())),t.nextTick((()=>{const e=p()
if(!e)return
const{available:t,contentBox:a}=e
a.height>t.y&&requestAnimationFrame((()=>{p(),requestAnimationFrame((()=>{p()}))}))})),{updateLocation:p}}},er=a({locationStrategy:{type:[String,Function],default:"static",validator:e=>"function"==typeof e||e in Qn},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies")
function tr(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function ar(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let lr=!0
const or=[]
let nr=-1
function rr(){cancelAnimationFrame(nr),nr=requestAnimationFrame((()=>{const e=or.shift()
e&&e(),or.length?rr():lr=!0}))}const ir={none:null,close:function(e){ur(e.targetEl.value??e.contentEl.value,(function(t){e.isActive.value=!1}))},block:function(e,a){const l=e.root.value?.offsetParent,o=[...new Set([..._t(e.targetEl.value,a.contained?l:void 0),..._t(e.contentEl.value,a.contained?l:void 0)])].filter((e=>!e.classList.contains("v-overlay-scroll-blocked"))),n=window.innerWidth-document.documentElement.offsetWidth,r=(i=l||document.documentElement,It(i)&&i)
var i
r&&e.root.value.classList.add("v-overlay--scroll-blocked")
o.forEach(((e,t)=>{e.style.setProperty("--v-body-scroll-x",h(-e.scrollLeft)),e.style.setProperty("--v-body-scroll-y",h(-e.scrollTop)),e!==document.documentElement&&e.style.setProperty("--v-scrollbar-offset",h(n)),e.classList.add("v-overlay-scroll-blocked")})),t.onScopeDispose((()=>{o.forEach(((e,t)=>{const a=parseFloat(e.style.getPropertyValue("--v-body-scroll-x")),l=parseFloat(e.style.getPropertyValue("--v-body-scroll-y"))
e.style.removeProperty("--v-body-scroll-x"),e.style.removeProperty("--v-body-scroll-y"),e.style.removeProperty("--v-scrollbar-offset"),e.classList.remove("v-overlay-scroll-blocked"),e.scrollLeft=-a,e.scrollTop=-l})),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")}))},reposition:function(e,a,l){let o=!1,n=-1,r=-1
function i(t){var a
a=()=>{const a=performance.now()
e.updateLocation.value?.(t)
const l=performance.now()-a
o=l/(1e3/60)>2},!lr||or.length?(or.push(a),rr()):(lr=!1,a(),rr())}r=("undefined"==typeof requestIdleCallback?e=>e():requestIdleCallback)((()=>{l.run((()=>{ur(e.targetEl.value??e.contentEl.value,(e=>{o?(cancelAnimationFrame(n),n=requestAnimationFrame((()=>{n=requestAnimationFrame((()=>{i(e)}))}))):i(e)}))}))})),t.onScopeDispose((()=>{"undefined"!=typeof cancelIdleCallback&&cancelIdleCallback(r),cancelAnimationFrame(n)}))}},sr=a({scrollStrategy:{type:[String,Function],default:"block",validator:e=>"function"==typeof e||e in ir}},"VOverlay-scroll-strategies")
function ur(e,a){const l=[document,..._t(e)]
l.forEach((e=>{e.addEventListener("scroll",a,{passive:!0})})),t.onScopeDispose((()=>{l.forEach((e=>{e.removeEventListener("scroll",a)}))}))}const cr=Symbol.for("vuetify:v-menu"),dr=a({closeDelay:[Number,String],openDelay:[Number,String]},"delay")
function vr(e,t){const a={},l=l=>()=>{if(!o)return Promise.resolve(!0)
const n="openDelay"===l
return a.closeDelay&&window.clearTimeout(a.closeDelay),delete a.closeDelay,a.openDelay&&window.clearTimeout(a.openDelay),delete a.openDelay,new Promise((o=>{const r=parseInt(e[l]??0,10)
a[l]=window.setTimeout((()=>{t?.(n),o(n)}),r)}))}
return{runCloseDelay:l("closeDelay"),runOpenDelay:l("openDelay")}}const pr=a({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...dr()},"VOverlay-activator")
function fr(e,a){let{isActive:l,isTop:n}=a
const r=St("useActivator"),i=t.ref()
let s=!1,u=!1,c=!0
const d=t.computed((()=>e.openOnFocus||null==e.openOnFocus&&e.openOnHover)),v=t.computed((()=>e.openOnClick||null==e.openOnClick&&!e.openOnHover&&!d.value)),{runOpenDelay:p,runCloseDelay:f}=vr(e,(t=>{t!==(e.openOnHover&&s||d.value&&u)||e.openOnHover&&l.value&&!n.value||(l.value!==t&&(c=!0),l.value=t)})),m=t.ref(),g=e=>{e.stopPropagation(),i.value=e.currentTarget||e.target,l.value||(m.value=[e.clientX,e.clientY]),l.value=!l.value},h=e=>{e.sourceCapabilities?.firesTouchEvents||(s=!0,i.value=e.currentTarget||e.target,p())},y=e=>{s=!1,f()},V=e=>{!1!==le(e.target,":focus-visible")&&(u=!0,e.stopPropagation(),i.value=e.currentTarget||e.target,p())},S=e=>{u=!1,e.stopPropagation(),f()},w=t.computed((()=>{const t={}
return v.value&&(t.onClick=g),e.openOnHover&&(t.onMouseenter=h,t.onMouseleave=y),d.value&&(t.onFocus=V,t.onBlur=S),t})),k=t.computed((()=>{const a={}
if(e.openOnHover&&(a.onMouseenter=()=>{s=!0,p()},a.onMouseleave=()=>{s=!1,f()}),d.value&&(a.onFocusin=()=>{u=!0,p()},a.onFocusout=()=>{u=!1,f()}),e.closeOnContentClick){const e=t.inject(cr,null)
a.onClick=()=>{l.value=!1,e?.closeParents()}}return a})),x=t.computed((()=>{const t={}
return e.openOnHover&&(t.onMouseenter=()=>{c&&(s=!0,c=!1,p())},t.onMouseleave=()=>{s=!1,f()}),t}))
t.watch(n,(t=>{!t||(!e.openOnHover||s||d.value&&u)&&(!d.value||u||e.openOnHover&&s)||(l.value=!1)})),t.watch(l,(e=>{e||setTimeout((()=>{m.value=void 0}))}),{flush:"post"})
const N=t.ref()
t.watchEffect((()=>{N.value&&t.nextTick((()=>{i.value=b(N.value)}))}))
const C=t.ref(),_=t.computed((()=>"cursor"===e.target&&m.value?m.value:C.value?b(C.value):mr(e.target,r)||i.value)),I=t.computed((()=>Array.isArray(_.value)?void 0:_.value))
let P
return t.watch((()=>!!e.activator),(a=>{a&&o?(P=t.effectScope(),P.run((()=>{!function(e,a,l){let{activatorEl:o,activatorEvents:n}=l
function r(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&be(a,t.mergeProps(n.value,l))}function i(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s(),l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.activatorProps
a&&Ve(a,t.mergeProps(n.value,l))}function s(){const t=mr(arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.activator,a)
return o.value=t?.nodeType===Node.ELEMENT_NODE?t:void 0,o.value}t.watch((()=>e.activator),((e,a)=>{if(a&&e!==a){const e=s(a)
e&&i(e)}e&&t.nextTick((()=>r()))}),{immediate:!0}),t.watch((()=>e.activatorProps),(()=>{r()})),t.onScopeDispose((()=>{i()}))}(e,r,{activatorEl:i,activatorEvents:w})}))):P&&P.stop()}),{flush:"post",immediate:!0}),t.onScopeDispose((()=>{P?.stop()})),{activatorEl:i,activatorRef:N,target:_,targetEl:I,targetRef:C,activatorEvents:w,contentEvents:k,scrimEvents:x}}function mr(e,t){if(!e)return
let a
if("parent"===e){let e=t?.proxy?.$el?.parentNode
for(;e?.hasAttribute("data-no-activator");)e=e.parentNode
a=e}else a="string"==typeof e?document.querySelector(e):"$el"in e?e.$el:e
return a}const gr=["sm","md","lg","xl","xxl"],hr=Symbol.for("vuetify:display"),yr={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}}
function br(e){return o&&!e?window.innerWidth:"object"==typeof e&&e.clientWidth||0}function Vr(e){return o&&!e?window.innerHeight:"object"==typeof e&&e.clientHeight||0}function Sr(e){const t=o&&!e?window.navigator.userAgent:"ssr"
function a(e){return Boolean(t.match(e))}return{android:a(/android/i),ios:a(/iphone|ipad|ipod/i),cordova:a(/cordova/i),electron:a(/electron/i),chrome:a(/chrome/i),edge:a(/edge/i),firefox:a(/firefox/i),opera:a(/opera/i),win:a(/win/i),mac:a(/mac/i),linux:a(/linux/i),touch:r,ssr:"ssr"===t}}function wr(e,a){const{thresholds:l,mobileBreakpoint:n}=function(){return L(yr,arguments.length>0&&void 0!==arguments[0]?arguments[0]:yr)}(e),r=t.shallowRef(Vr(a)),i=t.shallowRef(Sr(a)),s=t.reactive({}),u=t.shallowRef(br(a))
function c(){r.value=Vr(),u.value=br()}return t.watchEffect((()=>{const e=u.value<l.sm,t=u.value<l.md&&!e,a=u.value<l.lg&&!(t||e),o=u.value<l.xl&&!(a||t||e),c=u.value<l.xxl&&!(o||a||t||e),d=u.value>=l.xxl,v=e?"xs":t?"sm":a?"md":o?"lg":c?"xl":"xxl",p="number"==typeof n?n:l[n],f=u.value<p
s.xs=e,s.sm=t,s.md=a,s.lg=o,s.xl=c,s.xxl=d,s.smAndUp=!e,s.mdAndUp=!(e||t),s.lgAndUp=!(e||t||a),s.xlAndUp=!(e||t||a||o),s.smAndDown=!(a||o||c||d),s.mdAndDown=!(o||c||d),s.lgAndDown=!(c||d),s.xlAndDown=!d,s.name=v,s.height=r.value,s.width=u.value,s.mobile=f,s.mobileBreakpoint=n,s.platform=i.value,s.thresholds=l})),o&&window.addEventListener("resize",c,{passive:!0}),{...t.toRefs(s),update:function(){c(),i.value=Sr()},ssr:!!a}}const kr=a({mobileBreakpoint:[Number,String]},"display")
function xr(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wt()
const l=t.inject(hr)
if(!l)throw new Error("Could not find Vuetify display injection")
const o=t.computed((()=>{if(!e.mobileBreakpoint)return l.mobile.value
const t="number"==typeof e.mobileBreakpoint?e.mobileBreakpoint:l.thresholds.value[e.mobileBreakpoint]
return l.width.value<t})),n=t.computed((()=>a?{[`${a}--mobile`]:o.value}:{}))
return{...l,displayClasses:n,mobile:o}}function Nr(){if(!o)return t.shallowRef(!1)
const{ssr:e}=xr()
if(e){const e=t.shallowRef(!1)
return t.onMounted((()=>{e.value=!0})),e}return t.shallowRef(!0)}const Cr=a({eager:Boolean},"lazy")
function _r(e,a){const l=t.shallowRef(!1),o=t.computed((()=>l.value||e.eager||a.value))
return t.watch(a,(()=>l.value=!0)),{isBooted:l,hasContent:o,onAfterLeave:function(){e.eager||(l.value=!1)}}}function Ir(){const e=St("useScopeId").vnode.scopeId
return{scopeId:e?{[e]:""}:void 0}}const Pr=Symbol.for("vuetify:stack"),Br=t.reactive([])
function Ar(){return!0}function Rr(e,t,a){if(!e||!1===Tr(e,a))return!1
const l=yt(t)
if("undefined"!=typeof ShadowRoot&&l instanceof ShadowRoot&&l.host===e.target)return!1
const o=("object"==typeof a.value&&a.value.include||(()=>[]))()
return o.push(t),!o.some((t=>t?.contains(e.target)))}function Tr(e,t){return("object"==typeof t.value&&t.value.closeConditional||Ar)(e)}function Er(e,t){const a=yt(e)
t(document),"undefined"!=typeof ShadowRoot&&a instanceof ShadowRoot&&t(a)}const Dr={mounted(e,t){const a=a=>function(e,t,a){const l="function"==typeof a.value?a.value:a.value.handler
t._clickOutside.lastMousedownWasOutside&&Rr(e,t,a)&&setTimeout((()=>{Tr(e,a)&&l&&l(e)}),0)}(a,e,t),l=a=>{e._clickOutside.lastMousedownWasOutside=Rr(a,e,t)}
Er(e,(e=>{e.addEventListener("click",a,!0),e.addEventListener("mousedown",l,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[t.instance.$.uid]={onClick:a,onMousedown:l}},unmounted(e,t){e._clickOutside&&(Er(e,(a=>{if(!a||!e._clickOutside?.[t.instance.$.uid])return
const{onClick:l,onMousedown:o}=e._clickOutside[t.instance.$.uid]
a.removeEventListener("click",l,!0),a.removeEventListener("mousedown",o,!0)})),delete e._clickOutside[t.instance.$.uid])}}
function Fr(e){const{modelValue:a,color:l,...o}=e
return t.createVNode(t.Transition,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&t.createVNode("div",t.mergeProps({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const $r=a({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...pr(),...l(),...Ma(),...Cr(),...er(),...sr(),...aa(),...ja()},"VOverlay"),Mr=gt()({name:"VOverlay",directives:{ClickOutside:Dr},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...$r()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,a){let{slots:l,attrs:n,emit:r}=a
const i=Ht(e,"modelValue"),s=t.computed({get:()=>i.value,set:t=>{t&&e.disabled||(i.value=t)}}),{teleportTarget:u}=function(e){return{teleportTarget:t.computed((()=>{const a=e.value
if(!0===a||!o)return
const l=!1===a?document.body:"string"==typeof a?document.querySelector(a):a
if(null==l)return void t.warn(`Unable to locate target ${a}`)
let n=l.querySelector(":scope > .v-overlay-container")
return n||(n=document.createElement("div"),n.className="v-overlay-container",l.appendChild(n)),n}))}}(t.computed((()=>e.attach||e.contained))),{themeClasses:c}=oa(e),{rtlClasses:d,isRtl:v}=ea(),{hasContent:p,onAfterLeave:f}=_r(e,s),m=Ja(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),{globalTop:g,localTop:y,stackStyles:b}=function(e,a,l){const o=St("useStack"),n=!l,r=t.inject(Pr,void 0),i=t.reactive({activeChildren:new Set})
t.provide(Pr,i)
const s=t.shallowRef(+a.value)
jt(e,(()=>{const e=Br.at(-1)?.[1]
s.value=e?e+10:+a.value,n&&Br.push([o.uid,s.value]),r?.activeChildren.add(o.uid),t.onScopeDispose((()=>{if(n){const e=t.toRaw(Br).findIndex((e=>e[0]===o.uid))
Br.splice(e,1)}r?.activeChildren.delete(o.uid)}))}))
const u=t.shallowRef(!0)
n&&t.watchEffect((()=>{const e=Br.at(-1)?.[0]===o.uid
setTimeout((()=>u.value=e))}))
const c=t.computed((()=>!i.activeChildren.size))
return{globalTop:t.readonly(u),localTop:c,stackStyles:t.computed((()=>({zIndex:s.value})))}}(s,t.toRef(e,"zIndex"),e._disableGlobalStack),{activatorEl:V,activatorRef:S,target:w,targetEl:k,targetRef:x,activatorEvents:N,contentEvents:C,scrimEvents:_}=fr(e,{isActive:s,isTop:y}),{dimensionStyles:I}=La(e),P=Nr(),{scopeId:B}=Ir()
t.watch((()=>e.disabled),(e=>{e&&(s.value=!1)}))
const A=t.ref(),R=t.ref(),{contentStyles:T,updateLocation:E}=function(e,a){const l=t.ref({}),n=t.ref()
function r(e){n.value?.(e)}return o&&jt((()=>!(!a.isActive.value||!e.locationStrategy)),(o=>{t.watch((()=>e.locationStrategy),o),t.onScopeDispose((()=>{window.removeEventListener("resize",r),n.value=void 0})),window.addEventListener("resize",r,{passive:!0}),"function"==typeof e.locationStrategy?n.value=e.locationStrategy(a,e,l)?.updateLocation:n.value=Qn[e.locationStrategy](a,e,l)?.updateLocation})),{contentStyles:l,updateLocation:n}}(e,{isRtl:v,contentEl:R,target:w,isActive:s})
function D(t){r("click:outside",t),e.persistent?O():s.value=!1}function F(){return s.value&&g.value}function $(t){"Escape"===t.key&&g.value&&(e.persistent?O():(s.value=!1,R.value?.contains(document.activeElement)&&V.value?.focus()))}!function(e,a){if(!o)return
let l
t.watchEffect((async()=>{l?.stop(),a.isActive.value&&e.scrollStrategy&&(l=t.effectScope(),await t.nextTick(),l.active&&l.run((()=>{"function"==typeof e.scrollStrategy?e.scrollStrategy(a,e,l):ir[e.scrollStrategy]?.(a,e,l)})))})),t.onScopeDispose((()=>{l?.stop()}))}(e,{root:A,contentEl:R,targetEl:k,isActive:s,updateLocation:E}),o&&t.watch(s,(e=>{e?window.addEventListener("keydown",$):window.removeEventListener("keydown",$)}),{immediate:!0})
const M=lo()
jt((()=>e.closeOnBack),(()=>{!function(e,a){let l,n,r=!1
function i(e){e.state?.replaced||(r=!0,setTimeout((()=>r=!1)))}o&&(t.nextTick((()=>{window.addEventListener("popstate",i),l=e?.beforeEach(((e,t,l)=>{ro?r?a(l):l():setTimeout((()=>r?a(l):l())),ro=!0})),n=e?.afterEach((()=>{ro=!1}))})),t.onScopeDispose((()=>{window.removeEventListener("popstate",i),l?.(),n?.()})))}(M,(t=>{g.value&&s.value?(t(!1),e.persistent?O():s.value=!1):t()}))}))
const L=t.ref()
function O(){e.noClickAnimation||R.value&&he(R.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:bt})}return t.watch((()=>s.value&&(e.absolute||e.contained)&&null==u.value),(e=>{if(e){const e=Ct(A.value)
e&&e!==document.scrollingElement&&(L.value=e.scrollTop)}})),At((()=>t.createVNode(t.Fragment,null,[l.activator?.({isActive:s.value,props:t.mergeProps({ref:S,targetRef:x},N.value,e.activatorProps)}),P.value&&p.value&&t.createVNode(t.Teleport,{disabled:!u.value,to:u.value},{default:()=>[t.createVNode("div",t.mergeProps({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},c.value,d.value,e.class],style:[b.value,{top:h(L.value)},e.style],ref:A},B,n),[t.createVNode(Fr,t.mergeProps({color:m,modelValue:s.value&&!!e.scrim},_.value),null),t.createVNode(Ha,{appear:!0,persisted:!0,transition:e.transition,target:w.value,onAfterLeave:()=>{f(),r("afterLeave")}},{default:()=>[t.withDirectives(t.createVNode("div",t.mergeProps({ref:R,class:["v-overlay__content",e.contentClass],style:[I.value,T.value]},C.value,e.contentProps),[l.default?.({isActive:s})]),[[t.vShow,s.value],[t.resolveDirective("click-outside"),{handler:D,closeConditional:F,include:()=>[V.value]}]])]})])]})]))),{activatorEl:V,target:w,animateClick:O,contentEl:R,globalTop:g,localTop:y,updateLocation:E}}}),Lr=Symbol("Forwarded refs")
function Or(e,t){let a=e
for(;a;){const e=Reflect.getOwnPropertyDescriptor(a,t)
if(e)return e
a=Object.getPrototypeOf(a)}}function zr(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),l=1;l<t;l++)a[l-1]=arguments[l]
return e[Lr]=a,new Proxy(e,{get(e,t){if(Reflect.has(e,t))return Reflect.get(e,t)
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__"))for(const e of a)if(e.value&&Reflect.has(e.value,t)){const a=Reflect.get(e.value,t)
return"function"==typeof a?a.bind(e.value):a}},has(e,t){if(Reflect.has(e,t))return!0
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return!0
return!1},set(e,t,l){if(Reflect.has(e,t))return Reflect.set(e,t,l)
if("symbol"==typeof t||t.startsWith("$")||t.startsWith("__"))return!1
for(const e of a)if(e.value&&Reflect.has(e.value,t))return Reflect.set(e.value,t,l)
return!1},getOwnPropertyDescriptor(e,t){const l=Reflect.getOwnPropertyDescriptor(e,t)
if(l)return l
if("symbol"!=typeof t&&!t.startsWith("$")&&!t.startsWith("__")){for(const e of a){if(!e.value)continue
const a=Or(e.value,t)??("_"in e.value?Or(e.value._?.setupState,t):void 0)
if(a)return a}for(const e of a){const a=e.value&&e.value[Lr]
if(!a)continue
const l=a.slice()
for(;l.length;){const e=l.shift(),a=Or(e.value,t)
if(a)return a
const o=e.value&&e.value[Lr]
o&&l.push(...o)}}}}})}const jr=a({id:String,...C($r({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:ya}}),["absolute"])},"VMenu"),Hr=gt()({name:"VMenu",props:jr(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),{scopeId:n}=Ir(),r=Nt(),i=t.computed((()=>e.id||`v-menu-${r}`)),s=t.ref(),u=t.inject(cr,null),c=t.shallowRef(0)
async function d(e){const a=e.relatedTarget,l=e.target
if(await t.nextTick(),o.value&&a!==l&&s.value?.contentEl&&s.value?.globalTop&&![document,s.value.contentEl].includes(l)&&!s.value.contentEl.contains(l)){J(s.value.contentEl)[0]?.focus()}}function v(){u?.closeParents()}function p(t){if(!e.disabled&&"Tab"===t.key){Q(J(s.value?.contentEl,!1),t.shiftKey?"prev":"next",(e=>e.tabIndex>=0))||(o.value=!1,s.value?.activatorEl?.focus())}}function f(t){if(e.disabled)return
const a=s.value?.contentEl
a&&o.value?"ArrowDown"===t.key?(t.preventDefault(),ee(a,"next")):"ArrowUp"===t.key&&(t.preventDefault(),ee(a,"prev")):["ArrowDown","ArrowUp"].includes(t.key)&&(o.value=!0,t.preventDefault(),setTimeout((()=>setTimeout((()=>f(t))))))}t.provide(cr,{register(){++c.value},unregister(){--c.value},closeParents(){setTimeout((()=>{c.value||(o.value=!1,u?.closeParents())}),40)}}),t.watch(o,(e=>{e?(u?.register(),document.addEventListener("focusin",d,{once:!0})):(u?.unregister(),document.removeEventListener("focusin",d))}))
const m=t.computed((()=>t.mergeProps({"aria-haspopup":"menu","aria-expanded":String(o.value),"aria-owns":i.value,onKeydown:f},e.activatorProps)))
return At((()=>{const a=Mr.filterProps(e)
return t.createVNode(Mr,t.mergeProps({ref:s,class:["v-menu",e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,absolute:!0,activatorProps:m.value,"onClick:outside":v,onKeydown:p},n),{activator:l.activator,default:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o]
return t.createVNode($a,{root:"VMenu"},{default:()=>[l.default?.(...a)]})}})})),zr({id:i,ΨopenChildren:c},s)}}),Wr=a({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...l(),...ja({transition:{component:Ra}})},"VCounter"),Ur=gt()({name:"VCounter",functional:!0,props:Wr(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>e.max?`${e.value} / ${e.max}`:String(e.value)))
return At((()=>t.createVNode(Ha,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-counter",e.class],style:e.style},[l.default?l.default({counter:o.value,max:e.max,value:e.value}):o.value]),[[t.vShow,e.active]])]}))),{}}}),Yr=a({floating:Boolean,...l()},"VFieldLabel"),Gr=gt()({name:"VFieldLabel",props:Yr(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(Do,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},l))),{}}}),qr=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],Kr=a({appendInnerIcon:Pl,bgColor:String,clearable:Boolean,clearIcon:{type:Pl,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:Pl,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qr.includes(e)},"onClick:clear":K(),"onClick:appendInner":K(),"onClick:prependInner":K(),...l(),...Zl(),...tl(),...aa()},"VField"),Xr=gt()({name:"VField",inheritAttrs:!1,props:{id:String,...Go(),...Kr()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{themeClasses:r}=oa(e),{loaderClasses:i}=Jl(e),{focusClasses:s,isFocused:u,focus:c,blur:d}=qo(e),{InputIcon:v}=Wo(e),{roundedClasses:p}=al(e),{rtlClasses:f}=ea(),m=t.computed((()=>e.dirty||e.active)),g=t.computed((()=>!(e.singleLine||!e.label&&!n.label))),y=Nt(),b=t.computed((()=>e.id||`input-${y}`)),V=t.computed((()=>`${b.value}-messages`)),S=t.ref(),w=t.ref(),k=t.ref(),x=t.computed((()=>["plain","underlined"].includes(e.variant))),{backgroundColorClasses:N,backgroundColorStyles:C}=Ja(t.toRef(e,"bgColor")),{textColorClasses:_,textColorStyles:I}=Za(t.computed((()=>e.error||e.disabled?void 0:m.value&&u.value?e.color:e.baseColor)))
t.watch(m,(e=>{if(g.value){const t=S.value.$el,a=w.value.$el
requestAnimationFrame((()=>{const l=ge(t),o=a.getBoundingClientRect(),n=o.x-l.x,r=o.y-l.y-(l.height/2-o.height/2),i=o.width/.75,s=Math.abs(i-l.width)>1?{maxWidth:h(i)}:void 0,u=getComputedStyle(t),c=getComputedStyle(a),d=1e3*parseFloat(u.transitionDuration)||150,v=parseFloat(c.getPropertyValue("--v-field-label-scale")),p=c.getPropertyValue("color")
t.style.visibility="visible",a.style.visibility="hidden",he(t,{transform:`translate(${n}px, ${r}px) scale(${v})`,color:p,...s},{duration:d,easing:bt,direction:e?"normal":"reverse"}).finished.then((()=>{t.style.removeProperty("visibility"),a.style.removeProperty("visibility")}))}))}}),{flush:"post"})
const P=t.computed((()=>({isActive:m,isFocused:u,controlRef:k,blur:d,focus:c})))
function B(e){e.target!==document.activeElement&&e.preventDefault()}return At((()=>{const a="outlined"===e.variant,o=n["prepend-inner"]||e.prependInnerIcon,u=!(!e.clearable&&!n.clear),h=!!(n["append-inner"]||e.appendInnerIcon||u),y=()=>n.label?n.label({...P.value,label:e.label,props:{for:b.value}}):e.label
return t.createVNode("div",t.mergeProps({class:["v-field",{"v-field--active":m.value,"v-field--appended":h,"v-field--center-affix":e.centerAffix??!x.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":o,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!y(),[`v-field--variant-${e.variant}`]:!0},r.value,N.value,s.value,i.value,p.value,f.value,e.class],style:[C.value,e.style],onClick:B},l),[t.createVNode("div",{class:"v-field__overlay"},null),t.createVNode(Ql,{name:"v-field",active:!!e.loading,color:e.error?"error":"string"==typeof e.loading?e.loading:e.color},{default:n.loader}),o&&t.createVNode("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&t.createVNode(v,{key:"prepend-icon",name:"prependInner"},null),n["prepend-inner"]?.(P.value)]),t.createVNode("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&g.value&&t.createVNode(Gr,{key:"floating-label",ref:w,class:[_.value],floating:!0,for:b.value,style:I.value},{default:()=>[y()]}),t.createVNode(Gr,{ref:S,for:b.value},{default:()=>[y()]}),n.default?.({...P.value,props:{id:b.value,class:"v-field__input","aria-describedby":V.value},focus:c,blur:d})]),u&&t.createVNode(Da,{key:"clear"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-field__clearable",onMousedown:e=>{e.preventDefault(),e.stopPropagation()}},[n.clear?n.clear():t.createVNode(v,{name:"clear"},null)]),[[t.vShow,e.dirty]])]}),h&&t.createVNode("div",{key:"append",class:"v-field__append-inner"},[n["append-inner"]?.(P.value),e.appendInnerIcon&&t.createVNode(v,{key:"append-icon",name:"appendInner"},null)]),t.createVNode("div",{class:["v-field__outline",_.value],style:I.value},[a&&t.createVNode(t.Fragment,null,[t.createVNode("div",{class:"v-field__outline__start"},null),g.value&&t.createVNode("div",{class:"v-field__outline__notch"},[t.createVNode(Gr,{ref:w,floating:!0,for:b.value},{default:()=>[y()]})]),t.createVNode("div",{class:"v-field__outline__end"},null)]),x.value&&g.value&&t.createVNode(Gr,{ref:w,floating:!0,for:b.value},{default:()=>[y()]})])])})),{controlRef:k}}})
function Zr(e){return x(e,Object.keys(Xr.props).filter((e=>!P(e)&&"class"!==e&&"style"!==e)))}const Jr=["color","file","time","date","datetime-local","week","month"],Qr=a({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...en(),...Kr()},"VTextField"),ei=gt()({name:"VTextField",directives:{Intersect:Ua},inheritAttrs:!1,props:Qr(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=Ht(e,"modelValue"),{isFocused:i,focus:s,blur:u}=qo(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):"number"==typeof e.counterValue?e.counterValue:(r.value??"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter)),v=t.computed((()=>["plain","underlined"].includes(e.variant)))
function p(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const f=t.ref(),m=t.ref(),g=t.ref(),h=t.computed((()=>Jr.includes(e.type)||e.persistentPlaceholder||i.value||e.active))
function y(){g.value!==document.activeElement&&g.value?.focus(),i.value||s()}function b(e){o("mousedown:control",e),e.target!==g.value&&(y(),e.preventDefault())}function V(e){y(),o("click:control",e)}function S(a){a.stopPropagation(),y(),t.nextTick((()=>{r.value=null,Z(e["onClick:clear"],a)}))}function w(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim&&["text","search","password","tel","url"].includes(e.type)){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}return At((()=>{const a=!!(n.counter||!1!==e.counter&&null!=e.counter),o=!(!a&&!n.details),[s,k]=R(l),{modelValue:x,...N}=tn.filterProps(e),C=Zr(e)
return t.createVNode(tn,t.mergeProps({ref:f,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":v.value},e.class],style:e.style},s,N,{centerAffix:!v.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(Xr,t.mergeProps({ref:m,onMousedown:b,onClick:V,"onClick:clear":S,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},C,{id:l.value,active:h.value||s.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...i}}=a
const s=t.withDirectives(t.createVNode("input",t.mergeProps({ref:g,value:r.value,onInput:w,autofocus:e.autofocus,readonly:c.value,disabled:o.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:y,onBlur:u},i,k),null),[[t.resolveDirective("intersect"),{handler:p},null,{once:!0}]])
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[t.createVNode("span",{class:"v-text-field__prefix__text"},[e.prefix])]),n.default?t.createVNode("div",{class:l,"data-no-activator":""},[n.default(),s]):t.cloneVNode(s,{class:l}),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[t.createVNode("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(Ur,{active:e.persistentCounter||i.value,value:c.value,max:d.value},n.counter)])]):void 0})})),zr({},f,m,g)}}),ti=a({renderless:Boolean,...l()},"VVirtualScrollItem"),ai=gt()({name:"VVirtualScrollItem",inheritAttrs:!1,props:ti(),emits:{"update:height":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{resizeRef:r,contentRect:i}=Rt(void 0,"border")
t.watch((()=>i.value?.height),(e=>{null!=e&&o("update:height",e)})),At((()=>e.renderless?t.createVNode(t.Fragment,null,[n.default?.({itemRef:r})]):t.createVNode("div",t.mergeProps({ref:r,class:["v-virtual-scroll__item",e.class],style:e.style},l),[n.default?.()])))}}),li=a({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual")
function oi(e,a){const l=xr(),n=t.shallowRef(0)
t.watchEffect((()=>{n.value=parseFloat(e.itemHeight||0)}))
const r=t.shallowRef(0),i=t.shallowRef(Math.ceil((parseInt(e.height)||l.height.value)/(n.value||16))||1),s=t.shallowRef(0),u=t.shallowRef(0),c=t.ref(),d=t.ref()
let v=0
const{resizeRef:p,contentRect:f}=Rt()
t.watchEffect((()=>{p.value=c.value}))
const m=t.computed((()=>c.value===document.documentElement?l.height.value:f.value?.height||parseInt(e.height)||0)),g=t.computed((()=>!!(c.value&&d.value&&m.value&&n.value)))
let h=Array.from({length:a.value.length}),y=Array.from({length:a.value.length})
const b=t.shallowRef(0)
let V=-1
const S=function(e,a){let l=0
const o=function(){for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r]
clearTimeout(l),l=setTimeout((()=>e(...n)),t.unref(a))}
return o.clear=()=>{clearTimeout(l)},o.immediate=e,o}((()=>{const e=performance.now()
y[0]=0
const t=a.value.length
for(let e=1;e<=t-1;e++)y[e]=(y[e-1]||0)+(h[e-1]||n.value)
b.value=Math.max(b.value,performance.now()-e)}),b),w=t.watch(g,(e=>{e&&(w(),v=d.value.offsetTop,S.immediate(),P(),~V&&t.nextTick((()=>{o&&window.requestAnimationFrame((()=>{A(V),V=-1}))})))}))
function k(e){return e=E(e,0,a.value.length-1),y[e]||0}function x(e){return function(e,t){let a=e.length-1,l=0,o=0,n=null,r=-1
if(e[a]<t)return a
for(;l<=a;)if(o=l+a>>1,n=e[o],n>t)a=o-1
else{if(!(n<t))return n===t?o:l
r=o,l=o+1}return r}(y,e)}t.watch(m,((e,t)=>{t&&P()})),t.onScopeDispose((()=>{S.clear()}))
let N=0,C=0,_=0
let I=-1
function P(){cancelAnimationFrame(I),I=requestAnimationFrame(B)}function B(){if(!c.value||!m.value)return
const e=N-v,t=Math.sign(C),l=E(x(Math.max(0,e-100)),0,a.value.length),o=E(x(e+m.value+100)+1,l+1,a.value.length)
if((-1!==t||l<r.value)&&(1!==t||o>i.value)){const e=k(r.value)-k(l),t=k(o)-k(i.value)
Math.max(e,t)>100?(r.value=l,i.value=o):(l<=0&&(r.value=l),o>=a.value.length&&(i.value=o))}s.value=k(r.value),u.value=k(a.value.length)-k(i.value)}function A(e){const t=k(e)
!c.value||e&&!t?V=e:c.value.scrollTop=t}const R=t.computed((()=>a.value.slice(r.value,i.value).map(((e,t)=>({raw:e,index:t+r.value})))))
return t.watch(a,(()=>{h=Array.from({length:a.value.length}),y=Array.from({length:a.value.length}),S.immediate(),P()}),{deep:!0}),{containerRef:c,markerRef:d,computedItems:R,paddingTop:s,paddingBottom:u,scrollToIndex:A,handleScroll:function(){if(!c.value||!d.value)return
const e=c.value.scrollTop,t=performance.now()
t-_>500?(C=Math.sign(e-N),v=d.value.offsetTop):C=e-N,N=e,_=t,P()},handleScrollend:function(){c.value&&d.value&&(C=0,_=0,P())},handleItemResize:function(e,t){const a=h[e],l=n.value
n.value=l?Math.min(n.value,t):t,a===t&&l===n.value||(h[e]=t,S())}}}const ni=a({items:{type:Array,default:()=>[]},renderless:Boolean,...li(),...l(),...Ma()},"VVirtualScroll"),ri=gt()({name:"VVirtualScroll",props:ni(),setup(e,a){let{slots:l}=a
const o=St("VVirtualScroll"),{dimensionStyles:n}=La(e),{containerRef:r,markerRef:i,handleScroll:s,handleScrollend:u,handleItemResize:c,scrollToIndex:d,paddingTop:v,paddingBottom:p,computedItems:f}=oi(e,t.toRef(e,"items"))
return jt((()=>e.renderless),(()=>{function e(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0]
const t=e?"addEventListener":"removeEventListener"
r.value===document.documentElement?(document[t]("scroll",s,{passive:!0}),document[t]("scrollend",u)):(r.value?.[t]("scroll",s,{passive:!0}),r.value?.[t]("scrollend",u))}t.onMounted((()=>{r.value=Ct(o.vnode.el,!0),e(!0)})),t.onScopeDispose(e)})),At((()=>{const a=f.value.map((a=>t.createVNode(ai,{key:a.index,renderless:e.renderless,"onUpdate:height":e=>c(a.index,e)},{default:e=>l.default?.({item:a.raw,index:a.index,...e})})))
return e.renderless?t.createVNode(t.Fragment,null,[t.createVNode("div",{ref:i,class:"v-virtual-scroll__spacer",style:{paddingTop:h(v.value)}},null),a,t.createVNode("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:h(p.value)}},null)]):t.createVNode("div",{ref:r,class:["v-virtual-scroll",e.class],onScrollPassive:s,onScrollend:u,style:[n.value,e.style]},[t.createVNode("div",{ref:i,class:"v-virtual-scroll__container",style:{paddingTop:h(v.value),paddingBottom:h(p.value)}},[a])])})),{scrollToIndex:d}}})
function ii(e,a){const l=t.shallowRef(!1)
let o
return{onListScroll:function(e){cancelAnimationFrame(o),l.value=!0,o=requestAnimationFrame((()=>{o=requestAnimationFrame((()=>{l.value=!1}))}))},onListKeydown:async function(o){if("Tab"===o.key&&a.value?.focus(),!["PageDown","PageUp","Home","End"].includes(o.key))return
const n=e.value?.$el
if(!n)return
"Home"!==o.key&&"End"!==o.key||n.scrollTo({top:"Home"===o.key?0:n.scrollHeight,behavior:"smooth"}),await async function(){await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>{if(l.value){const a=t.watch(l,(()=>{a(),e()}))}else e()}))}()
const r=n.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)")
if("PageDown"===o.key||"Home"===o.key){const e=n.getBoundingClientRect().top
for(const t of r)if(t.getBoundingClientRect().top>=e){t.focus()
break}}else{const e=n.getBoundingClientRect().bottom
for(const t of[...r].reverse())if(t.getBoundingClientRect().bottom<=e){t.focus()
break}}}}}const si=a({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,menu:Boolean,menuIcon:{type:Pl,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...Mn({itemChildren:!1})},"Select"),ui=a({...si(),...C(Qr({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ja({transition:{component:ya}})},"VSelect"),ci=gt()({name:"VSelect",props:ui(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:l}=a
const{t:n}=Jt(),r=t.ref(),i=t.ref(),s=t.ref(),u=Ht(e,"menu"),c=t.computed({get:()=>u.value,set:e=>{u.value&&!e&&i.value?.ΨopenChildren||(u.value=e)}}),{items:d,transformIn:v,transformOut:p}=zn(e),f=Ht(e,"modelValue",[],(e=>v(null===e?[null]:T(e))),(t=>{const a=p(t)
return e.multiple?a:a[0]??null})),m=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(f.value):"number"==typeof e.counterValue?e.counterValue:f.value.length)),g=Zo(),h=t.computed((()=>f.value.map((e=>e.value)))),y=t.shallowRef(!1),b=t.computed((()=>c.value?e.closeText:e.openText))
let V,S=""
const w=t.computed((()=>e.hideSelected?d.value.filter((e=>!f.value.some((t=>t===e)))):d.value)),k=t.computed((()=>e.hideNoData&&!d.value.length||e.readonly||g?.isReadonly.value)),x=t.computed((()=>({...e.menuProps,activatorProps:{...e.menuProps?.activatorProps||{},"aria-haspopup":"listbox"}}))),N=t.ref(),{onListScroll:C,onListKeydown:_}=ii(N,r)
function I(t){e.openOnClear&&(c.value=!0)}function P(){k.value||(c.value=!c.value)}function B(t){if(!t.key||e.readonly||g?.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(t.key)&&t.preventDefault(),["Enter","ArrowDown"," "].includes(t.key)&&(c.value=!0),["Escape","Tab"].includes(t.key)&&(c.value=!1),"Home"===t.key?N.value?.focus("first"):"End"===t.key&&N.value?.focus("last")
if(e.multiple||!function(e){const t=1===e.key.length,a=!e.ctrlKey&&!e.metaKey&&!e.altKey
return t&&a}(t))return
const a=performance.now()
a-V>1e3&&(S=""),S+=t.key.toLowerCase(),V=a
const l=d.value.find((e=>e.title.toLowerCase().startsWith(S)))
void 0!==l&&(f.value=[l])}function A(t){if(e.multiple){const a=f.value.findIndex((a=>e.valueComparator(a.value,t.value)))
if(-1===a)f.value=[...f.value,t]
else{const e=[...f.value]
e.splice(a,1),f.value=e}}else f.value=[t],c.value=!1}function R(e){N.value?.$el.contains(e.relatedTarget)||(c.value=!1)}function E(){y.value&&r.value?.focus()}function D(e){y.value=!0}function F(e){if(null==e)f.value=[]
else if(le(r.value,":autofill")||le(r.value,":-webkit-autofill")){const t=d.value.find((t=>t.title===e))
t&&A(t)}else r.value&&(r.value.value="")}return t.watch(c,(()=>{if(!e.hideSelected&&c.value&&f.value.length){const t=w.value.findIndex((t=>f.value.some((a=>e.valueComparator(a.value,t.value)))))
o&&window.requestAnimationFrame((()=>{t>=0&&s.value?.scrollToIndex(t)}))}})),At((()=>{const a=!(!e.chips&&!l.chip),o=!!(!e.hideNoData||w.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),u=f.value.length>0,d=ei.filterProps(e),v=u||!y.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder
return t.createVNode(ei,t.mergeProps({ref:r},d,{modelValue:f.value.map((e=>e.props.value)).join(", "),"onUpdate:modelValue":F,focused:y.value,"onUpdate:focused":e=>y.value=e,validationValue:f.externalValue,counterValue:m.value,dirty:u,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,["v-select--"+(e.multiple?"multiple":"single")]:!0,"v-select--selected":f.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:v,"onClick:clear":I,"onMousedown:control":P,onBlur:R,onKeydown:B,"aria-label":n(b.value),title:n(b.value)}),{...l,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(Hr,t.mergeProps({ref:i,modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,activator:"parent",contentClass:"v-select__content",disabled:k.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:E},x.value),{default:()=>[o&&t.createVNode(Un,{ref:N,selected:h.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:_,onFocusin:D,onScrollPassive:C,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[l["prepend-item"]?.(),!w.value.length&&!e.hideNoData&&(l["no-data"]?.()??t.createVNode(An,{title:n(e.noDataText)},null)),t.createVNode(ri,{ref:s,renderless:!0,items:w.value},{default:a=>{let{item:o,index:n,itemRef:r}=a
const i=t.mergeProps(o.props,{ref:r,key:n,onClick:()=>A(o)})
return l.item?.({item:o,index:n,props:i})??t.createVNode(An,t.mergeProps(i,{role:"option"}),{prepend:a=>{let{isSelected:l}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(Ho,{key:o.value,modelValue:l,ripple:!1,tabindex:"-1"},null):void 0,o.props.prependIcon&&t.createVNode(jl,{icon:o.props.prependIcon},null)])}})}}),l["append-item"]?.()]})]}),f.value.map(((o,n)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),A(o)},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=a?!!l.chip:!!l.selection,s=i?oe(a?l.chip({item:o,index:n,props:r}):l.selection({item:o,index:n})):void 0
if(!i||s)return t.createVNode("div",{key:o.value,class:"v-select__selection"},[a?l.chip?t.createVNode($a,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[s]}):t.createVNode(dn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},r),null):s??t.createVNode("span",{class:"v-select__selection-text"},[o.title,e.multiple&&n<f.value.length-1&&t.createVNode("span",{class:"v-select__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,o=new Array(a),n=0;n<a;n++)o[n]=arguments[n]
return t.createVNode(t.Fragment,null,[l["append-inner"]?.(...o),e.menuIcon?t.createVNode(jl,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})})),zr({isFocused:y,menu:c,select:A},r)}}),di=(e,t,a)=>null==e||null==t?-1:e.toString().toLocaleLowerCase().indexOf(t.toString().toLocaleLowerCase()),vi=a({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter")
function pi(e,a,l,o){const n=t.ref([]),r=t.ref(new Map),i=t.computed((()=>o?.transform?t.unref(a).map((e=>[e,o.transform(e)])):t.unref(a)))
return t.watchEffect((()=>{const s="function"==typeof l?l():t.unref(l),u="string"!=typeof s&&"number"!=typeof s?"":String(s),c=function(e,t,a){const l=[],o=a?.default??di,n=!!a?.filterKeys&&T(a.filterKeys),r=Object.keys(a?.customKeyFilter??{}).length
if(!e?.length)return l
e:for(let i=0;i<e.length;i++){const[s,u=s]=T(e[i]),c={},d={}
let v=-1
if(t&&!a?.noFilter){if("object"==typeof s){const e=n||Object.keys(u)
for(const l of e){const e=m(u,l,u),n=a?.customKeyFilter?.[l]
if(v=n?n(e,t,s):o(e,t,s),-1!==v&&!1!==v)n?c[l]=v:d[l]=v
else if("every"===a?.filterMode)continue e}}else v=o(s,t,s),-1!==v&&!1!==v&&(d.title=v)
const e=Object.keys(d).length,l=Object.keys(c).length
if(!e&&!l)continue
if("union"===a?.filterMode&&l!==r&&!e)continue
if("intersection"===a?.filterMode&&(l!==r||!e))continue}l.push({index:i,matches:{...d,...c}})}return l}(i.value,u,{customKeyFilter:{...e.customKeyFilter,...t.unref(o?.customKeyFilter)},default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}),d=t.unref(a),v=[],p=new Map
c.forEach((e=>{let{index:t,matches:a}=e
const l=d[t]
v.push(l),p.set(l.value,a)})),n.value=v,r.value=p})),{filteredItems:n,filteredMatches:r,getMatches:function(e){return r.value.get(e.value)}}}const fi=a({autoSelectFirst:{type:[Boolean,String]},search:String,...vi({filterKeys:["title"]}),...si(),...C(Qr({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ja({transition:!1})},"VAutocomplete"),mi=gt()({name:"VAutocomplete",props:fi(),emits:{"update:focused":e=>!0,"update:search":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,a){let{slots:l}=a
const{t:n}=Jt(),r=t.ref(),i=t.shallowRef(!1),s=t.shallowRef(!0),u=t.shallowRef(!1),c=t.ref(),d=t.ref(),v=Ht(e,"menu"),p=t.computed({get:()=>v.value,set:e=>{v.value&&!e&&c.value?.ΨopenChildren||(v.value=e)}}),f=t.shallowRef(-1),m=t.computed((()=>r.value?.color)),g=t.computed((()=>p.value?e.closeText:e.openText)),{items:h,transformIn:y,transformOut:b}=zn(e),{textColorClasses:V,textColorStyles:S}=Za(m),w=Ht(e,"search",""),k=Ht(e,"modelValue",[],(e=>y(null===e?[null]:T(e))),(t=>{const a=b(t)
return e.multiple?a:a[0]??null})),x=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(k.value):"number"==typeof e.counterValue?e.counterValue:k.value.length)),N=Zo(),{filteredItems:C,getMatches:_}=pi(e,h,(()=>s.value?"":w.value)),I=t.computed((()=>e.hideSelected?C.value.filter((e=>!k.value.some((t=>t.value===e.value)))):C.value)),P=t.computed((()=>k.value.map((e=>e.props.value)))),B=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&w.value===I.value[0]?.title)&&I.value.length>0&&!s.value&&!u.value)),A=t.computed((()=>e.hideNoData&&!h.value.length||e.readonly||N?.isReadonly.value)),R=t.ref(),{onListScroll:E,onListKeydown:D}=ii(R,r)
function F(t){e.openOnClear&&(p.value=!0),w.value=""}function $(){A.value||(p.value=!0)}function M(e){A.value||(i.value&&(e.preventDefault(),e.stopPropagation()),p.value=!p.value)}function L(t){if(e.readonly||N?.isReadonly.value)return
const a=r.value.selectionStart,l=k.value.length
if((f.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(p.value=!0),["Escape"].includes(t.key)&&(p.value=!1),B.value&&["Enter","Tab"].includes(t.key)&&Y(I.value[0]),"ArrowDown"===t.key&&B.value&&R.value?.focus("next"),e.multiple){if(["Backspace","Delete"].includes(t.key)){if(f.value<0)return void("Backspace"!==t.key||w.value||(f.value=l-1))
const e=f.value,a=k.value[f.value]
a&&!a.props.disabled&&Y(a),f.value=e>=l-1?l-2:e}if("ArrowLeft"===t.key){if(f.value<0&&a>0)return
const e=f.value>-1?f.value-1:l-1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(w.value?.length,w.value?.length))}if("ArrowRight"===t.key){if(f.value<0)return
const e=f.value+1
k.value[e]?f.value=e:(f.value=-1,r.value.setSelectionRange(0,0))}}}function O(e){if(le(r.value,":autofill")||le(r.value,":-webkit-autofill")){const t=h.value.find((t=>t.title===e.target.value))
t&&Y(t)}}function z(){i.value&&(s.value=!0,r.value?.focus())}function j(e){i.value=!0,setTimeout((()=>{u.value=!0}))}function H(e){u.value=!1}function W(t){(null==t||""===t&&!e.multiple)&&(k.value=[])}const U=t.shallowRef(!1)
function Y(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(!a.props.disabled)if(e.multiple){const t=k.value.findIndex((t=>e.valueComparator(t.value,a.value)))
if(-1===t)k.value=[...k.value,a]
else{const e=[...k.value]
e.splice(t,1),k.value=e}}else k.value=l?[a]:[],U.value=!0,w.value=l?a.title:"",p.value=!1,s.value=!0,t.nextTick((()=>U.value=!1))}return t.watch(i,((a,l)=>{a!==l&&(a?(U.value=!0,w.value=e.multiple?"":String(k.value.at(-1)?.props.title??""),s.value=!0,t.nextTick((()=>U.value=!1))):(e.multiple||null!=w.value?!B.value||u.value||k.value.some((e=>{let{value:t}=e
return t===I.value[0].value}))||Y(I.value[0]):k.value=[],p.value=!1,w.value="",f.value=-1))})),t.watch(w,(e=>{i.value&&!U.value&&(e&&(p.value=!0),s.value=!e)})),t.watch(p,(()=>{if(!e.hideSelected&&p.value&&k.value.length){const e=I.value.findIndex((e=>k.value.some((t=>e.value===t.value))))
o&&window.requestAnimationFrame((()=>{e>=0&&d.value?.scrollToIndex(e)}))}})),At((()=>{const a=!(!e.chips&&!l.chip),o=!!(!e.hideNoData||I.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),u=k.value.length>0,v=ei.filterProps(e)
return t.createVNode(ei,t.mergeProps({ref:r},v,{modelValue:w.value,"onUpdate:modelValue":[e=>w.value=e,W],focused:i.value,"onUpdate:focused":e=>i.value=e,validationValue:k.externalValue,counterValue:x.value,dirty:u,onChange:O,class:["v-autocomplete","v-autocomplete--"+(e.multiple?"multiple":"single"),{"v-autocomplete--active-menu":p.value,"v-autocomplete--chips":!!e.chips,"v-autocomplete--selection-slot":!!l.selection,"v-autocomplete--selecting-index":f.value>-1},e.class],style:e.style,readonly:e.readonly,placeholder:u?void 0:e.placeholder,"onClick:clear":F,"onMousedown:control":$,onKeydown:L}),{...l,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(Hr,t.mergeProps({ref:c,modelValue:p.value,"onUpdate:modelValue":e=>p.value=e,activator:"parent",contentClass:"v-autocomplete__content",disabled:A.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:z},e.menuProps),{default:()=>[o&&t.createVNode(Un,{ref:R,selected:P.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:D,onFocusin:j,onFocusout:H,onScrollPassive:E,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[l["prepend-item"]?.(),!I.value.length&&!e.hideNoData&&(l["no-data"]?.()??t.createVNode(An,{title:n(e.noDataText)},null)),t.createVNode(ri,{ref:d,renderless:!0,items:I.value},{default:a=>{let{item:o,index:n,itemRef:r}=a
const i=t.mergeProps(o.props,{ref:r,key:n,active:!(!B.value||0!==n)||void 0,onClick:()=>Y(o)})
return l.item?.({item:o,index:n,props:i})??t.createVNode(An,i,{prepend:a=>{let{isSelected:l}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(Ho,{key:o.value,modelValue:l,ripple:!1,tabindex:"-1"},null):void 0,o.props.prependIcon&&t.createVNode(jl,{icon:o.props.prependIcon},null)])},title:()=>s.value?o.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-autocomplete__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-autocomplete__unmask"},[e.substr(a+l)])]):e}(o.title,_(o)?.title,w.value?.length??0)})}}),l["append-item"]?.()]})]}),k.value.map(((o,n)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),Y(o,!1)},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=a?!!l.chip:!!l.selection,s=i?oe(a?l.chip({item:o,index:n,props:r}):l.selection({item:o,index:n})):void 0
if(!i||s)return t.createVNode("div",{key:o.value,class:["v-autocomplete__selection",n===f.value&&["v-autocomplete__selection--selected",V.value]],style:n===f.value?S.value:{}},[a?l.chip?t.createVNode($a,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[s]}):t.createVNode(dn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:o.title,disabled:o.props.disabled},r),null):s??t.createVNode("span",{class:"v-autocomplete__selection-text"},[o.title,e.multiple&&n<k.value.length-1&&t.createVNode("span",{class:"v-autocomplete__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r]
return t.createVNode(t.Fragment,null,[l["append-inner"]?.(...o),e.menuIcon?t.createVNode(jl,{class:"v-autocomplete__menu-icon",icon:e.menuIcon,onMousedown:M,onClick:ae,"aria-label":n(g.value),title:n(g.value)},null):void 0])}})})),zr({isFocused:i,isPristine:s,menu:p,search:w,filteredItems:C,select:Y},r)}}),gi=a({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Pl,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...l(),...Gl({location:"top end"}),...tl(),...ca(),...aa(),...ja({transition:"scale-rotate-transition"})},"VBadge"),hi=gt()({name:"VBadge",inheritAttrs:!1,props:gi(),setup(e,a){const{backgroundColorClasses:l,backgroundColorStyles:o}=Ja(t.toRef(e,"color")),{roundedClasses:n}=al(e),{t:r}=Jt(),{textColorClasses:i,textColorStyles:s}=Za(t.toRef(e,"textColor")),{themeClasses:u}=na(),{locationStyles:c}=ql(e,!0,(t=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(t)?+(e.offsetY??0):["left","right"].includes(t)?+(e.offsetX??0):0)))
return At((()=>{const d=Number(e.content),v=!e.max||isNaN(d)?e.content:d<=+e.max?d:`${e.max}+`,[p,f]=N(a.attrs,["aria-atomic","aria-label","aria-live","role","title"])
return t.createVNode(e.tag,t.mergeProps({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},f,{style:e.style}),{default:()=>[t.createVNode("div",{class:"v-badge__wrapper"},[a.slots.default?.(),t.createVNode(Ha,{transition:e.transition},{default:()=>[t.withDirectives(t.createVNode("span",t.mergeProps({class:["v-badge__badge",u.value,l.value,n.value,i.value],style:[o.value,s.value,e.inline?{}:c.value],"aria-atomic":"true","aria-label":r(e.label,d),"aria-live":"polite",role:"status"},p),[e.dot?void 0:a.slots.badge?a.slots.badge?.():e.icon?t.createVNode(jl,{icon:e.icon},null):v]),[[t.vShow,e.modelValue]])]})])]})})),{}}}),yi=a({color:String,density:String,...l()},"VBannerActions"),bi=gt()({name:"VBannerActions",props:yi(),setup(e,a){let{slots:l}=a
return vt({VBtn:{color:e.color,density:e.density,slim:!0,variant:"text"}}),At((()=>t.createVNode("div",{class:["v-banner-actions",e.class],style:e.style},[l.default?.()]))),{}}}),Vi=ht("v-banner-text"),Si=a({avatar:String,bgColor:String,color:String,icon:Pl,lines:String,stacked:Boolean,sticky:Boolean,text:String,...qa(),...l(),...dl(),...Ma(),...kr(),...Qa(),...Gl(),...to(),...tl(),...ca(),...aa()},"VBanner"),wi=gt()({name:"VBanner",props:Si(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ja(e,"bgColor"),{borderClasses:r}=Ka(e),{densityClasses:i}=vl(e),{displayClasses:s,mobile:u}=xr(e),{dimensionStyles:c}=La(e),{elevationClasses:d}=el(e),{locationStyles:v}=ql(e),{positionClasses:p}=ao(e),{roundedClasses:f}=al(e),{themeClasses:m}=oa(e),g=t.toRef(e,"color"),h=t.toRef(e,"density")
vt({VBannerActions:{color:g,density:h}}),At((()=>{const a=!(!e.text&&!l.text),y=!(!e.avatar&&!e.icon),b=!(!y&&!l.prepend)
return t.createVNode(e.tag,{class:["v-banner",{"v-banner--stacked":e.stacked||u.value,"v-banner--sticky":e.sticky,[`v-banner--${e.lines}-line`]:!!e.lines},m.value,o.value,r.value,i.value,s.value,d.value,p.value,f.value,e.class],style:[n.value,c.value,v.value,e.style],role:"banner"},{default:()=>[b&&t.createVNode("div",{key:"prepend",class:"v-banner__prepend"},[l.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!y,defaults:{VAvatar:{color:g.value,density:h.value,icon:e.icon,image:e.avatar}}},l.prepend):t.createVNode(nn,{key:"prepend-avatar",color:g.value,density:h.value,icon:e.icon,image:e.avatar},null)]),t.createVNode("div",{class:"v-banner__content"},[a&&t.createVNode(Vi,{key:"text"},{default:()=>[l.text?.()??e.text]}),l.default?.()]),l.actions&&t.createVNode(bi,{key:"actions"},l.actions)]})}))}}),ki=a({bgColor:String,color:String,grow:Boolean,mode:{type:String,validator:e=>!e||["horizontal","shift"].includes(e)},height:{type:[Number,String],default:56},active:{type:Boolean,default:!0},...qa(),...l(),...dl(),...Qa(),...tl(),...Ft({name:"bottom-navigation"}),...ca({tag:"header"}),...bl({modelValue:!0,selectedClass:"v-btn--selected"}),...aa()},"VBottomNavigation"),xi=gt()({name:"VBottomNavigation",props:ki(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=na(),{borderClasses:n}=Ka(e),{backgroundColorClasses:r,backgroundColorStyles:i}=Ja(t.toRef(e,"bgColor")),{densityClasses:s}=vl(e),{elevationClasses:u}=el(e),{roundedClasses:c}=al(e),{ssrBootStyles:d}=il(),v=t.computed((()=>Number(e.height)-("comfortable"===e.density?8:0)-("compact"===e.density?16:0))),p=t.toRef(e,"active"),{layoutItemStyles:f}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:t.computed((()=>p.value?v.value:0)),elementSize:v,active:p,absolute:t.toRef(e,"absolute")})
return wl(e,xl),vt({VBtn:{color:t.toRef(e,"color"),density:t.toRef(e,"density"),stacked:t.computed((()=>"horizontal"!==e.mode)),variant:"text"}},{scoped:!0}),At((()=>t.createVNode(e.tag,{class:["v-bottom-navigation",{"v-bottom-navigation--active":p.value,"v-bottom-navigation--grow":e.grow,"v-bottom-navigation--shift":"shift"===e.mode},o.value,r.value,n.value,s.value,u.value,c.value,e.class],style:[i.value,f.value,{height:h(v.value),transform:`translateY(${h(p.value?0:100,"%")})`},d.value,e.style]},{default:()=>[l.default&&t.createVNode("div",{class:"v-bottom-navigation__content"},[l.default()])]}))),{}}}),Ni=a({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...$r({origin:"center center",scrollStrategy:"block",transition:{component:ya},zIndex:2400})},"VDialog"),Ci=gt()({name:"VDialog",props:Ni(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const n=Ht(e,"modelValue"),{scopeId:r}=Ir(),i=t.ref()
function s(e){const t=e.relatedTarget,a=e.target
if(t!==a&&i.value?.contentEl&&i.value?.globalTop&&![document,i.value.contentEl].includes(a)&&!i.value.contentEl.contains(a)){const e=J(i.value.contentEl)
if(!e.length)return
const a=e[0],l=e[e.length-1]
t===a?l.focus():a.focus()}}o&&t.watch((()=>n.value&&e.retainFocus),(e=>{e?document.addEventListener("focusin",s):document.removeEventListener("focusin",s)}),{immediate:!0}),t.watch(n,(async e=>{await t.nextTick(),e?i.value.contentEl?.focus({preventScroll:!0}):i.value.activatorEl?.focus({preventScroll:!0})}))
const u=t.computed((()=>t.mergeProps({"aria-haspopup":"dialog","aria-expanded":String(n.value)},e.activatorProps)))
return At((()=>{const a=Mr.filterProps(e)
return t.createVNode(Mr,t.mergeProps({ref:i,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-modal":"true",activatorProps:u.value,role:"dialog"},r),{activator:l.activator,default:function(){for(var e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o]
return t.createVNode($a,{root:"VDialog"},{default:()=>[l.default?.(...a)]})}})})),zr({},i)}}),_i=a({inset:Boolean,...Ni({transition:"bottom-sheet-transition"})},"VBottomSheet"),Ii=gt()({name:"VBottomSheet",props:_i(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue")
return At((()=>{const a=Ci.filterProps(e)
return t.createVNode(Ci,t.mergeProps(a,{contentClass:["v-bottom-sheet__content",e.contentClass],modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-bottom-sheet",{"v-bottom-sheet--inset":e.inset},e.class],style:e.style}),l)})),{}}}),Pi=a({divider:[Number,String],...l()},"VBreadcrumbsDivider"),Bi=gt()({name:"VBreadcrumbsDivider",props:Pi(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode("li",{class:["v-breadcrumbs-divider",e.class],style:e.style},[l?.default?.()??e.divider]))),{}}}),Ai=a({active:Boolean,activeClass:String,activeColor:String,color:String,disabled:Boolean,title:String,...l(),...no(),...ca({tag:"li"})},"VBreadcrumbsItem"),Ri=gt()({name:"VBreadcrumbsItem",props:Ai(),setup(e,a){let{slots:l,attrs:o}=a
const n=oo(e,o),r=t.computed((()=>e.active||n.isActive?.value)),i=t.computed((()=>r.value?e.activeColor:e.color)),{textColorClasses:s,textColorStyles:u}=Za(i)
return At((()=>t.createVNode(e.tag,{class:["v-breadcrumbs-item",{"v-breadcrumbs-item--active":r.value,"v-breadcrumbs-item--disabled":e.disabled,[`${e.activeClass}`]:r.value&&e.activeClass},s.value,e.class],style:[u.value,e.style],"aria-current":r.value?"page":void 0},{default:()=>[n.isLink.value?t.createVNode("a",{class:"v-breadcrumbs-item--link",href:n.href.value,"aria-current":r.value?"page":void 0,onClick:n.navigate},[l.default?.()??e.title]):l.default?.()??e.title]}))),{}}}),Ti=a({activeClass:String,activeColor:String,bgColor:String,color:String,disabled:Boolean,divider:{type:String,default:"/"},icon:Pl,items:{type:Array,default:()=>[]},...l(),...dl(),...tl(),...ca({tag:"ul"})},"VBreadcrumbs"),Ei=gt()({name:"VBreadcrumbs",props:Ti(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ja(t.toRef(e,"bgColor")),{densityClasses:r}=vl(e),{roundedClasses:i}=al(e)
vt({VBreadcrumbsDivider:{divider:t.toRef(e,"divider")},VBreadcrumbsItem:{activeClass:t.toRef(e,"activeClass"),activeColor:t.toRef(e,"activeColor"),color:t.toRef(e,"color"),disabled:t.toRef(e,"disabled")}})
const s=t.computed((()=>e.items.map((e=>"string"==typeof e?{item:{title:e},raw:e}:{item:e,raw:e}))))
return At((()=>{const a=!(!l.prepend&&!e.icon)
return t.createVNode(e.tag,{class:["v-breadcrumbs",o.value,r.value,i.value,e.class],style:[n.value,e.style]},{default:()=>[a&&t.createVNode("li",{key:"prepend",class:"v-breadcrumbs__prepend"},[l.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!e.icon,defaults:{VIcon:{icon:e.icon,start:!0}}},l.prepend):t.createVNode(jl,{key:"prepend-icon",start:!0,icon:e.icon},null)]),s.value.map(((e,a,o)=>{let{item:n,raw:r}=e
return t.createVNode(t.Fragment,null,[l.item?.({item:n,index:a})??t.createVNode(Ri,t.mergeProps({key:a,disabled:a>=o.length-1},"string"==typeof n?{title:n}:n),{default:l.title?()=>l.title?.({item:n,index:a}):void 0}),a<o.length-1&&t.createVNode(Bi,null,{default:l.divider?()=>l.divider?.({item:r,index:a}):void 0})])})),l.default?.()]})})),{}}}),Di=gt()({name:"VCardActions",props:l(),setup(e,a){let{slots:l}=a
return vt({VBtn:{slim:!0,variant:"text"}}),At((()=>t.createVNode("div",{class:["v-card-actions",e.class],style:e.style},[l.default?.()]))),{}}}),Fi=ht("v-card-subtitle"),$i=ht("v-card-title"),Mi=a({appendAvatar:String,appendIcon:Pl,prependAvatar:String,prependIcon:Pl,subtitle:[String,Number],title:[String,Number],...l(),...dl()},"VCardItem"),Li=gt()({name:"VCardItem",props:Mi(),setup(e,a){let{slots:l}=a
return At((()=>{const a=!(!e.prependAvatar&&!e.prependIcon),o=!(!a&&!l.prepend),n=!(!e.appendAvatar&&!e.appendIcon),r=!(!n&&!l.append),i=!(null==e.title&&!l.title),s=!(null==e.subtitle&&!l.subtitle)
return t.createVNode("div",{class:["v-card-item",e.class],style:e.style},[o&&t.createVNode("div",{key:"prepend",class:"v-card-item__prepend"},[l.prepend?t.createVNode($a,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},l.prepend):a&&t.createVNode(nn,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t.createVNode("div",{class:"v-card-item__content"},[i&&t.createVNode($i,{key:"title"},{default:()=>[l.title?.()??e.title]}),s&&t.createVNode(Fi,{key:"subtitle"},{default:()=>[l.subtitle?.()??e.subtitle]}),l.default?.()]),r&&t.createVNode("div",{key:"append",class:"v-card-item__append"},[l.append?t.createVNode($a,{key:"append-defaults",disabled:!n,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},l.append):n&&t.createVNode(nn,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])})),{}}}),Oi=ht("v-card-text"),zi=a({appendAvatar:String,appendIcon:Pl,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:Pl,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...qa(),...l(),...dl(),...Ma(),...Qa(),...Zl(),...Gl(),...to(),...tl(),...no(),...ca(),...aa(),...ml({variant:"elevated"})},"VCard"),ji=gt()({name:"VCard",directives:{Ripple:xo},props:zi(),setup(e,a){let{attrs:l,slots:o}=a
const{themeClasses:n}=oa(e),{borderClasses:r}=Ka(e),{colorClasses:i,colorStyles:s,variantClasses:u}=gl(e),{densityClasses:c}=vl(e),{dimensionStyles:d}=La(e),{elevationClasses:v}=el(e),{loaderClasses:p}=Jl(e),{locationStyles:f}=ql(e),{positionClasses:m}=ao(e),{roundedClasses:g}=al(e),h=oo(e,l),y=t.computed((()=>!1!==e.link&&h.isLink.value)),b=t.computed((()=>!e.disabled&&!1!==e.link&&(e.link||h.isClickable.value)))
return At((()=>{const a=y.value?"a":e.tag,l=!(!o.title&&null==e.title),V=!(!o.subtitle&&null==e.subtitle),S=l||V,w=!!(o.append||e.appendAvatar||e.appendIcon),k=!!(o.prepend||e.prependAvatar||e.prependIcon),x=!(!o.image&&!e.image),N=S||k||w,C=!(!o.text&&null==e.text)
return t.withDirectives(t.createVNode(a,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":b.value},n.value,r.value,i.value,c.value,v.value,p.value,m.value,g.value,u.value,e.class],style:[s.value,d.value,f.value,e.style],href:h.href.value,onClick:b.value&&h.navigate,tabindex:e.disabled?-1:void 0},{default:()=>[x&&t.createVNode("div",{key:"image",class:"v-card__image"},[o.image?t.createVNode($a,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},o.image):t.createVNode(Ga,{key:"image-img",cover:!0,src:e.image},null)]),t.createVNode(Ql,{name:"v-card",active:!!e.loading,color:"boolean"==typeof e.loading?void 0:e.loading},{default:o.loader}),N&&t.createVNode(Li,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:o.item,prepend:o.prepend,title:o.title,subtitle:o.subtitle,append:o.append}),C&&t.createVNode(Oi,{key:"text"},{default:()=>[o.text?.()??e.text]}),o.default?.(),o.actions&&t.createVNode(Di,null,{default:o.actions}),fl(b.value,"v-card")]}),[[t.resolveDirective("ripple"),b.value&&e.ripple]])})),{}}})
function Hi(e,t){const a=e.changedTouches[0]
t.touchstartX=a.clientX,t.touchstartY=a.clientY,t.start?.({originalEvent:e,...t})}function Wi(e,t){const a=e.changedTouches[0]
t.touchendX=a.clientX,t.touchendY=a.clientY,t.end?.({originalEvent:e,...t}),(e=>{const{touchstartX:t,touchendX:a,touchstartY:l,touchendY:o}=e
e.offsetX=a-t,e.offsetY=o-l,Math.abs(e.offsetY)<.5*Math.abs(e.offsetX)&&(e.left&&a<t-16&&e.left(e),e.right&&a>t+16&&e.right(e)),Math.abs(e.offsetX)<.5*Math.abs(e.offsetY)&&(e.up&&o<l-16&&e.up(e),e.down&&o>l+16&&e.down(e))})(t)}function Ui(e,t){const a=e.changedTouches[0]
t.touchmoveX=a.clientX,t.touchmoveY=a.clientY,t.move?.({originalEvent:e,...t})}const Yi={mounted:function(e,t){const a=t.value,l=a?.parent?e.parentElement:e,o=a?.options??{passive:!0},n=t.instance?.$.uid
if(!l||!n)return
const r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end}
return{touchstart:e=>Hi(e,t),touchend:e=>Wi(e,t),touchmove:e=>Ui(e,t)}}(t.value)
l._touchHandlers=l._touchHandlers??Object.create(null),l._touchHandlers[n]=r,w(r).forEach((e=>{l.addEventListener(e,r[e],o)}))},unmounted:function(e,t){const a=t.value?.parent?e.parentElement:e,l=t.instance?.$.uid
if(!a?._touchHandlers||!l)return
const o=a._touchHandlers[l]
w(o).forEach((e=>{a.removeEventListener(e,o[e])})),delete a._touchHandlers[l]}},Gi=Symbol.for("vuetify:v-window"),qi=Symbol.for("vuetify:v-window-group"),Ki=a({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||"hover"===e},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...l(),...ca(),...aa()},"VWindow"),Xi=gt()({name:"VWindow",directives:{Touch:Yi},props:Ki(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{isRtl:n}=ea(),{t:r}=Jt(),i=wl(e,qi),s=t.ref(),u=t.computed((()=>n.value?!e.reverse:e.reverse)),c=t.shallowRef(!1),d=t.computed((()=>`v-window-${"vertical"===e.direction?"y":"x"}${(u.value?!c.value:c.value)?"-reverse":""}-transition`)),v=t.shallowRef(0),p=t.ref(void 0),f=t.computed((()=>i.items.value.findIndex((e=>i.selected.value.includes(e.id)))))
t.watch(f,((e,t)=>{const a=i.items.value.length,l=a-1
c.value=a<=2?e<t:e===l&&0===t||(0!==e||t!==l)&&e<t})),t.provide(Gi,{transition:d,isReversed:c,transitionCount:v,transitionHeight:p,rootRef:s})
const m=t.computed((()=>e.continuous||0!==f.value)),g=t.computed((()=>e.continuous||f.value!==i.items.value.length-1))
function h(){m.value&&i.prev()}function y(){g.value&&i.next()}const b=t.computed((()=>{const a=[],o={icon:n.value?e.nextIcon:e.prevIcon,class:"v-window__"+(u.value?"right":"left"),onClick:i.prev,ariaLabel:r("$vuetify.carousel.prev")}
a.push(m.value?l.prev?l.prev({props:o}):t.createVNode(Co,o,null):t.createVNode("div",null,null))
const s={icon:n.value?e.prevIcon:e.nextIcon,class:"v-window__"+(u.value?"left":"right"),onClick:i.next,ariaLabel:r("$vuetify.carousel.next")}
return a.push(g.value?l.next?l.next({props:s}):t.createVNode(Co,s,null):t.createVNode("div",null,null)),a})),V=t.computed((()=>{if(!1===e.touch)return e.touch
return{...{left:()=>{u.value?h():y()},right:()=>{u.value?y():h()},start:e=>{let{originalEvent:t}=e
t.stopPropagation()}},...!0===e.touch?{}:e.touch}}))
return At((()=>t.withDirectives(t.createVNode(e.tag,{ref:s,class:["v-window",{"v-window--show-arrows-on-hover":"hover"===e.showArrows},o.value,e.class],style:e.style},{default:()=>[t.createVNode("div",{class:"v-window__container",style:{height:p.value}},[l.default?.({group:i}),!1!==e.showArrows&&t.createVNode("div",{class:"v-window__controls"},[b.value])]),l.additional?.({group:i})]}),[[t.resolveDirective("touch"),V.value]]))),{group:i}}}),Zi=a({color:String,cycle:Boolean,delimiterIcon:{type:Pl,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...Ki({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Ji=gt()({name:"VCarousel",props:Zi(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),{t:n}=Jt(),r=t.ref()
let i=-1
function s(){e.cycle&&r.value&&(i=window.setTimeout(r.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(i),window.requestAnimationFrame(s)}return t.watch(o,u),t.watch((()=>e.interval),u),t.watch((()=>e.cycle),(e=>{e?u():window.clearTimeout(i)})),t.onMounted(s),At((()=>{const a=Xi.filterProps(e)
return t.createVNode(Xi,t.mergeProps({ref:r},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:h(e.height)},e.style]}),{default:l.default,additional:a=>{let{group:r}=a
return t.createVNode(t.Fragment,null,[!e.hideDelimiters&&t.createVNode("div",{class:"v-carousel__controls",style:{left:"left"===e.verticalDelimiters&&e.verticalDelimiters?0:"auto",right:"right"===e.verticalDelimiters?0:"auto"}},[r.items.value.length>0&&t.createVNode($a,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[r.items.value.map(((e,a)=>{const o={id:`carousel-item-${e.id}`,"aria-label":n("$vuetify.carousel.ariaLabel.delimiter",a+1,r.items.value.length),class:["v-carousel__controls__item",r.isSelected(e.id)&&"v-btn--active"],onClick:()=>r.select(e.id,!0)}
return l.item?l.item({props:o,item:e}):t.createVNode(Co,t.mergeProps(e,o),null)}))]})]),e.progress&&t.createVNode(Xl,{class:"v-carousel__progress",color:"string"==typeof e.progress?e.progress:void 0,modelValue:(r.getItemIndex(o.value)+1)/r.items.value.length*100},null)])},prev:l.prev,next:l.next})})),{}}}),Qi=a({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...l(),...Vl(),...Cr()},"VWindowItem"),es=gt()({name:"VWindowItem",directives:{Touch:Yi},props:Qi(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(Gi),n=Sl(e,qi),{isBooted:r}=il()
if(!o||!n)throw new Error("[Vuetify] VWindowItem must be used inside VWindow")
const i=t.shallowRef(!1),s=t.computed((()=>r.value&&(o.isReversed.value?!1!==e.reverseTransition:!1!==e.transition)))
function u(){i.value&&o&&(i.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,0===o.transitionCount.value&&(o.transitionHeight.value=void 0)))}function c(){!i.value&&o&&(i.value=!0,0===o.transitionCount.value&&(o.transitionHeight.value=h(o.rootRef.value?.clientHeight)),o.transitionCount.value+=1)}function d(){u()}function v(e){i.value&&t.nextTick((()=>{s.value&&i.value&&o&&(o.transitionHeight.value=h(e.clientHeight))}))}const p=t.computed((()=>{const t=o.isReversed.value?e.reverseTransition:e.transition
return!!s.value&&{name:"string"!=typeof t?o.transition.value:t,onBeforeEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:c,onAfterLeave:u,onLeaveCancelled:d,onEnter:v}})),{hasContent:f}=_r(e,n.isSelected)
return At((()=>t.createVNode(Ha,{transition:p.value,disabled:!r.value},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-window-item",n.selectedClass.value,e.class],style:e.style},[f.value&&l.default?.()]),[[t.vShow,n.isSelected.value]])]}))),{groupItem:n}}}),ts=a({...Ya(),...Qi()},"VCarouselItem"),as=gt()({name:"VCarouselItem",inheritAttrs:!1,props:ts(),setup(e,a){let{slots:l,attrs:o}=a
At((()=>{const a=Ga.filterProps(e),n=es.filterProps(e)
return t.createVNode(es,t.mergeProps({class:"v-carousel-item"},n),{default:()=>[t.createVNode(Ga,t.mergeProps(o,a),l)]})}))}}),ls=ht("v-code"),os=mt({name:"VColorPickerCanvas",props:a({color:{type:Object},disabled:Boolean,dotSize:{type:[Number,String],default:10},height:{type:[Number,String],default:150},width:{type:[Number,String],default:300},...l()},"VColorPickerCanvas")(),emits:{"update:color":e=>!0,"update:position":e=>!0},setup(e,a){let{emit:l}=a
const o=t.shallowRef(!1),n=t.ref(),r=t.shallowRef(parseFloat(e.width)),i=t.shallowRef(parseFloat(e.height)),s=t.ref({x:0,y:0}),u=t.computed({get:()=>s.value,set(t){if(!n.value)return
const{x:a,y:o}=t
s.value=t,l("update:color",{h:e.color?.h??0,s:E(a,0,r.value)/r.value,v:1-E(o,0,i.value)/i.value,a:e.color?.a??1})}}),c=t.computed((()=>{const{x:t,y:a}=u.value,l=parseInt(e.dotSize,10)/2
return{width:h(e.dotSize),height:h(e.dotSize),transform:`translate(${h(t-l)}, ${h(a-l)})`}})),{resizeRef:d}=Rt((e=>{if(!d.value?.offsetParent)return
const{width:t,height:a}=e[0].contentRect
r.value=t,i.value=a}))
function v(t){"mousedown"===t.type&&t.preventDefault(),e.disabled||(p(t),window.addEventListener("mousemove",p),window.addEventListener("mouseup",f),window.addEventListener("touchmove",p),window.addEventListener("touchend",f))}function p(t){if(e.disabled||!n.value)return
o.value=!0
const a=function(e){return"touches"in e?{clientX:e.touches[0].clientX,clientY:e.touches[0].clientY}:{clientX:e.clientX,clientY:e.clientY}}(t)
!function(e,t,a){const{left:l,top:o,width:n,height:r}=a
u.value={x:E(e-l,0,n),y:E(t-o,0,r)}}(a.clientX,a.clientY,n.value.getBoundingClientRect())}function f(){window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",f),window.removeEventListener("touchmove",p),window.removeEventListener("touchend",f)}function m(){if(!n.value)return
const t=n.value,a=t.getContext("2d")
if(!a)return
const l=a.createLinearGradient(0,0,t.width,0)
l.addColorStop(0,"hsla(0, 0%, 100%, 1)"),l.addColorStop(1,`hsla(${e.color?.h??0}, 100%, 50%, 1)`),a.fillStyle=l,a.fillRect(0,0,t.width,t.height)
const o=a.createLinearGradient(0,0,0,t.height)
o.addColorStop(0,"hsla(0, 0%, 100%, 0)"),o.addColorStop(1,"hsla(0, 0%, 0%, 1)"),a.fillStyle=o,a.fillRect(0,0,t.width,t.height)}return t.watch((()=>e.color?.h),m,{immediate:!0}),t.watch((()=>[r.value,i.value]),((e,t)=>{m(),s.value={x:u.value.x*e[0]/t[0],y:u.value.y*e[1]/t[1]}}),{flush:"post"}),t.watch((()=>e.color),(()=>{o.value?o.value=!1:s.value=e.color?{x:e.color.s*r.value,y:(1-e.color.v)*i.value}:{x:0,y:0}}),{deep:!0,immediate:!0}),t.onMounted((()=>m())),At((()=>t.createVNode("div",{ref:d,class:["v-color-picker-canvas",e.class],style:e.style,onMousedown:v,onTouchstartPassive:v},[t.createVNode("canvas",{ref:n,width:r.value,height:i.value},null),e.color&&t.createVNode("div",{class:["v-color-picker-canvas__dot",{"v-color-picker-canvas__dot--disabled":e.disabled}],style:c.value},null)]))),{}}})
const ns={h:0,s:0,v:1,a:1},rs={inputProps:{type:"number",min:0},inputs:[{label:"R",max:255,step:1,getValue:e=>Math.round(e.r),getColor:(e,t)=>({...e,r:Number(t)})},{label:"G",max:255,step:1,getValue:e=>Math.round(e.g),getColor:(e,t)=>({...e,g:Number(t)})},{label:"B",max:255,step:1,getValue:e=>Math.round(e.b),getColor:(e,t)=>({...e,b:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Ye,from:qe},is={inputProps:{type:"number",min:0},inputs:[{label:"H",max:360,step:1,getValue:e=>Math.round(e.h),getColor:(e,t)=>({...e,h:Number(t)})},{label:"S",max:1,step:.01,getValue:e=>Math.round(100*e.s)/100,getColor:(e,t)=>({...e,s:Number(t)})},{label:"L",max:1,step:.01,getValue:e=>Math.round(100*e.l)/100,getColor:(e,t)=>({...e,l:Number(t)})},{label:"A",max:1,step:.01,getValue:e=>{let{a:t}=e
return null!=t?Math.round(100*t)/100:1},getColor:(e,t)=>({...e,a:Number(t)})}],to:Ke,from:Xe},ss={inputProps:{type:"text"},inputs:[{label:"HEXA",getValue:e=>e,getColor:(e,t)=>t}],to:lt,from:at},us={rgb:{...rs,inputs:rs.inputs?.slice(0,3)},rgba:rs,hsl:{...is,inputs:is.inputs.slice(0,3)},hsla:is,hex:{...ss,inputs:[{label:"HEX",getValue:e=>e.slice(0,7),getColor:(e,t)=>t}]},hexa:ss},cs=e=>{let{label:a,...l}=e
return t.createVNode("div",{class:"v-color-picker-edit__input"},[t.createVNode("input",l,null),t.createVNode("span",null,[a])])},ds=mt({name:"VColorPickerEdit",props:a({color:Object,disabled:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(us).includes(e)},modes:{type:Array,default:()=>Object.keys(us),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(us).includes(e)))},...l()},"VColorPickerEdit")(),emits:{"update:color":e=>!0,"update:mode":e=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>e.modes.map((e=>({...us[e],name:e}))))),n=t.computed((()=>{const t=o.value.find((t=>t.name===e.mode))
if(!t)return[]
const a=e.color?t.to(e.color):null
return t.inputs?.map((o=>{let{getValue:n,getColor:r,...i}=o
return{...t.inputProps,...i,disabled:e.disabled,value:a&&n(a),onChange:e=>{const o=e.target
o&&l("update:color",t.from(r(a??ns,o.value)))}}}))}))
return At((()=>t.createVNode("div",{class:["v-color-picker-edit",e.class],style:e.style},[n.value?.map((e=>t.createVNode(cs,e,null))),o.value.length>1&&t.createVNode(Co,{icon:"$unfold",size:"x-small",variant:"plain",onClick:()=>{const t=o.value.findIndex((t=>t.name===e.mode))
l("update:mode",o.value[(t+1)%o.value.length].name)}},null)]))),{}}}),vs=Symbol.for("vuetify:v-slider")
function ps(e,t,a){const l="vertical"===a,o=t.getBoundingClientRect(),n="touches"in e?e.touches[0]:e
return l?n.clientY-(o.top+o.height/2):n.clientX-(o.left+o.width/2)}const fs=a({disabled:{type:Boolean,default:null},error:Boolean,readonly:{type:Boolean,default:null},max:{type:[Number,String],default:100},min:{type:[Number,String],default:0},step:{type:[Number,String],default:0},thumbColor:String,thumbLabel:{type:[Boolean,String],default:void 0,validator:e=>"boolean"==typeof e||"always"===e},thumbSize:{type:[Number,String],default:20},showTicks:{type:[Boolean,String],default:!1,validator:e=>"boolean"==typeof e||"always"===e},ticks:{type:[Array,Object]},tickSize:{type:[Number,String],default:2},color:String,trackColor:String,trackFillColor:String,trackSize:{type:[Number,String],default:4},direction:{type:String,default:"horizontal",validator:e=>["vertical","horizontal"].includes(e)},reverse:Boolean,...tl(),...Qa({elevation:2}),ripple:{type:Boolean,default:!0}},"Slider"),ms=e=>{const a=t.computed((()=>parseFloat(e.min))),l=t.computed((()=>parseFloat(e.max))),o=t.computed((()=>+e.step>0?parseFloat(e.step):0)),n=t.computed((()=>Math.max(D(o.value),D(a.value))))
return{min:a,max:l,step:o,decimals:n,roundValue:function(e){if(e=parseFloat(e),o.value<=0)return e
const t=E(e,a.value,l.value),r=a.value%o.value,i=Math.round((t-r)/o.value)*o.value+r
return parseFloat(Math.min(i,l.value).toFixed(n.value))}}},gs=e=>{let{props:a,steps:l,onSliderStart:o,onSliderMove:n,onSliderEnd:r,getActiveThumb:i}=e
const{isRtl:s}=ea(),u=t.toRef(a,"reverse"),c=t.computed((()=>"vertical"===a.direction)),d=t.computed((()=>c.value!==u.value)),{min:v,max:p,step:f,decimals:m,roundValue:h}=l,y=t.computed((()=>parseInt(a.thumbSize,10))),b=t.computed((()=>parseInt(a.tickSize,10))),V=t.computed((()=>parseInt(a.trackSize,10))),S=t.computed((()=>(p.value-v.value)/f.value)),w=t.toRef(a,"disabled"),k=t.computed((()=>a.error||a.disabled?void 0:a.thumbColor??a.color)),x=t.computed((()=>a.error||a.disabled?void 0:a.trackColor??a.color)),N=t.computed((()=>a.error||a.disabled?void 0:a.trackFillColor??a.color)),C=t.shallowRef(!1),_=t.shallowRef(0),I=t.ref(),P=t.ref()
function B(e){const t="vertical"===a.direction,l=t?"top":"left",o=t?"height":"width",n=t?"clientY":"clientX",{[l]:r,[o]:i}=I.value?.$el.getBoundingClientRect(),u=function(e,t){return"touches"in e&&e.touches.length?e.touches[0][t]:"changedTouches"in e&&e.changedTouches.length?e.changedTouches[0][t]:e[t]}(e,n)
let c=Math.min(Math.max((u-r-_.value)/i,0),1)||0
return(t?d.value:d.value!==s.value)&&(c=1-c),h(v.value+c*(p.value-v.value))}const A=e=>{r({value:B(e)}),C.value=!1,_.value=0},R=e=>{P.value=i(e),P.value&&(P.value.focus(),C.value=!0,P.value.contains(e.target)?_.value=ps(e,P.value,a.direction):(_.value=0,n({value:B(e)})),o({value:B(e)}))},T={passive:!0,capture:!0}
function D(e){n({value:B(e)})}function F(e){e.stopPropagation(),e.preventDefault(),A(e),window.removeEventListener("mousemove",D,T),window.removeEventListener("mouseup",F)}function $(e){A(e),window.removeEventListener("touchmove",D,T),e.target?.removeEventListener("touchend",$)}const M=e=>{const t=(e-v.value)/(p.value-v.value)*100
return E(isNaN(t)?0:t,0,100)},L=t.toRef(a,"showTicks"),O=t.computed((()=>L.value?a.ticks?Array.isArray(a.ticks)?a.ticks.map((e=>({value:e,position:M(e),label:e.toString()}))):Object.keys(a.ticks).map((e=>({value:parseFloat(e),position:M(parseFloat(e)),label:a.ticks[e]}))):S.value!==1/0?g(S.value+1).map((e=>{const t=v.value+e*f.value
return{value:t,position:M(t)}})):[]:[])),z=t.computed((()=>O.value.some((e=>{let{label:t}=e
return!!t})))),j={activeThumbRef:P,color:t.toRef(a,"color"),decimals:m,disabled:w,direction:t.toRef(a,"direction"),elevation:t.toRef(a,"elevation"),hasLabels:z,isReversed:u,indexFromEnd:d,min:v,max:p,mousePressed:C,numTicks:S,onSliderMousedown:function(e){e.preventDefault(),R(e),window.addEventListener("mousemove",D,T),window.addEventListener("mouseup",F,{passive:!1})},onSliderTouchstart:function(e){R(e),window.addEventListener("touchmove",D,T),e.target?.addEventListener("touchend",$,{passive:!1})},parsedTicks:O,parseMouseMove:B,position:M,readonly:t.toRef(a,"readonly"),rounded:t.toRef(a,"rounded"),roundValue:h,showTicks:L,startOffset:_,step:f,thumbSize:y,thumbColor:k,thumbLabel:t.toRef(a,"thumbLabel"),ticks:t.toRef(a,"ticks"),tickSize:b,trackColor:x,trackContainerRef:I,trackFillColor:N,trackSize:V,vertical:c}
return t.provide(vs,j),j},hs=a({focused:Boolean,max:{type:Number,required:!0},min:{type:Number,required:!0},modelValue:{type:Number,required:!0},position:{type:Number,required:!0},ripple:{type:[Boolean,Object],default:!0},...l()},"VSliderThumb"),ys=gt()({name:"VSliderThumb",directives:{Ripple:xo},props:hs(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.inject(vs),{isRtl:r,rtlClasses:i}=ea()
if(!n)throw new Error("[Vuetify] v-slider-thumb must be used inside v-slider or v-range-slider")
const{thumbColor:s,step:u,disabled:c,thumbSize:d,thumbLabel:v,direction:p,isReversed:f,vertical:m,readonly:g,elevation:y,mousePressed:b,decimals:V,indexFromEnd:w}=n,{textColorClasses:k,textColorStyles:x}=Za(s),{pageup:N,pagedown:C,end:_,home:I,left:P,right:B,down:A,up:R}=S,T=[N,C,_,I,P,B,A,R],E=t.computed((()=>u.value?[1,2,3]:[1,5,10]))
function D(t){const a=function(t,a){if(!T.includes(t.key))return
t.preventDefault()
const l=u.value||.1,o=(e.max-e.min)/l
if([P,B,A,R].includes(t.key)){const e=(m.value?[r.value?P:B,f.value?A:R]:w.value!==r.value?[P,R]:[B,R]).includes(t.key)?1:-1,o=t.shiftKey?2:t.ctrlKey?1:0
a+=e*l*E.value[o]}else t.key===I?a=e.min:t.key===_?a=e.max:a-=(t.key===C?1:-1)*l*(o>100?o/10:10)
return Math.max(e.min,Math.min(e.max,a))}(t,e.modelValue)
null!=a&&o("update:modelValue",a)}return At((()=>{const a=h(w.value?100-e.position:e.position,"%"),{elevationClasses:o}=el(t.computed((()=>c.value?void 0:y.value)))
return t.createVNode("div",{class:["v-slider-thumb",{"v-slider-thumb--focused":e.focused,"v-slider-thumb--pressed":e.focused&&b.value},e.class,i.value],style:[{"--v-slider-thumb-position":a,"--v-slider-thumb-size":h(d.value)},e.style],role:"slider",tabindex:c.value?-1:0,"aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":e.modelValue,"aria-readonly":!!g.value,"aria-orientation":p.value,onKeydown:g.value?void 0:D},[t.createVNode("div",{class:["v-slider-thumb__surface",k.value,o.value],style:{...x.value}},null),t.withDirectives(t.createVNode("div",{class:["v-slider-thumb__ripple",k.value],style:x.value},null),[[t.resolveDirective("ripple"),e.ripple,null,{circle:!0,center:!0}]]),t.createVNode(Na,{origin:"bottom center"},{default:()=>[t.withDirectives(t.createVNode("div",{class:"v-slider-thumb__label-container"},[t.createVNode("div",{class:["v-slider-thumb__label"]},[t.createVNode("div",null,[l["thumb-label"]?.({modelValue:e.modelValue})??e.modelValue.toFixed(u.value?V.value:1)])])]),[[t.vShow,v.value&&e.focused||"always"===v.value]])]})])})),{}}}),bs=a({start:{type:Number,required:!0},stop:{type:Number,required:!0},...l()},"VSliderTrack"),Vs=gt()({name:"VSliderTrack",props:bs(),emits:{},setup(e,a){let{slots:l}=a
const o=t.inject(vs)
if(!o)throw new Error("[Vuetify] v-slider-track must be inside v-slider or v-range-slider")
const{color:n,parsedTicks:r,rounded:i,showTicks:s,tickSize:u,trackColor:c,trackFillColor:d,trackSize:v,vertical:p,min:f,max:m,indexFromEnd:g}=o,{roundedClasses:y}=al(i),{backgroundColorClasses:b,backgroundColorStyles:V}=Ja(d),{backgroundColorClasses:S,backgroundColorStyles:w}=Ja(c),k=t.computed((()=>`inset-${p.value?"block":"inline"}-${g.value?"end":"start"}`)),x=t.computed((()=>p.value?"height":"width")),N=t.computed((()=>({[k.value]:"0%",[x.value]:"100%"}))),C=t.computed((()=>e.stop-e.start)),_=t.computed((()=>({[k.value]:h(e.start,"%"),[x.value]:h(C.value,"%")}))),I=t.computed((()=>{if(!s.value)return[]
return(p.value?r.value.slice().reverse():r.value).map(((a,o)=>{const n=a.value!==f.value&&a.value!==m.value?h(a.position,"%"):void 0
return t.createVNode("div",{key:a.value,class:["v-slider-track__tick",{"v-slider-track__tick--filled":a.position>=e.start&&a.position<=e.stop,"v-slider-track__tick--first":a.value===f.value,"v-slider-track__tick--last":a.value===m.value}],style:{[k.value]:n}},[(a.label||l["tick-label"])&&t.createVNode("div",{class:"v-slider-track__tick-label"},[l["tick-label"]?.({tick:a,index:o})??a.label])])}))}))
return At((()=>t.createVNode("div",{class:["v-slider-track",y.value,e.class],style:[{"--v-slider-track-size":h(v.value),"--v-slider-tick-size":h(u.value)},e.style]},[t.createVNode("div",{class:["v-slider-track__background",S.value,{"v-slider-track__background--opacity":!!n.value||!d.value}],style:{...N.value,...w.value}},null),t.createVNode("div",{class:["v-slider-track__fill",b.value],style:{..._.value,...V.value}},null),s.value&&t.createVNode("div",{class:["v-slider-track__ticks",{"v-slider-track__ticks--always-show":"always"===s.value}]},[I.value])]))),{}}}),Ss=a({...Go(),...fs(),...en(),modelValue:{type:[Number,String],default:0}},"VSlider"),ws=gt()({name:"VSlider",props:Ss(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,start:e=>!0,end:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),{rtlClasses:r}=ea(),i=ms(e),s=Ht(e,"modelValue",void 0,(e=>i.roundValue(null==e?i.min.value:e))),{min:u,max:c,mousePressed:d,roundValue:v,onSliderMousedown:p,onSliderTouchstart:f,trackContainerRef:m,position:g,hasLabels:h,readonly:y}=gs({props:e,steps:i,onSliderStart:()=>{o("start",s.value)},onSliderEnd:e=>{let{value:t}=e
const a=v(t)
s.value=a,o("end",a)},onSliderMove:e=>{let{value:t}=e
return s.value=v(t)},getActiveThumb:()=>n.value?.$el}),{isFocused:b,focus:V,blur:S}=qo(e),w=t.computed((()=>g(s.value)))
return At((()=>{const a=tn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(tn,t.mergeProps({class:["v-slider",{"v-slider--has-labels":!!l["tick-label"]||h.value,"v-slider--focused":b.value,"v-slider--pressed":d.value,"v-slider--disabled":e.disabled},r.value,e.class],style:e.style},a,{focused:b.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Do,{id:a.id.value,class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:r}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:y.value?void 0:p,onTouchstartPassive:y.value?void 0:f},[t.createVNode("input",{id:o.value,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:s.value},null),t.createVNode(Vs,{ref:m,start:0,stop:w.value},{"tick-label":l["tick-label"]}),t.createVNode(ys,{ref:n,"aria-describedby":r.value,focused:b.value,min:u.value,max:c.value,modelValue:s.value,"onUpdate:modelValue":e=>s.value=e,position:w.value,elevation:e.elevation,onFocus:V,onBlur:S,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})})),{}}}),ks=mt({name:"VColorPickerPreview",props:a({color:{type:Object},disabled:Boolean,hideAlpha:Boolean,...l()},"VColorPickerPreview")(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
const o=new AbortController
async function n(){if(!i)return
const t=new window.EyeDropper
try{const a=at((await t.open({signal:o.signal})).sRGBHex)
l("update:color",{...e.color??ns,...a})}catch(e){}}return t.onUnmounted((()=>o.abort())),At((()=>t.createVNode("div",{class:["v-color-picker-preview",{"v-color-picker-preview--hide-alpha":e.hideAlpha},e.class],style:e.style},[i&&t.createVNode("div",{class:"v-color-picker-preview__eye-dropper",key:"eyeDropper"},[t.createVNode(Co,{onClick:n,icon:"$eyeDropper",variant:"plain",density:"comfortable"},null)]),t.createVNode("div",{class:"v-color-picker-preview__dot"},[t.createVNode("div",{style:{background:Je(e.color??ns)}},null)]),t.createVNode("div",{class:"v-color-picker-preview__sliders"},[t.createVNode(ws,{class:"v-color-picker-preview__track v-color-picker-preview__hue",modelValue:e.color?.h,"onUpdate:modelValue":t=>l("update:color",{...e.color??ns,h:t}),step:0,min:0,max:360,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null),!e.hideAlpha&&t.createVNode(ws,{class:"v-color-picker-preview__track v-color-picker-preview__alpha",modelValue:e.color?.a??1,"onUpdate:modelValue":t=>l("update:color",{...e.color??ns,a:t}),step:1/256,min:0,max:1,disabled:e.disabled,thumbSize:14,trackSize:8,trackFillColor:"white",hideDetails:!0},null)])]))),{}}})
var xs={red:{base:"#f44336",lighten5:"#ffebee",lighten4:"#ffcdd2",lighten3:"#ef9a9a",lighten2:"#e57373",lighten1:"#ef5350",darken1:"#e53935",darken2:"#d32f2f",darken3:"#c62828",darken4:"#b71c1c",accent1:"#ff8a80",accent2:"#ff5252",accent3:"#ff1744",accent4:"#d50000"},pink:{base:"#e91e63",lighten5:"#fce4ec",lighten4:"#f8bbd0",lighten3:"#f48fb1",lighten2:"#f06292",lighten1:"#ec407a",darken1:"#d81b60",darken2:"#c2185b",darken3:"#ad1457",darken4:"#880e4f",accent1:"#ff80ab",accent2:"#ff4081",accent3:"#f50057",accent4:"#c51162"},purple:{base:"#9c27b0",lighten5:"#f3e5f5",lighten4:"#e1bee7",lighten3:"#ce93d8",lighten2:"#ba68c8",lighten1:"#ab47bc",darken1:"#8e24aa",darken2:"#7b1fa2",darken3:"#6a1b9a",darken4:"#4a148c",accent1:"#ea80fc",accent2:"#e040fb",accent3:"#d500f9",accent4:"#aa00ff"},deepPurple:{base:"#673ab7",lighten5:"#ede7f6",lighten4:"#d1c4e9",lighten3:"#b39ddb",lighten2:"#9575cd",lighten1:"#7e57c2",darken1:"#5e35b1",darken2:"#512da8",darken3:"#4527a0",darken4:"#311b92",accent1:"#b388ff",accent2:"#7c4dff",accent3:"#651fff",accent4:"#6200ea"},indigo:{base:"#3f51b5",lighten5:"#e8eaf6",lighten4:"#c5cae9",lighten3:"#9fa8da",lighten2:"#7986cb",lighten1:"#5c6bc0",darken1:"#3949ab",darken2:"#303f9f",darken3:"#283593",darken4:"#1a237e",accent1:"#8c9eff",accent2:"#536dfe",accent3:"#3d5afe",accent4:"#304ffe"},blue:{base:"#2196f3",lighten5:"#e3f2fd",lighten4:"#bbdefb",lighten3:"#90caf9",lighten2:"#64b5f6",lighten1:"#42a5f5",darken1:"#1e88e5",darken2:"#1976d2",darken3:"#1565c0",darken4:"#0d47a1",accent1:"#82b1ff",accent2:"#448aff",accent3:"#2979ff",accent4:"#2962ff"},lightBlue:{base:"#03a9f4",lighten5:"#e1f5fe",lighten4:"#b3e5fc",lighten3:"#81d4fa",lighten2:"#4fc3f7",lighten1:"#29b6f6",darken1:"#039be5",darken2:"#0288d1",darken3:"#0277bd",darken4:"#01579b",accent1:"#80d8ff",accent2:"#40c4ff",accent3:"#00b0ff",accent4:"#0091ea"},cyan:{base:"#00bcd4",lighten5:"#e0f7fa",lighten4:"#b2ebf2",lighten3:"#80deea",lighten2:"#4dd0e1",lighten1:"#26c6da",darken1:"#00acc1",darken2:"#0097a7",darken3:"#00838f",darken4:"#006064",accent1:"#84ffff",accent2:"#18ffff",accent3:"#00e5ff",accent4:"#00b8d4"},teal:{base:"#009688",lighten5:"#e0f2f1",lighten4:"#b2dfdb",lighten3:"#80cbc4",lighten2:"#4db6ac",lighten1:"#26a69a",darken1:"#00897b",darken2:"#00796b",darken3:"#00695c",darken4:"#004d40",accent1:"#a7ffeb",accent2:"#64ffda",accent3:"#1de9b6",accent4:"#00bfa5"},green:{base:"#4caf50",lighten5:"#e8f5e9",lighten4:"#c8e6c9",lighten3:"#a5d6a7",lighten2:"#81c784",lighten1:"#66bb6a",darken1:"#43a047",darken2:"#388e3c",darken3:"#2e7d32",darken4:"#1b5e20",accent1:"#b9f6ca",accent2:"#69f0ae",accent3:"#00e676",accent4:"#00c853"},lightGreen:{base:"#8bc34a",lighten5:"#f1f8e9",lighten4:"#dcedc8",lighten3:"#c5e1a5",lighten2:"#aed581",lighten1:"#9ccc65",darken1:"#7cb342",darken2:"#689f38",darken3:"#558b2f",darken4:"#33691e",accent1:"#ccff90",accent2:"#b2ff59",accent3:"#76ff03",accent4:"#64dd17"},lime:{base:"#cddc39",lighten5:"#f9fbe7",lighten4:"#f0f4c3",lighten3:"#e6ee9c",lighten2:"#dce775",lighten1:"#d4e157",darken1:"#c0ca33",darken2:"#afb42b",darken3:"#9e9d24",darken4:"#827717",accent1:"#f4ff81",accent2:"#eeff41",accent3:"#c6ff00",accent4:"#aeea00"},yellow:{base:"#ffeb3b",lighten5:"#fffde7",lighten4:"#fff9c4",lighten3:"#fff59d",lighten2:"#fff176",lighten1:"#ffee58",darken1:"#fdd835",darken2:"#fbc02d",darken3:"#f9a825",darken4:"#f57f17",accent1:"#ffff8d",accent2:"#ffff00",accent3:"#ffea00",accent4:"#ffd600"},amber:{base:"#ffc107",lighten5:"#fff8e1",lighten4:"#ffecb3",lighten3:"#ffe082",lighten2:"#ffd54f",lighten1:"#ffca28",darken1:"#ffb300",darken2:"#ffa000",darken3:"#ff8f00",darken4:"#ff6f00",accent1:"#ffe57f",accent2:"#ffd740",accent3:"#ffc400",accent4:"#ffab00"},orange:{base:"#ff9800",lighten5:"#fff3e0",lighten4:"#ffe0b2",lighten3:"#ffcc80",lighten2:"#ffb74d",lighten1:"#ffa726",darken1:"#fb8c00",darken2:"#f57c00",darken3:"#ef6c00",darken4:"#e65100",accent1:"#ffd180",accent2:"#ffab40",accent3:"#ff9100",accent4:"#ff6d00"},deepOrange:{base:"#ff5722",lighten5:"#fbe9e7",lighten4:"#ffccbc",lighten3:"#ffab91",lighten2:"#ff8a65",lighten1:"#ff7043",darken1:"#f4511e",darken2:"#e64a19",darken3:"#d84315",darken4:"#bf360c",accent1:"#ff9e80",accent2:"#ff6e40",accent3:"#ff3d00",accent4:"#dd2c00"},brown:{base:"#795548",lighten5:"#efebe9",lighten4:"#d7ccc8",lighten3:"#bcaaa4",lighten2:"#a1887f",lighten1:"#8d6e63",darken1:"#6d4c41",darken2:"#5d4037",darken3:"#4e342e",darken4:"#3e2723"},blueGrey:{base:"#607d8b",lighten5:"#eceff1",lighten4:"#cfd8dc",lighten3:"#b0bec5",lighten2:"#90a4ae",lighten1:"#78909c",darken1:"#546e7a",darken2:"#455a64",darken3:"#37474f",darken4:"#263238"},grey:{base:"#9e9e9e",lighten5:"#fafafa",lighten4:"#f5f5f5",lighten3:"#eeeeee",lighten2:"#e0e0e0",lighten1:"#bdbdbd",darken1:"#757575",darken2:"#616161",darken3:"#424242",darken4:"#212121"},shades:{black:"#000000",white:"#ffffff",transparent:"#ffffff00"}}
const Ns=mt({name:"VColorPickerSwatches",props:a({swatches:{type:Array,default:()=>function(e){return Object.keys(e).map((t=>{const a=e[t]
return a.base?[a.base,a.darken4,a.darken3,a.darken2,a.darken1,a.lighten1,a.lighten2,a.lighten3,a.lighten4,a.lighten5]:[a.black,a.white,a.transparent]}))}(xs)},disabled:Boolean,color:Object,maxHeight:[Number,String],...l()},"VColorPickerSwatches")(),emits:{"update:color":e=>!0},setup(e,a){let{emit:l}=a
return At((()=>t.createVNode("div",{class:["v-color-picker-swatches",e.class],style:[{maxHeight:h(e.maxHeight)},e.style]},[t.createVNode("div",null,[e.swatches.map((a=>t.createVNode("div",{class:"v-color-picker-swatches__swatch"},[a.map((a=>{const o=Ue(a),n=qe(o),r=Ze(o)
return t.createVNode("div",{class:"v-color-picker-swatches__color",onClick:()=>n&&l("update:color",n)},[t.createVNode("div",{style:{background:r}},[e.color&&p(e.color,n)?t.createVNode(jl,{size:"x-small",icon:"$success",color:it(a,"#FFFFFF")>2?"white":"black"},null):void 0])])}))])))])]))),{}}}),Cs=a({color:String,...qa(),...l(),...Ma(),...Qa(),...Gl(),...to(),...tl(),...ca(),...aa()},"VSheet"),_s=gt()({name:"VSheet",props:Cs(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(t.toRef(e,"color")),{borderClasses:i}=Ka(e),{dimensionStyles:s}=La(e),{elevationClasses:u}=el(e),{locationStyles:c}=ql(e),{positionClasses:d}=ao(e),{roundedClasses:v}=al(e)
return At((()=>t.createVNode(e.tag,{class:["v-sheet",o.value,n.value,i.value,u.value,d.value,v.value,e.class],style:[r.value,s.value,c.value,e.style]},l))),{}}}),Is=mt({name:"VColorPicker",props:a({canvasHeight:{type:[String,Number],default:150},disabled:Boolean,dotSize:{type:[Number,String],default:10},hideCanvas:Boolean,hideSliders:Boolean,hideInputs:Boolean,mode:{type:String,default:"rgba",validator:e=>Object.keys(us).includes(e)},modes:{type:Array,default:()=>Object.keys(us),validator:e=>Array.isArray(e)&&e.every((e=>Object.keys(us).includes(e)))},showSwatches:Boolean,swatches:Array,swatchesMaxHeight:{type:[Number,String],default:150},modelValue:{type:[Object,String]},...C(Cs({width:300}),["height","location","minHeight","maxHeight","minWidth","maxWidth"])},"VColorPicker")(),emits:{"update:modelValue":e=>!0,"update:mode":e=>!0},setup(e){const a=Ht(e,"mode"),l=t.ref(null),o=Ht(e,"modelValue",void 0,(e=>{if(null==e||""===e)return null
let t
try{t=qe(Ue(e))}catch(e){return Pe(e),null}return l.value&&(t={...t,h:l.value.h},l.value=null),t}),(t=>t?function(e,t){if(null==t||"string"==typeof t){const t=lt(e)
return 1===e.a?t.slice(0,7):t}if("object"==typeof t){let a
return k(t,["r","g","b"])?a=Ye(e):k(t,["h","s","l"])?a=Ke(e):k(t,["h","s","v"])&&(a=e),function(e,t){if(t){const{a:t,...a}=e
return a}return e}(a,!k(t,["a"])&&1===e.a)}return e}(t,e.modelValue):null)),{rtlClasses:n}=ea(),r=e=>{o.value=e,l.value=e}
return t.onMounted((()=>{e.modes.includes(a.value)||(a.value=e.modes[0])})),vt({VSlider:{color:void 0,trackColor:void 0,trackFillColor:void 0}}),At((()=>{const l=_s.filterProps(e)
return t.createVNode(_s,t.mergeProps({rounded:e.rounded,elevation:e.elevation,theme:e.theme,class:["v-color-picker",n.value,e.class],style:[{"--v-color-picker-color-hsv":Je({...o.value??ns,a:1})},e.style]},l,{maxWidth:e.width}),{default:()=>[!e.hideCanvas&&t.createVNode(os,{key:"canvas",color:o.value,"onUpdate:color":r,disabled:e.disabled,dotSize:e.dotSize,width:e.width,height:e.canvasHeight},null),(!e.hideSliders||!e.hideInputs)&&t.createVNode("div",{key:"controls",class:"v-color-picker__controls"},[!e.hideSliders&&t.createVNode(ks,{key:"preview",color:o.value,"onUpdate:color":r,hideAlpha:!a.value.endsWith("a"),disabled:e.disabled},null),!e.hideInputs&&t.createVNode(ds,{key:"edit",modes:e.modes,mode:a.value,"onUpdate:mode":e=>a.value=e,color:o.value,"onUpdate:color":r,disabled:e.disabled},null)]),e.showSwatches&&t.createVNode(Ns,{key:"swatches",color:o.value,"onUpdate:color":r,maxHeight:e.swatchesMaxHeight,swatches:e.swatches,disabled:e.disabled},null)]})})),{}}})
const Ps=a({autoSelectFirst:{type:[Boolean,String]},delimiters:Array,...vi({filterKeys:["title"]}),...si({hideNoData:!0,returnObject:!0}),...C(Qr({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...ja({transition:!1})},"VCombobox"),Bs=gt()({name:"VCombobox",props:Ps(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,a){let{emit:l,slots:n}=a
const{t:r}=Jt(),i=t.ref(),s=t.shallowRef(!1),u=t.shallowRef(!0),c=t.shallowRef(!1),d=t.ref(),v=t.ref(),p=Ht(e,"menu"),f=t.computed({get:()=>p.value,set:e=>{p.value&&!e&&d.value?.ΨopenChildren||(p.value=e)}}),m=t.shallowRef(-1)
let g=!1
const h=t.computed((()=>i.value?.color)),y=t.computed((()=>f.value?e.closeText:e.openText)),{items:b,transformIn:V,transformOut:S}=zn(e),{textColorClasses:w,textColorStyles:k}=Za(h),x=Ht(e,"modelValue",[],(e=>V(T(e))),(t=>{const a=S(t)
return e.multiple?a:a[0]??null})),N=Zo(),C=t.shallowRef(e.multiple?"":x.value[0]?.title??""),_=t.computed({get:()=>C.value,set:t=>{if(C.value=t??"",e.multiple||(x.value=[Ln(e,t)]),t&&e.multiple&&e.delimiters?.length){const a=t.split(new RegExp(`(?:${e.delimiters.join("|")})+`))
a.length>1&&(a.forEach((t=>{(t=t.trim())&&U(Ln(e,t))})),C.value="")}t||(m.value=-1),u.value=!t}}),I=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(x.value):"number"==typeof e.counterValue?e.counterValue:e.multiple?x.value.length:_.value.length))
t.watch(C,(e=>{g?t.nextTick((()=>g=!1)):s.value&&!f.value&&(f.value=!0),l("update:search",e)})),t.watch(x,(t=>{e.multiple||(C.value=t[0]?.title??"")}))
const{filteredItems:P,getMatches:B}=pi(e,b,(()=>u.value?"":_.value)),R=t.computed((()=>e.hideSelected?P.value.filter((e=>!x.value.some((t=>t.value===e.value)))):P.value)),E=t.computed((()=>x.value.map((e=>e.value)))),D=t.computed((()=>(!0===e.autoSelectFirst||"exact"===e.autoSelectFirst&&_.value===R.value[0]?.title)&&R.value.length>0&&!u.value&&!c.value)),F=t.computed((()=>e.hideNoData&&!b.value.length||e.readonly||N?.isReadonly.value)),$=t.ref(),{onListScroll:M,onListKeydown:L}=ii($,i)
function O(t){g=!0,e.openOnClear&&(f.value=!0)}function z(){F.value||(f.value=!0)}function j(e){F.value||(s.value&&(e.preventDefault(),e.stopPropagation()),f.value=!f.value)}function H(t){if(function(e){return e.isComposing&&A.includes(e.key)}(t)||e.readonly||N?.isReadonly.value)return
const a=i.value.selectionStart,l=x.value.length
if((m.value>-1||["Enter","ArrowDown","ArrowUp"].includes(t.key))&&t.preventDefault(),["Enter","ArrowDown"].includes(t.key)&&(f.value=!0),["Escape"].includes(t.key)&&(f.value=!1),["Enter","Escape","Tab"].includes(t.key)&&(D.value&&["Enter","Tab"].includes(t.key)&&U(P.value[0]),u.value=!0),"ArrowDown"===t.key&&D.value&&$.value?.focus("next"),e.multiple){if(["Backspace","Delete"].includes(t.key)){if(m.value<0)return void("Backspace"!==t.key||_.value||(m.value=l-1))
const e=m.value,a=x.value[m.value]
a&&!a.props.disabled&&U(a,!1),m.value=e>=l-1?l-2:e}if("ArrowLeft"===t.key){if(m.value<0&&a>0)return
const e=m.value>-1?m.value-1:l-1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(_.value.length,_.value.length))}if("ArrowRight"===t.key){if(m.value<0)return
const e=m.value+1
x.value[e]?m.value=e:(m.value=-1,i.value.setSelectionRange(0,0))}"Enter"===t.key&&_.value&&(U(Ln(e,_.value)),_.value="")}}function W(){s.value&&(u.value=!0,i.value?.focus())}function U(a){let l=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
if(e.multiple){const t=x.value.findIndex((t=>e.valueComparator(t.value,a.value))),o=null==l?!~t:l
if(~t){const e=o?[...x.value,a]:[...x.value]
e.splice(t,1),x.value=e}else o&&(x.value=[...x.value,a])
_.value=""}else{const e=!1!==l
x.value=e?[a]:[],C.value=e?a.title:"",t.nextTick((()=>{f.value=!1,u.value=!0}))}}function Y(e){s.value=!0,setTimeout((()=>{c.value=!0}))}function G(e){c.value=!1}function q(t){(null==t||""===t&&!e.multiple)&&(x.value=[])}return t.watch(P,(t=>{!t.length&&e.hideNoData&&(f.value=!1)})),t.watch(s,((t,a)=>{t||t===a||(m.value=-1,f.value=!1,!D.value||c.value||x.value.some((e=>{let{value:t}=e
return t===R.value[0].value}))?e.multiple&&_.value&&U(Ln(e,_.value)):U(R.value[0]))})),t.watch(f,(()=>{if(!e.hideSelected&&f.value&&x.value.length){const t=R.value.findIndex((t=>x.value.some((a=>e.valueComparator(a.value,t.value)))))
o&&window.requestAnimationFrame((()=>{t>=0&&v.value?.scrollToIndex(t)}))}})),At((()=>{const a=!(!e.chips&&!n.chip),l=!!(!e.hideNoData||R.value.length||n["prepend-item"]||n["append-item"]||n["no-data"]),o=x.value.length>0,c=ei.filterProps(e)
return t.createVNode(ei,t.mergeProps({ref:i},c,{modelValue:_.value,"onUpdate:modelValue":[e=>_.value=e,q],focused:s.value,"onUpdate:focused":e=>s.value=e,validationValue:x.externalValue,counterValue:I.value,dirty:o,class:["v-combobox",{"v-combobox--active-menu":f.value,"v-combobox--chips":!!e.chips,"v-combobox--selection-slot":!!n.selection,"v-combobox--selecting-index":m.value>-1,["v-combobox--"+(e.multiple?"multiple":"single")]:!0},e.class],style:e.style,readonly:e.readonly,placeholder:o?void 0:e.placeholder,"onClick:clear":O,"onMousedown:control":z,onKeydown:H}),{...n,default:()=>t.createVNode(t.Fragment,null,[t.createVNode(Hr,t.mergeProps({ref:d,modelValue:f.value,"onUpdate:modelValue":e=>f.value=e,activator:"parent",contentClass:"v-combobox__content",disabled:F.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:W},e.menuProps),{default:()=>[l&&t.createVNode(Un,{ref:$,selected:E.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:e=>e.preventDefault(),onKeydown:L,onFocusin:Y,onFocusout:G,onScrollPassive:M,tabindex:"-1",color:e.itemColor??e.color},{default:()=>[n["prepend-item"]?.(),!R.value.length&&!e.hideNoData&&(n["no-data"]?.()??t.createVNode(An,{title:r(e.noDataText)},null)),t.createVNode(ri,{ref:v,renderless:!0,items:R.value},{default:a=>{let{item:l,index:o,itemRef:r}=a
const i=t.mergeProps(l.props,{ref:r,key:o,active:!(!D.value||0!==o)||void 0,onClick:()=>U(l,null)})
return n.item?.({item:l,index:o,props:i})??t.createVNode(An,i,{prepend:a=>{let{isSelected:o}=a
return t.createVNode(t.Fragment,null,[e.multiple&&!e.hideSelected?t.createVNode(Ho,{key:l.value,modelValue:o,ripple:!1,tabindex:"-1"},null):void 0,l.props.prependIcon&&t.createVNode(jl,{icon:l.props.prependIcon},null)])},title:()=>u.value?l.title:function(e,a,l){if(null==a)return e
if(Array.isArray(a))throw new Error("Multiple matches is not implemented")
return"number"==typeof a&&~a?t.createVNode(t.Fragment,null,[t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(0,a)]),t.createVNode("span",{class:"v-combobox__mask"},[e.substr(a,l)]),t.createVNode("span",{class:"v-combobox__unmask"},[e.substr(a+l)])]):e}(l.title,B(l)?.title,_.value?.length??0)})}}),n["append-item"]?.()]})]}),x.value.map(((l,o)=>{const r={"onClick:close":function(e){e.stopPropagation(),e.preventDefault(),U(l,!1)},onMousedown(e){e.preventDefault(),e.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},i=a?!!n.chip:!!n.selection,s=i?oe(a?n.chip({item:l,index:o,props:r}):n.selection({item:l,index:o})):void 0
if(!i||s)return t.createVNode("div",{key:l.value,class:["v-combobox__selection",o===m.value&&["v-combobox__selection--selected",w.value]],style:o===m.value?k.value:{}},[a?n.chip?t.createVNode($a,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:l.title}}},{default:()=>[s]}):t.createVNode(dn,t.mergeProps({key:"chip",closable:e.closableChips,size:"small",text:l.title,disabled:l.props.disabled},r),null):s??t.createVNode("span",{class:"v-combobox__selection-text"},[l.title,e.multiple&&o<x.value.length-1&&t.createVNode("span",{class:"v-combobox__selection-comma"},[t.createTextVNode(",")])])])}))]),"append-inner":function(){for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o]
return t.createVNode(t.Fragment,null,[n["append-inner"]?.(...l),e.hideNoData&&!e.items.length||!e.menuIcon?void 0:t.createVNode(jl,{class:"v-combobox__menu-icon",icon:e.menuIcon,onMousedown:j,onClick:ae,"aria-label":r(y.value),title:r(y.value)},null)])}})})),zr({isFocused:s,isPristine:u,menu:f,search:_,selectionIndex:m,filteredItems:P,select:U},i)}}),As=a({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),Rs=Symbol.for("vuetify:datatable:expanded")
function Ts(e){const a=t.toRef(e,"expandOnClick"),l=Ht(e,"expanded",e.expanded,(e=>new Set(e)),(e=>[...e.values()]))
function o(e,t){const a=new Set(l.value)
t?a.add(e.value):a.delete(e.value),l.value=a}function n(e){return l.value.has(e.value)}const r={expand:o,expanded:l,expandOnClick:a,isExpanded:n,toggleExpand:function(e){o(e,!n(e))}}
return t.provide(Rs,r),r}function Es(){const e=t.inject(Rs)
if(!e)throw new Error("foo")
return e}const Ds=a({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Fs=Symbol.for("vuetify:data-table-group")
function $s(e){return{groupBy:Ht(e,"groupBy")}}function Ms(e){const{groupBy:a,sortBy:l}=e,o=t.ref(new Set)
function n(e){return o.value.has(e.id)}const r={sortByWithGroups:t.computed((()=>a.value.map((e=>({...e,order:e.order??!1}))).concat(l.value))),toggleGroup:function(e){const t=new Set(o.value)
n(e)?t.delete(e.id):t.add(e.id),o.value=t},opened:o,groupBy:a,extractRows:function(e){return function e(t){const a=[]
for(const l of t.items)"type"in l&&"group"===l.type?a.push(...e(l)):a.push(l)
return a}({type:"group",items:e,id:"dummy",key:"dummy",value:"dummy",depth:0})},isGroupOpen:n}
return t.provide(Fs,r),r}function Ls(){const e=t.inject(Fs)
if(!e)throw new Error("Missing group!")
return e}function Os(e,t){if(!e.length)return[]
const a=new Map
for(const l of e){const e=f(l.raw,t)
a.has(e)||a.set(e,[]),a.get(e).push(l)}return a}function zs(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"root"
if(!t.length)return[]
const o=Os(e,t[0]),n=[],r=t.slice(1)
return o.forEach(((e,o)=>{const i=t[0],s=`${l}_${i}_${o}`
n.push({depth:a,id:s,key:i,value:o,items:r.length?zs(e,r,a+1,s):e,type:"group"})})),n}function js(e,t){const a=[]
for(const l of e)"type"in l&&"group"===l.type?(null!=l.value&&a.push(l),(t.has(l.id)||null==l.value)&&a.push(...js(l.items,t))):a.push(l)
return a}function Hs(e,a,l){return{flatItems:t.computed((()=>{if(!a.value.length)return e.value
return js(zs(e.value,a.value.map((e=>e.key))),l.value)}))}}function Ws(e){let{page:a,itemsPerPage:l,sortBy:o,groupBy:n,search:r}=e
const i=St("VDataTable"),s=t.computed((()=>({page:a.value,itemsPerPage:l.value,sortBy:o.value,groupBy:n.value,search:r.value})))
let u=null
t.watch(s,(()=>{p(u,s.value)||(u?.search!==s.value.search&&(a.value=1),i.emit("update:options",s.value),u=s.value)}),{deep:!0,immediate:!0})}const Us=a({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ys=Symbol.for("vuetify:data-table-pagination")
function Gs(e){return{page:Ht(e,"page",void 0,(e=>+(e??1))),itemsPerPage:Ht(e,"itemsPerPage",void 0,(e=>+(e??10)))}}function qs(e){const{page:a,itemsPerPage:l,itemsLength:o}=e,n=t.computed((()=>-1===l.value?0:l.value*(a.value-1))),r=t.computed((()=>-1===l.value?o.value:Math.min(o.value,n.value+l.value))),i=t.computed((()=>-1===l.value||0===o.value?1:Math.ceil(o.value/l.value)))
t.watchEffect((()=>{a.value>i.value&&(a.value=i.value)}))
const s={page:a,itemsPerPage:l,startIndex:n,stopIndex:r,pageCount:i,itemsLength:o,nextPage:function(){a.value=E(a.value+1,1,i.value)},prevPage:function(){a.value=E(a.value-1,1,i.value)},setPage:function(e){a.value=E(e,1,i.value)},setItemsPerPage:function(e){l.value=e,a.value=1}}
return t.provide(Ys,s),s}function Ks(e){const{items:a,startIndex:l,stopIndex:o,itemsPerPage:n}=e
return{paginatedItems:t.computed((()=>n.value<=0?a.value:a.value.slice(l.value,o.value)))}}const Xs={showSelectAll:!1,allSelected:()=>[],select:e=>{let{items:t,value:a}=e
return new Set(a?[t[0]?.value]:[])},selectAll:e=>{let{selected:t}=e
return t}},Zs={showSelectAll:!0,allSelected:e=>{let{currentPage:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,currentPage:a,selected:l}=e
return Zs.select({items:a,value:t,selected:l})}},Js={showSelectAll:!0,allSelected:e=>{let{allItems:t}=e
return t},select:e=>{let{items:t,value:a,selected:l}=e
for(const e of t)a?l.add(e.value):l.delete(e.value)
return l},selectAll:e=>{let{value:t,allItems:a,selected:l}=e
return Js.select({items:a,value:t,selected:l})}},Qs=a({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:p}},"DataTable-select"),eu=Symbol.for("vuetify:data-table-selection")
function tu(e,a){let{allItems:l,currentPage:o}=a
const n=Ht(e,"modelValue",e.modelValue,(t=>new Set(T(t).map((t=>l.value.find((a=>e.valueComparator(t,a.value)))?.value??t)))),(e=>[...e.values()])),r=t.computed((()=>l.value.filter((e=>e.selectable)))),i=t.computed((()=>o.value.filter((e=>e.selectable)))),s=t.computed((()=>{if("object"==typeof e.selectStrategy)return e.selectStrategy
switch(e.selectStrategy){case"single":return Xs
case"all":return Js
case"page":default:return Zs}}))
function u(e){return T(e).every((e=>n.value.has(e.value)))}function c(e,t){const a=s.value.select({items:e,value:t,selected:new Set(n.value)})
n.value=a}const d=t.computed((()=>n.value.size>0)),v=t.computed((()=>{const e=s.value.allSelected({allItems:r.value,currentPage:i.value})
return!!e.length&&u(e)})),p={toggleSelect:function(e){c([e],!u([e]))},select:c,selectAll:function(e){const t=s.value.selectAll({value:e,allItems:r.value,currentPage:i.value,selected:new Set(n.value)})
n.value=t},isSelected:u,isSomeSelected:function(e){return T(e).some((e=>n.value.has(e.value)))},someSelected:d,allSelected:v,showSelectAll:s.value.showSelectAll}
return t.provide(eu,p),p}function au(){const e=t.inject(eu)
if(!e)throw new Error("Missing selection!")
return e}const lu={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0}
function ou(e){return new Date(e.getFullYear(),e.getMonth(),1)}function nu(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}const ru=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/
function iu(e){if(null==e)return new Date
if(e instanceof Date)return e
if("string"==typeof e){let t
if(ru.test(e))return function(e){const t=e.split("-").map(Number)
return new Date(t[0],t[1]-1,t[2])}(e)
if(t=Date.parse(e),!isNaN(t))return new Date(t)}return null}const su=new Date(2e3,0,2)
function uu(e,t,a,l){const o=iu(e)??new Date,n=l?.[t]
if("function"==typeof n)return n(o,t,a)
let r={}
switch(t){case"fullDateWithWeekday":r={weekday:"long",day:"numeric",month:"long",year:"numeric"}
break
case"normalDateWithWeekday":r={weekday:"short",day:"numeric",month:"short"}
break
case"keyboardDate":r={day:"2-digit",month:"2-digit",year:"numeric"}
break
case"monthAndDate":r={month:"long",day:"numeric"}
break
case"monthAndYear":r={month:"long",year:"numeric"}
break
case"month":r={month:"long"}
break
case"monthShort":r={month:"short"}
break
case"dayOfMonth":r={day:"numeric"}
break
case"shortDate":r={year:"2-digit",month:"numeric",day:"numeric"}
break
case"year":r={year:"numeric"}
break
default:r=n??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(a,r).format(o)}function cu(e,t){return e.getTime()>t.getTime()}function du(e,t){return e.getTime()===t.getTime()}class vu{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return iu(e)}toJsDate(e){return e}toISO(e){return function(e,t){const a=e.toJsDate(t)
return`${a.getFullYear()}-${$(String(a.getMonth()+1),2,"0")}-${$(String(a.getDate()),2,"0")}`}(this,e)}parseISO(e){return function(e){const[t,a,l]=e.split("-").map(Number)
return new Date(t,a-1,l)}(e)}addDays(e,t){return function(e,t){const a=new Date(e)
return a.setDate(a.getDate()+t),a}(e,t)}addMonths(e,t){return function(e,t){const a=new Date(e)
return a.setMonth(a.getMonth()+t),a}(e,t)}getWeekArray(e){return function(e,t){const a=[]
let l=[]
const o=ou(e),n=nu(e),r=(o.getDay()-lu[t.slice(-2).toUpperCase()]+7)%7,i=(n.getDay()-lu[t.slice(-2).toUpperCase()]+7)%7
for(let e=0;e<r;e++){const t=new Date(o)
t.setDate(t.getDate()-(r-e)),l.push(t)}for(let t=1;t<=n.getDate();t++){const o=new Date(e.getFullYear(),e.getMonth(),t)
l.push(o),7===l.length&&(a.push(l),l=[])}for(let e=1;e<7-i;e++){const t=new Date(n)
t.setDate(t.getDate()+e),l.push(t)}return l.length>0&&a.push(l),a}(e,this.locale)}startOfMonth(e){return ou(e)}endOfMonth(e){return nu(e)}format(e,t){return uu(e,t,this.locale,this.formats)}isEqual(e,t){return du(e,t)}isValid(e){return function(e){const t=new Date(e)
return t instanceof Date&&!isNaN(t.getTime())}(e)}isWithinRange(e,t){return function(e,t){return cu(e,t[0])&&function(e,t){return e.getTime()<t.getTime()}(e,t[1])}(e,t)}isAfter(e,t){return cu(e,t)}isBefore(e,t){return!cu(e,t)&&!du(e,t)}isSameDay(e,t){return function(e,t){return e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}isSameMonth(e,t){return function(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}(e,t)}setMonth(e,t){return function(e,t){const a=new Date(e)
return a.setMonth(t),a}(e,t)}setYear(e,t){return function(e,t){const a=new Date(e)
return a.setFullYear(t),a}(e,t)}getDiff(e,t,a){return function(e,t,a){const l=new Date(e),o=new Date(t)
return"month"===a?l.getMonth()-o.getMonth()+12*(l.getFullYear()-o.getFullYear()):Math.floor((l.getTime()-o.getTime())/864e5)}(e,t,a)}getWeekdays(){return function(e){const t=lu[e.slice(-2).toUpperCase()]
return g(7).map((a=>{const l=new Date(su)
return l.setDate(su.getDate()+t+a),new Intl.DateTimeFormat(e,{weekday:"narrow"}).format(l)}))}(this.locale)}getYear(e){return function(e){return e.getFullYear()}(e)}getMonth(e){return function(e){return e.getMonth()}(e)}getNextMonth(e){return function(e){return new Date(e.getFullYear(),e.getMonth()+1,1)}(e)}startOfDay(e){return function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}(e)}endOfDay(e){return function(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59,999)}(e)}startOfYear(e){return function(e){return new Date(e.getFullYear(),0,1)}(e)}endOfYear(e){return function(e){return new Date(e.getFullYear(),11,31)}(e)}}const pu=Symbol.for("vuetify:date-options"),fu=Symbol.for("vuetify:date-adapter")
function mu(e,t){const a=L({adapter:vu,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},e)
return{options:a,instance:gu(a,t)}}function gu(e,a){const l=t.reactive("function"==typeof e.adapter?new e.adapter({locale:e.locale[a.current.value]??a.current.value,formats:e.formats}):e.adapter)
return t.watch(a.current,(t=>{l.locale=e.locale[t]??t??l.locale})),l}function hu(){const e=t.inject(pu)
if(!e)throw new Error("[Vuetify] Could not find injected date options")
return gu(e,Jt())}const yu=a({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),bu=Symbol.for("vuetify:data-table-sort")
function Vu(e){return{sortBy:Ht(e,"sortBy"),mustSort:t.toRef(e,"mustSort"),multiSort:t.toRef(e,"multiSort")}}function Su(e){const{sortBy:a,mustSort:l,multiSort:o,page:n}=e
const r={sortBy:a,toggleSort:e=>{if(null==e.key)return
let t=a.value.map((e=>({...e})))??[]
const r=t.find((t=>t.key===e.key))
r?"desc"===r.order?l.value?r.order="asc":t=t.filter((t=>t.key!==e.key)):r.order="desc":t=o.value?[...t,{key:e.key,order:"asc"}]:[{key:e.key,order:"asc"}],a.value=t,n&&(n.value=1)},isSorted:function(e){return!!a.value.find((t=>t.key===e.key))}}
return t.provide(bu,r),r}function wu(e,a,l,o){const n=Jt()
return{sortedItems:t.computed((()=>l.value.length?function(e,t,a,l){const o=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"})
return[...e].sort(((e,a)=>{for(let n=0;n<t.length;n++){const r=t[n].key,i=t[n].order??"asc"
if(!1===i)continue
let s=f(e.raw,r),u=f(a.raw,r)
if("desc"===i&&([s,u]=[u,s]),l?.[r]){const e=l[r](s,u)
if(!e)continue
return e}if(s instanceof Date&&u instanceof Date)return s.getTime()-u.getTime()
if([s,u]=[s,u].map((e=>null!=e?e.toString().toLocaleLowerCase():e)),s!==u)return te(s)&&te(u)?0:te(s)?-1:te(u)?1:isNaN(s)||isNaN(u)?o.compare(s,u):Number(s)-Number(u)}return 0}))}(a.value,l.value,n.current.value,{...e.customKeySort,...o?.value}):a.value))}}const ku=a({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},returnObject:Boolean},"DataIterator-items")
function xu(e,t){return{type:"item",value:e.returnObject?t:m(t,e.itemValue),selectable:m(t,e.itemSelectable,!0),raw:t}}function Nu(e){return{items:t.computed((()=>function(e,t){const a=[]
for(const l of t)a.push(xu(e,l))
return a}(e,e.items)))}}const Cu=a({search:String,loading:Boolean,...l(),...ku(),...Qs(),...yu(),...Us({itemsPerPage:5}),...As(),...Ds(),...vi(),...ca()},"VDataIterator"),_u=gt()({name:"VDataIterator",props:Cu(),emits:{"update:modelValue":e=>!0,"update:groupBy":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"groupBy"),n=t.toRef(e,"search"),{items:r}=Nu(e),{filteredItems:i}=pi(e,r,n,{transform:e=>e.raw}),{sortBy:s,multiSort:u,mustSort:c}=Vu(e),{page:d,itemsPerPage:v}=Gs(e),{toggleSort:p}=Su({sortBy:s,multiSort:u,mustSort:c,page:d}),{sortByWithGroups:f,opened:m,extractRows:g,isGroupOpen:h,toggleGroup:y}=Ms({groupBy:o,sortBy:s}),{sortedItems:b}=wu(e,i,f),{flatItems:V}=Hs(b,o,m),S=t.computed((()=>V.value.length)),{startIndex:w,stopIndex:k,pageCount:x,prevPage:N,nextPage:C,setItemsPerPage:_,setPage:I}=qs({page:d,itemsPerPage:v,itemsLength:S}),{paginatedItems:P}=Ks({items:V,startIndex:w,stopIndex:k,itemsPerPage:v}),B=t.computed((()=>g(P.value))),{isSelected:A,select:R,selectAll:T,toggleSelect:E}=tu(e,{allItems:r,currentPage:B}),{isExpanded:D,toggleExpand:F}=Ts(e)
Ws({page:d,itemsPerPage:v,sortBy:s,groupBy:o,search:n})
const $=t.computed((()=>({page:d.value,itemsPerPage:v.value,sortBy:s.value,pageCount:x.value,toggleSort:p,prevPage:N,nextPage:C,setPage:I,setItemsPerPage:_,isSelected:A,select:R,selectAll:T,toggleSelect:E,isExpanded:D,toggleExpand:F,isGroupOpen:h,toggleGroup:y,items:B.value,groupedItems:P.value})))
return At((()=>t.createVNode(e.tag,{class:["v-data-iterator",e.class],style:e.style},{default:()=>[l.header?.($.value),P.value.length?l.default?.($.value):l["no-data"]?.(),l.footer?.($.value)]}))),{}}})
const Iu=a({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1==0},totalVisible:[Number,String],firstIcon:{type:Pl,default:"$first"},prevIcon:{type:Pl,default:"$prev"},nextIcon:{type:Pl,default:"$next"},lastIcon:{type:Pl,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...qa(),...l(),...dl(),...Qa(),...tl(),...Ll(),...ca({tag:"nav"}),...aa(),...ml({variant:"text"})},"VPagination"),Pu=gt()({name:"VPagination",props:Iu(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=Ht(e,"modelValue"),{t:r,n:i}=Jt(),{isRtl:s}=ea(),{themeClasses:u}=oa(e),{width:c}=xr(),d=t.shallowRef(-1)
vt(void 0,{scoped:!0})
const{resizeRef:v}=Rt((e=>{if(!e.length)return
const{target:t,contentRect:a}=e[0],l=t.querySelector(".v-pagination__list > *")
if(!l)return
const o=a.width,n=l.offsetWidth+2*parseFloat(getComputedStyle(l).marginRight)
d.value=h(o,n)})),p=t.computed((()=>parseInt(e.length,10))),f=t.computed((()=>parseInt(e.start,10))),m=t.computed((()=>null!=e.totalVisible?parseInt(e.totalVisible,10):d.value>=0?d.value:h(c.value,58)))
function h(t,a){const l=e.showFirstLastPage?5:3
return Math.max(0,Math.floor(+((t-a*l)/a).toFixed(2)))}const y=t.computed((()=>{if(p.value<=0||isNaN(p.value)||p.value>Number.MAX_SAFE_INTEGER)return[]
if(m.value<=0)return[]
if(1===m.value)return[n.value]
if(p.value<=m.value)return g(p.value,f.value)
const t=m.value%2==0,a=t?m.value/2:Math.floor(m.value/2),l=t?a:a+1,o=p.value-a
if(l-n.value>=0)return[...g(Math.max(1,m.value-1),f.value),e.ellipsis,p.value]
if(n.value-o>=(t?1:0)){const t=m.value-1,a=p.value-t+f.value
return[f.value,e.ellipsis,...g(t,a)]}{const t=Math.max(1,m.value-3),a=1===t?n.value:n.value-Math.ceil(t/2)+f.value
return[f.value,e.ellipsis,...g(t,a),e.ellipsis,p.value]}}))
function b(e,t,a){e.preventDefault(),n.value=t,a&&o(a,t)}const{refs:V,updateRef:w}=function(){const e=t.ref([])
return t.onBeforeUpdate((()=>e.value=[])),{refs:e,updateRef:function(t,a){e.value[a]=t}}}()
vt({VPaginationBtn:{color:t.toRef(e,"color"),border:t.toRef(e,"border"),density:t.toRef(e,"density"),size:t.toRef(e,"size"),variant:t.toRef(e,"variant"),rounded:t.toRef(e,"rounded"),elevation:t.toRef(e,"elevation")}})
const k=t.computed((()=>y.value.map(((t,a)=>{const l=e=>w(e,a)
if("string"==typeof t)return{isActive:!1,key:`ellipsis-${a}`,page:t,props:{ref:l,ellipsis:!0,icon:!0,disabled:!0}}
{const a=t===n.value
return{isActive:a,key:t,page:i(t),props:{ref:l,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:a?e.activeColor:e.color,ariaCurrent:a,ariaLabel:r(a?e.currentPageAriaLabel:e.pageAriaLabel,t),onClick:e=>b(e,t)}}}})))),x=t.computed((()=>{const t=!!e.disabled||n.value<=f.value,a=!!e.disabled||n.value>=f.value+p.value-1
return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:e=>b(e,f.value,"first"),disabled:t,ariaLabel:r(e.firstAriaLabel),ariaDisabled:t}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:e=>b(e,n.value-1,"prev"),disabled:t,ariaLabel:r(e.previousAriaLabel),ariaDisabled:t},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:e=>b(e,n.value+1,"next"),disabled:a,ariaLabel:r(e.nextAriaLabel),ariaDisabled:a},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:e=>b(e,f.value+p.value-1,"last"),disabled:a,ariaLabel:r(e.lastAriaLabel),ariaDisabled:a}:void 0}}))
function N(){const e=n.value-f.value
V.value[e]?.$el.focus()}function C(a){a.key===S.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,t.nextTick(N)):a.key===S.right&&!e.disabled&&n.value<f.value+p.value-1&&(n.value=n.value+1,t.nextTick(N))}return At((()=>t.createVNode(e.tag,{ref:v,class:["v-pagination",u.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:C,"data-test":"v-pagination-root"},{default:()=>[t.createVNode("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&t.createVNode("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[l.first?l.first(x.value.first):t.createVNode(Co,t.mergeProps({_as:"VPaginationBtn"},x.value.first),null)]),t.createVNode("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[l.prev?l.prev(x.value.prev):t.createVNode(Co,t.mergeProps({_as:"VPaginationBtn"},x.value.prev),null)]),k.value.map(((e,a)=>t.createVNode("li",{key:e.key,class:["v-pagination__item",{"v-pagination__item--is-active":e.isActive}],"data-test":"v-pagination-item"},[l.item?l.item(e):t.createVNode(Co,t.mergeProps({_as:"VPaginationBtn"},e.props),{default:()=>[e.page]})]))),t.createVNode("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[l.next?l.next(x.value.next):t.createVNode(Co,t.mergeProps({_as:"VPaginationBtn"},x.value.next),null)]),e.showFirstLastPage&&t.createVNode("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[l.last?l.last(x.value.last):t.createVNode(Co,t.mergeProps({_as:"VPaginationBtn"},x.value.last),null)])])]}))),{}}}),Bu=a({prevIcon:{type:String,default:"$prev"},nextIcon:{type:String,default:"$next"},firstIcon:{type:String,default:"$first"},lastIcon:{type:String,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),Au=gt()({name:"VDataTableFooter",props:Bu(),setup(e,a){let{slots:l}=a
const{t:o}=Jt(),{page:n,pageCount:r,startIndex:i,stopIndex:s,itemsLength:u,itemsPerPage:c,setItemsPerPage:d}=function(){const e=t.inject(Ys)
if(!e)throw new Error("Missing pagination!")
return e}(),v=t.computed((()=>e.itemsPerPageOptions.map((e=>"number"==typeof e?{value:e,title:-1===e?o("$vuetify.dataFooter.itemsPerPageAll"):String(e)}:{...e,title:o(e.title)}))))
return At((()=>t.createVNode("div",{class:"v-data-table-footer"},[l.prepend?.(),t.createVNode("div",{class:"v-data-table-footer__items-per-page"},[t.createVNode("span",null,[o(e.itemsPerPageText)]),t.createVNode(ci,{items:v.value,modelValue:c.value,"onUpdate:modelValue":e=>d(Number(e)),density:"compact",variant:"outlined","hide-details":!0},null)]),t.createVNode("div",{class:"v-data-table-footer__info"},[t.createVNode("div",null,[o(e.pageText,u.value?i.value+1:0,s.value,u.value)])]),t.createVNode("div",{class:"v-data-table-footer__pagination"},[t.createVNode(Pu,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"prev-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},null)])]))),{}}}),Ru=(Tu={align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String]},(Eu=(e,a)=>{let{slots:l}=a
const o=e.tag??"td"
return t.createVNode(o,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding},`v-data-table-column--align-${e.align}`],style:{height:h(e.height),width:h(e.width),left:h(e.fixedOffset||null)}},{default:()=>[l.default?.()]})}).props=Tu,Eu)
var Tu,Eu
const Du=a({headers:Array},"DataTable-header"),Fu=Symbol.for("vuetify:data-table-headers"),$u={title:"",sortable:!1},Mu={...$u,width:48}
function Lu(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(e.children)for(const a of e.children)Lu(a,t)
else t.push(e)
return t}function Ou(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set
for(const a of e)a.key&&t.add(a.key),a.children&&Ou(a.children,t)
return t}function zu(e){if(e.key)return"data-table-group"===e.key?$u:["data-table-expand","data-table-select"].includes(e.key)?Mu:void 0}function ju(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
return e.children?Math.max(t,...e.children.map((e=>ju(e,t+1)))):t}function Hu(e,t){const a=[]
let l=0
const o=function(){const e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((e=>({element:e,priority:0})))
return{enqueue:(t,a)=>{let l=!1
for(let o=0;o<e.length;o++)if(e[o].priority>a){e.splice(o,0,{element:t,priority:a}),l=!0
break}l||e.push({element:t,priority:a})},size:()=>e.length,count:()=>{let t=0
if(!e.length)return 0
const a=Math.floor(e[0].priority)
for(let l=0;l<e.length;l++)Math.floor(e[l].priority)===a&&(t+=1)
return t},dequeue:()=>e.shift()}}(e)
for(;o.size()>0;){let e=o.count()
const n=[]
let r=1
for(;e>0;){const{element:a,priority:i}=o.dequeue(),s=t-l-ju(a)
if(n.push({...a,rowspan:s??1,colspan:a.children?Lu(a).length:1}),a.children)for(const e of a.children){const t=i%1+r/Math.pow(10,l+2)
o.enqueue(e,l+s+t)}r+=1,e-=1}l+=1,a.push(n)}return{columns:e.map((e=>Lu(e))).flat(),headers:a}}function Wu(e){const t=[]
for(const a of e){const e={...zu(a),...a},l=e.key??("string"==typeof e.value?e.value:null),o=e.value??l??null,n={...e,key:l,value:o,sortable:e.sortable??(null!=e.key||!!e.sort),children:e.children?Wu(e.children):void 0}
t.push(n)}return t}function Uu(e,a){const l=t.ref([]),o=t.ref([]),n=t.ref(),r=t.ref()
t.watchEffect((()=>{const i=(e.headers||Object.keys(e.items[0]??{}).map((e=>({key:e,title:t.capitalize(e)})))).slice(),s=Ou(i)
a?.groupBy?.value.length&&!s.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),a?.showSelect?.value&&!s.has("data-table-select")&&i.unshift({key:"data-table-select"}),a?.showExpand?.value&&!s.has("data-table-expand")&&i.push({key:"data-table-expand"})
const u=Wu(i)
!function(e){let t=!1
function a(e){if(e)if(arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(e.fixed=!0),e.fixed)if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t],!0)
else t?isNaN(+e.width)&&Be(`Multiple fixed columns should have a static width (key: ${e.key})`):e.lastFixed=!0,t=!0
else if(e.children)for(let t=e.children.length-1;t>=0;t--)a(e.children[t])
else t=!1}for(let t=e.length-1;t>=0;t--)a(e[t])
function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0
if(!e)return t
if(e.children){e.fixedOffset=t
for(const a of e.children)t=l(a,t)}else e.fixed&&(e.fixedOffset=t,t+=parseFloat(e.width||"0")||0)
return t}let o=0
for(const t of e)o=l(t,o)}(u)
const c=Math.max(...u.map((e=>ju(e))))+1,d=Hu(u,c)
l.value=d.headers,o.value=d.columns
const v=d.headers.flat(1)
n.value=v.reduce(((e,t)=>(t.sortable&&t.key&&t.sort&&(e[t.key]=t.sort),e)),{}),r.value=v.reduce(((e,t)=>(t.key&&t.filter&&(e[t.key]=t.filter),e)),{})}))
const i={headers:l,columns:o,sortFunctions:n,filterFunctions:r}
return t.provide(Fu,i),i}function Yu(){const e=t.inject(Fu)
if(!e)throw new Error("Missing headers!")
return e}const Gu=a({color:String,sticky:Boolean,multiSort:Boolean,sortAscIcon:{type:Pl,default:"$sortAsc"},sortDescIcon:{type:Pl,default:"$sortDesc"},...Zl()},"VDataTableHeaders"),qu=gt()({name:"VDataTableHeaders",props:Gu(),setup(e,a){let{slots:l}=a
const{toggleSort:o,sortBy:n,isSorted:r}=function(){const e=t.inject(bu)
if(!e)throw new Error("Missing sort!")
return e}(),{someSelected:i,allSelected:s,selectAll:u,showSelectAll:c}=au(),{columns:d,headers:v}=Yu(),{loaderClasses:p}=Jl(e)
function f(t,a){if(e.sticky||t.fixed)return{position:"sticky",left:t.fixed?h(t.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${a})`:void 0}}function m(t){const a=n.value.find((e=>e.key===t.key))
return a?"asc"===a.order?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:g,backgroundColorStyles:y}=Ja(e,"color"),b=t.computed((()=>({headers:v.value,columns:d.value,toggleSort:o,isSorted:r,sortBy:n.value,someSelected:i.value,allSelected:s.value,selectAll:u,getSortIcon:m}))),V=a=>{let{column:d,x:v,y:b}=a
const V="data-table-select"===d.key||"data-table-expand"===d.key
return t.createVNode(Ru,t.mergeProps({tag:"th",align:d.align,class:["v-data-table__th",{"v-data-table__th--sortable":d.sortable,"v-data-table__th--sorted":r(d),"v-data-table__th--fixed":d.fixed},p.value],style:{width:h(d.width),minWidth:h(d.minWidth),...f(d,b)},colspan:d.colspan,rowspan:d.rowspan,onClick:d.sortable?()=>o(d):void 0,fixed:d.fixed,lastFixed:d.lastFixed,noPadding:V},d.headerProps),{default:()=>{const a=`header.${d.key}`,v={column:d,selectAll:u,isSorted:r,toggleSort:o,sortBy:n.value,someSelected:i.value,allSelected:s.value,getSortIcon:m}
return l[a]?l[a](v):"data-table-select"===d.key?l["header.data-table-select"]?.(v)??(c&&t.createVNode(Ho,{modelValue:s.value,indeterminate:i.value&&!s.value,"onUpdate:modelValue":u},null)):t.createVNode("div",{class:"v-data-table-header__content"},[t.createVNode("span",null,[d.title]),d.sortable&&t.createVNode(jl,{key:"icon",class:"v-data-table-header__sort-icon",icon:m(d)},null),e.multiSort&&r(d)&&t.createVNode("div",{key:"badge",class:["v-data-table-header__sort-badge",...g.value],style:y.value},[n.value.findIndex((e=>e.key===d.key))+1])])}})}
At((()=>t.createVNode(t.Fragment,null,[l.headers?l.headers(b.value):v.value.map(((e,a)=>t.createVNode("tr",null,[e.map(((e,l)=>t.createVNode(V,{column:e,x:l,y:a},null)))]))),e.loading&&t.createVNode("tr",{class:"v-data-table-progress"},[t.createVNode("th",{colspan:d.value.length},[t.createVNode(Ql,{name:"v-data-table-progress",absolute:!0,active:!0,color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0},{default:l.loader})])])])))}}),Ku=a({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),Xu=gt()({name:"VDataTableGroupHeaderRow",props:Ku(),setup(e,a){let{slots:l}=a
const{isGroupOpen:o,toggleGroup:n,extractRows:r}=Ls(),{isSelected:i,isSomeSelected:s,select:u}=au(),{columns:c}=Yu(),d=t.computed((()=>r([e.item])))
return()=>t.createVNode("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[c.value.map((a=>{if("data-table-group"===a.key){const a=o(e.item)?"$expand":"$next",r=()=>n(e.item)
return l["data-table-group"]?.({item:e.item,count:d.value.length,props:{icon:a,onClick:r}})??t.createVNode(Ru,{class:"v-data-table-group-header-row__column"},{default:()=>[t.createVNode(Co,{size:"small",variant:"text",icon:a,onClick:r},null),t.createVNode("span",null,[e.item.value]),t.createVNode("span",null,[t.createTextVNode("("),d.value.length,t.createTextVNode(")")])]})}if("data-table-select"===a.key){const e=i(d.value),a=s(d.value)&&!e,o=e=>u(d.value,e)
return l["data-table-select"]?.({props:{modelValue:e,indeterminate:a,"onUpdate:modelValue":o}})??t.createVNode("td",null,[t.createVNode(Ho,{modelValue:e,indeterminate:a,"onUpdate:modelValue":o},null)])}return t.createVNode("td",null,null)}))])}}),Zu=a({index:Number,item:Object,cellProps:[Object,Function],onClick:K(),onContextmenu:K(),onDblclick:K()},"VDataTableRow"),Ju=gt()({name:"VDataTableRow",props:Zu(),setup(e,a){let{slots:l}=a
const{isSelected:o,toggleSelect:n}=au(),{isExpanded:r,toggleExpand:i}=Es(),{columns:s}=Yu()
At((()=>t.createVNode("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)}],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&s.value.map(((a,s)=>{const u=e.item,c=`item.${a.key}`,d={index:e.index,item:u.raw,internalItem:u,value:f(u.columns,a.key),column:a,isSelected:o,toggleSelect:n,isExpanded:r,toggleExpand:i},v="function"==typeof e.cellProps?e.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value,column:a}):e.cellProps,p="function"==typeof a.cellProps?a.cellProps({index:d.index,item:d.item,internalItem:d.internalItem,value:d.value}):a.cellProps
return t.createVNode(Ru,t.mergeProps({align:a.align,fixed:a.fixed,fixedOffset:a.fixedOffset,lastFixed:a.lastFixed,noPadding:"data-table-select"===a.key||"data-table-expand"===a.key,width:a.width},v,p),{default:()=>l[c]?l[c](d):"data-table-select"===a.key?l["item.data-table-select"]?.(d)??t.createVNode(Ho,{disabled:!u.selectable,modelValue:o([u]),onClick:t.withModifiers((()=>n(u)),["stop"])},null):"data-table-expand"===a.key?l["item.data-table-expand"]?.(d)??t.createVNode(Co,{icon:r(u)?"$collapse":"$expand",size:"small",variant:"text",onClick:t.withModifiers((()=>i(u)),["stop"])},null):t.toDisplayString(d.value)})}))])))}}),Qu=a({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function]},"VDataTableRows"),ec=gt()({name:"VDataTableRows",inheritAttrs:!1,props:Qu(),setup(e,a){let{attrs:l,slots:o}=a
const{columns:n}=Yu(),{expandOnClick:r,toggleExpand:i,isExpanded:s}=Es(),{isSelected:u,toggleSelect:c}=au(),{toggleGroup:d,isGroupOpen:v}=Ls(),{t:p}=Jt()
return At((()=>!e.loading||e.items.length&&!o.loading?e.loading||e.items.length||e.hideNoData?t.createVNode(t.Fragment,null,[e.items.map(((a,p)=>{if("group"===a.type){const e={index:p,item:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c,toggleGroup:d,isGroupOpen:v}
return o["group-header"]?o["group-header"](e):t.createVNode(Xu,t.mergeProps({key:`group-header_${a.id}`,item:a},Vt(l,":group-header",(()=>e))),o)}const f={index:p,item:a.raw,internalItem:a,columns:n.value,isExpanded:s,toggleExpand:i,isSelected:u,toggleSelect:c},m={...f,props:t.mergeProps({key:`item_${a.key??a.index}`,onClick:r.value?()=>{i(a)}:void 0,index:p,item:a,cellProps:e.cellProps},Vt(l,":row",(()=>f)),"function"==typeof e.rowProps?e.rowProps({item:f.item,index:f.index,internalItem:f.internalItem}):e.rowProps)}
return t.createVNode(t.Fragment,{key:m.props.key},[o.item?o.item(m):t.createVNode(Ju,m.props,o),s(a)&&o["expanded-row"]?.(f)])}))]):t.createVNode("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[t.createVNode("td",{colspan:n.value.length},[o["no-data"]?.()??p(e.noDataText)])]):t.createVNode("tr",{class:"v-data-table-rows-loading",key:"loading"},[t.createVNode("td",{colspan:n.value.length},[o.loading?.()??p(e.loadingText)])]))),{}}}),tc=a({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...l(),...dl(),...ca(),...aa()},"VTable"),ac=gt()({name:"VTable",props:tc(),setup(e,a){let{slots:l,emit:o}=a
const{themeClasses:n}=oa(e),{densityClasses:r}=vl(e)
return At((()=>t.createVNode(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!l.top,"v-table--has-bottom":!!l.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>[l.top?.(),l.default?t.createVNode("div",{class:"v-table__wrapper",style:{height:h(e.height)}},[t.createVNode("table",null,[l.default()])]):l.wrapper?.(),l.bottom?.()]}))),{}}}),lc=a({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items")
function oc(e,t,a){return t.map(((t,l)=>function(e,t,a,l){const o=e.returnObject?t:m(t,e.itemValue),n=m(t,e.itemSelectable,!0),r=l.reduce(((e,a)=>(null!=a.key&&(e[a.key]=m(t,a.value)),e)),{})
return{type:"item",key:e.returnObject?m(t,e.itemValue):o,index:a,value:o,selectable:n,columns:r,raw:t}}(e,t,l,a)))}function nc(e,a){return{items:t.computed((()=>oc(e,e.items,a.value)))}}const rc=a({...Qu(),width:[String,Number],search:String,...As(),...Ds(),...Du(),...lc(),...Qs(),...yu(),...Gu(),...tc()},"DataTable"),ic=a({...Us(),...rc(),...vi(),...Bu()},"VDataTable"),sc=gt()({name:"VDataTable",props:ic(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=$s(e),{sortBy:r,multiSort:i,mustSort:s}=Vu(e),{page:u,itemsPerPage:c}=Gs(e),{columns:d,headers:v,sortFunctions:p,filterFunctions:f}=Uu(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:m}=nc(e,d),g=t.toRef(e,"search"),{filteredItems:h}=pi(e,m,g,{transform:e=>e.columns,customKeyFilter:f}),{toggleSort:y}=Su({sortBy:r,multiSort:i,mustSort:s,page:u}),{sortByWithGroups:b,opened:V,extractRows:S,isGroupOpen:w,toggleGroup:k}=Ms({groupBy:n,sortBy:r}),{sortedItems:x}=wu(e,h,b,p),{flatItems:N}=Hs(x,n,V),C=t.computed((()=>N.value.length)),{startIndex:_,stopIndex:I,pageCount:P,setItemsPerPage:B}=qs({page:u,itemsPerPage:c,itemsLength:C}),{paginatedItems:A}=Ks({items:N,startIndex:_,stopIndex:I,itemsPerPage:c}),R=t.computed((()=>S(A.value))),{isSelected:T,select:E,selectAll:D,toggleSelect:F,someSelected:$,allSelected:M}=tu(e,{allItems:m,currentPage:R}),{isExpanded:L,toggleExpand:O}=Ts(e)
Ws({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:g}),vt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const z=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:P.value,toggleSort:y,setItemsPerPage:B,someSelected:$.value,allSelected:M.value,isSelected:T,select:E,selectAll:D,toggleSelect:F,isExpanded:L,toggleExpand:O,isGroupOpen:w,toggleGroup:k,items:R.value.map((e=>e.raw)),internalItems:R.value,groupedItems:A.value,columns:d.value,headers:v.value})))
return At((()=>{const a=Au.filterProps(e),n=qu.filterProps(e),r=ec.filterProps(e),i=ac.filterProps(e)
return t.createVNode(ac,t.mergeProps({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(z.value),default:()=>o.default?o.default(z.value):t.createVNode(t.Fragment,null,[o.colgroup?.(z.value),t.createVNode("thead",null,[t.createVNode(qu,n,o)]),o.thead?.(z.value),t.createVNode("tbody",null,[o["body.prepend"]?.(z.value),o.body?o.body(z.value):t.createVNode(ec,t.mergeProps(l,r,{items:A.value}),o),o["body.append"]?.(z.value)]),o.tbody?.(z.value),o.tfoot?.(z.value)]),bottom:()=>o.bottom?o.bottom(z.value):t.createVNode(t.Fragment,null,[t.createVNode(Dn,null,null),t.createVNode(Au,a,{prepend:o["footer.prepend"]})])})})),{}}}),uc=a({...rc(),...Ds(),...li(),...vi()},"VDataTableVirtual"),cc=gt()({name:"VDataTableVirtual",props:uc(),emits:{"update:modelValue":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=$s(e),{sortBy:r,multiSort:i,mustSort:s}=Vu(e),{columns:u,headers:c,sortFunctions:d,filterFunctions:v}=Uu(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:p}=nc(e,u),f=t.toRef(e,"search"),{filteredItems:m}=pi(e,p,f,{transform:e=>e.columns,customKeyFilter:v}),{toggleSort:g}=Su({sortBy:r,multiSort:i,mustSort:s}),{sortByWithGroups:y,opened:b,extractRows:V,isGroupOpen:S,toggleGroup:w}=Ms({groupBy:n,sortBy:r}),{sortedItems:k}=wu(e,m,y,d),{flatItems:x}=Hs(k,n,b),N=t.computed((()=>V(x.value))),{isSelected:C,select:_,selectAll:I,toggleSelect:P,someSelected:B,allSelected:A}=tu(e,{allItems:N,currentPage:N}),{isExpanded:R,toggleExpand:T}=Ts(e),{containerRef:E,markerRef:D,paddingTop:F,paddingBottom:$,computedItems:M,handleItemResize:L,handleScroll:O,handleScrollend:z}=oi(e,x),j=t.computed((()=>M.value.map((e=>e.raw))))
Ws({sortBy:r,page:t.shallowRef(1),itemsPerPage:t.shallowRef(-1),groupBy:n,search:f}),vt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const H=t.computed((()=>({sortBy:r.value,toggleSort:g,someSelected:B.value,allSelected:A.value,isSelected:C,select:_,selectAll:I,toggleSelect:P,isExpanded:R,toggleExpand:T,isGroupOpen:S,toggleGroup:w,items:N.value.map((e=>e.raw)),internalItems:N.value,groupedItems:x.value,columns:u.value,headers:c.value})))
At((()=>{const a=qu.filterProps(e),n=ec.filterProps(e),r=ac.filterProps(e)
return t.createVNode(ac,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},r),{top:()=>o.top?.(H.value),wrapper:()=>t.createVNode("div",{ref:E,onScrollPassive:O,onScrollend:z,class:"v-table__wrapper",style:{height:h(e.height)}},[t.createVNode("table",null,[t.createVNode("thead",null,[t.createVNode(qu,t.mergeProps(a,{sticky:e.fixedHeader}),o)]),t.createVNode("tbody",null,[t.createVNode("tr",{ref:D,style:{height:h(F.value),border:0}},[t.createVNode("td",{colspan:u.value.length,style:{height:0,border:0}},null)]),o["body.prepend"]?.(H.value),t.createVNode(ec,t.mergeProps(l,n,{items:j.value}),{...o,item:e=>t.createVNode(ai,{key:e.internalItem.index,renderless:!0,"onUpdate:height":t=>L(e.internalItem.index,t)},{default:a=>{let{itemRef:l}=a
return o.item?.({...e,itemRef:l})??t.createVNode(Ju,t.mergeProps(e.props,{ref:l,key:e.internalItem.index,index:e.internalItem.index}),o)}})}),o["body.append"]?.(H.value),t.createVNode("tr",{style:{height:h($.value),border:0}},[t.createVNode("td",{colspan:u.value.length,style:{height:0,border:0}},null)])])])]),bottom:()=>o.bottom?.(H.value)})}))}}),dc=a({itemsLength:{type:[Number,String],required:!0},...Us(),...rc(),...Bu()},"VDataTableServer"),vc=gt()({name:"VDataTableServer",props:dc(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const{groupBy:n}=$s(e),{sortBy:r,multiSort:i,mustSort:s}=Vu(e),{page:u,itemsPerPage:c}=Gs(e),d=t.computed((()=>parseInt(e.itemsLength,10))),{columns:v,headers:p}=Uu(e,{groupBy:n,showSelect:t.toRef(e,"showSelect"),showExpand:t.toRef(e,"showExpand")}),{items:f}=nc(e,v),{toggleSort:m}=Su({sortBy:r,multiSort:i,mustSort:s,page:u}),{opened:g,isGroupOpen:h,toggleGroup:y,extractRows:b}=Ms({groupBy:n,sortBy:r}),{pageCount:V,setItemsPerPage:S}=qs({page:u,itemsPerPage:c,itemsLength:d}),{flatItems:w}=Hs(f,n,g),{isSelected:k,select:x,selectAll:N,toggleSelect:C,someSelected:_,allSelected:I}=tu(e,{allItems:f,currentPage:f}),{isExpanded:P,toggleExpand:B}=Ts(e),A=t.computed((()=>b(f.value)))
Ws({page:u,itemsPerPage:c,sortBy:r,groupBy:n,search:t.toRef(e,"search")}),t.provide("v-data-table",{toggleSort:m,sortBy:r}),vt({VDataTableRows:{hideNoData:t.toRef(e,"hideNoData"),noDataText:t.toRef(e,"noDataText"),loading:t.toRef(e,"loading"),loadingText:t.toRef(e,"loadingText")}})
const R=t.computed((()=>({page:u.value,itemsPerPage:c.value,sortBy:r.value,pageCount:V.value,toggleSort:m,setItemsPerPage:S,someSelected:_.value,allSelected:I.value,isSelected:k,select:x,selectAll:N,toggleSelect:C,isExpanded:P,toggleExpand:B,isGroupOpen:h,toggleGroup:y,items:A.value.map((e=>e.raw)),internalItems:A.value,groupedItems:w.value,columns:v.value,headers:p.value})))
At((()=>{const a=Au.filterProps(e),n=qu.filterProps(e),r=ec.filterProps(e),i=ac.filterProps(e)
return t.createVNode(ac,t.mergeProps({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},i),{top:()=>o.top?.(R.value),default:()=>o.default?o.default(R.value):t.createVNode(t.Fragment,null,[o.colgroup?.(R.value),t.createVNode("thead",{class:"v-data-table__thead",role:"rowgroup"},[t.createVNode(qu,t.mergeProps(n,{sticky:e.fixedHeader}),o)]),o.thead?.(R.value),t.createVNode("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[o["body.prepend"]?.(R.value),o.body?o.body(R.value):t.createVNode(ec,t.mergeProps(l,r,{items:w.value}),o),o["body.append"]?.(R.value)]),o.tbody?.(R.value),o.tfoot?.(R.value)]),bottom:()=>o.bottom?o.bottom(R.value):t.createVNode(Au,a,{prepend:o["footer.prepend"]})})}))}}),pc=a({fluid:{type:Boolean,default:!1},...l(),...ca()},"VContainer"),fc=gt()({name:"VContainer",props:pc(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=ea()
return At((()=>t.createVNode(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},o.value,e.class],style:e.style},l))),{}}}),mc=gr.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}),gc=gr.reduce(((e,a)=>(e["offset"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),hc=gr.reduce(((e,a)=>(e["order"+t.capitalize(a)]={type:[String,Number],default:null},e)),{}),yc={col:Object.keys(mc),offset:Object.keys(gc),order:Object.keys(hc)}
function bc(e,t,a){let l=e
if(null!=a&&!1!==a){if(t){l+=`-${t.replace(e,"")}`}return"col"===e&&(l="v-"+l),"col"!==e||""!==a&&!0!==a?(l+=`-${a}`,l.toLowerCase()):l.toLowerCase()}}const Vc=["auto","start","end","center","baseline","stretch"],Sc=a({cols:{type:[Boolean,String,Number],default:!1},...mc,offset:{type:[String,Number],default:null},...gc,order:{type:[String,Number],default:null},...hc,alignSelf:{type:String,default:null,validator:e=>Vc.includes(e)},...l(),...ca()},"VCol"),wc=gt()({name:"VCol",props:Sc(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in yc)yc[a].forEach((l=>{const o=e[l],n=bc(a,l,o)
n&&t.push(n)}))
const l=t.some((e=>e.startsWith("v-col-")))
return t.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),t}))
return()=>t.h(e.tag,{class:[o.value,e.class],style:e.style},l.default?.())}}),kc=["start","end","center"],xc=["space-between","space-around","space-evenly"]
function Nc(e,a){return gr.reduce(((l,o)=>(l[e+t.capitalize(o)]=a(),l)),{})}const Cc=[...kc,"baseline","stretch"],_c=e=>Cc.includes(e),Ic=Nc("align",(()=>({type:String,default:null,validator:_c}))),Pc=[...kc,...xc],Bc=e=>Pc.includes(e),Ac=Nc("justify",(()=>({type:String,default:null,validator:Bc}))),Rc=[...kc,...xc,"stretch"],Tc=e=>Rc.includes(e),Ec=Nc("alignContent",(()=>({type:String,default:null,validator:Tc}))),Dc={align:Object.keys(Ic),justify:Object.keys(Ac),alignContent:Object.keys(Ec)},Fc={align:"align",justify:"justify",alignContent:"align-content"}
function $c(e,t,a){let l=Fc[e]
if(null!=a){if(t){l+=`-${t.replace(e,"")}`}return l+=`-${a}`,l.toLowerCase()}}const Mc=a({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:_c},...Ic,justify:{type:String,default:null,validator:Bc},...Ac,alignContent:{type:String,default:null,validator:Tc},...Ec,...l(),...ca()},"VRow"),Lc=gt()({name:"VRow",props:Mc(),setup(e,a){let{slots:l}=a
const o=t.computed((()=>{const t=[]
let a
for(a in Dc)Dc[a].forEach((l=>{const o=e[l],n=$c(a,l,o)
n&&t.push(n)}))
return t.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),t}))
return()=>t.h(e.tag,{class:["v-row",o.value,e.class],style:e.style},l.default?.())}}),Oc=ht("v-spacer","div","VSpacer"),zc=a({active:{type:[String,Array],default:void 0},disabled:{type:[Boolean,String,Array],default:!1},nextIcon:{type:[String],default:"$next"},prevIcon:{type:[String],default:"$prev"},modeIcon:{type:[String],default:"$subgroup"},text:String,viewMode:{type:String,default:"month"}},"VDatePickerControls"),jc=gt()({name:"VDatePickerControls",props:zc(),emits:{"click:year":()=>!0,"click:month":()=>!0,"click:prev":()=>!0,"click:next":()=>!0,"click:text":()=>!0},setup(e,a){let{emit:l}=a
const o=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("text"):!!e.disabled)),n=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("mode"):!!e.disabled)),r=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("prev"):!!e.disabled)),i=t.computed((()=>Array.isArray(e.disabled)?e.disabled.includes("next"):!!e.disabled))
function s(){l("click:prev")}function u(){l("click:next")}function c(){l("click:year")}function d(){l("click:month")}return At((()=>t.createVNode("div",{class:["v-date-picker-controls"]},[t.createVNode(Co,{class:"v-date-picker-controls__month-btn",disabled:o.value,text:e.text,variant:"text",rounded:!0,onClick:d},null),t.createVNode(Co,{key:"mode-btn",class:"v-date-picker-controls__mode-btn",disabled:n.value,density:"comfortable",icon:e.modeIcon,variant:"text",onClick:c},null),t.createVNode(Oc,{key:"mode-spacer"},null),t.createVNode("div",{key:"month-buttons",class:"v-date-picker-controls__month"},[t.createVNode(Co,{disabled:r.value,icon:e.prevIcon,variant:"text",onClick:s},null),t.createVNode(Co,{disabled:i.value,icon:e.nextIcon,variant:"text",onClick:u},null)])]))),{}}}),Hc=a({appendIcon:String,color:String,header:String,transition:String,onClick:K()},"VDatePickerHeader"),Wc=gt()({name:"VDatePickerHeader",props:Hc(),emits:{click:()=>!0,"click:append":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(e,"color")
function i(){l("click")}function s(){l("click:append")}return At((()=>{const a=!(!o.default&&!e.header),l=!(!o.append&&!e.appendIcon)
return t.createVNode("div",{class:["v-date-picker-header",{"v-date-picker-header--clickable":!!e.onClick},n.value],style:r.value,onClick:i},[o.prepend&&t.createVNode("div",{key:"prepend",class:"v-date-picker-header__prepend"},[o.prepend()]),a&&t.createVNode(Ha,{key:"content",name:e.transition},{default:()=>[t.createVNode("div",{key:e.header,class:"v-date-picker-header__content"},[o.default?.()??e.header])]}),l&&t.createVNode("div",{class:"v-date-picker-header__append"},[o.append?t.createVNode($a,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VBtn:{icon:e.appendIcon,variant:"text"}}},{default:()=>[o.append?.()]}):t.createVNode(Co,{key:"append-btn",icon:e.appendIcon,variant:"text",onClick:s},null)])])})),{}}}),Uc=a({allowedDates:[Array,Function],disabled:Boolean,color:String,month:[Number,String],hideWeekdays:Boolean,max:null,min:null,modelValue:Array,multiple:Boolean,showAdjacentMonths:Boolean,showWeek:Boolean,year:[Number,String]},"VDatePickerMonth"),Yc=gt()({name:"VDatePickerMonth",props:Uc(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=t.ref(),r=hu(),i=Ht(e,"modelValue",[],(e=>T(e))),s=t.computed((()=>i.value.length>0?r.date(i.value[0]):e.min?r.date(e.min):Array.isArray(e.allowedDates)?r.date(e.allowedDates[0]):r.date())),u=Ht(e,"year",void 0,(e=>{const t=null!=e?Number(e):r.getYear(s.value)
return r.startOfYear(r.setYear(r.date(),t))}),(e=>r.getYear(e))),c=Ht(e,"month",void 0,(e=>{const t=null!=e?Number(e):r.getMonth(s.value),a=r.setYear(r.date(),r.getYear(u.value))
return r.setMonth(a,t)}),(e=>r.getMonth(e))),d=t.computed((()=>{const e=r.getWeekArray(c.value),t=e.flat()
if(t.length<42){const a=t[t.length-1]
let l=[]
for(let o=1;o<=42-t.length;o++)l.push(r.addDays(a,o)),o%7==0&&(e.push(l),l=[])}return e})),v=t.computed((()=>{const t=d.value.flat(),a=r.date()
return t.map(((t,l)=>{const o=r.toISO(t),n=!r.isSameMonth(t,c.value)
return{date:t,isoDate:o,formatted:r.format(t,"keyboardDate"),year:r.getYear(t),month:r.getMonth(t),isDisabled:f(t),isWeekStart:l%7==0,isWeekEnd:l%7==6,isSelected:i.value.some((e=>r.isSameDay(t,e))),isToday:r.isSameDay(t,a),isAdjacent:n,isHidden:n&&!e.showAdjacentMonths,isHovered:!1,localized:r.format(t,"dayOfMonth")}}))})),p=t.computed((()=>d.value.map((e=>function(e,t){const a=e.toJsDate(t)
let l=e.getYear(a),o=e.startOfYear(a)
if(a<o)l-=1,o=e.startOfYear(e.setYear(a,l))
else{const t=e.startOfYear(e.setYear(a,l+1))
a>=t&&(l+=1,o=t)}const n=Math.abs(a.getTime()-o.getTime()),r=Math.ceil(n/864e5)
return Math.floor(r/7)+1}(r,e[0])))))
function f(t){if(e.disabled)return!0
const a=r.date(t)
return!(!e.min||!r.isAfter(r.date(e.min),a))||(!(!e.max||!r.isAfter(a,r.date(e.max)))||(Array.isArray(e.allowedDates)&&e.allowedDates.length>0?!e.allowedDates.some((e=>r.isSameDay(r.date(e),a))):"function"==typeof e.allowedDates&&!e.allowedDates(a)))}function m(t){if(e.multiple){const e=i.value.findIndex((e=>r.isSameDay(e,t)))
if(-1===e)i.value=[...i.value,t]
else{const t=[...i.value]
t.splice(e,1),i.value=t}}else i.value=[t]}return t.watch(s,(e=>{c.value=e,u.value=e})),()=>t.createVNode("div",{class:"v-date-picker-month"},[e.showWeek&&t.createVNode("div",{key:"weeks",class:"v-date-picker-month__weeks"},[!e.hideWeekdays&&t.createVNode("div",{key:"hide-week-days",class:"v-date-picker-month__day"},[t.createTextVNode(" ")]),p.value.map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__day--adjacent"]},[e])))]),t.createVNode("div",{ref:n,class:"v-date-picker-month__days"},[!e.hideWeekdays&&r.getWeekdays().map((e=>t.createVNode("div",{class:["v-date-picker-month__day","v-date-picker-month__weekday"]},[e]))),v.value.map(((a,l)=>{const n={props:{onClick:()=>m(a.date)},item:a,i:l}
return t.createVNode("div",{class:["v-date-picker-month__day",{"v-date-picker-month__day--adjacent":a.isAdjacent,"v-date-picker-month__day--hide-adjacent":a.isHidden,"v-date-picker-month__day--hovered":a.isHovered,"v-date-picker-month__day--selected":a.isSelected,"v-date-picker-month__day--week-end":a.isWeekEnd,"v-date-picker-month__day--week-start":a.isWeekStart}],"data-v-date":a.isDisabled?void 0:a.isoDate},[(e.showAdjacentMonths||!a.isAdjacent)&&t.createVNode($a,{defaults:{VBtn:{color:!a.isSelected&&!a.isToday||a.isDisabled?void 0:e.color,disabled:a.isDisabled,icon:!0,ripple:!1,text:a.localized,variant:a.isDisabled?"text":a.isToday&&!a.isSelected?"outlined":"flat",onClick:()=>m(a.date)}}},{default:()=>[o.day?.(n)??t.createVNode(Co,n.props,null)]})])}))])])}}),Gc=a({color:String,height:[String,Number],modelValue:Number},"VDatePickerMonths"),qc=gt()({name:"VDatePickerMonths",props:Gc(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=hu(),n=Ht(e,"modelValue"),r=t.computed((()=>{let e=o.startOfYear(o.date())
return g(12).map((t=>{const a=o.format(e,"monthShort")
return e=o.getNextMonth(e),{text:a,value:t}}))}))
return t.watchEffect((()=>{n.value=n.value??o.getMonth(o.date())})),At((()=>t.createVNode("div",{class:"v-date-picker-months",style:{height:h(e.height)}},[t.createVNode("div",{class:"v-date-picker-months__content"},[r.value.map(((a,o)=>{const r={active:n.value===o,color:n.value===o?e.color:void 0,rounded:!0,text:a.text,variant:n.value===a.value?"flat":"text",onClick:()=>i(o)}
function i(e){n.value=e}return l.month?.({month:a,i:o,props:r})??t.createVNode(Co,t.mergeProps({key:"month"},r,{onClick:()=>i(o)}),null)}))])]))),{}}}),Kc=a({color:String,height:[String,Number],min:null,max:null,modelValue:Number},"VDatePickerYears"),Xc=gt()({name:"VDatePickerYears",props:Kc(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=hu(),n=Ht(e,"modelValue"),r=t.computed((()=>{const t=o.getYear(o.date())
let a=t-100,l=t+52
e.min&&(a=o.getYear(o.date(e.min))),e.max&&(l=o.getYear(o.date(e.max)))
let n=o.startOfYear(o.date())
return n=o.setYear(n,a),g(l-a+1,a).map((e=>{const t=o.format(n,"year")
return n=o.setYear(n,o.getYear(n)+1),{text:t,value:e}}))}))
t.watchEffect((()=>{n.value=n.value??o.getYear(o.date())}))
const i=t.ref()
return t.onMounted((async()=>{await t.nextTick(),i.value?.$el.scrollIntoView({block:"center"})})),At((()=>t.createVNode("div",{class:"v-date-picker-years",style:{height:h(e.height)}},[t.createVNode("div",{class:"v-date-picker-years__content"},[r.value.map(((a,o)=>{const r={ref:n.value===a.value?i:void 0,active:n.value===a.value,color:n.value===a.value?e.color:void 0,rounded:!0,text:a.text,variant:n.value===a.value?"flat":"text",onClick:()=>n.value=a.value}
return l.year?.({year:a,i:o,props:r})??t.createVNode(Co,t.mergeProps({key:"month"},r),null)}))])]))),{}}}),Zc=ht("v-picker-title"),Jc=a({bgColor:String,landscape:Boolean,title:String,hideHeader:Boolean,...Cs()},"VPicker"),Qc=gt()({name:"VPicker",props:Jc(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ja(t.toRef(e,"color"))
return At((()=>{const a=_s.filterProps(e),r=!(!e.title&&!l.title)
return t.createVNode(_s,t.mergeProps(a,{color:e.bgColor,class:["v-picker",{"v-picker--landscape":e.landscape,"v-picker--with-actions":!!l.actions},e.class],style:e.style}),{default:()=>[!e.hideHeader&&t.createVNode("div",{key:"header",class:[o.value],style:[n.value]},[r&&t.createVNode(Zc,{key:"picker-title"},{default:()=>[l.title?.()??e.title]}),l.header&&t.createVNode("div",{class:"v-picker__header"},[l.header()])]),t.createVNode("div",{class:"v-picker__body"},[l.default?.()]),l.actions&&t.createVNode($a,{defaults:{VBtn:{slim:!0,variant:"text"}}},{default:()=>[t.createVNode("div",{class:"v-picker__actions"},[l.actions()])]})]})})),{}}}),ed=a({header:{type:String,default:"$vuetify.datePicker.header"},...zc(),...Uc(),...C(Gc(),["modelValue"]),...C(Kc(),["modelValue"]),...Jc({title:"$vuetify.datePicker.title"}),modelValue:null},"VDatePicker"),td=gt()({name:"VDatePicker",props:ed(),emits:{"update:modelValue":e=>!0,"update:month":e=>!0,"update:year":e=>!0,"update:viewMode":e=>!0},setup(e,a){let{emit:l,slots:o}=a
const n=hu(),{t:r}=Jt(),i=Ht(e,"modelValue",void 0,(e=>T(e)),(t=>e.multiple?t:t[0])),s=Ht(e,"viewMode"),u=t.computed((()=>{const e=n.date(i.value?.[0])
return e&&n.isValid(e)?e:n.date()})),c=t.ref(Number(e.month??n.getMonth(n.startOfMonth(u.value)))),d=t.ref(Number(e.year??n.getYear(n.startOfYear(n.setMonth(u.value,c.value))))),v=t.shallowRef(!1),p=t.computed((()=>e.multiple&&i.value.length>1?r("$vuetify.datePicker.itemsSelected",i.value.length):i.value[0]&&n.isValid(i.value[0])?n.format(i.value[0],"normalDateWithWeekday"):r(e.header))),f=t.computed((()=>n.format(n.setYear(n.setMonth(n.date(),c.value),d.value),"monthAndYear"))),m=t.computed((()=>`date-picker-header${v.value?"-reverse":""}-transition`)),g=t.computed((()=>{const t=n.date(e.min)
return e.min&&n.isValid(t)?t:null})),h=t.computed((()=>{const t=n.date(e.max)
return e.max&&n.isValid(t)?t:null})),y=t.computed((()=>{if(e.disabled)return!0
const t=[]
if("month"!==s.value)t.push("prev","next")
else{let e=n.date()
if(e=n.setYear(e,d.value),e=n.setMonth(e,c.value),g.value){const a=n.addDays(n.startOfMonth(e),-1)
n.isAfter(g.value,a)&&t.push("prev")}if(h.value){const a=n.addDays(n.endOfMonth(e),1)
n.isAfter(a,h.value)&&t.push("next")}}return t}))
function b(){c.value<11?c.value++:(d.value++,c.value=0)}function V(){c.value>0?c.value--:(d.value--,c.value=11)}function S(){s.value="month"}function w(){s.value="months"===s.value?"month":"months"}function k(){s.value="year"===s.value?"month":"year"}return t.watch(c,(()=>{"months"===s.value&&w(),l("update:month",c.value)})),t.watch(d,(()=>{"year"===s.value&&k(),l("update:year",d.value)})),t.watch(i,((e,t)=>{const a=n.date(T(e)[0]),l=n.date(T(t)[0])
v.value=n.isBefore(a,l)})),At((()=>{const a=Qc.filterProps(e),l=jc.filterProps(e),n=Wc.filterProps(e),u=Yc.filterProps(e),v=C(qc.filterProps(e),["modelValue"]),x=C(Xc.filterProps(e),["modelValue"]),N={header:p.value,transition:m.value}
return t.createVNode(Qc,t.mergeProps(a,{class:["v-date-picker",`v-date-picker--${s.value}`,{"v-date-picker--show-week":e.showWeek},e.class],style:e.style}),{title:()=>o.title?.()??t.createVNode("div",{class:"v-date-picker__title"},[r(e.title)]),header:()=>o.header?t.createVNode($a,{defaults:{VDatePickerHeader:{...N}}},{default:()=>[o.header?.(N)]}):t.createVNode(Wc,t.mergeProps({key:"header"},n,N,{onClick:"month"!==s.value?S:void 0}),o),default:()=>t.createVNode(t.Fragment,null,[t.createVNode(jc,t.mergeProps(l,{disabled:y.value,text:f.value,"onClick:next":b,"onClick:prev":V,"onClick:month":w,"onClick:year":k}),null),t.createVNode(xa,{hideOnLeave:!0},{default:()=>["months"===s.value?t.createVNode(qc,t.mergeProps({key:"date-picker-months"},v,{modelValue:c.value,"onUpdate:modelValue":e=>c.value=e,min:g.value,max:h.value}),null):"year"===s.value?t.createVNode(Xc,t.mergeProps({key:"date-picker-years"},x,{modelValue:d.value,"onUpdate:modelValue":e=>d.value=e,min:g.value,max:h.value}),null):t.createVNode(Yc,t.mergeProps({key:"date-picker-month"},u,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,month:c.value,"onUpdate:month":e=>c.value=e,year:d.value,"onUpdate:year":e=>d.value=e,min:g.value,max:h.value}),null)]})]),actions:o.actions})})),{}}}),ad=Symbol.for("vuetify:v-expansion-panel"),ld=["default","accordion","inset","popout"],od=a({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>ld.includes(e)},readonly:Boolean,...l(),...bl(),...ca(),...aa()},"VExpansionPanels"),nd=gt()({name:"VExpansionPanels",props:od(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
wl(e,ad)
const{themeClasses:o}=oa(e),n=t.computed((()=>e.variant&&`v-expansion-panels--variant-${e.variant}`))
return vt({VExpansionPanel:{color:t.toRef(e,"color"),readonly:t.toRef(e,"readonly"),static:t.toRef(e,"static")}}),At((()=>t.createVNode(e.tag,{class:["v-expansion-panels",o.value,n.value,e.class],style:e.style},l))),{}}}),rd=a({...l(),...Cr()},"VExpansionPanelText"),id=gt()({name:"VExpansionPanelText",props:rd(),setup(e,a){let{slots:l}=a
const o=t.inject(ad)
if(!o)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel")
const{hasContent:n,onAfterLeave:r}=_r(e,o.isSelected)
return At((()=>t.createVNode(Ea,{onAfterLeave:r},{default:()=>[t.withDirectives(t.createVNode("div",{class:["v-expansion-panel-text",e.class],style:e.style},[l.default&&n.value&&t.createVNode("div",{class:"v-expansion-panel-text__wrapper"},[l.default?.()])]),[[t.vShow,o.isSelected.value]])]}))),{}}}),sd=a({color:String,expandIcon:{type:Pl,default:"$expand"},collapseIcon:{type:Pl,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...l()},"VExpansionPanelTitle"),ud=gt()({name:"VExpansionPanelTitle",directives:{Ripple:xo},props:sd(),setup(e,a){let{slots:l}=a
const o=t.inject(ad)
if(!o)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel")
const{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(e,"color"),i=t.computed((()=>({collapseIcon:e.collapseIcon,disabled:o.disabled.value,expanded:o.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})))
return At((()=>t.withDirectives(t.createVNode("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":o.isSelected.value,"v-expansion-panel-title--static":e.static},n.value,e.class],style:[r.value,e.style],type:"button",tabindex:o.disabled.value?-1:void 0,disabled:o.disabled.value,"aria-expanded":o.isSelected.value,onClick:e.readonly?void 0:o.toggle},[t.createVNode("span",{class:"v-expansion-panel-title__overlay"},null),l.default?.(i.value),!e.hideActions&&t.createVNode("span",{class:"v-expansion-panel-title__icon"},[l.actions?l.actions(i.value):t.createVNode(jl,{icon:o.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[t.resolveDirective("ripple"),e.ripple]]))),{}}}),cd=a({title:String,text:String,bgColor:String,...l(),...Qa(),...Vl(),...Cr(),...tl(),...ca(),...sd()},"VExpansionPanel"),dd=gt()({name:"VExpansionPanel",props:cd(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=Sl(e,ad),{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(e,"bgColor"),{elevationClasses:i}=el(e),{roundedClasses:s}=al(e),u=t.computed((()=>o?.disabled.value||e.disabled)),c=t.computed((()=>o.group.items.value.reduce(((e,t,a)=>(o.group.selected.value.includes(t.id)&&e.push(a),e)),[]))),d=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==1))})),v=t.computed((()=>{const e=o.group.items.value.findIndex((e=>e.id===o.id))
return!o.isSelected.value&&c.value.some((t=>t-e==-1))}))
return t.provide(ad,o),vt({VExpansionPanelText:{eager:t.toRef(e,"eager")},VExpansionPanelTitle:{readonly:t.toRef(e,"readonly")}}),At((()=>{const a=!(!l.text&&!e.text),c=!(!l.title&&!e.title)
return t.createVNode(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":o.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":u.value},s.value,n.value,e.class],style:[r.value,e.style]},{default:()=>[t.createVNode("div",{class:["v-expansion-panel__shadow",...i.value]},null),c&&t.createVNode(ud,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[l.title?l.title():e.title]}),a&&t.createVNode(id,{key:"text"},{default:()=>[l.text?l.text():e.text]}),l.default?.()]})})),{}}}),vd=a({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"==typeof e||[1e3,1024].includes(e)},...en({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>T(e).every((e=>null!=e&&"object"==typeof e))},...Kr({clearable:!0})},"VFileInput"),pd=gt()({name:"VFileInput",inheritAttrs:!1,props:vd(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{t:r}=Jt(),i=Ht(e,"modelValue"),{isFocused:s,focus:u,blur:c}=qo(e),d=t.computed((()=>"boolean"!=typeof e.showSize?e.showSize:void 0)),v=t.computed((()=>(i.value??[]).reduce(((e,t)=>{let{size:a=0}=t
return e+a}),0))),p=t.computed((()=>M(v.value,d.value))),f=t.computed((()=>(i.value??[]).map((t=>{const{name:a="",size:l=0}=t
return e.showSize?`${a} (${M(l,d.value)})`:a})))),m=t.computed((()=>{const t=i.value?.length??0
return e.showSize?r(e.counterSizeString,t,p.value):r(e.counterString,t)})),g=t.ref(),h=t.ref(),y=t.ref(),b=t.computed((()=>s.value||e.active)),V=t.computed((()=>["plain","underlined"].includes(e.variant)))
function S(){y.value!==document.activeElement&&y.value?.focus(),s.value||u()}function w(e){x(e)}function k(e){o("mousedown:control",e)}function x(e){y.value?.click(),o("click:control",e)}function N(a){a.stopPropagation(),S(),t.nextTick((()=>{i.value=[],Z(e["onClick:clear"],a)}))}return t.watch(i,(e=>{(!Array.isArray(e)||!e.length)&&y.value&&(y.value.value="")})),At((()=>{const a=!(!n.counter&&!e.counter),o=!(!a&&!n.details),[r,u]=R(l),{modelValue:d,...C}=tn.filterProps(e),_=Zr(e)
return t.createVNode(tn,t.mergeProps({ref:g,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:["v-file-input",{"v-file-input--chips":!!e.chips,"v-input--plain-underlined":V.value},e.class],style:e.style,"onClick:prepend":w},r,C,{centerAffix:!V.value,focused:s.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:r,isReadonly:d,isValid:m}=a
return t.createVNode(Xr,t.mergeProps({ref:h,"prepend-icon":e.prependIcon,onMousedown:k,onClick:x,"onClick:clear":N,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:l.value,active:b.value||r.value,dirty:r.value,disabled:o.value,focused:s.value,error:!1===m.value}),{...n,default:a=>{let{props:{class:l,...r}}=a
return t.createVNode(t.Fragment,null,[t.createVNode("input",t.mergeProps({ref:y,type:"file",readonly:d.value,disabled:o.value,multiple:e.multiple,name:e.name,onClick:e=>{e.stopPropagation(),d.value&&e.preventDefault(),S()},onChange:e=>{if(!e.target)return
const t=e.target
i.value=[...t.files??[]]},onFocus:S,onBlur:c},r,u),null),t.createVNode("div",{class:l},[!!i.value?.length&&(n.selection?n.selection({fileNames:f.value,totalBytes:v.value,totalBytesReadable:p.value}):e.chips?f.value.map((a=>t.createVNode(dn,{key:a,size:"small",color:e.color},{default:()=>[a]}))):f.value.join(", "))])])}})},details:o?e=>t.createVNode(t.Fragment,null,[n.details?.(e),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(Ur,{active:!!i.value?.length,value:m.value},n.counter)])]):void 0})})),zr({},g,h,y)}}),fd=a({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...qa(),...l(),...Qa(),...Ft(),...tl(),...ca({tag:"footer"}),...aa()},"VFooter"),md=gt()({name:"VFooter",props:fd(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(t.toRef(e,"color")),{borderClasses:i}=Ka(e),{elevationClasses:s}=el(e),{roundedClasses:u}=al(e),c=t.shallowRef(32),{resizeRef:d}=Rt((e=>{e.length&&(c.value=e[0].target.clientHeight)})),v=t.computed((()=>"auto"===e.height?c.value:parseInt(e.height,10))),{layoutItemStyles:p}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.computed((()=>"bottom")),layoutSize:v,elementSize:t.computed((()=>"auto"===e.height?void 0:v.value)),active:t.computed((()=>e.app)),absolute:t.toRef(e,"absolute")})
return At((()=>t.createVNode(e.tag,{ref:d,class:["v-footer",o.value,n.value,i.value,s.value,u.value,e.class],style:[r.value,e.app?p.value:{height:h(e.height)},e.style]},l))),{}}}),gd=a({...l(),...Xo()},"VForm"),hd=gt()({name:"VForm",props:gd(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=function(e){const a=Ht(e,"modelValue"),l=t.computed((()=>e.disabled)),o=t.computed((()=>e.readonly)),n=t.shallowRef(!1),r=t.ref([]),i=t.ref([])
return t.watch(r,(()=>{let e=0,t=0
const l=[]
for(const a of r.value)!1===a.isValid?(t++,l.push({id:a.id,errorMessages:a.errorMessages})):!0===a.isValid&&e++
i.value=l,a.value=!(t>0)&&(e===r.value.length||null)}),{deep:!0}),t.provide(Ko,{register:e=>{let{id:t,validate:a,reset:l,resetValidation:o}=e
r.value.some((e=>e.id===t))&&Pe(`Duplicate input name "${t}"`),r.value.push({id:t,validate:a,reset:l,resetValidation:o,isValid:null,errorMessages:[]})},unregister:e=>{r.value=r.value.filter((t=>t.id!==e))},update:(e,t,a)=>{const l=r.value.find((t=>t.id===e))
l&&(l.isValid=t,l.errorMessages=a)},isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validateOn:t.toRef(e,"validateOn")}),{errors:i,isDisabled:l,isReadonly:o,isValidating:n,isValid:a,items:r,validate:async function(){const t=[]
let a=!0
i.value=[],n.value=!0
for(const l of r.value){const o=await l.validate()
if(o.length>0&&(a=!1,t.push({id:l.id,errorMessages:o})),!a&&e.fastFail)break}return i.value=t,n.value=!1,{valid:a,errors:i.value}},reset:function(){r.value.forEach((e=>e.reset()))},resetValidation:function(){r.value.forEach((e=>e.resetValidation()))}}}(e),r=t.ref()
function i(e){e.preventDefault(),n.reset()}function s(e){const t=e,a=n.validate()
t.then=a.then.bind(a),t.catch=a.catch.bind(a),t.finally=a.finally.bind(a),o("submit",t),t.defaultPrevented||a.then((e=>{let{valid:t}=e
t&&r.value?.submit()})),t.preventDefault()}return At((()=>t.createVNode("form",{ref:r,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:s},[l.default?.(n)]))),zr(n,r)}}),yd=a({disabled:Boolean,modelValue:{type:Boolean,default:void 0},...dr()},"VHover"),bd=gt()({name:"VHover",props:yd(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=Ht(e,"modelValue"),{runOpenDelay:o,runCloseDelay:n}=vr(e,(t=>!e.disabled&&(l.value=t)))
return()=>a.default?.({isHovering:l.value,props:{onMouseenter:o,onMouseleave:n}})}}),Vd=a({color:String,direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},side:{type:String,default:"end",validator:e=>["start","end","both"].includes(e)},mode:{type:String,default:"intersect",validator:e=>["intersect","manual"].includes(e)},margin:[Number,String],loadMoreText:{type:String,default:"$vuetify.infiniteScroll.loadMore"},emptyText:{type:String,default:"$vuetify.infiniteScroll.empty"},...Ma(),...ca()},"VInfiniteScroll"),Sd=mt({name:"VInfiniteScrollIntersect",props:{side:{type:String,required:!0},rootRef:null,rootMargin:String},emits:{intersect:(e,t)=>!0},setup(e,a){let{emit:l}=a
const{intersectionRef:o,isIntersecting:n}=Hl((e=>{}),e.rootMargin?{rootMargin:e.rootMargin}:void 0)
return t.watch(n,(async t=>{l("intersect",e.side,t)})),At((()=>t.createVNode("div",{class:"v-infinite-scroll-intersect",ref:o},[t.createTextVNode(" ")]))),{}}}),wd=gt()({name:"VInfiniteScroll",props:Vd(),emits:{load:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.shallowRef("ok"),i=t.shallowRef("ok"),s=t.computed((()=>h(e.margin))),u=t.shallowRef(!1)
function c(t){if(!n.value)return
const a="vertical"===e.direction?"scrollTop":"scrollLeft"
n.value[a]=t}function d(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollHeight":"scrollWidth"
return n.value[t]}function v(e,t){"start"===e?r.value=t:"end"===e&&(i.value=t)}t.onMounted((()=>{n.value&&("start"===e.side?c(d()):"both"===e.side&&c(d()/2-function(){if(!n.value)return 0
const t="vertical"===e.direction?"clientHeight":"clientWidth"
return n.value[t]}()/2))}))
let p=0
function f(e,t){u.value=t,u.value&&m(e)}function m(a){if("manual"!==e.mode&&!u.value)return
const l=function(e){return"start"===e?r.value:i.value}(a)
n.value&&"loading"!==l&&(p=d(),v(a,"loading"),o("load",{side:a,done:function(l){v(a,l),t.nextTick((()=>{"empty"!==l&&"error"!==l&&("ok"===l&&"start"===a&&c(d()-p+function(){if(!n.value)return 0
const t="vertical"===e.direction?"scrollTop":"scrollLeft"
return n.value[t]}()),"manual"!==e.mode&&t.nextTick((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{window.requestAnimationFrame((()=>{m(a)}))}))}))})))}))}}))}const{t:g}=Jt()
function y(a,o){if(e.side!==a&&"both"!==e.side)return
const n=()=>m(a),r={side:a,props:{onClick:n,color:e.color}}
return"error"===o?l.error?.(r):"empty"===o?l.empty?.(r)??t.createVNode("div",null,[g(e.emptyText)]):"manual"===e.mode?"loading"===o?l.loading?.(r)??t.createVNode(Ul,{indeterminate:!0,color:e.color},null):l["load-more"]?.(r)??t.createVNode(Co,{variant:"outlined",color:e.color,onClick:n},{default:()=>[g(e.loadMoreText)]}):l.loading?.(r)??t.createVNode(Ul,{indeterminate:!0,color:e.color},null)}const{dimensionStyles:b}=La(e)
At((()=>{const a=e.tag,o="start"===e.side||"both"===e.side,u="end"===e.side||"both"===e.side,c="intersect"===e.mode
return t.createVNode(a,{ref:n,class:["v-infinite-scroll",`v-infinite-scroll--${e.direction}`,{"v-infinite-scroll--start":o,"v-infinite-scroll--end":u}],style:b.value},{default:()=>[t.createVNode("div",{class:"v-infinite-scroll__side"},[y("start",r.value)]),n.value&&o&&c&&t.createVNode(Sd,{key:"start",side:"start",onIntersect:f,rootRef:n.value,rootMargin:s.value},null),l.default?.(),n.value&&u&&c&&t.createVNode(Sd,{key:"end",side:"end",onIntersect:f,rootRef:n.value,rootMargin:s.value},null),t.createVNode("div",{class:"v-infinite-scroll__side"},[y("end",i.value)])]})}))}}),kd=Symbol.for("vuetify:v-item-group"),xd=a({...l(),...bl({selectedClass:"v-item--selected"}),...ca(),...aa()},"VItemGroup"),Nd=gt()({name:"VItemGroup",props:xd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{isSelected:n,select:r,next:i,prev:s,selected:u}=wl(e,kd)
return()=>t.createVNode(e.tag,{class:["v-item-group",o.value,e.class],style:e.style},{default:()=>[l.default?.({isSelected:n,select:r,next:i,prev:s,selected:u.value})]})}}),Cd=gt()({name:"VItem",props:Vl(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const{isSelected:l,select:o,toggle:n,selectedClass:r,value:i,disabled:s}=Sl(e,kd)
return()=>a.default?.({isSelected:l.value,selectedClass:r.value,select:o,toggle:n,value:i.value,disabled:s.value})}}),_d=ht("v-kbd"),Id=a({...l(),...Dt()},"VLayout"),Pd=gt()({name:"VLayout",props:Id(),setup(e,a){let{slots:l}=a
const{layoutClasses:o,layoutStyles:n,getLayoutItem:r,items:i,layoutRef:s}=Lt(e)
return At((()=>t.createVNode("div",{ref:s,class:[o.value,e.class],style:[n.value,e.style]},[l.default?.()]))),{getLayoutItem:r,items:i}}}),Bd=a({position:{type:String,required:!0},size:{type:[Number,String],default:300},modelValue:Boolean,...l(),...Ft()},"VLayoutItem"),Ad=gt()({name:"VLayoutItem",props:Bd(),setup(e,a){let{slots:l}=a
const{layoutItemStyles:o}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.toRef(e,"position"),elementSize:t.toRef(e,"size"),layoutSize:t.toRef(e,"size"),active:t.toRef(e,"modelValue"),absolute:t.toRef(e,"absolute")})
return()=>t.createVNode("div",{class:["v-layout-item",e.class],style:[o.value,e.style]},[l.default?.()])}}),Rd=a({modelValue:Boolean,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},...l(),...Ma(),...ca(),...ja({transition:"fade-transition"})},"VLazy"),Td=gt()({name:"VLazy",directives:{intersect:Ua},props:Rd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=La(e),n=Ht(e,"modelValue")
function r(e){n.value||(n.value=e)}return At((()=>t.withDirectives(t.createVNode(e.tag,{class:["v-lazy",e.class],style:[o.value,e.style]},{default:()=>[n.value&&t.createVNode(Ha,{transition:e.transition,appear:!0},{default:()=>[l.default?.()]})]}),[[t.resolveDirective("intersect"),{handler:r,options:e.options},null]]))),{}}}),Ed=a({locale:String,fallbackLocale:String,messages:Object,rtl:{type:Boolean,default:void 0},...l()},"VLocaleProvider"),Dd=gt()({name:"VLocaleProvider",props:Ed(),setup(e,a){let{slots:l}=a
const{rtlClasses:o}=Qt(e)
return At((()=>t.createVNode("div",{class:["v-locale-provider",o.value,e.class],style:e.style},[l.default?.()]))),{}}}),Fd=a({scrollable:Boolean,...l(),...ca({tag:"main"})},"VMain"),$d=gt()({name:"VMain",props:Fd(),setup(e,a){let{slots:l}=a
const{mainStyles:o}=$t(),{ssrBootStyles:n}=il()
return At((()=>t.createVNode(e.tag,{class:["v-main",{"v-main--scrollable":e.scrollable},e.class],style:[o.value,n.value,e.style]},{default:()=>[e.scrollable?t.createVNode("div",{class:"v-main__scroller"},[l.default?.()]):l.default?.()]}))),{}}})
function Md(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function Ld(e){if(e.length<2)return 0
if(2===e.length)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t)
let t=0
for(let a=e.length-1;a>0;a--){if(e[a].t===e[a-1].t)continue
const l=Md(t),o=(e[a].d-e[a-1].d)/(e[a].t-e[a-1].t)
t+=(o-l)*Math.abs(o),a===e.length-1&&(t*=.5)}return 1e3*Md(t)}function Od(){const e={}
return{addMovement:function(t){Array.from(t.changedTouches).forEach((a=>{(e[a.identifier]??(e[a.identifier]=new U(20))).push([t.timeStamp,a])}))},endTouch:function(t){Array.from(t.changedTouches).forEach((t=>{delete e[t.identifier]}))},getVelocity:function(t){const a=e[t]?.values().reverse()
if(!a)throw new Error(`No samples for touch id ${t}`)
const l=a[0],o=[],n=[]
for(const e of a){if(l[0]-e[0]>100)break
o.push({t:e[0],d:e[1].clientX}),n.push({t:e[0],d:e[1].clientY})}return{x:Ld(o),y:Ld(n),get direction(){const{x:e,y:t}=this,[a,l]=[Math.abs(e),Math.abs(t)]
return a>l&&e>=0?"right":a>l&&e<=0?"left":l>a&&t>=0?"down":l>a&&t<=0?"up":function(){throw new Error}()}}}}}function zd(){throw new Error}const jd=["start","end","left","right","top","bottom"],Hd=a({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>jd.includes(e)},sticky:Boolean,...qa(),...l(),...kr(),...Qa(),...Ft(),...tl(),...ca({tag:"nav"}),...aa()},"VNavigationDrawer"),Wd=gt()({name:"VNavigationDrawer",props:Hd(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{isRtl:r}=ea(),{themeClasses:i}=oa(e),{borderClasses:s}=Ka(e),{backgroundColorClasses:u,backgroundColorStyles:c}=Ja(t.toRef(e,"color")),{elevationClasses:d}=el(e),{displayClasses:v,mobile:p}=xr(e),{roundedClasses:f}=al(e),m=lo(),g=Ht(e,"modelValue",null,(e=>!!e)),{ssrBootStyles:y}=il(),{scopeId:b}=Ir(),V=t.ref(),S=t.shallowRef(!1),w=t.computed((()=>e.rail&&e.expandOnHover&&S.value?Number(e.width):Number(e.rail?e.railWidth:e.width))),k=t.computed((()=>se(e.location,r.value))),x=t.computed((()=>!e.permanent&&(p.value||e.temporary))),N=t.computed((()=>e.sticky&&!x.value&&"bottom"!==k.value))
jt((()=>e.expandOnHover&&null!=e.rail),(()=>{t.watch(S,(e=>o("update:rail",!e)))})),jt((()=>!e.disableResizeWatcher),(()=>{t.watch(x,(a=>!e.permanent&&t.nextTick((()=>g.value=!a))))})),jt((()=>!e.disableRouteWatcher&&!!m),(()=>{t.watch(m.currentRoute,(()=>x.value&&(g.value=!1)))})),t.watch((()=>e.permanent),(e=>{e&&(g.value=!0)})),t.onBeforeMount((()=>{null!=e.modelValue||x.value||(g.value=e.permanent||!p.value)}))
const{isDragging:C,dragProgress:_,dragStyles:I}=function(e){let{isActive:a,isTemporary:l,width:o,touchless:n,position:r}=e
t.onMounted((()=>{window.addEventListener("touchstart",y,{passive:!0}),window.addEventListener("touchmove",b,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("touchstart",y),window.removeEventListener("touchmove",b),window.removeEventListener("touchend",V)}))
const i=t.computed((()=>["left","right"].includes(r.value))),{addMovement:s,endTouch:u,getVelocity:c}=Od()
let d=!1
const v=t.shallowRef(!1),p=t.shallowRef(0),f=t.shallowRef(0)
let m
function g(e,t){return("left"===r.value?e:"right"===r.value?document.documentElement.clientWidth-e:"top"===r.value?e:"bottom"===r.value?document.documentElement.clientHeight-e:zd())-(t?o.value:0)}function h(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1]
const a="left"===r.value?(e-f.value)/o.value:"right"===r.value?(document.documentElement.clientWidth-e-f.value)/o.value:"top"===r.value?(e-f.value)/o.value:"bottom"===r.value?(document.documentElement.clientHeight-e-f.value)/o.value:zd()
return t?Math.max(0,Math.min(1,a)):a}function y(e){if(n.value)return
const t=e.changedTouches[0].clientX,c=e.changedTouches[0].clientY,v="left"===r.value?t<25:"right"===r.value?t>document.documentElement.clientWidth-25:"top"===r.value?c<25:"bottom"===r.value?c>document.documentElement.clientHeight-25:zd(),y=a.value&&("left"===r.value?t<o.value:"right"===r.value?t>document.documentElement.clientWidth-o.value:"top"===r.value?c<o.value:"bottom"===r.value?c>document.documentElement.clientHeight-o.value:zd());(v||y||a.value&&l.value)&&(d=!0,m=[t,c],f.value=g(i.value?t:c,a.value),p.value=h(i.value?t:c),u(e),s(e))}function b(e){const t=e.changedTouches[0].clientX,a=e.changedTouches[0].clientY
if(d){if(!e.cancelable)return void(d=!1)
const l=Math.abs(t-m[0]),o=Math.abs(a-m[1]);(i.value?l>o&&l>3:o>l&&o>3)?(v.value=!0,d=!1):(i.value?o:l)>3&&(d=!1)}if(!v.value)return
e.preventDefault(),s(e)
const l=h(i.value?t:a,!1)
p.value=Math.max(0,Math.min(1,l)),l>1?f.value=g(i.value?t:a,!0):l<0&&(f.value=g(i.value?t:a,!1))}function V(e){if(d=!1,!v.value)return
s(e),v.value=!1
const t=c(e.changedTouches[0].identifier),l=Math.abs(t.x),o=Math.abs(t.y),n=i.value?l>o&&l>400:o>l&&o>3
a.value=n?t.direction===({left:"right",right:"left",top:"down",bottom:"up"}[r.value]||zd()):p.value>.5}const S=t.computed((()=>v.value?{transform:"left"===r.value?`translateX(calc(-100% + ${p.value*o.value}px))`:"right"===r.value?`translateX(calc(100% - ${p.value*o.value}px))`:"top"===r.value?`translateY(calc(-100% + ${p.value*o.value}px))`:"bottom"===r.value?`translateY(calc(100% - ${p.value*o.value}px))`:zd(),transition:"none"}:void 0))
return{isDragging:v,dragProgress:p,dragStyles:S}}({isActive:g,isTemporary:x,width:w,touchless:t.toRef(e,"touchless"),position:k}),P=t.computed((()=>{const t=x.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):w.value
return C.value?t*_.value:t})),{layoutItemStyles:B,layoutItemScrimStyles:A}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:k,layoutSize:P,elementSize:w,active:t.computed((()=>g.value||C.value)),disableTransitions:t.computed((()=>C.value)),absolute:t.computed((()=>e.absolute||N.value&&"string"!=typeof R.value))}),{isStuck:R,stickyStyles:T}=function(e){let{rootEl:a,isSticky:l,layoutItemStyles:o}=e
const n=t.shallowRef(!1),r=t.shallowRef(0),i=t.computed((()=>{const e="boolean"==typeof n.value?"top":n.value
return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,n.value?{[e]:h(r.value)}:{top:o.value.top}]}))
t.onMounted((()=>{t.watch(l,(e=>{e?window.addEventListener("scroll",u,{passive:!0}):window.removeEventListener("scroll",u)}),{immediate:!0})})),t.onBeforeUnmount((()=>{window.removeEventListener("scroll",u)}))
let s=0
function u(){const e=s>window.scrollY?"up":"down",t=a.value.getBoundingClientRect(),l=parseFloat(o.value.top??0),i=window.scrollY-Math.max(0,r.value-l),u=t.height+Math.max(r.value,l)-window.scrollY-window.innerHeight,c=parseFloat(getComputedStyle(a.value).getPropertyValue("--v-body-scroll-y"))||0
t.height<window.innerHeight-l?(n.value="top",r.value=l):"up"===e&&"bottom"===n.value||"down"===e&&"top"===n.value?(r.value=window.scrollY+t.top-c,n.value=!0):"down"===e&&u<=0?(r.value=0,n.value="bottom"):"up"===e&&i<=0&&(c?"top"!==n.value&&(r.value=-i+c+l,n.value="top"):(r.value=t.top+i,n.value="top")),s=window.scrollY}return{isStuck:n,stickyStyles:i}}({rootEl:V,isSticky:N,layoutItemStyles:B}),E=Ja(t.computed((()=>"string"==typeof e.scrim?e.scrim:null))),D=t.computed((()=>({...C.value?{opacity:.2*_.value,transition:"none"}:void 0,...A.value})))
function F(){S.value=!0}function $(){S.value=!1}return vt({VList:{bgColor:"transparent"}}),At((()=>{const a=n.image||e.image
return t.createVNode(t.Fragment,null,[t.createVNode(e.tag,t.mergeProps({ref:V,onMouseenter:F,onMouseleave:$,class:["v-navigation-drawer",`v-navigation-drawer--${k.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":S.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":x.value,"v-navigation-drawer--active":g.value,"v-navigation-drawer--sticky":N.value},i.value,u.value,s.value,v.value,d.value,f.value,e.class],style:[c.value,B.value,I.value,y.value,T.value,e.style]},b,l),{default:()=>[a&&t.createVNode("div",{key:"image",class:"v-navigation-drawer__img"},[n.image?n.image?.({image:e.image}):t.createVNode("img",{src:e.image,alt:""},null)]),n.prepend&&t.createVNode("div",{class:"v-navigation-drawer__prepend"},[n.prepend?.()]),t.createVNode("div",{class:"v-navigation-drawer__content"},[n.default?.()]),n.append&&t.createVNode("div",{class:"v-navigation-drawer__append"},[n.append?.()])]}),t.createVNode(t.Transition,{name:"fade-transition"},{default:()=>[x.value&&(C.value||g.value)&&!!e.scrim&&t.createVNode("div",t.mergeProps({class:["v-navigation-drawer__scrim",E.backgroundColorClasses.value],style:[D.value,E.backgroundColorStyles.value],onClick:()=>g.value=!1},b),null)]})])})),{isStuck:R}}}),Ud=mt({name:"VNoSsr",setup(e,t){let{slots:a}=t
const l=Nr()
return()=>l.value&&a.default?.()}}),Yd=a({autofocus:Boolean,divider:String,focusAll:Boolean,label:{type:String,default:"$vuetify.input.otp"},length:{type:[Number,String],default:6},modelValue:{type:[Number,String],default:void 0},placeholder:String,type:{type:String,default:"number"},...Ma(),...Go(),..._(Kr({variant:"outlined"}),["baseColor","bgColor","class","color","disabled","error","loading","rounded","style","theme","variant"])},"VOtpInput"),Gd=gt()({name:"VOtpInput",props:Yd(),emits:{finish:e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const{dimensionStyles:r}=La(e),{isFocused:i,focus:s,blur:u}=qo(e),c=Ht(e,"modelValue","",(e=>String(e).split("")),(e=>e.join(""))),{t:d}=Jt(),v=t.computed((()=>Number(e.length))),p=t.computed((()=>Array(v.value).fill(0))),f=t.ref(-1),m=t.ref(),g=t.ref([]),h=t.computed((()=>g.value[f.value]))
function y(){if("number"===e.type&&/[^0-9]/g.test(h.value.value))return void(h.value.value="")
const t=c.value.slice(),a=h.value.value
t[f.value]=a
let l=null
f.value>c.value.length?l=c.value.length+1:f.value+1!==v.value&&(l="next"),c.value=t,l&&ee(m.value,l)}function b(e){const t=c.value.slice(),a=f.value
let l=null;["ArrowLeft","ArrowRight","Backspace","Delete"].includes(e.key)&&(e.preventDefault(),"ArrowLeft"===e.key?l="prev":"ArrowRight"===e.key?l="next":["Backspace","Delete"].includes(e.key)&&(t[f.value]="",c.value=t,f.value>0&&"Backspace"===e.key?l="prev":requestAnimationFrame((()=>{g.value[a]?.select()}))),requestAnimationFrame((()=>{null!=l&&ee(m.value,l)})))}function V(){u(),f.value=-1}return vt({VField:{color:t.computed((()=>e.color)),bgColor:t.computed((()=>e.color)),baseColor:t.computed((()=>e.baseColor)),disabled:t.computed((()=>e.disabled)),error:t.computed((()=>e.error)),variant:t.computed((()=>e.variant))}},{scoped:!0}),t.watch(c,(e=>{e.length===v.value&&o("finish",e.join(""))}),{deep:!0}),t.watch(f,(e=>{e<0||t.nextTick((()=>{g.value[e]?.select()}))})),At((()=>{const[a,o]=R(l)
return t.createVNode("div",t.mergeProps({class:["v-otp-input",{"v-otp-input--divided":!!e.divider},e.class],style:[e.style]},a),[t.createVNode("div",{ref:m,class:"v-otp-input__content",style:[r.value]},[p.value.map(((a,l)=>t.createVNode(t.Fragment,null,[e.divider&&0!==l&&t.createVNode("span",{class:"v-otp-input__divider"},[e.divider]),t.createVNode(Xr,{focused:i.value&&e.focusAll||f.value===l,key:l},{...n,default:()=>t.createVNode("input",{ref:e=>g.value[l]=e,"aria-label":d(e.label,l+1),autofocus:0===l&&e.autofocus,autocomplete:"one-time-code",class:["v-otp-input__field"],disabled:e.disabled,inputmode:"number"===e.type?"numeric":"text",min:"number"===e.type?0:void 0,maxlength:"1",placeholder:e.placeholder,type:"number"===e.type?"text":e.type,value:c.value[l],onInput:y,onFocus:e=>{return t=l,s(),void(f.value=t)
var t},onBlur:V,onKeydown:b,onPaste:e=>{return t=l,(a=e).preventDefault(),a.stopPropagation(),c.value=(a?.clipboardData?.getData("Text")??"").split(""),void g.value?.[t].blur()
var t,a}},null)})]))),t.createVNode("input",t.mergeProps({class:"v-otp-input-input",type:"hidden"},o,{value:c.value.join("")}),null),t.createVNode(Mr,{contained:!0,"content-class":"v-otp-input__loader","model-value":!!e.loading,persistent:!0},{default:()=>[n.loader?.()??t.createVNode(Ul,{color:"boolean"==typeof e.loading?void 0:e.loading,indeterminate:!0,size:"24",width:"2"},null)]}),n.default?.()])])})),{blur:()=>{g.value?.some((e=>e.blur()))},focus:()=>{g.value?.[0].focus()},reset:function(){c.value=[]},isFocused:i}}})
const qd=a({scale:{type:[Number,String],default:.5},...l()},"VParallax"),Kd=gt()({name:"VParallax",props:qd(),setup(e,a){let{slots:l}=a
const{intersectionRef:o,isIntersecting:n}=Hl(),{resizeRef:r,contentRect:i}=Rt(),{height:s}=xr(),u=t.ref()
let c
t.watchEffect((()=>{o.value=r.value=u.value?.$el})),t.watch(n,(e=>{e?(c=Ct(o.value),c=c===document.scrollingElement?document:c,c.addEventListener("scroll",p,{passive:!0}),p()):c.removeEventListener("scroll",p)})),t.onBeforeUnmount((()=>{c?.removeEventListener("scroll",p)})),t.watch(s,p),t.watch((()=>i.value?.height),p)
const d=t.computed((()=>1-E(+e.scale)))
let v=-1
function p(){n.value&&(cancelAnimationFrame(v),v=requestAnimationFrame((()=>{const e=u.value?.$el.querySelector(".v-img__img")
if(!e)return
const t=c instanceof Document?document.documentElement.clientHeight:c.clientHeight,a=c instanceof Document?window.scrollY:c.scrollTop,l=o.value.getBoundingClientRect().top+a,n=i.value.height,r=(s=(a-(l+(n-t)/2))*d.value,Math.floor(Math.abs(s))*Math.sign(s))
var s
const v=Math.max(1,(d.value*(t-n)+n)/n)
e.style.setProperty("transform",`translateY(${r}px) scale(${v})`)})))}return At((()=>t.createVNode(Ga,{class:["v-parallax",{"v-parallax--active":n.value},e.class],style:e.style,ref:u,cover:!0,onLoadstart:p,onLoad:p},l))),{}}}),Xd=a({...Oo({falseIcon:"$radioOff",trueIcon:"$radioOn"})},"VRadio"),Zd=gt()({name:"VRadio",props:Xd(),setup(e,a){let{slots:l}=a
return At((()=>t.createVNode(zo,t.mergeProps(e,{class:["v-radio",e.class],style:e.style,type:"radio"}),l))),{}}}),Jd=a({height:{type:[Number,String],default:"auto"},...en(),...C($o(),["multiple"]),trueIcon:{type:Pl,default:"$radioOn"},falseIcon:{type:Pl,default:"$radioOff"},type:{type:String,default:"radio"}},"VRadioGroup"),Qd=gt()({name:"VRadioGroup",inheritAttrs:!1,props:Jd(),emits:{"update:modelValue":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=Nt(),r=t.computed((()=>e.id||`radio-group-${n}`)),i=Ht(e,"modelValue")
return At((()=>{const[a,n]=R(l),s=tn.filterProps(e),u=zo.filterProps(e),c=o.label?o.label({label:e.label,props:{for:r.value}}):e.label
return t.createVNode(tn,t.mergeProps({class:["v-radio-group",e.class],style:e.style},a,s,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,id:r.value}),{...o,default:a=>{let{id:l,messagesId:r,isDisabled:s,isReadonly:d}=a
return t.createVNode(t.Fragment,null,[c&&t.createVNode(Do,{id:l.value},{default:()=>[c]}),t.createVNode(Lo,t.mergeProps(u,{id:l.value,"aria-describedby":r.value,defaultsTarget:"VRadio",trueIcon:e.trueIcon,falseIcon:e.falseIcon,type:e.type,disabled:s.value,readonly:d.value,"aria-labelledby":c?l.value:void 0,multiple:!1},n,{modelValue:i.value,"onUpdate:modelValue":e=>i.value=e}),o)])}})})),{}}}),ev=a({...Go(),...en(),...fs(),strict:Boolean,modelValue:{type:Array,default:()=>[0,0]}},"VRangeSlider"),tv=gt()({name:"VRangeSlider",props:ev(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,end:e=>!0,start:e=>!0},setup(e,a){let{slots:l,emit:o}=a
const n=t.ref(),r=t.ref(),i=t.ref(),{rtlClasses:s}=ea()
const u=ms(e),c=Ht(e,"modelValue",void 0,(e=>e?.length?e.map((e=>u.roundValue(e))):[0,0])),{activeThumbRef:d,hasLabels:v,max:p,min:f,mousePressed:m,onSliderMousedown:g,onSliderTouchstart:h,position:y,trackContainerRef:b}=gs({props:e,steps:u,onSliderStart:()=>{o("start",c.value)},onSliderEnd:t=>{let{value:a}=t
const l=d.value===n.value?.$el?[a,c.value[1]]:[c.value[0],a]
!e.strict&&l[0]<l[1]&&(c.value=l),o("end",c.value)},onSliderMove:t=>{let{value:a}=t
const[l,o]=c.value
e.strict||l!==o||l===f.value||(d.value=a>l?r.value?.$el:n.value?.$el,d.value?.focus()),d.value===n.value?.$el?c.value=[Math.min(a,o),o]:c.value=[l,Math.max(l,a)]},getActiveThumb:function(t){if(!n.value||!r.value)return
const a=ps(t,n.value.$el,e.direction),l=ps(t,r.value.$el,e.direction),o=Math.abs(a),i=Math.abs(l)
return o<i||o===i&&a<0?n.value.$el:r.value.$el}}),{isFocused:V,focus:S,blur:w}=qo(e),k=t.computed((()=>y(c.value[0]))),x=t.computed((()=>y(c.value[1])))
return At((()=>{const a=tn.filterProps(e),o=!!(e.label||l.label||l.prepend)
return t.createVNode(tn,t.mergeProps({class:["v-slider","v-range-slider",{"v-slider--has-labels":!!l["tick-label"]||v.value,"v-slider--focused":V.value,"v-slider--pressed":m.value,"v-slider--disabled":e.disabled},s.value,e.class],style:e.style,ref:i},a,{focused:V.value}),{...l,prepend:o?a=>t.createVNode(t.Fragment,null,[l.label?.(a)??(e.label?t.createVNode(Do,{class:"v-slider__label",text:e.label},null):void 0),l.prepend?.(a)]):void 0,default:a=>{let{id:o,messagesId:i}=a
return t.createVNode("div",{class:"v-slider__container",onMousedown:g,onTouchstartPassive:h},[t.createVNode("input",{id:`${o.value}_start`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[0]},null),t.createVNode("input",{id:`${o.value}_stop`,name:e.name||o.value,disabled:!!e.disabled,readonly:!!e.readonly,tabindex:"-1",value:c.value[1]},null),t.createVNode(Vs,{ref:b,start:k.value,stop:x.value},{"tick-label":l["tick-label"]}),t.createVNode(ys,{ref:n,"aria-describedby":i.value,focused:V&&d.value===n.value?.$el,modelValue:c.value[0],"onUpdate:modelValue":e=>c.value=[e,c.value[1]],onFocus:e=>{S(),d.value=n.value?.$el,c.value[0]===c.value[1]&&c.value[1]===f.value&&e.relatedTarget!==r.value?.$el&&(n.value?.$el.blur(),r.value?.$el.focus())},onBlur:()=>{w(),d.value=void 0},min:f.value,max:c.value[1],position:k.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]}),t.createVNode(ys,{ref:r,"aria-describedby":i.value,focused:V&&d.value===r.value?.$el,modelValue:c.value[1],"onUpdate:modelValue":e=>c.value=[c.value[0],e],onFocus:e=>{S(),d.value=r.value?.$el,c.value[0]===c.value[1]&&c.value[0]===p.value&&e.relatedTarget!==n.value?.$el&&(r.value?.$el.blur(),n.value?.$el.focus())},onBlur:()=>{w(),d.value=void 0},min:c.value[0],max:p.value,position:x.value,ripple:e.ripple},{"thumb-label":l["thumb-label"]})])}})})),{}}}),av=a({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:Pl,default:"$ratingEmpty"},fullIcon:{type:Pl,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...l(),...dl(),...Ll(),...ca(),...aa()},"VRating"),lv=gt()({name:"VRating",props:av(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{t:o}=Jt(),{themeClasses:n}=oa(e),r=Ht(e,"modelValue"),i=t.computed((()=>E(parseFloat(r.value),0,+e.length))),s=t.computed((()=>g(Number(e.length),1))),u=t.computed((()=>s.value.flatMap((t=>e.halfIncrements?[t-.5,t]:[t])))),c=t.shallowRef(-1),d=t.computed((()=>u.value.map((t=>{const a=e.hover&&c.value>-1,l=i.value>=t,o=c.value>=t,n=(a?o:l)?e.fullIcon:e.emptyIcon,r=e.activeColor??e.color
return{isFilled:l,isHovered:o,icon:n,color:l||o?r:e.color}})))),v=t.computed((()=>[0,...u.value].map((t=>({onMouseenter:e.hover?function(){c.value=t}:void 0,onMouseleave:e.hover?function(){c.value=-1}:void 0,onClick:function(){e.disabled||e.readonly||(r.value=i.value===t&&e.clearable?0:t)}}))))),p=t.computed((()=>e.name??`v-rating-${Nt()}`))
function f(a){let{value:n,index:r,showStar:s=!0}=a
const{onMouseenter:u,onMouseleave:c,onClick:f}=v.value[r+1],m=`${p.value}-${String(n).replace(".","-")}`,g={color:d.value[r]?.color,density:e.density,disabled:e.disabled,icon:d.value[r]?.icon,ripple:e.ripple,size:e.size,variant:"plain"}
return t.createVNode(t.Fragment,null,[t.createVNode("label",{for:m,class:{"v-rating__item--half":e.halfIncrements&&n%1>0,"v-rating__item--full":e.halfIncrements&&n%1==0},onMouseenter:u,onMouseleave:c,onClick:f},[t.createVNode("span",{class:"v-rating__hidden"},[o(e.itemAriaLabel,n,e.length)]),s?l.item?l.item({...d.value[r],props:g,value:n,index:r,rating:i.value}):t.createVNode(Co,t.mergeProps({"aria-label":o(e.itemAriaLabel,n,e.length)},g),null):void 0]),t.createVNode("input",{class:"v-rating__hidden",name:p.value,id:m,type:"radio",value:n,checked:i.value===n,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function m(e){return l["item-label"]?l["item-label"](e):e.label?t.createVNode("span",null,[e.label]):t.createVNode("span",null,[t.createTextVNode(" ")])}return At((()=>{const a=!!e.itemLabels?.length||l["item-label"]
return t.createVNode(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},n.value,e.class],style:e.style},{default:()=>[t.createVNode(f,{value:0,index:-1,showStar:!1},null),s.value.map(((l,o)=>t.createVNode("div",{class:"v-rating__wrapper"},[a&&"top"===e.itemLabelPosition?m({value:l,index:o,label:e.itemLabels?.[o]}):void 0,t.createVNode("div",{class:"v-rating__item"},[e.halfIncrements?t.createVNode(t.Fragment,null,[t.createVNode(f,{value:l-.5,index:2*o},null),t.createVNode(f,{value:l,index:2*o+1},null)]):t.createVNode(f,{value:l,index:o},null)]),a&&"bottom"===e.itemLabelPosition?m({value:l,index:o,label:e.itemLabels?.[o]}):void 0])))]})})),{}}}),ov={actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, heading","card-avatar":"image, list-item-avatar",chip:"chip","date-picker":"list-item, heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",divider:"divider",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",ossein:"ossein",paragraph:"text@3",sentences:"text@2",subtitle:"text",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"chip, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"text@6","table-tfoot":"text@2, avatar@2",text:"text"}
function nv(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
return t.createVNode("div",{class:["v-skeleton-loader__bone",`v-skeleton-loader__${e}`]},[a])}function rv(e){const[t,a]=e.split("@")
return Array.from({length:a}).map((()=>iv(t)))}function iv(e){let t=[]
if(!e)return t
const a=ov[e]
if(e===a);else{if(e.includes(","))return sv(e)
if(e.includes("@"))return rv(e)
a.includes(",")?t=sv(a):a.includes("@")?t=rv(a):a&&t.push(iv(a))}return[nv(e,t)]}function sv(e){return e.replace(/\s/g,"").split(",").map(iv)}const uv=a({boilerplate:Boolean,color:String,loading:Boolean,loadingText:{type:String,default:"$vuetify.loading"},type:{type:[String,Array],default:"ossein"},...Ma(),...Qa(),...aa()},"VSkeletonLoader"),cv=gt()({name:"VSkeletonLoader",props:uv(),setup(e,a){let{slots:l}=a
const{backgroundColorClasses:o,backgroundColorStyles:n}=Ja(t.toRef(e,"color")),{dimensionStyles:r}=La(e),{elevationClasses:i}=el(e),{themeClasses:s}=oa(e),{t:u}=Jt(),c=t.computed((()=>iv(T(e.type).join(","))))
return At((()=>{const a=!l.default||e.loading
return t.createVNode("div",{class:["v-skeleton-loader",{"v-skeleton-loader--boilerplate":e.boilerplate},s.value,o.value,i.value],style:[n.value,a?r.value:{}],"aria-busy":e.boilerplate?void 0:a,"aria-live":e.boilerplate?void 0:"polite","aria-label":e.boilerplate?void 0:u(e.loadingText),role:e.boilerplate?void 0:"alert"},[a?c.value:l.default?.()])})),{}}})
function dv(e){const t=Math.abs(e)
return Math.sign(e)*(t/((1/.501-2)*(1-t)+1))}function vv(e){let{selectedElement:t,containerSize:a,contentSize:l,isRtl:o,currentScrollOffset:n,isHorizontal:r}=e
const i=r?t.clientWidth:t.clientHeight,s=r?t.offsetLeft:t.offsetTop,u=o&&r?l-s-i:s,c=a+n,d=i+u,v=.4*i
return u<=n?n=Math.max(u-v,0):c<=d&&(n=Math.min(n-(c-d-v),l-a)),n}const pv=Symbol.for("vuetify:v-slide-group"),fv=a({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:pv},nextIcon:{type:Pl,default:"$next"},prevIcon:{type:Pl,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>"boolean"==typeof e||["always","desktop","mobile"].includes(e)},...l(),...kr(),...ca(),...bl({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),mv=gt()({name:"VSlideGroup",props:fv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{isRtl:n}=ea(),{displayClasses:r,mobile:i}=xr(e),s=wl(e,e.symbol),u=t.shallowRef(!1),c=t.shallowRef(0),d=t.shallowRef(0),v=t.shallowRef(0),p=t.computed((()=>"horizontal"===e.direction)),{resizeRef:f,contentRect:m}=Rt(),{resizeRef:g,contentRect:h}=Rt(),y=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[0])):-1)),b=t.computed((()=>s.selected.value.length?s.items.value.findIndex((e=>e.id===s.selected.value[s.selected.value.length-1])):-1))
if(o){let a=-1
t.watch((()=>[s.selected.value,m.value,h.value,p.value]),(()=>{cancelAnimationFrame(a),a=requestAnimationFrame((()=>{if(m.value&&h.value){const e=p.value?"width":"height"
d.value=m.value[e],v.value=h.value[e],u.value=d.value+1<v.value}if(y.value>=0&&g.value){const t=g.value.children[b.value]
0!==y.value&&u.value?e.centerActive?c.value=function(e){let{selectedElement:t,containerSize:a,contentSize:l,isRtl:o,isHorizontal:n}=e
const r=n?t.clientWidth:t.clientHeight,i=n?t.offsetLeft:t.offsetTop,s=o&&n?l-i-r/2-a/2:i+r/2-a/2
return Math.min(l-a,Math.max(0,s))}({selectedElement:t,containerSize:d.value,contentSize:v.value,isRtl:n.value,isHorizontal:p.value}):u.value&&(c.value=vv({selectedElement:t,containerSize:d.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:c.value,isHorizontal:p.value})):c.value=0}}))}))}const V=t.shallowRef(!1)
let S=0,w=0
function k(e){const t=p.value?"clientX":"clientY",a=n.value&&p.value?-1:1
w=a*c.value,S=e.touches[0][t],V.value=!0}function x(e){if(!u.value)return
const t=p.value?"clientX":"clientY",a=n.value&&p.value?-1:1
c.value=a*(w+S-e.touches[0][t])}function N(e){const t=v.value-d.value
c.value<0||!u.value?c.value=0:c.value>=t&&(c.value=t),V.value=!1}function C(){f.value&&(f.value[p.value?"scrollLeft":"scrollTop"]=0)}const _=t.shallowRef(!1)
function I(e){if(_.value=!0,u.value&&g.value)for(const t of e.composedPath())for(const e of g.value.children)if(e===t)return void(c.value=vv({selectedElement:e,containerSize:d.value,contentSize:v.value,isRtl:n.value,currentScrollOffset:c.value,isHorizontal:p.value}))}function P(e){_.value=!1}function B(e){_.value||e.relatedTarget&&g.value?.contains(e.relatedTarget)||R()}function A(e){g.value&&(p.value?"ArrowRight"===e.key?R(n.value?"prev":"next"):"ArrowLeft"===e.key&&R(n.value?"next":"prev"):"ArrowDown"===e.key?R("next"):"ArrowUp"===e.key&&R("prev"),"Home"===e.key?R("first"):"End"===e.key&&R("last"))}function R(e){if(g.value)if(e)if("next"===e){const e=g.value.querySelector(":focus")?.nextElementSibling
e?e.focus():R("first")}else if("prev"===e){const e=g.value.querySelector(":focus")?.previousElementSibling
e?e.focus():R("last")}else"first"===e?g.value.firstElementChild?.focus():"last"===e&&g.value.lastElementChild?.focus()
else{J(g.value)[0]?.focus()}}function T(e){const t=c.value+("prev"===e?-1:1)*d.value
c.value=E(t,0,v.value-d.value)}const D=t.computed((()=>{let e=c.value>v.value-d.value?-(v.value-d.value)+dv(v.value-d.value-c.value):-c.value
c.value<=0&&(e=dv(-c.value))
const t=n.value&&p.value?-1:1
return{transform:`translate${p.value?"X":"Y"}(${t*e}px)`,transition:V.value?"none":"",willChange:V.value?"transform":""}})),F=t.computed((()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected}))),$=t.computed((()=>{switch(e.showArrows){case"always":return!0
case"desktop":return!i.value
case!0:return u.value||Math.abs(c.value)>0
case"mobile":return i.value||u.value||Math.abs(c.value)>0
default:return!i.value&&(u.value||Math.abs(c.value)>0)}})),M=t.computed((()=>Math.abs(c.value)>0)),L=t.computed((()=>v.value>Math.abs(c.value)+d.value))
return At((()=>t.createVNode(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!p.value,"v-slide-group--has-affixes":$.value,"v-slide-group--is-overflowing":u.value},r.value,e.class],style:e.style,tabindex:_.value||s.selected.value.length?-1:0,onFocus:B},{default:()=>[$.value&&t.createVNode("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!M.value}],onClick:()=>M.value&&T("prev")},[l.prev?.(F.value)??t.createVNode(xa,null,{default:()=>[t.createVNode(jl,{icon:n.value?e.nextIcon:e.prevIcon},null)]})]),t.createVNode("div",{key:"container",ref:f,class:"v-slide-group__container",onScroll:C},[t.createVNode("div",{ref:g,class:"v-slide-group__content",style:D.value,onTouchstartPassive:k,onTouchmovePassive:x,onTouchendPassive:N,onFocusin:I,onFocusout:P,onKeydown:A},[l.default?.(F.value)])]),$.value&&t.createVNode("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!L.value}],onClick:()=>L.value&&T("next")},[l.next?.(F.value)??t.createVNode(xa,null,{default:()=>[t.createVNode(jl,{icon:n.value?e.prevIcon:e.nextIcon},null)]})])]}))),{selected:s.selected,scrollTo:T,scrollOffset:c,focus:R}}}),gv=gt()({name:"VSlideGroupItem",props:Vl(),emits:{"group:selected":e=>!0},setup(e,t){let{slots:a}=t
const l=Sl(e,pv)
return()=>a.default?.({isSelected:l.isSelected.value,select:l.select,toggle:l.toggle,selectedClass:l.selectedClass.value})}})
const hv=a({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Gl({location:"bottom"}),...to(),...tl(),...ml(),...aa(),...C($r({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),yv=gt()({name:"VSnackbar",props:hv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),{locationStyles:n}=ql(e),{positionClasses:r}=ao(e),{scopeId:i}=Ir(),{themeClasses:s}=oa(e),{colorClasses:u,colorStyles:c,variantClasses:d}=gl(e),{roundedClasses:v}=al(e),p=function(e){const a=t.shallowRef(e)
let l=-1
function o(){clearInterval(l)}return t.onScopeDispose(o),{clear:o,time:a,start:function(t){const n=t?getComputedStyle(t):{transitionDuration:.2},r=1e3*parseFloat(n.transitionDuration)||200
if(o(),a.value<=0)return
const i=performance.now()
l=window.setInterval((()=>{const t=performance.now()-i+r
a.value=Math.max(e-t,0),a.value<=0&&o()}),r)},reset:function(){o(),t.nextTick((()=>a.value=e))}}}(Number(e.timeout)),f=t.ref(),m=t.ref(),g=t.shallowRef(!1)
t.watch(o,y),t.watch((()=>e.timeout),y),t.onMounted((()=>{o.value&&y()}))
let h=-1
function y(){p.reset(),window.clearTimeout(h)
const t=Number(e.timeout)
if(!o.value||-1===t)return
const a=b(m.value)
p.start(a),h=window.setTimeout((()=>{o.value=!1}),t)}function V(){g.value=!0,p.reset(),window.clearTimeout(h)}function S(){g.value=!1,y()}return At((()=>{const a=Mr.filterProps(e),h=!!(l.default||l.text||e.text)
return t.createVNode(Mr,t.mergeProps({ref:f,class:["v-snackbar",{"v-snackbar--active":o.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},r.value,e.class],style:e.style},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,contentProps:t.mergeProps({class:["v-snackbar__wrapper",s.value,u.value,v.value,d.value],style:[n.value,c.value],onPointerenter:V,onPointerleave:S},a.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0},i),{default:()=>[fl(!1,"v-snackbar"),e.timer&&t.createVNode("div",{key:"timer",class:"v-snackbar__timer"},[t.createVNode(Xl,{ref:m,active:!g.value,color:"string"==typeof e.timer?e.timer:"info",max:e.timeout,"model-value":p.time.value},null)]),h&&t.createVNode("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[l.text?.()??e.text,l.default?.()]),l.actions&&t.createVNode($a,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[t.createVNode("div",{class:"v-snackbar__actions"},[l.actions()])]})],activator:l.activator})})),zr({},f)}}),bv=a({color:String,disabled:{type:[Boolean,String],default:!1},prevText:{type:String,default:"$vuetify.stepper.prev"},nextText:{type:String,default:"$vuetify.stepper.next"}},"VStepperActions"),Vv=gt()({name:"VStepperActions",props:bv(),emits:{"click:prev":()=>!0,"click:next":()=>!0},setup(e,a){let{emit:l,slots:o}=a
const{t:n}=Jt()
function r(){l("click:prev")}function i(){l("click:next")}return At((()=>{const a={onClick:r},l={onClick:i}
return t.createVNode("div",{class:"v-stepper-actions"},[t.createVNode($a,{defaults:{VBtn:{disabled:["prev",!0].includes(e.disabled),text:n(e.prevText),variant:"text"}}},{default:()=>[o.prev?.({props:a})??t.createVNode(Co,a,null)]}),t.createVNode($a,{defaults:{VBtn:{color:e.color,disabled:["next",!0].includes(e.disabled),text:n(e.nextText),variant:"tonal"}}},{default:()=>[o.next?.({props:l})??t.createVNode(Co,l,null)]})])})),{}}}),Sv=ht("v-stepper-header"),wv=a({color:String,title:String,subtitle:String,complete:Boolean,completeIcon:{type:String,default:"$complete"},editable:Boolean,editIcon:{type:String,default:"$edit"},error:Boolean,errorIcon:{type:String,default:"$error"},icon:String,ripple:{type:[Boolean,Object],default:!0},rules:{type:Array,default:()=>[]},...Vl()},"VStepperItem"),kv=gt()({name:"VStepperItem",directives:{Ripple:xo},props:wv(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:l}=a
const o=Sl(e,Pv,!0),n=t.computed((()=>o?.value.value??e.value)),r=t.computed((()=>e.rules.every((e=>!0===e())))),i=t.computed((()=>!e.disabled&&e.editable)),s=t.computed((()=>e.error||!r.value)),u=t.computed((()=>e.complete||e.rules.length>0&&r.value)),c=t.computed((()=>s.value?e.errorIcon:u.value?e.completeIcon:e.editable?e.editIcon:e.icon)),d=t.computed((()=>({canEdit:i.value,hasError:s.value,hasCompleted:u.value,title:e.title,subtitle:e.subtitle,step:n.value,value:e.value})))
return At((()=>{const a=(!o||o.isSelected.value||u.value||i.value)&&!s.value&&!e.disabled,r=!(null==e.title&&!l.title),v=!(null==e.subtitle&&!l.subtitle)
return t.withDirectives(t.createVNode("button",{class:["v-stepper-item",{"v-stepper-item--complete":u.value,"v-stepper-item--disabled":e.disabled,"v-stepper-item--error":s.value},o?.selectedClass.value],disabled:!e.editable,onClick:function(){o?.toggle()}},[t.createVNode(nn,{key:"stepper-avatar",class:"v-stepper-item__avatar",color:a?e.color:void 0,size:24},{default:()=>[l.icon?.(d.value)??(c.value?t.createVNode(jl,{icon:c.value},null):n.value)]}),t.createVNode("div",{class:"v-stepper-item__content"},[r&&t.createVNode("div",{key:"title",class:"v-stepper-item__title"},[l.title?.(d.value)??e.title]),v&&t.createVNode("div",{key:"subtitle",class:"v-stepper-item__subtitle"},[l.subtitle?.(d.value)??e.subtitle]),l.default?.(d.value)])]),[[t.resolveDirective("ripple"),e.ripple&&e.editable,null]])})),{}}}),xv=Symbol.for("vuetify:v-stepper"),Nv=a({...C(Ki(),["continuous","nextIcon","prevIcon","showArrows","touch","mandatory"])},"VStepperWindow"),Cv=gt()({name:"VStepperWindow",props:Nv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=t.inject(xv,null),n=Ht(e,"modelValue"),r=t.computed({get:()=>null==n.value&&o?o.items.value.find((e=>o.selected.value.includes(e.id)))?.value:n.value,set(e){n.value=e}})
return At((()=>{const a=Xi.filterProps(e)
return t.createVNode(Xi,t.mergeProps({_as:"VStepperWindow"},a,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:"v-stepper-window",mandatory:!1,touch:!1}),l)})),{}}}),_v=a({...Qi()},"VStepperWindowItem"),Iv=gt()({name:"VStepperWindowItem",props:_v(),setup(e,a){let{slots:l}=a
return At((()=>{const a=es.filterProps(e)
return t.createVNode(es,t.mergeProps({_as:"VStepperWindowItem"},a,{class:"v-stepper-window-item"}),l)})),{}}}),Pv=Symbol.for("vuetify:v-stepper"),Bv=a({altLabels:Boolean,bgColor:String,editable:Boolean,hideActions:Boolean,items:{type:Array,default:()=>[]},itemTitle:{type:String,default:"title"},itemValue:{type:String,default:"value"},mobile:Boolean,nonLinear:Boolean,flat:Boolean,...bl({mandatory:"force",selectedClass:"v-stepper-item--selected"}),...Cs(),..._(bv(),["prevText","nextText"])},"VStepper"),Av=gt()({name:"VStepper",props:Bv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const{items:o,next:n,prev:r,selected:i}=wl(e,Pv),{color:s,editable:u,prevText:c,nextText:d}=t.toRefs(e),v=t.computed((()=>e.items.map(((t,a)=>({title:m(t,e.itemTitle,t),value:m(t,e.itemValue,a+1),raw:t}))))),p=t.computed((()=>o.value.findIndex((e=>i.value.includes(e.id)))))
return vt({VStepperItem:{editable:u,prevText:c,nextText:d},VStepperActions:{color:s,disabled:t.computed((()=>e.disabled?e.disabled:0===p.value?"prev":p.value===o.value.length-1&&"next")),prevText:c,nextText:d}}),At((()=>{const a=_s.filterProps(e),o=!(!l.header&&!e.items.length),i=e.items.length>0,s=!(e.hideActions||!i&&!l.actions)
return t.createVNode(_s,t.mergeProps(a,{color:e.bgColor,class:["v-stepper",{"v-stepper--alt-labels":e.altLabels,"v-stepper--flat":e.flat,"v-stepper--non-linear":e.nonLinear,"v-stepper--mobile":e.mobile},e.class],style:e.style}),{default:()=>[o&&t.createVNode(Sv,{key:"stepper-header"},{default:()=>[v.value.map(((e,a)=>t.createVNode(t.Fragment,null,[!!a&&t.createVNode(Dn,null,null),t.createVNode(kv,e,{default:l[`header-item.${e.value}`]??l.header,icon:l.icon,title:l.title,subtitle:l.subtitle})])))]}),i&&t.createVNode(Cv,{key:"stepper-window"},{default:()=>[v.value.map((e=>t.createVNode(Iv,{value:e.value},{default:()=>l[`item.${e.value}`]?.(e)??l.item?.(e)})))]}),l.default?.({prev:r,next:n}),s&&(l.actions?.({next:n,prev:r})??t.createVNode(Vv,{key:"stepper-actions","onClick:prev":r,"onClick:next":n},l))]})})),{prev:r,next:n}}}),Rv=a({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...en(),...Oo()},"VSwitch"),Tv=gt()({name:"VSwitch",inheritAttrs:!1,props:Rv(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,a){let{attrs:l,slots:o}=a
const n=Ht(e,"indeterminate"),r=Ht(e,"modelValue"),{loaderClasses:i}=Jl(e),{isFocused:s,focus:u,blur:c}=qo(e),d=t.ref(),v=t.computed((()=>"string"==typeof e.loading&&""!==e.loading?e.loading:e.color)),p=Nt(),f=t.computed((()=>e.id||`switch-${p}`))
function m(){n.value&&(n.value=!1)}function g(e){e.stopPropagation(),e.preventDefault(),d.value?.input?.click()}return At((()=>{const[a,p]=R(l),h=tn.filterProps(e),y=zo.filterProps(e)
return t.createVNode(tn,t.mergeProps({class:["v-switch",{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},i.value,e.class]},a,h,{modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,id:f.value,focused:s.value,style:e.style}),{...o,default:a=>{let{id:l,messagesId:i,isDisabled:s,isReadonly:f,isValid:h}=a
return t.createVNode(zo,t.mergeProps({ref:d},y,{modelValue:r.value,"onUpdate:modelValue":[e=>r.value=e,m],id:l.value,"aria-describedby":i.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:s.value,readonly:f.value,onFocus:u,onBlur:c},p),{...o,default:e=>{let{backgroundColorClasses:a,backgroundColorStyles:l}=e
return t.createVNode("div",{class:["v-switch__track",...a.value],style:l.value,onClick:g},null)},input:a=>{let{inputNode:l,icon:n,backgroundColorClasses:r,backgroundColorStyles:i}=a
return t.createVNode(t.Fragment,null,[l,t.createVNode("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":n||e.loading},e.inset?void 0:r.value],style:e.inset?void 0:i.value},[t.createVNode(Na,null,{default:()=>[e.loading?t.createVNode(Ql,{name:"v-switch",active:!0,color:!1===h.value?void 0:v.value},{default:e=>o.loader?o.loader(e):t.createVNode(Ul,{active:e.isActive,color:e.color,indeterminate:!0,size:"16",width:"2"},null)}):n&&t.createVNode(jl,{key:n,icon:n,size:"x-small"},null)]})])])}})}})})),{}}}),Ev=a({color:String,height:[Number,String],window:Boolean,...l(),...Qa(),...Ft(),...tl(),...ca(),...aa()},"VSystemBar"),Dv=gt()({name:"VSystemBar",props:Ev(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{backgroundColorClasses:n,backgroundColorStyles:r}=Ja(t.toRef(e,"color")),{elevationClasses:i}=el(e),{roundedClasses:s}=al(e),{ssrBootStyles:u}=il(),c=t.computed((()=>e.height??(e.window?32:24))),{layoutItemStyles:d}=Mt({id:e.name,order:t.computed((()=>parseInt(e.order,10))),position:t.shallowRef("top"),layoutSize:c,elementSize:c,active:t.computed((()=>!0)),absolute:t.toRef(e,"absolute")})
return At((()=>t.createVNode(e.tag,{class:["v-system-bar",{"v-system-bar--window":e.window},o.value,n.value,i.value,s.value,e.class],style:[r.value,d.value,u.value,e.style]},l))),{}}}),Fv=Symbol.for("vuetify:v-tabs"),$v=a({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...C(No({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),Mv=gt()({name:"VTab",props:$v(),setup(e,a){let{slots:l,attrs:o}=a
const{textColorClasses:n,textColorStyles:r}=Za(e,"sliderColor"),i=t.computed((()=>"horizontal"===e.direction)),s=t.shallowRef(!1),u=t.ref(),c=t.ref()
function d(e){let{value:t}=e
if(s.value=t,t){const e=u.value?.$el.parentElement?.querySelector(".v-tab--selected .v-tab__slider"),t=c.value
if(!e||!t)return
const a=getComputedStyle(e).color,l=e.getBoundingClientRect(),o=t.getBoundingClientRect(),n=i.value?"x":"y",r=i.value?"X":"Y",s=i.value?"right":"bottom",d=i.value?"width":"height",v=l[n]>o[n]?l[s]-o[s]:l[n]-o[n],p=Math.sign(v)>0?i.value?"right":"bottom":Math.sign(v)<0?i.value?"left":"top":"center",f=(Math.abs(v)+(Math.sign(v)<0?l[d]:o[d]))/Math.max(l[d],o[d])||0,m=1.5
he(t,{backgroundColor:[a,"currentcolor"],transform:[`translate${r}(${v}px) scale${r}(${l[d]/o[d]||0})`,`translate${r}(${v/m}px) scale${r}(${(f-1)/m+1})`,"none"],transformOrigin:Array(3).fill(p)},{duration:225,easing:bt})}}return At((()=>{const a=Co.filterProps(e)
return t.createVNode(Co,t.mergeProps({symbol:Fv,ref:u,class:["v-tab",e.class],style:e.style,tabindex:s.value?0:-1,role:"tab","aria-selected":String(s.value),active:!1},a,o,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":d}),{...l,default:()=>t.createVNode(t.Fragment,null,[l.default?.()??e.text,!e.hideSlider&&t.createVNode("div",{ref:c,class:["v-tab__slider",n.value],style:r.value},null)])})})),{}}})
const Lv=a({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...fv({mandatory:"force"}),...dl(),...ca()},"VTabs"),Ov=gt()({name:"VTabs",props:Lv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),n=t.computed((()=>{return(t=e.items)?t.map((e=>y(e)?e:{text:e,value:e})):[]
var t})),{densityClasses:r}=vl(e),{backgroundColorClasses:i,backgroundColorStyles:s}=Ja(t.toRef(e,"bgColor"))
return vt({VTab:{color:t.toRef(e,"color"),direction:t.toRef(e,"direction"),stacked:t.toRef(e,"stacked"),fixed:t.toRef(e,"fixedTabs"),sliderColor:t.toRef(e,"sliderColor"),hideSlider:t.toRef(e,"hideSlider")}}),At((()=>{const a=mv.filterProps(e)
return t.createVNode(mv,t.mergeProps(a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},r.value,i.value,e.class],style:[{"--v-tabs-height":h(e.height)},s.value,e.style],role:"tablist",symbol:Fv}),{default:()=>[l.default?l.default():n.value.map((e=>t.createVNode(Mv,t.mergeProps(e,{key:e.text}),null)))]})})),{}}}),zv=a({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...en(),...Kr()},"VTextarea"),jv=gt()({name:"VTextarea",directives:{Intersect:Ua},inheritAttrs:!1,props:zv(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,a){let{attrs:l,emit:o,slots:n}=a
const r=Ht(e,"modelValue"),{isFocused:i,focus:s,blur:u}=qo(e),c=t.computed((()=>"function"==typeof e.counterValue?e.counterValue(r.value):(r.value||"").toString().length)),d=t.computed((()=>l.maxlength?l.maxlength:!e.counter||"number"!=typeof e.counter&&"string"!=typeof e.counter?void 0:e.counter))
function v(t,a){e.autofocus&&t&&a[0].target?.focus?.()}const p=t.ref(),f=t.ref(),m=t.shallowRef(""),g=t.ref(),y=t.computed((()=>e.persistentPlaceholder||i.value||e.active))
function b(){g.value!==document.activeElement&&g.value?.focus(),i.value||s()}function V(e){b(),o("click:control",e)}function S(e){o("mousedown:control",e)}function w(a){a.stopPropagation(),b(),t.nextTick((()=>{r.value="",Z(e["onClick:clear"],a)}))}function k(a){const l=a.target
if(r.value=l.value,e.modelModifiers?.trim){const e=[l.selectionStart,l.selectionEnd]
t.nextTick((()=>{l.selectionStart=e[0],l.selectionEnd=e[1]}))}}const x=t.ref(),N=t.ref(+e.rows),C=t.computed((()=>["plain","underlined"].includes(e.variant)))
function _(){e.autoGrow&&t.nextTick((()=>{if(!x.value||!f.value)return
const t=getComputedStyle(x.value),a=getComputedStyle(f.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),o=x.value.scrollHeight,n=parseFloat(t.lineHeight),r=E(o??0,Math.max(parseFloat(e.rows)*n+l,parseFloat(a.getPropertyValue("--v-input-control-height"))),parseFloat(e.maxRows)*n+l||1/0)
N.value=Math.floor((r-l)/n),m.value=h(r)}))}let I
return t.watchEffect((()=>{e.autoGrow||(N.value=+e.rows)})),t.onMounted(_),t.watch(r,_),t.watch((()=>e.rows),_),t.watch((()=>e.maxRows),_),t.watch((()=>e.density),_),t.watch(x,(e=>{e?(I=new ResizeObserver(_),I.observe(x.value)):I?.disconnect()})),t.onBeforeUnmount((()=>{I?.disconnect()})),At((()=>{const a=!!(n.counter||e.counter||e.counterValue),o=!(!a&&!n.details),[s,h]=R(l),{modelValue:_,...I}=tn.filterProps(e),P=Zr(e)
return t.createVNode(tn,t.mergeProps({ref:p,modelValue:r.value,"onUpdate:modelValue":e=>r.value=e,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":C.value},e.class],style:e.style},s,I,{centerAffix:1===N.value&&!C.value,focused:i.value}),{...n,default:a=>{let{id:l,isDisabled:o,isDirty:s,isReadonly:c,isValid:d}=a
return t.createVNode(Xr,t.mergeProps({ref:f,style:{"--v-textarea-control-height":m.value},onClick:V,onMousedown:S,"onClick:clear":w,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},P,{id:l.value,active:y.value||s.value,centerAffix:1===N.value&&!C.value,dirty:s.value||e.dirty,disabled:o.value,focused:i.value,error:!1===d.value}),{...n,default:a=>{let{props:{class:l,...n}}=a
return t.createVNode(t.Fragment,null,[e.prefix&&t.createVNode("span",{class:"v-text-field__prefix"},[e.prefix]),t.withDirectives(t.createVNode("textarea",t.mergeProps({ref:g,class:l,value:r.value,onInput:k,autofocus:e.autofocus,readonly:c.value,disabled:o.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:b,onBlur:u},n,h),null),[[t.resolveDirective("intersect"),{handler:v},null,{once:!0}]]),e.autoGrow&&t.withDirectives(t.createVNode("textarea",{class:[l,"v-textarea__sizer"],id:`${n.id}-sizer`,"onUpdate:modelValue":e=>r.value=e,ref:x,readonly:!0,"aria-hidden":"true"},null),[[t.vModelText,r.value]]),e.suffix&&t.createVNode("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:o?l=>t.createVNode(t.Fragment,null,[n.details?.(l),a&&t.createVNode(t.Fragment,null,[t.createVNode("span",null,null),t.createVNode(Ur,{active:e.persistentCounter||i.value,value:c.value,max:d.value},n.counter)])]):void 0})})),zr({},p,f,g)}}),Hv=a({withBackground:Boolean,...l(),...aa(),...ca()},"VThemeProvider"),Wv=gt()({name:"VThemeProvider",props:Hv(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e)
return()=>e.withBackground?t.createVNode(e.tag,{class:["v-theme-provider",o.value,e.class],style:e.style},{default:()=>[l.default?.()]}):l.default?.()}}),Uv=a({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>null==e||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...l(),...dl(),...ca(),...aa()},"VTimeline"),Yv=gt()({name:"VTimeline",props:Uv(),setup(e,a){let{slots:l}=a
const{themeClasses:o}=oa(e),{densityClasses:n}=vl(e),{rtlClasses:r}=ea()
vt({VTimelineDivider:{lineColor:t.toRef(e,"lineColor")},VTimelineItem:{density:t.toRef(e,"density"),lineInset:t.toRef(e,"lineInset")}})
const i=t.computed((()=>{const t=e.side?e.side:"default"!==e.density?"end":null
return t&&`v-timeline--side-${t}`})),s=t.computed((()=>{const t=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"]
switch(e.truncateLine){case"both":return t
case"start":return t[0]
case"end":return t[1]
default:return null}}))
return At((()=>t.createVNode(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},o.value,n.value,i.value,r.value,e.class],style:[{"--v-timeline-line-thickness":h(e.lineThickness)},e.style]},l))),{}}}),Gv=a({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:Pl,iconColor:String,lineColor:String,...l(),...tl(),...Ll(),...Qa()},"VTimelineDivider"),qv=gt()({name:"VTimelineDivider",props:Gv(),setup(e,a){let{slots:l}=a
const{sizeClasses:o,sizeStyles:n}=Ol(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:i}=Ja(t.toRef(e,"dotColor")),{roundedClasses:s}=al(e,"v-timeline-divider__dot"),{elevationClasses:u}=el(e),{backgroundColorClasses:c,backgroundColorStyles:d}=Ja(t.toRef(e,"lineColor"))
return At((()=>t.createVNode("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t.createVNode("div",{class:["v-timeline-divider__before",c.value],style:d.value},null),!e.hideDot&&t.createVNode("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,o.value],style:n.value},[t.createVNode("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:r.value},[l.default?t.createVNode($a,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},l.default):t.createVNode(jl,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t.createVNode("div",{class:["v-timeline-divider__after",c.value],style:d.value},null)]))),{}}}),Kv=a({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:Pl,iconColor:String,lineInset:[Number,String],...l(),...Ma(),...Qa(),...tl(),...Ll(),...ca()},"VTimelineItem"),Xv=gt()({name:"VTimelineItem",props:Kv(),setup(e,a){let{slots:l}=a
const{dimensionStyles:o}=La(e),n=t.shallowRef(0),r=t.ref()
return t.watch(r,(e=>{e&&(n.value=e.$el.querySelector(".v-timeline-divider__dot")?.getBoundingClientRect().width??0)}),{flush:"post"}),At((()=>t.createVNode("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":h(n.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${h(e.lineInset)})`:h(0)},e.style]},[t.createVNode("div",{class:"v-timeline-item__body",style:o.value},[l.default?.()]),t.createVNode(qv,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:l.icon}),"compact"!==e.density&&t.createVNode("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&l.opposite?.()])]))),{}}}),Zv=a({...l(),...ml({variant:"text"})},"VToolbarItems"),Jv=gt()({name:"VToolbarItems",props:Zv(),setup(e,a){let{slots:l}=a
return vt({VBtn:{color:t.toRef(e,"color"),height:"inherit",variant:t.toRef(e,"variant")}}),At((()=>t.createVNode("div",{class:["v-toolbar-items",e.class],style:e.style},[l.default?.()]))),{}}}),Qv=a({id:String,text:String,...C($r({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),ep=gt()({name:"VTooltip",props:Qv(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:l}=a
const o=Ht(e,"modelValue"),{scopeId:n}=Ir(),r=Nt(),i=t.computed((()=>e.id||`v-tooltip-${r}`)),s=t.ref(),u=t.computed((()=>e.location.split(" ").length>1?e.location:e.location+" center")),c=t.computed((()=>"auto"===e.origin||"overlap"===e.origin||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center")),d=t.computed((()=>e.transition?e.transition:o.value?"scale-transition":"fade-transition")),v=t.computed((()=>t.mergeProps({"aria-describedby":i.value},e.activatorProps)))
return At((()=>{const a=Mr.filterProps(e)
return t.createVNode(Mr,t.mergeProps({ref:s,class:["v-tooltip",e.class],style:e.style,id:i.value},a,{modelValue:o.value,"onUpdate:modelValue":e=>o.value=e,transition:d.value,absolute:!0,location:u.value,origin:c.value,persistent:!0,role:"tooltip",activatorProps:v.value,_disableGlobalStack:!0},n),{activator:l.activator,default:function(){for(var t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o]
return l.default?.(...a)??e.text}})})),zr({},s)}}),tp=gt()({name:"VValidation",props:Jo(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:a}=t
const l=Qo(e,"validation")
return()=>a.default?.(l)}})
var ap=Object.freeze({__proto__:null,VAlert:To,VAlertTitle:Bo,VApp:ua,VAppBar:ul,VAppBarNavIcon:Io,VAppBarTitle:Po,VAutocomplete:mi,VAvatar:nn,VBadge:hi,VBanner:wi,VBannerActions:bi,VBannerText:Vi,VBottomNavigation:xi,VBottomSheet:Ii,VBreadcrumbs:Ei,VBreadcrumbsDivider:Bi,VBreadcrumbsItem:Ri,VBtn:Co,VBtnGroup:yl,VBtnToggle:Cl,VCard:ji,VCardActions:Di,VCardItem:Li,VCardSubtitle:Fi,VCardText:Oi,VCardTitle:$i,VCarousel:Ji,VCarouselItem:as,VCheckbox:ln,VCheckboxBtn:Ho,VChip:dn,VChipGroup:un,VClassIcon:Dl,VCode:ls,VCol:wc,VColorPicker:Is,VCombobox:Bs,VComponentIcon:Rl,VContainer:fc,VCounter:Ur,VDataIterator:_u,VDataTable:sc,VDataTableFooter:Au,VDataTableRow:Ju,VDataTableRows:ec,VDataTableServer:vc,VDataTableVirtual:cc,VDatePicker:td,VDatePickerControls:jc,VDatePickerHeader:Wc,VDatePickerMonth:Yc,VDatePickerMonths:qc,VDatePickerYears:Xc,VDefaultsProvider:$a,VDialog:Ci,VDialogBottomTransition:wa,VDialogTopTransition:ka,VDialogTransition:ya,VDivider:Dn,VExpandTransition:Ea,VExpandXTransition:Da,VExpansionPanel:dd,VExpansionPanelText:id,VExpansionPanelTitle:ud,VExpansionPanels:nd,VFabTransition:Sa,VFadeTransition:xa,VField:Xr,VFieldLabel:Gr,VFileInput:pd,VFooter:md,VForm:hd,VHover:bd,VIcon:jl,VImg:Ga,VInfiniteScroll:wd,VInput:tn,VItem:Cd,VItemGroup:Nd,VKbd:_d,VLabel:Do,VLayout:Pd,VLayoutItem:Ad,VLazy:Td,VLigatureIcon:El,VList:Un,VListGroup:_n,VListImg:Yn,VListItem:An,VListItemAction:qn,VListItemMedia:Xn,VListItemSubtitle:In,VListItemTitle:Pn,VListSubheader:Tn,VLocaleProvider:Dd,VMain:$d,VMenu:Hr,VMessages:Yo,VNavigationDrawer:Wd,VNoSsr:Ud,VOtpInput:Gd,VOverlay:Mr,VPagination:Pu,VParallax:Kd,VProgressCircular:Ul,VProgressLinear:Xl,VRadio:Zd,VRadioGroup:Qd,VRangeSlider:tv,VRating:lv,VResponsive:za,VRow:Lc,VScaleTransition:Na,VScrollXReverseTransition:_a,VScrollXTransition:Ca,VScrollYReverseTransition:Pa,VScrollYTransition:Ia,VSelect:ci,VSelectionControl:zo,VSelectionControlGroup:Lo,VSheet:_s,VSkeletonLoader:cv,VSlideGroup:mv,VSlideGroupItem:gv,VSlideXReverseTransition:Aa,VSlideXTransition:Ba,VSlideYReverseTransition:Ta,VSlideYTransition:Ra,VSlider:ws,VSnackbar:yv,VSpacer:Oc,VStepper:Av,VStepperActions:Vv,VStepperHeader:Sv,VStepperItem:kv,VStepperWindow:Cv,VStepperWindowItem:Iv,VSvgIcon:Tl,VSwitch:Tv,VSystemBar:Dv,VTab:Mv,VTable:ac,VTabs:Ov,VTextField:ei,VTextarea:jv,VThemeProvider:Wv,VTimeline:Yv,VTimelineItem:Xv,VToolbar:nl,VToolbarItems:Jv,VToolbarTitle:va,VTooltip:ep,VValidation:tp,VVirtualScroll:ri,VWindow:Xi,VWindowItem:es})
function lp(e,t){e._mutate?.[t.instance.$.uid]&&(e._mutate[t.instance.$.uid].observer.disconnect(),delete e._mutate[t.instance.$.uid])}const op={mounted:function(e,t){const a=t.modifiers||{},l=t.value,{once:o,immediate:n,...r}=a,i=!Object.keys(r).length,{handler:s,options:u}="object"==typeof l?l:{handler:l,options:{attributes:r?.attr??i,characterData:r?.char??i,childList:r?.child??i,subtree:r?.sub??i}},c=new MutationObserver((function(){let a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0
s?.(a,l),o&&lp(e,t)}))
n&&s?.([],c),e._mutate=Object(e._mutate),e._mutate[t.instance.$.uid]={observer:c},c.observe(e,u)},unmounted:lp}
const np={mounted:function(e,t){const a=t.value,l={passive:!t.modifiers?.active}
window.addEventListener("resize",a,l),e._onResize=Object(e._onResize),e._onResize[t.instance.$.uid]={handler:a,options:l},t.modifiers?.quiet||a()},unmounted:function(e,t){if(!e._onResize?.[t.instance.$.uid])return
const{handler:a,options:l}=e._onResize[t.instance.$.uid]
window.removeEventListener("resize",a,l),delete e._onResize[t.instance.$.uid]}}
function rp(e,t){const{self:a=!1}=t.modifiers??{},l=t.value,o="object"==typeof l&&l.options||{passive:!0},n="function"==typeof l||"handleEvent"in l?l:l.handler,r=a?e:t.arg?document.querySelector(t.arg):window
r&&(r.addEventListener("scroll",n,o),e._onScroll=Object(e._onScroll),e._onScroll[t.instance.$.uid]={handler:n,options:o,target:a?void 0:r})}function ip(e,t){if(!e._onScroll?.[t.instance.$.uid])return
const{handler:a,options:l,target:o=e}=e._onScroll[t.instance.$.uid]
o.removeEventListener("scroll",a,l),delete e._onScroll[t.instance.$.uid]}const sp={mounted:rp,unmounted:ip,updated:function(e,t){t.value!==t.oldValue&&(ip(e,t),rp(e,t))}}
var up=Object.freeze({__proto__:null,ClickOutside:Dr,Intersect:Ua,Mutate:op,Resize:np,Ripple:xo,Scroll:sp,Touch:Yi})
function cp(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
const{blueprint:a,...l}=e,n=L(a,l),{aliases:r={},components:i={},directives:s={}}=n,u=ct(n.defaults),c=wr(n.display,n.ssr),d=la(n.theme),v=$l(n.icons),p=Zt(n.locale),f=mu(n.date,p),m=e=>{for(const t in s)e.directive(t,s[t])
for(const t in i)e.component(t,i[t])
for(const t in r)e.component(t,mt({...r[t],name:t,aliasName:r[t].name}))
if(d.install(e),e.provide(ut,u),e.provide(hr,c),e.provide(ta,d),e.provide(Bl,v),e.provide(Xt,p),e.provide(pu,f.options),e.provide(fu,f.instance),o&&n.ssr)if(e.$nuxt)e.$nuxt.hook("app:suspense:resolve",(()=>{c.update()}))
else{const{mount:a}=e
e.mount=function(){const l=a(...arguments)
return t.nextTick((()=>c.update())),e.mount=a,l}}Nt.reset(),("boolean"!=typeof __VUE_OPTIONS_API__||__VUE_OPTIONS_API__)&&e.mixin({computed:{$vuetify(){return t.reactive({defaults:dp.call(this,ut),display:dp.call(this,hr),theme:dp.call(this,ta),icons:dp.call(this,Bl),locale:dp.call(this,Xt),date:dp.call(this,fu)})}}})}
return{install:m,defaults:u,display:c,theme:d,icons:v,locale:p,date:f}}function dp(e){const t=this.$,a=t.parent?.provides??t.vnode.appContext?.provides
if(a&&e in a)return a[e]}cp.version="3.4.7"
const vp=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return cp({components:ap,directives:up,...e})},pp="3.4.7"
vp.version=pp,e.components=ap,e.createVuetify=vp,e.directives=up,e.useDate=hu,e.useDefaults=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0
const{props:a,provideSubDefaults:l}=ft(e,t)
return l(),a},e.useDisplay=xr,e.useLayout=$t,e.useLocale=Jt,e.useRtl=ea,e.useTheme=na,e.version=pp}))
//# sourceMappingURL=vuetify.min.js.map