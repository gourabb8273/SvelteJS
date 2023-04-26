<script>
  import Test1 from "./component/Test1.svelte";
  import ComponentEvent from "./component/events/ComponentEvent.svelte";
  import DomEventFordwarding from "./component/events/DOMEventFordwarding.svelte";
  import DomEvents from "./component/events/DomEvents.svelte";
  import EventForwarding from "./component/events/EventForwarding.svelte";
  import EventModifier from "./component/events/EventModifier.svelte";
  import InlineHandler from "./component/events/InlineHandler.svelte";
  import ReactivityDeclaration from "./component/reactivity/ReactivityDeclaration.svelte";
  import ReactivityInArrays from "./component/reactivity/ReactivityInArrays.svelte";
  import ReactivityStatement from "./component/reactivity/ReactivityStatement.svelte";

  let color = "Red";
  export let name = "Gourab"; //for passing props

  export let userInfo = {
    firstName: "poto",
    age: 26,
    phone: 8695456235,
  };
  let x = 9;

  let cats = [
    { id: "J---aiyznGQ", name: "Keyboard Cat" },
    { id: "z_AbfPXTKms", name: "Maru" },
    { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
  ];

</script>


<main>

  <!-- Reactivity -->
  <!-- <ReactivityDeclaration />
  <ReactivityStatement/>
  <ReactivityInArrays/> -->

    <!-- DOM Events -->
  <!-- <DomEvents/>
  <InlineHandler/> -->
  <!-- <EventModifier /> -->

  <ComponentEvent/>
  <EventForwarding />
  <DomEventFordwarding />
  <!-- <Test1 {...userInfo}  /> -->
  <!-- <h1 class="title">Hello World</h1>
  <h3>my color is {color}</h3>


  {#if x > 10}
    <h4>X is greater than 10</h4>
  {:else if x < 10}
    <h4>X is less than 10</h4>
  {:else}
    <h4>X is 10</h4>
  {/if}

  <ul>
    {#each cats as cat}
      <li>
        <a
          target="_blank"
          href="https://www.youtube.com/watch?v={cat.id}"
          rel="noreferrer">
          {cat.name}
        </a>
      </li>
    {/each}
  </ul> -->
</main>

<style>
  .title {
    color: red;
  }

</style>
