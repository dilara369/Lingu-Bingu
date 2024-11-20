import React from 'react';
import { MdOutlineWifiTetheringErrorRounded } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
function NotFound() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');  
        
    };


    return (
        <> 
        <div className=" border rounded-xl  flex justify-center  items-center gap-5 h-[400px] bg-gray-800 text-white">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <MdOutlineWifiTetheringErrorRounded size={50 }  />

            <div>
        <button 
            onClick={handleBack} 
            className="bg-blue-500 text-white px-3 py-1 rounded-full shadow-lg  "
        >
            Back To Home
        </button> 
        </div>

        </div>
      
        </>
    );
}

export default NotFound;
