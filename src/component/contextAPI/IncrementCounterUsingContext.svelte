<script>
  import { setContext } from "svelte";

  import CounterCard from "./CounterCard.svelte";

  export let count = 0;

  function incrementCount() {
    count++;
  }

  setContext("incrementCount", incrementCount);

</script>

<main>
  <CounterCard {count} />
</main>
