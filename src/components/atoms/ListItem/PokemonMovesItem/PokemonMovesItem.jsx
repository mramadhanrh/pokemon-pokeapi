import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PokemonMovesItem = ({ moveName }) => {
  return (
    <div className={styles.container}>
      <p>{moveName}</p>
    </div>
  );
};

PokemonMovesItem.propTypes = {
  moveName: PropTypes.string
};

PokemonMovesItem.defaultProps = {
  moveName: ''
};

export default PokemonMovesItem;
