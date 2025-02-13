const seccionpokemons = document.querySelector('.seccion-pokemons');
let URL = "https://pokeapi.co/api/v2/pokemon/";

for(let i = 1; i <= 151; i++){
    fetch(URL + i)
    .then(response => response.json())
    .then(data => mostrarPokemon(data))
}


function mostrarPokemon(pokemon){
    const divPokemon = document.createElement('div');
    const imgPOkemon = document.createElement('img');
    const numeroPokemon = document.createElement('p');
    const nombrePokemon = document.createElement('p');
    const divTipoPokemon = document.createElement('div');
    const tipoPokemon = document.createElement('span');
    
    div.classList.add('pokemon');
    numeroPokemon.textContent = `#${pokemon.id}`;
    nombrePokemon.textContent = pokemon.name;
    imgPOkemon.src = pokemon.sprites.front_default;
    divTipoPokemon.classList.add('tipo-pokemon');
    tipoPokemon.textContent = pokemon.types[0].type.name;
    if(pokemon.types.length > 1){
        const tipoPokemon2 = document.createElement('span');
        tipoPokemon2.textContent = pokemon.types[1].type.name;
        divTipoPokemon.appendChild(tipoPokemon);
    }
    seccionpokemons.appendChild(divPokemon);
    console.log(pokemon);
}