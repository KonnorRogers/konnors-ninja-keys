// @ts-check
import {html, css} from 'lit';
import {ref, createRef} from 'lit/directives/ref.js';
import {BaseElement} from './base-element.js';
import {componentReset} from './base-styles.js';

export class NinjaHeader extends BaseElement {
  /** @override */
  static baseName = 'ninja-header';

  /** @override */
  static styles = [
    componentReset,
    css`
      :host {
        flex: 1;
        position: relative;
      }
      .search {
        padding: 1.25em;
        flex-grow: 1;
        flex-shrink: 0;
        margin: 0px;
        border: none;
        appearance: none;
        font-size: 1.125em;
        background: transparent;
        caret-color: var(--ninja-accent-color);
        color: var(--ninja-text-color);
        outline: transparent;
        font-family: var(--ninja-font-family);
      }
      .search::placeholder {
        color: var(--ninja-placeholder-color);
      }
      .breadcrumb-list {
        padding: 1em 4em 0 1em;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        justify-content: flex-start;
        flex: initial;
      }

      .breadcrumb {
        background: var(--ninja-secondary-background-color);
        text-align: center;
        line-height: 1.2em;
        border-radius: var(--ninja-key-border-radius);
        border: 0;
        cursor: pointer;
        padding: 0.1em 0.5em;
        color: var(--ninja-secondary-text-color);
        margin-right: 0.5em;
        outline: none;
        font-family: var(--ninja-font-family);
      }

      .search-wrapper {
        display: flex;
        border-bottom: var(--ninja-separate-border);
      }
    `,
  ];

  /**
   * @override
   */
  static properties = {
    placeholder: {},
    hideBreadcrumbs: {type: Boolean},
    breadcrumbHome: {},
    expanded: {type: Boolean},
    controls: {},
    searchLabel: {},
    activeDescendant: {},
    breadcrumbs: {type: Array},
  };

  /**
   * @constructor
   */
  constructor() {
    super();

    /** @type {string} */
    this.placeholder = '';

    /** @type {boolean} */
    this.hideBreadcrumbs = false;

    /** @type {string} */
    this.breadcrumbHome = 'Home';

    /**
     * Maps to `aria-expanded`
     * @type {boolean}
     */
    this.expanded = false;

    /**
     * Maps to `aria-controls`
     * @type {string}
     */
    this.controls = '';

    /**
     * Maps to `aria-labelledby` on <input>
     * @type {string}
     */
    this.searchLabel = '';

    /**
     * Maps to `aria-activedescendant`
     * @type {string}
     */
    this.activeDescendant = '';

    /**
     * Array of breadcrumb strings
     * @type {string[]}
     */
    this.breadcrumbs = [];

    /**
     * @private
     * @type {import("lit/directives/ref.js").Ref<HTMLInputElement>}
     */
    this._inputRef = createRef();
  }

  /**
   * @override
   */
  render() {
    /** @type {import("lit").TemplateResult<1> | ''} */
    let breadcrumbs = '';
    if (!this.hideBreadcrumbs) {
      const itemTemplates = [];
      if (this.breadcrumbs) {
        for (const breadcrumb of this.breadcrumbs) {
          itemTemplates.push(
            html`<button
              tabindex="-1"
              @click=${() => this.selectParent(breadcrumb)}
              class="breadcrumb"
            >
              ${breadcrumb}
            </button>`
          );
        }
      }
      breadcrumbs = html`<div class="breadcrumb-list" id="breadcrumb-list">
        <button
          tabindex="-1"
          @click=${() => this.selectParent()}
          class="breadcrumb"
        >
          ${this.breadcrumbHome}
        </button>
        ${itemTemplates}
      </div>`;
    }

    return html`
      ${breadcrumbs}
      <div part="ninja-input-wrapper" class="search-wrapper">
        <input
          part="ninja-input"
          type="text"
          id="search"
          spellcheck="false"
          autocomplete="off"
          @input="${this._handleInput}"
          ${ref(this._inputRef)}
          placeholder="${this.placeholder}"
          class="search"
          aria-labelledby="search-label"
          aria-expanded="${this.expanded}"
          aria-controls="${this.controls} breadcrumb-list"
          aria-autocomplete="list"
          aria-activedescendant="${this.activeDescendant}"
          role="combobox"
        />

        <div class="visually-hidden">
          <slot name="search-label" id="search-label">
            <span>${this.searchLabel}</span>
          </slot>
        </div>
      </div>
    `;
  }

  /**
   * @param {string} value
   */
  setSearch(value) {
    if (this._inputRef.value) {
      this._inputRef.value.value = value;
    }
  }

  focusSearch() {
    requestAnimationFrame(() => this._inputRef.value?.focus());
  }

  /**
   * @private
   * @param {Event} event
   */
  _handleInput(event) {
    const input = event.target;
    if (input instanceof HTMLInputElement) {
      this.dispatchEvent(
        new CustomEvent('change', {
          detail: {search: input.value},
          bubbles: false,
          composed: false,
        })
      );
    }
  }

  /**
   * @private
   * @param {string} [breadcrumb]
   */
  selectParent(breadcrumb) {
    this.dispatchEvent(
      new CustomEvent('setParent', {
        detail: {parent: breadcrumb},
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * @override
   */
  firstUpdated() {
    this.focusSearch();
  }

  _close() {
    this.dispatchEvent(
      new CustomEvent('close', {bubbles: true, composed: true})
    );
  }
}
