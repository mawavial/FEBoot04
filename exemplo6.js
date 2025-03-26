function exemploVar() {
  if (true) {
      var x = 'Visível em toda a função';
  }
  console.log(x); // Funciona!
}

function exemploLetConst() {
  if (true) {
      let y = 'Escopo de bloco';
      const z = 'Também escopo de bloco';
  }
  // console.log(y); // Erro!
  // console.log(z); // Erro!
}

exemploVar();
exemploLetConst();