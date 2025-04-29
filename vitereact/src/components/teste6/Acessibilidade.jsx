
import React from 'react';

export function Acessibilidade() {
  return (
    <form>
      <label htmlFor="nome">Nome:</label>
      <input id="nome" type="text" />
      <button type="submit">Enviar</button>
    </form>
  );
}