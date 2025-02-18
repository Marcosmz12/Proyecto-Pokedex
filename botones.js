// ✅ Obtener el ID del Pokémon desde la URL
const params = new URLSearchParams(window.location.search);
const pokemonId = params.get('id');

// ✅ Función para obtener los datos del Pokémon desde la API
async function obtenerDetallePokemon(id) {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();

        const resSpecies = await fetch(pokemon.species.url);
        const species = await resSpecies.json();

        mostrarDetalle(pokemon, species);
    } catch (error) {
        console.error('Error al obtener detalles del Pokémon:', error);
        document.querySelector('.detalle-pokemon').innerHTML = "<p>Error al cargar el Pokémon.</p>";
    }
}

// ✅ Función para mostrar los detalles del Pokémon
function mostrarDetalle(pokemon, species) {
    const contenedor = document.querySelector('.detalle-pokemon');
    
    contenedor.innerHTML = `
        <h2>${pokemon.name} (#${pokemon.id})</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Descripción:</strong> ${species.flavor_text_entries.find(e => e.language.name === "es").flavor_text}</p>
    `;

    // Obtener evoluciones
    obtenerEvoluciones(species.evolution_chain.url);
}

// ✅ Función para obtener la cadena de evoluciones
async function obtenerEvoluciones(url) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        let evoluciones = [];
        let actual = data.chain;

        while (actual) {
            evoluciones.push(actual.species.name);
            actual = actual.evolves_to.length ? actual.evolves_to[0] : null;
        }

        document.querySelector('.detalle-pokemon').innerHTML += `
            <p><strong>Evoluciones:</strong> ${evoluciones.join(' → ')}</p>
        `;
    } catch (error) {
        console.error("Error al obtener evoluciones:", error);
    }
}

// ✅ Llamar a la función para obtener los detalles
if (pokemonId) {
    obtenerDetallePokemon(pokemonId);
}


