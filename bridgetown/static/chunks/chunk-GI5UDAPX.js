import{a as b,b as f,c as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-4A34YUFH.js";import{a as C}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-MG7MCOCR.js";import{a as k}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ZPHIMDRV.js";import{a as g,b as u,d as v,e as x}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-JK65MYUH.js";import{d as h}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var{I:B}=x;var P=t=>t.strings===void 0,w=()=>document.createComment(""),I=(t,s,e)=>{var i;let r=t._$AA.parentNode,a=s===void 0?t._$AB:s._$AA;if(e===void 0){let c=r.insertBefore(w(),a),d=r.insertBefore(w(),a);e=new B(c,d,t,t.options)}else{let c=e._$AB.nextSibling,d=e._$AM,y=d!==t;if(y){let n;(i=e._$AQ)===null||i===void 0||i.call(e,t),e._$AM=t,e._$AP!==void 0&&(n=t._$AU)!==d._$AU&&e._$AP(n)}if(c!==a||y){let n=e._$AA;for(;n!==c;){let G=n.nextSibling;r.insertBefore(n,a),n=G}}}return e},L=(t,s,e=t)=>(t._$AI(s,e),t),D={},K=(t,s=D)=>t._$AH=s,N=t=>t._$AH,V=t=>{var s;(s=t._$AP)===null||s===void 0||s.call(t,!1,!0);let e=t._$AA,i=t._$AB.nextSibling;for(;e!==i;){let r=e.nextSibling;e.remove(),e=r}};var o=(t,s)=>{var e,i;let r=t._$AN;if(r===void 0)return!1;for(let a of r)(i=(e=a)._$AO)===null||i===void 0||i.call(e,s,!1),o(a,s);return!0},p=t=>{let s,e;do{if((s=t._$AM)===void 0)break;e=s._$AN,e.delete(t),t=s}while(e?.size===0)},E=t=>{for(let s;s=t._$AM;t=s){let e=s._$AN;if(e===void 0)s._$AN=e=new Set;else if(e.has(t))break;e.add(t),M(s)}};function j(t){this._$AN!==void 0?(p(this),this._$AM=t,E(this)):this._$AM=t}function S(t,s=!1,e=0){let i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(s)if(Array.isArray(i))for(let a=e;a<i.length;a++)o(i[a],!1),p(i[a]);else i!=null&&(o(i,!1),p(i));else o(this,t)}var M=t=>{var s,e,i,r;t.type==b.CHILD&&((s=(i=t)._$AP)!==null&&s!==void 0||(i._$AP=S),(e=(r=t)._$AQ)!==null&&e!==void 0||(r._$AQ=j))},m=class extends ${constructor(){super(...arguments),this._$AN=void 0}_$AT(s,e,i){super._$AT(s,e,i),E(this),this.isConnected=s._$AU}_$AO(s,e=!0){var i,r;s!==this.isConnected&&(this.isConnected=s,s?(i=this.reconnected)===null||i===void 0||i.call(this):(r=this.disconnected)===null||r===void 0||r.call(this)),e&&(o(this,s),p(this))}setValue(s){if(P(this._$Ct))this._$Ct._$AI(s,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=s,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var R=()=>new A,A=class{},_=new WeakMap,T=f(class extends m{render(t){return v}update(t,[s]){var e;let i=s!==this.G;return i&&this.G!==void 0&&this.ot(void 0),(i||this.rt!==this.lt)&&(this.G=s,this.ct=(e=t.options)===null||e===void 0?void 0:e.host,this.ot(this.lt=t.element)),v}ot(t){var s;if(typeof this.G=="function"){let e=(s=this.ct)!==null&&s!==void 0?s:globalThis,i=_.get(e);i===void 0&&(i=new WeakMap,_.set(e,i)),i.get(this.G)!==void 0&&this.G.call(this.ct,void 0),i.set(this.G,t),t!==void 0&&this.G.call(this.ct,t)}else this.G.value=t}get rt(){var t,s,e;return typeof this.G=="function"?(s=_.get((t=this.ct)!==null&&t!==void 0?t:globalThis))===null||s===void 0?void 0:s.get(this.G):(e=this.G)===null||e===void 0?void 0:e.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var l=class extends C{constructor(){super(),this.placeholder="",this.hideBreadcrumbs=!1,this.breadcrumbHome="Home",this.expanded=!1,this.controls="",this.searchLabel="",this.activeDescendant="",this.breadcrumbs=[],this._inputRef=R()}render(){let s="";if(!this.hideBreadcrumbs){let e=[];if(this.breadcrumbs)for(let i of this.breadcrumbs)e.push(u`<button
              type="button"
              @click=${()=>this.selectParent(i)}
              class="breadcrumb"
            >
              ${i}
            </button>`);s=u`<div class="breadcrumb-list" id="breadcrumb-list">
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
      </div>`}return u`
      ${s}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input=${this._handleInput}
          ${T(this._inputRef)}
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
    `}setSearch(s){this._inputRef.value&&(this._inputRef.value.value=s)}dispatchEscKey(){document.dispatchEvent(new KeyboardEvent("keydown",{keyCode:27,which:27,code:"Escape",key:"Escape",altKey:!1,metaKey:!1,ctrlKey:!1,shiftKey:!1,bubbles:!0,composed:!0,cancelable:!1}))}focusSearch(){requestAnimationFrame(()=>{this._inputRef&&this._inputRef.value&&this._inputRef.value.focus()})}_handleInput(s){let e=s.target;e instanceof HTMLInputElement&&this.dispatchEvent(new CustomEvent("change",{detail:{search:e.value},bubbles:!0,composed:!0}))}selectParent(s){this.dispatchEvent(new CustomEvent("setParent",{detail:{parent:s},bubbles:!0,composed:!0}))}firstUpdated(){this.focusSearch()}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}};h(l,"baseName","ninja-header"),h(l,"styles",[k,g`
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
    `]),h(l,"properties",{placeholder:{},hideBreadcrumbs:{type:Boolean},breadcrumbHome:{},expanded:{type:Boolean},controls:{},searchLabel:{},activeDescendant:{},breadcrumbs:{type:Array}});export{P as a,I as b,L as c,K as d,N as e,V as f,R as g,T as h,l as i};
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
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-GI5UDAPX.js.map
