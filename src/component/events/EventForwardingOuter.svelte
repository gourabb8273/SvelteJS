<script>
  // This component is just forwarding the event
  import EventForwardingInner from "./EventForwardingInner.svelte";
</script>

<div>  
  <EventForwardingInner on:message/>
</div>
