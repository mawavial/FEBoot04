Promise.all([
  carregarDados(),
  new Promise((resolve) => setTimeout(() => resolve('Outra promessa'), 1000))
])
.then(res => console.log(res))
.catch(err => console.error(err));