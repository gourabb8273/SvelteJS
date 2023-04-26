<script>
  import Hoverable from "./Hoverable.svelte";

</script>

<div>
    <h3> Slot with property</h3>
    <Hoverable let:hovering={hovering}>
        <div class:active={hovering}>
            {#if hovering}
                <p>I am being hovered upon.</p>
            {:else}
                <p>Hover over me!</p>
            {/if}
        </div>
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <div class:active={hovering}>
            {#if hovering}
                <p>I am being hovered upon.</p>
            {:else}
                <p>Hover over me!</p>
            {/if}
        </div>
    </Hoverable>
    <Hoverable let:hovering={hovering}>
        <div class:active={hovering}>
            {#if hovering}
                <p>I am being hovered upon.</p>
            {:else}
                <p>Hover over me!</p>
            {/if}
        </div>
    </Hoverable>
</div>


<style>
  div {
    padding: 1em;
    margin: 0 0 1em 0;
    background-color: #eee;
  }

  .active {
    background-color: #ff3e00;
    color: white;
  }

</style>
