"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function PokemonDetalhes() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    async function fetchPokemon() {
      setLoading(true);
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    }
    fetchPokemon();
  }, [id]);

  if (!id) {
    return (
      <div className="p-8 text-center bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 min-h-screen">
        <p className="mb-4 text-2xl font-bold text-white drop-shadow">Nenhum Pokémon selecionado.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400 text-purple-900 font-bold rounded shadow-lg hover:bg-yellow-300 transition"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar
        </Link>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="p-8 text-center bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 min-h-screen">
        <p className="text-2xl font-bold text-white drop-shadow">Carregando detalhes...</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-3xl shadow-2xl mt-8 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 border-4 border-yellow-300">
      <Link href="/pokemon" className="text-yellow-300 font-bold underline mb-4 inline-block hover:text-yellow-200 transition">← Voltar para lista</Link>
      <div className="flex flex-col items-center">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-56 h-56 mb-4 drop-shadow-2xl bg-white rounded-full border-4 border-yellow-300"
        />
        <h1 className="text-5xl font-extrabold capitalize mb-2 text-white drop-shadow-lg tracking-wide">{pokemon.name}</h1>
        <div className="text-yellow-200 mb-2 text-xl font-bold drop-shadow">N° {pokemon.id}</div>
        <div className="mb-2">
          <span className="font-semibold text-white">Tipos:</span>{" "}
          {pokemon.types.map((t) => (
            <span
              key={t.type.name}
              className="inline-block rounded px-3 py-1 mx-1 text-base capitalize font-bold"
              style={{
                background:
                  t.type.name === "fire"
                    ? "#FF7043"
                    : t.type.name === "water"
                    ? "#42A5F5"
                    : t.type.name === "grass"
                    ? "#66BB6A"
                    : t.type.name === "electric"
                    ? "#FFD600"
                    : t.type.name === "psychic"
                    ? "#AB47BC"
                    : t.type.name === "ice"
                    ? "#4FC3F7"
                    : t.type.name === "dragon"
                    ? "#7E57C2"
                    : t.type.name === "dark"
                    ? "#212121"
                    : t.type.name === "fairy"
                    ? "#F06292"
                    : t.type.name === "fighting"
                    ? "#D84315"
                    : t.type.name === "flying"
                    ? "#90CAF9"
                    : t.type.name === "ghost"
                    ? "#7E57C2"
                    : t.type.name === "ground"
                    ? "#A1887F"
                    : t.type.name === "poison"
                    ? "#BA68C8"
                    : t.type.name === "rock"
                    ? "#BCAAA4"
                    : t.type.name === "steel"
                    ? "#90A4AE"
                    : t.type.name === "bug"
                    ? "#9CCC65"
                    : t.type.name === "normal"
                    ? "#F5F5F5"
                    : "#FFF",
                color:
                  ["dark", "psychic", "dragon", "ghost"].includes(t.type.name)
                    ? "#fff"
                    : "#222",
                border: "2px solid #fff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            >
              {t.type.name}
            </span>
          ))}
        </div>
        <div className="mb-2 text-white font-semibold">
          <span>Altura:</span> <span className="font-bold text-yellow-200">{pokemon.height / 10} m</span>
        </div>
        <div className="mb-2 text-white font-semibold">
          <span>Peso:</span> <span className="font-bold text-yellow-200">{pokemon.weight / 10} kg</span>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-white">Habilidades:</span>{" "}
          {pokemon.abilities.map((a) => (
            <span
              key={a.ability.name}
              className="inline-block bg-yellow-200 text-purple-900 font-bold rounded px-2 py-1 mx-1 text-sm capitalize shadow"
            >
              {a.ability.name}
            </span>
          ))}
        </div>
        <div className="mb-4 w-full">
          <span className="font-semibold text-white">Status Base:</span>
          <ul className="mt-2">
            {pokemon.stats.map((s) => (
              <li key={s.stat.name} className="flex items-center mb-1">
                <span className="w-32 capitalize text-yellow-100 font-bold">{s.stat.name}:</span>
                <span className="font-mono text-white">{s.base_stat}</span>
                <div className="ml-2 flex-1 bg-white rounded h-2">
                  <div
                    className="h-2 rounded"
                    style={{
                      width: `${(s.base_stat / 200) * 100}%`,
                      background:
                        s.stat.name === "hp"
                          ? "#FF5252"
                          : s.stat.name === "attack"
                          ? "#FFB300"
                          : s.stat.name === "defense"
                          ? "#42A5F5"
                          : "#AB47BC",
                    }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-4 w-full">
          <span className="font-semibold text-white">Movimentos:</span>
          <ul className="flex flex-wrap mt-2">
            {pokemon.moves.slice(0, 10).map((m) => (
              <li
                key={m.move.name}
                className="bg-pink-200 text-purple-900 font-bold rounded px-2 py-1 m-1 text-xs capitalize shadow"
              >
                {m.move.name}
              </li>
            ))}
            {pokemon.moves.length > 10 && (
              <li className="text-yellow-100 px-2 py-1 m-1 text-xs">
                ...e mais {pokemon.moves.length - 10}
              </li>
            )}
          </ul>
        </div>
        <div className="mb-4 w-full">
          <span className="font-semibold text-white">Experiência Base:</span>{" "}
          <span className="text-yellow-200 font-bold">{pokemon.base_experience}</span>
        </div>
        <div className="mb-4 w-full">
          <span className="font-semibold text-white">Formas:</span>{" "}
          {pokemon.forms.map((f) => (
            <span key={f.name} className="capitalize mx-1 text-yellow-100 font-bold">{f.name}</span>
          ))}
        </div>
        <div className="mb-4 w-full">
          <span className="font-semibold text-white">Ordem:</span>{" "}
          <span className="text-yellow-200 font-bold">{pokemon.order}</span>
        </div>
      </div>
    </div>
  );
}