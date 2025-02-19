const detallesPokemon = document.querySelector('detalle-pokemon');
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
        document.querySelector('.detalle-pokemon').appendChild(crearElementoError());
    }
}

// ✅ Función para crear el mensaje de error
function crearElementoError() {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Error al cargar el Pokémon.";
    return errorMessage;
}

// ✅ Función para mostrar los detalles del Pokémon
function mostrarDetalle(pokemon, species) {
    const contenedor = document.querySelector('.detalle-pokemon');

    // Crear contenedor principal de la carta del Pokémon
    const cartaPokemon = document.createElement('div');
    cartaPokemon.classList.add('cartaPokemonIndividual'); // Agregar clase

    // Crear elementos dinámicamente
    const titulo = document.createElement('h2');
    titulo.textContent = `${pokemon.name} (#${pokemon.id})`;

    const imagen = document.createElement('img');
    imagen.src = pokemon.sprites.front_default;
    imagen.alt = pokemon.name;

    const tipo = document.createElement('p');
    tipo.innerHTML = `<strong>Tipo:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}`;

    const peso = document.createElement('p');
    peso.innerHTML = `<strong>Peso:</strong> ${pokemon.weight / 10} kg`;

    const altura = document.createElement('p');
    altura.innerHTML = `<strong>Altura:</strong> ${pokemon.height / 10} m`;

    const habilidades = document.createElement('p');
    habilidades.innerHTML = `<strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}`;

    // Crear lista de ataques
    const ataques = document.createElement('ul');
    ataques.innerHTML = "<strong>Ataques:</strong>";
    pokemon.moves.slice(0, 5).forEach(move => {
        const li = document.createElement('li');
        li.textContent = move.move.name;
        ataques.appendChild(li);
    });

    const descripcion = document.createElement('p');
    descripcion.innerHTML = `<strong>Descripción:</strong> ${species.flavor_text_entries.find(e => e.language.name === "es").flavor_text}`;

    // Añadir los elementos creados al contenedor de la carta del Pokémon
    cartaPokemon.appendChild(titulo);
    cartaPokemon.appendChild(imagen);
    cartaPokemon.appendChild(tipo);
    cartaPokemon.appendChild(peso);
    cartaPokemon.appendChild(altura);
    cartaPokemon.appendChild(habilidades);
    cartaPokemon.appendChild(ataques);
    cartaPokemon.appendChild(descripcion);

    // Agregar la carta al contenedor principal
    contenedor.appendChild(cartaPokemon);

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

        // Crear el contenedor de evoluciones con imágenes
        const evolucionesElement = document.createElement('div');
        evolucionesElement.classList.add('evolucionespokemon'); // Agregar clase

        // Agregar imágenes y nombres de las evoluciones
        for (const evolucion of evoluciones) {
            const imagenEvo = await obtenerImagenEvolucion(evolucion);
            const imgEvo = document.createElement('img');
            imgEvo.src = imagenEvo;
            imgEvo.alt = evolucion;
            evolucionesElement.appendChild(imgEvo);
        }

        document.querySelector('.detalle-pokemon').appendChild(evolucionesElement);
    } catch (error) {
        console.error("Error al obtener evoluciones:", error);
    }
}

// ✅ Función para obtener la imagen de una evolución
async function obtenerImagenEvolucion(nombre) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const pokemon = await res.json();
    return pokemon.sprites.front_default;
}

// ✅ Llamar a la función para obtener los detalles
if (pokemonId) {
    obtenerDetallePokemon(pokemonId);
}
