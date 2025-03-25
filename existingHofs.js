//map
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]


//filter
const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); // [2, 4]


//setTimeout
setTimeout(() => {
  console.log("Executado após 2 segundos!");
}, 2000);
