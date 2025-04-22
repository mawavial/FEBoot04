
function Exemplo6() {
  const nomeRef = useRef();
  const handleSubmit = () => {
    console.log(nomeRef.current.value);
  };
  return <input ref={nomeRef} type="text" />;
}
