import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import pokemonApi from '../../../api/pokemonApi';

const withPokemonInfo = WrappedComponent => {
  return props => {
    const router = useRouter();
    const {
      query: { pokemonId }
    } = router;

    const [pokemonInfo, setPokemonInfo] = useState({});

    const setPokemonInfoFromApi = () => {
      pokemonApi.getPokemonInfoById(pokemonId).then(res => {
        const { data } = res;
        setPokemonInfo(data);
      });
    };

    useEffect(() => {
      if (pokemonId || pokemonId === 0) setPokemonInfoFromApi();
    }, [pokemonId]);

    return <WrappedComponent pokemonInfo={pokemonInfo} {...props} />;
  };
};

export default withPokemonInfo;
