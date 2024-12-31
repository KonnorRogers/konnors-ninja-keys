import{a as s}from"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-MRGORIHK.js";import{a as i}from"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-X4SIA4FR.js";import{a as l,b as a,f as p}from"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-6FU67INI.js";import"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-VJKVAHRR.js";import{a as r,d as o}from"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-I7EF6NN4.js";import{c as e}from"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-O6OEAUXE.js";import"/konnors-ninja-keys/pull/20/bridgetown/static/chunks/chunk-MFLGOJQT.js";var n=r`
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
//# sourceMappingURL=/konnors-ninja-keys/pull/20/bridgetown/static/chunks/tab-panel-GT5NSKX7.js.map
