import React, { useState } from "react"
import Heading from "../../Components/Heading"
import { useParams } from 'react-router-dom';
import PokemonImage from "../../Components/PokemonInfo";
import Card from "../../Components/Card";
import PokemonInfo from "../../Components/PokemonDetail";

const DetailPage = () => {
    const { name } = useParams<{name: string}>();

    const [searchTerm, setSearchTerm] = useState<string>('');
  
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    return(
        <div >
            <Heading 
            
            title=""
            search="Search"
            onSearchInputChange={handleSearchInputChange}
            searchTerm={searchTerm}
            
            />
            <div className="flex flex-wrap justify-center max-w-1300 gap-5">
                <Card
                content ={<PokemonInfo pokemonName={name || ''}/>}
                />
            </div>;
            
        </div>
    )
} 

export default DetailPage;