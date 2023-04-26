<script>
  import DomEventForwardingInner from "./DOMEventForwardingInner.svelte";
  
  function handleClick() {    
    alert("Button is clicked")
  }

</script>

<div>
  <h3>DOM Event Forwarding</h3>
  <DomEventForwardingInner on:click={handleClick}/>
</div>
