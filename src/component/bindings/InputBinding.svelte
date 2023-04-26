<script>
    let firstName ="John";
    const handleChange =(e) =>{
        firstName = e.target.value;
    }

    let lastName ="Pichai";
</script>

<!-- Normal 2 way binding  -->
<input on:input={handleChange} value={firstName}/>
<h1>Hello {firstName}</h1>

<!--Svelte style of 2 way binding  -->
<input bind:value={lastName}/>
<h1>Hello {lastName}</h1>

