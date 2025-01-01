import{a as de,b as pe,c as he}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-3K2YWU45.js";import{a as T,d as H,g as ce,h as re,j as ge}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-LP763IR3.js";import{d as E}from"/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-MM76JOUS.js";var fe=T`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }

  .visually-hidden:not(:focus-within) {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    white-space: nowrap;
  }

  [hidden] {
    display: none !important;
  }

  :host {
    display: block;
  }
`,Ke=T`
  .light-button {
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid gray;
    background-color: inherit;
    padding: 0.4em 0.6em;
    color: inherit;
    border-radius: 4px;
  }

  .light-button:focus-visible {
    outline: 2px solid hsl(203, 77%, 43%);
  }

  @supports not selector(:focus-visible) {
    .light-button:focus-within {
      outline: 2px solid hsl(203, 77%, 43%);
    }
  }

  .light-button:is(:active, :hover, .is-active) {
    cursor: pointer;
    color: hsla(203, 77%, 43%);
    background-color: hsla(203, 77%, 93%);
  }
`;var be=T`
  /**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

  /**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%);
 * --hue-1: hsl(198, 99%, 37%);
 * --hue-2: hsl(221, 87%, 60%);
 * --hue-3: hsl(301, 63%, 40%);
 * --hue-4: hsl(119, 34%, 47%);
 * --hue-5: hsl(5, 74%, 59%);
 * --hue-5-2: hsl(344, 84%, 43%);
 * --hue-6: hsl(35, 99%, 36%);
 * --hue-6-2: hsl(35, 99%, 40%);
 * --syntax-fg: hsl(230, 8%, 24%);
 * --syntax-bg: hsl(230, 1%, 98%);
 * --syntax-gutter: hsl(230, 1%, 62%);
 * --syntax-guide: hsla(230, 8%, 24%, 0.2);
 * --syntax-accent: hsl(230, 100%, 66%);
 * From syntax-variables.less
 * --syntax-selection-color: hsl(230, 1%, 90%);
 * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
 * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);
 * <---- Additional Tokens --->
 * --syntax-gutter-border: 1px solid darkgray;
 * --syntax-highlight-bg: hsl(210, 9%, 95%);
 * --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

 *  --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);
 *  --syntax-deleted-bg: hsla(353, 95%, 66%, 0.25);

 *  --syntax-inserted-bg: hsla(137, 100%, 95%);
 *  --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25)
 */

  :host {
    --mono-1: hsl(230, 8%, 24%);
    --mono-2: hsl(230, 6%, 44%);
    --mono-3: hsl(230, 4%, 64%);
    --hue-1: hsl(198, 99%, 37%);
    --hue-2: hsl(221, 87%, 60%);
    --hue-3: hsl(301, 63%, 40%);
    --hue-4: hsl(119, 34%, 47%);
    --hue-5: hsl(5, 74%, 59%);
    --hue-5-2: hsl(344, 84%, 43%);
    --hue-6: hsl(35, 99%, 36%);
    --hue-6-2: hsl(35, 99%, 40%);
    --syntax-fg: hsl(230, 8%, 24%);
    --syntax-bg: hsl(230, 1%, 98%);
    --syntax-gutter: hsl(230, 1%, 62%);
    --syntax-guide: hsla(230, 8%, 24%, 0.2);
    --syntax-accent: hsl(230, 100%, 66%);
    /** From syntax-variables.less */
    --syntax-selection-color: hsl(230, 1%, 90%);
    --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);
    --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);

    /* --- additional tokens --> */
    --syntax-gutter-border: 1px solid darkgray;

    --syntax-highlight-bg: hsl(210, 9%, 95%);
    --syntax-highlight-selected-bg: hsla(230, 8%, 79%, 0.5);

    --syntax-deleted-bg: hsla(353, 95%, 86%, 0.25);
    --syntax-deleted-selected-bg: hsla(353, 95%, 66%, 0.25);

    --syntax-inserted-bg: hsla(137, 100%, 95%);
    --syntax-inserted-selected-bg: hsla(135, 73%, 55%, 0.25);
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: var(--syntax-bg);
    color: var(--syntax-fg);
    direction: ltr;
    text-align: left;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  /* Selection */
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] *::-moz-selection,
  pre[class*="language-"] *::-moz-selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  code[class*="language-"]::selection,
  code[class*="language-"] *::selection,
  pre[class*="language-"] *::selection {
    background: var(--syntax-selection-color);
    color: inherit;
  }

  .token.comment,
  .token.prolog,
  .token.cdata {
    color: var(--mono-3);
  }

  .token.doctype,
  .token.punctuation,
  .token.entity {
    color: var(--mono-1);
  }

  .token.attr-name,
  .token.class-name,
  .token.boolean,
  .token.constant,
  .token.number,
  .token.atrule {
    color: var(--hue-6);
  }

  .token.keyword {
    color: var(--hue-3);
  }

  .token.property,
  .token.tag,
  .token.symbol,
  .token.deleted,
  .token.important {
    color: var(--hue-5);
  }

  .token.selector,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.regex,
  .token.attr-value,
  .token.attr-value > .token.punctuation {
    color: var(--hue-4);
  }

  .token.variable,
  .token.operator,
  .token.function {
    color: var(--hue-2);
  }

  .token.url {
    color: var(--hue-1);
  }

  /* HTML overrides */
  .token.attr-value > .token.punctuation.attr-equals,
  .token.special-attr > .token.attr-value > .token.value.css {
    color: var(--mono-1);
  }

  /* CSS overrides */
  .language-css .token.selector {
    color: var(--hue-5);
  }

  .language-css .token.property {
    color: var(--mono-1);
  }

  .language-css .token.function,
  .language-css .token.url > .token.function {
    color: var(--hue-1);
  }

  .language-css .token.url > .token.string.url {
    color: var(--hue-4);
  }

  .language-css .token.important,
  .language-css .token.atrule .token.rule {
    color: var(--hue-3);
  }

  /* JS overrides */
  .language-javascript .token.operator {
    color: var(--hue-3);
  }

  .language-javascript
    .token.template-string
    > .token.interpolation
    > .token.interpolation-punctuation.punctuation {
    color: var(--hue-5-2);
  }

  /* JSON overrides */
  .language-json .token.operator {
    color: var(--mono-1);
  }

  .language-json .token.null.keyword {
    color: var(--hue-6);
  }

  /* MD overrides */
  .language-markdown .token.url,
  .language-markdown .token.url > .token.operator,
  .language-markdown .token.url-reference.url > .token.string {
    color: var(--mono-1);
  }

  .language-markdown .token.url > .token.content {
    color: var(--hue-2);
  }

  .language-markdown .token.url > .token.url,
  .language-markdown .token.url-reference.url {
    color: var(--hue-1);
  }

  .language-markdown .token.blockquote.punctuation,
  .language-markdown .token.hr.punctuation {
    color: var(--mono-3);
    font-style: italic;
  }

  .language-markdown .token.code-snippet {
    color: var(--hue-4);
  }

  .language-markdown .token.bold .token.content {
    color: var(--hue-6);
  }

  .language-markdown .token.italic .token.content {
    color: var(--hue-3);
  }

  .language-markdown .token.strike .token.content,
  .language-markdown .token.strike .token.punctuation,
  .language-markdown .token.list.punctuation,
  .language-markdown .token.title.important > .token.punctuation {
    color: var(--hue-5);
  }

  /* General */
  .token.bold {
    font-weight: bold;
  }

  .token.comment,
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.namespace {
    opacity: 0.8;
  }

  /* Plugin overrides */
  /* Selectors should have higher specificity than those in the plugins' default stylesheets */

  /* Show Invisibles plugin overrides */
  .token.token.tab:not(:empty):before,
  .token.token.cr:before,
  .token.token.lf:before,
  .token.token.space:before {
    color: var(--syntax-guide);
  }

  /* Toolbar plugin overrides */
  /* Space out all buttons and move them away from the right edge of the code block */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item {
    margin-right: 0.4em;
  }

  /* Styling the buttons */
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {
    background: var(--syntax-selection-color);
    color: var(--mono-2);
    padding: 0.1em 0.4em;
    border-radius: 0.3em;
  }

  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,
  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {
    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */
    color: var(--mono-1);
  }

  /* Line Highlight plugin overrides */
  /* The highlighted line itself */
  .line-highlight.line-highlight {
    background: var(--syntax-highlight-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Selection on highlighted lines */
  pre.diff-highlight > code .token.token.line-highlight:not(.prefix)::selection,
  pre.diff-highlight
    > code
    .token.token.line-highlight:not(.prefix)
    *::selection,
  pre > code.diff-highlight .token.token.line-highlight:not(.prefix)::selection,
  pre
    > code.diff-highlight
    .token.token.line-highlight:not(.prefix)
    *::selection {
    background-color: var(--syntax-highlight-selected-bg);
  }

  /* Hovering over a linkable line number (in the gutter area) */
  /* Requires Line Numbers plugin as well */
  pre[id].linkable-line-numbers.linkable-line-numbers
    span.line-numbers-rows
    > span:hover:before {
    background-color: var(--syntax-cursor-line);
  }

  /* Line Numbers and Command Line plugins overrides */
  /* Line separating gutter from coding area */
  .line-numbers.line-numbers .line-numbers-rows,
  .command-line .command-line-prompt {
    border-right-color: var(--syntax-guide);
  }

  /* Stuff in the gutter */
  .line-numbers .line-numbers-rows > span:before,
  .command-line .command-line-prompt > span:before {
    color: var(--syntax-gutter);
  }

  /* Match Braces plugin overrides */
  /* Note: Outline colour is inherited from the braces */
  .rainbow-braces .token.token.punctuation.brace-level-1,
  .rainbow-braces .token.token.punctuation.brace-level-5,
  .rainbow-braces .token.token.punctuation.brace-level-9 {
    color: var(--hue-5);
  }

  .rainbow-braces .token.token.punctuation.brace-level-2,
  .rainbow-braces .token.token.punctuation.brace-level-6,
  .rainbow-braces .token.token.punctuation.brace-level-10 {
    color: var(--hue-4);
  }

  .rainbow-braces .token.token.punctuation.brace-level-3,
  .rainbow-braces .token.token.punctuation.brace-level-7,
  .rainbow-braces .token.token.punctuation.brace-level-11 {
    color: var(--hue-2);
  }

  .rainbow-braces .token.token.punctuation.brace-level-4,
  .rainbow-braces .token.token.punctuation.brace-level-8,
  .rainbow-braces .token.token.punctuation.brace-level-12 {
    color: var(--hue-3);
  }

  /* Diff Highlight plugin overrides */
  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
  pre.diff-highlight > code .token.token.deleted:not(.prefix),
  pre > code.diff-highlight .token.token.deleted:not(.prefix) {
    background-color: var(--syntax-deleted-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.deleted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
    background-color: var(--syntax-deleted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix),
  pre > code.diff-highlight .token.token.inserted:not(.prefix) {
    background-color: var(--syntax-inserted-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
  pre.diff-highlight
    > code
    .token.token.inserted:not(.prefix)
    *::-moz-selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
  pre
    > code.diff-highlight
    .token.token.inserted:not(.prefix)
    *::-moz-selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
    background-color: var(--syntax-inserted-selected-bg);
  }

  /* Previewers plugin overrides */
  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */
  /* Border around popup */
  .prism-previewer.prism-previewer:before,
  .prism-previewer-gradient.prism-previewer-gradient div {
    border-color: hsl(0, 0, 95%);
  }

  /* Angle and time should remain as circles and are hence not included */
  .prism-previewer-color.prism-previewer-color:before,
  .prism-previewer-gradient.prism-previewer-gradient div,
  .prism-previewer-easing.prism-previewer-easing:before {
    border-radius: 0.3em;
  }

  /* Triangles pointing to the code */
  .prism-previewer.prism-previewer:after {
    border-top-color: hsl(0, 0, 95%);
  }

  .prism-previewer-flipped.prism-previewer-flipped.after {
    border-bottom-color: hsl(0, 0, 95%);
  }

  /* Background colour within the popup */
  .prism-previewer-angle.prism-previewer-angle:before,
  .prism-previewer-time.prism-previewer-time:before,
  .prism-previewer-easing.prism-previewer-easing {
    background: hsl(0, 0%, 100%);
  }

  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */
  /* For time, this is the alternate colour */
  .prism-previewer-angle.prism-previewer-angle circle,
  .prism-previewer-time.prism-previewer-time circle {
    stroke: var(--mono-1);
    stroke-opacity: 1;
  }

  /* Stroke colours of the handle, direction point, and vector itself */
  .prism-previewer-easing.prism-previewer-easing circle,
  .prism-previewer-easing.prism-previewer-easing path,
  .prism-previewer-easing.prism-previewer-easing line {
    stroke: var(--mono-1);
  }

  /* Fill colour of the handle */
  .prism-previewer-easing.prism-previewer-easing circle {
    fill: transparent;
  }
`;function me(e,...t){let r=[],n=typeof e=="string"?[e]:e.slice();n[n.length-1]=n[n.length-1].replace(/\r?\n([\t ]*)$/,"");for(let i=0;i<n.length;i++){let o;(o=n[i].match(/\n[\t ]+/g))&&r.push(...o)}if(r.length){let i=Math.min(...r.map(l=>l.length-1)),o=new RegExp(`
[	 ]{${i}}`,"g");for(let l=0;l<n.length;l++)n[l]=n[l].replace(o,`
`)}n[0]=n[0].replace(/^\r?\n/,"");let a=n[0];for(let i=0;i<t.length;i++)a+=t[i]+n[i+1];return a}function U(e){var t;return t=class extends e{static define(n,a,i){n||(n=this.baseName),a||(a=this);let o=window.customElements;this.__registry instanceof CustomElementRegistry&&(o=this.__registry);let l=!!o.get(n);l&&this.warnOnExistingElement&&console.warn(`${n} has already been registered.`),!l&&a&&o.define(n,class extends a{},i)}},E(t,"baseName",""),E(t,"warnOnExistingElement",!1),t}var ae=class extends U(HTMLElement){};var ve=new WeakMap;function Oe(e,t){let r=t;for(;r;){if(ve.get(r)===e)return!0;r=Object.getPrototypeOf(r)}return!1}function I(e){return t=>{if(Oe(e,t))return t;let r=e(t);return ve.set(r,e),r}}var Y=!!ShadowRoot.prototype.createElement,De=e=>{var t;return t=class extends e{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}constructor(...n){super(...n),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(n){let a=this.constructor;a.__registry=n}createRenderRoot(){let n=this.constructor,{scopedElements:a,shadowRootOptions:i}=n;if(!this.registry||this.registry===n.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=Y?new CustomElementRegistry:customElements;for(let[u,s]of Object.entries(a))this.defineScopedElement(u,s)}let l={mode:"open",...i,customElements:this.registry},g=this.attachShadow(l);return Y&&(this.renderOptions.creationScope=g),g instanceof ShadowRoot&&this.adoptStyles(g),g}createScopedElement(n){return(Y?this.shadowRoot:document).createElement(n)}adoptStyles(n){}defineScopedElement(n,a){let i=this.registry.get(n);return i&&Y===!1&&i!==a&&console.error([`You are trying to re-register the "${n}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),i?this.registry.get(n):this.registry.define(n,a)}},E(t,"__registry",window.customElements),t},He=I(De);var Ge=e=>class extends e{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Ne=I(Ge);var q=class extends U(ge){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,r])=>{r.define(t)})}};E(q,"dependencies",{});function ye(...e){let t=[],r=document.createElement("div");for(let n of e){if(n instanceof HTMLTemplateElement){let a=n.content.cloneNode(!0);r.append(a),t.push(r.innerHTML),r.innerHTML="";continue}if(n instanceof HTMLScriptElement){t.push(n.textContent);continue}if(n instanceof HTMLTextAreaElement){t.push(n.value);continue}t.push(n.innerHTML)}return t.join(`
`)}var ie=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},W=ie;var V=class{constructor(t={}){let r={},{disableWorkerMessageHandler:n,manual:a}=t;this.manual=a,this.manual==null&&(this.manual=!0),this.plugins={};let i=this;this.disableWorkerMessageHandler=!!n,this.Token=A,this.util=new oe(this);let o=this.util;if(this.languages={plain:r,plaintext:r,text:r,txt:r,extend:(s,m)=>{let h=this.util.clone(this.languages[s]);for(var b in m)h[b]=m[b];return h},insertBefore:(s,m,h,b)=>{b||(b=this.languages);let c=b[s],f={};for(let v in c)if(c.hasOwnProperty(v)){if(v==m)for(var p in h)h.hasOwnProperty(p)&&(f[p]=h[p]);h.hasOwnProperty(v)||(f[v]=c[v])}var d=b[s];return b[s]=f,this.languages.DFS(this.languages,function(v,y){y===d&&v!=s&&(this[v]=f)}),f},DFS(s,m,h,b){b=b||{};var c=o.objId;for(var f in s)if(s.hasOwnProperty(f)){m.call(s,f,s[f],h||f);var p=s[f],d=o.type(p);d==="Object"&&!b[c(p)]?(b[c(p)]=!0,this.DFS(p,m,null,b)):d==="Array"&&!b[c(p)]&&(b[c(p)]=!0,this.DFS(p,m,f,b))}}},this.hooks={all:{},add:function(s,m){var h=i.hooks.all;h[s]=h[s]||[],h[s].push(m)},run:function(s,m){var h=i.hooks.all[s];if(!(!h||!h.length))for(var b=0,c;c=h[b++];)c(m)}},!W.document)return W.addEventListener&&(i.disableWorkerMessageHandler||W.addEventListener("message",function(s){var m=JSON.parse(s.data),h=m.language,b=m.code,c=m.immediateClose;W.postMessage(i.highlight(b,i.languages[h],h)),c&&ie.close()},!1)),i;function l(){i.manual||i.highlightAll()}let g=this.util.currentScript();if(g&&(this.filename=g.src,g.hasAttribute("data-manual")&&(i.manual=!0)),!i.manual){var u=document.readyState;u==="loading"||u==="interactive"&&g&&g.defer?document.addEventListener("DOMContentLoaded",l):window.requestAnimationFrame?window.requestAnimationFrame(l):window.setTimeout(l,16)}}highlightAll(t,r){this.highlightAllUnder(document,t,r)}highlightAllUnder(t,r,n){var a={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),this.hooks.run("before-all-elements-highlight",a);for(var i=0,o;o=a.elements[i++];)this.highlightElement(o,r===!0,a.callback)}highlightElement(t,r,n){var a=this.util.getLanguage(t),i=this.languages[a];this.util.setLanguage(t,a);var o=t.parentElement;o&&o.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(o,a);var l=t.textContent,g={element:t,language:a,grammar:i,code:l};let u=m=>{g.highlightedCode=m,this.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,this.hooks.run("after-highlight",g),this.hooks.run("complete",g),n&&n.call(g.element)};if(this.hooks.run("before-sanity-check",g),o=g.element.parentElement,o&&o.nodeName.toLowerCase()==="pre"&&!o.hasAttribute("tabindex")&&o.setAttribute("tabindex","0"),!g.code){this.hooks.run("complete",g),n&&n.call(g.element);return}if(this.hooks.run("before-highlight",g),!g.grammar){u(this.util.encode(g.code));return}if(r&&ie.Worker){var s=new Worker(this.filename);s.onmessage=function(m){u(m.data)},s.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else u(this.highlight(g.code,g.grammar,g.language))}highlight(t,r,n){var a={code:t,grammar:r,language:n};if(this.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=this.tokenize(a.code,a.grammar),this.hooks.run("after-tokenize",a),A.stringify(this.util.encode(a.tokens),a.language,this)}tokenize(t,r){var n=r?.rest;if(n){for(var a in n)r[a]=n[a];delete r.rest}var i=new qe;return J(i,i.head,t),we(t,i,r,i.head,0,this),Ze(i)}},A=class{constructor(t,r,n,a){this.type=t,this.content=r,this.alias=n,this.length=(a||"").length|0}static stringify(t,r,n){let a=this;if(typeof t=="string")return t;if(Array.isArray(t)){var i="";return t.forEach(function(s){i+=a.stringify(s,r,n)}),i}var o={type:t.type,content:a.stringify(t.content,r,n),tag:"span",classes:["token",t.type],attributes:{},language:r},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(o.classes,l):o.classes.push(l)),n.hooks.run("wrap",o);var g="";for(var u in o.attributes)g+=" "+u+'="'+(o.attributes[u]||"").replace(/"/g,"&quot;")+'"';return"<"+o.tag+' class="'+o.classes.join(" ")+'"'+g+">"+o.content+"</"+o.tag+">"}},ke=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Ie=0,oe=class{constructor(t){E(this,"encode",t=>{if(t instanceof A){let r=t.content;return new A(t.type,this.encode(r),t.alias)}else return Array.isArray(t)?t.map(r=>this.encode(r)):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=t}type(t){return Object.prototype.toString.call(t).slice(8,-1)}getLanguage(t){for(;t;){var r=ke.exec(t.className);if(r)return r[1].toLowerCase();t=t.parentElement}return"none"}setLanguage(t,r){t.className=t.className.replace(RegExp(ke,"gi"),""),t.classList.add("language-"+r)}objId(t){return t.__id||Object.defineProperty(t,"__id",{value:++Ie}),t.__id}clone(t){return structuredClone(t)}isActive(t,r,n){for(var a="no-"+r;t;){var i=t.classList;if(i.contains(r))return!0;if(i.contains(a))return!1;t=t.parentElement}return!!n}currentScript(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var r=document.getElementsByTagName("script");for(var n in r)if(r[n].src==t)return r[n]}return null}}};function xe(e,t,r,n){e.lastIndex=t;var a=e.exec(r);if(a&&n&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function we(e,t,r,n,a,i,o){for(var l in r)if(!(!r.hasOwnProperty(l)||!r[l])){var g=r[l];g=Array.isArray(g)?g:[g];for(var u=0;u<g.length;++u){if(o&&o.cause==l+","+u)return;var s=g[u],m=s.inside,h=!!s.lookbehind,b=!!s.greedy,c=s.alias;if(b&&!s.pattern.global){var f=s.pattern.toString().match(/[imsuy]*$/)[0];s.pattern=RegExp(s.pattern.source,f+"g")}for(var p=s.pattern||s,d=n.next,v=a;d!==t.tail&&!(o&&v>=o.reach);v+=d.value.length,d=d.next){var y=d.value;if(t.length>e.length)return;if(!(y instanceof A)){var F=1,k;if(b){if(k=xe(p,v,e,h),!k||k.index>=e.length)break;var L=k.index,_=k.index+k[0].length,x=v;for(x+=d.value.length;L>=x;)d=d.next,x+=d.value.length;if(x-=d.value.length,v=x,d.value instanceof A)continue;for(var w=d;w!==t.tail&&(x<_||typeof w.value=="string");w=w.next)F++,x+=w.value.length;F--,y=e.slice(v,x),k.index-=v}else if(k=xe(p,0,y,h),!k)continue;var L=k.index,S=k[0],M=y.slice(0,L),O=y.slice(L+S.length),C=v+y.length;o&&C>o.reach&&(o.reach=C);var B=d.prev;M&&(B=J(t,B,M),v+=M.length),We(t,B,F);var te=new A(l,m?i.tokenize(S,m):S,c,S);if(d=J(t,B,te),O&&J(t,d,O),F>1){var D={cause:l+","+u,reach:C};we(e,t,r,d.prev,v,i,D),o&&D.reach>o.reach&&(o.reach=D.reach)}}}}}}function qe(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function J(e,t,r){var n=t.next,a={value:r,prev:t,next:n};return t.next=a,n.prev=a,e.length++,a}function We(e,t,r){for(var n=t.next,a=0;a<r&&n!==e.tail;a++)n=n.next;t.next=n,n.prev=t,e.length-=a}function Ze(e){for(var t=[],r=e.head.next;r!==e.tail;)t.push(r.value),r=r.next;return t}function R(e,t){typeof e>"u"||t?.force!==!0&&e.languages.markup||(e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,a){var i={};i["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[a]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+a]={pattern:/[\s\S]+/,inside:e.languages[a]};var l={};l[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(r,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml)}function G(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.css)){R(e);var r=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+r.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+r.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+r.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+r.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:r,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}}function X(e,t){typeof e>"u"||t?.force!==!0&&e.languages.clike||(e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function $(e,t){typeof e>"u"||t?.force!==!0&&e.languages.javascript||(X(e),R(e),e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript)}function Fe(e){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",r=function(b,c){return"\u2716 Error "+b+" while fetching file: "+c},n="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},i="data-src-status",o="loading",l="loaded",g="failed",u="pre[data-src]:not(["+i+'="'+l+'"]):not(['+i+'="'+o+'"])';function s(b,c,f){var p=new XMLHttpRequest;p.open("GET",b,!0),p.onreadystatechange=function(){p.readyState==4&&(p.status<400&&p.responseText?c(p.responseText):p.status>=400?f(r(p.status,p.statusText)):f(n))},p.send(null)}function m(b){var c=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(c){var f=Number(c[1]),p=c[2],d=c[3];return p?d?[f,Number(d)]:[f,void 0]:[f,f]}}e.hooks.add("before-highlightall",function(b){b.selector+=", "+u}),e.hooks.add("before-sanity-check",function(b){var c=b.element;if(c.matches(u)){b.code="",c.setAttribute(i,o);var f=c.appendChild(document.createElement("CODE"));f.textContent=t;var p=c.getAttribute("data-src"),d=b.language;if(d==="none"){var v=(/\.(\w+)$/.exec(p)||[,"none"])[1];d=a[v]||v}e.util.setLanguage(f,d),e.util.setLanguage(c,d);var y=e.plugins.autoloader;y&&y.loadLanguages(d),s(p,function(F){c.setAttribute(i,l);var k=m(c.getAttribute("data-range"));if(k){var _=F.split(/\r\n?|\n/g),x=k[0],w=k[1]==null?_.length:k[1];x<0&&(x+=_.length),x=Math.max(0,Math.min(x-1,_.length)),w<0&&(w+=_.length),w=Math.max(0,Math.min(w,_.length)),F=_.slice(x,w).join(`
`),c.hasAttribute("data-start")||c.setAttribute("data-start",String(x+1))}f.textContent=F,e.highlightElement(f)},function(F){c.setAttribute(i,g),f.textContent=F})}}),e.plugins.fileHighlight={highlight:function(c){for(var f=(c||document).querySelectorAll(u),p=0,d;d=f[p++];)e.highlightElement(d)}};var h=!1;e.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}var K=class extends V{constructor(...t){super(...t),R(this),G(this),X(this),$(this),Fe(this)}};function Se(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["markup-templating"])return;R(e);function r(n,a){return"___"+n.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,i,o){if(n.language===a){var l=n.tokenStack=[];n.code=n.code.replace(i,function(g){if(typeof o=="function"&&!o(g))return g;for(var u=l.length,s;n.code.indexOf(s=r(a,u))!==-1;)++u;return l[u]=g,s}),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language!==a||!n.tokenStack)return;n.grammar=e.languages[a];var i=0,o=Object.keys(n.tokenStack);function l(g){for(var u=0;u<g.length&&!(i>=o.length);u++){var s=g[u];if(typeof s=="string"||s.content&&typeof s.content=="string"){var m=o[i],h=n.tokenStack[m],b=typeof s=="string"?s:s.content,c=r(a,m),f=b.indexOf(c);if(f>-1){++i;var p=b.substring(0,f),d=new e.Token(a,e.tokenize(h,n.grammar),"language-"+a,h),v=b.substring(f+c.length),y=[];p&&y.push.apply(y,l([p])),y.push(d),v&&y.push.apply(y,l([v])),typeof s=="string"?g.splice.apply(g,[u,1].concat(y)):s.content=y}}else s.content&&l(s.content)}return g}l(n.tokens)}}})}function Ae(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages["css-extras"])){e.languages["css-extras"]={},G(e);var r=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,n;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:n={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+r.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[r,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=n,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},i={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:i,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:i})}}function Le(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-extras"])return;e.languages["js-extras"]={},$(e),e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function r(g,u){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),u)}e.languages.insertBefore("javascript","keyword",{imports:{pattern:r(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:r(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:r(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var n=["function","function-variable","method","method-variable","property-access"],a=0;a<n.length;a++){var i=n[a],o=e.languages.javascript[i];e.util.type(o)==="RegExp"&&(o=e.languages.javascript[i]={pattern:o});var l=o.inside||{};o.inside=l,l["maybe-class-name"]=/^[A-Z][\s\S]*/}}function _e(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-templates"])return;e.languages["js-templates"]={},$(e);var r=e.languages.javascript["template-string"],n=r.pattern.source,a=r.inside.interpolation,i=a.inside["interpolation-punctuation"],o=a.pattern.source;function l(c,f){if(e.languages[c])return{pattern:RegExp("((?:"+f+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:c}}}}e.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),r].filter(Boolean);function g(c,f){return"___"+f.toUpperCase()+"_"+c+"___"}function u(c,f,p){var d={code:c,grammar:f,language:p};return e.hooks.run("before-tokenize",d),d.tokens=e.tokenize(d.code,d.grammar),e.hooks.run("after-tokenize",d),d.tokens}function s(c){var f={};f["interpolation-punctuation"]=i;var p=e.tokenize(c,f);if(p.length===3){var d=[1,1];d.push.apply(d,u(p[1],e.languages.javascript,"javascript")),p.splice.apply(p,d)}return new e.Token("interpolation",p,a.alias,c)}function m(c,f,p){var d=e.tokenize(c,{interpolation:{pattern:RegExp(o),lookbehind:!0}}),v=0,y={},F=d.map(function(w){if(typeof w=="string")return w;for(var L=w.content,S;c.indexOf(S=g(v++,p))!==-1;);return y[S]=L,S}).join(""),k=u(F,f,p),_=Object.keys(y);v=0;function x(w){for(var L=0;L<w.length;L++){if(v>=_.length)return;var S=w[L];if(typeof S=="string"||typeof S.content=="string"){var M=_[v],O=typeof S=="string"?S:S.content,C=O.indexOf(M);if(C!==-1){++v;var B=O.substring(0,C),te=s(y[M]),D=O.substring(C+M.length),z=[];if(B&&z.push(B),z.push(te),D){var ue=[D];x(ue),z.push.apply(z,ue)}typeof S=="string"?(w.splice.apply(w,[L,1].concat(z)),L+=z.length-1):S.content=z}}else{var ne=S.content;Array.isArray(ne)?x(ne):x([ne])}}}return x(k),new e.Token(p,k,"language-"+p,c)}var h={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};e.hooks.add("after-tokenize",function(c){if(!(c.language in h))return;function f(p){for(var d=0,v=p.length;d<v;d++){var y=p[d];if(typeof y!="string"){var F=y.content;if(!Array.isArray(F)){typeof F!="string"&&f([F]);continue}if(y.type==="template-string"){var k=F[1];if(F.length===3&&typeof k!="string"&&k.type==="embedded-code"){var _=b(k),x=k.alias,w=Array.isArray(x)?x[0]:x,L=e.languages[w];if(!L)continue;F[1]=m(_,L,w)}}else f(F)}}}f(c.tokens)});function b(c){return typeof c=="string"?c:Array.isArray(c)?c.map(b).join(""):b(c.content)}}function Q(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages.jsx)return;e.languages.markup||R(e),e.languages.javascript||$(e);var r=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,i=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(u,s){return u=u.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return i}),RegExp(u,s)}i=o(i).source,e.languages.jsx=e.languages.extend("markup",r),e.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=r.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(u){return u?typeof u=="string"?u:typeof u.content=="string"?u.content:u.content.map(l).join(""):""},g=function(u){for(var s=[],m=0;m<u.length;m++){var h=u[m],b=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===l(h.content[0].content[1])&&s.pop():h.content[h.content.length-1].content==="/>"||s.push({tagName:l(h.content[0].content[1]),openedBraces:0}):s.length>0&&h.type==="punctuation"&&h.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?s[s.length-1].openedBraces--:b=!0),(b||typeof h=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var c=l(h);m<u.length-1&&(typeof u[m+1]=="string"||u[m+1].type==="plain-text")&&(c+=l(u[m+1]),u.splice(m+1,1)),m>0&&(typeof u[m-1]=="string"||u[m-1].type==="plain-text")&&(c=l(u[m-1])+c,u.splice(m-1,1),m--),u[m]=new e.Token("plain-text",c,null,c)}h.content&&typeof h.content!="string"&&g(h.content)}};e.hooks.add("after-tokenize",function(u){u.language!=="jsx"&&u.language!=="tsx"||g(u.tokens)})}function P(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.typescript)){e.languages.javascript||$(e),e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var r=e.languages.extend("typescript",{});delete r["class-name"],e.languages.typescript["class-name"].inside=r,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:r}}}}),e.languages.ts=e.languages.typescript}}function Ee(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.tsx)){e.languages.jsx||Q(e),e.languages.typescript||P(e);var r=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",r),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}}function ee(){let e=new K;return R(e),Se(e),G(e),Ae(e),$(e),Le(e),_e(e),Q(e),P(e),Ee(e),e}var se=class{static get instance(){return this.__singleton__||(this.__singleton__=ee()),this.__singleton__}};function Re(e,t,r,n,a={}){let i=Ue(e,t,r,n,a);return A.stringify(n.util.encode(i.tokens),i.language,n)}function Ue(e,t,r,n,a={}){n||(n=se.instance),t||(t=n.languages.markup);var i={code:e,grammar:t,language:r,tokens:[]};if(n.hooks.run("before-tokenize",i),a.beforeTokenize?.forEach(o=>{o(i)}),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=n.tokenize(i.code,i.grammar),n.hooks.run("after-tokenize",i),a.afterTokenize?.forEach(o=>{o(i)}),i}function le(e,t,r){return e?t(e):r?.(e)}function $e(e,t=0){let r=null;return(...n)=>{r&&window.clearTimeout(r),r=window.setTimeout(()=>{e.apply(null,n)},t)}}var Z=class extends he{constructor(t){if(super(t),this.it=re,t.type!==de.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===re||t==null)return this._t=void 0,this.it=t;if(t===ce)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}};Z.directiveName="unsafeHTML",Z.resultType=1;var Te=pe(Z);var je=T`
  [part~="pre"],
  [part~="code"] {
    background: hsl(230, 1%, 98%);
    color: hsl(230, 8%, 24%);
    line-height: 1.8;
  }

  [part~="pre"] {
    margin: 0;
    /* This removes line wrapping */
    word-break: break-all;
    white-space: pre;
    padding: 0;
    height: 100%;
  }

  [part~="code"] {
    display: grid;
  }

  :host([wrap="hard"]) [part~="code"] {
    grid-template-columns: max-content max-content;
  }

  :host([wrap="soft"]) [part~="code"] {
    grid-template-columns: max-content minmax(0, 1fr);
  }

  :host([wrap="soft"]) [part~="pre"] {
    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([disable-line-numbers]) [part~="code"] {
    grid-template-columns: minmax(0, 1fr);
  }

  [part~="line"] {
    display: inline-block;
    width: 100%;
    padding-inline-start: 6px;
    padding-inline-end: 6px;
    min-height: 1lh;
  }

  [part~="line"]::before {
    content: " ";
    line-height: inherit;
    padding-inline-end: 6px;
  }

  [part~="line"].deleted::before {
    content: "-";
  }

  [part~="line"].inserted::before {
    content: "+";
  }

  [part~="gutter-cell"] {
    display: inline-block;
    padding-inline-end: 0.5em;
    padding-inline-start: 0.75em;
    user-select: none;
    color: rgba(0, 0, 0, 0.35);
    background-color: var(--syntax-bg);
    font-variant-numeric: tabular-nums;
    text-align: end;
    position: sticky;
    z-index: 1;
    left: 0px;
  }
`;var Ye=/\r\n|\r|\n/;function Me(e={}){let t=e.disableLineNumbers??!1,r=e.lineNumberStart??1,n=e.callback;return typeof n!="function"&&(n=(a,i,o)=>{a.length<=0||(e.disableLineNumbers||o.push(new A("light-gutter-cell",(i+r).toString())),o.push(new A("light-line",a)))}),function(i){let o=[];Ce(i.tokens).forEach((l,g)=>{n(l,g,o)}),i.tokens=o}}function Je(e){return Array.isArray(e)?e:[e]}function Ve(e){return e.length===0?"":e.length===1&&typeof e[0]=="string"?e[0]:e}function Ce(e){let t=[],r=[t];for(let n=0;n<e.length;n++){let a=e[n];if(typeof a=="string"){let i=a.split(Ye);for(let o=0;o<i.length;o++){o>0&&r.push(t=[]);let l=i[o];l&&t.push(l)}}else{let i=Ce(Je(a.content));if(i.length>1)for(let o=0;o<i.length;o++){o>0&&r.push(t=[]);let l=i[o];if(l.length){let g=new A(a.type,Ve(l),a.alias);g.length=l.reduce((u,s)=>u+s.length,0),t.push(g)}}else t.push(a)}}return r}var j=class{constructor(){let t=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=t,this.reset()}includes(t){if(this.numbers.has(t))return!0;if(this.ranges.length==0)return!1;for(let r of this.ranges){let[n,a]=r;if(t>=n&&t<=a)return!0}return!1}parse(t){return this.reset(),Array.isArray(t)?(t.forEach(r=>this.numbers.add(r)),this):t instanceof Set?(this.numbers=t,this):t.includes("{")?t.includes("}")?(t=t.split(/{/)[1],t?(t=t.split(/}/)[0],t.split(/,\s*/).forEach(r=>{let[n,a]=r.split(/-/),i=Number(n),o=Number(a);if(!(i==null||isNaN(i))){if(o==null||isNaN(o)){this.numbers.add(i);return}this.ranges.push([i,o])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function Be(e){let{highlightLinesRange:t,insertedLinesRange:r,deletedLinesRange:n}=e;return function(a){let i=1;for(let o of a.tokens)typeof o!="string"&&(t.includes(i)&&(o.type+=" line-highlight"),r.includes(i)&&(o.type+=" inserted"),n.includes(i)&&(o.type+=" deleted"),o.type.includes("light-line")&&i++)}}function ze(){let e=["inserted","line-highlight","deleted"];function t(r,n,a){r.type.includes(n)&&(r.attributes.part=a,e.forEach(i=>{r.type.includes(i)&&(i==="line-highlight"&&(i="highlight"),r.attributes.part+=` ${a}-${i}`)}))}return function(r){t(r,"light-line","line"),t(r,"light-gutter-cell","gutter-cell"),t(r,"light-marker","marker")}}var N=class extends q{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=$e(()=>this.handleMutation("code"),20),this.wrap="hard",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.highlighter=ee(),this.__resizeObserver=new ResizeObserver(()=>this.__setGutterMeasurements()),this.newLineRegex=/\r\n|\r|\n/,this.__highlightedCode__=""}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}willUpdate(t){(t.has("highlighter")||t.has("language")||t.has("code"))&&(this.__highlightedCode__=this.highlight(this.code)),super.willUpdate(t)}updated(t){if((t.has("insertedLines")||t.has("deletedLines")||t.has("highlightLines"))&&!t.has("code")){let r=this.shadowRoot?.querySelectorAll(".light-gutter-cell, .light-line");if(r?.length){let n=new j().parse(this.highlightLines),a=new j().parse(this.insertedLines),i=new j().parse(this.deletedLines);r.forEach((o,l)=>{let u=(l%2===0?l:l-1)/2+1;o.classList.toggle("line-highlight",n.includes(u)),o.part.toggle("line-highlight",n.includes(u)),o.classList.toggle("inserted",a.includes(u)),o.part.toggle("inserted",a.includes(u)),o.classList.toggle("deleted",i.includes(u)),o.part.toggle("deleted",i.includes(u))})}}super.updated(t)}handleMutation(t){if(t==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(t){return this.shadowRoot?.querySelector(`slot[name='${t}']`)}handleTemplate(t){let r=t.target;if(r==null)return;let n=r.getAttribute("name");if(["preview-code","code"].includes(n||"")===!1)return;let a=r.assignedElements({flatten:!0}),i=this.unescapeTags(ye(...a));if(this.preserveWhitespace||(i=me(i.trim())),n==="code"){this.code=i;return}}unescapeTags(t){return t.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(t=this.code){t=t.split(this.newLineRegex).map(n=>n===""?" ":n).join(`
`),this.highlighter||(this.highlighter=ee());let r=[Me({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers}),Be({insertedLinesRange:new j().parse(this.insertedLines),deletedLinesRange:new j().parse(this.deletedLines),highlightLinesRange:new j().parse(this.highlightLines)})];return this.highlighter.hooks.add("wrap",ze()),t=Re(t,this.highlighter.languages[this.language],this.language,this.highlighter,{afterTokenize:r}),t}__setGutterMeasurements(){let t=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;t&&this.style.setProperty("--gutter-cell-width",`${t}px`);let r=this.shadowRoot?.querySelector("[part~='code']");if(r){let{offsetHeight:n,clientHeight:a}=r,i=n-a;this.style.setProperty("--scrollbar-height",`${i}px`)}}render(){let t=this.language,r=H`
      <div part="base">
        ${le(!this.disableHighlight,()=>H` <pre
              id="pre-${t}"
              data-code-lang=${t}
              aria-hidden="true"
              part="pre pre-${t}"
              class="diff-highlight language-${t}"
            ><code
                tabindex="0"
                aria-labelledby="source-code-label"
                role="region"
                part="code code-${t}"
                class="language-${t}"
                .innerHTML=${this.__highlightedCode__}
              ></code></pre>`,()=>H`${Te(this.code)}`)}
        <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
        ${le(this.disableLineNumbers,()=>H``,()=>H`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterMeasurements())}),r}};E(N,"baseName","light-code"),E(N,"styles",[fe,je,be,T`
      :host {
        display: grid;
      }
      [part~="base"] {
        height: 100%;
        position: relative;
        z-index: 0;
        background: hsl(230, 1%, 98%);
        color: hsl(230, 8%, 24%);
        display: grid;
      }

      [part~="pre"] {
        height: 100%;
        display: grid;
        place-items: start;
      }

      [part~="code"] {
        width: 100%;
        height: 100%;
        place-content: start;
        overflow: auto;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(var(--gutter-cell-width, 40px));
        border-inline-end: var(--syntax-gutter-border);
        height: calc(100% - var(--scrollbar-height, 0px));
        max-height: 100%;
        overflow: hidden;
        pointer-events: none;
        z-index: 2;
      }
    `]),E(N,"properties",{disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserve-whitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{},highlighter:{attribute:!1,state:!0},__highlightedCode__:{attribute:!1,state:!0}});export{fe as a,Ke as b,be as c,me as d,q as e,ye as f,ee as g,le as h,$e as i,N as j};
/*! Bundled license information:

prism-esm/prism-core.js:
  (**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/pull/21/bridgetown/static/chunks/chunk-TQ4OL6SR.js.map
