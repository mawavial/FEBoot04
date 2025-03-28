fetch("https://pokeapi.co/api/v2/pokemon/pikachu") 
  .then((response) => response.json()) 
  .then((data) => { 
    console.log("Nome do Pokémon:", data.name); 
  }) 
  .catch((error) => { 
    console.error("Erro ao buscar dados", error); 
  }); 
