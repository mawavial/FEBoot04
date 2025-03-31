class Cachorro extends Animal {
  constructor(nome, raca) {
      super(nome, "Cachorro");
      this.raca = raca;
  }
  emitirSom() {
      console.log("Au au!");
  }
}
const dog = new Cachorro("Max", "Labrador");
console.log(dog.raca); // Labrador
dog.emitirSom(); // Au au!