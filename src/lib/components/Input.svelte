<script>
    import { createEventDispatcher } from "svelte";

    import Done from "./icons/Done.svelte";
    import IconButton from "./IconButton.svelte";

    let classInput = "";
    let focused = false;
    let value = "";
    let placeholder = "";

    export { classInput as class };
    export { value };
    export { placeholder };

    if (classInput === "") {
        classInput += "flex-grow";
    }

    const dispatch = createEventDispatcher();

    function onClickDone() {
        focused = false;
        dispatch("change", value);
    }

    async function onFocus(event) {
        focused = true;
        dispatch("focus", event);
    }
</script>

<div
    class="flex items-center rounded-lg bg-amber-100 bg-opacity-10 {classInput}"
>
    <input
        class="flex-grow py-2 px-4 rounded-lg bg-transparent placeholder:text-emerald-200 placeholder:text-opacity-40 text-accent focus:bg-amber-200 focus:bg-opacity-5 focus:outline-0"
        type="text"
        {placeholder}
        bind:value
        on:focus={onFocus}
    />
    {#if focused}
        <IconButton on:click={onClickDone}>
            <Done />
        </IconButton>
    {/if}
</div>
