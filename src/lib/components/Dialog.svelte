<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import Surface from "./Surface.svelte";
    import TextButton from "./TextButton.svelte";
    import Window from "./Window.svelte";

    let title: string = "Dialog title";

    export { title };

    const dispatch = createEventDispatcher();

    function onClick(type: string) {
        dispatch("click", type);
    }
</script>

<Surface>
    <Window>
        <header
            class="flex items-center justify-center w-full p-4 rounded-t-xl text-stone-300 bg-background bg-opacity-50"
        >
            {title}
        </header>
        <main class="p-4 text-stone-400"><slot /></main>
        <footer
            class="p-2 flex justify-center items-center w-full rounded-b-xl bg-background bg-opacity-30"
        >
            <TextButton
                text="Отмена"
                type="negative"
                on:click={() => {
                    onClick("cancel");
                }}
            />
            <TextButton
                text="Готово"
                on:click={() => {
                    onClick("done");
                }}
            />
        </footer>
    </Window>
</Surface>
