<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import IconButton from "./IconButton.svelte";

    let title = "FloatingActionButton";

    export { title };

    const dispatch = createEventDispatcher();

    function onClicked(event: CustomEvent<any>) {
        dispatch("click", event);
    }
</script>

<div class="rounded-xl bg-background bg-opacity-60 backdrop-blur-sm">
    <IconButton class="p-4" {title} on:click={onClicked}>
        <slot />
    </IconButton>
</div>
