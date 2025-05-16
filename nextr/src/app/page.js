'use client';
import Image from "next/image";
import { Suspense } from "react";
import Saudacao from "../Components/Saudacao";
import Link from "next/link"; // Adicione esta linha

// | Sigla   | Nome                   | Onde acontece a renderização?   | Quando é usado (mas nem sempre)?                |
// | ------- | ---------------------- | ------------------------------- | ----------------------------------------------- |
// | **SSR** | Server-Side Rendering  | No servidor, em cada requisição | Ex: páginas dinâmicas com dados sensíveis       |
// | **SSG** | Static Site Generation | No servidor, **em build time**  | Ex: blogs, páginas que não mudam com frequência |
// | **CSR** | Client-Side Rendering  | No navegador (React padrão)     | Ex: SPAs comuns, dashboards                     |

export default function Home() {

  //  console.log(localStorage.getItem('nome'))

  // const [nome, setNome] = useState("Alysson");
  // const isClient = typeof window !== "undefined";
  // console.log('%c%s', 'color: #00bf00', isClient);

  // useEffect(() => {
  // const nome = localStorage.getItem("nome");
  // setNome(nome ? nome : "Visitante");
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold underline ">Conteudo Inicial</h1>
      {/* { Saudacao() } */}
      {/* {Math.random() > 0.5 ? <p>Olá, bom dia</p> : <p>Olá, boa tarde</p>} */}
      <Link
        href="/pokemon"
        className="inline-block mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Ver Pokémons
      </Link>
         <Link
        href="/dashboard"
        className="inline-block mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Ver Dash
      </Link>
    </div>
  );
}

{/* <Layout>
  <Template>
    <ErrorBoundary fallback={<Error />}></ErrorBoundary>
    <Suspense fallback={<div>Espera ai!</div>}>
    <ErrorBoundary fallback={<NotFound />}>
      <Page />
    </ErrorBoundary>
    </Suspense>
  </Template>
</Layout> */}