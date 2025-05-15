//Coisas que geram problemas de hydration
// Uso de window, localStorage	Só existem no cliente
// Date()	Pode ser diferente no servidor
// Math.random()	Gera valor diferente em cada lado
// Dados não sincronizados	Como estado que depende do cliente


export default function Saudacao() {
  return <p>Olá, {new Date().getHours() < 12 ? "bom dia" : "boa tarde"}</p>;
}