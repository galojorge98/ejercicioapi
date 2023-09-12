const url = "https://pokeapi.co/api/v2/pokemon?limit=20";


async function pokemon() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const pokemonInfoDiv = document.getElementById('div');
    data.results.forEach(async (pokemon) => {
        const pokemonData = await obtenerDetallesPokemon(pokemon.url);
        pokemonInfoDiv.innerHTML += `
                <div class="pokemon">
                    <h2>${pokemonData.name}</h2>
                    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
                </div>
            `;

    });
}
async function obtenerDetallesPokemon(url) {
    const response = await fetch(url);
    const data2 = await response.json();
    console.log(data2);
    return data2
}

pokemon();