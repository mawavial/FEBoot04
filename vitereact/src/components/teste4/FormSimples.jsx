export default function FormSimples({ onSubmit }) {
  onSubmit = onSubmit || (() => {}); 
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit('ok'); }}>
      <button type="submit">Enviar</button>
    </form>
  );
}