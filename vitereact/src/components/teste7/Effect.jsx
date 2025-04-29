import { useEffect, useState } from 'react';

export default function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <p>{hora}</p>;
}
