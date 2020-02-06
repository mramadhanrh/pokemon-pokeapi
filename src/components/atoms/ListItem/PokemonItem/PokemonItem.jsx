import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import pageRoutes from '../../../../constants/pageRoutes';

import styles from './index.module.css';

const PokemonItem = ({ pokemonId, name, src, onClick }) => {
  return (
    <Link href={pageRoutes.pokemon.href} as={pageRoutes.pokemon.as(pokemonId)}>
      <button type="button" className={styles.container} onClick={onClick}>
        <img alt={name} src={src} className={styles.container__img} />
        <h2 className={styles.container__name}>{name}</h2>
      </button>
    </Link>
  );
};

PokemonItem.propTypes = {
  pokemonId: PropTypes.number,
  name: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func
};

PokemonItem.defaultProps = {
  pokemonId: 0,
  name: '',
  src: '',
  onClick: () => {}
};

export default PokemonItem;
