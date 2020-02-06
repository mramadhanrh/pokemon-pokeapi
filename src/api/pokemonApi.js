import axiosInstance, { routes } from './axiosInstance';

const getPokemonList = (offset = 0, limit = 0) => {
  return axiosInstance.get(`${routes.pokemonList}`, {
    params: {
      offset,
      limit
    }
  });
};

const getPokemonInfoByUrl = url => {
  return axiosInstance.get(url);
};

const getPokemonInfoById = pokemonId => {
  return axiosInstance.get(routes.pokemonInfo(pokemonId));
};

const getPokemonListWithThumb = (offset = 0, limit = 0) => {
  return getPokemonList(offset, limit).then(response => {
    const {
      data: { results = [] }
    } = response;
    const requestCollection = [];

    results.forEach(pokemon => {
      const { url } = pokemon;
      requestCollection.push(
        getPokemonInfoByUrl(url).then(({ data: pokemonInfo }) => {
          return {
            ...pokemon,
            info: pokemonInfo
          };
        })
      );
    });

    return Promise.all(requestCollection).then(pokemonInfoCollection => ({
      ...response.data,
      results: pokemonInfoCollection
    }));
  });
};

export default { getPokemonList, getPokemonInfoByUrl, getPokemonInfoById, getPokemonListWithThumb };
