<script>
  import User from "./User.svelte";
  import Login from "./Login.svelte";
  let counter = 0;
  function addToCounter() {
    counter += 1;
  };
</script>

<div class="container">
  <Login />
  <a href="/about">About my site</a>
  <button on:click={addToCounter}>Click Me</button>
  <p>You've pressed the button {counter} times.</p>
  <User id={counter} />
</div>
