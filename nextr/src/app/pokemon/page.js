'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const TYPE_COLORS = {
  fire: "#FF7043",
  water: "#42A5F5",
  grass: "#66BB6A",
  electric: "#FFD600",
  psychic: "#AB47BC",
  ice: "#4FC3F7",
  dragon: "#7E57C2",
  dark: "#212121",
  fairy: "#F06292",
  fighting: "#D84315",
  flying: "#90CAF9",
  ghost: "#7E57C2",
  ground: "#A1887F",
  poison: "#BA68C8",
  rock: "#BCAAA4",
  steel: "#90A4AE",
  bug: "#9CCC65",
  normal: "#F5F5F5",
};

export default function Page() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const POKEMONS_PER_PAGE = 18;

  useEffect(() => {
    async function fetchPokemons() {
      setLoading(true);
      const offset = (page - 1) * POKEMONS_PER_PAGE;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMONS_PER_PAGE}&offset=${offset}`);
      const data = await res.json();
      const details = await Promise.all(
        data?.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          return res.json();
        })
      );
      setPokemons(details);
      setLoading(false);
    }
    fetchPokemons();
  }, [page]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-br from-yellow-300 via-pink-400 to-purple-500">
    <Link
      href="/"
      className="absolute top-8 left-8 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-bold shadow-lg hover:scale-105 transition-transform text-lg text-center z-10"
    >
      Voltar para Início
    </Link>
      <h1 className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg tracking-wide">Pokédex</h1>
      {loading ? (
        <p className="text-xl text-white font-bold animate-pulse">Carregando...</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pokemons.map((pokemon) => (
            <li
              key={pokemon.id}
              className="flex items-center bg-white/90 rounded-2xl shadow-xl p-4 space-x-4 cursor-pointer hover:scale-105 hover:shadow-2xl transition-all border-4 border-yellow-300"
            >
              <Link
                href={`/pokemon/detalhes?id=${pokemon.id}`}
                className="flex items-center space-x-4 w-full"
                style={{ textDecoration: "none" }}
              >
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={72}
                  height={72}
                  className="w-20 h-20 drop-shadow-lg bg-white rounded-full border-2 border-purple-400"
                  unoptimized
                />
                <div>
                  <div className="font-extrabold capitalize text-2xl text-purple-700 drop-shadow">{pokemon.name}</div>
                  <div className="text-yellow-600 text-base font-bold">N° {pokemon.id}</div>
                  <div className="text-sm mt-1">
                    {pokemon.types.map((t) => (
                      <span
                        key={t.type.name}
                        className="inline-block rounded px-2 py-1 mx-1 text-xs capitalize font-bold shadow"
                        style={{
                          background: TYPE_COLORS[t.type.name] || "#FFF",
                          color: ["dark", "psychic", "dragon", "ghost"].includes(t.type.name) ? "#fff" : "#222",
                          border: "1.5px solid #fff",
                        }}
                      >
                        {t.type.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="flex gap-4 mt-10">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className={`px-5 py-2 rounded-full font-bold shadow-lg transition-all ${
            page === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-pink-500 text-white hover:bg-pink-600"
          }`}
        >
          Anterior
        </button>
        <span className="text-white font-extrabold text-lg px-4 py-2 rounded-full bg-purple-700 shadow">Página {page}</span>
        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-5 py-2 rounded-full bg-yellow-400 text-purple-900 font-bold shadow-lg hover:bg-yellow-300 transition-all"
        >
          Próxima
        </button>
      </div>
    </div>
  );
}