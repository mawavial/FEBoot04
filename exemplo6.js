async function fetchPokemon() { 
  try { 
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
    const data = await response.json(); 
    console.log("Nome do Pokémon:", data.name); 
  } catch (error) { 
    console.error("Erro ao buscar Pokémon", error); 
  } 
} 
 
fetchPokemon(); 
