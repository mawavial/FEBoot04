function fetchUsuarios() {
  return new Promise(resolve => setTimeout(() => resolve({ usuarios: ['Alice', 'Bob'] }), 1000));
}

function fetchPedidos() {
  return new Promise(resolve => setTimeout(() => resolve({ pedidos: [123, 456] }), 1500));
}

function fetchProdutos() {
  return new Promise(resolve => setTimeout(() => resolve({ produtos: ['Livro', 'Mouse'] }), 2000));
}

function fetchPagamentos() {
  return new Promise(resolve => setTimeout(() => resolve({ pagamentos: ['Cartão', 'Boleto'] }), 2500));
}

Promise.all([fetchUsuarios(), fetchPedidos(), fetchProdutos(), fetchPagamentos()])
  .then(([usuarios, pedidos, produtos, pagamentos]) => {
      console.log('Usuários:', usuarios);
      console.log('Pedidos:', pedidos);
      console.log('Produtos:', produtos);
      console.log('Pagamentos:', pagamentos);
  })
  .catch(err => console.error('Erro em alguma promise:', err));