import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const PokemonInfoTemplate = ({ header, children }) => {
  return (
    <div>
      <header>{header}</header>
      <main className={styles.container__content}>{children}</main>
    </div>
  );
};

PokemonInfoTemplate.propTypes = {
  header: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

PokemonInfoTemplate.defaultProps = {
  header: null,
  children: null
};

export default PokemonInfoTemplate;
