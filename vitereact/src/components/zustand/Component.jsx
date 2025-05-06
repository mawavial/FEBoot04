import {useContadorStore} from './store.jsx';


export function Contador() {
  const { contador, incrementar, decrementar } = useContadorStore();
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}