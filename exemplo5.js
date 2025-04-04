/*
  Notação        Nome                  Exemplo
  O(1)           Tempo constante       Acesso direto a array
  O(n)           Tempo linear          Loop simples
  O(n²)          Tempo quadrático      Loops aninhados
  O(log n)       Tempo logarítmico     Busca binária
  O(2ⁿ)          Tempo exponencial     Fibonacci recursivo ruim
*/


// O(1) constante
function acessarPrimeiro(arr) {
  return arr[0]; // Sempre 1 operação
}
