<script>
    import { connectionsStore } from "$lib/stores/connections";
    import { saveData } from "$lib/stores/localStroage";
    import FloatingActionButton from "./FloatingActionButton.svelte";

    import RouteOverlay from "./RouteOverlay.svelte";
    import Save from "./icons/Save.svelte";

    async function onClickSave() {
        const newConnections = $connectionsStore;
        saveData("connections", newConnections);
    }
</script>

<div class="flex flex-col w-full justify-between space-y-4">
    <RouteOverlay />
    <FloatingActionButton on:click={onClickSave}>
        <Save />
    </FloatingActionButton>
</div>
