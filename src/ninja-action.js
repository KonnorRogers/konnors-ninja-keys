// @ts-check
import {html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {join} from 'lit/directives/join.js';
import '@material/mwc-icon';
import {componentReset} from './base-styles.js';
import {BaseElement} from './base-element.js';
import { when } from 'lit/directives/when.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { renderHighlight } from '../internal/fuzzy-highlight.js';

export class NinjaAction extends BaseElement {
  /**
   * @override
   */
  static baseName = 'ninja-action';
  /**
   * @override
   */
  static styles = [
    componentReset,
    css`
      :host {
        display: flex;
        width: 100%;
        padding: 0 4px;
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
    `,
  ];

  /**
   * @override
   */
  static properties = {
    action: {type: Object},
    selected: {type: Boolean},
    hotKeysJoinedView: {type: Boolean},
    content: {}
  };

  /**
   * @constructor
   */
  constructor() {
    super();

    /** @type {import('./index.js').INinjaAction} */
    this.action = {};

    /**
     * @type {boolean}
     */
    this.selected = false;

    /**
     * Display hotkey as separate buttons on UI or as is
     * @type {boolean}
     */
    this.hotKeysJoinedView = true;
  }

  /**
   * @override
   */
  connectedCallback() {
    super.connectedCallback();

    this.addEventListener('click', this.click);
  }

  /**
   * Scroll to show element
   */
  ensureInView() {
    requestAnimationFrame(() => this.scrollIntoView({block: 'nearest'}));
  }

  /**
   * @override
   */
  click() {
    this.dispatchEvent(
      new CustomEvent('actionsSelected', {
        detail: this.action,
        bubbles: true,
        composed: true,
      })
    );

    const anchor = this.shadowRoot?.querySelector("a")
    if (anchor) {
      anchor.click()
    }
  }

  forceClick () {
    const anchor = this.shadowRoot?.querySelector("a")
    if (anchor) {
      anchor.click()
    }
  }

  /**
   * @override
   * @param {Map<string, unknown>} changedProperties
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('selected')) {
      this.setAttribute("aria-selected", "true")
      if (this.selected) {
        this.ensureInView();
        this.setAttribute("aria-selected", "true")
      }
    }
  }



  /**
   * @override
   */
  render() {
    // const hotkey = this.action.hotkey
    //   ? html`<div class="ninja-hotkey">${this.action.hotkey}</div>`
    //   : '';
    const classes = {
      selected: this.selected,
      'ninja-action': true,
    };

    // Render a link
    if (this.action.href) {
      return this.renderAsLink(classes)
    }

    return html`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected ? 'ninja-selected' : ''}"
        class=${classMap(classes)}
      >
        ${this.renderBody()}
      </div>
    `;
  }

  /** @param {Record<string, boolean>} classes */
  renderAsLink (classes) {
    const attributes = this.action.attributes || {}

    const {
      download,
      hreflang,
      ping,
      referrerpolicy,
      rel,
      target,
      type,
    } = attributes

    return html`
      <a
        class="ninja-action"
        part="ninja-action ${this.selected ? 'ninja-selected' : ''}"
        class=${classMap(classes)}
        href=${this.action.href}
        download=${ifDefined(download)}
        hreflang=${ifDefined(hreflang)}
        ping=${ifDefined(ping)}
        referrerpolicy=${ifDefined(referrerpolicy)}
        rel=${ifDefined(rel)}
        target=${ifDefined(target)}
        type=${ifDefined(type)}
      >
        ${this.renderBody()}
      </a>
    `
  }

  /**
   * @param {string} query
   * @param {string} s
   */
  renderMatch (query, s) {
    return html(renderHighlight(query, s, (matchedStr) => html`<mark>${matchedStr}</mark>`))
  }

  renderBody () {
    let icon;
    if (this.action.mdIcon) {
      icon = html`<mwc-icon part="ninja-icon" class="ninja-icon">
        ${this.action.mdIcon}
      </mwc-icon>`;
    } else if (this.action.icon) {
      icon = unsafeHTML(`
        <div class="ninja-icon" part="ninja-icon">
          ${this.action.icon}
        </div>
      `);
    }

    return html`
        <div part="ninja-action__header" class="ninja-action__header">
          ${icon}
          <div part="ninja-action__title" class="ninja-title">${html`${this.action.title}`}</div>
          ${this.renderHotkey()}
        </div>

        ${when(this.action.content, () =>
          html`<div part="ninja-action__content" class="ninja-action__content">
            ${this.action.content}
          </div>`
        )}
    `
  }

  renderHotkey () {
    let hotkey;
    if (this.action.hotkey) {
      if (this.hotKeysJoinedView) {
        hotkey = this.action.hotkey.split(',').map((hotkeys) => {
          const keys = hotkeys.split('+');
          const joinedKeys = html`${join(
            keys.map((key) => html`<kbd part="ninja-hotkey">${key}</kbd>`),
            '+'
          )}`;

          return html`<div part="ninja-hotkeys" class="ninja-hotkey ninja-hotkeys">
            ${joinedKeys}
          </div>`;
        });
      } else {
        hotkey = this.action.hotkey.split(',').map((hotkeys) => {
          const keys = hotkeys.split('+');
          const keyElements = keys.map(
            (key) => html`<kbd part="ninja-hotkey" class="ninja-hotkey">${key}</kbd>`
          );
          return html`<kbd part="ninja-hotkeys" class="ninja-hotkeys">${keyElements}</kbd>`;
        });
      }
    }

    return hotkey
  }
}
