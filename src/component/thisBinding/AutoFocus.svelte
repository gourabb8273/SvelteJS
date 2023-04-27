<script>
  import { onMount } from "svelte";
  let inputRef;
  //auto focusing thru this reference 
  onMount(() => {
    inputRef.focus();
  });
</script>

<input type="text" bind:this={inputRef} />
