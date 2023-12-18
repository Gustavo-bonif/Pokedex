
const corpo = document.getElementById('container')
const numero = sessionStorage.getItem('individuo');
const id  = numero-1;


function convertePokemonIndividual(pokemon) {
    // return `<h1> BOM Dia Mundo!</h1> ${pokemon.name}`
}


// (function(){

//     pokeApi.getPokemons(id, 1)
//     .then((pokemons = []) => {
//         const newHTML = pokemons.map(convertePokemonIndividual).join('')
//         corpo.innerHTML = newHTML
//     })

// })()



//corpo.innerHTML = convertePokemonIndividual();




sessionStorage.removeItem('individuo');
