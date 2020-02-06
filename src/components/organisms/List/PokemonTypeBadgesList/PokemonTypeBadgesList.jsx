import React from 'react';
import PropTypes from 'prop-types';

import PokemonTypeBadges from '../../../atoms/Images/PokemonTypeBadges';

const PokemonTypeBadgesList = ({ typeList }) => {
  return (
    <>
      {typeList.map(type => {
        return <PokemonTypeBadges key={type} type={type} />;
      })}
    </>
  );
};

PokemonTypeBadgesList.propTypes = {
  typeList: PropTypes.arrayOf(PropTypes.string)
};

PokemonTypeBadgesList.defaultProps = {
  typeList: []
};

export default PokemonTypeBadgesList;
