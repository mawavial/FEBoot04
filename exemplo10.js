carregarDados()
  .then(res => res + ' com sucesso')
  .then(res => console.log(res))
  .catch(err => console.error(err));


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