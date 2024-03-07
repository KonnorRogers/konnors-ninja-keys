import{a as j,b as G,c as ge,d as ae,f as pe}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-DU3Z7QE2.js";import{d as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var de={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},he=e=>(...t)=>({_$litDirective$:e,values:t}),Y=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};var W=class extends Y{constructor(t){if(super(t),this.et=ae,t.type!==de.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ae||t==null)return this.ft=void 0,this.et=t;if(t===ge)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;let n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}};W.directiveName="unsafeHTML",W.resultType=1;var oe=he(W);function V(e){var t;return t=class extends e{static define(r,a,o){r||(r=this.baseName),a||(a=this);let i=window.customElements;this.__registry instanceof CustomElementRegistry&&(i=this.__registry);let l=!!i.get(r);l&&this.warnOnExistingElement&&console.warn(`${r} has already been registered.`),!l&&a&&i.define(r,class extends a{},o)}},$(t,"baseName",""),$(t,"warnOnExistingElement",!1),t}var ie=class extends V(HTMLElement){};var fe=new WeakMap;function De(e,t){let n=t;for(;n;){if(fe.get(n)===e)return!0;n=Object.getPrototypeOf(n)}return!1}function q(e){return t=>{if(De(e,t))return t;let n=e(t);return fe.set(n,e),n}}var J=!!ShadowRoot.prototype.createElement,ze=e=>{var t;return t=class extends e{static get scopedElements(){return{}}static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(r){this.__shadowRootOptions=r}constructor(...r){super(...r),this.renderOptions=this.renderOptions||void 0}get registry(){return this.constructor.__registry}set registry(r){let a=this.constructor;a.__registry=r}createRenderRoot(){let r=this.constructor,{scopedElements:a,shadowRootOptions:o}=r;if(!this.registry||this.registry===r.__registry&&!Object.prototype.hasOwnProperty.call(this.constructor,"__registry")){this.registry=J?new CustomElementRegistry:customElements;for(let[c,s]of Object.entries(a))this.defineScopedElement(c,s)}let l={mode:"open",...o,customElements:this.registry},g=this.attachShadow(l);return J&&(this.renderOptions.creationScope=g),g instanceof ShadowRoot&&this.adoptStyles(g),g}createScopedElement(r){return(J?this.shadowRoot:document).createElement(r)}adoptStyles(r){}defineScopedElement(r,a){let o=this.registry.get(r);return o&&J===!1&&o!==a&&console.error([`You are trying to re-register the "${r}" custom element with a different class via ScopedElementsMixin.`,"This is only possible with a CustomElementRegistry.","Your browser does not support this feature so you will need to load a polyfill for it.",'Load "@webcomponents/scoped-custom-element-registry" before you register ANY web component to the global customElements registry.','e.g. add "<script src="/node_modules/@webcomponents/scoped-custom-element-registry/scoped-custom-element-registry.min.js"><\/script>" as your first script tag.',"For more details you can visit https://open-wc.org/docs/development/scoped-elements/"].join(`
`)),o?this.registry.get(r):this.registry.define(r,a)}},$(t,"__registry",window.customElements),t},Ge=q(ze);var He=e=>class extends e{static get shadowRootOptions(){return this.__shadowRootOptions||{mode:"open"}}static set shadowRootOptions(n){this.__shadowRootOptions=n}get shadowRootOptions(){return this.constructor.shadowRootOptions}createRenderRoot(){return this.shadowRoot??this.attachShadow(this.shadowRootOptions||{mode:"open"})}connectedCallback(){typeof super.connectedCallback=="function"&&super.connectedCallback(),this.renderRoot==null&&(this.renderRoot=this.createRenderRoot())}},Ne=q(He);var U=class extends V(pe){constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,n])=>{n.define(t)})}};$(U,"dependencies",{});var be=j`
*, *:after, *:before {
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
`,Rt=j`
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
`;var me=j`
/**
 * One Light theme for prism.js
 * Based on Atom's One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax
 */

/**
 * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)
 * From colors.less
 * --mono-1: hsl(230, 8%, 24%);
 * --mono-2: hsl(230, 6%, 44%);
 * --mono-3: hsl(230, 4%, 64%)
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
 */
code[class*="language-"],
pre[class*="language-"] {
	background: hsl(230, 1%, 98%);
	color: hsl(230, 8%, 24%);
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
	background: hsl(230, 1%, 90%);
	color: inherit;
}

code[class*="language-"]::selection,
code[class*="language-"] *::selection,
pre[class*="language-"] *::selection {
	background: hsl(230, 1%, 90%);
	color: inherit;
}

.token.comment,
.token.prolog,
.token.cdata {
	color: hsl(230, 4%, 64%);
}

.token.doctype,
.token.punctuation,
.token.entity {
	color: hsl(230, 8%, 24%);
}

.token.attr-name,
.token.class-name,
.token.boolean,
.token.constant,
.token.number,
.token.atrule {
	color: hsl(35, 99%, 36%);
}

.token.keyword {
	color: hsl(301, 63%, 40%);
}

.token.property,
.token.tag,
.token.symbol,
.token.deleted,
.token.important {
	color: hsl(5, 74%, 59%);
}

.token.selector,
.token.string,
.token.char,
.token.builtin,
.token.inserted,
.token.regex,
.token.attr-value,
.token.attr-value > .token.punctuation {
	color: hsl(119, 34%, 47%);
}

.token.variable,
.token.operator,
.token.function {
	color: hsl(221, 87%, 60%);
}

.token.url {
	color: hsl(198, 99%, 37%);
}

/* HTML overrides */
.token.attr-value > .token.punctuation.attr-equals,
.token.special-attr > .token.attr-value > .token.value.css {
	color: hsl(230, 8%, 24%);
}

/* CSS overrides */
.language-css .token.selector {
	color: hsl(5, 74%, 59%);
}

.language-css .token.property {
	color: hsl(230, 8%, 24%);
}

.language-css .token.function,
.language-css .token.url > .token.function {
	color: hsl(198, 99%, 37%);
}

.language-css .token.url > .token.string.url {
	color: hsl(119, 34%, 47%);
}

.language-css .token.important,
.language-css .token.atrule .token.rule {
	color: hsl(301, 63%, 40%);
}

/* JS overrides */
.language-javascript .token.operator {
	color: hsl(301, 63%, 40%);
}

.language-javascript .token.template-string > .token.interpolation > .token.interpolation-punctuation.punctuation {
	color: hsl(344, 84%, 43%);
}

/* JSON overrides */
.language-json .token.operator {
	color: hsl(230, 8%, 24%);
}

.language-json .token.null.keyword {
	color: hsl(35, 99%, 36%);
}

/* MD overrides */
.language-markdown .token.url,
.language-markdown .token.url > .token.operator,
.language-markdown .token.url-reference.url > .token.string {
	color: hsl(230, 8%, 24%);
}

.language-markdown .token.url > .token.content {
	color: hsl(221, 87%, 60%);
}

.language-markdown .token.url > .token.url,
.language-markdown .token.url-reference.url {
	color: hsl(198, 99%, 37%);
}

.language-markdown .token.blockquote.punctuation,
.language-markdown .token.hr.punctuation {
	color: hsl(230, 4%, 64%);
	font-style: italic;
}

.language-markdown .token.code-snippet {
	color: hsl(119, 34%, 47%);
}

.language-markdown .token.bold .token.content {
	color: hsl(35, 99%, 36%);
}

.language-markdown .token.italic .token.content {
	color: hsl(301, 63%, 40%);
}

.language-markdown .token.strike .token.content,
.language-markdown .token.strike .token.punctuation,
.language-markdown .token.list.punctuation,
.language-markdown .token.title.important > .token.punctuation {
	color: hsl(5, 74%, 59%);
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
	color: hsla(230, 8%, 24%, 0.2);
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
	background: hsl(230, 1%, 90%);
	color: hsl(230, 6%, 44%);
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
	color: hsl(230, 8%, 24%);
}

/* Line Highlight plugin overrides */
/* The highlighted line itself */
.line-highlight.line-highlight {
	background: hsla(230, 8%, 24%, 0.05);
}

/* Default line numbers in Line Highlight plugin */
.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
	background: hsl(230, 1%, 90%);
	color: hsl(230, 8%, 24%);
	padding: 0.1em 0.6em;
	border-radius: 0.3em;
	box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */
}

/* Hovering over a linkable line number (in the gutter area) */
/* Requires Line Numbers plugin as well */
pre[id].linkable-line-numbers.linkable-line-numbers span.line-numbers-rows > span:hover:before {
	background-color: hsla(230, 8%, 24%, 0.05);
}

/* Line Numbers and Command Line plugins overrides */
/* Line separating gutter from coding area */
.line-numbers.line-numbers .line-numbers-rows,
.command-line .command-line-prompt {
	border-right-color: hsla(230, 8%, 24%, 0.2);
}

/* Stuff in the gutter */
.line-numbers .line-numbers-rows > span:before,
.command-line .command-line-prompt > span:before {
	color: hsl(230, 1%, 62%);
}

/* Match Braces plugin overrides */
/* Note: Outline colour is inherited from the braces */
.rainbow-braces .token.token.punctuation.brace-level-1,
.rainbow-braces .token.token.punctuation.brace-level-5,
.rainbow-braces .token.token.punctuation.brace-level-9 {
	color: hsl(5, 74%, 59%);
}

.rainbow-braces .token.token.punctuation.brace-level-2,
.rainbow-braces .token.token.punctuation.brace-level-6,
.rainbow-braces .token.token.punctuation.brace-level-10 {
	color: hsl(119, 34%, 47%);
}

.rainbow-braces .token.token.punctuation.brace-level-3,
.rainbow-braces .token.token.punctuation.brace-level-7,
.rainbow-braces .token.token.punctuation.brace-level-11 {
	color: hsl(221, 87%, 60%);
}

.rainbow-braces .token.token.punctuation.brace-level-4,
.rainbow-braces .token.token.punctuation.brace-level-8,
.rainbow-braces .token.token.punctuation.brace-level-12 {
	color: hsl(301, 63%, 40%);
}

/* Diff Highlight plugin overrides */
/* Taken from https://github.com/atom/github/blob/master/styles/variables.less */
pre.diff-highlight > code .token.token.deleted:not(.prefix),
pre > code.diff-highlight .token.token.deleted:not(.prefix) {
	background-color: hsla(353, 100%, 66%, 0.15);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::-moz-selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {
	background-color: hsla(353, 95%, 66%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix),
pre > code.diff-highlight .token.token.inserted:not(.prefix) {
	background-color: hsla(137, 100%, 55%, 0.15);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::-moz-selection {
	background-color: hsla(135, 73%, 55%, 0.25);
}

pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,
pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,
pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {
	background-color: hsla(135, 73%, 55%, 0.25);
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
	stroke: hsl(230, 8%, 24%);
	stroke-opacity: 1;
}

/* Stroke colours of the handle, direction point, and vector itself */
.prism-previewer-easing.prism-previewer-easing circle,
.prism-previewer-easing.prism-previewer-easing path,
.prism-previewer-easing.prism-previewer-easing line {
	stroke: hsl(230, 8%, 24%);
}

/* Fill colour of the handle */
.prism-previewer-easing.prism-previewer-easing circle {
	fill: transparent;
}

`;function ve(e,...t){let n=[],r=typeof e=="string"?[e]:e.slice();r[r.length-1]=r[r.length-1].replace(/\r?\n([\t ]*)$/,"");for(let o=0;o<r.length;o++){let i;(i=r[o].match(/\n[\t ]+/g))&&n.push(...i)}if(n.length){let o=Math.min(...n.map(l=>l.length-1)),i=new RegExp(`
[	 ]{${o}}`,"g");for(let l=0;l<r.length;l++)r[l]=r[l].replace(i,`
`)}r[0]=r[0].replace(/^\r?\n/,"");let a=r[0];for(let o=0;o<t.length;o++)a+=t[o]+r[o+1];return a}function ke(...e){let t=[],n=document.createElement("div");for(let r of e){if(r instanceof HTMLTemplateElement){let a=r.content.cloneNode(!0);n.append(a),t.push(n.innerHTML),n.innerHTML="";continue}if(r instanceof HTMLScriptElement){t.push(r.textContent);continue}if(r instanceof HTMLTextAreaElement){t.push(r.value);continue}t.push(r.innerHTML)}return t.join(`
`)}var se=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{},Z=se;var K=class{constructor(t={}){let n={},{disableWorkerMessageHandler:r,manual:a}=t;this.manual=a,this.manual==null&&(this.manual=!0),this.plugins={};let o=this;this.disableWorkerMessageHandler=!!r,this.Token=E,this.util=new le(this);let i=this.util;if(this.languages={plain:n,plaintext:n,text:n,txt:n,extend:(s,m)=>{let h=this.util.clone(this.languages[s]);for(var b in m)h[b]=m[b];return h},insertBefore:(s,m,h,b)=>{b||(b=this.languages);let u=b[s],f={};for(let v in u)if(u.hasOwnProperty(v)){if(v==m)for(var d in h)h.hasOwnProperty(d)&&(f[d]=h[d]);h.hasOwnProperty(v)||(f[v]=u[v])}var p=b[s];return b[s]=f,this.languages.DFS(this.languages,function(v,k){k===p&&v!=s&&(this[v]=f)}),f},DFS(s,m,h,b){b=b||{};var u=i.objId;for(var f in s)if(s.hasOwnProperty(f)){m.call(s,f,s[f],h||f);var d=s[f],p=i.type(d);p==="Object"&&!b[u(d)]?(b[u(d)]=!0,this.DFS(d,m,null,b)):p==="Array"&&!b[u(d)]&&(b[u(d)]=!0,this.DFS(d,m,f,b))}}},this.hooks={all:{},add:function(s,m){var h=o.hooks.all;h[s]=h[s]||[],h[s].push(m)},run:function(s,m){var h=o.hooks.all[s];if(!(!h||!h.length))for(var b=0,u;u=h[b++];)u(m)}},!Z.document)return Z.addEventListener&&(o.disableWorkerMessageHandler||Z.addEventListener("message",function(s){var m=JSON.parse(s.data),h=m.language,b=m.code,u=m.immediateClose;Z.postMessage(o.highlight(b,o.languages[h],h)),u&&se.close()},!1)),o;function l(){o.manual||o.highlightAll()}let g=this.util.currentScript();if(g&&(this.filename=g.src,g.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var c=document.readyState;c==="loading"||c==="interactive"&&g&&g.defer?document.addEventListener("DOMContentLoaded",l):window.requestAnimationFrame?window.requestAnimationFrame(l):window.setTimeout(l,16)}}highlightAll(t,n){this.highlightAllUnder(document,t,n)}highlightAllUnder(t,n,r){var a={callback:r,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};this.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),this.hooks.run("before-all-elements-highlight",a);for(var o=0,i;i=a.elements[o++];)this.highlightElement(i,n===!0,a.callback)}highlightElement(t,n,r){var a=this.util.getLanguage(t),o=this.languages[a];this.util.setLanguage(t,a);var i=t.parentElement;i&&i.nodeName.toLowerCase()==="pre"&&this.util.setLanguage(i,a);var l=t.textContent,g={element:t,language:a,grammar:o,code:l};let c=m=>{g.highlightedCode=m,this.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,this.hooks.run("after-highlight",g),this.hooks.run("complete",g),r&&r.call(g.element)};if(this.hooks.run("before-sanity-check",g),i=g.element.parentElement,i&&i.nodeName.toLowerCase()==="pre"&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!g.code){this.hooks.run("complete",g),r&&r.call(g.element);return}if(this.hooks.run("before-highlight",g),!g.grammar){c(this.util.encode(g.code));return}if(n&&se.Worker){var s=new Worker(this.filename);s.onmessage=function(m){c(m.data)},s.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else c(this.highlight(g.code,g.grammar,g.language))}highlight(t,n,r){var a={code:t,grammar:n,language:r};if(this.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=this.tokenize(a.code,a.grammar),this.hooks.run("after-tokenize",a),E.stringify(this.util.encode(a.tokens),a.language,this)}tokenize(t,n){var r=n?.rest;if(r){for(var a in r)n[a]=r[a];delete n.rest}var o=new We;return X(o,o.head,t),xe(t,o,n,o.head,0,this),Ue(o)}},E=class{constructor(t,n,r,a){this.type=t,this.content=n,this.alias=r,this.length=(a||"").length|0}static stringify(t,n,r){let a=this;if(typeof t=="string")return t;if(Array.isArray(t)){var o="";return t.forEach(function(s){o+=a.stringify(s,n,r)}),o}var i={type:t.type,content:a.stringify(t.content,n,r),tag:"span",classes:["token",t.type],attributes:{},language:n},l=t.alias;l&&(Array.isArray(l)?Array.prototype.push.apply(i.classes,l):i.classes.push(l)),r.hooks.run("wrap",i);var g="";for(var c in i.attributes)g+=" "+c+'="'+(i.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+g+">"+i.content+"</"+i.tag+">"}},ye=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,Ie=0,le=class{constructor(t){$(this,"encode",t=>{if(t instanceof E){let n=t.content;return new E(t.type,this.encode(n),t.alias)}else return Array.isArray(t)?t.map(n=>this.encode(n)):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")});this.prism=t}type(t){return Object.prototype.toString.call(t).slice(8,-1)}getLanguage(t){for(;t;){var n=ye.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"}setLanguage(t,n){t.className=t.className.replace(RegExp(ye,"gi"),""),t.classList.add("language-"+n)}objId(t){return t.__id||Object.defineProperty(t,"__id",{value:++Ie}),t.__id}clone(t){return structuredClone(t)}isActive(t,n,r){for(var a="no-"+n;t;){var o=t.classList;if(o.contains(n))return!0;if(o.contains(a))return!1;t=t.parentElement}return!!r}currentScript(){if(typeof document>"u")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(a){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(t){var n=document.getElementsByTagName("script");for(var r in n)if(n[r].src==t)return n[r]}return null}}};function we(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var o=a[1].length;a.index+=o,a[0]=a[0].slice(o)}return a}function xe(e,t,n,r,a,o,i){for(var l in n)if(!(!n.hasOwnProperty(l)||!n[l])){var g=n[l];g=Array.isArray(g)?g:[g];for(var c=0;c<g.length;++c){if(i&&i.cause==l+","+c)return;var s=g[c],m=s.inside,h=!!s.lookbehind,b=!!s.greedy,u=s.alias;if(b&&!s.pattern.global){var f=s.pattern.toString().match(/[imsuy]*$/)[0];s.pattern=RegExp(s.pattern.source,f+"g")}for(var d=s.pattern||s,p=r.next,v=a;p!==t.tail&&!(i&&v>=i.reach);v+=p.value.length,p=p.next){var k=p.value;if(t.length>e.length)return;if(!(k instanceof E)){var F=1,y;if(b){if(y=we(d,v,e,h),!y||y.index>=e.length)break;var L=y.index,_=y.index+y[0].length,w=v;for(w+=p.value.length;L>=w;)p=p.next,w+=p.value.length;if(w-=p.value.length,v=w,p.value instanceof E)continue;for(var x=p;x!==t.tail&&(w<_||typeof x.value=="string");x=x.next)F++,w+=x.value.length;F--,k=e.slice(v,w),y.index-=v}else if(y=we(d,0,k,h),!y)continue;var L=y.index,S=y[0],M=k.slice(0,L),D=k.slice(L+S.length),B=v+k.length;i&&B>i.reach&&(i.reach=B);var C=p.prev;M&&(C=X(t,C,M),v+=M.length),qe(t,C,F);var ne=new E(l,m?o.tokenize(S,m):S,u,S);if(p=X(t,C,ne),D&&X(t,p,D),F>1){var z={cause:l+","+c,reach:B};xe(e,t,n,p.prev,v,o,z),i&&z.reach>i.reach&&(i.reach=z.reach)}}}}}}function We(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function X(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function qe(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}function Ue(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}function R(e,t){typeof e>"u"||t?.force!==!0&&e.languages.markup||(e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(n){n.type==="entity"&&(n.attributes.title=n.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(r,a){var o={};o["language-"+a]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[a]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};i["language-"+a]={pattern:/[\s\S]+/,inside:e.languages[a]};var l={};l[r]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return r}),"i"),lookbehind:!0,greedy:!0,inside:i},e.languages.insertBefore("markup","cdata",l)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(n,r){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+n+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[r,"language-"+r],inside:e.languages[r]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml)}function H(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.css)){R(e);var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var r=e.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}}function Q(e,t){typeof e>"u"||t?.force!==!0&&e.languages.clike||(e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/})}function T(e,t){typeof e>"u"||t?.force!==!0&&e.languages.javascript||(Q(e),R(e),e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript)}function Fe(e){if(typeof e>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t="Loading\u2026",n=function(b,u){return"\u2716 Error "+b+" while fetching file: "+u},r="\u2716 Error: File does not exist or is empty",a={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},o="data-src-status",i="loading",l="loaded",g="failed",c="pre[data-src]:not(["+o+'="'+l+'"]):not(['+o+'="'+i+'"])';function s(b,u,f){var d=new XMLHttpRequest;d.open("GET",b,!0),d.onreadystatechange=function(){d.readyState==4&&(d.status<400&&d.responseText?u(d.responseText):d.status>=400?f(n(d.status,d.statusText)):f(r))},d.send(null)}function m(b){var u=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(b||"");if(u){var f=Number(u[1]),d=u[2],p=u[3];return d?p?[f,Number(p)]:[f,void 0]:[f,f]}}e.hooks.add("before-highlightall",function(b){b.selector+=", "+c}),e.hooks.add("before-sanity-check",function(b){var u=b.element;if(u.matches(c)){b.code="",u.setAttribute(o,i);var f=u.appendChild(document.createElement("CODE"));f.textContent=t;var d=u.getAttribute("data-src"),p=b.language;if(p==="none"){var v=(/\.(\w+)$/.exec(d)||[,"none"])[1];p=a[v]||v}e.util.setLanguage(f,p),e.util.setLanguage(u,p);var k=e.plugins.autoloader;k&&k.loadLanguages(p),s(d,function(F){u.setAttribute(o,l);var y=m(u.getAttribute("data-range"));if(y){var _=F.split(/\r\n?|\n/g),w=y[0],x=y[1]==null?_.length:y[1];w<0&&(w+=_.length),w=Math.max(0,Math.min(w-1,_.length)),x<0&&(x+=_.length),x=Math.max(0,Math.min(x,_.length)),F=_.slice(w,x).join(`
`),u.hasAttribute("data-start")||u.setAttribute("data-start",String(w+1))}f.textContent=F,e.highlightElement(f)},function(F){u.setAttribute(o,g),f.textContent=F})}}),e.plugins.fileHighlight={highlight:function(u){for(var f=(u||document).querySelectorAll(c),d=0,p;p=f[d++];)e.highlightElement(p)}};var h=!1;e.fileHighlight=function(){h||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),h=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}var P=class extends K{constructor(...t){super(...t),R(this),H(this),Q(this),T(this),Fe(this)}};function Ae(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["markup-templating"])return;R(e);function n(r,a){return"___"+r.toUpperCase()+a+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(r,a,o,i){if(r.language===a){var l=r.tokenStack=[];r.code=r.code.replace(o,function(g){if(typeof i=="function"&&!i(g))return g;for(var c=l.length,s;r.code.indexOf(s=n(a,c))!==-1;)++c;return l[c]=g,s}),r.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(r,a){if(r.language!==a||!r.tokenStack)return;r.grammar=e.languages[a];var o=0,i=Object.keys(r.tokenStack);function l(g){for(var c=0;c<g.length&&!(o>=i.length);c++){var s=g[c];if(typeof s=="string"||s.content&&typeof s.content=="string"){var m=i[o],h=r.tokenStack[m],b=typeof s=="string"?s:s.content,u=n(a,m),f=b.indexOf(u);if(f>-1){++o;var d=b.substring(0,f),p=new e.Token(a,e.tokenize(h,r.grammar),"language-"+a,h),v=b.substring(f+u.length),k=[];d&&k.push.apply(k,l([d])),k.push(p),v&&k.push.apply(k,l([v])),typeof s=="string"?g.splice.apply(g,[c,1].concat(k)):s.content=k}}else s.content&&l(s.content)}return g}l(r.tokens)}}})}function Se(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages["css-extras"])){e.languages["css-extras"]={},H(e);var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,r;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:r={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp(`\\[(?:[^[\\]"']|`+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=r,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:o})}}function Ee(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-extras"])return;e.languages["js-extras"]={},T(e),e.languages.insertBefore("javascript","function-variable",{"method-variable":{pattern:RegExp("(\\.\\s*)"+e.languages.javascript["function-variable"].pattern.source),lookbehind:!0,alias:["function-variable","method","function","property-access"]}}),e.languages.insertBefore("javascript","function",{method:{pattern:RegExp("(\\.\\s*)"+e.languages.javascript.function.source),lookbehind:!0,alias:["function","property-access"]}}),e.languages.insertBefore("javascript","constant",{"known-class-name":[{pattern:/\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,alias:"class-name"},{pattern:/\b(?:[A-Z]\w*)Error\b/,alias:"class-name"}]});function n(g,c){return RegExp(g.replace(/<ID>/g,function(){return/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source}),c)}e.languages.insertBefore("javascript","keyword",{imports:{pattern:n(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),lookbehind:!0,inside:e.languages.javascript},exports:{pattern:n(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),lookbehind:!0,inside:e.languages.javascript}}),e.languages.javascript.keyword.unshift({pattern:/\b(?:as|default|export|from|import)\b/,alias:"module"},{pattern:/\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,alias:"control-flow"},{pattern:/\bnull\b/,alias:["null","nil"]},{pattern:/\bundefined\b/,alias:"nil"}),e.languages.insertBefore("javascript","operator",{spread:{pattern:/\.{3}/,alias:"operator"},arrow:{pattern:/=>/,alias:"operator"}}),e.languages.insertBefore("javascript","punctuation",{"property-access":{pattern:n(/(\.\s*)#?<ID>/.source),lookbehind:!0},"maybe-class-name":{pattern:/(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,lookbehind:!0},dom:{pattern:/\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,alias:"variable"},console:{pattern:/\bconsole(?=\s*\.)/,alias:"class-name"}});for(var r=["function","function-variable","method","method-variable","property-access"],a=0;a<r.length;a++){var o=r[a],i=e.languages.javascript[o];e.util.type(i)==="RegExp"&&(i=e.languages.javascript[o]={pattern:i});var l=i.inside||{};i.inside=l,l["maybe-class-name"]=/^[A-Z][\s\S]*/}}function Le(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages["js-templates"])return;e.languages["js-templates"]={},T(e);var n=e.languages.javascript["template-string"],r=n.pattern.source,a=n.inside.interpolation,o=a.inside["interpolation-punctuation"],i=a.pattern.source;function l(u,f){if(e.languages[u])return{pattern:RegExp("((?:"+f+")\\s*)"+r),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:u}}}}e.languages.javascript["template-string"]=[l("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),l("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),l("svg",/\bsvg/.source),l("markdown",/\b(?:markdown|md)/.source),l("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),l("sql",/\bsql/.source),n].filter(Boolean);function g(u,f){return"___"+f.toUpperCase()+"_"+u+"___"}function c(u,f,d){var p={code:u,grammar:f,language:d};return e.hooks.run("before-tokenize",p),p.tokens=e.tokenize(p.code,p.grammar),e.hooks.run("after-tokenize",p),p.tokens}function s(u){var f={};f["interpolation-punctuation"]=o;var d=e.tokenize(u,f);if(d.length===3){var p=[1,1];p.push.apply(p,c(d[1],e.languages.javascript,"javascript")),d.splice.apply(d,p)}return new e.Token("interpolation",d,a.alias,u)}function m(u,f,d){var p=e.tokenize(u,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),v=0,k={},F=p.map(function(x){if(typeof x=="string")return x;for(var L=x.content,S;u.indexOf(S=g(v++,d))!==-1;);return k[S]=L,S}).join(""),y=c(F,f,d),_=Object.keys(k);v=0;function w(x){for(var L=0;L<x.length;L++){if(v>=_.length)return;var S=x[L];if(typeof S=="string"||typeof S.content=="string"){var M=_[v],D=typeof S=="string"?S:S.content,B=D.indexOf(M);if(B!==-1){++v;var C=D.substring(0,B),ne=s(k[M]),z=D.substring(B+M.length),O=[];if(C&&O.push(C),O.push(ne),z){var ce=[z];w(ce),O.push.apply(O,ce)}typeof S=="string"?(x.splice.apply(x,[L,1].concat(O)),L+=O.length-1):S.content=O}}else{var re=S.content;Array.isArray(re)?w(re):w([re])}}}return w(y),new e.Token(d,y,"language-"+d,u)}var h={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};e.hooks.add("after-tokenize",function(u){if(!(u.language in h))return;function f(d){for(var p=0,v=d.length;p<v;p++){var k=d[p];if(typeof k!="string"){var F=k.content;if(!Array.isArray(F)){typeof F!="string"&&f([F]);continue}if(k.type==="template-string"){var y=F[1];if(F.length===3&&typeof y!="string"&&y.type==="embedded-code"){var _=b(y),w=y.alias,x=Array.isArray(w)?w[0]:w,L=e.languages[x];if(!L)continue;F[1]=m(_,L,x)}}else f(F)}}}f(u.tokens)});function b(u){return typeof u=="string"?u:Array.isArray(u)?u.map(b).join(""):b(u.content)}}function ee(e,t){if(typeof e>"u"||t?.force!==!0&&e.languages.jsx)return;e.languages.markup||R(e),e.languages.javascript||T(e);var n=e.util.clone(e.languages.javascript),r=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(c,s){return c=c.replace(/<S>/g,function(){return r}).replace(/<BRACES>/g,function(){return a}).replace(/<SPREAD>/g,function(){return o}),RegExp(c,s)}o=i(o).source,e.languages.jsx=e.languages.extend("markup",n),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=n.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(c){return c?typeof c=="string"?c:typeof c.content=="string"?c.content:c.content.map(l).join(""):""},g=function(c){for(var s=[],m=0;m<c.length;m++){var h=c[m],b=!1;if(typeof h!="string"&&(h.type==="tag"&&h.content[0]&&h.content[0].type==="tag"?h.content[0].content[0].content==="</"?s.length>0&&s[s.length-1].tagName===l(h.content[0].content[1])&&s.pop():h.content[h.content.length-1].content==="/>"||s.push({tagName:l(h.content[0].content[1]),openedBraces:0}):s.length>0&&h.type==="punctuation"&&h.content==="{"?s[s.length-1].openedBraces++:s.length>0&&s[s.length-1].openedBraces>0&&h.type==="punctuation"&&h.content==="}"?s[s.length-1].openedBraces--:b=!0),(b||typeof h=="string")&&s.length>0&&s[s.length-1].openedBraces===0){var u=l(h);m<c.length-1&&(typeof c[m+1]=="string"||c[m+1].type==="plain-text")&&(u+=l(c[m+1]),c.splice(m+1,1)),m>0&&(typeof c[m-1]=="string"||c[m-1].type==="plain-text")&&(u=l(c[m-1])+u,c.splice(m-1,1),m--),c[m]=new e.Token("plain-text",u,null,u)}h.content&&typeof h.content!="string"&&g(h.content)}};e.hooks.add("after-tokenize",function(c){c.language!=="jsx"&&c.language!=="tsx"||g(c.tokens)})}function te(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.typescript)){e.languages.javascript||T(e),e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript}}function _e(e,t){if(!(typeof e>"u")&&!(t?.force!==!0&&e.languages.tsx)){e.languages.jsx||ee(e),e.languages.typescript||te(e);var n=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",n),delete e.languages.tsx.parameter,delete e.languages.tsx["literal-property"];var r=e.languages.tsx.tag;r.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+r.pattern.source+")",r.pattern.flags),r.lookbehind=!0}}var A=new P;R(A);Ae(A);H(A);Se(A);T(A);Ee(A);Le(A);ee(A);te(A);_e(A);function $e(e,t,n,r={}){var a={code:e,grammar:t,language:n,tokens:[]};if(A.hooks.run("before-tokenize",a),r.beforeTokenize?.forEach(o=>{o(a)}),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=A.tokenize(a.code,a.grammar),r.afterTokenize?.forEach(o=>{o(a)}),A.hooks.run("after-tokenize",a),E.stringify(A.util.encode(a.tokens),a.language,A)}var Ze=/\r\n|\r|\n/;function Re(e={}){let t=e.disableLineNumbers??!1,n=e.lineNumberStart??1;return function(a){let o=[];Te(a.tokens).forEach((i,l)=>{i.length<=0&&i.push(" "),e.disableLineNumbers!==!0&&o.push(new E("light-gutter-cell",(l+n).toString())),o.push(new E("light-line",i))}),a.tokens=o}}function Ye(e){return Array.isArray(e)?e:[e]}function Ve(e){return e.length===0?"":e.length===1&&typeof e[0]=="string"?e[0]:e}function Te(e){let t=[],n=[t];for(let r=0;r<e.length;r++){let a=e[r];if(typeof a=="string"){let o=a.split(Ze);for(let i=0;i<o.length;i++){i>0&&n.push(t=[]);let l=o[i];l&&t.push(l)}}else{let o=Te(Ye(a.content));if(o.length>1)for(let i=0;i<o.length;i++){i>0&&n.push(t=[]);let l=o[i];if(l.length){let g=new E(a.type,Ve(l),a.alias);g.length=l.reduce((c,s)=>c+s.length,0),t.push(g)}}else t.push(a)}}return n}function ue(e,t,n){return e?t():n?.()}function je(e,t=" "){let n=[];for(let[r,a]of Object.entries(e))a&&n.push(r);return n.join(t)}function Me(e,t=0){let n=null;return(...r)=>{n&&window.clearTimeout(n),n=window.setTimeout(()=>{e.apply(null,r)},t)}}var Be=j`

[part~="pre"],
[part~="code"] {
  color: #272727;
  background-color: #f7f7f7;
  line-height: 1.8;
}

[part~="pre"] {
  color: #272727;
  background-color: #f7f7f7;
  margin: 0;
  overflow: auto;
  /* This removes line wrapping */
  word-break: break-all;
  white-space: pre;
  padding: 0;
  height: 100%;
}

[part~="code"] {
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
}

:host([wrap="soft"]) [part~="pre"] {
  /* this creates line-wrapping. */
  word-break: break-word;
  white-space: pre-wrap;
}

:host([disable-line-numbers]) [part~="code"] {
  grid-template-columns: minmax(0, 1fr);
}

[part~='line'] {
  display: inline-block;
  width: 100%;
  padding-inline-start: 18px;
  position: relative;
}

[part~="line"]:is(.deleted, .inserted, .line-highlight)::after {
  content: "";
  position: absolute;
  top: 0%;
  left: 0%;
  line-height: inherit;
  mix-blend-mode: difference;
  filter: invert(1);
  padding-inline-start: 2px;
}


[part~="line"].deleted::after {
  content: "-"
}

[part~="line"].inserted::after {
  content: "+"
}

[part~='gutter-cell'] {
  display: inline-block;
  padding-inline-end: 0.5em;
  padding-inline-start: 0.75em;
  user-select: none;
  color: rgba(0, 0, 0, 0.35);
  background-color: transparent;
  font-variant-numeric: tabular-nums;
  text-align: end;
}

`;var N=class{constructor(){let t=()=>{this.errors=[],this.ranges=[],this.numbers=new Set};this.reset=t,this.reset()}includes(t){if(this.numbers.has(t))return!0;if(this.ranges.length==0)return!1;for(let n of this.ranges){let[r,a]=n;if(t>=r&&t<=a)return!0}return!1}parse(t){return this.reset(),t.includes("{")?t.includes("}")?(t=t.split(/{/)[1],t?(t=t.split(/}/)[0],t.split(/,\s*/).forEach(n=>{let[r,a]=n.split(/-/),o=Number(r),i=Number(a);if(!(o==null||isNaN(o))){if(i==null||isNaN(i)){this.numbers.add(o);return}this.ranges.push([o,i])}}),this):(this.errors.push(new Error("Invalid string provided for range.")),this)):(this.errors.push(new Error("Unable to parse range. No `}` found.")),this):(this.errors.push(new Error("Unable to parse range. No `{` found.")),this)}};function Ce(e){let{highlightLinesRange:t,insertedLinesRange:n,deletedLinesRange:r}=e;return function(a){let o=1;for(let i of a.tokens)typeof i!="string"&&(t.includes(o)&&(i.type+=" line-highlight"),n.includes(o)&&(i.type+=" inserted"),r.includes(o)&&(i.type+=" deleted"),i.type.includes("light-line")&&o++)}}function Oe(){return function(e){let t=["inserted","line-highlight","deleted"];e.type.includes("light-line")&&(e.attributes.part="line",t.forEach(n=>{e.type.includes(n)&&(n==="line-highlight"&&(n="highlight"),e.attributes.part+=" line-"+n)})),e.type.includes("light-gutter-cell")&&(e.attributes.part="gutter-cell",t.forEach(n=>{e.type.includes("gutter-cell-"+n)&&(n==="line-highlight"&&(n="highlight"),e.attributes.part+=" gutter-cell-"+n)}))}}var I=class extends U{constructor(){super(),this.language="html",this.disableHighlight=!1,this.code="",this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.codeDebounce=Me(()=>this.handleMutation("code"),20),this.wrap="soft",this.preserveWhitespace=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.__resizeObserver=new ResizeObserver(()=>this.__setGutterWidth())}connectedCallback(){super.connectedCallback(),this.__resizeObserver.observe(this)}disconnectedCallback(){super.disconnectedCallback(),this.__resizeObserver.unobserve(this)}handleMutation(t){if(t==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(t){return this.shadowRoot?.querySelector(`slot[name='${t}']`)}handleTemplate(t){let n=t.target;if(n==null)return;let r=n.getAttribute("name");if(["preview-code","code"].includes(r||"")===!1)return;let a=n.assignedElements({flatten:!0}),o=this.unescapeTags(ke(...a));if(this.preserveWhitespace||(o=ve(o.trim())),r==="code"){this.code=o;return}}unescapeTags(t){return t.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}highlight(t=this.code){let n=[];return n.push(Re({lineNumberStart:this.lineNumberStart,disableLineNumbers:this.disableLineNumbers})),n.push(Ce({insertedLinesRange:new N().parse(this.insertedLines),deletedLinesRange:new N().parse(this.deletedLines),highlightLinesRange:new N().parse(this.highlightLines)})),A.hooks.add("wrap",Oe()),t=$e(t,A.languages[this.language],this.language,{afterTokenize:n}),t}__setGutterWidth(){let t=this.shadowRoot?.querySelector("[part~='gutter-cell']")?.offsetWidth;t&&this.style.setProperty("--gutter-cell-width",`${t}px`)}render(){let t=this.language,n=G`
      <div part=${je({base:!0})}>
          ${ue(!this.disableHighlight,()=>G`
	            <pre
                id="pre-${t}"
                data-code-lang=${t}
                aria-hidden="true"
                part="pre pre-${t}"
                tabindex="0"
                aria-labelledby="source-code-label"
                class="diff-highlight language-${t}"
                role="region"
              ><code
                  part="code code-${t}"
                  class="language-${t}"
                >${oe(this.highlight(this.code))}</code></pre>`,()=>G`${oe(this.code)}`)}

          <!-- This gutter is for showing when line numbers may not correspond to existing lines. -->
          ${ue(this.disableLineNumbers,()=>G``,()=>G`<div part="gutter"></div>`)}
      </div>

      <div hidden>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return setTimeout(async()=>{await this.updateComplete,setTimeout(()=>this.__setGutterWidth())}),n}};$(I,"baseName","light-code"),$(I,"styles",[be,Be,me,j`
      [part~="base"] {
        height: 100%;
        position: relative;
      }

      [part~="gutter"] {
        position: absolute;
        top: 0;
        left: 0;
        width: var(--gutter-cell-width, 40px);
        border-inline-end: 1px solid darkgray;
        background-color: rgba(50, 50, 50, 0.08);
        height: 100%;
        max-height: 100%;
        overflow: hidden;
      }
    `]),$(I,"properties",{summary:{},disableHighlight:{type:Boolean,attribute:"disable-highlight"},preserveWhitespace:{type:Boolean,attribute:"preserveWhitespace"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},lineNumberStart:{type:Number,attribute:"line-number-start"},wrap:{reflect:!0,attribute:"wrap"},language:{},code:{}});export{de as a,he as b,Y as c,U as d,be as e,Rt as f,me as g,ve as h,ke as i,E as j,A as k,$e as l,Re as m,ue as n,je as o,Me as p,I as q};
/*! Bundled license information:

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

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
*/
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-GXLL2RRF.js.map
