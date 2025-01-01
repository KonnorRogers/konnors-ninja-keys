import{a as s}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-5OROYAIV.js";import{a as i}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-P674N4DW.js";import{a as l,b as a,f as p}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-BRQ5HQOZ.js";import"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-3K2YWU45.js";import{a as r,d as o}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-LP763IR3.js";import{c as e}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-RZX3TWPW.js";import"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-MM76JOUS.js";var n=r`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`;var m=0,t=class extends p{constructor(){super(...arguments),this.attrId=++m,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return o`
      <slot
        part="base"
        class=${s({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};t.styles=[l,n];e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([i("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/konnors-ninja-keys/pull/21/bridgetown/static/chunks/tab-panel-3JE237XU.js.map
