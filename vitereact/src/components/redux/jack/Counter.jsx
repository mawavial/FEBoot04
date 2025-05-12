import { useSelector, useDispatch } from 'react-redux';
import { increment } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Valor: {count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}