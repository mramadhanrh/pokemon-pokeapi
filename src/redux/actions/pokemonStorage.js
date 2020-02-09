import types from '../types';

const { ADD_POKEMON } = types.pokemonStorage;

const addPokemon = (id, nickname) => ({
  type: ADD_POKEMON,
  id,
  nickname
});

export default { addPokemon };
