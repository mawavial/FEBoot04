function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const usuarios = {
              1: { nome: 'Alice', idade: 25 },
              2: { nome: 'Bob', idade: 30 }
          };

          if (usuarios[id]) {
              resolve(usuarios[id]); // Sucesso
          } else {
              reject(new Error('Usuário não encontrado')); // Falha
          }
      }, 2000);
  });
}

// Chamando a Promise e tratando o erro
buscarUsuario(3)
  .then(usuario => console.log('Usuário encontrado:', usuario))
  .catch(erro => console.error('Erro:', erro.message));
