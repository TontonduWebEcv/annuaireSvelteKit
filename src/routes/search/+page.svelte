<script>
  import Autocomplete from "../../lib/organisms/Autocomplete.svelte";

  /** @type {import('./$types').PageLoad} */
  export let data;
</script>

<h1>Seach a user</h1>
<h2>Check the console</h2>
<p>Don't delete all your ask there is a bug</p>

<Autocomplete searchUsers={data} />
