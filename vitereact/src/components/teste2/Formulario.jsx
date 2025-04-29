import React, { useState } from 'react';

export function Formulario() {
  const [nome, setNome] = useState('');
  const [erro, setErro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.length < 3) {
      setErro('Nome muito curto');
    } else {
      setErro('');
      alert('Enviado');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome" />
      <button type="submit">Enviar</button>
      {erro && <p>{erro}</p>}
    </form>
  );
}