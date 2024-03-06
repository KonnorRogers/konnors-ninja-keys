import{a as u,b as S,c as R,d as $,e as M}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-KNJWQFN3.js";import{d as g,e as f,f as b,h as v,i as w,n as y,o as z,p as c,q as x}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-R6OTTPPV.js";import{a as m,b as h}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-TMG554ZJ.js";import{d}from"/konnors-ninja-keys/pull/13/bridgetown/static/chunks/chunk-XDPUZW52.js";var H=m`
:host {
  --border-color: lightgray;
}

:host,
[part~="base"] {
  max-width: 100%;
}

:host([resizing]) [part=~"base"] {
  cursor: col-resize;
}

[part~="base"] {
  border: 1px solid var(--border-color);
  border-radius: 3px;
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: minmax(0, auto) minmax(0, 1fr) minmax(0, auto);
  height: 100%;
  min-height: inherit;
}

[part~="panel-resizer"] {
  border-color: transparent;
  border-radius: 0;
  border-inline-start: 1px solid var(--border-color);
}

:host(:not([resize-position="100"])) [part~="panel-resizer"] {
  border-inline-end: 1px solid var(--border-color);
}

[part~="preview"] {
  display: grid;
  grid-template-columns: minmax(0, var(--start-panel-width, 1fr)) minmax(0, auto) minmax(0, var(--end-panel-width, auto));
  overflow: auto;
  max-height: 100%;
  resize: vertical;

}

[part~="start-panel"] {
  padding: 1rem;
  min-width: 100%;
}

[part~="preview"] {
  min-height: 100%;
  max-height: 100%;
  width: 100%;
}

[part~="end-panel"] {
  background-color: rgba(0,0,0,0.025);
}

[part~="code-wrapper"] {
  border-top: 1px solid var(--border-color);
}

[part~="actions"] {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-template-columns: minmax(0, 1fr) repeat(auto-fill, minmax(0, auto));
}

button[part~="source-code-toggle"] {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top: 1px solid var(--border-color);
  min-height: 100%;
  font-size: 1em;
  padding: 0.75rem;
}

[part~="source-code-toggle"] svg {
  transform-origin: 50% 50%;
  transition: .25s transform ease;
}

[part~="source-code-toggle"][aria-expanded="true"] svg {
  transform: rotate(180deg);
}

[part~="source-details"]::part(summary) {
  display: none;
}
`;var L="Show source code",a=class extends g{constructor(){super(),this.sandboxSettings="",this.summary=L,this.language="html",this.previewMode="iframe",this.resizing=!1,this.disableHighlight=!1,this.highlightLines="",this.insertedLines="",this.deletedLines="",this.disableLineNumbers=!1,this.lineNumberStart=1,this.code="",this.previewHtml="",this.open=!1,this.resizePosition=100,this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.__mutationObserverConfig={childList:!0,subtree:!0,characterData:!0},this.previewHtmlDebounce=c(()=>this.handleMutation("preview-html"),20),this.codeDebounce=c(()=>this.handleMutation("code"),20),this.wrap="soft",this.unescapeBehavior="last",this.scriptScope="document"}resetIframeCodeMutationObserver(){this.previewHtmlMutationObserver&&this.previewHtmlMutationObserver.disconnect(),this.previewHtmlMutationObserver=new MutationObserver((...t)=>this.previewHtmlDebounce());let e=this.findSlot("preview-html")?.assignedElements({flatten:!0})||[];for(let t of e)this.previewHtmlMutationObserver.observe(t,this.__mutationObserverConfig)}resetCodeMutationObserver(){this.codeMutationObserver&&this.codeMutationObserver.disconnect(),this.codeMutationObserver=new MutationObserver((...t)=>this.codeDebounce());let e=this.findSlot("code")?.assignedElements({flatten:!0})||[];for(let t of e)this.codeMutationObserver.observe(t,this.__mutationObserverConfig)}handleMutation(e){if(e==="preview-html"){this.handleTemplate({target:this.findSlot("preview-html")});return}if(e==="code"){this.handleTemplate({target:this.findSlot("code")});return}}findSlot(e){return this.shadowRoot?.querySelector(`slot[name='${e}']`)}handleTemplate(e){let t=e.target;if(t==null)return;let i=t.getAttribute("name");if(["preview-html","code"].includes(i||"")===!1)return;let o="type"in e&&e.type==="slotchange",r=t.assignedElements({flatten:!0}),s=v(w(...r).trim());if(i==="preview-html"){o&&this.resetIframeCodeMutationObserver(),this.previewHtml=s,this.requestUpdate("previewHtml");return}if(i==="code"){o&&this.resetCodeMutationObserver(),this.code=s,this.requestUpdate("code");return}}updateIframeContent(){let e=this.previewHtml||this.code,t=this.shadowRoot?.querySelector("iframe");if(!t)return;let i=`
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          ${e}
        </body>
      </html>`;t.srcdoc=i}escapeCharacters(e){return e}transformTags(e){let t=/&lt;\/([\w\d\.-_]+)>/g;return this.unescapeBehavior==="last"?C(e,t):this.unescapeBehavior==="all"?e.replaceAll(t,"</$1>"):e}willUpdate(e){["previewHtml","code"].some(t=>e.has(t))&&(this._iframeDebounce!=null&&window.clearTimeout(this._iframeDebounce),this._iframeDebounce=setTimeout(()=>this.updateIframeContent(),300)),e.has("resizePosition")&&this.updateResizePosition(),super.willUpdate(e)}updateCachedWidth(){let{left:e,right:t}=this.getBoundingClientRect(),i=e+t;this.cachedWidth=i}handleResize(e){let{left:t,right:i}=e[0].contentRect,o=t+i;this.cachedWidth=o}connectedCallback(){super.connectedCallback(),this.updateCachedWidth(),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.resetIframeCodeMutationObserver(),this.resetCodeMutationObserver()})}highlight(e=this.code){return e}addShadowRootToPreview(e){let t=e.querySelector("[part~='preview-div']");if(!t)return;let i=this.transformTags(this.code||this.previewHtml);if(t.shadowRoot||t.attachShadow({mode:"open"}),!t.shadowRoot)return;t.shadowRoot.innerHTML=i;function o(r,s){Array.from(s.attributes).forEach(l=>{r.setAttribute(l.nodeName,l.nodeValue||"")})}t.shadowRoot?.querySelectorAll("script").forEach(r=>{if(r.type==="module"||r.type.trim()===""||r.type.includes("javascript")){let s=document.createElement("script");if(s.innerHTML=r.innerHTML,o(s,r),this.scriptScope!=="shadow-dom"){r.replaceWith(s);return}r.remove();let l=t,T=t.shadowRoot;(p=>Function("document",p).bind(l,T,p)())(s.innerHTML)}})}render(){let e=h`
      <div part=${z({base:!0})}>
        <div part="preview">
          ${y(this.previewMode==="shadow-dom",()=>h`<div part="start-panel preview-div"></div>`,()=>h`
                <iframe part="start-panel iframe" height="auto" frameborder="0" sandbox=${M(this.sandboxSettings?this.sandboxSettings:null)}></iframe>
              `)}
          <button
            id="panel-resizer"
            part="panel-resizer"
            role="separator"
            aria-valuenow=${this.resizePosition}
            aria-valuemin="0"
            aria-valuemax="100"
            @keydown=${this.handleResizerKeydown}
            @pointerdown=${this.handleDrag}
            @touchstart=${this.handleDrag}
            class=${`light-button ${this.resizing?"is-active":""}`}
          >
            <slot name="resize-icon">
              ${R}
            </slot>
          </button>

          <div part="end-panel"></div>
        </div>

        <light-disclosure
          id="details"
          ?open=${this.open}
          @light-toggle=${t=>this.open=t.currentTarget.open}
          part="source-details"
          aria-labelledby="summary"
          exportparts="
            summary:source-details__summary
          "
        >
          <div part="code-wrapper">
            <light-code
              .language=${this.language}
              .code=${this.transformTags(this.code)}
              wrap=${this.wrap}
              ?disableHighlight=${this.disableHighlight}
              ?disableLineNumbers=${this.disableLineNumbers}
              .highlightLines=${this.highlightLines}
              .insertedLines=${this.insertedLines}
              .deletedLines=${this.deletedLines}
              .lineNumberStart=${this.lineNumberStart}
            ></light-code>
          </div>
        </light-disclosure>

        <div part="actions">
          <button class="light-button" part="source-code-toggle" aria-expanded=${this.open} aria-controls="details" @click=${()=>this.open=!this.open} type="button">
            <slot name="summary">${this.summary||L}</slot>
            <slot name="source-code-toggle-icon">
              <svg part="source-code-toggle-icon" viewBox="0 0 24 24" height="24" width="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </slot>
          </button>

          <slot name="actions"></slot>
        </div>
      </div>

      <div hidden>
        <slot name="preview-html" @slotchange=${this.handleTemplate}></slot>
        <slot name="code" @slotchange=${this.handleTemplate}></slot>
      </div>
    `;return this.shadowRoot&&this.addShadowRootToPreview(this.shadowRoot),e}get panelResizer(){return this.shadowRoot?.querySelector("[part~='panel-resizer']")}handleDrag(e){e.cancelable&&e.preventDefault();let t=this.shadowRoot?.querySelector("iframe");t&&(t.style.pointerEvents="none"),this.resizing=!0;let o=(e.currentTarget?.offsetWidth||0)/2;S(this,{onMove:(r,s)=>{let l=r+o;this.resizePosition=u(0,this.pixelsToPercentage(l),100),this.updateResizePosition(),this.resizing=!0},onStop:()=>{let r=this.shadowRoot?.querySelector("iframe");r&&(r.style.pointerEvents="auto"),this.resizing=!1},initialEvent:e})}updateResizePosition(e=this.resizePosition){let t=e;if(t!=null){let i=100-t;this.style.setProperty("--start-panel-width",`clamp(100px, ${t}%, 100%)`),this.style.setProperty("--end-panel-width",`${i}%`)}}handleResizerKeydown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.resizePosition,i=(e.shiftKey?10:1)*1;e.preventDefault(),e.key==="ArrowLeft"&&(t-=i),e.key==="ArrowRight"&&(t+=i),e.key==="Home"&&(t=100),e.key==="End"&&(t=0),this.resizePosition=u(0,t,100)}}pixelsToPercentage(e){return e/this.cachedWidth*100}};d(a,"baseName","light-preview"),d(a,"dependencies",{"light-disclosure":$,"light-code":x}),d(a,"styles",[f,b,H]),d(a,"properties",{summary:{},sandboxSettings:{reflect:!0,attribute:"sandbox-settings"},previewMode:{reflect:!0,attribute:"preview-mode"},disableHighlight:{type:Boolean,attribute:"disable-highlight"},open:{reflect:!0,type:Boolean},resizePosition:{reflect:!0,type:Number,attribute:"resize-position"},resizing:{reflect:!0,type:Boolean},language:{reflect:!0},unescapeBehavior:{attribute:"unescapeBehavior",reflect:!0},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},highlightLines:{attribute:"highlight-lines"},insertedLines:{attribute:"inserted-lines"},deletedLines:{attribute:"deleted-lines"},lineNumberStart:{type:Number,attribute:"line-number-start"},scriptScope:{attribute:"script-scope"},code:{},previewHtml:{attribute:"preview-html"}});function O(n,e,t,i){return n.substring(0,e)+i+n.substring(t)}function C(n,e){let t=[...n.matchAll(e)],i=t[t.length-1];if(!i||i.index==null)return n;let{index:o}=i,r=o,s=o+i[0].length,l="</"+i[1]+">";return O(n,r,s,l)}a.define();var Z=a;export{Z as default};
//# sourceMappingURL=/konnors-ninja-keys/pull/13/bridgetown/static/chunks/light-preview-register-ULAJS4LJ.js.map
