import{a as o}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ZQQWBVOC.js";import{a as e,g as i,h as a,k as l}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-AY3SQY6M.js";import{c as t}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-OAOLXORN.js";import"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var s=e`
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
`;var r=class extends l{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};r.styles=[i,s];t([a({type:Boolean,reflect:!0})],r.prototype,"vertical",2);t([o("vertical")],r.prototype,"handleVerticalChange",1);var p=r;r.define("sl-divider");export{p as default};
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/divider-2R44HQDP.js.map
