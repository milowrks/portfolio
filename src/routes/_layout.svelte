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
  }
  .footer {
    --width-sm: 12;
  }

  main {
    flex: 1;
    position: relative;
  }

  h1 {
    font-size: 2.8em;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<div class="site">
  <header class="row">
    <div class="header col">
      <h1>Milo Zheng</h1>
      <h2>
        web
        <em>developer</em>
      </h2>
    </div>
  </header>
  <main class="row">
    <div class="content col">
      <slot />
    </div>
  </main>
  <footer class="footer row">
    <Nav {segment} />
  </footer>
</div>
