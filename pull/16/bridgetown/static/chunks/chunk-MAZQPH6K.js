var R=window,O=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,z=Symbol(),tt=new WeakMap,w=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(O&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tt.set(e,t))}return t}toString(){return this.cssText}},et=n=>new w(typeof n=="string"?n:n+"",void 0,z),yt=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new w(e,n,z)},W=(n,t)=>{O?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{let s=document.createElement("style"),i=R.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)})},T=O?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return et(e)})(n):n;var q,M=window,st=M.trustedTypes,St=st?st.emptyScript:"",it=M.reactiveElementPolyfillSupport,J={toAttribute(n,t){switch(t){case Boolean:n=n?St:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},nt=(n,t)=>t!==n&&(t==t||n==n),K={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:nt},F="finalized",v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((e,s)=>{let i=this._$Ep(s,e);i!==void 0&&(this._$Ev.set(i,s),t.push(i))}),t}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){let s=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){return{get(){return this[e]},set(i){let r=this[t];this[e]=i,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||K}static finalize(){if(this.hasOwnProperty(F))return!1;this[F]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let e=this.properties,s=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(let i of s)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(T(i))}else t!==void 0&&e.push(T(t));return e}static _$Ep(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,s;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)===null||s===void 0||s.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;let e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return W(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostConnected)===null||s===void 0?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var s;return(s=e.hostDisconnected)===null||s===void 0?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e,s=K){var i;let r=this.constructor._$Ep(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?s.converter:J).toAttribute(e,s.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var s;let i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){let o=i.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((s=o.converter)===null||s===void 0?void 0:s.fromAttribute)!==void 0?o.converter:J;this._$El=r,this[r]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,s){let i=!0;t!==void 0&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||nt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,s))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(s)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(s)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(s=>{var i;return(i=s.hostUpdated)===null||i===void 0?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,s)=>this._$EO(s,this[s],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};v[F]=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},it?.({ReactiveElement:v}),((q=M.reactiveElementVersions)!==null&&q!==void 0?q:M.reactiveElementVersions=[]).push("1.6.2");var Z,k=window,E=k.trustedTypes,ot=E?E.createPolicy("lit-html",{createHTML:n=>n}):void 0,L="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,Q="?"+_,Et=`<${Q}>`,m=document,U=()=>m.createComment(""),P=n=>n===null||typeof n!="object"&&typeof n!="function",ut=Array.isArray,pt=n=>ut(n)||typeof n?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,rt=/-->/g,lt=/>/g,A=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,at=/"/g,$t=/^(?:script|style|textarea|title)$/i,vt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Pt=vt(1),Ht=vt(2),g=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),dt=new WeakMap,f=m.createTreeWalker(m,129,null,!1);function _t(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}var At=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=x;for(let a=0;a<e;a++){let l=n[a],h,d,c=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===x?d[1]==="!--"?o=rt:d[1]!==void 0?o=lt:d[2]!==void 0?($t.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=A):d[3]!==void 0&&(o=A):o===A?d[0]===">"?(o=i??x,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,h=d[1],o=d[3]===void 0?A:d[3]==='"'?at:ht):o===at||o===ht?o=A:o===rt||o===lt?o=x:(o=A,i=void 0);let $=o===A&&n[a+1].startsWith("/>")?" ":"";r+=o===x?l+Et:c>=0?(s.push(h),l.slice(0,c)+L+l.slice(c)+_+$):l+_+(c===-2?(s.push(void 0),a):$)}return[_t(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},H=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,a=t.length-1,l=this.parts,[h,d]=At(t,e);if(this.el=n.createElement(h,s),f.currentNode=this.el.content,e===2){let c=this.el.content,p=c.firstChild;p.remove(),c.append(...p.childNodes)}for(;(i=f.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let c=[];for(let p of i.getAttributeNames())if(p.endsWith(L)||p.startsWith(_)){let $=d[o++];if(c.push(p),$!==void 0){let gt=i.getAttribute($.toLowerCase()+L).split(_),N=/([.?@])?(.*)/.exec($);l.push({type:1,index:r,name:N[2],strings:gt,ctor:N[1]==="."?B:N[1]==="?"?D:N[1]==="@"?I:S})}else l.push({type:6,index:r})}for(let p of c)i.removeAttribute(p)}if($t.test(i.tagName)){let c=i.textContent.split(_),p=c.length-1;if(p>0){i.textContent=E?E.emptyScript:"";for(let $=0;$<p;$++)i.append(c[$],U()),f.nextNode(),l.push({type:2,index:++r});i.append(c[p],U())}}}else if(i.nodeType===8)if(i.data===Q)l.push({type:2,index:r});else{let c=-1;for(;(c=i.data.indexOf(_,c+1))!==-1;)l.push({type:7,index:r}),c+=_.length-1}r++}}static createElement(t,e){let s=m.createElement("template");return s.innerHTML=t,s}};function y(n,t,e=n,s){var i,r,o,a;if(t===g)return t;let l=s!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[s]:e._$Cl,h=P(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((r=l?._$AO)===null||r===void 0||r.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,e,s)),s!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[s]=l:e._$Cl=l),l!==void 0&&(t=y(n,l._$AS(n,t.values),l,s)),t}var j=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;let{el:{content:s},parts:i}=this._$AD,r=((e=t?.creationScope)!==null&&e!==void 0?e:m).importNode(s,!0);f.currentNode=r;let o=f.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new b(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new V(o,this,t)),this._$AV.push(d),h=i[++l]}a!==h?.index&&(o=f.nextNode(),a++)}return f.currentNode=m,r}v(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},b=class n{constructor(t,e,s,i){var r;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cp=(r=i?.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),P(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==g&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):pt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&P(this._$AH)?this._$AA.nextSibling.data=t:this.$(m.createTextNode(t)),this._$AH=t}g(t){var e;let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=H.createElement(_t(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(s);else{let o=new j(r,this),a=o.u(this.options);o.v(s),this.$(a),this._$AH=o}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new H(t)),e}T(t){ut(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.k(U()),this.k(U()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)===null||s===void 0||s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},S=class{constructor(t,e,s,i,r){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=y(this,t,e,0),o=!P(t)||t!==this._$AH&&t!==g,o&&(this._$AH=t);else{let a=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=y(this,a[s+l],e,l),h===g&&(h=this._$AH[l]),o||(o=!P(h)||h!==this._$AH[l]),h===u?t=u:t!==u&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!i&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},B=class extends S{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}},bt=E?E.emptyScript:"",D=class extends S{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}},I=class extends S{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){var s;if((t=(s=y(this,t,e,0))!==null&&s!==void 0?s:u)===g)return;let i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,s;typeof this._$AH=="function"?this._$AH.call((s=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&s!==void 0?s:this.element,t):this._$AH.handleEvent(t)}},V=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}},Nt={O:L,P:_,A:Q,C:1,M:At,L:j,R:pt,D:y,I:b,V:S,H:D,N:I,U:B,F:V},ct=k.litHtmlPolyfillSupport;ct?.(H,b),((Z=k.litHtmlVersions)!==null&&Z!==void 0?Z:k.litHtmlVersions=[]).push("2.8.0");var ft=(n,t,e)=>{var s,i;let r=(s=e?.renderBefore)!==null&&s!==void 0?s:t,o=r._$litPart$;if(o===void 0){let a=(i=e?.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=o=new b(t.insertBefore(U(),a),a,void 0,e??{})}return o._$AI(n),o};var X,Y;var C=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;let s=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=s.firstChild),s}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return g}};C.finalized=!0,C._$litElement$=!0,(X=globalThis.litElementHydrateSupport)===null||X===void 0||X.call(globalThis,{LitElement:C});var mt=globalThis.litElementPolyfillSupport;mt?.({LitElement:C});((Y=globalThis.litElementVersions)!==null&&Y!==void 0?Y:globalThis.litElementVersions=[]).push("3.3.2");export{yt as a,Pt as b,g as c,u as d,Nt as e,C as f};
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-MAZQPH6K.js.map
