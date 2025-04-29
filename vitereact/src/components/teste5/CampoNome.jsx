// CampoNome.jsx
import { useState } from 'react';

export function CampoNome() {
  const [nome, setNome] = useState('');
  return (
    <>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Olá, {nome || 'estranho'}!</p>
    </>
  );
}
