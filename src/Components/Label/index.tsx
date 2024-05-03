import React from "react";

interface labelProps{
    labeltext: string;
}

const Label: React.FC<labelProps> = ({labeltext}) => {
    return(
        <div>
            <div className="rounded-full bg-gray-300 px-3 py-1 text-center font-neue-montreal font-bold whitespace-nowrap">{labeltext}</div>
        </div>

    )
}

export default Label;