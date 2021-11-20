import styles from "./Pokemon.module.css";
import { createResource, createSignal } from "solid-js";

async function fetchNames(offset) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`);
  const obj = await response.json();
  return obj.results.map(a => a.name);
}

export default function Pokemon() {
  const [offset, setOffset] = createSignal(0);
  const [names] = createResource(offset, fetchNames);

  return (
    <div class={styles.pokemon}>
      <h1>List of Pokémon</h1>
      <ul>
        <For each={names()}>{item => <li>{item}</li>}</For>
      </ul>
      <button disabled={offset() === 0} onclick={e => setOffset(offset() - 10)}>
        Previous
      </button>
      <button disabled={offset() === 50} onclick={e => setOffset(offset() + 10)}>
        Next
      </button>
    </div>
  );
}
