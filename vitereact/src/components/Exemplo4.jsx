
export function Exemplo4() {

  const items = ['sobe', 'desce', 'esquerda', 'direita', 'bonde do trigrao'];

  return (<>{
    items?.map(item => (
      <li key={item}>{item}</li>
      
    ))
  }</>);
}
