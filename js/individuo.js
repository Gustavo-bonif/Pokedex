
const corpo = document.getElementById('container')
const numero = sessionStorage.getItem('individuo');
const id = numero - 1;


function convertePokemonIndividual(pokemon) {
    return `
    
    <section id="container" class="${pokemon.type}">

        <header>
            <div id="header-direito">
                <p id="seta">
                    <a href="index.html">
                        <span class="material-symbols-outlined">
                            keyboard_backspace
                        </span>
                    </a>
                </p>
                <p id="nome">${pokemon.name}</p>
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
            </div>

            <div id="header-esquerdo">
                <p id="favorito">
                    <span class="material-symbols-outlined">
                        favorite
                    </span>
                </p>
                <p id="numero">#${pokemon.number}</p>
            </div>
        </header>

         <div class="container-imagem"><img src="${pokemon.image}" alt="${pokemon.name}" id="imagem-pokemon"></div> 

         <div class="container-imagem">
            <img src="imagens/pokebola-simbolo.png" alt="Pokebola-Simbolo" id="simbolo-pokebola">
         </div>

         <div class="container-imagem">
            <img src="imagens/points.png" alt="detalhes-de-infeite" id="pontos">
         </div>

        <main>
            <nav>
                <ul id="navegacao">
                    <li>About</li>
                    <li>BaseStats</li>
                    <li>Evolution</li>
                    <li>Moves</li>
                </ul>
            </nav>

            <section class="altera about ">

                <section class="container-informacoes">
                    <div class="esquerdo-informacoes">
                        <ul>
                            <li>Height</li>
                            <li>Weight</li>
                            <li>Abilites</li>
                        </ul>
                    </div>
                    <div class="direito-informacoes">
                        <ul>
                            <li>${pokemon.height} m</li>
                            <li>${pokemon.weight} kg</li>
                            <ol>
                            ${pokemon.abilities.map((ability) => `${ability}`).join(', ')}
                            </ol>
                        </ul>
                    </div>
                </section>
                <section class="container-informacoes">
                    <div class="esquerdo-informacoes">
                        <h3>Breeding</h3>
                        <ul>
                            <li id="texto-genero">Gender</li>
                            <li>Egg Groups</li>
                            <li>Egg Cycle</li>
                        </ul>
                    </div>
                    <div class="direito-informacoes">
                        <ul>
                            <li id="generos">
                                <span class="material-symbols-outlined">
                                    male
                                </span>
                                <span class="material-symbols-outlined">
                                    female</span>
                            </li>
                            <li>Monster</li>
                            <li>Grass</li>
                        </ul>
                    </div>
                </section>
            </section>

            <section class="altera baseStats">
                <section id="status">
                </section>
                <div id="type-defenses"></div>
            </section>


        </main>
    </section>
    
    `
}




pokeApi.getPokemons(id, 1)
    .then((pokemons = []) => {
        const newHTML = pokemons.map(convertePokemonIndividual).join('')
        corpo.innerHTML = newHTML
    })


sessionStorage.removeItem('individuo');
