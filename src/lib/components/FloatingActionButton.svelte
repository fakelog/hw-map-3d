<script>
    import { createEventDispatcher } from "svelte";

    import IconButton from "./IconButton.svelte";

    const dispatch = createEventDispatcher();

    async function onClicked(event) {
        dispatch("click", event);
    }
</script>

<div class="self-end rounded-xl bg-background bg-opacity-60 backdrop-blur-sm">
    <IconButton class="p-4" on:click={onClicked}>
        <slot />
    </IconButton>
</div>
