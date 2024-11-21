import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const {user}=useContext(AuthContext);
    const navigate =useNavigate()
    const handleProfile=()=>{
        navigate('/UpdateProfile');
    }
    return (
        <div>

             <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300">
      {/* Profile Picture */}
      <div className="flex justify-center mt-5">
        <img
          className="h-28 w-28 rounded-full border-4 border-blue-300 object-cover"
          src={
            user?.photoURL ||
            "text=No+Photo"
          }
          alt="Profile"
        />
      </div>

      
      <div className="p-5 text-center">
        <h2 className="text-xl font-bold text-gray-800">
         Welcome To Our Website  { user?.displayName || "Your Name"}
        </h2>
        <p className="text-gray-600 mt-1">{user?.email || "Your Email"}</p>
        <p className="text-sm text-gray-500 mt-3">
          {user?.bio || "No additional bio provided."}
        </p>

        {/* Update Profile Button */}
        <div className="mt-5">
          <button onClick={handleProfile} className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600">
            Update Profile
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default MyProfile;