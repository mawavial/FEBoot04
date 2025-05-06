import { useAtom } from 'jotai';
import { contadorAtom } from './store';

export function Contador() {
  const [contador, setContador] = useAtom(contadorAtom);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador((c) => c + 1)}>+</button>
      <button onClick={() => setContador((c) => c - 1)}>-</button>
    </div>
  );
}