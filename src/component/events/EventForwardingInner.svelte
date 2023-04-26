<script>
  // This component is Capturing the event passing from grand parent comp
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function sayHello() {
    dispatch("message",{
      text: "hello"
    })
  }

</script>

<div><button on:click={sayHello}>Click here to say hello</button></div>
