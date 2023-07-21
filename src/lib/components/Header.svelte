<script>
    import MenuButton from "./MenuButton.svelte";
    import ThemeButton from "./ThemeButton.svelte";

    let hidden = false;

    function onHiddenClicked() {
        hidden = !hidden;
    }
</script>

{#if hidden}
    <header
        class="sticky top-0 z-10 bg-sky-300 transition-all duration-150 bg-opacity-10 hover:bg-opacity-20 hover:backdrop-blur-sm"
    >
        <nav class="flex justify-center items-center">
            <button on:click={onHiddenClicked}>\\\</button>
        </nav>
    </header>
{:else}
    <header
        class="bg-sky-300 sticky m-4 rounded-md top-0 z-10 p-2 transition-all duration-150 bg-opacity-40 backdrop-blur-sm"
    >
        <nav class="flex items-center justify-between">
            <MenuButton />
            <button on:click={onHiddenClicked}>///</button>
            <ThemeButton />
        </nav>
    </header>
{/if}
<div
    class="sticky z-20 w-fit h-fit m-4 bg-opacity-60 rounded-md p-2 bg-sky-300 backdrop-blur-sm flex flex-col"
>
    <input
        class="p-2 w-fit rounded-lg bg-opacity-25"
        type="text"
        name=""
        id=""
        placeholder="00 > 01 > 00"
    />
    <button>+</button>
</div>
