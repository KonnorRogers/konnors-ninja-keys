import type {NinjaAction} from './ninja-action';
import type {NinjaHeader} from './ninja-header';
import type {NinjaKeys} from './ninja-keys';

export type {NinjaAction} from './ninja-action';
export type {NinjaHeader} from './ninja-header';
export type {NinjaKeys} from './ninja-keys';

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
}

declare global {
  interface HTMLElementTagNameMap {
    'ninja-keys': NinjaKeys;
    'ninja-header': NinjaHeader;
    'ninja-action': NinjaAction;
  }
}
