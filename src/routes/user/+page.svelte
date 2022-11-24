<script>
  import FakeFetch from "../../lib/molecules/FakeFetch.svelte";
  /** @type {import('./$types').PageLoad} */
  export let data;

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // }
  // let random = getRandomInt(0, 10000);
</script>

<div class="text-column">
  <h1>Users page</h1>
</div>
<FakeFetch {data} />
