<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  .accent {
    background-color: var(--accent-color);
    border: 2px solid var(--accent-color);
    color: var(--darker-color);
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>milo.works</title>
</svelte:head>

<h1>Milo Zheng</h1>

<p>
  Front-end engineer in
  <a href="https://en.wikipedia.org/wiki/Melbourne" rel="noreferer noopener">
    Melbourne, Australia.
  </a>
</p>

<p class="accent">Accent Colour</p>

<code>var greeting = "Hello"</code>
