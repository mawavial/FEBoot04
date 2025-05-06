import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PokemonAPI from './PokemonAPI';
import { act } from 'react';


global.fetch = jest.fn();

describe('PokemonAPI Component', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test('deve renderizar o formulário e o título', () => {
    render(<PokemonAPI />);
    expect(screen.getByText('Pokémon API')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Digite o nome do Pokémon')).toBeInTheDocument();
    expect(screen.getByText('Buscar')).toBeInTheDocument();
  });

  test('deve exibir o Pokémon ao buscar com sucesso', async () => {
    act(() => fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 'pikachu',
        height: 4,
        weight: 60,
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' },
        types: [{ type: { name: 'electric' } }],
      }),
    }));

    render(<PokemonAPI />);

    // Verifica o estado inicial
    expect(screen.getByText('Carregando...')).toBeInTheDocument();

    // Aguarda o carregamento
    await waitFor(() => expect(screen.getByText('PIKACHU')).toBeInTheDocument());
    expect(screen.getByText('Altura: 4')).toBeInTheDocument();
    expect(screen.getByText('Peso: 60')).toBeInTheDocument();
    expect(screen.getByText('electric')).toBeInTheDocument();
  });

  test('deve exibir mensagem de erro ao buscar um Pokémon inexistente', async () => {
    act(() => fetch.mockResolvedValueOnce({
      ok: false,
    }));

    render(<PokemonAPI />);

    // Aguarda o erro ser exibido
    await waitFor(() => expect(screen.getByText('Pokémon não encontrado')).toBeInTheDocument());
  });

  test('deve permitir buscar outro Pokémon', async () => {
    act( ()=>fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        name: 'bulbasaur',
        height: 7,
        weight: 69,
        sprites: { front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      }),
    }));

    render(<PokemonAPI />);

    // Simula a busca de outro Pokémon
    act(()=>{
      fireEvent.change(screen.getByPlaceholderText('Digite o nome do Pokémon'), {
      target: { value: 'bulbasaur' },
       })
      fireEvent.click(screen.getByText('Buscar'));
  });

    // Aguarda o carregamento
    await waitFor(() => expect(screen.getByText('BULBASAUR')).toBeInTheDocument());
    expect(screen.getByText('Altura: 7')).toBeInTheDocument();
    expect(screen.getByText('Peso: 69')).toBeInTheDocument();
    expect(screen.getByText('grass')).toBeInTheDocument();
    expect(screen.getByText('poison')).toBeInTheDocument();
  });
});