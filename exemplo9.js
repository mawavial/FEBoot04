function carregarDados() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let sucesso = true;
          if (sucesso) {
              resolve('Dados carregados');
          } else {
              reject('Erro ao carregar');
          }
      }, 2000);
  });
}

carregarDados()
  .then(resultado => console.log(resultado))
  .catch(erro => console.log(erro));