<script>
  import { saveData, loadData } from "$lib/stores/localStroage";
  import { defaultConnections } from "$lib/const/defaultConnections";

  import "../app.css";

  import Header from "$lib/components/Header.svelte";
  import MenuOverlay from "$lib/components/MenuOverlay.svelte";

  let menuVisible = false;

  try {
    loadData("connections");
  } catch (error) {
    saveData("connections", defaultConnections);
  }

  async function onClickedMenu() {
    menuVisible = !menuVisible;
  }
</script>

<Header on:clickMenu={onClickedMenu} />

{#if menuVisible}
  <MenuOverlay />
{/if}

<slot />
