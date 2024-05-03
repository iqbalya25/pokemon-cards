import React, { useState } from 'react';
import usePokemonList from '../../hooks/usePokemonList';
import Card from '../Card';
import PokemonInfo from '../PokemonInfo';
import { Link } from 'react-router-dom';
import Setting from '../Setting';

interface PokemonListProps {
  searchTerm: string;
  maxWidth: string; 
}

const PokemonList: React.FC<PokemonListProps> = ({searchTerm, maxWidth}) => {
  const {pokemonList, loading, error} = usePokemonList();

  const filteredPokemonList = pokemonList.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!pokemonList) {
    return <div>No data available</div>;
  }

  
  return (
    <div>
      <div className={`flex flex-wrap justify-center ${maxWidth} gap-5`}>
        {filteredPokemonList.map(pokemon => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <Card content={<PokemonInfo pokemonName={pokemon.name} />} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;











  // return (
    
  //       <div>
            
  //           <div className="flex flex-wrap justify-center max-w-[1300px] gap-5">
  //               {pokemonList.map((pokemon) => (
                  
  //               <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>

  //               <Card content={<PokemonInfo pokemonName={pokemon.name} />} />

  //               </Link>
  //               ))}
  //           </div>
  //       </div>


  // );
