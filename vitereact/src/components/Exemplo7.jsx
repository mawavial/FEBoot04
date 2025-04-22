
export function Exemplo7() {
  const handleSubmit = e => {
    e.preventDefault(); // evita reload
    // coletar dados do state
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* campos */}
      <button type="submit">Enviar</button>
    </form>
  );
}
