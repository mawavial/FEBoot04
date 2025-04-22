

export function Exemplo14() {
  const [form, setForm] = useState({ nome: '', email: '' });
  const [erros, setErros] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validar = () => {
    const novoErro = {};
    if (!form.nome) novoErro.nome = 'Nome obrigatório';
    if (!form.email.includes('@')) novoErro.email = 'Email inválido';
    setErros(novoErro);
    return Object.keys(novoErro).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!validar()) return;
    console.log('Enviando', form);
    // enviar via fetch/axios
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
        {erros.nome && <span>{erros.nome}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {erros.email && <span>{erros.email}</span>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
}