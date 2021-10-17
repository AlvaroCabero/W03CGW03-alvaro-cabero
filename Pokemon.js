import Component from "./Component.js";
import Page from "./Page.js";
import PokemonServices from "./PokemonServices.js";
class Pokemon extends Component {
  urlPokemon;
  pokemon;
  name;
  img;
  number;
  types;
  constructor(parentElement, urlPokemon) {
    super(parentElement, "main__pokemon-list", "li");
    this.urlPokemon = urlPokemon;

    this.printPokemon();
  }

  printPokemon() {
    (async () => {
      const pokemonService = new PokemonServices(this.urlPokemon);
      const pokemonData = await pokemonService.getPokemon();
      console.log(pokemonData);
      this.pokemon = pokemonData;
      this.name = pokemonData.name;
      this.img = pokemonData.sprites.other["official-artwork"].front_default;
      this.id = pokemonData.id;

      //pokemonData.types.forEach((type) => this.types.push(type.type.name));
    })();
    const pokemonPrinted = `<div class="pokemon-title">
    <p class="pokemon__name">${this.name}</p></div>
                  <img
                src="${this.img}"
                alt="${this.name}"
                class="pokemon__img"
              />
              <p class="pokemon__number">#${this.id}</p>
              </ul>
              
    `;

    /* <ul class="pokemon__types">
              ${
              //   this.types.length < 2
              //     ? `<li class="pokemon__type">${this.types[0]}</li>`
              //     : `<li class="pokemon__type">${this.types[0]}</li>
              //   <li class="pokemon__type">${this.types[1]}</li>`
              // }*/

    document.querySelector(".main").innerHTML = pokemonPrinted;
  }
}

export default Pokemon;
