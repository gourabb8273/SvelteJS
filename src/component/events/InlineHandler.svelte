<script>
  let isClicked = false;
  function handleClick() {
    isClicked = !isClicked;
  }

</script>

<div>
  <h3>Inline DOM Event Handler</h3>
  {#if isClicked}
    <h2 on:click={() => (isClicked = !isClicked)}>Reset</h2>
    <h4>Thanks for clicking me</h4>
  {:else}
    <h2 on:click={() => (isClicked = !isClicked)}>Click me</h2>
  {/if}
</div>
