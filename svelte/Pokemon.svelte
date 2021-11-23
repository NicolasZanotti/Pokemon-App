<script>
  import { onMount } from "svelte";

  let offset = 0;
  let names = [];

  async function fetchNames() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
    const data = await response.json();
    names = data.results.map(a => a.name);
  }

  onMount(fetchNames);

  function next() {
    offset += 10;
    fetchNames();
  }

  function prev() {
    offset -= 10;
    fetchNames();
  }
</script>

<div class="pokemon">
  <h1>List of Pokémon</h1>
  <ul>
    {#each names as name}
      <li>{name}</li>
    {/each}
  </ul>
  <button on:click={prev} disabled={offset === 0}>Previous</button>
  <button on:click={next} disabled={offset === 50}>Next</button>
</div>

<style>
  .pokemon {
    font-family: sans-serif;
  }

  .pokemon ul {
    font-size: 1rem;
    line-height: 1.2rem;
    min-height: calc(1.2rem * 10);
  }
</style>
