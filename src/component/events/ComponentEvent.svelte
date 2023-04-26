<script>
  import ComponentEventInner from "./ComponentEventInner.svelte";
  
  function handleMessage(event) {    
    alert(JSON.stringify(event.detail.text))
  }

</script>

<div>
  <h3>Component Event</h3>
  <ComponentEventInner on:message={handleMessage}/>
</div>
