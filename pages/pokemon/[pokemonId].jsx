import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';
import CatchButton from '../../src/components/atoms/Button/CatchButton';
import PokemonCard from '../../src/components/molecules/Card/PokemonCard';
import MainHeader from '../../src/components/organisms/Headers/MainHeader';
import PokemonMovesList from '../../src/components/organisms/List/PokemonMovesList/PokemonMovesList';
import PokemonInfoTemplate from '../../src/components/templates/PokemonInfoTemplate';
import withPokemonInfo from '../../src/components/hoc/withPokemonInfo';
import CatchStatus from '../../src/components/atoms/Text/CatchStatus';
import withCatchPokemon from '../../src/components/hoc/withCatchPokemon/withCatchPokemon';
import AddPokemonModal from '../../src/components/organisms/Modal/AddPokemonModal';

const Pokemon = ({
  pokemonInfo,
  catching,
  caught,
  showFeedback,
  showNicknameModal,
  onCatchPokemon,
  onNicknameSubmit
}) => {
  if (Object.values(pokemonInfo).length === 0) return <p>Loading...</p>;

  const {
    name,
    sprites: { front_default: spriteSrc },
    types,
    moves
  } = pokemonInfo;

  const getPokemonTypes = () => {
    return types.map(({ type: { name: typeName } }) => typeName);
  };

  return (
    <PokemonInfoTemplate header={<MainHeader />}>
      <AddPokemonModal active={showNicknameModal} onSubmit={onNicknameSubmit} />
      <PokemonCard name={name} src={spriteSrc} typeList={getPokemonTypes()} />
      <CatchStatus
        catching={catching}
        caught={caught}
        showFeedback={showFeedback}
        pokemonName={name}
      />
      <CatchButton onClick={onCatchPokemon} disabled={catching} />
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
  }),
  catching: PropTypes.bool,
  caught: PropTypes.bool,
  showFeedback: PropTypes.bool,
  showNicknameModal: PropTypes.bool,
  onCatchPokemon: PropTypes.func,
  onNicknameSubmit: PropTypes.func
};

Pokemon.defaultProps = {
  pokemonInfo: {},
  catching: false,
  caught: false,
  showFeedback: false,
  showNicknameModal: false,
  onCatchPokemon: () => {},
  onNicknameSubmit: () => {}
};

export default compose(withPokemonInfo, withCatchPokemon)(Pokemon);
