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
    .then(res => {
        throw new Error('Erro inesperado!');
    })
    .catch(err => console.error('Pegamos o erro:', err));