import { useState, useEffect } from "react";
import "./Pokemon.css";

function Pokemon() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(true);
  const [offset, setOffset] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoaded(false);
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`)
      .then(res => res.json())
      .then(
        result => {
          setIsLoaded(true);
          setItems(result.results);
        },
        error => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [offset]);

  function prev() {
    if (!isLoaded) return;
    setOffset(offset - 10);
  }

  function next() {
    if (!isLoaded) return;
    setOffset(offset + 10);
  }

  if (error) return "An error occurred";
  return (
    <div className="pokemon">
      <h1>List of Pokémon</h1>
      <ul>
        {items.map(item => (
          <li key={item.url}>{item.name}</li>
        ))}
      </ul>
      <button disabled={offset === 0} onClick={prev}>
        Previous
      </button>
      <button disabled={offset >= 50} onClick={next}>
        Next
      </button>
    </div>
  );
}

export default Pokemon;
