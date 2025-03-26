carregarDados()
    .then(res => {
        throw new Error('Erro inesperado!');
    })
    .catch(err => console.error('Pegamos o erro:', err));
    
Promise.all([
  carregarDados(),
  new Promise((resolve) => setTimeout(() => resolve('Outra promessa'), 1000))
])
.then(res => console.log(res))
.catch(err => console.error(err));