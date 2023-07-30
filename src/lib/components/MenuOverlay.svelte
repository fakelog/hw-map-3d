<script lang="ts">
    import RouteOverlay from "./RouteOverlay.svelte";
    import SaveFloatingActionButton from "./buttons/FloatingActionButton/SaveFloatingActionButton.svelte";
    import ShareFloatingActionButton from "./buttons/FloatingActionButton/ShareFloatingActionButton.svelte";
</script>

<div class="flex flex-col w-full justify-between space-y-4">
    <RouteOverlay />
    <div class="flex flex-row justify-end space-x-4">
        <ShareFloatingActionButton />
        <SaveFloatingActionButton />
    </div>
</div>
