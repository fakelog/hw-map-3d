<script>
  import Close from "./icons/Close.svelte";
  import IconButton from "./IconButton.svelte";
  import Input from "./Input.svelte";
  import { connectionsStore } from "$lib/stores/connections";

  function onClickAdd() {
    connectionsStore.update((arr) => [...arr, ""]);
  }

  function onClickDelete(index) {
    connectionsStore.update((arr) => arr.filter((_, i) => i !== index));
  }

  function handleChange(event, index) {
    connectionsStore.update((arr) => {
      const updatedArr = [...arr];
      updatedArr[index] = event.detail;

      const _arr = updatedArr.slice();

      return _arr;
    });
  }
</script>

<div
  class="sticky z-20 w-fit h-fit m-4 bg-opacity-60 rounded-xl p-2 bg-neutral-600 backdrop-blur-sm flex flex-col"
>
  {#each $connectionsStore as connection, index}
    <div class="flex items-center m-2 p-2 space-x-2">
      <Input
        value={connection}
        on:input={(event) => handleChange(event, index)}
      />
      <IconButton on:click={() => onClickDelete(index)}>
        <Close />
      </IconButton>
    </div>
  {/each}

  <IconButton on:click={onClickAdd}>+</IconButton>
</div>
