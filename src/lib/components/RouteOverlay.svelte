<script>
  import { routesStore } from "$lib/stores/routes";

  import Delete from "./icons/Delete.svelte";
  import IconButton from "./IconButton.svelte";
  import Input from "./Input.svelte";

  function onClickAdd() {
    routesStore.update((arr) => [...arr, ""]);
  }

  function onClickDelete(index) {
    routesStore.update((arr) => arr.filter((_, i) => i !== index));
  }

  function onChangeInput(event, index) {
    routesStore.update((arr) => {
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
  <div class="space-y-4 max-h-96 overflow-auto">
    {#each $routesStore as connection, index}
      <div class="flex items-center space-x-2">
        <Input
          value={connection}
          icon="Done"
          on:change={(event) => onChangeInput(event, index)}
        />
        <IconButton on:click={() => onClickDelete(index)}>
          <Delete />
        </IconButton>
      </div>
    {/each}
  </div>

  <IconButton on:click={onClickAdd}
    ><span class="text-accent">+</span></IconButton
  >
</div>
