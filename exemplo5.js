class Animal {
  constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
  }
  emitirSom() {
      console.log("Som genérico de animal");
  }
}



const cachorro = new Animal("Rex", "Cachorro");
console.log(cachorro.nome); // Rex
cachorro.emitirSom(); // Som genérico de animal