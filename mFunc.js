//function declaration

console.log(doSum(5, 6)); // 11


function doSum(a, b) {
  return a + b;
}





//function expression


const doMultSec = function (a, b) {
  return a * b;
};

console.log(doMultSec(5, 6)); // 30



//arrow functions


const sayHello = (name) => `Olá, ${name}!`;

console.log(sayHello("Carlos")); // Olá, Carlos!


//named function expression

const moreCarlos = function greeting(name) {
  return `Olá, ${name}!`;
};

console.log(moreCarlos("Carlos")); // Olá, Carlos!


//IIEF Immediately Invoked Function Expression

(function () {
  console.log("Executando imediatamente!");
})();


//Generator Function
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = contador();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2


//Async Function

async function fetchData() {
  const response = await fetch("https://api.exemplo.com/dados");
  const data = await response.json();
  console.log(data);
}

fetchData();
