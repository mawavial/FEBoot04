import { useEffect, useState } from "react";

export function Exemplo5() {
  const [nome, setNome] = useState("");
  return (
    <input
      type="text"
      value={nome}
      onChange={e => setNome(e.target.value)}
    />
  );
}
