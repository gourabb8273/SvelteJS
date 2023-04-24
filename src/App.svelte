<script>
  import Test1 from './component/Test1.svelte';
  let color = 'Red';
  export let name = "Gourab"; //for passing props
</script>

<main>
  <h1 class="title">Hello World</h1>
  <h3>my color is  {color} </h3>
  <Test1 name={name}/>
</main>

<style>
.title {
  color: red
}
</style>
