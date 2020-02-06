import React, { useState } from 'react';
import PropTypes from 'prop-types';

import CatchButton from '../../src/components/atoms/Button/CatchButton';
import PokemonCard from '../../src/components/molecules/Card/PokemonCard';
import MainHeader from '../../src/components/organisms/Headers/MainHeader';
import PokemonMovesList from '../../src/components/organisms/List/PokemonMovesList/PokemonMovesList';
import PokemonInfoTemplate from '../../src/components/templates/PokemonInfoTemplate';
import withPokemonInfo from '../../src/components/hoc/withPokemonInfo';
import CatchStatus from '../../src/components/atoms/Text/CatchStatus';

const Pokemon = ({ pokemonInfo }) => {
  if (Object.values(pokemonInfo).length === 0) return <p>Loading...</p>;

  const [isCatching, setCatching] = useState(false);
  const [isFeedback, setFeedback] = useState(false);
  const [isCaught, setCaught] = useState(false);

  const {
    name,
    sprites: { front_default: spriteSrc },
    types,
    moves
  } = pokemonInfo;

  const getPokemonTypes = () => {
    return types.map(({ type: { name: typeName } }) => typeName);
  };

  const doCatchPokemon = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        const randNum = Math.round(Math.random());
        resolve(!!randNum);
      }, 2000);
    });
  };

  const handlePokemonCatched = () => {};

  const handleCatchPokemon = () => {
    setCatching(true);
    setCaught(false);

    doCatchPokemon()
      .then(isCatched => {
        setCaught(isCatched);
        if (isCatched) handlePokemonCatched();
      })
      .finally(() => {
        setFeedback(true);
        setTimeout(() => {
          setCatching(false);
          setFeedback(false);
        }, 2000);
      });
  };

  return (
    <PokemonInfoTemplate header={<MainHeader />}>
      <PokemonCard name={name} src={spriteSrc} typeList={getPokemonTypes()} />
      <CatchStatus
        showFeedback={isFeedback}
        catching={isCatching}
        caught={isCaught}
        pokemonName={name}
      />
      <CatchButton onClick={handleCatchPokemon} disabled={isCatching} />
      <PokemonMovesList moveList={moves} />
    </PokemonInfoTemplate>
  );
};

Pokemon.propTypes = {
  pokemonInfo: PropTypes.shape({
    name: PropTypes.string,
    sprites: PropTypes.shape({
      front_default: PropTypes.string
    }),
    types: PropTypes.arrayOf(PropTypes.shape({})),
    moves: PropTypes.arrayOf(PropTypes.shape({}))
  })
};

Pokemon.defaultProps = {
  pokemonInfo: {}
};

export default withPokemonInfo(Pokemon);
