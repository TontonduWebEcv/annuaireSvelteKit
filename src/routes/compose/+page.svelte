<script>
  import Slider from "../../lib/molecules/Slider.svelte";
  import Tags from "../../lib/atoms/Tags.svelte";
  import SelectedTag from "../../lib/atoms/SelectedTag.svelte";
  /** @type {import('./$types').PageLoad} */
  export let data;

  const tagsList = Object.values(data);
  let currentTags = [];

  $: displayedTagInTab = tagsList.filter((t) => !currentTags.includes(t));

  function addTag(event) {
    currentTags = [...currentTags, event.detail];
  }

  function deleteTag(event) {
    currentTags = currentTags.filter((t) => t != event.detail);
  }
</script>

<div class="text-column">
  <h1>Show all players</h1>
  <Slider users={data} />
  <h2>Compose your team</h2>
  <Tags tagsList={displayedTagInTab} on:tagSelected={addTag} />
  <SelectedTag {currentTags} on:deleteTag={deleteTag} />
</div>
