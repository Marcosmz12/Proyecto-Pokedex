const seccionpokemons = document.querySelector('.seccion-pokemons');
const prevButton = document.getElementById('Anterior');
const nextButton = document.getElementById('Siguiente');
const pageInfo = document.getElementById('page-info');
const filtroTipo = document.getElementById('filtro-tipo');
const btnFiltrar = document.getElementById('btnFiltrar');
let currentPage = 1;
const limit = 20; // Número de Pokémon por página
const maxPokemons = 1010; // Máximo de Pokémon a mostrar
let pokemonData = []; // Array para almacenar los datos de los Pokémon

async function obtenerPokemons() {
    let offset = (currentPage - 1) * limit;
    let URL = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(URL);
    const data = await response.json();
    const pokemons = data.results;

    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    pokemonData.sort((a, b) => a.id - b.id);

    seccionpokemons.innerHTML = ''; // Limpia la sección antes de añadir nuevos Pokémon
    pokemonData.forEach((pokemon) => mostrarPokemon(pokemon));

    actualizarPaginacion();
}

function actualizarPaginacion() {
    pageInfo.textContent = `Página ${currentPage}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = (currentPage * limit) >= maxPokemons;
}

prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        obtenerPokemons();
    }
});

nextButton.addEventListener('click', () => {
    if ((currentPage * limit) < maxPokemons) {
        currentPage++;
        obtenerPokemons();
    }
});

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
            divPokemon.style.borderColor = "#00c70c"
            tipoPokemon.style.backgroundColor = "#7CFC00";
            break;
        case "poison":
            divPokemon.style.backgroundImage = "url(imagenes/fondoVeneno.png)";
            divPokemon.style.borderColor = "#a217b8";
            tipoPokemon.style.backgroundColor = "#8A2BE2";
            break;
        case "fire":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFuegovolteado.png)";
            tipoPokemon.style.backgroundColor = "#FF4500";
            break;
        case "flying":
            divPokemon.style.backgroundImage = "url(imagenes/fondoVolador.png)";
            divPokemon.style.borderColor = "#f7dff1";

            tipoPokemon.style.backgroundColor = "#87CEEB";
            break;
        case "water":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAgua.png)";
            divPokemon.style.borderColor = "#0070ff";
            tipoPokemon.style.backgroundColor = "#00BFFF";
            break;
        case "bug":
            divPokemon.style.backgroundImage = "url(imagenes/fondoBicho.png)";
            divPokemon.style.borderColor = "#92ff2c";
            tipoPokemon.style.backgroundColor = "#32CD32";
            break;
        case "normal":
            divPokemon.style.backgroundImage = "url(imagenes/fondoNormales.png)";
            divPokemon.style.borderColor = "#b6b6b6";
            tipoPokemon.style.backgroundColor = "#A9A9A9";
            break;
        case "electric":
            divPokemon.style.backgroundImage = "url(imagenes/fondoElectrico.png)";
            divPokemon.style.borderColor = "#f6ff31";
            tipoPokemon.style.backgroundColor = "#FFD700";
            break;
        case "ground":
            divPokemon.style.backgroundImage = "url(imagenes/fondoTierra.png)";
            divPokemon.style.borderColor = "#eccb0f";
            tipoPokemon.style.backgroundColor = "#DAA520";
            break;
        case "fairy":
            divPokemon.style.backgroundImage = "url(imagenes/fondoHada.png)";
            divPokemon.style.borderColor = "#ffa0b4"; 
            tipoPokemon.style.backgroundColor = "#FF69B4";
            break;
        case "fighting":
            divPokemon.style.borderColor = "#a00000";
            tipoPokemon.style.backgroundColor = "#B22222";
            break;
        case "psychic":
            divPokemon.style.backgroundImage = "url(imagenes/fondoPsiquico.png)";
            divPokemon.style.borderColor = "#ba71f4";
            tipoPokemon.style.backgroundColor = "#FF1493";
            break;
        case "rock":
            divPokemon.style.backgroundImage = "url(imagenes/fondoRoca.png)";
            divPokemon.style.borderColor = "#7f5618";
            tipoPokemon.style.backgroundColor = "#A0522D";
            break;
        case "steel":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAcero.png)"
            divPokemon.style.borderColor = "#d0d0d0"; 
            tipoPokemon.style.backgroundColor = "#C0C0C0";
            break;
        case "ice":
            divPokemon.style.backgroundImage = "url(imagenes/fondoHielo.png)";
            divPokemon.style.borderColor = "#70f0ff";
            tipoPokemon.style.backgroundColor = "#00BFFF";
            break;
        case "ghost":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFantasma.png)";
            divPokemon.style.borderColor = "#5d4aa7"; 
            tipoPokemon.style.backgroundColor = "#4B0082";
            break;
        case "dragon":
            divPokemon.style.backgroundImage = "url(imagenes/fondoDragon.png)";
            divPokemon.style.borderColor = "#a9e794"; 
            tipoPokemon.style.backgroundColor = "#0000FF";
            break;
        case "dark":
            divPokemon.style.backgroundImage = "url(imagenes/fondoSiniestro.png)";
            divPokemon.style.borderColor = "#4c517e"; 
            
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