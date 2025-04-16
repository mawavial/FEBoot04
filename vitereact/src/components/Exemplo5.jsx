import { useEffect, useState } from "react";

export function Exemplo5() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer); // 🧹 Limpeza
  }, []);

  return <h2>{hora.toLocaleTimeString()}</h2>;
}
