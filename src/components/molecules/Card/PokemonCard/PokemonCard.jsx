import React from 'react';
import PropTypes from 'prop-types';

import PokemonThumbnail from '../../../atoms/Images/PokemonThumbnail';
import PokemonTypeBadgesList from '../../../organisms/List/PokemonTypeBadgesList';

import styles from './index.module.css';

const PokemonCard = ({ name, src, typeList }) => {
  return (
    <div className={styles.card}>
      <h1>{name}</h1>
      <PokemonThumbnail src={src} />
      <div>
        <PokemonTypeBadgesList typeList={typeList} />
      </div>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string,
  src: PropTypes.string,
  typeList: PropTypes.arrayOf(PropTypes.string)
};

PokemonCard.defaultProps = {
  name: '',
  src: '',
  typeList: []
};

export default PokemonCard;
