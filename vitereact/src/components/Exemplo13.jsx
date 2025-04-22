

export function Exemplo13() {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");
  
  function validarEmail() {
    if (!email.includes('@')) setErro('Email inválido');
    else setErro('');
  }
  
  <input
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    onBlur={validarEmail}
  />
  {erro && <p className="erro">{erro}</p>}
}