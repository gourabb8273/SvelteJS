<script>
    //conventional way using flag variable
  import TabA from "./TabA.svelte";
  import TabB from "./TabB.svelte";
  import TabC from "./TabC.svelte";
  let activetab = "TabA";

</script>

<div>
  <button on:click={() => (activetab = 'TabA')}>Tab A</button>
  <button on:click={() => (activetab = 'TabB')}>Tab B</button>
  <button on:click={() => (activetab = 'TabC')}>Tab C</button>

  {#if (activetab === 'TabA')}
    <TabA />
  {:else if (activetab === 'TabB')}
    <TabB />
  {:else if (activetab === 'TabC')}
    <TabC />
  {/if}
</div>
