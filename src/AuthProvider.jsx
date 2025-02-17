import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "./pages/Firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUse] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUser = (email, password, name, photo) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
       
        updateProfileInfo(name, photo);
      })
      .catch((error) => {
        console.error("Error creating user: ", error); 
      });
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const GoogleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const resetPass = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Password reset email sent, please check');
      })
      .catch((error) => {
        alert('Error sending email: ' + error.message);
      });
  };




  const updateProfileInfo = (displayName, photoURL) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        
        const updatedUser = { ...auth.currentUser, displayName, photoURL };
        setUse(updatedUser); 
      })
      .catch((error) => {
        console.error("Error updating profile: ", error);
      });
  };
  

  

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (curretnUser) => {
      setUse(curretnUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
    logOutUser,
    loading,
    GoogleLogin,
    updateProfileInfo,
    resetPass
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
