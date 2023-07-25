<script>
    import { onMount } from "svelte";

    import SpriteText from "three-spritetext";
    import ForceGraph3D from "3d-force-graph";
    import { connectionsStore } from "$lib/stores/connections";
    import { ConnectionsUtils } from "$lib/utils/ConnectionsUtils";
    import { saveData } from "$lib/stores/localStroage";

    let graphElement;
    let nodes = [];
    let links = [];
    let data = {};
    let group = 0;

    const СonnectionsInstance = new ConnectionsUtils();
    const GraphInstance = ForceGraph3D();

    function changeGroupById(nodes, id, newGroup) {
        const node = nodes.find((node) => node.id === id);

        if (node) {
            node.group = newGroup;
        }
    }

    nodes = Array.from({ length: 256 }, (_, i) => {
        const hexValue = i.toString(16).toUpperCase().padStart(2, "0");
        return {
            id: hexValue,
            name: hexValue,
            group: group,
        };
    });

    $: {
        const _links = [];
        const _nodes = [...nodes];

        $connectionsStore.forEach((connection) => {
            group++;

            const nodesInConnection =
                СonnectionsInstance.getCleanupConnection(connection);

            СonnectionsInstance.getLinks(nodesInConnection, _links);

            nodesInConnection.forEach((node) => {
                changeGroupById(_nodes, node, group);
            });
        });

        links = _links;
        nodes = _nodes;

        saveData("links", _links);

        data = { nodes, links };

        GraphInstance.graphData(data)
            .nodeAutoColorBy("group")
            .nodeThreeObject((node) => {
                const sprite = new SpriteText(node.id);
                sprite.material.depthWrite = true;
                sprite.color = node.color;
                sprite.textHeight = 8;
                return sprite;
            });
    }

    onMount(() => {
        if (!graphElement) {
            console.error("ooops");
            return;
        }

        GraphInstance(graphElement)
            .backgroundColor("#000")
            .graphData(data)
            .nodeAutoColorBy("group")
            .nodeThreeObject((node) => {
                const sprite = new SpriteText(node.id);
                sprite.material.depthWrite = true;
                sprite.color = node.color;
                sprite.textHeight = 8;
                return sprite;
            })
            .linkDirectionalParticles(4)
            .linkDirectionalParticleWidth(2)
            .linkDirectionalParticleSpeed(0.01);
    });
</script>

<div bind:this={graphElement} class="top-0 absolute" />
