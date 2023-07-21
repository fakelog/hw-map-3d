<script>
    import { onMount } from "svelte";

    import SpriteText from "three-spritetext";
    import ForceGraph3D from "3d-force-graph";
    import { loadData } from "$lib/stores/localStroage";

    function changeGroupById(nodes, id, newGroup) {
        const node = nodes.find((node) => node.id === id);
        if (node) {
            node.group = newGroup;
        }
    }

    let nodes = Array.from({ length: 256 }, (_, i) => {
        const hexValue = i.toString(16).toUpperCase().padStart(2, "0");
        return {
            id: hexValue,
            name: hexValue,
            group: 1,
        };
    });

    // Generate connections
    let connections = loadData("connections");

    let links = [];
    connections.forEach((connection) => {
        const nodesInConnection = connection.split(" > ");
        nodesInConnection.forEach((nodeId, index) => {
            changeGroupById(nodes, nodeId, index);
            if (index < nodesInConnection.length - 1) {
                links.push({
                    source: nodeId,
                    target: nodesInConnection[index + 1],
                });
            }
        });
    });

    const data = { nodes, links };

    onMount(() => {
        const elem = document.getElementById("3d-graph");

        const Graph = ForceGraph3D()(elem)
            .backgroundColor("#000")
            .graphData(data)
            .nodeAutoColorBy("group")
            .nodeThreeObject((node) => {
                const sprite = new SpriteText(node.id);
                sprite.material.depthWrite = true;
                sprite.color = node.color;
                sprite.textHeight = 8;
                return sprite;
            });
    });
</script>

<div id="3d-graph" class="top-0 absolute" />
