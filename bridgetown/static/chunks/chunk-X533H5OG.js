import{a as L,b as z,c as D}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-XTJNYE35.js";import{a as ie,b as se,c as ae}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-EF2BL6MH.js";import{a as le}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-2NYBYV2O.js";import{a as oe,b as y,c as N,d as O}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-QMUAW2TL.js";import{d as S}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var U=z(class extends D{constructor(o){if(super(o),o.type!==L.ATTRIBUTE||o.name!=="class"||o.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(o){return" "+Object.keys(o).filter(e=>o[e]).join(" ")+" "}update(o,[e]){if(this.st===void 0){this.st=new Set,o.strings!==void 0&&(this.nt=new Set(o.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(let r in e)e[r]&&!this.nt?.has(r)&&this.st.add(r);return this.render(e)}let t=o.element.classList;for(let r of this.st)r in e||(t.remove(r),this.st.delete(r));for(let r in e){let n=!!e[r];n===this.st.has(r)||this.nt?.has(r)||(n?(t.add(r),this.st.add(r)):(t.remove(r),this.st.delete(r)))}return N}});var k=class extends D{constructor(e){if(super(e),this.it=O,e.type!==L.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===O||e==null)return this._t=void 0,this.it=e;if(e===N)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};k.directiveName="unsafeHTML",k.resultType=1;var B=z(k);function*ce(o,e){let t=typeof e=="function";if(o!==void 0){let r=-1;for(let n of o)r>-1&&(yield t?e(r):e),r++,yield n}}function ue(o,e,t,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,r);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i}var K,V=window,x=V.trustedTypes,he=x?x.createPolicy("lit-html",{createHTML:o=>o}):void 0,G="$lit$",m=`lit$${(Math.random()+"").slice(9)}$`,_e="?"+m,Re=`<${_e}>`,$=document,T=()=>$.createComment(""),P=o=>o===null||typeof o!="object"&&typeof o!="function",ge=Array.isArray,Ie=o=>ge(o)||typeof o?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fe=/-->/g,pe=/>/g,g=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,ye=/"/g,be=/^(?:script|style|textarea|title)$/i,$e=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),we=$e(1),pt=$e(2),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),me=new WeakMap,b=$.createTreeWalker($,129,null,!1);function xe(o,e){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return he!==void 0?he.createHTML(e):e}var Ne=(o,e)=>{let t=o.length-1,r=[],n,i=e===2?"<svg>":"",s=C;for(let c=0;c<t;c++){let a=o[c],l,h,f=-1,u=0;for(;u<a.length&&(s.lastIndex=u,h=s.exec(a),h!==null);)u=s.lastIndex,s===C?h[1]==="!--"?s=fe:h[1]!==void 0?s=pe:h[2]!==void 0?(be.test(h[2])&&(n=RegExp("</"+h[2],"g")),s=g):h[3]!==void 0&&(s=g):s===g?h[0]===">"?(s=n??C,f=-1):h[1]===void 0?f=-2:(f=s.lastIndex-h[2].length,l=h[1],s=h[3]===void 0?g:h[3]==='"'?ye:de):s===ye||s===de?s=g:s===fe||s===pe?s=C:(s=g,n=void 0);let d=s===g&&o[c+1].startsWith("/>")?" ":"";i+=s===C?a+Re:f>=0?(r.push(l),a.slice(0,f)+G+a.slice(f)+m+d):a+m+(f===-2?(r.push(void 0),c):d)}return[xe(o,i+(o[t]||"<?>")+(e===2?"</svg>":"")),r]},M=class o{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,s=0,c=e.length-1,a=this.parts,[l,h]=Ne(e,t);if(this.el=o.createElement(l,r),b.currentNode=this.el.content,t===2){let f=this.el.content,u=f.firstChild;u.remove(),f.append(...u.childNodes)}for(;(n=b.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes()){let f=[];for(let u of n.getAttributeNames())if(u.endsWith(G)||u.startsWith(m)){let d=h[s++];if(f.push(u),d!==void 0){let He=n.getAttribute(d.toLowerCase()+G).split(m),I=/([.?@])?(.*)/.exec(d);a.push({type:1,index:i,name:I[2],strings:He,ctor:I[1]==="."?Q:I[1]==="?"?J:I[1]==="@"?X:j})}else a.push({type:6,index:i})}for(let u of f)n.removeAttribute(u)}if(be.test(n.tagName)){let f=n.textContent.split(m),u=f.length-1;if(u>0){n.textContent=x?x.emptyScript:"";for(let d=0;d<u;d++)n.append(f[d],T()),b.nextNode(),a.push({type:2,index:++i});n.append(f[u],T())}}}else if(n.nodeType===8)if(n.data===_e)a.push({type:2,index:i});else{let f=-1;for(;(f=n.data.indexOf(m,f+1))!==-1;)a.push({type:7,index:i}),f+=m.length-1}i++}}static createElement(e,t){let r=$.createElement("template");return r.innerHTML=e,r}};function A(o,e,t=o,r){var n,i,s,c;if(e===w)return e;let a=r!==void 0?(n=t._$Co)===null||n===void 0?void 0:n[r]:t._$Cl,l=P(e)?void 0:e._$litDirective$;return a?.constructor!==l&&((i=a?._$AO)===null||i===void 0||i.call(a,!1),l===void 0?a=void 0:(a=new l(o),a._$AT(o,t,r)),r!==void 0?((s=(c=t)._$Co)!==null&&s!==void 0?s:c._$Co=[])[r]=a:t._$Cl=a),a!==void 0&&(e=A(o,a._$AS(o,e.values),a,r)),e}var W=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:r},parts:n}=this._$AD,i=((t=e?.creationScope)!==null&&t!==void 0?t:$).importNode(r,!0);b.currentNode=i;let s=b.nextNode(),c=0,a=0,l=n[0];for(;l!==void 0;){if(c===l.index){let h;l.type===2?h=new H(s,s.nextSibling,this,e):l.type===1?h=new l.ctor(s,l.name,l.strings,this,e):l.type===6&&(h=new Z(s,this,e)),this._$AV.push(h),l=n[++a]}c!==l?.index&&(s=b.nextNode(),c++)}return b.currentNode=$,i}v(e){let t=0;for(let r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}},H=class o{constructor(e,t,r,n){var i;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cp=(i=n?.isConnected)===null||i===void 0||i}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),P(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==w&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ie(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&P(this._$AH)?this._$AA.nextSibling.data=e:this.$($.createTextNode(e)),this._$AH=e}g(e){var t;let{values:r,_$litType$:n}=e,i=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=M.createElement(xe(n.h,n.h[0]),this.options)),n);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===i)this._$AH.v(r);else{let s=new W(i,this),c=s.u(this.options);s.v(r),this.$(c),this._$AH=s}}_$AC(e){let t=me.get(e.strings);return t===void 0&&me.set(e.strings,t=new M(e)),t}T(e){ge(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new o(this.k(T()),this.k(T()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var r;for((r=this._$AP)===null||r===void 0||r.call(this,!1,!0,t);e&&e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},j=class{constructor(e,t,r,n,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,r,n){let i=this.strings,s=!1;if(i===void 0)e=A(this,e,t,0),s=!P(e)||e!==this._$AH&&e!==w,s&&(this._$AH=e);else{let c=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=A(this,c[r+a],t,a),l===w&&(l=this._$AH[a]),s||(s=!P(l)||l!==this._$AH[a]),l===p?e=p:e!==p&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!n&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Q=class extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}},Le=x?x.emptyScript:"",J=class extends j{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,Le):this.element.removeAttribute(this.name)}},X=class extends j{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){var r;if((e=(r=A(this,e,t,0))!==null&&r!==void 0?r:p)===w)return;let n=this._$AH,i=e===p&&n!==p||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==p&&(n===p||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,r;typeof this._$AH=="function"?this._$AH.call((r=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&r!==void 0?r:this.element,e):this._$AH.handleEvent(e)}},Z=class{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}};var ve=V.litHtmlPolyfillSupport;ve?.(M,H),((K=V.litHtmlVersions)!==null&&K!==void 0?K:V.litHtmlVersions=[]).push("2.8.0");var Ae=(o,e,t)=>{var r,n;let i=(r=t?.renderBefore)!==null&&r!==void 0?r:e,s=i._$litPart$;if(s===void 0){let c=(n=t?.renderBefore)!==null&&n!==void 0?n:null;i._$litPart$=s=new H(e.insertBefore(T(),c),c,void 0,t??{})}return s._$AI(o),s};var Y,ee;var v=class extends se{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let r=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=r.firstChild),r}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ae(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return w}};v.finalized=!0,v._$litElement$=!0,(Y=globalThis.litElementHydrateSupport)===null||Y===void 0||Y.call(globalThis,{LitElement:v});var je=globalThis.litElementPolyfillSupport;je?.({LitElement:v});((ee=globalThis.litElementVersions)!==null&&ee!==void 0?ee:globalThis.litElementVersions=[]).push("3.3.3");var Ee=o=>e=>typeof e=="function"?((t,r)=>(customElements.define(t,r),r))(o,e):((t,r)=>{let{kind:n,elements:i}=r;return{kind:n,elements:i,finisher(s){customElements.define(t,s)}}})(o,e);var te,Bt=((te=window.HTMLSlotElement)===null||te===void 0?void 0:te.prototype.assignedElements)!=null?(o,e)=>o.assignedElements(e):(o,e)=>o.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);var Se=ie`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;var re=class extends v{render(){return we`<span><slot></slot></span>`}};re.styles=[Se];re=ue([Ee("mwc-icon")],re);function Oe(o,e,t){return o?e(o):t?.(o)}var _=o=>o??O;var q=-1/0;var ze=-.005,De=-.005,Be=-.01,ke=1,Ve=.9,qe=.8,Ue=.7,Ke=.6;function Fe(o){return o.toLowerCase()===o}function Ge(o){return o.toUpperCase()===o}function We(o){for(var e=o.length,t=new Array(e),r="/",n=0;n<e;n++){var i=o[n];r==="/"?t[n]=Ve:r==="-"||r==="_"||r===" "?t[n]=qe:r==="."?t[n]=Ke:Fe(r)&&Ge(i)?t[n]=Ue:t[n]=0,r=i}return t}function Qe(o,e,t,r){for(var n=o.length,i=e.length,s=o.toLowerCase(),c=e.toLowerCase(),a=We(e,a),l=0;l<n;l++){t[l]=new Array(i),r[l]=new Array(i);for(var h=q,f=l===n-1?De:Be,u=0;u<i;u++)if(s[l]===c[u]){var d=q;l?u&&(d=Math.max(r[l-1][u-1]+a[u],t[l-1][u-1]+ke)):d=u*ze+a[u],t[l][u]=d,r[l][u]=h=Math.max(d,h+f)}else t[l][u]=q,r[l][u]=h=h+f}}function Ce(o,e){var t=o.length,r=e.length,n=new Array(t);if(!t||!r)return n;if(t===r){for(var i=0;i<t;i++)n[i]=i;return n}if(r>1024)return n;var s=new Array(t),c=new Array(t);Qe(o,e,s,c);for(var a=!1,i=t-1,l=r-1;i>=0;i--)for(;l>=0;l--)if(s[i][l]!==q&&(a||s[i][l]===c[i][l])){a=i&&l&&c[i][l]===s[i-1][l-1]+ke,n[i]=l--;break}return n}function ne(o,e){o=o.toLowerCase(),e=e.toLowerCase();for(var t=o.length,r=0,n=0;r<t;r+=1)if(n=e.indexOf(o[r],n)+1,n===0)return!1;return!0}function Te(o){return new RegExp(o.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d"),"gi")}function Pe(o,e,t){if(!o.trim())return e;let r=new RegExp("(?<!(&l?t?|&g?t?|&a?m?p?|&q?u?o?t?))"+Te(o).source+"+","g");return e.replaceAll(r,t)}function Me(o,e,t=r=>r){if(!e)return"";if(!o)return e;let r=o.split(/\s+/);if(!r.some(a=>ne(a,e)))return e;let i=e.split(""),s=[];[o,...r].forEach(a=>{ne(a,e)&&(s=s.concat(Ce(a,e)))}),s=[...new Set(s)].sort((a,l)=>a-l);let c=[];for(let a=0;a<i.length;a++){if(!s.includes(a)){c.push(i[a]);continue}let l=Xe(a,s);if(l==null)continue;let h="";h=t(i.slice(a,l+1).join("")),c.push(h),a=l}return c.join("")}function Xe(o,e){let t=e.findIndex(n=>n===o),r=null;if(t===-1)return null;for(let n=t;n<e.length;n++){r=e[n];for(let i=n+1;i<e.length;i++){let s=e[i];if(s==null||s!==r+1)return r;r=e[i]}}return r}var E=class extends ae{constructor(){super(),this.action={title:""},this.selected=!1,this.hotKeysJoinedView=!0,this.searchQuery="",this.searchType="regex",this.highlightMatches=!1,this.__regexMatchRender='<mark part="ninja-action__highlight">$&</mark>',this.__fuzzyMatchRender=e=>`<mark part="ninja-action__highlight">${e}</mark>`}connectedCallback(){super.connectedCallback(),this.setAttribute("aria-selected","false"),this.addEventListener("click",this.click)}ensureInView(){requestAnimationFrame(()=>this.scrollIntoView({block:"nearest"}))}click(){this.dispatchEvent(new CustomEvent("actionsSelected",{detail:this.action,bubbles:!0,composed:!0})),this.forceClick()}forceClick(){let e=this.shadowRoot?.querySelector("a");e&&e.click()}updated(e){return e.has("selected")&&(this.setAttribute("aria-selected","true"),this.selected&&(this.ensureInView(),this.setAttribute("aria-selected","true"))),super.updated(e)}render(){let e={selected:this.selected,"ninja-action":!0};return this.action.href?this.renderAsLink(e):y`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${U(e)}
      >
        ${this.renderBody()}
      </div>
    `}renderAsLink(e){let t=this.action.attributes||{},{download:r,hreflang:n,ping:i,referrerpolicy:s,rel:c,target:a,type:l}=t;return y`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected?"ninja-selected":""}"
        class=${U(e)}
        href=${this.action.href}
        download=${_(r)}
        hreflang=${_(n)}
        ping=${_(i)}
        referrerpolicy=${_(s)}
        rel=${_(c)}
        target=${_(a)}
        type=${_(l)}
      >
        ${this.renderBody()}
      </a>
    `}escapeString(e){let t=this.constructor;return e.replaceAll(/&/g,t.escapeMap["&"]).replaceAll(/[<>'"]/g,r=>t.escapeMap[r]||r)}encodeString(e){let t=this.constructor;return e.replaceAll(/&/g,`<span>${t.escapeMap["&"]}</span>`).replaceAll(/[<>'"]/g,r=>`<span>${t.escapeMap[r]||r}</span>`)}renderMatch(e,t){let r=this.escapeString(t),n=this.escapeString(e);return this.searchType==="regex"?Pe(n,r,this.__regexMatchRender):this.searchType==="fuzzy"?Me(n,r,this.__fuzzyMatchRender):""}renderBody(){let e;this.action.mdIcon?e=y`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`:this.action.icon&&(e=B(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `));let{id:t,title:r,content:n}=this.action;return r=r||t||"",r&&this.highlightMatches&&(r=this.renderMatch(this.searchQuery,r)),t&&this.highlightMatches&&(t=this.renderMatch(this.searchQuery,t)),n&&this.highlightMatches&&(n=this.renderMatch(this.searchQuery,n)),y`
      <div part="ninja-action__header" class="ninja-action__header">
        ${e}
        <div part="ninja-action__title" class="ninja-title">
          ${B(r)}
        </div>
        ${this.renderHotkey()}
      </div>

      ${Oe(n,()=>y`<small part="ninja-action__content" class="ninja-action__content"
            >${B(n)}</small
          >`)}
    `}renderHotkey(){let e;return this.action.hotkey&&(this.hotKeysJoinedView?e=this.action.hotkey.split(",").map(t=>{let r=t.split("+"),n=y`${ce(r.map(i=>y`<kbd part="ninja-hotkey">${i}</kbd>`),"+")}`;return y`<div
            part="ninja-hotkeys"
            class="ninja-hotkey ninja-hotkeys"
          >
            ${n}
          </div>`}):e=this.action.hotkey.split(",").map(t=>{let n=t.split("+").map(i=>y`<kbd part="ninja-hotkey" class="ninja-hotkey">${i}</kbd>`);return y`<kbd part="ninja-hotkeys" class="ninja-hotkeys"
            >${n}</kbd
          >`})),e}};S(E,"baseName","ninja-action"),S(E,"styles",[le,oe`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
      }

      mark {
        background-color: var(--ninja-accent-color);
        padding: 1px 3px;
      }

      .ninja-action {
        padding: 0.75em 8px;
        display: flex;
        flex-direction: column;
        border-inline-end: 2px solid transparent;
        border-inline-start: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: transparent;
        transition: color 0s ease 0s;
        width: 100%;
        row-gap: 8px;
        text-decoration: none;
        color: currentColor;
      }

      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-inline-end: 2px solid var(--ninja-accent-color);
        border-inline-start: 2px solid var(--ninja-accent-color);
        outline: transparent;
      }

      .ninja-action__header {
        display: flex;
        justify-content: start;
        width: 100%;
        align-items: center;
      }

      .ninja-action__content {
        border-top: 1px solid gray;
        padding-top: 0.5em;
        font-size: 0.8em;
        width: 100%;
        max-width: 100%;
        overflow: hidden;
        /** This has surprisingly good browser support. */
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
      }

      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }

      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        color: var(--ninja-icon-color);
        position: relative;
        margin-inline-end: 0.5em;
      }

      .ninja-title {
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
      }
      .ninja-hotkeys {
        flex-shrink: 0;
        width: min-content;
        display: flex;
      }

      .ninja-hotkeys kbd {
        font-family: inherit;
      }
      .ninja-hotkey {
        background: var(--ninja-secondary-background-color);
        padding: 0.06em 0.25em;
        border-radius: var(--ninja-key-border-radius);
        text-transform: capitalize;
        color: var(--ninja-secondary-text-color);
        font-size: 0.75em;
        font-family: inherit;
      }

      .ninja-hotkey + .ninja-hotkey {
        margin-inline-end: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-inline-end: 1em;
      }
    `]),S(E,"escapeMap",{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}),S(E,"properties",{action:{type:Object},selected:{type:Boolean},hotKeysJoinedView:{type:Boolean},content:{},searchType:{attribute:"search-type"},highlightMatches:{type:Boolean,attribute:"highlight-matches"},searchQuery:{state:!0,attribute:!1}});export{U as a,ne as b,Te as c,E as d};
/*! Bundled license information:

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/unsafe-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/join.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@material/mwc-icon/mwc-icon-host.css.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-LIcense-Identifier: Apache-2.0
   *)

@material/mwc-icon/mwc-icon.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: Apache-2.0
   *)

lit-html/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-X533H5OG.js.map
