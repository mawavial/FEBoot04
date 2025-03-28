const fetchPromise = fetch("https://pokeapi.co/api/v2/pokemon/pikachu"); 
 
fetchPromise.then((response) => { 
  console.log("Resposta recebida:", response); 
}); 
 
console.log("Requisição iniciada…")

//pending
//fulfilled/resolved
//rejected