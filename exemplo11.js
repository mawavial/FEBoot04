const obj = Object.create(null);
console.log(obj.toString); // undefined

console.log(Object.prototype.hasOwnProperty.call(obj, "chave")); // false