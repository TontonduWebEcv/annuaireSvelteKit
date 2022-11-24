<script>
  import "./styles.css";
</script>

<div class="app">
  <main>
    <nav>
      <a href="/user">Users</a>
      <a href="/compose">Compose your team</a>
      <a href="/search">Search</a>
    </nav>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 64rem;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
