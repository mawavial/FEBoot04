"use client";
import Link from "next/link";
import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Função segura para sessionStorage apenas no client
function getSessionStorage() {
  if (typeof window === "undefined") return undefined;
  return window.sessionStorage;
}

const useRelatoriosStore = create(
  persist(
    (set, get) => ({
      relatorios: [],
      addRelatorio: (relatorio) =>
        set({ relatorios: [...get().relatorios, relatorio] }),
    }),
    {
      name: "relatorios-session",
      storage: {
        getItem: (name) => {
          const storage = getSessionStorage();
          return storage ? JSON.parse(storage.getItem(name)) : null;
        },
        setItem: (name, value) => {
          const storage = getSessionStorage();
          if (storage) storage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          const storage = getSessionStorage();
          if (storage) storage.removeItem(name);
        },
      },
    }
  )
);

export default function RelatoriosPage() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const { relatorios, addRelatorio } = useRelatoriosStore();

  function handleSubmit(e) {
    e.preventDefault();
    if (!titulo.trim()) return;
    addRelatorio({
      titulo,
      descricao,
      data: new Date().toLocaleString(),
    });
    setTitulo("");
    setDescricao("");
   }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-yellow-300 p-8 relative">
      <Link
        href="/"
        className="absolute top-8 left-8 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg"
      >
        Voltar para Início
      </Link>
      <h1 className="text-4xl font-extrabold mb-6 text-white drop-shadow-lg tracking-wide">Relatórios</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 rounded-2xl shadow-xl p-8 w-full max-w-lg mb-8 flex flex-col gap-4 border-4 border-purple-400"
      >
        <label className="font-bold text-purple-700 text-lg">Título</label>
        <input
          className="rounded px-4 py-2 border-2 border-purple focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder:text-purple-400 placeholder:font-semibold"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Título do relatório"
          style={{ background: "rgba(245,245,255,0.95)", color: "#4B006E" }}
        />
        <label className="font-bold text-purple-700 text-lg">Descrição</label>
        <textarea
          className="rounded px-4 py-2 border-2 border-purple focus:outline-none focus:ring-2 focus:ring-purple-700 placeholder:text-purple-400 placeholder:font-semibold"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição do relatório"
          style={{ background: "rgba(245,245,255,0.95)", color: "#4B006E" }}
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform"
        >
          Salvar Relatório
        </button>
      </form>
      <div className="w-full max-w-lg">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">Relatórios Salvos</h2>
        {relatorios.length === 0 ? (
          <p className="text-gray-600">Nenhum relatório salvo ainda.</p>
        ) : (
          <ul className="space-y-4">
            {relatorios.map((r, idx) => (
              <li
                key={idx}
                className="bg-white rounded-xl shadow p-4 border-l-4 border-purple-400"
              >
                <div className="font-bold text-lg text-purple-700">{r.titulo}</div>
                <div className="text-purple-700 mb-1">{r.descricao}</div>
                <div className="text-xs text-purple-400">{r.data}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}