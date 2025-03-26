for (var i = 0; i < 3; i++) {
  setTimeout(function() {
      console.log(i);
  }, 1000);
}
// Saída: 3, 3, 3 (porque var não tem escopo de bloco)