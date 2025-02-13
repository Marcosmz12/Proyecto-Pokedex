const listanavegador = document.querySelector('.seccion-pokemons');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <= 151; i++){
    fetch(URL + i)
    .then(response => response.json())
    .then(data => mostrarPokemon(data))
}


function mostrarPokemon(pokemon){
    const divPokemon = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `<img src="" alt="">
                        <p></p>
                        <p>r</p>
                        <div class="tipo-pokemon">
                            <span id = "planta">Planta</span>
                            <span id = "veneno">Veneno</span>
                            </div>
                        </div>`;
    
    listanavegador.appendChild(divPokemon);
    console.log(pokemon);
}