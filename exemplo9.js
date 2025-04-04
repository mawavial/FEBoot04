
// O(n) - Recursão linear
function somaRecursiva(arr) {
  if (arr.length === 0) {
    return 0; // Caso base: array vazio
  }
  return arr[0] + somaRecursiva(arr.slice(1)); // Soma o primeiro elemento e chama recursivamente o resto do array
}

// Exemplo de uso:
const numeros = [1, 2, 3, 4, 5];
console.log(somaRecursiva(numeros)); // Saída: 15