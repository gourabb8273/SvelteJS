<script>
  import { getContext } from "svelte";

  let increment = getContext("incrementCount");
  export let count;

</script>

<main>
  <h3>Count is {count}</h3>
  <button on:click={increment}>Increment</button>
</main>
