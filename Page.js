import Component from "./Component.js";
import PokemonServices from "./PokemonServices.js";
import Pokemon from "./Pokemon.js";
class Page extends Component {
  urlPokeAPI;
  pokemonList;
  constructor() {
    super("body", "pokemon-webpage", "div");
    this.urlPokeAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    this.addHeader();
    this.addSection();
    this.addFooter();
  }

  addHeader() {
    const header = `<div class="title">
    <h1 class="main-title">POKEMON</h1>
    <img src="https://i0.wp.com/www.citricmagazine.com/wp-content/uploads/2016/08/pokemon-go-1574003_960_720.png?fit=821%2C720&ssl=1&w=640" alt="pokemon silhouette" className="title__img" />
    </div>`;
    document.querySelector("header").innerHTML = header;
  }
  addSection() {
    const section = `<section className="main__container">
    <ul className="main__pokemon-list"></ul>
</section>`;

    document.querySelector("main").innerHTML = section;

    (async () => {
      const pokemonService = new PokemonServices(this.urlPokeAPI);
      const pokemonData = await pokemonService.getPokemon();
      this.pokemonList = pokemonData.results;
      this.pokemonList.map((pokemon) => new Pokemon(ulTag, pokemon.url));
    })();
  }
  addFooter() {
    const footer = `<div class="footer__container">
    <a href="" className="footer__text">made in AlvaroCabero</a>
</div>`;
    document.querySelector("footer").innerHTML = footer;
  }
}

export default Page;
