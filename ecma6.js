

// A importância do ECMAScript 6 (ES6/2015)
// O ECMAScript 6 (ou ES6), lançado em 2015, foi a versão que modernizou o JavaScript, trazendo diversos recursos que tornaram o código mais organizado, eficiente e fácil de manter.

//======================================================================

// Declaração de Variáveis: var vs let/const
// Antes do ES6, só existia o var, que tinha alguns problemas, como escopo global desnecessário e hoisting confuso.

// Antes (com var):

function exemplo() {
  if (true) {
      var x = 10; 
  }
  console.log(x); // 10 (mesmo fora do bloco, porque var ignora escopo de bloco)
}
exemplo();
// Depois (com let e const):

function exemplo() {
  if (true) {
      let x = 10;
  }
  console.log(x); // Erro! x não está definido fora do bloco
}
exemplo();
// Agora, let e const respeitam o escopo de bloco, tornando o código mais seguro e previsível.

// Arrow Functions: Funções mais curtas e concisas
// Antes do ES6, funções eram definidas com function, o que podia gerar confusão com o this dentro de objetos.

// Antes (função tradicional):

function soma(a, b) {
  return a + b;
}
console.log(soma(5, 3)); // 8
// Depois (com Arrow Function):

const soma = (a, b) => a + b;
console.log(soma(5, 3)); // 8
// Além de mais curto, o this das Arrow Functions é fixo, evitando problemas dentro de objetos ou eventos.

// Template Literals: Concatenar strings ficou mais fácil
// Antes do ES6, concatenar strings com variáveis era chato e confuso.

// Antes:

let nome = "João";
let mensagem = "Olá, " + nome + "! Bem-vindo!";
console.log(mensagem);
// Depois (com Template Literals usando crase ` )

let nome = "João";
let mensagem = `Olá, ${nome}! Bem-vindo!`;
console.log(mensagem);
// Agora dá para interpolar variáveis sem precisar usar o operador + toda hora.

// Destructuring: Extraindo valores de objetos e arrays de forma simples
// Antes do ES6, pegar valores dentro de um objeto exigia várias linhas.


let pessoa = { nome: "Ana", idade: 25 };
let nome = pessoa.nome;
let idade = pessoa.idade;
console.log(nome, idade);
Depois (com Destructuring):

let pessoa = { nome: "Ana", idade: 25 };
let { nome, idade } = pessoa; 
console.log(nome, idade);
// Agora, os valores são extraídos diretamente, deixando o código mais limpo.

// Promises: Lidando com código assíncrono de forma eficiente
// Antes do ES6, o JavaScript usava callbacks, o que tornava o código confuso e difícil de manter (Callback Hell).

// Antes (usando callbacks):

function buscarDados(callback) {
  setTimeout(() => {
      callback("Dados recebidos!");
  }, 2000);
}
buscarDados((resultado) => {
  console.log(resultado);
});
// Depois (com Promises):

function buscarDados() {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve("Dados recebidos!");
      }, 2000);
  });
}
buscarDados().then((resultado) => console.log(resultado));
// Agora, com Promises, podemos encadear .then() para evitar o famoso Callback Hell.




//================================================================================================================================================================================================\\



