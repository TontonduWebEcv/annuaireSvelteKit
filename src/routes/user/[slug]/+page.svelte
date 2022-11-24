<script>
  /** @type {import('./$types').PageData} */
  export let data;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
  let random = getRandomInt(0, 10000);
</script>

<div class="container">
  <div class="card">
    <div class="img">
      <img
        src={`https://robohash.org/${random}${data.body.user.id}`}
        alt="robot"
      />
      <span class="trust">Poker face !</span>
    </div>
    <div class="elements">
      <div>
        <span> Nom :</span>
        {data.body.user.name}
      </div>
      <div>
        <span> Pseudo :</span>
        {data.body.user.username}
      </div>
      <div>
        <span> Email :</span>
        {data.body.user.email}
      </div>
      <div>
        <span> Rue :</span>
        {data.body.user.address.street}
      </div>
      <div>
        <span> Appartement :</span>
        {data.body.user.address.suite}
      </div>
      <div>
        <span> City :</span>
        {data.body.user.address.city}
      </div>
      <div>
        <span> ZIP :</span>
        {data.body.user.address.zipcode}
      </div>
      <div>
        <span> Phone :</span>
        {data.body.user.phone}
      </div>
      <div>
        <span> Compagny name :</span>
        {data.body.user.company.name}
      </div>
      <div>
        <span> Compagny catchPhrase :</span>
        {data.body.user.company.catchPhrase}
      </div>
      <div>
        <span> Compagny bs :</span>
        {data.body.user.company.bs}
      </div>
    </div>
  </div>
</div>
<div><a href={`${data.body.user.id - 1}`}>Previous</a></div>
<div><a href={`${data.body.user.id + 1}`}>Next</a></div>

<style>
  .container {
    margin-top: 50px;
    position: relative;
    display: flex;
    justify-content: center;
    color: grey;
  }
  .card {
    height: 557px;
    padding-bottom: 50px;
    width: 500px;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    color: black;
  }
  .img {
    height: 300px;
    width: 300px;
  }
  .elements {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }
  .trust {
    position: relative;
    z-index: 10;
    bottom: 50px;
    left: 0;
    color: red;
    background-color: white;
  }
</style>
