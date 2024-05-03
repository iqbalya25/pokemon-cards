import React, { ReactNode } from "react";
// import Label from "../Label";

interface cardProps{
    content: ReactNode;
}

const Card: React.FC <cardProps> = ({content}) => {
    
    return( 
        <a href="">
            <div className=" bg-blue-200 shadow-lg rounded-lg overflow-hidden m-4 max-w-max">
            <div className="flex justify-center items-center h-full ">
                <p className="text-center">{content}</p>
            </div>
        </div>
        </a>
        
    )
}

export default Card;