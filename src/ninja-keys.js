// @ts-check
/**
 * import("../types/index.d.ts")
 * import("../types/fzy.d.ts")
 */

import {BaseElement} from './base-element.js';
import {html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {live} from 'lit/directives/live.js';
import {createRef, ref} from 'lit/directives/ref.js';
import {classMap} from 'lit/directives/class-map.js';
import _hotkeys from 'hotkeys-js';

import { NinjaHeader } from './ninja-header.js';
import { NinjaAction } from './ninja-action.js';
import {footerHtml} from './ninja-footer.js';
import {baseStyles, componentReset} from './base-styles.js';

import * as fzy from "fzy.js"
import { escapeStringRegexp } from '../internal/escape-string-regexp.js';

/** @type {import("hotkeys-js").Hotkeys} */
// @ts-expect-error Gets proper types for hotkeys.
const hotkeys = _hotkeys


/** @typedef {import("./ninja-header.js").NinjaHeader} NinjaHeaderElement */
/** @typedef {import("../types/index.d.ts").INinjaAction} INinjaAction */

/**
 * @type BaseElement
 */
export class NinjaKeys extends BaseElement {
  /**
   * @override
   */
  static baseName = 'ninja-keys';

  /**
   * @override
   */
  static get scopedElements() {
    return {
      'ninja-action': NinjaAction,
      'ninja-header': NinjaHeader,
    };
  }

  /**
   * @override
   */
  static styles = [componentReset, baseStyles];

  /**
   * @override
   */
  static properties = {
    placeholder: {type: String},
    disableHotkeys: {type: Boolean},
    searchType: {attribute: "search-type"},
    searchLabel: {attribute: 'search-label'},
    listboxLabel: {attribute: 'listbox-label'},
    hideBreadcrumbs: {type: Boolean},
    openHotkey: {},
    navigationUpHotkey: {},
    navigationDownHotkey: {},
    closeHotkey: {},
    goBackHotkey: {},
    selectHotkey: {},
    hotKeysJoinedView: {type: Boolean},
    noAutoLoadMdIcons: {type: Boolean},
    data: {
      type: Array,
      hasChanged() {
        // Forced to trigger changed event always.
        // Because of a lot of framework pattern wrap object with an Observer, like vue2.
        // That's why object passed to web component always same and no render triggered. Issue #9
        return true;
      },
    },
    highlightMatches: {
      type: Boolean, reflect: true, attribute: "highlight-matches"
    },

    // State
    __selected__: {state: true},
    visible: {state: true},
    _bump: {state: true},
    _actionMatches: {state: true},
    _search: {state: true},
    currentRoot: {state: true},
    _flatData: {state: true},
  };

  /**
   * @constructor
   */
  constructor() {
    super();

    /**
     * @type {import("lit/directives/ref.js").Ref<NinjaHeaderElement>}
     */
    this._headerRef = createRef();

    /**
     * Search placeholder text
     * @type {string}
     */
    this.placeholder = 'Type a command or search...';

    /**
     * If true will register all hotkey for all actions
     * @type {boolean}
     */
    this.disableHotkeys = false;

    /**
     * @type {"regex" | "fuzzy"}
     */
    this.searchType = "regex"

    /**
     * Whether or not to turn on match highlighting
     * @type {boolean}
     */
    this.highlightMatches = false

    /**
     * Maps to `aria-labelledby` for search input
     * @type {string}
     */
    this.searchLabel = 'Search for actions';

    /**
     * Maps to `aria-labelledby` for listbox
     * @type {string}
     */
    this.listboxLabel = 'List of actions';

    /**
     * Show or hide breadcrumbs on header
     * @type {boolean}
     */
    this.hideBreadcrumbs = false;

    /**
     * Open or hide shorcut
     * @type {string}
     */
    this.openHotkey = 'cmd+k,ctrl+k';

    /**
     * Navigation Up hotkey
     * @type {string}
     */
    this.navigationUpHotkey = 'up';

    /**
     * Navigation Down hotkey
     * @type {string}
     */
    this.navigationDownHotkey = 'down';

    /**
     * Close hotkey
     * @type {string}
     */
    this.closeHotkey = 'esc';

    /**
     * Go back on one level if has parent menu
     * @type {string}
     */
    this.goBackHotkey = 'backspace';

    /**
     * Select action and execute handler or open submenu
     * @type {string}
     */
    this.selectHotkey = 'enter'; // enter,space

    /**
     * Show or hide breadcrumbs on header
     * @type {boolean}
     */
    this.hotKeysJoinedView = false;

    /**
     * Disable load material icons font on connect
     * If you use custom icons.
     * Set this attribute to prevent load default icons font
     * @type {boolean}
     */
    this.noAutoLoadMdIcons = false;

    /**
     * Array of actions
     * @type {Array<INinjaAction>}
     */
    this.data = [];

    /**
     * Private
     */

    /**
     * @private
     * @type {import('../types/index.js').Maybe<INinjaAction>}
     */
    this.__selected__ = null;

    /**
     * Show or hide element
     * @type {boolean}
     */
    this.visible = false;

    /**
     * Temporarily used for animation effect. TODO: change to animate logic
     * @private
     * @type {boolean}
     */
    this._bump = true;

    /**
     * @private
     * @type {Array<INinjaAction>}
     */
    this._actionMatches = [];

    /**
     * @type {string}
     */
    this._search = '';

    /**
     * @public
     * @type {undefined | string}
     */
    this.currentRoot = undefined;

    /**
     * Array of actions in flat structure
     * @type {Array<INinjaAction>}
     */
    this._flatData = [];
  }

  /**
   * Public methods
   */

  /**
   * Show a modal
   * @param {{ parent?: string }} [options={}]
   */
  open(options = {}) {
    this._bump = true;
    this.visible = true;
    const header = this._headerRef.value;

    requestAnimationFrame(() => {
      if (header) {
        header.focusSearch();
        header.expanded = true;
        header.controls = 'actions-list';
      }
    })

    if (this._actionMatches.length > 0) {
      this._selected = this._actionMatches[0];

      const header = this._headerRef.value;
      if (header && this._selected && this._selected.id) {
        header.activeDescendant = this._selected.id;
      }
    }
    this.setParent(options.parent);
  }

  /**
   * Close modal
   */
  close() {
    this._bump = false;
    this.visible = false;

    const header = this._headerRef.value;
    if (header) {
      header.expanded = false;
    }
  }

  /**
   * Navigate to group of actions
   * @param {string} [parent] - parent id of parent group/action
   */
  setParent(parent) {
    if (!parent) {
      this.currentRoot = undefined;
    } else {
      this.currentRoot = parent;
    }
    this._selected = undefined;
    this._search = '';
    this._headerRef.value?.setSearch('');
  }

  /**
   * @private
   */
  getBreadcrumbs() {
    const path = [];
    let parentAction = this._selected?.parent;
    if (parentAction) {
      path.push(parentAction);
      while (parentAction) {
        const action = this._flatData.find((a) => a.id === parentAction);
        if (action?.parent) {
          path.push(action.parent);
        }
        parentAction = action ? action.parent : undefined;
      }
    }
    return path.reverse();
  }

  /**
   * @returns {import('../types/index.js').Maybe<INinjaAction>}
   */
  get _selected() {
    return this.__selected__;
  }

  /**
   * @param {import('../types/index.js').Maybe<INinjaAction>} action
   */
  set _selected(action) {
    const header = this._headerRef.value;
    if (header && action && action.id) {
      header.activeDescendant = action.id;
    }
    const prevSelection = this.__selected__;
    this.__selected__ = action;
    this.requestUpdate('_selected', prevSelection);
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();

    if (!this.noAutoLoadMdIcons) {
      document.fonts.load('24px Material Icons', 'apps').then(() => {});
    }

    this._registerInternalHotkeys();
  }

  /**
   * @override
   */
  disconnectedCallback() {
    super.disconnectedCallback();
    this._unregisterInternalHotkeys();
  }

  /**
   * @private
   * @param {INinjaAction[]} members
   * @param {string} [parent]
   * @returns {INinjaAction[]}
   */
  _flattern(members, parent) {
    /** @type any[] */
    let children = [];

    if (!members) {
      members = [];
    }
    return members
      .map((mem) => {
        const alreadyFlatternByUser =
          mem.children &&
          mem.children.some((value) => {
            return typeof value == 'string';
          });
        const m = {...mem, parent: mem.parent || parent};
        if (alreadyFlatternByUser) {
          return m;
        } else {
          if (m.children && m.children.length) {
            parent = mem.id;
            children = [...children, ...m.children];
          }

          // @ts-expect-error ...weird.
          m.children = m.children ? m.children.map((c) => c.id) : [];
          return m;
        }
      })
      .concat(children.length ? this._flattern(children, parent) : children);
  }

  /**
   * @override
   * @param {import("lit").PropertyValues<this>} changedProperties
   */
  update(changedProperties) {
    if (changedProperties.has('data')) {
      this._flatData = this._flattern(this.data);

      if (!this.disableHotkeys) {
        this._flatData.forEach((action) => {
          if (!action.hotkey) return;

          hotkeys(action.hotkey, (event) => {
            event.preventDefault();
            if (action.handler) {
              action.handler(action, event, this._search);
            }
          });
        });
      }
    }
    super.update(changedProperties);
  }

  /**
   * @param {Event} event
   * @return {Boolean}
   */
  shouldNotOpen (event) {
    /**
      * @type {Element[]}
      */
    // @ts-expect-error EventTarget sucks.
    const composedPath = event.composedPath()

    const disallowedTags = ['input', 'textarea']

    return composedPath.some((el) => {
      if (el?.getAttribute?.("contenteditable") === "true") {
        return true
      }

      return disallowedTags.includes(el?.tagName?.toLowerCase())
    })
  }


  /**
   * @private
   */
  _registerInternalHotkeys() {
    if (this.openHotkey) {
      hotkeys(this.openHotkey, (event) => {
        if (this.shouldNotOpen(event)) {
          return
        }

        event.preventDefault();
        this.visible ? this.close() : this.open();
      });
    }

    if (this.selectHotkey) {
      hotkeys(this.selectHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        this._actionSelected(this._actionMatches[this._selectedIndex], event);
      });
    }

    if (this.goBackHotkey) {
      hotkeys(this.goBackHotkey, (event) => {
        if (!this.visible) {
          return;
        }

        if (!this._search) {
          event.preventDefault();
          this._goBack();
        }
      });
    }

    if (this.navigationDownHotkey) {
      hotkeys(this.navigationDownHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex >= this._actionMatches.length - 1) {
          this._selected = this._actionMatches[0];
        } else {
          this._selected = this._actionMatches[this._selectedIndex + 1];
        }
      });
    }


    if (this.navigationUpHotkey) {
      hotkeys(this.navigationUpHotkey, (event) => {
        if (!this.visible) {
          return;
        }
        event.preventDefault();
        if (this._selectedIndex === 0) {
          this._selected = this._actionMatches[this._actionMatches.length - 1];
        } else {
          this._selected = this._actionMatches[this._selectedIndex - 1];
        }
      });
    }

    if (this.closeHotkey) {
      hotkeys(this.closeHotkey, (e) => {
        if (!this.visible) {
          return;
        }

        e.preventDefault();
        this.visible = false
        this.close();
      });
    }
  }

  /**
   * @private
   */
  _unregisterInternalHotkeys() {
    if (this.openHotkey) {
      hotkeys.unbind(this.openHotkey);
    }

    if (this.selectHotkey) {
      hotkeys.unbind(this.selectHotkey);
    }

    if (this.goBackHotkey) {
      hotkeys.unbind(this.goBackHotkey);
    }

    if (this.navigationDownHotkey) {
      hotkeys.unbind(this.navigationDownHotkey);
    }

    if (this.navigationUpHotkey) {
      hotkeys.unbind(this.navigationUpHotkey);
    }

    if (this.closeHotkey) {
      hotkeys.unbind(this.closeHotkey);
    }
  }

  /**
   * @private
   * @param {INinjaAction} index
   * @param {MouseEvent} $event
   */
  _actionFocused(index, $event) {
    // this.selectedIndex = index;
    this._selected = index;

    /** @type {import("./index.js").NinjaAction} */
    // @ts-expect-error we know its a ninja action.
    const target = $event.target;
    target.ensureInView();
  }

  /** @private */
  _onTransitionEnd() {
    this._bump = false;
  }

  /**
   * @deprecated
   * This is a convenience function to align with the previous API.
   * Don't use this to pass to templates because I've found it create inconsistent behavior.
   * Use `this.getBreadcrumbs()` instead.
   */
  get breadcrumbs () {
    return this.getBreadcrumbs()
  }

  /**
   * @private
   */
  _goBack() {
    const breadcrumbs = this.getBreadcrumbs()
    if (breadcrumbs) {
      const parent =
        breadcrumbs.length > 1
          ? breadcrumbs[breadcrumbs.length - 2]
          : undefined;
      this.setParent(parent);
      return
    }
  }

  /**
   * @returns {NinjaAction | null | undefined}
   */
  findActionElement (index = this._selectedIndex) {
    const id = this._actionMatches[index]?.id

    if (id == null) return null

    const query = "#ninja-action__" + id

    return this.shadowRoot?.querySelector(query)
  }

  /**
   * @public
   * Escapes invalid string sequences when calling `new RegExp(string)`. This is used for `findMatches`.
   * @see {@link https://github.com/ssleptsov/ninja-keys/pull/33}
   * @param {string} str
   */
  stringToRegExp (str) {
    return escapeStringRegexp(str)
  }

  /**
   * Iterates over flatData to find a match. Override this if you want to implement your own matcher.
   * If you're using search from a different place and adding / removing results, just return
   * the flatData.
   * @param {Array<INinjaAction>} flatData
   */
  findMatches (flatData) {
    // https://stackoverflow.com/questions/31814535/getting-error-invalid-regular-expression
    const searchRegex = this.stringToRegExp(this._search);

    const searchOptions = {
      searchRegex,
      searchString: this._search
    }

    return flatData.filter((action) => {
      if (this._search.trim() === "") {
        return action.parent === this.currentRoot && true;
      }

      const { matcher, title, keywords, content } = action

      let isMatch = null

      if (typeof matcher === "function") {
        isMatch = matcher(action, searchOptions)
      }

      if (isMatch == null && !this.searchType || this.searchType === "regex") {
        // @TODO: At some point if we ever want to support sorting based on "boosting" we may need a separate "searchType",
        // or we could provide "intrinsic" boosts users can override.
        isMatch = Boolean(
          (title && title.match(searchRegex))
          || (keywords && keywords.match(searchRegex))
          || (content && content.match(searchRegex))
        )
      }

      if (isMatch == null && this.searchType === "fuzzy") {
        const search = this._search

        // @TODO: At some point if we ever want to support sorting based on "boosting" we may need a separate "searchType"
        // or we could provide "intrinsic" boosts users can override.
        isMatch = Boolean(
          (title && hasMatch(search, title))
          || (keywords && hasMatch(search, keywords))
          || (content && hasMatch(search, content))
        )
      }

      if (isMatch == null) {
        isMatch = Boolean(isMatch)
      }

      if (!this.currentRoot && this._search) {
        // global search for items on root
        return isMatch;
      }

      return action.parent === this.currentRoot && isMatch;
    });
  }

  /**
   * @override
   */
  render() {
    const classes = {
      bump: this._bump,
      'modal-content': true,
    };

    const menuClasses = {
      visible: this.visible,
      modal: true,
    };

    let sections
    let actionMatches = this._flatData

    actionMatches = this.findMatches(actionMatches)

    sections = actionMatches.reduce(
      (entryMap, e) =>
        entryMap.set(e.section, [...(entryMap.get(e.section) || []), e]),
      new Map()
    );

    this._actionMatches = [...sections.values()].flat();

    if (this._actionMatches.length > 0 && this._selectedIndex === -1) {
      this._selected = this._actionMatches[0];
    }
    if (this._actionMatches.length === 0) {
      this._selected = undefined;
    }

    /**
     * @param {INinjaAction[]} actions
     */
    const actionsList = (actions) =>
      html` ${repeat(
        actions,
        (action) => action.id,
        (action) =>
          html`<ninja-action
            id=${"ninja-action__" + action.id}
            role="option"
            exportparts="ninja-action, ninja-selected,ninja-icon, ninja-hotkeys, ninja-hotkey, ninja-action__header, ninja-action__title, ninja-action__content, ninja-action__highlight"
            aria-selected=${live(action.id === this._selected?.id)}
            .searchQuery=${this._search}
            .selected=${live(action.id === this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            .searchType=${this.searchType}
            .highlightMatches=${this.highlightMatches}
            tabindex="-1"
            @mousemove=${(/** @type {MouseEvent} */ event) => {
              this._actionFocused(action, event);
            }}
            @actionsSelected=${(
              /** @type {CustomEvent<INinjaAction>}*/ event
            ) => this._actionSelected(event.detail, event)}
            .action=${action}
          ></ninja-action>`
      )}`;

    /**
     * @type {import("lit").TemplateResult[]}
     */
    const itemTemplates = [];
    sections.forEach((actions, section) => {
      const header = section
        ? html`<div class="group-header">${section}</div>`
        : undefined;
      itemTemplates.push(html`${header}${actionsList(actions)}`);
    });

    return html`
      <div part="modal-overlay" @click=${this._overlayClick} class=${classMap(menuClasses)}>
        <div part="modal-content" class=${classMap(classes)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            part="modal-header"
            exportparts="ninja-input,ninja-input-wrapper"
            ${ref(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.getBreadcrumbs()}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${(/** @type {CustomEvent<INinjaAction>} */ event) =>
              this.setParent(event.detail.parent)}
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
              ${itemTemplates}
            </div>

            <label id="listbox-label" class="visually-hidden">
              <slot>
                <span>${this.listboxLabel}</span>
              </slot>
            </label>
            <slot name="footer"> ${footerHtml} </slot>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * @private
   * @returns {number}
   */
  get _selectedIndex() {
    if (!this._selected) {
      return -1;
    }
    return this._actionMatches.indexOf(this._selected);
  }

  /**
   * @private
   * @param {INinjaAction} [action]
   * @param {KeyboardEvent | CustomEvent<INinjaAction>} [event]
   */
  _actionSelected(action, event) {
    // fire selected event even when action is empty/not selected,
    // so possible handle api search for example
    this.dispatchEvent(
      new CustomEvent('selected', {
        detail: {search: this._search, action},
        bubbles: true,
        composed: true,
      })
    );

    if (!action) {
      return;
    }

    if (action.children && action.children?.length > 0) {
      this.currentRoot = action.id;
      this._search = '';
    }

    this._headerRef.value?.setSearch('');
    this._headerRef.value?.focusSearch();

    if (action.handler) {
      const result = action.handler(action, event, this._search);
      if (!result?.keepOpen) {
        this.close();
      }
    } else {
      // Default behavior for links
      this.findActionElement(this._selectedIndex)?.forceClick()
    }
    this._bump = true;
  }

  /**
   * @private
   * @param {CustomEvent<{search: string}>} event
   */
  async _handleInput(event) {
    this._search = event.detail.search;
    await this.updateComplete;
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: {search: this._search, actions: this._actionMatches},
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * @private
   * @param {Event} event
   */
  _overlayClick(event) {
    const target = event.target;

    if (target instanceof Element) {
      if (target?.classList.contains('modal')) {
        this.close();
      }
    }
  }
}

/**
 * @param {string} query
 * @param {string} str
 * @returns {boolean}
 */
function hasMatch (query, str) {
  return [query, ...query.split(/\s+/)].some((q) => fzy.hasMatch(q, str))
}
