

export function Exemplo12() {

  return (
    <select value={opcao} onChange={e => setOpcao(e.target.value)}>
      <option value="">Escolha</option>
      <option value="1">Um</option>
      <option value="2">Dois</option>
    </select>
  );
}