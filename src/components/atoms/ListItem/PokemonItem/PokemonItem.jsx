import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PokemonItem = ({ name, src }) => {
  return (
    <div className={styles.container}>
      <img alt={name} src={src} className={styles.container__img} />
      <h2 className={styles.container__name}>{name}</h2>
    </div>
  );
};

PokemonItem.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
};

PokemonItem.defaultProps = {
  name: '',
  src: ''
};

export default PokemonItem;
