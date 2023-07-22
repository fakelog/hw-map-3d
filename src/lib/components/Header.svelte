<script>
    import { createEventDispatcher } from "svelte";

    import ArrowDown from "./icons/ArrowDown.svelte";
    import ArrowUp from "./icons/ArrowUp.svelte";
    import Close from "./icons/Close.svelte";
    import Menu from "./icons/Menu.svelte";
    import IconButton from "./IconButton.svelte";

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
        class="w-full h-fit p-2 bg-neutral-500 rounded-xl bg-opacity-40 backdrop-blur-sm"
    >
        <nav class="flex items-center justify-between">
            <IconButton on:click={onVisibleClicked}>
                <ArrowUp />
            </IconButton>
            <IconButton on:click={onClickedMenu}>
                {#if menuVisible}
                    <Close />
                {:else}
                    <Menu />
                {/if}
            </IconButton>
        </nav>
    </header>
{:else}
    <header
        class="group w-full h-fit hover:backdrop-blur-sm rounded-lg bg-neutral-600 bg-opacity-30 hover:bg-opacity-40 transition-all duration-150"
    >
        <nav class="flex justify-center items-center">
            <button
                class="flex group-hover:flex-grow items-center justify-center"
                on:click={onVisibleClicked}
            >
                <ArrowDown />
            </button>
        </nav>
    </header>
{/if}
