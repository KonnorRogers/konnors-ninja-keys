import{a as g,b,c as x}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-XTJNYE35.js";import{c as y}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-EF2BL6MH.js";import{a as C}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-2NYBYV2O.js";import{a as _,b as h,d as m,e as A}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-QMUAW2TL.js";import{d}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var{I:j}=A;var w=e=>e.strings===void 0,k=()=>document.createComment(""),H=(e,t,s)=>{let i=e._$AA.parentNode,a=t===void 0?e._$AB:t._$AA;if(s===void 0){let r=i.insertBefore(k(),a),l=i.insertBefore(k(),a);s=new j(r,l,e,e.options)}else{let r=s._$AB.nextSibling,l=s._$AM,$=l!==e;if($){let o;s._$AQ?.(e),s._$AM=e,s._$AP!==void 0&&(o=e._$AU)!==l._$AU&&s._$AP(o)}if(r!==a||$){let o=s._$AA;for(;o!==r;){let R=o.nextSibling;i.insertBefore(o,a),o=R}}}return s},I=(e,t,s=e)=>(e._$AI(t,s),e),M={},L=(e,t=M)=>e._$AH=t,K=e=>e._$AH,N=e=>{e._$AP?.(!1,!0);let t=e._$AA,s=e._$AB.nextSibling;for(;t!==s;){let i=t.nextSibling;t.remove(),t=i}};var n=(e,t)=>{let s=e._$AN;if(s===void 0)return!1;for(let i of s)i._$AO?.(t,!1),n(i,t);return!0},u=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},T=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),Y(t)}};function B(e){this._$AN!==void 0?(u(this),this._$AM=e,T(this)):this._$AM=e}function D(e,t=!1,s=0){let i=this._$AH,a=this._$AN;if(a!==void 0&&a.size!==0)if(t)if(Array.isArray(i))for(let r=s;r<i.length;r++)n(i[r],!1),u(i[r]);else i!=null&&(n(i,!1),u(i));else n(this,e)}var Y=e=>{e.type==g.CHILD&&(e._$AP??(e._$AP=D),e._$AQ??(e._$AQ=B))},p=class extends x{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,i){super._$AT(t,s,i),T(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(n(this,t),u(this))}setValue(t){if(w(this._$Ct))this._$Ct._$AI(t,this);else{let s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}};var E=()=>new v,v=class{},f=new WeakMap,P=b(class extends p{render(e){return m}update(e,[t]){let s=t!==this.Y;return s&&this.Y!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),m}rt(e){if(this.isConnected||(e=void 0),typeof this.Y=="function"){let t=this.ht??globalThis,s=f.get(t);s===void 0&&(s=new WeakMap,f.set(t,s)),s.get(this.Y)!==void 0&&this.Y.call(this.ht,void 0),s.set(this.Y,e),e!==void 0&&this.Y.call(this.ht,e)}else this.Y.value=e}get lt(){return typeof this.Y=="function"?f.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var c=class extends y{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=E()}render(){let t="";if(!this.hideBreadcrumbs){let s=[];if(this.breadcrumbs)for(let i of this.breadcrumbs)s.push(h`<button
              type="button"
              @click=${()=>this.selectParent(i)}
              class="breadcrumb"
            >
              ${i}
            </button>`);t=h`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${s}

        <button
          type="button"
          class="breadcrumb breadcrumb--close"
          @click=${this._close}
        >
          Cancel
        </button>
      </div>`}return h`
      ${t}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${P(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
          aria-labelledby="search-label"
          aria-expanded="${this.expanded}"
          aria-controls="${this.controls} breadcrumb-list"
          aria-autocomplete="list"
          aria-activedescendant="${this.activeDescendant}"
          role="combobox"
        />

        <div class="visually-hidden">
          <slot name="search-label" id="search-label">
            <span>${this.searchLabel}</span>
          </slot>
        </div>
      </div>
    `}setSearch(t){this._inputRef.value&&(this._inputRef.value.value=t)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(t){let s=t.target;s instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:s.value},bubbles:!0,composed:!0}))}selectParent(t){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:t},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};d(c,"baseName","ninja-header"),d(c,"styles",[C,_`
      :host {
        flex: 1;
        position: relative;
      }
      .search {
        padding: 1.25em;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 0px;
        border: none;
        appearance: none;
        font-size: 1.125em;
        background: transparent;
        caret-color: var(--ninja-accent-color);
        color: var(--ninja-text-color);
        outline: transparent;
        font-family: var(--ninja-font-family);
      }
      .search::placeholder {
        color: var(--ninja-placeholder-color);
      }
      .breadcrumb-list {
        padding: 1em 1em 0 1em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        flex: initial;
      }

      .breadcrumb {
        background: var(--ninja-secondary-background-color);
        text-align: center;
        line-height: 1.2em;
        border-radius: var(--ninja-key-border-radius);
        border: 0;
        cursor: pointer;
        padding: 0.4em 0.6em;
        color: var(--ninja-secondary-text-color);
        margin-right: 0.5em;
        outline: transparent;
        font-family: var(--ninja-font-family);
      }

      .breadcrumb:focus-visible {
        background-color: var(--ninja-selected-background);
        color: var(--ninja-secondary-text-color);
      }

      .breadcrumb:last-child {
        margin-inline-start: auto;
      }

      .breadcrumb--close {
        color: var(--ninja-accent-color);
        background-color: transparent;
        text-decoration: underline;
      }

      .search-wrapper {
        display: flex;
        border-bottom: var(--ninja-separate-border);
      }
    `]),d(c,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});export{w as a,H as b,I as c,L as d,K as e,N as f,E as g,P as h,c as i};
/*! Bundled license information:

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/ref.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-R4EWFISO.js.map
