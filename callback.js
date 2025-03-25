function sayHello(name, callback) {
  console.log(`Olá, ${name}!`);
  callback();
}

function goodbye() {
  console.log("Até logo!");
}

sayHello("Carlos", goodbye);
