<script>
    import { createEventDispatcher } from "svelte";

    let classExport = "";
    export { classExport as class };

    if (classExport === "") {
        classExport = "p-2";
    }

    const dispatch = createEventDispatcher();

    async function onClick() {
        dispatch("click");
    }
</script>

<button
    class="rounded-lg transition-all duration-150 ease-linear hover:bg-amber-200 hover:bg-opacity-10 active:bg-gradient-radial from-[#96850520] to-transparent {classExport}"
    on:click={onClick}
>
    <slot />
</button>
