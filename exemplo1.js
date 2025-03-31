const contaBancaria = {
  saldo: 1000,
  depositar: function(valor) {
      this.saldo += valor;
      console.log(`Novo saldo: ${this.saldo}`);
  }
};
contaBancaria.depositar(500);
