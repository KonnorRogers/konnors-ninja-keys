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
  handler?: Function;
  mdIcon?: string;
  icon?: string;
  parent?: string;
  keywords?: string;
  children?: string[];
  section?: string;
  content?: string;
}

// declare global {
//   interface HTMLElementTagNameMap {
//     'ninja-keys': NinjaKeys;
//     'ninja-header': NinjaHeader;
//     'ninja-action': NinjaAction;
//   }
// }
