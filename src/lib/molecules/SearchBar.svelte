<script>
  import InputCustom from "../atoms/InputCustom.svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let searchUsers;
  let filterName = [];

  function listenFilterName(event) {
    filterName = event.detail
      ? Object.values(searchUsers).filter((user) =>
          user.name.includes(event.detail)
        )
      : searchUsers;
    dispatch("listenningFilterName", {
      filterName,
    });
  }
</script>

<div class="containerSearchBar">
  <InputCustom on:inputChange={listenFilterName} />
</div>

<style>
  .containerSearchBar {
    height: 25px;
    max-width: 100%;
    margin: 10px;
    padding: 5px;
    display: flex;
    justify-content: center;
    flex-direction: row;
    border: solid 1px red;
  }
</style>
