function pai() {
  let mensagem = "Olá, mundo!"; // Variável dentro do escopo da função pai
  
  function filho() {
      console.log(mensagem); // "filho" tem acesso a "mensagem" por causa do escopo léxico
  }
  
  return filho;
}

const minhaFuncao = pai(); // "pai" é executada, mas "filho" ainda existe
minhaFuncao(); // "Olá, mundo!"
