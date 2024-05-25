import{a as i}from"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-4XFE6LRS.js";import{a as e,g as o,h as a,k as l}from"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-SZGEXLCL.js";import{c as t}from"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-S3GKFFSH.js";import"/konnors-ninja-keys/pull/15/bridgetown/static/chunks/chunk-TQTBSHRM.js";var s=e`
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
//# sourceMappingURL=/konnors-ninja-keys/pull/15/bridgetown/static/chunks/divider-U7UGQHSN.js.map
