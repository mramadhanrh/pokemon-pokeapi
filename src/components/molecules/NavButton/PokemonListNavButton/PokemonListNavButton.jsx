import React from 'react';
import PropTypes from 'prop-types';

import BoxButton from '../../../atoms/Button/BoxButton';

import styles from './index.module.css';

const PokemonListNavButton = ({ onNextClick, onPreviousClick }) => {
  return (
    <div className={styles.nav}>
      <BoxButton className={styles.nav__button} onClick={onPreviousClick}>
        <p>Previous</p>
      </BoxButton>
      <BoxButton className={styles.nav__button} onClick={onNextClick}>
        <p>Next</p>
      </BoxButton>
    </div>
  );
};

PokemonListNavButton.propTypes = {
  onNextClick: PropTypes.func,
  onPreviousClick: PropTypes.func
};

PokemonListNavButton.defaultProps = {
  onNextClick: () => {},
  onPreviousClick: () => {}
};

export default PokemonListNavButton;
