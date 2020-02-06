import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.module.css';

const MainHeader = ({ logoSrc }) => {
  return (
    <div className={styles.header}>
      <img alt="logo" src={logoSrc} className={styles.header__logo} />
    </div>
  );
};

MainHeader.propTypes = {
  logoSrc: PropTypes.string
};

MainHeader.defaultProps = {
  logoSrc: 'static/img/logo.png'
};

export default MainHeader;
