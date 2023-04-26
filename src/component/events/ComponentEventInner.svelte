<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  //dispatching or capturing the event named message 
  //from parent comp created in child comp
  function sayHello() {
    dispatch("message", {
      text: "hello!",
    });
  }

</script>

<div><button on:click={sayHello}> Click to say Hello </button></div>
