// @ts-check
import {LitElement} from 'lit';

export class BaseElement extends LitElement {
  /** @type {CustomElementRegistry} */
  static customElementRegistry = window.customElements;

  /** @type {string} */
  static baseName = '';

  /**
   * @param {import('.').Maybe<string>} [name=this.baseName]
   * @param {import('.').Maybe<CustomElementConstructor>} [ctor=this]
   * @param {ElementDefinitionOptions | undefined} [options]
   */
  static define(name = this.baseName, ctor = this, options) {
    if (!name) name = this.baseName;
    if (!ctor) ctor = this;

    if (!this.customElementRegistry.get(name)) {
      this.customElementRegistry.define(name, ctor, options);
    }
  }
}
