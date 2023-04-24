<script>
  let count = 0;
  function handleClick() {
    count += 1;
  }
  //declaring reactive variable or statement derived variable with other
  //whenever count will be changed this statement will be execute like useState with dependency of count
  $: myCount = count;

</script>

<div>
  <h2>Reactive Declaration</h2>
  <h3>{myCount} double is {myCount * 2}</h3>
  <button on:click={handleClick}>
    Clicked
    {count}
    {count === 1 ? 'time' : 'times'}
  </button>
</div>
