const seccionpokemons = document.querySelector('.seccion-pokemons');
const prevButton = document.getElementById('Anterior');
const nextButton = document.getElementById('Siguiente');
const pageInfo = document.getElementById('page-info');
const filtroTipo = document.getElementById('seleccion-tipo');
let currentPage = 1;
const limit = 20; // Número de Pokémon por página
let listaFiltrada = []; // Aquí guardaremos la lista de Pokémon filtrados
let tipoSeleccionado = "todos"; // Tipo seleccionado por el usuario

const buscador = document.getElementById('buscador');
const botonBuscar = document.getElementById('boton-buscar');

// ✅ Evento al hacer clic en el botón de búsqueda
buscador.addEventListener('input', async () => {
    let filtro = buscador.value.toLowerCase().trim(); // Convertimos el input a minúsculas

    if (filtro === '') {
        mostrarPagina(); // Si está vacío, mostramos todo
        return;
    }

    // Si la lista está vacía, obtenemos los datos
    if (listaFiltrada.length === 0) {
        await obtenerPokemons();
    }

    // Depuración: Verificar si Pikachu está en la lista
    console.log(listaFiltrada.map(p => p.name)); // Ver qué nombres tenemos

    let resultados = listaFiltrada.filter(pokemon => {
        let nombre = pokemon.name.toLowerCase(); // Convertimos el nombre a minúsculas
        let numero = pokemon.url.split('/').filter(Boolean).pop(); // Extraemos el ID

        return nombre.includes(filtro) || numero === filtro; // Coincidencia por nombre o ID
    });

    if (resultados.length > 0) {
        mostrarResultadosBusqueda(resultados);
    } else {
        seccionpokemons.innerHTML = "<p>No se encontraron Pokémon.</p>";
    }
});

// ✅ Función para mostrar solo los Pokémon filtrados
async function mostrarResultadosBusqueda(resultados) {
    seccionpokemons.innerHTML = resultados.length > 0 ? '' : '<p>No se encontraron Pokémon.</p>';

    const pokemonData = await Promise.all(
        resultados.map(async (poke) => {
            const res = await fetch(poke.url);
            return res.json();
        })
    );

    pokemonData.forEach(mostrarPokemon);
}

// ✅ Mapeo de nombres de tipo en español a inglés (como los usa la API)
const typeMapping = {
    "agua": "water",
    "acero": "steel",
    "bicho": "bug",
    "dragon": "dragon",
    "electrico": "electric",
    "fuego": "fire",
    "fantasma": "ghost",
    "hada": "fairy",
    "hielo": "ice",
    "lucha": "fighting",
    "normal": "normal",
    "planta": "grass",
    "psiquico": "psychic",
    "roca": "rock",
    "siniestro": "dark",
    "tierra": "ground",
    "veneno": "poison",
    "volador": "flying",
};

// ✅ Evento para cambiar el tipo de Pokémon filtrado
filtroTipo.addEventListener('change', async () => {
    tipoSeleccionado = filtroTipo.value;
    currentPage = 1; // Reiniciar a la primera página
    await obtenerPokemons();
    mostrarPagina();
});

// ✅ Función para obtener todos los Pokémon filtrados por tipo o paginados
async function obtenerPokemons() {
    seccionpokemons.innerHTML = `
    <div id="loading">
        <img src='imagenes/pokeball.gif' alt='Cargando...'>
    </div>`;
    
    try {
        if (tipoSeleccionado === "todos") {
            // Modo normal (paginación de la lista general)
            let URL = `https://pokeapi.co/api/v2/pokemon/?limit=11000&offset=0`;
            const response = await fetch(URL);
            const data = await response.json();
            let musicaLab = document.getElementById("oak");
                
            musicaLab.setAttribute("src", "1-04. Oak's Laboratory.mp3");
            
            musicaLab.play();
            
            listaFiltrada = data.results;
        } else {
            // Filtrar por tipo (obtenemos TODOS los Pokémon de ese tipo)
            let tipoIngles = typeMapping[tipoSeleccionado];
            const response = await fetch(`https://pokeapi.co/api/v2/type/${tipoIngles}`);
            const data = await response.json();
            if (tipoIngles === "ghost"){
                let musicaLab = document.getElementById("oak");
                
                musicaLab.setAttribute("src", "1-32. Pokémon Tower.mp3");
                
                musicaLab.play();

            } else {
                let musicaLab = document.getElementById("oak");
                
                musicaLab.setAttribute("src", "1-04. Oak's Laboratory.mp3");
                
                musicaLab.play();
            }
            listaFiltrada = data.pokemon.map(p => p.pokemon); // Guardamos solo los Pokémon
        }

        mostrarPagina();
    } catch (error) {
        seccionpokemons.innerHTML = "<p>Error al cargar Pokémon.</p>";
        console.error("Error al obtener Pokémon:", error);
    }
}

// ✅ Función para mostrar los Pokémon de la página actual
async function mostrarPagina() {
    seccionpokemons.innerHTML = "<p>Cargando Pokémon...</p>";

    let inicio = (currentPage - 1) * limit;
    let fin = inicio + limit;
    let pokemonsPagina = listaFiltrada.slice(inicio, fin); // Cortamos solo los Pokémon de esta página

    const pokemonData = await Promise.all(
        pokemonsPagina.map(async (poke) => {
            const res = await fetch(poke.url);
            return res.json();
        })
    );

    seccionpokemons.innerHTML = ''; // Limpiar antes de agregar
    pokemonData.forEach(mostrarPokemon);

    actualizarPaginacion();
}

// ✅ Función para actualizar la paginación
function actualizarPaginacion() {
    pageInfo.textContent = `Página ${currentPage} / ${Math.ceil(listaFiltrada.length / limit)}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage * limit >= listaFiltrada.length;
}

// ✅ Botones de paginación
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        mostrarPagina();
    }
});

nextButton.addEventListener('click', () => {
    if ((currentPage * limit) < listaFiltrada.length) {
        currentPage++;
        mostrarPagina();
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
    imgPOkemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
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
            divPokemon.style.borderColor = "#00c70c";
            tipoPokemon.style.backgroundColor = "#7CFC00";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#00c70c"
            })
            break;
        case "poison":
            divPokemon.style.backgroundImage = "url(imagenes/fondoVeneno.png)";
            divPokemon.style.borderColor = "#a217b8";
            tipoPokemon.style.backgroundColor = "#8A2BE2";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "red";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#a217b8"
            })
            break;
        case "fire":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFuegovolteado.png)";
            tipoPokemon.style.backgroundColor = "#FF4500";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "#FF4500";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "red"
            });
            break;
        case "flying":
            divPokemon.style.backgroundImage = "url(imagenes/fondoVolador.png)";
            divPokemon.style.borderColor = "#f7dff1";
            tipoPokemon.style.backgroundColor = "#87CEEB";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "#3dc7ef";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#f7dff1"
            });
            break;
        case "water":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAgua.png)";
            divPokemon.style.borderColor = "#0070ff";
            tipoPokemon.style.backgroundColor = "#00BFFF";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "blue";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#0070ff"
            });
            break;
        case "bug":
            divPokemon.style.backgroundImage = "url(imagenes/fondoBicho.png)";
            divPokemon.style.borderColor = "#92ff2c";
            tipoPokemon.style.backgroundColor = "#32CD32";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "#729f3f";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#92ff2c"
            });
            break;
        case "normal":
            divPokemon.style.backgroundImage = "url(imagenes/fondoNormales.png)";
            divPokemon.style.borderColor = "#b6b6b6";
            tipoPokemon.style.backgroundColor = "#A9A9A9";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "blue";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#b6b6b6"
            });
            break;
        case "electric":
            divPokemon.style.backgroundImage = "url(imagenes/fondoElectrico.png)";
            divPokemon.style.borderColor = "#f6ff31";
            tipoPokemon.style.backgroundColor = "#FFD700";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#f6ff31";
            });
            break;
        case "ground":
            divPokemon.style.backgroundImage = "url(imagenes/fondoTierra.png)";
            divPokemon.style.borderColor = "#eccb0f";
            tipoPokemon.style.backgroundColor = "#DAA520";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#eccb0f";
            });
            break;
        case "fairy":
            divPokemon.style.backgroundImage = "url(imagenes/fondoHada.png)";
            divPokemon.style.borderColor = "#ffa0b4"; 
            tipoPokemon.style.backgroundColor = "#FF69B4";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#ffa0b4";
            });
            break;
        case "fighting":
            divPokemon.style.backgroundImage ="url(imagenes/fondoLucha.png)";
            divPokemon.style.borderColor = "#a00000";
            tipoPokemon.style.backgroundColor = "#B22222";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#B22222";
            });
            break;
        case "psychic":
            divPokemon.style.backgroundImage = "url(imagenes/fondoPsiquico.png)";
            divPokemon.style.borderColor = "#ba71f4";
            tipoPokemon.style.backgroundColor = "#FF1493";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#ba71f4";
            });
            break;
        case "rock":
            divPokemon.style.backgroundImage = "url(imagenes/fondoRoca.png)";
            divPokemon.style.borderColor = "#7f5618";
            tipoPokemon.style.backgroundColor = "#A0522D";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "green";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#7f5618";
            });
            break;
        case "steel":
            divPokemon.style.backgroundImage = "url(imagenes/fondoAcero.png)"
            divPokemon.style.borderColor = "#d0d0d0"; 
            tipoPokemon.style.backgroundColor = "#C0C0C0";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "silver";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#d0d0d0";
            });
            break;
        case "ice":
            divPokemon.style.backgroundImage = "url(imagenes/fondoHielo.png)";
            divPokemon.style.borderColor = "#70f0ff";
            tipoPokemon.style.backgroundColor = "#00BFFF";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "silver";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#70f0ff";
            });
            break;
        case "ghost":
            divPokemon.style.backgroundImage = "url(imagenes/fondoFantasma.png)";
            divPokemon.style.borderColor = "#5d4aa7"; 
            tipoPokemon.style.backgroundColor = "#4B0082";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "silver";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#5d4aa7";
            });
            break;
        case "dragon":
            divPokemon.style.backgroundImage = "url(imagenes/fondoDragon.png)";
            divPokemon.style.borderColor = "#a9e794"; 
            tipoPokemon.style.backgroundColor = "#0000FF";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "silver";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#a9e794";
            });
            break;
        case "dark":
            divPokemon.style.backgroundImage = "url(imagenes/fondoSiniestro.png)";
            divPokemon.style.borderColor = "#4c517e"; 
            tipoPokemon.style.backgroundColor = "#676a89";
            divPokemon.addEventListener("mouseover", () =>{
                divPokemon.style.borderColor = "#000000";
            });
            divPokemon.addEventListener("mouseout", () =>{
                divPokemon.style.borderColor = "#4c517e";
            });
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
                tipoPokemon2.style.backgroundColor = "#676a89";
                break;
        }
        
    }

    divPokemon.addEventListener('click', () => {
        window.location.href = `detalle.html?id=${pokemon.id}`;
    });

    divPokemon.appendChild(divTipoPokemon);
    seccionpokemons.appendChild(divPokemon);
    console.log(pokemon);
}

obtenerPokemons();