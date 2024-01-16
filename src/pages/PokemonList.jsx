import React, { useEffect } from 'react';
import { TestApi } from '../api/TestApi';

export const PokemonList = () => {

  useEffect(() => {
    const loadPokemons = async () => {
      const result = TestApi.getPokemons();
      console.log(result);
    };
    loadPokemons();
  }, []);

  return (
    <div>PokemonList</div>
  );
};


export default PokemonList;