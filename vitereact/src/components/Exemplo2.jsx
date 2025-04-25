import React from "react";

export const Exemplo2 = () => {
  const error = "Este é um erro!";
  const success = "Operação realizada com sucesso!";
  const showError = true; // Altere para false para testar
  const showSuccess = false; // Altere para true para testar

  return (
    <div>
      <h1>Exemplo de Uso de && e || no JSX</h1>
      
      {/* Exemplo de && */}
      <div>
        <h2>Operador &&</h2>
        {showError && <p className="erro">{error}</p>}
        {!showError && <p>Nenhum erro encontrado.</p>}
      </div>

      {/* Exemplo de || */}
      <div>
        <h2>Operador ||</h2>
        <p className="mensagem">
          { "undefined" || "Nenhuma mensagem de sucesso disponível."}
        </p>
      </div>
    </div>
  );
};

export default Exemplo2;