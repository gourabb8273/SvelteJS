<script>
  //this will show count in browser
  import { count, customCount } from "../../stores/stores";

</script>

<div>
  <h3>Counter using custom store</h3>
   <h2>The custom count is {$customCount}</h2>
  <button on:click={() => customCount.increment()}>Increment</button>
  <button on:click={() => customCount.increment(5)}>Increment by 5</button>

  <button on:click={() => customCount.decrement()}>Decrement</button>
  <button on:click={() => customCount.decrement(5)}>Decrement by 5</button>

  <button on:click={() => customCount.reset()}>Reset</button>
</div>
