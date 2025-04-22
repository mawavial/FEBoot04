

export function Exemplo10() {

  return (
    <>
      <input
        type="checkbox"
        checked={optIn}
        onChange={e => setOptIn(e.target.checked)}
      />

      <input
        type="radio"
        name="genero"
        value="M"
        checked={genero === 'M'}
        onChange={e => setGenero(e.target.value)}
      />
    </>
  );
}