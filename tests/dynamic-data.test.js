import { assert } from "@open-wc/testing"

test("Should not nest 'thing' under 'theme'", async () => {
  const ninja = await fixture(html`<ninja-keys></ninja-keys>`)

  ninja.data = [{
    id: "Theme",
    title: "Theme",
    children: [
      {
        id: "theme-light",
        icon: "<sl-icon name='sun'></sl-icon>",
        title: "Light Mode",
        handler () {
          window.applyTheme("light");
        }
      },
      {
        id: "theme-dark",
        icon: "<sl-icon name='moon'></sl-icon>",
        title: "Dark Mode",
        handler () {
          window.applyTheme("dark");
        }
      },
      {
        id: "theme-system",
        icon: "<sl-icon name='display'></sl-icon>",
        title: "System",
        handler () {
          window.applyTheme("system");
        }
      },
    ]
  }]

  ninja.data = [
    ...ninja.data,
    {
      id: "other-thing",
      title: "Thing"
    }
  ]

  ninja.open()

  // "Make sure 'Thing' is visible.
})
