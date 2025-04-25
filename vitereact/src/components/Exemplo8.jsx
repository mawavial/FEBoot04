import React, { useRef } from "react";



export function Exemplo6() {
  const nomeRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {

    console.log("Nome:", nomeRef.current.value);
    console.log("Password:", passwordRef.current.value);
    fetch("http://localhost:8080/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "text/json",
      },
      body: JSON.stringify({
        nome: nomeRef.current.value,
        password: passwordRef.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  return (
<>      <div>
        <label>
          Nome:
          <input ref={nomeRef} type="text" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input ref={passwordRef} type="password" />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <button  onClick={handleCancel}>Cancel</button>
      </>
  );
}