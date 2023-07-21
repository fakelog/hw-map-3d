<script>
    import { loadData } from "$lib/stores/localStroage";

    import Close from "./icons/Close.svelte";
    import IconButton from "./IconButton.svelte";
    import Input from "./Input.svelte";

    let connections = loadData("connections");
</script>

<div
    class="sticky z-20 w-fit h-fit m-4 bg-opacity-60 rounded-xl p-2 bg-neutral-600 backdrop-blur-sm flex flex-col"
>
    {#each connections as connection}
        <div class="flex items-center m-2 p-2 space-x-2">
            <Input value={connection} />
            <IconButton><Close /></IconButton>
        </div>
    {/each}
    <button>+</button>
</div>
