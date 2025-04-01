function apresentar(profissao, idade) {
  console.log(`Meu nome é ${this.nome}, sou ${profissao} e tenho ${idade} anos`);
}

const pessoa = { nome: "Carlos" };

apresentar.apply(pessoa, ["médico", 40]); // Meu nome é Carlos, sou médico e tenho 40 anos