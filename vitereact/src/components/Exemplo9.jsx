

export function Exemplo9() {
  const nome = "Reactzão";
  const lista = ["Item 1", "Item 2", "Item 3"];
  const isAdmin = true;

  return (
    <div>
      <h1>Olá, {nome}!</h1>
      <p>Esse parágrafo está usando JSX</p>
      <ul>
        {lista.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {isAdmin && <p>Bem-vindo, administrador!</p>}
      {isAdmin ? <p>Bem-vindo, administrador!</p> : <p>Bem-vindo, usuário!</p>}
    </div>
  );
}