import React, { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

interface headingProps{
    title: ReactNode;
    search: ReactNode;
    onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchTerm: string;
}

const Heading: React.FC<headingProps> = ({title, search, onSearchInputChange, searchTerm}) => {

    const [isSearching, setIsSearching] = useState(false);

    const toggleSearch = () => {
        setIsSearching((prevState) => !prevState);
    };
    
    return (
        <>
        <div className="p-6">
            <div className="flex justify-between items-center">
                <Link  to="/">
                    <div className="flex items-center"> 
                        <h1 className="flex flex-s">{title}
                        <img className="w-60" src="/pokelogo.png" alt="" />
                        </h1>
                    </div>
                </Link>
                
                <div className="flex items-center">
                    {isSearching ? (
                        <input

                        type="text"
                        value={searchTerm}
                        onChange={onSearchInputChange}
                        placeholder="Search..."
                        className="w-60 h-10 ml-2 p-2"
                        />
                    ) : (
                        <p>{search}</p>
                    )}
                    
                    <button onClick={toggleSearch}>
                        {isSearching ? (
                            <img className="w-10 h-10 ml-2 filter brightness-0 invert" src="/delete.png" alt="" />
                        ) : (
                            <img className="w-10 h-10 ml-2 filter brightness-0 invert" src="/glass2.png" alt="" />
                        )}
                    </button>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Heading;