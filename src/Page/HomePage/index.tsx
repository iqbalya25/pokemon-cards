import React, { useState } from "react"
import Heading from "../../Components/Heading"
import PokemonList from "../../Components/PokemonList"
import PokemonInfo from "../../Components/PokemonDetail"
import PokemonImage from "../../Components/PokemonInfo"
import Setting from "../../Components/Setting"

const Page = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [maxWidth, setMaxWidth] = useState<string>("max-w-[1300px]");
  
    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const toggleMaxWidth = () => {
        setMaxWidth(prevWidth => (prevWidth === "max-w-[1300px]" ? "max-w-[400px]" : "max-w-[1300px]"));
      };

    return(
        <div >
            <Heading 

             title=""
             search="Search"
             onSearchInputChange={handleSearchInputChange}
             searchTerm={searchTerm}
             
             />

            <div className="p-4">
                <Setting toggleMaxWidth={toggleMaxWidth} />
            </div>

            <div className="flex flex-wrap justify-center max-w-1300 gap-5">
                <PokemonList searchTerm={searchTerm}  maxWidth={maxWidth}/>
            </div>
            
        </div>
    )
} 

export default Page;