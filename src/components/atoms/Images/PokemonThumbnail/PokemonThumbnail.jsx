import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PokemonThumbnail = ({ name, src }) => {
  return <img alt={name} src={src} className={styles.thumb} />;
};

PokemonThumbnail.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string
};

PokemonThumbnail.defaultProps = {
  name: '',
  src: ''
};

export default PokemonThumbnail;
