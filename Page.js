import Component from "./Component.js";
import PokemonServices from "./PokemonServices.js";
import Pokemon from "./Pokemon.js";
class Page extends Component {
  urlPokeAPI;
  pokemonList;
  constructor(parentNode) {
    super(parentNode, "pokemon-webpage", "div");
    this.urlPokeAPI = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10";
    this.addHeader();
    this.addSection();
    this.addFooter();
  }

  addHeader() {
    const header = `<div class="title">
    <h1 class="main-title">POKEMON</h1>
    <img src="./img/image.png" alt="pokemon silhouette" className="title__img" />
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
      console.log("Results Pokemon Data: " + pokemonData.results);
      this.pokemonList.map(
        (pokemon) =>
          new Pokemon(document.querySelector(".main__container"), pokemon.url)
      );
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
