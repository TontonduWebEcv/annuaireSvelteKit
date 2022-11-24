<script>
  import ContainerResultSearch from "../atoms/ContainerResultSearch.svelte";

  export let filterList = [];
  $: console.log(
    "array or object, when it's an object there is a bug",
    filterList
  );

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let random = getRandomInt(0, 10000);
</script>

<ContainerResultSearch>
  <ul class="container">
    {#each filterList as filterName}
      {#each filterName as user}
        <li class="card">
          <div>
            <img
              class="logo"
              src={`https://robohash.org/${random}${user.id}`}
              alt="robot"
            />
          </div>
          <div>
            <h2>
              {user.username},
            </h2>
          </div>
        </li>
      {/each}
    {/each}
  </ul>
</ContainerResultSearch>

<style>
  .container {
    position: relative;
    max-width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
  .card {
    width: 100%;
    height: 70px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid white;
  }
  .logo {
    width: 50px;
    height: 50px;
  }
</style>
