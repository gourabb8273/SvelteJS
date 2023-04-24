<script>
  let numbers = [1, 2, 3, 4];

  function addNumber() {
    numbers = [...numbers, numbers.length + 1];
  }

  $: sum = numbers.reduce((t, n) => t + n, 0);

</script>

<div>
  <h2>Reactive In Array</h2>
  <h4>{numbers.join('+')} = {sum}</h4>
  <button on:click={addNumber}>
    Add a number 
  </button>
</div>
