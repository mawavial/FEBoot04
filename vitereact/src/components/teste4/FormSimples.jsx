export default function FormSimples({ onSubmit }) {
  onSubmit = onSubmit || (() => {alert('Erro no servidor')}); 
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit('ok'); }}>
      <button type="submit">Enviar</button>
    </form>
  );
}