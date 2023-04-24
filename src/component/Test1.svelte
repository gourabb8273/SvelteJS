<script>
export let name ='Default'; // it will take props from parent otherwise default

//mutating props in this local
name = "gourab banerjee"

  export let firstName;
  export let age;
  export let phone;
</script>

<main>
<p> Here is the test component</p>
<h5>My name is {name} </h5>
<h4>Here is {firstName} of age {age} and phone no is {phone}</h4>
</main>

<style>
.test {
  color: blue
}
</style>
