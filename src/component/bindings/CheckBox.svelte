<script>
  import { subscribe } from "svelte/internal";

  let yes = false;

</script>

<h3>CheckBox Binding</h3>
<label>
  <input type="checkbox" bind:checked={yes} />
  Yes! send me regular email spam.
</label>

{#if yes}
  <p>Thank you! we will bombard your inbox with email</p>
{:else}
  <p>You must opt-in to continue if you are paying you are the product</p>
{/if}

<button disabled={!yes}> subscribe</button>
