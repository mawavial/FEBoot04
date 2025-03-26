async function executar() {
  try {
      let resultado = await carregarDados();
      console.log(resultado);
  } catch (erro) {
      console.log('Erro capturado:', erro);
  }
}

const resultadoFinal = await executar();

console.log(resultadoFinal);