import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const CatchButton = ({ text, catchingText, onClick, disabled }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick} disabled={disabled}>
      <span>
        <img alt="pokeball" src="/static/img/icons/pokeball.png" className={styles.button__icon} />
      </span>
      <p className={styles.button__text}>{disabled ? catchingText : text}</p>
    </button>
  );
};

CatchButton.propTypes = {
  text: PropTypes.string,
  catchingText: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

CatchButton.defaultProps = {
  text: 'Catch the pokemon!',
  catchingText: 'Catching the pokemon...',
  onClick: () => {},
  disabled: false
};

export default CatchButton;
