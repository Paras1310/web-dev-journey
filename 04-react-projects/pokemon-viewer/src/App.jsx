import { useState, useEffect } from "react";

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

useEffect(() => {
  if (searchTerm === "") {
    return;
  }

  const timer = setTimeout(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      
      if (!response.ok) {
        setPokemon(null);
        return;
      }

      const data = await response.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm]);

  return (
  <div>
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    {pokemon && (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <h2>{pokemon.weight / 10} Kg</h2>
        <h2>{pokemon.height / 10} m</h2>
      </div>
    )}
  </div>
);
}

export default App;
