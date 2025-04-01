function apresentar(profissao) {
  console.log(`Meu nome é ${this.nome} e sou ${profissao}`);
}

const pessoa1 = { nome: "Alice" };
const pessoa2 = { nome: "Bob" };

apresentar.call(pessoa1, "engenheira"); // Meu nome é Alice e sou engenheira
apresentar.call(pessoa2, "programador"); // Meu nome é Bob e sou programador