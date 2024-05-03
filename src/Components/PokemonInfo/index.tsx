import React from 'react';
import usePokemonDetails from '../../hooks/usePokemonDetail';


const PokemonImage: React.FC<{ pokemonName: string }> = ({ pokemonName }) => {
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
      <img src={pokemonDetails.artworkFront} alt={pokemonDetails.name} />
      <h2 className="text-[50px] font-bold px-4 py-4">{pokemonDetails.name}</h2>
  
    </div>

  );
};

export default PokemonImage;
