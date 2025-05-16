import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg tracking-wide">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
        {/* Card 1 */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 border-blue-400 hover:scale-105 transition-all">
          <span className="text-4xl mb-2">📊</span>
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Estatísticas</h2>
          <p className="text-gray-700 mb-4 text-center">Veja gráficos e dados de uso do sistema.</p>
          <button className="px-4 py-2 rounded-full bg-blue-500 text-white font-semibold shadow hover:bg-blue-600 transition">Ver Estatísticas</button>
        </div>
        {/* Card 2 */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 border-purple-400 hover:scale-105 transition-all">
          <span className="text-4xl mb-2">📝</span>
          <h2 className="text-2xl font-bold text-purple-700 mb-2">Relatórios</h2>
          <p className="text-gray-700 mb-4 text-center">Acesse relatórios detalhados e exporte dados.</p>
          <Link
            href="/dashboard/relatorios"
            className="px-4 py-2 rounded-full bg-purple-500 text-white font-semibold shadow hover:bg-purple-600 transition"
          >
            Ver Relatórios
          </Link>
        </div>
        {/* Card 3 */}
        <div className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center border-4 border-pink-400 hover:scale-105 transition-all">
          <span className="text-4xl mb-2">⚙️</span>
          <h2 className="text-2xl font-bold text-pink-700 mb-2">Configurações</h2>
          <p className="text-gray-700 mb-4 text-center">Personalize sua experiência e preferências.</p>
          <button className="px-4 py-2 rounded-full bg-pink-500 text-white font-semibold shadow hover:bg-pink-600 transition">Configurar</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 mt-12">
        <Link
          href="/dashboard/detalhes"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg text-center"
        >
          Ir para Detalhes
        </Link>
        <Link
          href="/"
          className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg text-center"
        >
          Voltar para Início
        </Link>
      </div>
    </div>
  );
}