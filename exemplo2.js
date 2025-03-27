let v1 = 'Sou local';
(function minhaFuncao() {
  
  console.log(v1); // Funciona
})()

console.log(v1); // Erro! v1 não está definida no escopo global