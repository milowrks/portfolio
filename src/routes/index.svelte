<style>
  p {
    margin: 1em auto;
  }

  .content {
    --width-sm: 12;
    --width-md: 8;
  }

  .code {
    --width-sm: 12;
    --width-md: 4;
  }
  .accent {
    background-color: var(--accent-color);
    border: 2px solid var(--accent-color);
    color: var(--darker-color);
  }
</style>

<svelte:head>
  <title>Milo Zheng | Web Developer</title>
</svelte:head>

<div class="row">
  <div class="content col">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
      sollicitudin ullamcorper leo et convallis.
    </p>

    <p>
      Integer id neque sit amet diam rhoncus ullamcorper. Praesent vestibulum
      maximus quam, sit amet gravida dolor euismod at. Aliquam pharetra porta
      tortor, in sodales ante hendrerit pharetra. Suspendisse et blandit mi.
      Maecenas a eros rutrum, viverra nulla vel, venenatis arcu. Nam eleifend
      egestas nisi, eget hendrerit ligula rutrum a.
    </p>

    <p class="accent">Accent Colour</p>
  </div>
  <div class="code col">
    <code>A CODE BLOCK</code>
  </div>
</div>
