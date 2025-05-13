import { useEffect, useState } from "react";

//Precisa de tratamento para SSR (não existe localStorage no servidor)


export default function Namer() {

  const [nome, setNome] = useState(localStorage.getItem('nome') || "");

  useEffect(() => {
    console.log("Nome atualizado:", nome);
  }, [nome]);


  const handleChangeLocalStorage = () => {
    localStorage.setItem("nome", nome);
    setNome(localStorage.getItem('nome'))
  }

  const handleRemoveFromLocalStorage = () => { 
    localStorage.removeItem("nome");
    setNome("");
  }


  return (
    <div className="App">
      <h1>Nome: {nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={handleChangeLocalStorage}>
        Salva no browser
      </button>
      <button onClick={handleRemoveFromLocalStorage}>
        Remove do browser
      </button>
    </div>
  );
}