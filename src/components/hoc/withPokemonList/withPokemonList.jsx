import React, { useState, useEffect } from 'react';

import pokemonApi from '../../../api/pokemonApi';
import urlHelper from '../../../helpers/urlHelper';

const withPokemonList = WrappedComponent => {
  return props => {
    const [pokemonList, setPokemonList] = useState([]);
    const [offset, setOffset] = useState({
      next: 0,
      previous: 0
    });

    const getOffsetFromUrlParams = url => {
      const { offset: offsetResponse } = urlHelper.getUrlParamsAsObject(url) || {};

      if (offsetResponse) return offsetResponse;

      return 0;
    };

    const setPokemonListFromApi = offsetIdx => {
      pokemonApi.getPokemonListWithThumb(offsetIdx).then(response => {
        const { results, next, previous } = response;
        const nextOffset = getOffsetFromUrlParams(next);
        const previousOffset = getOffsetFromUrlParams(previous);

        setPokemonList(results);
        setOffset({
          next: nextOffset,
          previous: previousOffset
        });
      });
    };

    const handleNextPage = () => {
      setPokemonListFromApi(offset.next);
    };

    const handlePreviousPage = () => {
      setPokemonListFromApi(offset.previous);
    };

    useEffect(() => {
      setPokemonListFromApi(0);
    }, []);

    return (
      <WrappedComponent
        pokemonList={pokemonList}
        onNextPage={handleNextPage}
        onPreviousPage={handlePreviousPage}
        {...props}
      />
    );
  };
};

export default withPokemonList;
