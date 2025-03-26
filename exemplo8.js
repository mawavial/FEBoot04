function buscarDadosUsuario(id, callback) {
  setTimeout(() => {
      console.log(`Usuário ${id} encontrado.`);
      callback(null, { id, nome: "João" });
  }, 1000);
}

function buscarPedidos(usuario, callback) {
  setTimeout(() => {
      console.log(`Buscando pedidos para ${usuario.nome}...`);
      callback(null, ["Pedido 1", "Pedido 2", "Pedido 3"]);
  }, 1000);
}

function buscarDetalhesPedido(pedido, callback) {
  setTimeout(() => {
      console.log(`Buscando detalhes do ${pedido}...`);
      callback(null, { pedido, status: "Enviado" });
  }, 1000);
}

// Callback Hell - Chamadas aninhadas
buscarDadosUsuario(1, (erro, usuario) => {
  if (erro) return console.error(erro);
  
  buscarPedidos(usuario, (erro, pedidos) => {
      if (erro) return console.error(erro);
      
      buscarDetalhesPedido(pedidos[0], (erro, detalhes) => {
          if (erro) return console.error(erro);
          
          console.log("Detalhes do Pedido:", detalhes);
      });
  });
});
