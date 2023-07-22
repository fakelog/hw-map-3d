<script>
    import { connectionsStore } from "$lib/stores/connections";
    import { saveData } from "$lib/stores/localStroage";

    import IconButton from "./IconButton.svelte";
    import RouteOverlay from "./RouteOverlay.svelte";
    import Save from "./icons/Save.svelte";

    async function onClickSave() {
        const newConnections = $connectionsStore;
        saveData("connections", newConnections);
    }
</script>

<div
    class="flex justify-between absolute top-24 left-0 right-0 bottom-0 m-4 z-10"
>
    <RouteOverlay />
    <IconButton
        class="self-end p-4 rounded-lg bg-neutral-600 bg-opacity-60 backdrop-blur-sm header_button active:header_button hover:header_butto"
        on:click={onClickSave}
    >
        <Save />
    </IconButton>
</div>
