import Component from "./Component.js";
import Page from "./Page.js";
import PokemonServices from "./PokemonServices.js";
class Pokemon extends Component {
  urlPokeAPI;
  pokemon;
  name;
  img;
  number;
  types;
  constructor(parentElement) {
    super(parentElement, "main__pokemon-list", "li");
    this.urlPokeAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    this.getPokemons();
    this.printPokemon();
  }

  (async getPokemons() {
    const pokemonService = new PokemonServices(this.urlPokeAPI);
    const pokemonData = await pokemonService.getPokemon();
    this.pokemon = pokemonData;
    this.name = pokemonData.name;
    this.img = pokemonData.sprites.other['official-artwork'].front_default;
    this.id = pokemonData.id;
  pokemonData.types.forEach((type) =>
        this.types.push(type.type.name)
      );
    })();

printpokemon
