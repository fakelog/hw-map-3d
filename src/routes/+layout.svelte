<script>
  import '../app.css';

  import Header from '$lib/components/Header.svelte';

  import { saveData, loadData } from '$lib/stores/localStroage';
  import { defaultConnections } from '$lib/const/defaultConnections';

  try {
    loadData('connections');
  } catch (error) {
    saveData('connections', defaultConnections);
  }
</script>

<Header />
<slot />
