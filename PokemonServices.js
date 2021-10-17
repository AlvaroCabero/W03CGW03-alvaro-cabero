class PokemonServices {
  urlAPI;
  constructor(url) {
    this.urlAPI = url;
  }
  async getPokemon() {
    const response = await fetch(this.urlAPI);
    const pokemonList = await response.json();
    return pokemonList;
  }
}
export default PokemonServices;
