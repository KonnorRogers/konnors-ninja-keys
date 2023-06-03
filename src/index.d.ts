import {NinjaAction} from './ninja-action.js';
import {NinjaHeader} from './ninja-header.js';
import {NinjaKeys} from './ninja-keys.js';

export {
  NinjaAction,
  NinjaHeader,
  NinjaKeys
}

export type Maybe<T> = null | undefined | T;

export interface INinjaAction {
  id?: string;
  title?: string;
  hotkey?: string;
  handler?: (action: NinjaAction, event: CustomEvent<NinjaAction>) => void;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
  content?: string;

  /** When an href is defined, render an anchor tag. */
  href?: string;
  attributes?: Omit<Anchorable, "href">;
}

type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

type X = Prettify<INinjaAction["attributes"]>

/**
 * Attributes for anchors, not exhaustive, but ones that matter.
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
export interface Anchorable {
  download?: string;
  href?: string;
  hreflang?: string;
  ping?: string;
  referrerpolicy?: string;
  rel?: string;
  target?: string;
  type?: string;
}

declare global {
  interface HTMLElementTagNameMap {
    'ninja-keys': HTMLElement & NinjaKeys;
    'ninja-header': HTMLElement & NinjaHeader;
    'ninja-action': HTMLElement & NinjaAction;
  }
}
