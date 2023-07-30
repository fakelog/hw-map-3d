<script lang="ts">
    import { RoutesUseCase } from "$lib/useCase/RoutesUseCase";

    import Save from "$lib/components/icons/Save.svelte";
    import FloatingActionButton from "./FloatingActionButton.svelte";

    let showSpinner = false;

    async function onClick() {
        const routesUseCase = new RoutesUseCase();

        showSpinner = true;
        routesUseCase
            .saveRoutes()
            .catch(() => {})
            .finally(() => {
                showSpinner = false;
            });
    }
</script>

<FloatingActionButton title="Сохранить" on:click={onClick} bind:showSpinner>
    <Save />
</FloatingActionButton>
