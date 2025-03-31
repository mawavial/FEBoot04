const pessoa = {
  nome: "Ana",
  idade: 25,
  profissao: "Desenvolvedora"
};

// Object.keys()
console.log(Object.keys(pessoa)); // ["nome", "idade", "profissao"]

//Object.values()
console.log(Object.values(pessoa)); // ["Ana", 25, "Desenvolvedora"]

//Object.assign()
const destino = {};
Object.assign(destino, pessoa);
console.log(destino);

//Object.freeze()
Object.freeze(pessoa);
pessoa.idade = 30; // Não tem efeito


//Object.seal()
Object.seal(pessoa);
pessoa.idade = 30; // Permitido
pessoa.sobrenome = "Silva"; // Não permitido
