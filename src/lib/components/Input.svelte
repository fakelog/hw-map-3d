<script>
    import { createEventDispatcher } from "svelte";

    let classInput = "";

    export { classInput as class };
    export let value = "";
    export let placeholder = "";

    const dispatch = createEventDispatcher();

    async function handleChange(event) {
        const newValue = event.target.value;
        dispatch("input", newValue);
    }
</script>

<input
    class="py-2 px-4 rounded-lg bg-emerald-800 bg-opacity-20 placeholder:text-emerald-200 placeholder:text-opacity-40 text-amber-100 border-emerald-600 hover:bg-opacity-40 focus:bg-emerald-900 focus:outline-0 {classInput}"
    type="text"
    {placeholder}
    bind:value
    on:input={handleChange}
/>
