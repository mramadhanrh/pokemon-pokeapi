import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import actions from '../../../redux/actions';

const withCatchPokemon = WrappedComponent => {
  const HOCComponent = ({ onAddPokemon, ...props }) => {
    const router = useRouter();
    const [isCatching, setCatching] = useState(false);
    const [isFeedback, setFeedback] = useState(false);
    const [isCaught, setCaught] = useState(false);
    const [isNicknameModal, setNicknameModal] = useState(false);

    const toggleNicknameModal = () => setNicknameModal(state => !state);

    const doCatchPokemon = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          const randNum = Math.round(Math.random());
          resolve(!!randNum);
        }, 2000);
      });
    };

    const handleCatchPokemon = () => {
      setCatching(true);
      setCaught(false);

      doCatchPokemon()
        .then(isCatched => {
          setCaught(isCatched);
          if (isCatched) toggleNicknameModal();
        })
        .finally(() => {
          setFeedback(true);
          setTimeout(() => {
            setCatching(false);
            setFeedback(false);
          }, 2000);
        });
    };

    const handleNicknameSubmit = nickname => {
      const {
        query: { pokemonId }
      } = router;
      onAddPokemon(pokemonId, nickname);
      toggleNicknameModal();
    };

    return (
      <WrappedComponent
        catching={isCatching}
        caught={isCaught}
        showFeedback={isFeedback}
        showNicknameModal={isNicknameModal}
        onCatchPokemon={handleCatchPokemon}
        onNicknameSubmit={handleNicknameSubmit}
        {...props}
      />
    );
  };

  HOCComponent.propTypes = {
    onAddPokemon: PropTypes.func
  };

  HOCComponent.defaultProps = {
    onAddPokemon: () => {}
  };

  const mapDispatchToProps = dispatch => ({
    onAddPokemon: (id, nickname) => dispatch(actions.pokemonStorage.addPokemon(id, nickname))
  });

  return connect(null, mapDispatchToProps)(HOCComponent);
};

export default withCatchPokemon;
