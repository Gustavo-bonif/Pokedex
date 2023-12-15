const pokemonlist = document.getElementById('lista-pokemons-id')
const carregarNovos = document.getElementById('carregarNovos')
const carregarAnteriores = document.getElementById('carregarAnteriores')
let offset = 0;
const limit = 9;

carregarNovos.addEventListener('click', () => {
    
        offset += limit
        carregaNovaLeva(offset, limit);
});

carregarAnteriores.addEventListener('click', () => {
    if (offset != 0) {
        offset -= limit
    }
    carregaNovaLeva(offset, limit);

});


function covertePokemonEmLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                </div>
            </li>
            `
}


function carregaNovaLeva(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map(covertePokemonEmLi).join('')
        pokemonlist.innerHTML = newHTML
    })

}




