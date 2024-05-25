import{a as b,b as f,c as $}from"/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-WLQ64KHI.js";import{a as C}from"/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-UUXPOFMY.js";import{a as k}from"/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-YBCZKBOX.js";import{a as g,c as h,e as v,f as x}from"/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-45X7HNRW.js";import{d as u}from"/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-FL33EO4O.js";var{I:B}=x;var P=t=>t.strings===void 0,w=()=>document.createComment(""),I=(t,i,e)=>{var s;let r=t._$AA.parentNode,a=i===void 0?t._$AB:i._$AA;if(e===void 0){let c=r.insertBefore(w(),a),d=r.insertBefore(w(),a);e=new B(c,d,t,t.options)}else{let c=e._$AB.nextSibling,d=e._$AM,y=d!==t;if(y){let o;(s=e._$AQ)===null||s===void 0||s.call(e,t),e._$AM=t,e._$AP!==void 0&&(o=t._$AU)!==d._$AU&&e._$AP(o)}if(c!==a||y){let o=e._$AA;for(;o!==c;){let G=o.nextSibling;r.insertBefore(o,a),o=G}}}return e},L=(t,i,e=t)=>(t._$AI(i,e),t),D={},K=(t,i=D)=>t._$AH=i,N=t=>t._$AH,V=t=>{var i;(i=t._$AP)===null||i===void 0||i.call(t,!1,!0);let e=t._$AA,s=t._$AB.nextSibling;for(;e!==s;){let r=e.nextSibling;e.remove(),e=r}};var n=(t,i)=>{var e,s;let r=t._$AN;if(r===void 0)return!1;for(let a of r)(s=(e=a)._$AO)===null||s===void 0||s.call(e,i,!1),n(a,i);return!0},p=t=>{let i,e;do{if((i=t._$AM)===void 0)break;e=i._$AN,e.delete(t),t=i}while(e?.size===0)},T=t=>{for(let i;i=t._$AM;t=i){let e=i._$AN;if(e===void 0)i._$AN=e=new Set;else if(e.has(t))break;e.add(t),M(i)}};function j(t){this._$AN!==void 0?(p(this),this._$AM=t,T(this)):this._$AM=t}function S(t,i=!1,e=0){let s=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(i)if(Array.isArray(s))for(let a=e;a<s.length;a++)n(s[a],!1),p(s[a]);else s!=null&&(n(s,!1),p(s));else n(this,t)}var M=t=>{var i,e,s,r;t.type==b.CHILD&&((i=(s=t)._$AP)!==null&&i!==void 0||(s._$AP=S),(e=(r=t)._$AQ)!==null&&e!==void 0||(r._$AQ=j))},m=class extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(i,e,s){super._$AT(i,e,s),T(this),this.isConnected=i._$AU}_$AO(i,e=!0){var s,r;i!==this.isConnected&&(this.isConnected=i,i?(s=this.reconnected)===null||s===void 0||s.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(n(this,i),p(this))}setValue(i){if(P(this._$Ct))this._$Ct._$AI(i,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=i,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var E=()=>new A,A=class{},_=new WeakMap,R=f(class extends m{render(t){return v}update(t,[i]){var e;let s=i!==this.G;return s&&this.G!==void 0&&this.ot(void 0),(s||this.rt!==this.lt)&&(this.G=i,this.dt=(e=t.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=t.element)),v}ot(t){var i;if(typeof this.G=="function"){let e=(i=this.dt)!==null&&i!==void 0?i:globalThis,s=_.get(e);s===void 0&&(s=new WeakMap,_.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.dt,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.dt,t)}else this.G.value=t}get rt(){var t,i,e;return typeof this.G=="function"?(i=_.get((t=this.dt)!==null&&t!==void 0?t:globalThis))===null||i===void 0?void 0:i.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var l=class extends C{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=E()}render(){let i="";if(!this.hideBreadcrumbs){let e=[];if(this.breadcrumbs)for(let s of this.breadcrumbs)e.push(h`<button
              type="button"
              @click=${()=>this.selectParent(s)}
              class="breadcrumb"
            >
              ${s}
            </button>`);i=h`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          type="button"
          @click=${()=>this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>

        ${e}

        <button type="button" class="breadcrumb breadcrumb--close" @click=${this._close}>
          Cancel
        </button>
      </div>`}return h`
      ${i}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${R(this._inputRef)}
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
    `}setSearch(i){this._inputRef.value&&(this._inputRef.value.value=i)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(i){let e=i.target;e instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:e.value},bubbles:!0,composed:!0}))}selectParent(i){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:i},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};u(l,"baseName","ninja-header"),u(l,"styles",[k,g`
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
        background-color: red;
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
    `]),u(l,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});export{P as a,I as b,L as c,K as d,N as e,V as f,E as g,R as h,l as i};
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
//# sourceMappingURL=/konnors-ninja-keys/pull/16/bridgetown/static/chunks/chunk-MCVB4HLT.js.map
