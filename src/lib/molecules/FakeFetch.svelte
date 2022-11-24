<script>
  export let data;
  let fetch = false;
  $: label = fetch ? "En recherche .." : "Découvre les candidats";
  let requestDone = false;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let random = getRandomInt(0, 10000);

  function launchFetch() {
    fetch = true;
    setTimeout(() => {
      requestDone = true;
      label = "Ces candidats ont été trouvés :";
    }, 2000);
  }
</script>

<button on:click={launchFetch}>{label}</button>

{#if requestDone == true}
  <div class="container">
    {#each Object.entries(data) as [id, user]}
      <div class="card">
        <div class="img">
          <img src={`https://robohash.org/${random}${id}`} alt="robot" />
          <span class="trust">Don't trust in my picture</span>
        </div>
        <div>
          <span> Nom :</span>
          {user.name}
        </div>
        <div>
          <span> Pseudo :</span>
          {user.username}
        </div>
        <div>
          <a href={`user/${user.id}`}>Follow me</a>
        </div>
      </div>
    {/each}
  </div>
  <button on:click={() => ((fetch = false), (requestDone = false))}
    >Recommencer la recherche</button
  >
{/if}

<style>
  .container {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    color: grey;
  }
  .card {
    display: grid;
    grid-template-columns: 1fr;
    border: 1px black solid;
    padding: 5px;
  }
  span {
    color: black;
  }
  .img {
    height: 300px;
    width: 300px;
  }
  .trust {
    position: relative;
    z-index: 10;
    bottom: 50px;
    left: 50px;
    color: red;
    background-color: white;
  }
</style>
