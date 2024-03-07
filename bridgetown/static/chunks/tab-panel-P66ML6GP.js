import{d as s}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-W5YAIYWY.js";import{a as l}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-QFIW7HM7.js";import{a as r,b as o,g as i,h as a,k as p}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-22JAAIQL.js";import{c as e}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ETQOEFQK.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var n=r`
  ${i}

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
    `}};t.styles=n;e([a({reflect:!0})],t.prototype,"name",2);e([a({type:Boolean,reflect:!0})],t.prototype,"active",2);e([l("active")],t.prototype,"handleActiveChange",1);var d=t;t.define("sl-tab-panel");export{d as default};
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/tab-panel-P66ML6GP.js.map
