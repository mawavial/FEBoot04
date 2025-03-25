export const calculate = (a, b, callback) => callback(a, b);

export const sum = (a, b) => a + b;
export const sub = (a, b) => a - b;

console.log(calculate(5, 3, sum)); // 8
console.log(calculate(5, 3, sub)); // 2
