<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import IconButton from "../../IconButton.svelte";
    import Spinner from "$lib/components/Spinner.svelte";

    let title = "FloatingActionButton";
    let showSpinner = false;

    export { title };
    export { showSpinner };

    const dispatch = createEventDispatcher();

    function onClicked(event: CustomEvent<any>) {
        dispatch("click", event);
    }
</script>

<div class="rounded-xl bg-background bg-opacity-60 backdrop-blur-sm">
    <IconButton class="p-4" {title} on:click={onClicked}>
        {#if showSpinner}
            <Spinner />
        {:else}
            <slot />
        {/if}
    </IconButton>
</div>
