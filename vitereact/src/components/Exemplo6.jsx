import React, { useRef } from "react";



export function Exemplo6() {
  const nomeRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    console.log("Nome:", nomeRef.current.value);
    console.log("Password:", passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nome:
          <input ref={nomeRef} type="text" no-verify={true} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input ref={passwordRef} type="password" no-verify={true} />
        </label>
      </div>
      <button type="submit">Submit</button>
      <button type="reset" >Cancel</button>
    </form>
  );
}