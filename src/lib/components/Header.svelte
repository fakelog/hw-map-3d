<script>
    import { createEventDispatcher } from "svelte";

    import ArrowDown from "./icons/ArrowDown.svelte";
    import ArrowUp from "./icons/ArrowUp.svelte";
    import Close from "./icons/Close.svelte";
    import Menu from "./icons/Menu.svelte";

    import Input from "./Input.svelte";
    import ButtonHeader from "./ButtonHeader.svelte";

    const dispatch = createEventDispatcher();

    let visible = false;
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
            <ButtonHeader on:click={onClickedMenu}>
                {#if menuVisible}
                    <Close />
                {:else}
                    <Menu />
                {/if}
            </ButtonHeader>
            <Input class="hidden sm:block" placeholder="Название" />
            <ButtonHeader on:click={onVisibleClicked}>
                <ArrowUp />
            </ButtonHeader>
        </nav>
    </header>
{:else}
    <header
        class="group sticky top-0 z-10 bg-neutral-600 bg-opacity-30 hover:bg-opacity-40 transition-all duration-150"
    >
        <nav class="flex justify-center items-center">
            <button
                class="flex group-hover:flex-grow group-hover:backdrop-blur-sm items-center justify-center"
                on:click={onVisibleClicked}
            >
                <ArrowDown />
            </button>
        </nav>
    </header>
{/if}
