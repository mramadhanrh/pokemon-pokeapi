import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const BoxButton = ({ className, onClick, children }) => {
  return (
    <button type="button" className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

BoxButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

BoxButton.defaultProps = {
  className: '',
  onClick: () => {},
  children: null
};

export default BoxButton;
