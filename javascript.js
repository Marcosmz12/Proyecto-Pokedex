const seccionpokemons = document.querySelector('.seccion-pokemons');
let URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

async function obtenerPokemons() {
fetch(URL)
    .then(response => response.json())
    .then(data => {
        let pokemons = data.results;
        // Ordenar los Pokémon por su ID
        for (let i = 0; i < pokemons.length; i++) {
            fetch(pokemons[i].url)
                .then(response => response.json())
                .then(data => {
                    mostrarPokemon(data);
                });
        }

    });
}

async function mostrarPokemon(pokemon) {
    console.log(pokemon);
    const divPokemon = document.createElement('div');
    const imgPOkemon = document.createElement('img');
    const numeroPokemon = document.createElement('p');
    const nombrePokemon = document.createElement('p');
    const divTipoPokemon = document.createElement('div');
    const tipoPokemon = document.createElement('span');

    divPokemon.classList.add('pokemons');
    imgPOkemon.className = 'imagenpkmn';
    numeroPokemon.classList.add('numero-pokemon');
    nombrePokemon.classList.add('infoPokemon');
    divTipoPokemon.classList.add('tipo-pokemon');
    tipoPokemon.classList.add('tipo');
    numeroPokemon.textContent = `#${pokemon.id}`;
    nombrePokemon.textContent = pokemon.name;
    imgPOkemon.src = pokemon.sprites.front_default;
    tipoPokemon.textContent = pokemon.types[0].type.name;

    divPokemon.appendChild(imgPOkemon);
    divPokemon.appendChild(numeroPokemon);
    divPokemon.appendChild(nombrePokemon);

    divTipoPokemon.appendChild(tipoPokemon);
    if (pokemon.types.length > 1) {
        const tipoPokemon2 = document.createElement('span');
        tipoPokemon2.textContent = pokemon.types[1].type.name;
        divTipoPokemon.appendChild(tipoPokemon);
    }

    divPokemon.appendChild(divTipoPokemon);
    seccionpokemons.appendChild(divPokemon);
    console.log(pokemon);
}

obtenerPokemons();