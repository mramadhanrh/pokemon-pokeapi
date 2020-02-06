import React from 'react';
import PropTypes from 'prop-types';

import PokemonMovesItem from '../../../atoms/ListItem/PokemonMovesItem';

import styles from './index.module.css';

const PokemonMovesList = ({ moveList }) => {
  return (
    <div className={styles.list}>
      {moveList.map(({ move: { name: moveName } }) => {
        return <PokemonMovesItem key={moveName} moveName={moveName} />;
      })}
    </div>
  );
};

PokemonMovesList.propTypes = {
  moveList: PropTypes.arrayOf(
    PropTypes.shape({
      move: PropTypes.shape({
        name: PropTypes.string
      })
    })
  )
};

PokemonMovesList.defaultProps = {
  moveList: []
};

export default PokemonMovesList;
