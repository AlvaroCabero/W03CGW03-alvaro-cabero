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
  async createPokemon(pokemon) {
    let response = await fetch(this.urlAPI, {
      method: "POST",
      body: JSON.stringify(pokemon),
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    return response;
  }

  async deletePokemon(pokemon, id) {
    let response = await fetch(`${this.urlAPI}${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return true;
    }
    throw new Error("Errrrorrrr");
  }
}
export default PokemonServices;
