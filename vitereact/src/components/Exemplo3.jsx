export function Exemplo3() {
  const count = 5; // Simulando o número de tarefas
  const mensagem = count > 10
    ? "Você tem muitas tarefas"
    : "Tudo sob controle";
  return <h1>{mensagem}</h1>;

}