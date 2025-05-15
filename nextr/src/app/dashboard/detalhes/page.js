"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
      <div className="bg-white/80 rounded-2xl shadow-2xl p-10 max-w-lg w-full flex flex-col items-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 mb-4">
          Detalhes
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Essa é a página de detalhes. Aproveite o visual moderno e colorido!
        </p>
        <button
          className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
          onClick={() => router.push("/dashboard")}
        >
          Voltar ao Dashboard
        </button>
      </div>
    </div>
  );
}