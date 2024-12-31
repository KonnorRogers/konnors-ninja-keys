import{a as x,b as j,c as E}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-VUR7V3FZ.js";import{a as C}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-RLM5VMTV.js";import{a as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-UYJG54BB.js";import{a as w,c as f,d as _,e as m,g as R}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-Q477UYHU.js";import{d as y}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var k=j(class extends E{constructor(o){var e;if(super(o),o.type!==x.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var t,r;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(let n in e)e[n]&&!(!((t=this.nt)===null||t===void 0)&&t.has(n))&&this.it.add(n);return this.render(e)}let i=o.element.classList;this.it.forEach(n=>{n in e||(i.remove(n),this.it.delete(n))});for(let n in e){let s=!!e[n];s===this.it.has(n)||!((r=this.nt)===null||r===void 0)&&r.has(n)||(s?(i.add(n),this.it.add(n)):(i.remove(n),this.it.delete(n)))}return _}});var v=class extends E{constructor(e){if(super(e),this.et=m,e.type!==x.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===m||e==null)return this.ft=void 0,this.et=e;if(e===_)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};v.directiveName="unsafeHTML",v.resultType=1;var S=j(v);function*z(o,e){let t=typeof e=="function";if(o!==void 0){let r=-1;for(let i of o)r>-1&&(yield t?e(r):e),r++,yield i}}function I(o,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,t,r);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n}var L=o=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(o,e):((t,r)=>{let{kind:i,elements:n}=r;return{kind:i,elements:n,finisher(s){customElements.define(t,s)}}})(o,e);var P,$e=((P=window.HTMLSlotElement)===null||P===void 0?void 0:P.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var D=w`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var T=class extends R{render(){return f`<span><slot></slot></span>`}};T.styles=[D];T=I([L("mwc-icon")],T);function H(o,e,t){return o?e():t?.()}var p=o=>o??m;var O=-1/0;var G=-.005,K=-.005,Q=-.01,q=1,U=.9,J=.8,W=.7,X=.6;function Y(o){return o.toLowerCase()===o}function Z(o){return o.toUpperCase()===o}function ee(o){for(var e=o.length,t=new Array(e),r="/",i=0;i<e;i++){var n=o[i];r==="/"?t[i]=U:r==="-"||r==="_"||r===" "?t[i]=J:r==="."?t[i]=X:Y(r)&&Z(n)?t[i]=W:t[i]=0,r=n}return t}function te(o,e,t,r){for(var i=o.length,n=e.length,s=o.toLowerCase(),l=e.toLowerCase(),c=ee(e,c),a=0;a<i;a++){t[a]=new Array(n),r[a]=new Array(n);for(var d=O,M=a===i-1?K:Q,u=0;u<n;u++)if(s[a]===l[u]){var b=O;a?u&&(b=Math.max(r[a-1][u-1]+c[u],t[a-1][u-1]+q)):b=u*G+c[u],t[a][u]=b,r[a][u]=d=Math.max(b,d+M)}else t[a][u]=O,r[a][u]=d=d+M}}function N(o,e){var t=o.length,r=e.length,i=new Array(t);if(!t||!r)return i;if(t===r){for(var n=0;n<t;n++)i[n]=n;return i}if(r>1024)return i;var s=new Array(t),l=new Array(t);te(o,e,s,l);for(var c=!1,n=t-1,a=r-1;n>=0;n--)for(;a>=0;a--)if(s[n][a]!==O&&(c||s[n][a]===l[n][a])){c=n&&a&&l[n][a]===s[n-1][a-1]+q,i[n]=a--;break}return i}function A(o,e){o=o.toLowerCase(),e=e.toLowerCase();for(var t=o.length,r=0,i=0;r<t;r+=1)if(i=e.indexOf(o[r],i)+1,i===0)return!1;return!0}function B(o){return new RegExp(o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function V(o,e,t){if(!o.trim())return e;let r=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+B(o).source+"+","g");return e.replaceAll(r,t)}function F(o,e,t=r=>r){if(!e)return"";if(!o)return e;let r=o.split(/\s+/);if(!r.some(c=>A(c,e)))return e;let n=e.split(""),s=[];[o,...r].forEach(c=>{A(c,e)&&(s=s.concat(N(c,e)))}),s=[...new Set(s)].sort((c,a)=>c-a);let l=[];for(let c=0;c<n.length;c++){if(!s.includes(c)){l.push(n[c]);continue}let a=ne(c,s);if(a==null)continue;let d="";d=t(n.slice(c,a+1).join("")),l.push(d),c=a}return l.join("")}function ne(o,e){let t=e.findIndex(i=>i===o),r=null;if(t===-1)return null;for(let i=t;i<e.length;i++){r=e[i];for(let n=i+1;n<e.length;n++){let s=e[n];if(s==null||s!==r+1)return r;r=e[n]}}return r}var h=class extends C{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=e=>`<mark part="ninja-action__highlight">${e}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let e=this.shadowRoot?.querySelector("a");e&&e.click()}forceClick(){let e=this.shadowRoot?.querySelector("a");e&&e.click()}updated(e){e.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let e={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(e):f`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${k(e)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(e){let t=this.action.attributes||{},{download:r,hreflang:i,ping:n,referrerpolicy:s,rel:l,target:c,type:a}=t;return f`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${k(e)}
        href=${this.action.href}
        download=${p(r)}
        hreflang=${p(i)}
        ping=${p(n)}
        referrerpolicy=${p(s)}
        rel=${p(l)}
        target=${p(c)}
        type=${p(a)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(e){let t=this.constructor;return e.replaceAll(/&/g,t.escapeMap["&"]).replaceAll(/[<>'"]/g,r=>t.escapeMap[r]||r)}encodeString(e){let t=this.constructor;return e.replaceAll(/&/g,`<span>${t.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,r=>`<span>${t.escapeMap[r]||r}</span>`)}renderMatch(e,t){let r=this.escapeString(t),i=this.escapeString(e);return this.searchType==="regex"?V(i,r,this.__regexMatchRender):this.searchType==="fuzzy"?F(i,r,this.__fuzzyMatchRender):""}renderBody(){let e;this.action.mdIcon?e=f`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=S(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{title:t,content:r}=this.action;return t&&this.highlightMatches&&(t=this.renderMatch(this.searchQuery,t)),r&&this.highlightMatches&&(r=this.renderMatch(this.searchQuery,r)),f`
      <div part="ninja-action__header" class="ninja-action__header">
        ${e}
        <div part="ninja-action__title" class="ninja-title">
          ${S(t)}
        </div>
        ${this.renderHotkey()}
      </div>

      ${H(r,()=>f`<small part="ninja-action__content" class="ninja-action__content"
            >${S(r)}</small
          >`)}
    `}renderHotkey(){let e;return this.action.hotkey&&(this.hotKeysJoinedView?e=this.action.hotkey.split(",").map(t=>{let r=t.split("+"),i=f`${z(r.map(n=>f`<kbd part="ninja-hotkey">${n}</kbd>`),"+")}`;return f`<div
            part="ninja-hotkeys"
            class="ninja-hotkey ninja-hotkeys"
          >
            ${i}
          </div>`}):e=this.action.hotkey.split(",").map(t=>{let i=t.split("+").map(n=>f`<kbd part="ninja-hotkey" class="ninja-hotkey">${n}</kbd>`);return f`<kbd part="ninja-hotkeys" class="ninja-hotkeys"
            >${i}</kbd
          >`})),e}};y(h,"baseName","ninja-action"),y(h,"styles",[$,w`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: var(--ninja-accent-color);
        padding: 1px 3px;
      }

      .ninja-action {
        padding: 0.75em 8px;
        display: flex;
        flex-direction: column;
        border-inline-end: 2px solid transparent;
        border-inline-start: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: transparent;
        transition: color 0s ease 0s;
        width: 100%;
        row-gap: 8px;
        text-decoration: none;
        color: currentColor;
      }

      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-inline-end: 2px solid var(--ninja-accent-color);
        border-inline-start: 2px solid var(--ninja-accent-color);
        outline: transparent;
      }

      .ninja-action__header {
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: center;
      }

      .ninja-action__content {
        border-top: 1px solid gray;
        padding-top: 0.5em;
        font-size: 0.8em;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        /** This has surprisingly good browser support. */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }

      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        color: var(--ninja-icon-color);
        position: relative;
        margin-inline-end: 0.5em;
      }

      .ninja-title {
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .ninja-hotkeys {
        flex-shrink: 0;
        width: min-content;
        display: flex;
      }

      .ninja-hotkeys kbd {
        font-family: inherit;
      }
      .ninja-hotkey {
        background: var(--ninja-secondary-background-color);
        padding: 0.06em 0.25em;
        border-radius: var(--ninja-key-border-radius);
        text-transform: capitalize;
        color: var(--ninja-secondary-text-color);
        font-size: 0.75em;
        font-family: inherit;
      }

      .ninja-hotkey + .ninja-hotkey {
        margin-inline-end: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-inline-end: 1em;
      }
    `]),y(h,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),y(h,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});export{k as a,A as b,B as c,h as d};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-RUOLNFJM.js.map
