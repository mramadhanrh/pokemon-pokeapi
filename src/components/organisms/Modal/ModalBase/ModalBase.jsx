import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const ModalBase = ({ className, active, children }) => {
  if (!active) return null;

  return (
    <div className={`${styles.modal} ${className}`}>
      <div className={styles.modal__wrapper}>{children}</div>
    </div>
  );
};

ModalBase.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
};

ModalBase.defaultProps = {
  className: '',
  active: false,
  children: null
};

export default ModalBase;
