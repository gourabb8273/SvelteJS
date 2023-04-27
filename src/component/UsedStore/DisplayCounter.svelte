<script>
  //this will show count in browser
import { onDestroy } from 'svelte';

  import { count } from "../../stores/stores";
  import Decrement from "./Decrement.svelte";
  import Increment from "./Increment.svelte";
  import Reset from "./Reset.svelte";
  // let counter;
  // //subscribing global state count and assining the value to local variable counter
  // count.subscribe((value) => {
  //   counter = value;
  // });

</script>

<div>
<h3>Counter using store</h3>
<h2>current counter is {$count}</h2>
<Increment />
<Decrement />
<Reset />
</div>