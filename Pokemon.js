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
  constructor(parentNode, urlPokemon) {
    super(parentNode, "main__pokemon-element", "li");
    this.parentNode;
    this.urlPokemon = urlPokemon;
    console.log(parentNode + urlPokemon);

    (async () => {
      const pokemonService = new PokemonServices(this.urlPokemon);
      const pokemonData = await pokemonService.getPokemon();
      console.log("hola:" + pokemonData);
      this.pokemon = pokemonData;
      this.name = pokemonData.name;
      this.img = pokemonData.sprites.other["official-artwork"].front_default;
      this.id = pokemonData.id;
      this.printPokemon();
      //pokemonData.types.forEach((type) => this.types.push(type.type.name));
    })();
  }

  printPokemon() {
    console.log("hey" + this.urlPokemon);
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

    document.querySelector(".main__pokemon-element").innerHTML +=
      pokemonPrinted;
  }
}

export default Pokemon;
