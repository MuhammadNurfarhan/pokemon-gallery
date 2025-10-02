
import { PokemonListResponse, PokemonDetail } from '@/types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemonList(offset: number, limit: number): Promise<PokemonListResponse> {
  const res = await fetch(`${BASE_URL}/pokemon?offset=${offset}&limit=${limit}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon list');
  return res.json();
}

export async function fetchPokemonDetail(url: string): Promise<PokemonDetail> {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch Pokémon detail');
  return res.json();
}
