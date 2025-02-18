divPokemon.addEventListener("click", async () => {
    mostrarDetallesPokemon(pokemon);
});

async function mostrarDetallesPokemon(pokemon) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
    const data = await response.json();

    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();

    // Obtener evoluciones
    const evolutionResponse = await fetch(speciesData.evolution_chain.url);
    const evolutionData = await evolutionResponse.json();
    const evoluciones = obtenerEvoluciones(evolutionData.chain);

    // Obtener movimientos
    const movimientos = data.moves.slice(0, 5).map(move => move.move.name).join(', ');

    // Mostrar información en el modal
    const modal = document.getElementById("modal");
    modal.innerHTML = `
        <h2>${data.name} (#${data.id})</h2>
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <p><strong>Tipo:</strong> ${data.types.map(t => t.type.name).join(", ")}</p>
        <p><strong>Movimientos:</strong> ${movimientos}</p>
        <p><strong>Evoluciones:</strong> ${evoluciones}</p>
        <button onclick="cerrarModal()">Cerrar</button>
    `;

    modal.style.display = "block";
}

// Función para obtener las evoluciones
function obtenerEvoluciones(chain) {
    let evoluciones = [];
    let actual = chain;

    while (actual) {
        evoluciones.push(actual.species.name);
        actual = actual.evolves_to[0];
    }

    return evoluciones.join(" → ");
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById("modal").style.display = "none";
}
