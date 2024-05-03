import React, {useState} from "react";

interface SettingProps {
    toggleMaxWidth: () => void;
  }

const Setting: React.FC<SettingProps> = ({ toggleMaxWidth }) => {

    return(

        <div className="flex justify-center items-center">
            <div>
                
                <button onClick={toggleMaxWidth}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                <img src="/grid.png" alt="" className="w-10 h-10 filter brightness-0 invert" />
                </button>

            </div>
            
        </div>
        
    );
};

export default Setting;