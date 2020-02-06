import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import pageRoutes from '../../../../constants/pageRoutes';

import styles from './index.module.css';

const MainHeader = ({ logoSrc }) => {
  return (
    <Link href={pageRoutes.home}>
      <div className={styles.header}>
        <img alt="logo" src={logoSrc} className={styles.header__logo} />
      </div>
    </Link>
  );
};

MainHeader.propTypes = {
  logoSrc: PropTypes.string
};

MainHeader.defaultProps = {
  logoSrc: '/static/img/logo.png'
};

export default MainHeader;
