<script lang="ts">
    import Dialog from "$lib/components/Dialog.svelte";
    import Input from "$lib/components/Input.svelte";
    import Share from "$lib/components/icons/Share.svelte";
    import { loadData } from "$lib/stores/localStroage";
    import FloatingActionButton from "./FloatingActionButton.svelte";

    let showShareDialog = false;
    let shareMessage: string = "";
    let shareURL: string = "";

    function onClick() {
        try {
            shareMessage = JSON.stringify(loadData("routes"));
        } catch (error: any) {
            shareMessage = error;
        }
        try {
            shareURL = `https://hw-map-3d.pages.dev/${loadData("routesId")}`;
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
        <div class="flex flex-col space-y-2">
            <span>Массив цикла:</span>
            <textarea name="" id="" cols="30" rows="10">
                {shareMessage}
            </textarea>
            <span>Ссылка на прокси:</span>
            <Input value={shareURL} />
        </div>
    </Dialog>
{/if}
<FloatingActionButton title="Поделиться" on:click={onClick}>
    <Share />
</FloatingActionButton>
