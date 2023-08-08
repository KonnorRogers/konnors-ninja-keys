# Change Log

## 1.9.2

- fix: Check if the user is inside an input or a contenteditable field before opening.

## 1.9.1

- fix: Change the search input `autocomplete="none"` to `autocomplete="off"`

## 1.9.0

- feat: add additional parts to `ninja-action`
- fix: removed `flex-shrink: 0.01` on `ninja-action` causing text-overflow to behave unexpectedly.

## 1.8.1

- fix: check if `match` is a function on matchers.

## 1.8.0

- fix: issue with RegExp and using `\` and `/` in searches.
- fix: issue with extending ninja-keys and breadcrumbs not appearing.
- fix: overflowing titles now have a max-width of 100% to truncate.
- feat: expose `currentRoot` which refers to a `string` id
- fix: issues with cached breadcrumbs. Prefer `getBreadcrumbs` over `breadcrumbs`

## 1.7.0

- fix: change focus styling and add 4px of X padding to ninja-action for more obvious focus.
- fix: use `mousemove` instead of `mouseover` to prevent jumping to different actions.
- feat: Add an override for `findMatches` in case a user has their own search function for adding / removing results.
- fix: remove `white-space: nowrap;` for content blocks to allow them to be 2 lines or more.


## 1.6.0

- feat: add block content to allow for more than just a title to be displayed.
- feat: allow rendering of anchor tags that don't need handlers.

## 1.5.1

- upgrade TS version
- upgrade web-component-define version

## 1.5.0

- feat: export all elements and types
- feat: only auto-register on parent level import. importing from "ninja-keys/ninja-keys.js" will not auto-register the element.
- feat: update ninja-keys to use scoped element registry .
- fix: duplicate "placeholder" value in `<ninja-header>`

## 1.4.2

- fix: change the default width to: clamp(100px, 96vw, 640px) to allow some padding on small screens.

## 1.4.1

- fix: move @types/node to devDependencies

## 1.4.0

- fix: issues with types.

## 1.3.0

- fix: pressing "escape" key now calls `preventDefault()` to prevent the browser minimizing in Firefox.
- fix: add accessibility attributes for combobox as well as visually hidden labels.
- fix: check if the element has been defined before calling `define()` to prevent errors.
- fix: add additional padding to the bottom of header.
- feat: change the default width to: max(96vw, 640px) to allow some padding on small screens.

## 1.2.0 (2022-04-21)

- Clean up hotkeys on disconnect #20. Thanks to @excid3

- Export css variable of content `zIndex` #21
