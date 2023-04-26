<script>
  let isClicked = false;
  function handleClick() {
    isClicked = !isClicked;
  }

</script>

<div>
  <h3>Event Modifier</h3>
  <button on:click|once={()=>alert("Don't click")}>click</button>
</div>
