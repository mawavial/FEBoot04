import React, { useState, useReducer } from "react";



function reducer(state, action) {
  switch (action.type) {
    case "SET_NOME":
      return { ...state, nome: action.payload };
    default:
      return state;
  }
}

export default function Namer() {
  const initialState = {
    nome: "Mateuzo",
  };
  const [nome, setNome] = useState(initialState.nome);
  const [nameState, nameDispatcher] = useReducer(reducer, initialState);

  setNome(handleSetNome(nome))

  
 
  return (
    <div className="App">
      <h1>Nome: {nameState.nome}</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button onClick={() => nameDispatcher({ type: "SET_NOME", payload: nome })}>
        Set Nome
      </button>
    </div>
  );
}