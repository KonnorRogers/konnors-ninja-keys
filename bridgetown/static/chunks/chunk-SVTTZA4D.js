import{a as I,b as re,c as ne,d as ae}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-DLLIR4FK.js";import{a as oe}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-ELMMJU7Y.js";import{a as X,b as O,c as H,d as j,e as W,f as P,g as Z,h as ee,i as se}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-UQF2EDB7.js";import{a as x,b as A,c as $}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-VUR7V3FZ.js";import{a as Q}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-SE7PYJDV.js";import{a as te,b as ie}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-UYJG54BB.js";import{c as E,d as M,e as G}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-Q477UYHU.js";import{d as R}from"/konnors-ninja-keys/bridgetown/static/chunks/chunk-HGOD5HCG.js";var le=(t,e,i)=>{let s=new Map;for(let r=e;r<=i;r++)s.set(t[r],r);return s},ce=A(class extends ${constructor(t){if(super(t),t.type!==x.CHILD)throw Error("repeat() can only be used in text expressions")}ct(t,e,i){let s;i===void 0?i=e:e!==void 0&&(s=e);let r=[],a=[],n=0;for(let o of t)r[n]=s?s(o,n):n,a[n]=i(o,n),n++;return{values:a,keys:r}}render(t,e,i){return this.ct(t,e,i).values}update(t,[e,i,s]){var r;let a=W(t),{values:n,keys:o}=this.ct(e,i,s);if(!Array.isArray(a))return this.ut=o,n;let l=(r=this.ut)!==null&&r!==void 0?r:this.ut=[],c=[],m,_,h=0,u=a.length-1,d=0,p=n.length-1;for(;h<=u&&d<=p;)if(a[h]===null)h++;else if(a[u]===null)u--;else if(l[h]===o[d])c[d]=H(a[h],n[d]),h++,d++;else if(l[u]===o[p])c[p]=H(a[u],n[p]),u--,p--;else if(l[h]===o[p])c[p]=H(a[h],n[p]),O(t,c[p+1],a[h]),h++,p--;else if(l[u]===o[d])c[d]=H(a[u],n[d]),O(t,a[h],a[u]),u--,d++;else if(m===void 0&&(m=le(o,d,p),_=le(l,h,u)),m.has(l[h]))if(m.has(l[u])){let w=_.get(o[d]),D=w!==void 0?a[w]:null;if(D===null){let Y=O(t,a[h]);H(Y,n[d]),c[d]=Y}else c[d]=H(D,n[d]),O(t,a[h],D),a[w]=null;d++}else P(a[u]),u--;else P(a[h]),h++;for(;d<=p;){let w=O(t,c[p+1]);H(w,n[d]),c[d++]=w}for(;h<=u;){let w=a[h++];w!==null&&P(w)}return this.ut=o,j(t,c),M}});var U=A(class extends ${constructor(t){if(super(t),t.type!==x.PROPERTY&&t.type!==x.ATTRIBUTE&&t.type!==x.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!X(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===M||e===G)return e;let i=t.element,s=t.name;if(t.type===x.PROPERTY){if(e===i[s])return M}else if(t.type===x.BOOLEAN_ATTRIBUTE){if(!!e===i.hasAttribute(s))return M}else if(t.type===x.ATTRIBUTE&&i.getAttribute(s)===e+"")return M;return j(t),e}});var V=typeof navigator<"u"?navigator.userAgent.toLowerCase().indexOf("firefox")>0:!1;function F(t,e,i,s){t.addEventListener?t.addEventListener(e,i,s):t.attachEvent&&t.attachEvent("on".concat(e),function(){i(window.event)})}function pe(t,e){for(var i=e.slice(0,e.length-1),s=0;s<i.length;s++)i[s]=t[i[s].toLowerCase()];return i}function ye(t){typeof t!="string"&&(t=""),t=t.replace(/\s/g,"");for(var e=t.split(","),i=e.lastIndexOf("");i>=0;)e[i-1]+=",",e.splice(i,1),i=e.lastIndexOf("");return e}function ve(t,e){for(var i=t.length>=e.length?t:e,s=t.length>=e.length?e:t,r=!0,a=0;a<i.length;a++)s.indexOf(i[a])===-1&&(r=!1);return r}var B={backspace:8,"\u232B":8,tab:9,clear:12,enter:13,"\u21A9":13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,num_0:96,num_1:97,num_2:98,num_3:99,num_4:100,num_5:101,num_6:102,num_7:103,num_8:104,num_9:105,num_multiply:106,num_add:107,num_enter:108,num_subtract:109,num_decimal:110,num_divide:111,"\u21EA":20,",":188,".":190,"/":191,"`":192,"-":V?173:189,"=":V?61:187,";":V?59:186,"'":222,"[":219,"]":221,"\\":220},k={"\u21E7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},N={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},g={16:!1,18:!1,17:!1,91:!1},y={};for(K=1;K<20;K++)B["f".concat(K)]=111+K;var K,f=[],he=!1,me="all",ge=[],L=function(e){return B[e.toLowerCase()]||k[e.toLowerCase()]||e.toUpperCase().charCodeAt(0)},be=function(e){return Object.keys(B).find(function(i){return B[i]===e})},ke=function(e){return Object.keys(k).find(function(i){return k[i]===e})};function _e(t){me=t||"all"}function C(){return me||"all"}function we(){return f.slice(0)}function xe(){return f.map(function(t){return be(t)||ke(t)||String.fromCharCode(t)})}function He(t){var e=t.target||t.srcElement,i=e.tagName,s=!0;return(e.isContentEditable||(i==="INPUT"||i==="TEXTAREA"||i==="SELECT")&&!e.readOnly)&&(s=!1),s}function Me(t){return typeof t=="string"&&(t=L(t)),f.indexOf(t)!==-1}function Ee(t,e){var i,s;t||(t=C());for(var r in y)if(Object.prototype.hasOwnProperty.call(y,r))for(i=y[r],s=0;s<i.length;)i[s].scope===t?i.splice(s,1):s++;C()===t&&_e(e||"all")}function Oe(t){var e=t.keyCode||t.which||t.charCode,i=f.indexOf(e);if(i>=0&&f.splice(i,1),t.key&&t.key.toLowerCase()==="meta"&&f.splice(0,f.length),(e===93||e===224)&&(e=91),e in g){g[e]=!1;for(var s in k)k[s]===e&&(b[s]=!1)}}function Ke(t){if(typeof t>"u")Object.keys(y).forEach(function(n){return delete y[n]});else if(Array.isArray(t))t.forEach(function(n){n.key&&z(n)});else if(typeof t=="object")t.key&&z(t);else if(typeof t=="string"){for(var e=arguments.length,i=new Array(e>1?e-1:0),s=1;s<e;s++)i[s-1]=arguments[s];var r=i[0],a=i[1];typeof r=="function"&&(a=r,r=""),z({key:t,scope:r,method:a,splitKey:"+"})}}var z=function(e){var i=e.key,s=e.scope,r=e.method,a=e.splitKey,n=a===void 0?"+":a,o=ye(i);o.forEach(function(l){var c=l.split(n),m=c.length,_=c[m-1],h=_==="*"?"*":L(_);if(y[h]){s||(s=C());var u=m>1?pe(k,c):[];y[h]=y[h].filter(function(d){var p=r?d.method===r:!0;return!(p&&d.scope===s&&ve(d.mods,u))})}})};function de(t,e,i,s){if(e.element===s){var r;if(e.scope===i||e.scope==="all"){r=e.mods.length>0;for(var a in g)Object.prototype.hasOwnProperty.call(g,a)&&(!g[a]&&e.mods.indexOf(+a)>-1||g[a]&&e.mods.indexOf(+a)===-1)&&(r=!1);(e.mods.length===0&&!g[16]&&!g[18]&&!g[17]&&!g[91]||r||e.shortcut==="*")&&e.method(t,e)===!1&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}}function fe(t,e){var i=y["*"],s=t.keyCode||t.which||t.charCode;if(b.filter.call(this,t)){if((s===93||s===224)&&(s=91),f.indexOf(s)===-1&&s!==229&&f.push(s),["ctrlKey","altKey","shiftKey","metaKey"].forEach(function(d){var p=N[d];t[d]&&f.indexOf(p)===-1?f.push(p):!t[d]&&f.indexOf(p)>-1?f.splice(f.indexOf(p),1):d==="metaKey"&&t[d]&&f.length===3&&(t.ctrlKey||t.shiftKey||t.altKey||(f=f.slice(f.indexOf(p))))}),s in g){g[s]=!0;for(var r in k)k[r]===s&&(b[r]=!0);if(!i)return}for(var a in g)Object.prototype.hasOwnProperty.call(g,a)&&(g[a]=t[N[a]]);t.getModifierState&&!(t.altKey&&!t.ctrlKey)&&t.getModifierState("AltGraph")&&(f.indexOf(17)===-1&&f.push(17),f.indexOf(18)===-1&&f.push(18),g[17]=!0,g[18]=!0);var n=C();if(i)for(var o=0;o<i.length;o++)i[o].scope===n&&(t.type==="keydown"&&i[o].keydown||t.type==="keyup"&&i[o].keyup)&&de(t,i[o],n,e);if(s in y){for(var l=0;l<y[s].length;l++)if((t.type==="keydown"&&y[s][l].keydown||t.type==="keyup"&&y[s][l].keyup)&&y[s][l].key){for(var c=y[s][l],m=c.splitKey,_=c.key.split(m),h=[],u=0;u<_.length;u++)h.push(L(_[u]));h.sort().join("")===f.sort().join("")&&de(t,c,n,e)}}}}function Be(t){return ge.indexOf(t)>-1}function b(t,e,i){f=[];var s=ye(t),r=[],a="all",n=document,o=0,l=!1,c=!0,m="+",_=!1;for(i===void 0&&typeof e=="function"&&(i=e),Object.prototype.toString.call(e)==="[object Object]"&&(e.scope&&(a=e.scope),e.element&&(n=e.element),e.keyup&&(l=e.keyup),e.keydown!==void 0&&(c=e.keydown),e.capture!==void 0&&(_=e.capture),typeof e.splitKey=="string"&&(m=e.splitKey)),typeof e=="string"&&(a=e);o<s.length;o++)t=s[o].split(m),r=[],t.length>1&&(r=pe(k,t)),t=t[t.length-1],t=t==="*"?"*":L(t),t in y||(y[t]=[]),y[t].push({keyup:l,keydown:c,scope:a,mods:r,shortcut:s[o],method:i,key:s[o],splitKey:m,element:n});typeof n<"u"&&!Be(n)&&window&&(ge.push(n),F(n,"keydown",function(h){fe(h,n)},_),he||(he=!0,F(window,"focus",function(){f=[]},_)),F(n,"keyup",function(h){fe(h,n),Oe(h)},_))}function Ce(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"all";Object.keys(y).forEach(function(i){var s=y[i].filter(function(r){return r.scope===e&&r.shortcut===t});s.forEach(function(r){r&&r.method&&r.method()})})}var J={getPressedKeyString:xe,setScope:_e,getScope:C,deleteScope:Ee,getPressedKeyCodes:we,isPressed:Me,filter:He,trigger:Ce,unbind:Ke,keyMap:B,modifier:k,modifierMap:N};for(S in J)Object.prototype.hasOwnProperty.call(J,S)&&(b[S]=J[S]);var S;typeof window<"u"&&(ue=window.hotkeys,b.noConflict=function(t){return t&&window.hotkeys===b&&(window.hotkeys=ue),b},window.hotkeys=b);var ue;var v=b,T=class extends Q{static get scopedElements(){return{"ninja-action":ae,"ninja-header":se}}constructor(){super(),this._headerRef=Z(),this.placeholder="Type a command or search...",this.disableHotkeys=!1,this.searchType="regex",this.highlightMatches=!1,this.searchLabel="Search for actions",this.listboxLabel="List of actions",this.hideBreadcrumbs=!1,this.openHotkey="cmd+k,ctrl+k",this.navigationUpHotkey="up",this.navigationDownHotkey="down",this.closeHotkey="esc",this.goBackHotkey="backspace",this.selectHotkey="enter",this.hotKeysJoinedView=!1,this.noAutoLoadMdIcons=!1,this.data=[],this.__selected__=null,this.visible=!1,this._bump=!0,this._actionMatches=[],this._search="",this.currentRoot=void 0,this._flatData=[]}open(e={}){this._bump=!0,this.visible=!0;let i=this._headerRef.value;if(requestAnimationFrame(()=>{i&&(i.focusSearch(),i.expanded=!0,i.controls="actions-list")}),this._actionMatches.length>0){this._selected=this._actionMatches[0];let s=this._headerRef.value;s&&this._selected&&this._selected.id&&(s.activeDescendant=this._selected.id)}this.setParent(e.parent)}close(){this._bump=!1,this.visible=!1;let e=this._headerRef.value;e&&(e.expanded=!1)}setParent(e){e?this.currentRoot=e:this.currentRoot=void 0,this._selected=void 0,this._search="",this._headerRef.value?.setSearch("")}getBreadcrumbs(){let e=[],i=this._selected?.parent;if(i)for(e.push(i);i;){let s=this._flatData.find(r=>r.id===i);s?.parent&&e.push(s.parent),i=s?s.parent:void 0}return e.reverse()}get _selected(){return this.__selected__}set _selected(e){let i=this._headerRef.value;i&&e&&e.id&&(i.activeDescendant=e.id);let s=this.__selected__;this.__selected__=e,this.requestUpdate("_selected",s)}connectedCallback(){super.connectedCallback(),this.noAutoLoadMdIcons||document.fonts.load("24px Material Icons","apps").then(()=>{}),this._registerInternalHotkeys()}disconnectedCallback(){super.disconnectedCallback(),this._unregisterInternalHotkeys()}_flattern(e,i){let s=[];return e||(e=[]),e.map(r=>{let a=r.children&&r.children.some(o=>typeof o=="string"),n={...r,parent:r.parent||i};return a||(n.children&&n.children.length&&(i=r.id,s=[...s,...n.children]),n.children=n.children?n.children.map(o=>o.id):[]),n}).concat(s.length?this._flattern(s,i):s)}update(e){e.has("data")&&!this.disableHotkeys&&(this._flatData=this._flattern(this.data),this._flatData.forEach(i=>{i.hotkey&&v(i.hotkey,s=>{s.preventDefault(),i.handler&&i.handler(i,s,this._search)})})),super.update(e)}shouldNotOpen(e){let i=e.composedPath(),s=["input","textarea"];return i.some(r=>r?.getAttribute?.("contenteditable")==="true"?!0:s.includes(r?.tagName?.toLowerCase()))}_registerInternalHotkeys(){this.openHotkey&&v(this.openHotkey,e=>{this.shouldNotOpen(e)||(e.preventDefault(),this.visible?this.close():this.open())}),this.selectHotkey&&v(this.selectHotkey,e=>{this.visible&&(e.preventDefault(),this._actionSelected(this._actionMatches[this._selectedIndex],e))}),this.goBackHotkey&&v(this.goBackHotkey,e=>{this.visible&&(this._search||(e.preventDefault(),this._goBack()))}),this.navigationDownHotkey&&v(this.navigationDownHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex>=this._actionMatches.length-1?this._selected=this._actionMatches[0]:this._selected=this._actionMatches[this._selectedIndex+1])}),this.navigationUpHotkey&&v(this.navigationUpHotkey,e=>{this.visible&&(e.preventDefault(),this._selectedIndex===0?this._selected=this._actionMatches[this._actionMatches.length-1]:this._selected=this._actionMatches[this._selectedIndex-1])}),this.closeHotkey&&v(this.closeHotkey,e=>{this.visible&&(e.preventDefault(),this.visible=!1,this.close())})}_unregisterInternalHotkeys(){this.openHotkey&&v.unbind(this.openHotkey),this.selectHotkey&&v.unbind(this.selectHotkey),this.goBackHotkey&&v.unbind(this.goBackHotkey),this.navigationDownHotkey&&v.unbind(this.navigationDownHotkey),this.navigationUpHotkey&&v.unbind(this.navigationUpHotkey),this.closeHotkey&&v.unbind(this.closeHotkey)}_actionFocused(e,i){this._selected=e,i.target.ensureInView()}_onTransitionEnd(){this._bump=!1}get breadcrumbs(){return this.getBreadcrumbs()}_goBack(){let e=this.getBreadcrumbs();if(e){let i=e.length>1?e[e.length-2]:void 0;this.setParent(i);return}}findActionElement(e=this._selectedIndex){let i=this._actionMatches[e]?.id;if(i==null)return null;let s="#ninja-action__"+i;return this.shadowRoot?.querySelector(s)}stringToRegExp(e){return ne(e)}findMatches(e){let i=this.stringToRegExp(this._search),s={searchRegex:i,searchString:this._search};return e.filter(r=>{if(this._search.trim()==="")return r.parent===this.currentRoot&&!0;let{matcher:a,title:n,keywords:o,content:l}=r,c=null;if(typeof a=="function"&&(c=a(r,s)),(c==null&&!this.searchType||this.searchType==="regex")&&(c=!!(n&&n.match(i)||o&&o.match(i)||l&&l.match(i))),c==null&&this.searchType==="fuzzy"){let m=this._search;c=!!(n&&q(m,n)||o&&q(m,o)||l&&q(m,l))}return c==null&&(c=!!c),(!this.currentRoot&&this._search||r.parent===this.currentRoot)&&c})}render(){let e={bump:this._bump,"modal-content":!0},i={visible:this.visible,modal:!0},s,r=this._flatData;r=this.findMatches(r),s=r.reduce((o,l)=>o.set(l.section,[...o.get(l.section)||[],l]),new Map),this._actionMatches=[...s.values()].flat(),this._actionMatches.length>0&&this._selectedIndex===-1&&(this._selected=this._actionMatches[0]),this._actionMatches.length===0&&(this._selected=void 0);let a=o=>E` ${ce(o,l=>l.id,l=>E`<ninja-action
            id=${"ninja-action__"+l.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content"
            aria-selected=${U(l.id===this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${U(l.id===this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${c=>{this._actionFocused(l,c)}}
            @actionsSelected=${c=>this._actionSelected(c.detail,c)}
            .action=${l}
          ></ninja-action>`)}`,n=[];return s.forEach((o,l)=>{let c=l?E`<div class="group-header">${l}</div>`:void 0;n.push(E`${c}${a(o)}`)}),E`
      <div part="modal-overlay" @click=${this._overlayClick} class=${I(i)}>
        <div part="modal-content" class=${I(e)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${ee(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${o=>this.setParent(o.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div part="modal-body" class="modal-body">
            <div
              id="actions-list"
              class="actions-list"
              role="listbox"
              part="actions-list"
              aria-labelledby="listbox-label"
            >
              ${n}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${oe} </slot>
          </div>
        </div>
      </div>
    `}get _selectedIndex(){return this._selected?this._actionMatches.indexOf(this._selected):-1}_actionSelected(e,i){this.dispatchEvent(new CustomEvent("selected",{detail:{search:this._search,action:e},bubbles:!0,composed:!0})),e&&(e.children&&e.children?.length>0&&(this.currentRoot=e.id,this._search=""),this._headerRef.value?.setSearch(""),this._headerRef.value?.focusSearch(),e.handler?e.handler(e,i,this._search)?.keepOpen||this.close():this.findActionElement(this._selectedIndex)?.forceClick(),this._bump=!0)}async _handleInput(e){this._search=e.detail.search,await this.updateComplete,this.dispatchEvent(new CustomEvent("change",{detail:{search:this._search,actions:this._actionMatches},bubbles:!0,composed:!0}))}_overlayClick(e){let i=e.target;i instanceof Element&&i?.classList.contains("modal")&&this.close()}};R(T,"baseName","ninja-keys"),R(T,"styles",[te,ie]),R(T,"properties",{placeholder:{type:String},disableHotkeys:{type:Boolean},searchType:{attribute:"search-type"},searchLabel:{attribute:"search-label"},listboxLabel:{attribute:"listbox-label"},hideBreadcrumbs:{type:Boolean},openHotkey:{},navigationUpHotkey:{},navigationDownHotkey:{},closeHotkey:{},goBackHotkey:{},selectHotkey:{},hotKeysJoinedView:{type:Boolean},noAutoLoadMdIcons:{type:Boolean},data:{type:Array,hasChanged(){return!0}},highlightMatches:{type:Boolean,reflect:!0,attribute:"highlight-matches"},__selected__:{state:!0},visible:{state:!0},_bump:{state:!0},_actionMatches:{state:!0},_search:{state:!0},currentRoot:{state:!0},_flatData:{state:!0}});function q(t,e){return[t,...t.split(/\s+/)].some(i=>re(i,e))}export{T as a};
/*! Bundled license information:

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/live.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=/konnors-ninja-keys/bridgetown/static/chunks/chunk-SVTTZA4D.js.map