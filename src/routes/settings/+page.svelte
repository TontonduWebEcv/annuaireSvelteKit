<script>
  /** @type {import('./$types').PageLoad} */
  export let data;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let random = getRandomInt(0, 10000);
</script>

<div class="text-column">
  <h1>Settings page</h1>
</div>
<div class="container">
  {#each Object.entries(data) as [id, user]}
    <div class="card">
      <div>
        <img src={`https://robohash.org/${random}${id}`} alt="robot" />
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
        <span> Email :</span>
        {user.email}
      </div>
      <div>
        <span> Rue :</span>
        {user.address.street}
      </div>
      <div>
        <span> Appartement :</span>
        {user.address.suite}
      </div>
      <div>
        <span> City :</span>
        {user.address.city}
      </div>
      <div>
        <span> ZIP :</span>
        {user.address.zipcode}
      </div>
      <div>
        <span> Phone :</span>
        {user.phone}
      </div>
      <div>
        <span> Compagny name :</span>
        {user.company.name}
      </div>
      <div>
        <span> Compagny catchPhrase :</span>
        {user.company.catchPhrase}
      </div>
      <div>
        <span> Compagny bs :</span>
        {user.company.bs}
      </div>
    </div>
  {/each}
</div>

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
  .header {
  }
  span {
    color: black;
  }
</style>
