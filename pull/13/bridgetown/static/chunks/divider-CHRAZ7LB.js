import{a as i}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-N4X4HDNO.js";import{a as e,g as o,h as a,k as l}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-ZTZ7DAXV.js";import{c as t}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-DSJG77HX.js";import"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-XDPUZW52.js";var s=e`
  ${o}

  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=s;t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([i("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/konnors-ninja-keys/pull/13/bridgetown/static/chunks/divider-CHRAZ7LB.js.map
