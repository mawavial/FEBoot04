

import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <p>Essa é a página de dashboard</p>
       <Link
        href="/dashboard/detalhes"
        className="mt-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
      >
        Ir para Detalhes
      </Link>
    
    </div>
  );
}