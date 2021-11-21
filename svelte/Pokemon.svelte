<script>
  let offset = 0;

  function next() {

  }

  function prev() {
    
  }
</script>

<div class="pokemon">
  <h1>List of Pokémon</h1>
  <ul>
    <li>░░░░░░</li>
    <li>░░░░░</li>
    <li>░░░░░░░</li>
    <li>░░░░</li>
    <li>░░░░░░░░░</li>
    <li>░░</li>
    <li>░░░░░░░</li>
    <li>░░░░░</li>
    <li>░░░░</li>
    <li>░░░</li>
  </ul>
  <div>{offset}</div>
  <button disabled>Previous</button>&nbsp;<button>Next</button>
</div>

<style>
  .pokemon {
    font-family: sans-serif;
  }

  .pokemon ul {
    position: relative;
    padding-left: 1rem;
  }

  .pokemon li {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
</style>
