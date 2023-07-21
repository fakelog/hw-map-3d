<script>
  import "../app.css";

  import Header from "$lib/components/Header.svelte";

  import { saveData } from "$lib/stores/localStroage";

  let connections = [
    "E4 > 66 > 46 > 4D > CB > 05 > 8E > AD > 62 > 8C > B7 > A7 > FF > 56 > 2A > E4",
    "56 > 34 > 3F > A9 > BE > E4",
    "A7 > 15 > 6A > CC > B0 > 56",
    "8C > CD > 85 > 0B > BF > A7",
    "4D > ED > 02 > 51 > 05",
  ];

  saveData("connections", connections);
</script>

<Header />
<slot />
