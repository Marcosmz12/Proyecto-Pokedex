let botontipoAgua = document.getElementById('agua');
let urlPrimeraGeneracion = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

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