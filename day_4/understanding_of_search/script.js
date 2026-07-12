const pokemon = document.getElementById("pokemon");
const result = document.getElementById("result");
const searchButton = document.getElementById("search-btn");

async function searchPokemon() {
    const pokemonName = pokemon.value.toLowerCase();

     if (pokemonName === "") {
        result.innerHTML = `<p>Please enter a Pokemon name.</p>`;
        return;
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    if (!response.ok) {
        result.innerHTML = `<p>Pokemon not found. Please try again.</p>`;
        return;
    }

    const data = await response.json();
    const heightInMeters = data.height / 10;
    const weightInKilograms = data.weight / 10;
    result.innerHTML = `<h2>${data.name}</h2><p>Height: ${heightInMeters} m</p><p>Weight: ${weightInKilograms} kg</p><img src="${data.sprites.front_default}" alt="${data.name}">`;
}

searchButton.addEventListener("click", searchPokemon);
