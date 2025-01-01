---
title: Nested Structures
permalink: /how-tos/nested-structures/
---

<style>
  light-preview::part(iframe) {
    min-height: 70vh;
  }
</style>

<% code = capture do %>
const ninja = document.querySelector("ninja-keys");
document.querySelector("#ninja-button").addEventListener("click", () => ninja.open())

const hotkeys = [{
  id: 'Theme',
  mdIcon: "subdirectory_arrow_right",
  children: [
    {
      mdIcon: "light_mode",
      id: 'light',
      title: 'light_mode',
    },
    {
      id: 'System Theme',
      mdIcon: "subdirectory_arrow_right",
      children: [
        { id: "sub-item-1", title: 'Sub item 1' },
        { id: "sub-item-2", title: 'Sub item 2' }
      ]
    }
  ]
}]
ninja.data = hotkeys;
<% end.html_safe %>

<ninja-keys search-type="fuzzy" highlight-matches=""></ninja-keys>
<button id="ninja-button">Open Ninja Keys</button>

<script type="module">
  import "<%= find_asset "../src/index.js" %>"
  <%= code.html_safe %>
</script>

<light-preview wrap='hard'>
  <template slot="preview-html">
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
      rel="stylesheet"
    />
    <ninja-keys search-type="fuzzy" highlight-matches></ninja-keys>
    <button id="ninja-button">Open Ninja Keys</button>
    <script type="module">
      import "<%= find_asset "../src/index.js" %>"
      <%= code %>
    </script>
  </template>
  <template slot="code">
    <ninja-keys search-type="fuzzy" highlight-matches></ninja-keys>
    <button>Open Ninja Keys</button>
    <script type="module">
      import "konnors-ninja-keys"
      <%= code %>
    </script>
  </template>
</light-preview>

