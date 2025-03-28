const fetch1 = fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
const fetch2 = fetch("https://pokeapi.co/api/v2/pokemon/charizard"); 
const fetch3 = fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur"); 
 
Promise.all([fetch1, fetch2, fetch3]) 
  .then((responses) => { 
    return Promise.all(responses.map((res) => res.json())); 
  }) 
  .then((pokemons) => { 
    pokemons.forEach((pokemon) => console.log("Pokémon:", pokemon.name)); 
  }) 
  .catch((error) => console.error("Erro em uma das requisições", error)); 
