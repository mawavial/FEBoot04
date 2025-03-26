function criarContador() {
  let contador = 0;
  return function() {
      contador++;
      console.log(contador);
  };
}

const meuContador = criarContador();
meuContador(); // 1
meuContador(); // 2
meuContador(); // 3