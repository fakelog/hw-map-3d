<script lang="ts">
    import { createEventDispatcher } from "svelte";

    import IconButton from "./IconButton.svelte";

    let classInput = "";
    let focused = false;
    let value = "";
    let icon = "";
    let inputValue = value;
    let placeholder = "";

    export { classInput as class, value, icon, placeholder };

    let IconComponent: any = null;

    if (icon) {
        import(`./icons/${icon}.svelte`).then((module) => {
            IconComponent = module.default;
        });
    }

    if (classInput === "") {
        classInput += "flex-grow";
    }

    const dispatch = createEventDispatcher();

    function handleInput() {
        if (value.length > inputValue.length) {
            const regex = /(?!> )([0-9A-f]{2})(?! >)/gi;
            const formattedValue = value.replace(regex, "$1 > ");

            value = formattedValue;
        }
        inputValue = value;
    }

    function onClickDone() {
        focused = false;
        dispatch("change", value);
    }

    function onFocus(event: any) {
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
        on:input={handleInput}
    />
    {#if IconComponent != null}
        {#if focused}
            <IconButton on:click={onClickDone}>
                <svelte:component this={IconComponent} />
            </IconButton>
        {/if}
    {/if}
</div>
