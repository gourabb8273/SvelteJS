<script>
  let isClicked = false;
  function handleClick() {
    isClicked = !isClicked;
  }

</script>

<div>
  <h3>DOM Event</h3>
  {#if isClicked}
    <h2 on:click={handleClick}>Reset</h2>
    <h4>Thanks for clicking me</h4>
  {:else}
    <h2 on:click={handleClick}>Click me</h2>
  {/if}
</div>
