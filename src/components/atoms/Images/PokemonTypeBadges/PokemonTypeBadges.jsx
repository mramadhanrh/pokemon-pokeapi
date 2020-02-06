import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PokemonTypeBadges = ({ type }) => {
  return <img alt={type} src={`/static/img/icons/${type}.png`} className={styles.badges} />;
};

PokemonTypeBadges.propTypes = {
  type: PropTypes.string
};

PokemonTypeBadges.defaultProps = {
  type: 'unkown'
};

export default PokemonTypeBadges;
