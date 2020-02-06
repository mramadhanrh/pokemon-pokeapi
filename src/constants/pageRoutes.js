export default {
  home: '/',
  pokemon: {
    href: '/pokemon/[pokemonId]',
    as: pokemonId => `/pokemon/${pokemonId}`
  }
};
