<script>
  import { connectionsStore } from "$lib/stores/connections";

  import Delete from "./icons/Delete.svelte";
  import IconButton from "./IconButton.svelte";
  import Input from "./Input.svelte";

  function onClickAdd() {
    connectionsStore.update((arr) => [...arr, ""]);
  }

  function onClickDelete(index) {
    connectionsStore.update((arr) => arr.filter((_, i) => i !== index));
  }

  function onChangeInput(event, index) {
    connectionsStore.update((arr) => {
      const updatedArr = [...arr];
      updatedArr[index] = event.detail;

      const _arr = updatedArr.slice();

      return _arr;
    });
  }
</script>

<div
  class="flex flex-col w-full h-auto bg-opacity-60 rounded-xl p-4 space-y-4 bg-background backdrop-blur-sm"
>
  {#each $connectionsStore as connection, index}
    <div class="flex items-center space-x-2">
      <Input
        value={connection}
        on:change={(event) => onChangeInput(event, index)}
      />
      <IconButton on:click={() => onClickDelete(index)}>
        <Delete />
      </IconButton>
    </div>
  {/each}

  <IconButton on:click={onClickAdd}
    ><span class="text-accent">+</span></IconButton
  >
</div>
