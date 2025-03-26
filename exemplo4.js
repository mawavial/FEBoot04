function errado() {
  semDeclaracao = 'Isso é global sem querer';
}

errado();
console.log(semDeclaracao); // Opa! Virou global sem querer