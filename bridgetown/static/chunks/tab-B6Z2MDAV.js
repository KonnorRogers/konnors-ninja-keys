import{a as b}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-V4ITNLHV.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ZGBXHPT2.js";import{a as d}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-CYBMVTJK.js";import{a as p}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-EVD5UJFO.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-FK5IDPHX.js";import{a as i}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ZQQWBVOC.js";import{a as r,b as a,d as n,e as c}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-JEZAVMXG.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-7SOE6KFT.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-AYSUWVOO.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-IGCEWXQR.js";import{a as l,d as s}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-YB7THYSR.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-EH7IVYUU.js";import{c as e}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-OAOLXORN.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var m=l`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`;var u=0,t=class extends c{constructor(){super(...arguments),this.localize=new d(this),this.attrId=++u,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(o){o.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(o){this.tab.focus(o)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,s`
      <div
        part="base"
        class=${p({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?s`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};t.styles=[r,m];t.dependencies={"sl-icon-button":b};e([n(".tab")],t.prototype,"tab",2);e([a({reflect:!0})],t.prototype,"panel",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([a({type:Boolean})],t.prototype,"closable",2);e([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);e([i("active")],t.prototype,"handleActiveChange",1);e([i("disabled")],t.prototype,"handleDisabledChange",1);var f=t;t.define("sl-tab");export{f as default};
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/tab-B6Z2MDAV.js.map
