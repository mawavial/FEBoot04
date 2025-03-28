function buscarDados() { 
  return new Promise((resolve, reject) => { 
      setTimeout(() => { 
          const sucesso = Math.random() > 0.3; // 70% de chance de sucesso 
          if (sucesso) { 
              resolve('Dados carregados!'); 
          } else { 
              reject('Erro ao buscar os dados'); 
          } 
      }, 2000); 
  }); 
} 

buscarDados() 
  .then(resultado => console.log(resultado)) // Executa se a Promise for resolvida 
  .catch(erro => console.error(erro)); // Executa se a Promise for rejeitada 
