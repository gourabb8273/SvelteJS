<script>
    import { onDestroy } from 'svelte';
  function onInterval(callback, milliseconds) {
    const interval = setInterval(callback, milliseconds);

    onDestroy(() => {
      // Fix the memory leak here
    });
  }

  export let callback;
  export let interval = 1000;

  onInterval(callback, interval);

</script>

<p>
  This component executes a callback every
  {interval}
  millisecond{interval === 1 ? '' : 's'}
</p>

<style>
  p {
    border: 1px solid blue;
    padding: 5px;
  }

</style>
