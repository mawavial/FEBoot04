export function Exemplo3() {

  let a = 'Olá, mundo!'
  return(
  <div>
    <h1>Olá, Reactzão!</h1>
    <p>Esse parágrafo está usando JSX</p>
    <button onClick={() => a = 'Tudo muda, tudo mudou, nada irá mudar' }>Botão</button>
    <p>{a}</p>
  </div>)
  
}