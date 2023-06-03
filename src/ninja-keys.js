import {BaseElement} from './base-element.js';
import {html} from 'lit';
import {repeat} from 'lit/directives/repeat.js';
import {live} from 'lit/directives/live.js';
import {createRef, ref} from 'lit/directives/ref.js';
import {classMap} from 'lit/directives/class-map.js';
import hotkeys from 'hotkeys-js';

import { NinjaHeader } from './ninja-header.js';
import { NinjaAction } from './ninja-action.js';
import {footerHtml} from './ninja-footer.js';
import {baseStyles, componentReset} from './base-styles.js';

/** @typedef {import(".").INinjaAction} INinjaAction */
/** @typedef {import(".").NinjaHeader} NinjaHeader */

/**
 * @class
 */
export class NinjaKeys extends BaseElement {
  /**
   * @override
   */
  static baseName = 'ninja-keys';

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

  static properties = {
    placeholder: {type: String},
    disableHotkeys: {type: Boolean},
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

    // State
    __selected__: {state: true},
    visible: {state: true},
    _bump: {state: true},
    _actionMatches: {state: true},
    _search: {state: true},
    _currentRoot: {state: true},
    _flatData: {state: true},
    breadcrumbs: {state: true},
  };

  /**
   * @constructor
   */
  constructor() {
    super();

    /**
     * @type {import("lit/directives/ref").Ref<NinjaHeader>}
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
    this.navigationUpHotkey = 'up,shift+tab';

    /**
     * Navigation Down hotkey
     * @type {string}
     */
    this.navigationDownHotkey = 'down,tab';

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
     * @type {import('.').Maybe<INinjaAction>}
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
     * @private
     * @type {undefined | string}
     */
    this._currentRoot = undefined;

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
    if (header) {
      header.focusSearch();
      header.expanded = true;
      header.controls = 'actions-list';
    }

    if (this._actionMatches.length > 0) {
      this._selected = this._actionMatches[0];

      const header = this._headerRef.value;
      if (header && this._selected) {
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
      this._currentRoot = undefined;
      // this.breadcrumbs = [];
    } else {
      this._currentRoot = parent;
    }
    this._selected = undefined;
    this._search = '';
    this._headerRef.value?.setSearch('');
  }

  /**
   * @private
   */
  get breadcrumbs() {
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
   * @private
   * @returns {import(".").Maybe<INinjaAction>}
   */
  get _selected() {
    return this.__selected__;
  }

  /**
   * @param {import(".").Maybe<INinjaAction>} action
   */
  set _selected(action) {
    const header = this._headerRef.value;
    if (header && action) {
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
    if (changedProperties.has('data') && !this.disableHotkeys) {
      this._flatData = this._flattern(this.data);

      this._flatData
        .filter((action) => !!action.hotkey)
        .forEach((action) => {
          hotkeys(action.hotkey, (event) => {
            event.preventDefault();
            if (action.handler) {
              action.handler(action);
            }
          });
        });
    }
    super.update(changedProperties);
  }

  /**
   * @private
   */
  _registerInternalHotkeys() {
    if (this.openHotkey) {
      hotkeys(this.openHotkey, (event) => {
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
    /** @type {import(".").NinjaAction} */
    const target = $event.target;
    target.ensureInView();
  }

  /** @private */
  _onTransitionEnd() {
    this._bump = false;
  }

  /**
   * @private
   */
  _goBack() {
    if (this.breadcrumbs) {
      const parent =
        this.breadcrumbs.length > 1
          ? this.breadcrumbs[this.breadcrumbs.length - 2]
          : undefined;
      this.setParent(parent);
    }
  }

  findActionElement (index = this._selectedIndex) {
    const id = this._actionMatches[index]?.id

    if (id == null) return null

    const query = "#ninja-action__" + id

    return this.shadowRoot.querySelector(query)
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

    const actionMatches = this._flatData.filter((action) => {
      const regex = new RegExp(this._search, 'gi');
      const matcher =
        action.title.match(regex) || action.keywords?.match(regex) || action.content?.match(regex);

      if (!this._currentRoot && this._search) {
        // global search for items on root
        return matcher;
      }

      return action.parent === this._currentRoot && matcher;
    });

    const sections = actionMatches.reduce(
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
            exportparts="ninja-action,ninja-selected,ninja-icon,ninja-content"
            aria-selected=${live(action.id === this._selected?.id)}
            .selected=${live(action.id === this._selected?.id)}
            .hotKeysJoinedView=${this.hotKeysJoinedView}
            @mouseover=${(/** @type {MouseEvent} */ event) => {
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
      <div @click=${this._overlayClick} class=${classMap(menuClasses)}>
        <div class=${classMap(classes)} @animationend=${this._onTransitionEnd}>
          <ninja-header
            exportparts="ninja-input,ninja-input-wrapper"
            ${ref(this._headerRef)}
            .placeholder=${this.placeholder}
            .hideBreadcrumbs=${this.hideBreadcrumbs}
            .breadcrumbs=${this.breadcrumbs}
            searchLabel=${this.searchLabel}
            @change=${this._handleInput}
            @setParent=${(/** @type {CustomEvent<INinjaAction>} */ event) =>
              this.setParent(event.detail.parent)}
            @close=${this.close}
          >
          </ninja-header>
          <div class="modal-body">
            <div
              id="actions-list"
              class="actions-list"
              role="listbox"
              part="actions-list"
              aria-labelledby="listbox-label"
            >
              ${itemTemplates}
            </div>

            <div class="visually-hidden">
              <slot id="listbox-label" name="listbox-label">
                <span>${this.listboxLabel}</span>
              </slot>
            </div>
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
   * @param {CustomEvent<INinjaAction>} [event]
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
      this._currentRoot = action.id;
      this._search = '';
    }

    this._headerRef.value?.setSearch('');
    this._headerRef.value?.focusSearch();

    if (action.handler) {
      const result = action.handler(action, event);
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
   * @param {CustomEvent<{search: string}>} search
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
    /** @type {HTMLElement} */
    const target = event.target;
    if (target?.classList.contains('modal')) {
      this.close();
    }
  }
}
