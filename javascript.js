const seccionpokemons = document.querySelector('.seccion-pokemons');
let URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

async function obtenerPokemons() {
    const response = await fetch(URL);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Ordenar los Pokémon por su ID
    pokemonData.sort((a, b) => a.id - b.id);

    // Mostrar los Pokémon en el orden correcto
    pokemonData.forEach((pokemon) => mostrarPokemon(pokemon));
}

let pokemon = false;

async function mostrarPokemon(pokemon) {
    console.log(pokemon);
    const divPokemon = document.createElement('div');
    const imgPOkemon = document.createElement('img');
    const numeroPokemon = document.createElement('p');
    const nombrePokemon = document.createElement('p');
    const divTipoPokemon = document.createElement('div');
    const tipoPokemon = document.createElement('span');
    const tipoPokemon2 = document.createElement('span');

    divPokemon.classList.add('pokemons');
    imgPOkemon.className = 'imagenpkmn';
    numeroPokemon.classList.add('numero-pokemon');
    nombrePokemon.classList.add('infoPokemon');
    divTipoPokemon.classList.add('tipo-pokemon');
    tipoPokemon.classList.add('tipo1');
    numeroPokemon.textContent = `#${pokemon.id}`;
    nombrePokemon.textContent = pokemon.name;
    imgPOkemon.src = pokemon.sprites.front_default;
    tipoPokemon.textContent = pokemon.types[0].type.name;

    divPokemon.appendChild(imgPOkemon);
    divPokemon.appendChild(numeroPokemon);
    divPokemon.appendChild(nombrePokemon);

    if (pokemon.types.length > 1) { 
        tipoPokemon2.classList.add('tipo2');
        tipoPokemon2.textContent = pokemon.types[1].type.name;
        divTipoPokemon.appendChild(tipoPokemon);
        divTipoPokemon.appendChild(tipoPokemon2);
    } else {
        divTipoPokemon.appendChild(tipoPokemon);
    }

    if (pokemon.types[0].type.name == "grass") {
        tipoPokemon.style.backgroundColor = "#7CFC00";
    } else if (pokemon.types[0].type.name == "poison") {
        tipoPokemon.style.backgroundColor = "#8A2BE2";
    } else if (pokemon.types[0].type.name == "fire") {
        tipoPokemon.style.backgroundColor = "#FF4500";
    } else if (pokemon.types[0].type.name == "flying") {
        tipoPokemon.style.backgroundColor = "#87CEEB";
    } else if (pokemon.types[0].type.name == "water") {
        tipoPokemon.style.backgroundColor = "#00BFFF";
    } else if (pokemon.types[0].type.name == "bug") {
        tipoPokemon.style.backgroundColor = "#32CD32";
    } else if (pokemon.types[0].type.name == "normal") {
        tipoPokemon.style.backgroundColor = "#A9A9A9";
    } else if (pokemon.types[0].type.name == "electric") {
        tipoPokemon.style.backgroundColor = "#FFD700";
    } else if (pokemon.types[0].type.name == "ground") {
        tipoPokemon.style.backgroundColor = "#DAA520";
    } else if (pokemon.types[0].type.name == "fairy") {
        tipoPokemon.style.backgroundColor = "#FF69B4";
    } else if (pokemon.types[0].type.name == "fighting") {
        tipoPokemon.style.backgroundColor = "#B22222";
    } else if (pokemon.types[0].type.name == "psychic") {
        tipoPokemon.style.backgroundColor = "#FF1493";
    } else if (pokemon.types[0].type.name == "rock") {
        tipoPokemon.style.backgroundColor = "#A0522D";
    } else if (pokemon.types[0].type.name == "steel") {
        tipoPokemon.style.backgroundColor = "#C0C0C0";
    } else if (pokemon.types[0].type.name == "ice") {
        tipoPokemon.style.backgroundColor = "#00BFFF";
    } else if (pokemon.types[0].type.name == "ghost") {
        tipoPokemon.style.backgroundColor = "#4B0082";
    } else if (pokemon.types[0].type.name == "dragon") {
        tipoPokemon.style.backgroundColor = "#0000FF";
    } else if (pokemon.types[0].type.name == "dark") {
        tipoPokemon.style.backgroundColor = "#000000";
    }

    divPokemon.appendChild(divTipoPokemon);
    seccionpokemons.appendChild(divPokemon);
    console.log(pokemon);
}

obtenerPokemons();