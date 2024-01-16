import React, { useEffect, useState } from 'react';
import { TestApi } from '../api/TestApi';

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const loadPokemons = async () => {
      const result = TestApi.getPokemons();
      console.log(result);
      const response = await result;
      console.log('response.data', response.data);
      setPokemons(response.data);
    };
    loadPokemons();
  }, []);

  return (
    <div>
      <h1>

        PokemonList
      </h1>
      <pre>
        {JSON.stringify(pokemons, null, 2)}
      </pre>
    </div>
  );
};


export default PokemonList;