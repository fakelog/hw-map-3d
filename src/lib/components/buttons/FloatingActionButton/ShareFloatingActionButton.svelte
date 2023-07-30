<script lang="ts">
    import Dialog from "$lib/components/Dialog.svelte";
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
            shareURL = JSON.stringify(loadData("routes"));
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
<FloatingActionButton title="Поделиться" on:click={onClick}>
    <Share />
</FloatingActionButton>
