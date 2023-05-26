// @ts-check
import {html, css} from 'lit';
import {classMap} from 'lit/directives/class-map.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';
import {join} from 'lit/directives/join.js';
import '@material/mwc-icon';
import {componentReset} from './base-styles.js';
import {BaseElement} from './base-element.js';

/**
 * @class
 */
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
      }
      .ninja-action {
        padding: 0.75em 1em;
        display: flex;
        border-left: 2px solid transparent;
        align-items: center;
        justify-content: start;
        outline: none;
        transition: color 0s ease 0s;
        width: 100%;
      }
      .ninja-action.selected {
        cursor: pointer;
        color: var(--ninja-selected-text-color);
        background-color: var(--ninja-selected-background);
        border-left: 2px solid var(--ninja-accent-color);
        outline: none;
      }
      .ninja-action.selected .ninja-icon {
        color: var(--ninja-selected-text-color);
      }
      .ninja-icon {
        font-size: var(--ninja-icon-size);
        max-width: var(--ninja-icon-size);
        max-height: var(--ninja-icon-size);
        margin-right: 1em;
        color: var(--ninja-icon-color);
        margin-right: 1em;
        position: relative;
      }

      .ninja-title {
        flex-shrink: 0.01;
        margin-right: 0.5em;
        flex-grow: 1;
        font-size: 0.8125em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
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
        margin-left: 0.5em;
      }
      .ninja-hotkeys + .ninja-hotkeys {
        margin-left: 1em;
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
  };

  /**
   * @constructor
   */
  constructor() {
    super();

    /** @type {import('.').INinjaAction} */
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
  }

  /**
   * @override
   * @param {Map<string, unknown>} changedProperties
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('selected')) {
      if (this.selected) {
        this.ensureInView();
      }
    }
  }

  /**
   * @override
   */
  render() {
    let icon;
    if (this.action.mdIcon) {
      icon = html`<mwc-icon part="ninja-icon" class="ninja-icon"
        >${this.action.mdIcon}</mwc-icon
      >`;
    } else if (this.action.icon) {
      icon = unsafeHTML(this.action.icon || '');
    }

    // const hotkey = this.action.hotkey
    //   ? html`<div class="ninja-hotkey">${this.action.hotkey}</div>`
    //   : '';
    let hotkey;
    if (this.action.hotkey) {
      if (this.hotKeysJoinedView) {
        hotkey = this.action.hotkey.split(',').map((hotkeys) => {
          const keys = hotkeys.split('+');
          const joinedKeys = html`${join(
            keys.map((key) => html`<kbd>${key}</kbd>`),
            '+'
          )}`;

          return html`<div class="ninja-hotkey ninja-hotkeys">
            ${joinedKeys}
          </div>`;
        });
      } else {
        hotkey = this.action.hotkey.split(',').map((hotkeys) => {
          const keys = hotkeys.split('+');
          const keyElements = keys.map(
            (key) => html`<kbd class="ninja-hotkey">${key}</kbd>`
          );
          return html`<kbd class="ninja-hotkeys">${keyElements}</kbd>`;
        });
      }
    }

    const classes = {
      selected: this.selected,
      'ninja-action': true,
    };

    return html`
      <div
        class="ninja-action"
        part="ninja-action ${this.selected ? 'ninja-selected' : ''}"
        class=${classMap(classes)}
      >
        ${icon}
        <div class="ninja-title">${this.action.title}</div>
        ${hotkey}
      </div>
    `;
  }
}

NinjaAction.define();
