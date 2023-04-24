<script>
    let count = 0;
    function handleClick (){
        count+=1;
    }
    //declaring reactive statement 
    //whenever count will be changed this statement will be execute like useState with dependency of count
    $: if(count >= 10){
      alert('Count is very high that is 10');
      count--;
    }

    $: if(true){
      alert("Welcome to world")
    }
</script>

<div>
  <h2>Reactive Statement</h2>    
  <button on:click={handleClick}>
    Clicked
    {count}
    {count === 1 ? 'time' : 'times'}
  </button>
</div>
