# Change Log

## 1.5.0

- feat: export all elements and types
- feat: only auto-register on parent level import. importing from "ninja-keys/ninja-keys" will not auto-register the element.
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
