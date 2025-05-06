import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementar, decrementar } from './store';

export function Contador() {
  const contador = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => dispatch(incrementar())}>+</button>
      <button onClick={() => dispatch(decrementar())}>-</button>
    </div>
  );
}