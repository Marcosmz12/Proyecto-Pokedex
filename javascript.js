const seccionpokemons = document.querySelector('.seccion-pokemons');
let URL = "https://pokeapi.co/api/v2/pokemon?limit=1000offset=0";

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

    switch (pokemon.types[0].type.name) {
        case "grass":
            divPokemon.style.backgroundImage = "url(imagenes/fondopkmnplanta.png)";
            tipoPokemon.style.backgroundColor = "#7CFC00";
            break;
        case "poison":
            divPokemon.style.backgroundImage = "url(imagenes/fondoVeneno.png)";
            tipoPokemon.style.backgroundColor = "#8A2BE2";
            break;
        case "fire":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFuegovolteado.png)";
            tipoPokemon.style.backgroundColor = "#FF4500";
            break;
        case "flying":
            tipoPokemon.style.backgroundColor = "#87CEEB";
            break;
        case "water":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAgua.png)";
            tipoPokemon.style.backgroundColor = "#00BFFF";
            break;
        case "bug":
            divPokemon.style.backgroundImage = "url(imagenes/fondoBicho.png)";
            tipoPokemon.style.backgroundColor = "#32CD32";
            break;
        case "normal":
            divPokemon.style.backgroundImage = "url(imagenes/fondoNormales.png)";
            tipoPokemon.style.backgroundColor = "#A9A9A9";
            break;
        case "electric":
            divPokemon.style.backgroundImage = "url(imagenes/fondoElectrico.png)";
            tipoPokemon.style.backgroundColor = "#FFD700";
            break;
        case "ground":
            divPokemon.style.backgroundImage = "url(imagenes/fondoTierra.png)";
            tipoPokemon.style.backgroundColor = "#DAA520";
            break;
        case "fairy":
            divPokemon.style.backgroundImage = "url(imagenes/fondoHada.png)";
            tipoPokemon.style.backgroundColor = "#FF69B4";
            break;
        case "fighting":
            tipoPokemon.style.backgroundColor = "#B22222";
            break;
        case "psychic":
            divPokemon.style.backgroundImage = "url(imagenes/fondoPsiquico.png)";
            tipoPokemon.style.backgroundColor = "#FF1493";
            break;
        case "rock":
            divPokemon.style.backgroundImage = "url(imagenes/fondoRoca.png)";
            tipoPokemon.style.backgroundColor = "#A0522D";
            break;
        case "steel":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAcero.png)"
            tipoPokemon.style.backgroundColor = "#C0C0C0";
            break;
        case "ice":
            tipoPokemon.style.backgroundColor = "#00BFFF";
            break;
        case "ghost":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFantasma.png)";
            tipoPokemon.style.backgroundColor = "#4B0082";
            break;
        case "dragon":
            tipoPokemon.style.backgroundColor = "#0000FF";
            break;
        case "dark":
            tipoPokemon.style.backgroundColor = "#000000";
            break;
    }

    // Colorear el segundo tipo
    if (pokemon.types.length > 1) {
        switch (pokemon.types[1].type.name) {
            case "grass":
                tipoPokemon2.style.backgroundColor = "#7CFC00";
                break;
            case "poison":
                tipoPokemon2.style.backgroundColor = "#8A2BE2";
                break;
            case "fire":
                tipoPokemon2.style.backgroundColor = "#FF4500";
                break;
            case "flying":
                tipoPokemon2.style.backgroundColor = "#87CEEB";
                break;
            case "water":
                tipoPokemon2.style.backgroundColor = "#00BFFF";
                break;
            case "bug":
                tipoPokemon2.style.backgroundColor = "#32CD32";
                break;
            case "normal":
                tipoPokemon2.style.backgroundColor = "#A9A9A9";
                break;
            case "electric":
                tipoPokemon2.style.backgroundColor = "#FFD700";
                break;
            case "ground":
                tipoPokemon2.style.backgroundColor = "#DAA520";
                break;
            case "fairy":
                tipoPokemon2.style.backgroundColor = "#FF69B4";
                break;
            case "fighting":
                tipoPokemon2.style.backgroundColor = "#B22222";
                break;
            case "psychic":
                tipoPokemon2.style.backgroundColor = "#FF1493";
                break;
            case "rock":
                tipoPokemon2.style.backgroundColor = "#A0522D";
                break;
            case "steel":
                tipoPokemon2.style.backgroundColor = "#C0C0C0";
                break;
            case "ice":
                tipoPokemon2.style.backgroundColor = "#00BFFF";
                break;
            case "ghost":
                tipoPokemon2.style.backgroundColor = "#4B0082";
                break;
            case "dragon":
                tipoPokemon2.style.backgroundColor = "#0000FF";
                break;
            case "dark":
                tipoPokemon2.style.backgroundColor = "#000000";
                break;
        }
    }
    
    divPokemon.appendChild(divTipoPokemon);
    seccionpokemons.appendChild(divPokemon);
    console.log(pokemon);
}

obtenerPokemons();