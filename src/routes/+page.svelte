<script>
  import { onMount } from 'svelte';

  import SpriteText from 'three-spritetext';
  import ForceGraph3D from '3d-force-graph';
  import { connectionsStore } from '$lib/stores/connections';

  const GraphInstance = ForceGraph3D();
  let graphElement;

  function changeGroupById(nodes, id, newGroup) {
    const node = nodes.find((node) => node.id === id);

    if (node) {
      node.group = newGroup;
    }
  }

  let nodes = Array.from({ length: 256 }, (_, i) => {
    const hexValue = i.toString(16).toUpperCase().padStart(2, '0');
    return {
      id: hexValue,
      name: hexValue,
      group: 1,
    };
  });

  // Generate connections
  //let connections = loadData("connections");

  let links = [];
  let data = {};
  $: {
    const _links = [];
    const _nodes = [...nodes];

    $connectionsStore.forEach((connection) => {
      const nodesInConnection = connection
        .split(' > ')
        .filter(Boolean)
        .filter((value) => value.length === 2);

      nodesInConnection.forEach((nodeId, index) => {
        changeGroupById(_nodes, nodeId, index);
        if (index < nodesInConnection.length - 1) {
          _links.push({
            source: nodeId,
            target: nodesInConnection[index + 1],
          });
        }
      });
    });

    links = _links;
    nodes = _nodes;

    data = { nodes, links };

    GraphInstance.graphData(data)
      .nodeAutoColorBy('group')
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
      console.error('ooops');
      return;
    }

    GraphInstance(graphElement)
      .backgroundColor('#000')
      .graphData(data)
      .nodeAutoColorBy('group')
      .nodeThreeObject((node) => {
        const sprite = new SpriteText(node.id);
        sprite.material.depthWrite = true;
        sprite.color = node.color;
        sprite.textHeight = 8;
        return sprite;
      });
  });
</script>

<div bind:this={graphElement} class="top-0 absolute" />
