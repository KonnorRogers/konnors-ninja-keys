import{a as _,b as j,c as O}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-4A34YUFH.js";import{a as R}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-MG7MCOCR.js";import{a as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ZPHIMDRV.js";import{a as w,b as f,c as x,d as h,f as M}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-JK65MYUH.js";import{d as b}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var E=j(class extends O{constructor(o){var e;if(super(o),o.type!==_.ATTRIBUTE||o.name!=="class"||((e=o.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){var n,t;if(this.it===void 0){this.it=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!(!((n=this.nt)===null||n===void 0)&&n.has(r))&&this.it.add(r);return this.render(e)}let i=o.element.classList;this.it.forEach(r=>{r in e||(i.remove(r),this.it.delete(r))});for(let r in e){let s=!!e[r];s===this.it.has(r)||!((t=this.nt)===null||t===void 0)&&t.has(r)||(s?(i.add(r),this.it.add(r)):(i.remove(r),this.it.delete(r)))}return x}});var y=class extends O{constructor(e){if(super(e),this.et=h,e.type!==_.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===h||e==null)return this.ft=void 0,this.et=e;if(e===x)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.et)return this.ft;this.et=e;let n=[e];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};y.directiveName="unsafeHTML",y.resultType=1;var k=j(y);function*z(o,e){let n=typeof e=="function";if(o!==void 0){let t=-1;for(let i of o)t>-1&&(yield n?e(t):e),t++,yield i}}function I(o,e,n,t){var i=arguments.length,r=i<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,n):t,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,n,t);else for(var l=o.length-1;l>=0;l--)(s=o[l])&&(r=(i<3?s(r):i>3?s(e,n,r):s(e,n))||r);return i>3&&r&&Object.defineProperty(e,n,r),r}var L=o=>e=>typeof e=="function"?((n,t)=>(customElements.define(n,t),t))(o,e):((n,t)=>{let{kind:i,elements:r}=t;return{kind:i,elements:r,finisher(s){customElements.define(n,s)}}})(o,e);var P,$e=((P=window.HTMLSlotElement)===null||P===void 0?void 0:P.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(n=>n.nodeType===Node.ELEMENT_NODE);var H=w`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var A=class extends M{render(){return f`<span><slot></slot></span>`}};A.styles=[H];A=I([L("mwc-icon")],A);function q(o,e,n){return o?e():n?.()}var p=o=>o??h;var S=-1/0;var G=-.005,K=-.005,Q=-.01,D=1,U=.9,J=.8,W=.7,X=.6;function Y(o){return o.toLowerCase()===o}function Z(o){return o.toUpperCase()===o}function ee(o){for(var e=o.length,n=new Array(e),t="/",i=0;i<e;i++){var r=o[i];t==="/"?n[i]=U:t==="-"||t==="_"||t===" "?n[i]=J:t==="."?n[i]=X:Y(t)&&Z(r)?n[i]=W:n[i]=0,t=r}return n}function te(o,e,n,t){for(var i=o.length,r=e.length,s=o.toLowerCase(),l=e.toLowerCase(),c=ee(e,c),a=0;a<i;a++){n[a]=new Array(r),t[a]=new Array(r);for(var d=S,C=a===i-1?K:Q,u=0;u<r;u++)if(s[a]===l[u]){var g=S;a?u&&(g=Math.max(t[a-1][u-1]+c[u],n[a-1][u-1]+D)):g=u*G+c[u],n[a][u]=g,t[a][u]=d=Math.max(g,d+C)}else n[a][u]=S,t[a][u]=d=d+C}}function N(o,e){var n=o.length,t=e.length,i=new Array(n);if(!n||!t)return i;if(n===t){for(var r=0;r<n;r++)i[r]=r;return i}if(t>1024)return i;var s=new Array(n),l=new Array(n);te(o,e,s,l);for(var c=!1,r=n-1,a=t-1;r>=0;r--)for(;a>=0;a--)if(s[r][a]!==S&&(c||s[r][a]===l[r][a])){c=r&&a&&l[r][a]===s[r-1][a-1]+D,i[r]=a--;break}return i}function T(o,e){o=o.toLowerCase(),e=e.toLowerCase();for(var n=o.length,t=0,i=0;t<n;t+=1)if(i=e.indexOf(o[t],i)+1,i===0)return!1;return!0}function B(o){return new RegExp(o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function V(o,e,n=t=>t){let t=B(o);return e.replaceAll(t,i=>n(i))}function F(o,e,n=t=>t){if(!e)return"";if(!o)return e;let t=o.split(/\s+/);if(!t.some(c=>T(c,e)))return e;let r=e.split(""),s=[];[o,...t].forEach(c=>{T(c,e)&&(s=s.concat(N(c,e)))}),s=[...new Set(s)].sort((c,a)=>c-a);let l=[];for(let c=0;c<r.length;c++){if(!s.includes(c)){l.push(r[c]);continue}let a=ne(c,s);if(a==null)continue;let d="";d=n(r.slice(c,a+1).join("")),l.push(d),c=a}return l.join("")}function ne(o,e){let n=e.findIndex(i=>i===o),t=null;if(n===-1)return null;for(let i=n;i<e.length;i++){t=e[i];for(let r=i+1;r<e.length;r++){let s=e[r];if(s==null||s!==t+1)return t;t=e[r]}}return t}var v=class extends R{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0}));let e=this.shadowRoot?.querySelector("a");e&&e.click()}forceClick(){let e=this.shadowRoot?.querySelector("a");e&&e.click()}updated(e){e.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true")))}render(){let e={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(e):f`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${E(e)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(e){let n=this.action.attributes||{},{download:t,hreflang:i,ping:r,referrerpolicy:s,rel:l,target:c,type:a}=n;return f`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${E(e)}
        href=${this.action.href}
        download=${p(t)}
        hreflang=${p(i)}
        ping=${p(r)}
        referrerpolicy=${p(s)}
        rel=${p(l)}
        target=${p(c)}
        type=${p(a)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(e){return e.replaceAll(/&/g,"&amp;").replaceAll(/</g,"&lt;").replaceAll(/>/g,"&gt;").replaceAll(/"/g,"&quot;").replaceAll(/'/g,"&#x27;")}renderMatch(e,n){let t=this.escapeString(n),i=this.escapeString(e);function r(s){return`<mark part="match-highlight">${s}</mark>`}return this.searchType==="regex"?V(i,t,r):this.searchType==="fuzzy"?F(i,t,r):""}renderBody(){let e;this.action.mdIcon?e=f`<mwc-icon part="ninja-icon" class="ninja-icon">${this.action.mdIcon}</mwc-icon>`:this.action.icon&&(e=k(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{title:n,content:t}=this.action;return n&&this.highlightMatches&&(n=this.renderMatch(this.searchQuery,n)),t&&this.highlightMatches&&(t=this.renderMatch(this.searchQuery,t)),f`
        <div part="ninja-action__header" class="ninja-action__header">
          ${e}
          <div part="ninja-action__title" class="ninja-title">${k(n)}</div>
          ${this.renderHotkey()}
        </div>

        ${q(t,()=>f`<div part="ninja-action__content" class="ninja-action__content">
            ${k(t)}
          </div>`)}
    `}renderHotkey(){let e;return this.action.hotkey&&(this.hotKeysJoinedView?e=this.action.hotkey.split(",").map(n=>{let t=n.split("+"),i=f`${z(t.map(r=>f`<kbd part="ninja-hotkey">${r}</kbd>`),"+")}`;return f`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${i}
          </div>`}):e=this.action.hotkey.split(",").map(n=>{let i=n.split("+").map(r=>f`<kbd part="ninja-hotkey" class="ninja-hotkey">${r}</kbd>`);return f`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${i}</kbd>`})),e}};b(v,"baseName","ninja-action"),b(v,"styles",[$,w`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: Highlight;
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
    `]),b(v,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});export{E as a,T as b,B as c,v as d};
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
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-NYV7GUCX.js.map
