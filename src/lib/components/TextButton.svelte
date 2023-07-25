<script lang="ts">
    import { createEventDispatcher } from "svelte";

    let text: string = "TextButton";
    let textColor: string = "text-stone-400";
    let type: string = "normal";

    export { text };
    export { type };

    switch (type) {
        case "negative":
            textColor = "text-negative";
            break;
        case "positive":
            textColor = "text-positive";
            break;
    }

    const dispatch = createEventDispatcher();

    function onClick() {
        dispatch("click");
    }
</script>

<button
    class="p-2 hover:bg-background hover:bg-opacity-30 active:bg-background active:bg-opacity-50 rounded-xl {textColor}"
    on:click={onClick}
>
    {text}
</button>
