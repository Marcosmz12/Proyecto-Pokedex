const listanavegador = document.querySelector('.lista-navegador');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <= 151; 1++){
    fetch(URL + i)
    .then(response => response.json())
    .then(data => mostarPokemon(data))
}


function mostrarPokemon(pokemon){
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
        <div class="pokemons">
            <img src="../imagenes/WIN_20250129_12_38_42_Pro.jpg" alt="Foto de un Pokemon">
            <p>Descripción </p>
            <p></p>
        </div>`;
    listanavegador.appendChild(div);
}