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
 handler?: (action: INinjaAction, event: KeyboardEvent | CustomEvent<INinjaAction> | undefined) => void | {keepOpen: true};
 keepOpen?: boolean
}
