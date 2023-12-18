
const corpo = document.getElementById('container')
const id = sessionStorage.getItem('individuo');




function convertePokemonIndividual(pokemon){
    return`<h1> BOM Dia Mundo!</h1>`
}


     pokeApi.getPokemons(5,1)
     .then((pokemons = []) => {
        const newHTML = pokemons.map(convertePokemonIndividual).join('')
         corpo.innerHTML = newHTML
     })

     corpo.innerHTML = convertePokemonIndividual();




sessionStorage.removeItem('individuo');
