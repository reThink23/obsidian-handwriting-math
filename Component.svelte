<script lang="ts">
  export let variable: number;
</script>

<div class="number">
  <span>My number is {variable}!</span>
</div>

<style>
  .number {
    color: red;
  }
</style>
<script lang="ts">
  import type MyPlugin from "./main";

  let plugin: MyPlugin;
  store.plugin.subscribe((p) => (plugin = p));
</script>