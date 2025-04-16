const themeContext = React.createContext("claro");

function Exemplo6() {
  const tema = React.useContext(themeContext);
  return <button style={{ background: tema === "escuro" ? "#333" : "#fff" }}>Tema: {tema}</button>;
}
