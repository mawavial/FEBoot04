function saudacao() {
  console.log(`Olá, meu nome é ${this.nome}`);
}

const pessoa = { nome: "Diana" };

// Criando uma nova função onde `this` sempre será `pessoa`
const saudacaoDiana = saudacao.bind(pessoa);

saudacaoDiana(); // Olá, meu nome é Diana