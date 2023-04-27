<script>
  import Counter , { getTotalCount }from "./Counter.svelte";
</script>

<main>
    <button on:click={()=>alert(`Total count is ${getTotalCount()}`)}>Alert total count </button>

    <Counter />
    <Counter />
    <Counter />
</main>