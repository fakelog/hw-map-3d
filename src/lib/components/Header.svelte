<script>
    import { createEventDispatcher } from "svelte";

    import ArrowDown from "./icons/ArrowDown.svelte";
    import ArrowUp from "./icons/ArrowUp.svelte";
    import Close from "./icons/Close.svelte";
    import Menu from "./icons/Menu.svelte";

    import IconButton from "./IconButton.svelte";
    import Input from "./Input.svelte";

    const dispatch = createEventDispatcher();

    let visible = true;
    let menuVisible = false;

    function onVisibleClicked() {
        visible = !visible;
    }

    function onClickedMenu(event) {
        dispatch("clickMenu", event);
    }
</script>

{#if visible}
    <header
        class="bg-neutral-500 sticky m-4 rounded-xl z-10 p-2 transition-all duration-150 bg-opacity-40 backdrop-blur-sm"
    >
        <nav class="flex items-center justify-between">
            <IconButton on:click={onClickedMenu}>
                {#if menuVisible}
                    <Close />
                {:else}
                    <Menu />
                {/if}
            </IconButton>
            <Input class="hidden sm:block" placeholder="Название" />
            <IconButton on:click={onVisibleClicked}>
                <ArrowUp />
            </IconButton>
        </nav>
    </header>
{:else}
    <header
        class="sticky top-0 z-10 bg-neutral-600 bg-opacity-30 hover:bg-opacity-40 hover:backdrop-blur-sm transition-all duration-150"
    >
        <nav class="flex justify-center items-center">
            <button on:click={onVisibleClicked}><ArrowDown /></button>
        </nav>
    </header>
{/if}
