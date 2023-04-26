<script>
  import EventForwardingOuter from "./EventForwardingOuter.svelte";
  
  function handleMessage(event) {    
    alert(JSON.stringify(event.detail.text))
  }

</script>

<div>
  <h3>Event Forwarding</h3>
  <EventForwardingOuter on:message={handleMessage}/>
</div>
