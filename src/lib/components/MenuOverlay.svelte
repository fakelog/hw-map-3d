<script lang="ts">
    import { connectionsStore } from "$lib/stores/connections";
    import { apiBaseURL } from "$lib/const/apiBaseURL";
    import { loadData, saveData } from "$lib/stores/localStroage";
    import { getShareConnections } from "$lib/useCase/shareConnections/ShareConnections";
    import { ConnectionsUtils } from "$lib/utils/ConnectionsUtils";

    import Dialog from "./Dialog.svelte";
    import FloatingActionButton from "./FloatingActionButton.svelte";
    import RouteOverlay from "./RouteOverlay.svelte";
    import Save from "./icons/Save.svelte";
    import Share from "./icons/Share.svelte";

    let showShareDialog = false;
    let shareMessage: string = "";
    let shareURL: string = "";

    async function onClickSave() {
        const newConnections = $connectionsStore;
        saveData("connections", newConnections);
        const response = await fetch(`${apiBaseURL}/routes/add`, {
            method: "POST",
            body: JSON.stringify({ routes: newConnections }),
            headers: {
                "content-type": "application/json",
            },
        });
        const routes = await response.json();
        const routesId = routes.key;
        saveData("routesId", routesId);
    }

    async function onClickShare() {
        try {
            shareMessage = JSON.stringify(loadData("connections"));
        } catch (error: any) {
            shareMessage = error;
        }
        try {
            shareURL = JSON.stringify(loadData("connections"));
        } catch (error: any) {
            shareURL = error;
        }
        showShareDialog = true;
    }

    function onClickDialog() {
        showShareDialog = false;
    }
</script>

{#if showShareDialog}
    <Dialog title="Поделиться" on:click={onClickDialog}>
        <textarea name="" id="" cols="30" rows="10">
            {shareMessage}
        </textarea>
    </Dialog>
{/if}

<div class="flex flex-col w-full justify-between space-y-4">
    <RouteOverlay />
    <div class="flex flex-row justify-end space-x-4">
        <FloatingActionButton title="Поделиться" on:click={onClickShare}>
            <Share />
        </FloatingActionButton>
        <FloatingActionButton title="Сохранить" on:click={onClickSave}>
            <Save />
        </FloatingActionButton>
    </div>
</div>
