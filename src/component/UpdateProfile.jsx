import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const { user, updateProfileInfo } = useContext(AuthContext); // Access user and updateProfileInfo from AuthContext
  const [displayName, setDisplayName] = useState(user?.displayName || ""); // Pre-fill with current user name
  const [photoURL, setPhotoURL] = useState(user?.photoURL || ""); // Pre-fill with current photo URL
const navigate =useNavigate();

    

const handleUpdate = async () => {
    if (!displayName || !photoURL) {
        alert("Both fields are required.");
        return;
    }

    try {
        // Wait for the profile update to complete
        await updateProfileInfo(displayName, photoURL);
        alert("Profile updated successfully!");
        
        // Now that the update is complete, navigate to the profile page
        navigate('/Profile');
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("There was an error updating your profile.");
    }
};

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Update Profile</h1>
      <div className="mb-4">
        <label className="block text-md font-medium mb-1">Display Name:</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter your new display name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-md font-medium mb-1">Photo URL:</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter your new photo URL"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Update Profile
      </button>
    </div>
  );
};

export default UpdateProfile;