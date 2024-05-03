import React from 'react';
import usePokemonDetails from '../../hooks/usePokemonDetail';


const PokemonInfo: React.FC<{ pokemonName: string }> = ({ pokemonName }) => {
  const { pokemonDetails, loading, error } = usePokemonDetails(pokemonName);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error).message}</div>;
  }

  if (!pokemonDetails) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2 className="text-[50px] font-bold px-4 py-4">{pokemonDetails.id}</h2>
      <img src={pokemonDetails.artworkFront} alt={pokemonDetails.name} />
      <img src={pokemonDetails.spriteFront} alt={pokemonDetails.name} />
      <h2 className="text-[50px] font-bold px-4 py-4">{pokemonDetails.name}</h2>
      <h2 className="text-[50px] font-bold px-4 py-4">Health : {pokemonDetails.health}</h2>
      <h2 className="text-[50px] font-bold px-4 py-4">Attack : {pokemonDetails.attack}</h2>
      <h2 className="text-[50px] font-bold px-4 py-4">Defense : {pokemonDetails.defense}</h2>
  
    </div>

  );
};

export default PokemonInfo;


// health: number;
//   attack: number;
//   defense: number;
//   spriteFront: string;
//   artworkFront: string;
