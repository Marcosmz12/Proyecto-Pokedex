let botontipoAgua = document.getElementById('agua');
let urlPrimeraGeneracion = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0";

botontipoAgua.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo agua
    const pokemonsTipoAgua = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'water')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo agua
    pokemonsTipoAgua.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoAcero = document.getElementById('acero');

botontipoAcero.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo acero
    const pokemonsTipoAcero = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'steel')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo acero
    pokemonsTipoAcero.forEach((pokemon) => mostrarPokemon(pokemon));
});


let botontipoBicho = document.getElementById('bicho');

botontipoBicho.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo bicho
    const pokemonsTipoBicho = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'bug')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo bicho
    pokemonsTipoBicho.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoDragon = document.getElementById('dragon');

botontipoDragon.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo dragón
    const pokemonsTipoDragon = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'dragon')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo dragón
    pokemonsTipoDragon.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoElectrico = document.getElementById('electrico');

botontipoElectrico.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo eléctrico
    const pokemonsTipoElectrico = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'electric')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo eléctrico
    pokemonsTipoElectrico.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoFantasma = document.getElementById('fantasma');

botontipoFantasma.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo fantasma
    const pokemonsTipoFantasma = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'ghost')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo fantasma
    pokemonsTipoFantasma.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoFuego = document.getElementById('fuego');

botontipoFuego.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo fuego
    const pokemonsTipoFuego = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'fire')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo fuego
    pokemonsTipoFuego.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoHada = document.getElementById('hada');

botontipoHada.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo hada
    const pokemonsTipoHada = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'fairy')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo hada
    pokemonsTipoHada.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoHielo = document.getElementById('hielo');

botontipoHielo.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo hielo
    const pokemonsTipoHielo = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'ice')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo hielo
    pokemonsTipoHielo.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoLucha = document.getElementById('lucha');

botontipoLucha.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo lucha
    const pokemonsTipoLucha = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'fighting')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo lucha
    pokemonsTipoLucha.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoNormal = document.getElementById('normal');

botontipoNormal.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo normal
    const pokemonsTipoNormal = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'normal')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo normal
    pokemonsTipoNormal.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoPlanta = document.getElementById('planta');

botontipoPlanta.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo planta
    const pokemonsTipoPlanta = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'grass')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo planta
    pokemonsTipoPlanta.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoPsiquico = document.getElementById('psiquico');

botontipoPsiquico.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo psíquico
    const pokemonsTipoPsiquico = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'psychic')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo psíquico
    pokemonsTipoPsiquico.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoRoca = document.getElementById('roca');

botontipoRoca.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo roca
    const pokemonsTipoRoca = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'rock')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo roca
    pokemonsTipoRoca.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoSiniestro = document.getElementById('siniestro');

botontipoSiniestro.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo siniestro
    const pokemonsTipoSiniestro = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'dark')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo siniestro
    pokemonsTipoSiniestro.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoTierra = document.getElementById('tierra');

botontipoTierra.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo tierra
    const pokemonsTipoTierra = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'ground')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo tierra
    pokemonsTipoTierra.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoVeneno = document.getElementById('veneno');

botontipoVeneno.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo veneno
    const pokemonsTipoVeneno = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'poison')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo veneno
    pokemonsTipoVeneno.forEach((pokemon) => mostrarPokemon(pokemon));
});

let botontipoVolador = document.getElementById('volador');

botontipoVolador.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Filtrar los Pokémon de tipo volador
    const pokemonsTipoVolador = pokemonData.filter(pokemon => 
        pokemon.types.some(type => type.type.name === 'flying')
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar los Pokémon de tipo volador
    pokemonsTipoVolador.forEach((pokemon) => mostrarPokemon(pokemon));
});

let verTodos = document.getElementById('todos');

verTodos.addEventListener('click', async () => {
    const response = await fetch(urlPrimeraGeneracion);
    const data = await response.json();
    const pokemons = data.results;

    // Recoger todos los datos de los primeros 151 Pokémon
    const pokemonData = await Promise.all(
        pokemons.map(async (pokemon) => {
            const response = await fetch(pokemon.url);
            return response.json();
        })
    );

    // Limpiar la sección de Pokémon antes de mostrar los nuevos
    seccionpokemons.innerHTML = '';

    // Mostrar todos los Pokémon
    pokemonData.forEach((pokemon) => mostrarPokemon(pokemon));
});