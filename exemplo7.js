const Gato = class {
  constructor(nome) {
      this.nome = nome;
  }
  miar() {
      console.log("Miau!");
  }
};
const gato = new Gato("Mingau");
gato.miar(); // Miau!