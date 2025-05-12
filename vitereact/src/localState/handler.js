export default function handleSetNome(nome) {
  if(nome){
    const result = nome.toString() ? nome : ""

    result.toUpper()
    return result
  }
  return ""
}


function reducer(state, action) {
  switch (action.type) {
    case "SET_NOME":
      return { ...state, nome: action.payload };
    default:
      return state;
  }
}