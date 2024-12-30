export type Maybe<T> = undefined | null | T

export interface INinjaAction {
 title: string
 keywords?: string
 content?: string
 id?: string
 hotkey?: string
 icon?: string
 mdIcon?: string
 parent?: string
 children?: Array<string>
 section?: string
 href?: string
 attributes?: Record<string, string>
 handler?: (action: INinjaAction, event: KeyboardEvent | CustomEvent<INinjaAction> | undefined, searchQuery: string) => void | {keepOpen: true};
 matcher?: (action: INinjaAction, searchOptions: ISearchOptions) => boolean;
 keepOpen?: boolean
}

export interface ISearchOptions {
  searchString: string;
  searchRegex: RegExp;
}

export interface INinjaActionData extends Omit<INinjaAction, 'children'> {
  children?: (INinjaActionData | string)[];
}
