import types from '../types';

const initialState = {};

const pokemonStorage = (state = initialState, action) => {
  const { type, id, nickname } = action;
  const { ADD_POKEMON } = types.pokemonStorage;

  const addPokemon = () => ({
    ...state,
    [id]: [...(state[id] || []), { nickname, dateCatched: +new Date() }]
  });

  if (type === ADD_POKEMON) return addPokemon();

  return state;
};

export default pokemonStorage;
