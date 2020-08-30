<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  .header {
    --width-sm: 12;
  }

  .content {
    --width-sm: 12;
    --width-md: 8; /* Tablet and larger */
  }

  .sidebar {
    --width-sm: 12;
    --width-md: 4; /* Tablet and larger */
  }

  main {
    /* position: relative; */
    /* max-width: 56em; */
    /* background-color: white; */
    /* padding: 2em; */
    /* margin: 0 auto; */
    box-sizing: border-box;
  }
</style>

<div class="row">
  <header class="header col">
    <Nav {segment} />
  </header>
  <main class="content col">
    <slot />
  </main>
  <aside class="sidebar col">sidebar</aside>
</div>
