import React, { useState } from 'react';

export function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique</button>
    </div>
  );
}