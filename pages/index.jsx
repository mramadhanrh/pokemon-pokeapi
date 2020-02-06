import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import MainHeader from '../src/components/organisms/Headers/MainHeader';
import HomeTemplate from '../src/components/templates/HomeTemplate';
import withPokemonList from '../src/components/hoc/withPokemonList';

import pokemonApi from '../src/api/pokemonApi';
import PokemonList from '../src/components/organisms/List/PokemonList';
import PokemonListNavButton from '../src/components/molecules/NavButton/PokemonListNavButton';

const Home = ({ pokemonList, onNextPage, onPreviousPage }) => {
  useEffect(() => {
    pokemonApi.getPokemonList();
  }, []);

  return (
    <HomeTemplate header={<MainHeader />}>
      <PokemonList dataList={pokemonList} />
      <PokemonListNavButton onNextClick={onNextPage} onPreviousClick={onPreviousPage} />
    </HomeTemplate>
  );
};

Home.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({})),
  onNextPage: PropTypes.func,
  onPreviousPage: PropTypes.func
};

Home.defaultProps = {
  pokemonList: [],
  onNextPage: () => {},
  onPreviousPage: () => {}
};

export default withPokemonList(Home);
