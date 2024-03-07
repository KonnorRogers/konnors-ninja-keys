---
title: Match Highlighting
permalink: /how-tos/match-highlighting/
---

Whether you're using fuzzy or regexp based search, you can turn on "match highlighting" by adding
the attribute `highlight-matches=""` to your ninja keys element. Like so:

<style>
  light-preview::part(iframe) {
    min-height: 70vh;
  }
</style>

<light-preview wrap='hard'>
  <template slot="preview-html">
    <ninja-keys highlight-matches></ninja-keys>
    <button>Open Ninja Keys</button>
    <script type="module">
      import "<%= find_asset "../src/index.js" %>"
      document.querySelector("button").addEventListener("click", () => document.querySelector("ninja-keys").open())
      const linkIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
          <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
          <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
        </svg>
      `
      const hotkeys = [
        {
          id: "light-mode",
          title: "Light Mode",
          hotkey: "cmd+l",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sun-fill" viewBox="0 0 16 16">
  <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
</svg>`,
          handler: () => {}
        },
        {
          id: "dark-mode",
          title: "Open Projects",
          hotkey: "cmd+d",
          handler: () => {},
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
  <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
</svg>`
        },
        {
          id: "system",
          title: "System",
          handler: () => {},
          icon: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
  <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4q0 1 .25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75Q6 13 6 12H2s-2 0-2-2zm1.398-.855a.76.76 0 0 0-.254.302A1.5 1.5 0 0 0 1 4.01V10c0 .325.078.502.145.602q.105.156.302.254a1.5 1.5 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.76.76 0 0 0 .254-.302 1.5 1.5 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.76.76 0 0 0-.302-.254A1.5 1.5 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145"/>
</svg>`
        },
        {
          id: "home",
          title: "Home",
          icon: linkIcon,
          href: "javascript: void 0;" // items with href get rendered as links and dont need handlers.
        },
        {
          id: "changelog",
          title: "Changelog",
          icon: linkIcon,
          href: "javascript: void 0;" // items with href get rendered as links and dont need handlers.
        },
      ];
      const ninja = document.querySelector("ninja-keys");
      ninja.data = hotkeys;
    </script>
  </template>
  <template slot="code">
    <ninja-keys highlight-matches></ninja-keys>
    <button>Open Ninja Keys</button>
    <script type="module">
      import "konnors-ninja-keys"
      document.querySelector("button").addEventListener("click", () => document.querySelector("ninja-keys").open())
      const hotkeys = [
        {
          id: "light-mode",
          title: "Light Mode",
          hotkey: "cmd+l",
          handler: () => {}
        },
        {
          id: "dark-mode",
          title: "Open Projects",
          hotkey: "cmd+d",
          handler: () => {}
        },
        {
          id: "system",
          title: "System",
          handler: () => {}
        },
        {
          id: "home",
          title: "Home",
          href: "javascript: void 0;" // items with href get rendered as links and dont need handlers.
        },
        {
          id: "changelog",
          title: "Changelog",
          href: "javascript: void 0;" // items with href get rendered as links and dont need handlers.
        },
      ];
      const ninja = document.querySelector("ninja-keys");
      ninja.data = hotkeys;
    </script>
  </template>
</light-preview>


