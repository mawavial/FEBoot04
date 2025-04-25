import { useEffect, useState } from "react";

export function Exemplo5() {
  const [nome, setNome] = useState({ name: ''});


   handleSendToBackEnd = () => { 
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ first_Name: nome }),
      headers: {
        "Content-Type": "application/json",
      },
    });
   }

  useEffect(() => {
    console.log('%c%s', 'color: #00a3cc', nome);
  }, [nome]);

  return (
    <>
    <input
      type="text"
      value={nome}
      onChange={e => setNome(e.target.value)}
    />
    <input
      type="text"
      value={nome}
      onChange={e => setNome(e.target.value)}
    />
    <input
      type="text"
      value={nome}
      onChange={e => setNome(e.target.value)}
    />
    <button onClick={handleSendToBackEnd}>Enviar</button>
    </>
  );
}