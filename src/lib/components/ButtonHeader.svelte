<script>
    import { createEventDispatcher } from "svelte";

    let classExport = "header_button active:header_button hover:header_butto";
    export { classExport as class };

    const dispatch = createEventDispatcher();

    async function onClick() {
        dispatch("click");
    }
</script>

<button class={classExport} on:click={onClick}>
    <slot />
</button>
