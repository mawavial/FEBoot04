const contaBancaria2 = {
  saldo: 1000,
  depositar: (valor) => {
      this.saldo += valor; // Isso dará erro!
      console.log(`Novo saldo: ${this.saldo}`);
  }
};
contaBancaria2.depositar(500);