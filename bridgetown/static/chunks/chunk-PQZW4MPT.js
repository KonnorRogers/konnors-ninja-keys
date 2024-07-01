import{b as C}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-MX4ZHUTI.js";import{a as x,b as w,d as V,e as u,f as L,g as S,j as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-YR3JGFUG.js";import{a as b,d as v,i as y}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-YB7THYSR.js";import{d as a}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var E=b`
  [part~="base"] {
    font-family: Menlo, Monaco, "Courier New", monospace;
    font-size: 1rem;
    height: 15em;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    position: relative;
    overflow: hidden;
    resize: both;
    font-size: normal;
    font-family: monospace;
    line-height: 1.5; /* Inherited to child elements */
    tab-size: 2;
    caret-color: black;
    counter-reset: linenumber 0;
    border: 1px solid gray;
  }

  /* Include "pre" if line numbers are disabled */
  :host([disable-line-numbers]) [part~="textarea"],
  [part~="textarea"],
  light-code::part(line) {
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }

  [part~="textarea"] {
    color: transparent;
    /* color: rgba(255,0,0,0.2); */
    background-color: transparent;
    caret-color: inherit;
    z-index: 1;
    resize: none;
    padding: 0;

    /* Dynamically generated based on the size of the  gutter from "<light-code>" */
    padding-inline-start: calc(var(--gutter-width, 40px) + 8px);
  }

  light-code {
    pointer-events: none;
  }

  light-code::part(pre) {
    border-color: transparent;
    position: relative;
  }

  light-code::part(line)::before {
    content: "";
    line-height: inherit;
    padding-inline-end: 0px;
  }

  [part~="base"]:focus-within {
    border-color: dodgerblue;
    outline: 2px solid dodgerblue;
  }

  [part~="textarea"]:focus {
    outline: transparent;
  }

  light-code::part(line) {
    padding-inline-start: 8px;
  }

  light-code::part(pre),
  [part~="textarea"],
  light-code::part(code) {
    /* I don't love this, but it fixes font size inconsistencies on mobile. The alternative is listen for font-size changes, which is...challenging. */
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    text-size-adjust: 100%;

    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
    tab-size: inherit;

    /* this creates line-wrapping. */
    word-break: break-word;
    white-space: pre-wrap;
  }

  :host([wrap="none"])
    :is(light-code::part(pre), [part~="textarea"], light-code::part(code)) {
    /* This would remove line-wrapping */
    word-break: break-all;
    white-space: pre;
  }

  [part~="base"]:focus-within light-code::part(line-highlight) {
    background-color: rgba(255, 255, 209, 1);
  }

  [part~="base-editor"] {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr);
    max-height: 100%;
    min-height: 100%;
  }

  light-code,
  [part~="textarea"] {
    grid-area: 1/1/2/2;
    width: 100%;
    height: 100%;
    margin: 0;
    border: none;
    overflow: auto;
    border: none;
  }

  [part~="textarea"]::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  [part~="textarea"]::selection {
    color: inherit;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;var d=class extends Event{constructor(e,t={}){t.bubbles==null&&(t.bubbles=!0),t.composed==null&&(t.composed=!0),super(e,t)}};var c=class extends d{constructor(e="light-resize",t={}){super(e,t),this.height=t.height,this.width=t.width}};var k=()=>{let s={observedAttributes:["maxlength"],message(e,t,i){return`Please use less than or equal to ${t} characters. You are currently using ${i} characters.`},checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},i=e.value??"";if(typeof i!="string")return t;let r=Number(e.maxLength||e.getAttribute("maxlength"));return r&&r>i.length&&(t.message=(typeof s.message=="function"?s.message(e,r,i.length):s.message)||"",t.isValid=!1,t.invalidKeys.push("tooLong")),t}};return s};var A=()=>{let s={observedAttributes:["minlength"],message(e,t,i){return`Please use greater than or equal to ${t} characters. You are currently using ${i} characters.`},checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]},i=e.value??"";if(typeof i!="string")return t;let r=Number(e.minLength||e.getAttribute("minlength"));return r&&r>i.length&&(t.message=(typeof s.message=="function"?s.message(e,r,i.length):s.message)||"",t.isValid=!1,t.invalidKeys.push("tooShort")),t}};return s};var T=()=>{let s={observedAttributes:["required"],message:"Please fill out this field.",checkValidity(e){let t={message:"",isValid:!0,invalidKeys:[]};return(e.required??e.hasAttribute("required"))&&(e.value||(t.message=(typeof s.message=="function"?s.message(e):s.message)||"",t.isValid=!1,t.invalidKeys.push("valueMissing"))),t}};return s};function H(s){return class extends s{addCustomState(e){try{this.internals.states.add(e)}catch{}finally{this.setAttribute(`data-${e}`,"")}}deleteCustomState(e){try{this.internals.states.delete(e)}catch{}finally{this.removeAttribute(`data-${e}`)}}toggleCustomState(e,t){if(t===!0){this.addCustomState(e);return}if(t===!1){this.deleteCustomState(e);return}this.toggleCustomState(e,!this.hasCustomState(e))}hasCustomState(e){try{return this.internals.states.has(e)}catch{}finally{return this.hasAttribute(`data-${e}`)}}}}function I(s){var e;return e=class extends s{constructor(...t){super(...t),this.internals=this.attachInternals()}},a(e,"formAssociated",!0),e}function N(s){return class extends H(I(s)){constructor(...t){super(...t);a(this,"handleInvalid",t=>{t.target===this&&(this.disabled===!0||this.hasAttribute("disabled")||(this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.hasInteracted=!0,this.updateInteractionState()))});a(this,"handleInteraction",t=>{this.disabled===!0||this.hasAttribute("disabled")||(!this.matches(":focus-within")&&this.valueHasChanged&&(this.hasInteracted=!0),this.updateValidity())});this.role=null,this.value=null,this.previousValue=this.value,this.defaultValue="",this.name="",this.type=this.localName||"",this.disabled=!1,this.required=!1,this.hasInteracted=this.hasInteracted??!1,this.valueHasChanged=this.valueHasChanged??!1,this.validators=[],this.addEventListener("focusout",this.handleInteraction),this.addEventListener("blur",this.handleInteraction),this.addEventListener("invalid",this.handleInvalid),this.__hasCustomError=!1,this.__customErrorMessage=""}static get observedAttributes(){let t=new Set(super.observedAttributes||[]);for(let i of this.validators)if(i.observedAttributes)for(let r of i.observedAttributes)t.add(r);return[...t]}static get validators(){return[T()]}get allValidators(){let t=this.constructor.validators||[],i=this.validators||[];return[...t,...i]}get willShowValidationMessage(){return this.disabled!==!0&&this.hasInteracted===!0}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get validationMessage(){return this.internals.validationMessage}get willValidate(){return this.internals.willValidate}setCustomValidity(t){if(!t){this.__hasCustomError=!1,this.__customErrorMessage="",this.setValidity({});return}this.__hasCustomError=!0,this.__customErrorMessage=t,this.internals.setValidity({customError:!0},t)}attributeChangedCallback(t,i,r){typeof super.attributeChangedCallback=="function"&&super.attributeChangedCallback(t,i,r),r!==i&&(t==="role"&&(this.internals.role=r||null),t==="value"&&(this.defaultValue=this.getAttribute("value")||"",!this.hasInteracted&&!this.valueHasChanged&&(this.value=this.defaultValue,this.setFormValue(this.value,this.value))),this.updateValidity())}formResetCallback(){"formControl"in this&&this.formControl&&(this.formControl.value=this.defaultValue),this.resetValidity(),this.value=this.defaultValue,this.hasInteracted=!1,this.valueHasChanged=!1,this.updateValidity(),this.setFormValue(this.defaultValue,this.defaultValue)}formDisabledCallback(t){this.disabled=t,this.resetValidity(),this.updateValidity()}formStateRestoreCallback(t,i){this.value=t,this.formControl&&(this.formControl.value=t),this.resetValidity(),this.updateValidity()}setValidity(...t){let i=t[0],r=t[1],o=t[2];o||(o=this.validationTarget),this.internals.setValidity(i,r,o),this.updateInteractionState()}reportValidity(){return this.updateValidity(),this.internals.reportValidity()}checkValidity(){return this.updateValidity(),this.internals.checkValidity()}get validationTarget(){return this.formControl||void 0}setFormValue(...t){this.value!==this.defaultValue&&(this.valueHasChanged=!0),this.internals.setFormValue(...t),this.updateValidity()}get form(){return this.internals.form}resetValidity(){this.setCustomValidity(""),this.setValidity({})}updateValidity(){if(this.disabled||this.getAttribute("disabled")){this.resetValidity();return}let t=this.allValidators;if(!t){this.setValidity({});return}let r={customError:!!this.__hasCustomError},o=this.formControl||void 0,n="";for(let f of t){let{isValid:p,message:M,invalidKeys:m}=f.checkValidity(this);p||(n||(n=M),m?.length>=0&&m.forEach(_=>r[_]=!0))}n||(n=this.validationMessage||this.__customErrorMessage),this.setValidity(r,n,o)}updateInteractionState(){if(this.disabled||this.hasAttribute("disabled")){this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.deleteCustomState("valid"),this.deleteCustomState("user-valid");return}this.validity.valid?(this.deleteCustomState("invalid"),this.deleteCustomState("user-invalid"),this.addCustomState("valid"),this.toggleCustomState("user-valid",this.hasInteracted&&this.valueHasChanged)):(this.deleteCustomState("valid"),this.deleteCustomState("user-valid"),this.addCustomState("invalid"),this.toggleCustomState("user-invalid",this.hasInteracted&&this.valueHasChanged))}}}var z=Object.freeze({role:{reflect:!0},name:{reflect:!0},type:{reflect:!0},disabled:{type:Boolean},required:{reflect:!0,type:Boolean},defaultValue:{attribute:"value",reflect:!0},valueHasChanged:{type:Boolean,attribute:!1,state:!0},hasInteracted:{attribute:!1,type:Boolean,state:!0},formControl:{attribute:!1,state:!0},value:{attribute:!1,state:!0}});g.formProperties=z;function g(s){return class extends N(s){constructor(...t){super(...t),this.constructor.properties?.disabled?.reflect===!0&&(console.warn('The following element has their "disabled" property set to reflect.'),console.warn(this),console.warn("For further reading: https://github.com/whatwg/html/issues/8365"))}willUpdate(t){typeof super.willUpdate=="function"&&(t.has("formControl")&&(this.formControl?.addEventListener("focusout",this.handleInteraction),this.formControl?.addEventListener("blur",this.handleInteraction),this.formControl?.addEventListener("click",this.handleInteraction)),(t.has("formControl")||t.has("defaultValue")||t.has("value"))&&this.setFormValue(this.value,this.value),super.willUpdate(t))}}}h.formProperties=Object.freeze(Object.assign({autocomplete:{},wrap:{},readOnly:{attribute:"readonly",type:Boolean,reflect:!0},placeholder:{},dirName:{},rows:{type:Number},cols:{type:Number},maxLength:{attribute:"maxlength",type:Number},minLength:{attribute:"minlength",type:Number}},g.formProperties));function h(s){let e=s;return class extends g(e){static get validators(){return[...super.validators,k(),A()]}static get properties(){let t=super.properties;return t?{...h.formProperties,...t}:h.formProperties}constructor(...t){super(...t),this.autocomplete="",this.wrap="",this.value="",this.defaultValue="",this.maxLength=-1,this.minLength=-1,this.readOnly=!1,this.placeholder="",this.required=!1,this.dirName="",this.selectionDirection="forward",this.rows=2,this.cols=20}setSelectionRange(...t){let i=this.formControl;i&&"selectionRange"in i&&i.setSelectionRange(...t)}setRangeText(...t){let i=this.formControl;i&&"setRangeText"in i&&i.setRangeText(...t)}get textLength(){let t=this.formControl;return t&&"textLength"in t?t.textLength:0}get selectionStart(){let t=this.formControl;return t&&"selectionStart"in t?t.selectionStart:0}get selectionEnd(){let t=this.formControl;return t&&"selectionEnd"in t?t.selectionEnd:0}select(){let t=this.formControl;t&&t.select?.()}}}var R=/\r\n?|\n/g,l=class extends h(x){constructor(){super(),this.language="html",this.value="",this.defaultValue="",this.textarea=null,this.src=null,this.wrap="soft",this.preserveWhitespace=!1,this.disableLineNumbers=!1,this.highlighter=S(),this.currentLineNumber=1}connectedCallback(){super.connectedCallback(),this.value=this.getAttribute("value")||"",this.defaultValue=this.getAttribute("value")||"",this.value===this.getAttribute("value")&&this.preserveWhitespace!==!0&&(this.value=u(this.value.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim())}willUpdate(e){e.has("value")&&(this.dispatchEvent(new Event("light-value-change",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))),e.has("src")&&this.src&&fetch(this.src).then(async t=>{let i=await t.text();return this.preserveWhitespace!==!0&&(i=u(i.replace(/(^\s*(?!.+)\n+)|(\n+\s+(?!.+)$)/g,"")).trim()),i}),super.willUpdate(e)}click(){this.textarea?this.textarea.click():this.click()}focus(e){this.textarea?this.textarea.focus(e):this.focus(e)}__setGutterWidth(){let e=this.shadowRoot?.querySelector("light-code")?.shadowRoot?.querySelector("[part~='gutter']")?.offsetWidth;if(e){this.style.setProperty("--gutter-width",`${e}px`);return}this.style.removeProperty("--gutter-width")}render(){let e=this.language;return this.syncScroll(),setTimeout(async()=>{await this.updateComplete,this.__setGutterWidth()}),v`
      <div part="base">
        <!-- This is where the fancy syntax highlighting comes in -->
        <div part="base-editor">
          <light-code
            tabindex="-1"
            .language=${this.language}
            .code=${this.value}
            .wrap=${this.wrap}
            .highlighter=${this.highlighter}
            .disableLineNumbers=${this.disableLineNumbers}
            .preserveWhitespace=${this.preserveWhitespace}
            .highlightLines=${`{${this.hasFocused?this.currentLineNumber:""}}`}
            @focus=${()=>{this.textarea?.focus()}}
            @touchstart=${t=>{this.textarea?.focus()}}
            @click=${t=>{this.textarea?.focus()}}
          ></light-code>


          <!-- IMPORTANT! There must be no white-space above. -->
          <textarea
            id="textarea-${e}"
            ${C(this.textareaChanged)}
            data-code-lang=${e}
            part="textarea textarea-${e}"
            spellcheck="false"
            autocorrect="off"
            autocapitalize="off"
            minlength=${this.minLength}
            maxlength=${this.maxLength}
            translate="no"
            .defaultValue=${this.defaultValue}
            .value=${this.value}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${this.placeholder}
            @keyup=${this.keyupHandler}
            @keydown=${this.keydownHandler}
            @focus=${()=>{this.hasFocused=!0,this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-focus",{bubbles:!0,composed:!0}))}}
            @blur=${()=>{this.setAttribute("data-has-interacted",""),this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-blur",{bubbles:!0,composed:!0}))}}
            @selectionchange=${t=>{this.syncScroll(),this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-selectionchange",{bubbles:!0,composed:!0}))}}
            @click=${()=>{this.setCurrentLineHighlight()}}
            @touchstart=${()=>{this.setCurrentLineHighlight()}}
            @touchend=${()=>{this.setCurrentLineHighlight()}}
            @pointerdown=${()=>{this.setCurrentLineHighlight()}}
            @pointerup=${()=>{this.setCurrentLineHighlight()}}
            @input=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.syncScroll()}}
            @change=${t=>{this.value=t.currentTarget.value,this.setCurrentLineHighlight(),this.syncScroll()}}
            @scroll=${t=>{this.setCurrentLineHighlight(),this.syncScroll()}}
          ></textarea>
        </div>
        <!-- base-editor -->
      </div>
      <!-- base -->

      <!-- Hidden slot for holding content -->
      <slot hidden @slotchange=${this.handleSlotChangeEvent}></slot>
    `}handleTextAreaResize(e){let{target:t}=e[0],{left:i,right:r,top:o,bottom:n}=e[0].contentRect,f=i+r,p=o+n;this.dispatchEvent(new c("light-resize",{height:p,width:f})),this.syncScroll()}updated(e){super.updated(e),this.syncScroll(),setTimeout(()=>this.setCurrentLineHighlight())}syncScroll(){let e=this.textarea;if(e==null)return;let t=this.shadowRoot?.querySelector("light-code");t&&(t.scrollTop=e.scrollTop,t.scrollLeft=e.scrollLeft)}textareaChanged(e){if(!(e instanceof HTMLTextAreaElement))return;let t=e;this.textarea=t,this.formControl=t,this.textareaResizeObserver=new ResizeObserver(i=>this.handleTextAreaResize(i)),this.textareaResizeObserver.observe(t)}handleSlotChangeEvent(e){let i=e.target.assignedElements({flatten:!0}),r=this.unescapeTags(L(...i));this.preserveWhitespace||(r=u(r.trim())),r&&(this.value=r,this.defaultValue=r,setTimeout(()=>this.textarea?.setSelectionRange(0,0)),this.dispatchEvent(new Event("light-input",{bubbles:!0,composed:!0})),this.dispatchEvent(new Event("light-change",{bubbles:!0,composed:!0})))}keyupHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}keydownHandler(e){this.setCurrentLineHighlight(),setTimeout(()=>this.setCurrentLineHighlight())}setCurrentLineHighlight(){let e=this.getCurrentLineNumber();e!=null&&(this.currentLineNumber=e+1)}getCurrentLineNumber(){let e=this.textarea;return e?e.value.substr(0,e.selectionStart).split(R).length-1:void 0}unescapeTags(e){return e.replaceAll(/&lt;\/([\w\d\.-_]+)>/g,"</$1>")}injectNewLine(e){return(e===""||e[e.length-1]===`
`)&&(e+=" "),e}};a(l,"baseName","light-editor"),a(l,"dependencies",{"light-code":$}),a(l,"shadowRootOptions",{...y.shadowRootOptions,delegatesFocus:!0}),a(l,"styles",[w,E,V]),a(l,"properties",{...h.formProperties,wrap:{reflect:!0,state:!1},language:{reflect:!0},src:{},disableLineNumbers:{type:Boolean,reflect:!0,attribute:"disable-line-numbers"},preserveWhitespace:{type:Boolean,reflect:!0,attribute:"preserve-whitespace"},hasFocused:{type:Boolean,reflect:!0,attribute:"data-has-focused"},currentLineNumber:{attribute:!1,state:!0,type:Number},highlighter:{attribute:!1,state:!0}});export{l as a};
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-PQZW4MPT.js.map
