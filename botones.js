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
        musica.setAttribute("src", "1-06. The Road To Veridian ~ From Pallet.mp3");
        musica.load();
        musica.play();
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
async function mostrarDetalle(pokemon, species) {
    const contenedor = document.querySelector('.datosPokemon');
    

    // Crear contenedor principal de la carta del Pokémon
    const cartaPokemon = document.createElement('div');
    cartaPokemon.classList.add('cartaPokemonIndividual');
    const detallesPokemon = document.createElement('div');
    detallesPokemon.classList.add('detallesPokemon'); // Agregar clase

    // Crear elementos dinámicamente
    const titulo = document.createElement('h2');
    titulo.textContent = `${pokemon.name} (#${pokemon.id})`;

    const imagen = document.createElement('img');
    imagen.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    imagen.alt = pokemon.name;

    const tipo = document.createElement('p');
    tipo.innerHTML = `<strong>Tipo:</strong> ${pokemon.types[0].type.name}`;

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

    cartaPokemon.appendChild(titulo);
    cartaPokemon.appendChild(imagen);

    cartaPokemon.appendChild(tipo);

    switch (pokemon.types[0].type.name) {
        case "grass":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondopkmnplanta.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#00c70c";
            tipo.style.backgroundColor = "#7CFC00";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#00c70c"
            })
            break;
        case "poison":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoVeneno.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#a217b8";
            tipo.style.backgroundColor = "#8A2BE2";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "red";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#a217b8"
            })
            break;
        case "fire":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoFuegovolteado.png)";
            cartaPokemon.style.backgroundSize = "cover";
            tipo.style.backgroundColor = "#FF4500";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "#FF4500";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "red"
            });
            break;
        case "flying":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoVolador.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#f7dff1";
            tipo.style.backgroundColor = "#87CEEB";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "blue";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#f7dff1"
            });
            break;
        case "water":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoAgua.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#0070ff";
            tipo.style.backgroundColor = "#00BFFF";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "blue";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#0070ff"
            });
            break;
        case "bug":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoBicho.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#92ff2c";
            tipo.style.backgroundColor = "#32CD32";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "blue";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#92ff2c"
            });
            break;
        case "normal":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoNormales.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#b6b6b6";
            tipo.style.backgroundColor = "#A9A9A9";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "blue";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#b6b6b6"
            });
            break;
        case "electric":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoElectrico.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#f6ff31";
            tipo.style.backgroundColor = "#FFD700";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#f6ff31";
            });
            break;
        case "ground":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoTierra.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#eccb0f";
            tipo.style.backgroundColor = "#DAA520";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#eccb0f";
            });
            break;
        case "fairy":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoHada.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#ffa0b4";
            tipo.style.backgroundColor = "#FF69B4";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#ffa0b4";
            });
            break;
        case "fighting":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoLucha.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#a00000";
            tipo.style.backgroundColor = "#B22222";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#B22222";
            });
            break;
        case "psychic":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoPsiquico.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#ba71f4";
            tipo.style.backgroundColor = "#FF1493";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#ba71f4";
            });
            break;
        case "rock":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoRoca.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#7f5618";
            tipo.style.backgroundColor = "#A0522D";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "green";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#7f5618";
            });
            break;
        case "steel":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoAcero.png)"
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#d0d0d0";
            tipo.style.backgroundColor = "#C0C0C0";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "silver";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#d0d0d0";
            });
            break;
        case "ice":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoHielo.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#70f0ff";
            tipo.style.backgroundColor = "#00BFFF";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "silver";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#70f0ff";
            });
            break;
        case "ghost":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoFantasma.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#5d4aa7";
            tipo.style.backgroundColor = "#4B0082";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "silver";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#5d4aa7";
            });
            break;
        case "dragon":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoDragon.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#a9e794";
            tipo.style.backgroundColor = "#0000FF";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "silver";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#a9e794";
            });
            break;
        case "dark":
            cartaPokemon.style.backgroundImage = "url(imagenes/fondoSiniestro.png)";
            cartaPokemon.style.backgroundSize = "cover";
            cartaPokemon.style.borderColor = "#4c517e";
            tipo.style.backgroundColor = "#676a89";
            cartaPokemon.addEventListener("mouseover", () => {
                cartaPokemon.style.borderColor = "#000000";
            });
            cartaPokemon.addEventListener("mouseout", () => {
                cartaPokemon.style.borderColor = "#4c517e";
            });
            break;
    }

    // Crear la tabla de estadísticas
    const tablaStats = document.createElement('table');
    tablaStats.classList.add('tabla-estadisticas');

    // Encabezado de la tabla
    tablaStats.innerHTML = `
        <tr>
            <th>Estadística</th>
            <th>Valor</th>
        </tr>`;

    // Agregar cada estadística como una fila en la tabla
    pokemon.stats.forEach(stat => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td><strong>${stat.stat.name.toUpperCase()}</strong></td>
            <td>
                <div class="barra-contenedor">
                    <div class="barra-progreso" style="width: ${stat.base_stat}%;"></div>
                </div>
            </td>
        `;
        tablaStats.appendChild(fila);
    });

    // Agregar la tabla a la carta
    detallesPokemon.appendChild(tablaStats);


    // Añadir los elementos creados al contenedor de la carta del Pokémon

    cartaPokemon.appendChild(peso);
    cartaPokemon.appendChild(altura);
    cartaPokemon.appendChild(habilidades);
    detallesPokemon.appendChild(ataques);
    detallesPokemon.appendChild(descripcion);

    // Agregar la carta al contenedor principal
    contenedor.appendChild(cartaPokemon);
    contenedor.appendChild(detallesPokemon);

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

        // Extraer las evoluciones en el orden correcto
        while (actual) {
            evoluciones.push(actual.species.name);
            actual = actual.evolves_to.length ? actual.evolves_to[0] : null;
        }

        // Crear los tres contenedores para las evoluciones
        const primeraEvolucion = document.createElement('div');
        primeraEvolucion.classList.add('primeraEvolucion');
        const segundaEvolucion = document.createElement('div');
        segundaEvolucion.classList.add('segundaEvolucion');
        const terceraEvolucion = document.createElement('div');
        terceraEvolucion.classList.add('terceraEvolucion'); // Agregar clase

        primeraEvolucion.addEventListener('click', () => {
            window.location.href = `detalle.html?id=${evoluciones[0]}`;
        });

        segundaEvolucion.addEventListener('click', () => {
            window.location.href = `detalle.html?id=${evoluciones[1]}`;
        });

        terceraEvolucion.addEventListener('click', () => {
            window.location.href = `detalle.html?id=${evoluciones[2]}`;
        });

        // Añadir imágenes de las evoluciones según corresponda en cada contenedor
        if (evoluciones[0]) {
            const imagenEvo = await obtenerImagenEvolucion(evoluciones[0]);
            const imgEvo = document.createElement('img');
            imgEvo.classList.add("imgPrimeraEvolucion");
            imgEvo.src = imagenEvo;
            imgEvo.alt = evoluciones[0];
            primeraEvolucion.appendChild(imgEvo);
        }

        if (evoluciones[1]) {
            const imagenEvo = await obtenerImagenEvolucion(evoluciones[1]);
            const imgEvo = document.createElement('img');
            imgEvo.classList.add("imgSegundaEvolucion");
            imgEvo.src = imagenEvo;
            imgEvo.alt = evoluciones[1];
            segundaEvolucion.appendChild(imgEvo);
        }

        if (evoluciones[2]) {
            const imagenEvo = await obtenerImagenEvolucion(evoluciones[2]);
            const imgEvo = document.createElement('img');
            imgEvo.classList.add("imgTerceraEvolucion");
            imgEvo.src = imagenEvo;
            imgEvo.alt = evoluciones[2];
            terceraEvolucion.appendChild(imgEvo);
        }

        // Agregar los contenedores al DOM
        const contenedorEvoluciones = document.querySelector('.evoluciones');
        if (primeraEvolucion.childNodes.length > 0) contenedorEvoluciones.appendChild(primeraEvolucion);
        if (segundaEvolucion.childNodes.length > 0) contenedorEvoluciones.appendChild(segundaEvolucion);
        if (terceraEvolucion.childNodes.length > 0) contenedorEvoluciones.appendChild(terceraEvolucion);

    } catch (error) {
        console.error("Error al obtener evoluciones:", error);
    }
}

// ✅ Función para obtener la imagen de una evolución
async function obtenerImagenEvolucion(nombre) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    const pokemon = await res.json();
    return pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;;
}

// ✅ Llamar a la función para obtener los detalles
if (pokemonId) {
    obtenerDetallePokemon(pokemonId);
}

