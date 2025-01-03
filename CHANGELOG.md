## v1.14.0 - 01/02/2025

- feat: Added `bundle/all.js` for a single entrypoint file with no dependencies and no extra chunks / imports / http requests. Useful for things like importmaps.
- fix: Removed the `.breadcrumb:focus-visible` red background.
- fix: When `disableHotkeys` is enabled, the command menu now properly populates.
- fix: Items listed after an item with children were not displayed.
- fix: when a command keeps menu open, search is now properly cleared.

## v1.13.4 - 05/27/2024

- fix: Search regex will now group searches so multiple matches get wrapped in the same `<mark>`

## v1.13.3 - 05/27/2024

- fix: Search regex will no longer match HTML entities.

## v1.13.2 - 05/25/2024

- fix: `internal/` exports are now shipped to NPM.

## v1.13.1 - 05/25/2024

- fix: `internal/` exports are now accessible to fix an issue with bundlers.

## v1.13.0 - 05/25/2024

- feature: `::part(ninja-action__highlight)` part added to `ninja-action`
- feature: Added additional styling for `content` fields
- fix: Improve performance for regex highlighting
- fix: Export types top level
- fix: `internal/` exports are now accessible to fix an issue with bundlers.

## v1.12.1 - 05/25/2024

- fix: Fixed "bundle/" not being added to final files published to NPM.

## v1.12.0 - 05/25/2024

- feature: Add `searchQuery` to `handler` functions. [#15](https://github.com/konnorrogers/ninja-keys/pulls/15)
- feature: Added a `matcher` function to override the default matching behavior when searching a string. [#15](https://github.com/konnorrogers/ninja-keys/pulls/15)
- feature: Add prebundled entrypoints for CDN users and for those on older bundlers. [#15](https://github.com/konnorrogers/ninja-keys/pulls/15)

## v1.11.0 - 03/06/2024

- feature: Add fuzzy-matching via `fzy.js` [#13](https://github.com/konnorrogers/ninja-keys/pulls/13)
- feature: Add highlighting for matched terms [#13](https://github.com/konnorrogers/ninja-keys/pulls/13)

## v1.10.1 - 02/15/2024

- fix: Properly escape strings prior to calling `findMatches` <https://github.com/ssleptsov/ninja-keys/pull/33> <https://github.com/KonnorRogers/konnors-ninja-keys/pull/9>

## v1.10.0

- feat: expose all parts for modal, modal-content etc.
- feat: Add a close button to breadcrumbs area for mobile users with full-height modal.
- feat: remove `tabindex="-1"` from breadcrumbs. Will work in a future version to let it be keyboard tabbable.

- fix: support full-height dialogs by moving from flex -> grid for modal-content
- fix: the default `navigationDownHotkey` and `navigationUpHotkey` have removed `"tab"` as the default.

## v1.9.2

- fix: Check if the user is inside an input or a contenteditable field before opening.

## v1.9.1

- fix: Change the search input `autocomplete="none"` to `autocomplete="off"`

## v1.9.0

- feat: add additional parts to `ninja-action`
- fix: removed `flex-shrink: 0.01` on `ninja-action` causing text-overflow to behave unexpectedly.

## v1.8.1

- fix: check if `match` is a function on matchers.

## v1.8.0

- fix: issue with RegExp and using `\` and `/` in searches.
- fix: issue with extending ninja-keys and breadcrumbs not appearing.
- fix: overflowing titles now have a max-width of 100% to truncate.
- feat: expose `currentRoot` which refers to a `string` id
- fix: issues with cached breadcrumbs. Prefer `getBreadcrumbs` over `breadcrumbs`

## v1.7.0

- fix: change focus styling and add 4px of X padding to ninja-action for more obvious focus.
- fix: use `mousemove` instead of `mouseover` to prevent jumping to different actions.
- feat: Add an override for `findMatches` in case a user has their own search function for adding / removing results.
- fix: remove `white-space: nowrap;` for content blocks to allow them to be 2 lines or more.

## v1.6.0

- feat: add block content to allow for more than just a title to be displayed.
- feat: allow rendering of anchor tags that don't need handlers.

## v1.5.1

- upgrade TS version
- upgrade web-component-define version

## v1.5.0

- feat: export all elements and types
- feat: only auto-register on parent level import. importing from "ninja-keys/ninja-keys.js" will not auto-register the element.
- feat: update ninja-keys to use scoped element registry .
- fix: duplicate "placeholder" value in `<ninja-header>`

## v1.4.2

- fix: change the default width to: clamp(100px, 96vw, 640px) to allow some padding on small screens.

## v1.4.1

- fix: move @types/node to devDependencies

## v1.4.0

- fix: issues with types.

## v1.3.0

- fix: pressing "escape" key now calls `preventDefault()` to prevent the browser minimizing in Firefox.
- fix: add accessibility attributes for combobox as well as visually hidden labels.
- fix: check if the element has been defined before calling `define()` to prevent errors.
- fix: add additional padding to the bottom of header.
- feat: change the default width to: max(96vw, 640px) to allow some padding on small screens.

## v1.2.0 (2022-04-21)

- Clean up hotkeys on disconnect #20. Thanks to @excid3

- Export css variable of content `zIndex` #21
