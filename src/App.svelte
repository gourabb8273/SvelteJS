<script>
  import Test1 from './component/Test1.svelte';
  let color = 'Red';
  export let name = "Gourab"; //for passing props

  export let userInfo={
    firstName :"poto",
    age: 26,
    phone: 8695456235
  } 
</script>

<main>
  <h1 class="title">Hello World</h1>
  <h3>my color is  {color} </h3>
  <Test1 {...userInfo} name={name}/>
</main>

<style>
.title {
  color: red
}
</style>
