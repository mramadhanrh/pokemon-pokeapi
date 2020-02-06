import React from 'react';
import PropTypes from 'prop-types';
import copywriting from '../../../../constants/copywriting';

import styles from './index.module.css';

const { catchStatus: catchStatusCopy } = copywriting.pokemonInfo;

const CatchStatus = ({ showFeedback, catching, caught, pokemonName }) => {
  const getCatchStatusText = () => {
    if (showFeedback) {
      return caught ? catchStatusCopy.caught(pokemonName) : catchStatusCopy.broke;
    }

    return catching ? catchStatusCopy.catching : catchStatusCopy.default;
  };
  return <p className={styles.text}>{getCatchStatusText()}</p>;
};

CatchStatus.propTypes = {
  showFeedback: PropTypes.bool,
  catching: PropTypes.bool,
  caught: PropTypes.bool,
  pokemonName: PropTypes.string
};

CatchStatus.defaultProps = {
  showFeedback: false,
  catching: false,
  caught: false,
  pokemonName: ''
};

export default CatchStatus;
