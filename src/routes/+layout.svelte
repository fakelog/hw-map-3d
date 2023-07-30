<script>
    import { saveData, loadData, removeData } from "$lib/stores/localStroage";
    import { defaultConnections } from "$lib/const/defaultConnections";

    import "../app.css";

    import Header from "$lib/components/Header.svelte";
    import MenuOverlay from "$lib/components/MenuOverlay.svelte";

    const connections = loadData("connections");
    if (connections) {
        saveData("routes", connections);
        removeData("connections");
    }

    let menuVisible = false;

    try {
        loadData("routes");
    } catch (error) {
        saveData("routes", defaultConnections);
    }

    function onClickedMenu() {
        menuVisible = !menuVisible;
    }
</script>

<div
    class="flex flex-col lg:flex-row absolute left-0 top-0 right-0 z-50 p-4 space-y-4 lg:space-y-0 lg:space-x-4"
>
    <Header on:clickMenu={onClickedMenu} />
    {#if menuVisible}
        <MenuOverlay />
    {/if}
</div>
<slot />
