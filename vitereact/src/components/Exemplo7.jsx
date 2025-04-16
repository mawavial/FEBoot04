import { useRef } from "react";

export function Exemplo7() {
  const inputRef = useRef();

  const focar = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focar}>Foca em mim</button>
    </div>
  );
}
