import React from 'react';
import PropTypes from 'prop-types';
import PokemonItem from '../../../atoms/ListItem/PokemonItem';

import styles from './index.module.css';

const PokemonList = ({ dataList }) => {
  return (
    <div className={styles.container}>
      {dataList.map(pokemon => {
        const { name, info = { front_default: '' } } = pokemon;
        const {
          sprites: { front_default: spriteSrc }
        } = info;

        return <PokemonItem key={name} name={name} src={spriteSrc} />;
      })}
    </div>
  );
};

PokemonList.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      info: PropTypes.shape({
        sprites: PropTypes.shape({
          front_default: PropTypes.string
        })
      })
    })
  )
};

PokemonList.defaultProps = {
  dataList: []
};

export default PokemonList;
