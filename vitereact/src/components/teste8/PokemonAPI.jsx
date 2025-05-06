import React, { useState, useEffect } from 'react';

const PokemonAPI = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pokemonName, setPokemonName] = useState('pikachu');

  const fetchPokemon = async (name) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error('Pokémon não encontrado');
      }
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon(pokemonName);
  }, [pokemonName]);

  const handleSearch = (e) => {
    e.preventDefault();
    const input = e.target.elements.pokemonName.value.trim().toLowerCase();
    if (input) {
      setPokemonName(input);
    }
  };

  return (
    <div>
      <h1>Pokémon API</h1>
      <form onSubmit={handleSearch}>
        <input type="text" name="pokemonName" placeholder="Digite o nome do Pokémon" />
        <button type="submit">Buscar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name.toUpperCase()}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
          <p>Tipos:</p>
          <ul>
            {pokemon.types.map((type) => (
              <li key={type.type.name}>{type.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PokemonAPI;