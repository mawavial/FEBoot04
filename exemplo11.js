carregarDados()
    .then(res => {
        throw new Error('Erro inesperado!');
    })
    .catch(err => console.error('Pegamos o erro:', err));