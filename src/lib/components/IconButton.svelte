<script>
    import { createEventDispatcher } from "svelte";

    let classExport = "";
    export { classExport as class };

    const dispatch = createEventDispatcher();

    async function onClick() {
        dispatch("click");
    }
</script>

<button
    class="rounded-lg transition-all duration-150 ease-linear hover:bg-emerald-200 hover:bg-opacity-10 active:bg-gradient-radial from-[#05966820] to-transparent p-2 {classExport}"
    on:click={onClick}
>
    <slot />
</button>
