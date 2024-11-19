import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
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

  const updateProfileInfo = (displayName, photoURL) => {
    const auth = getAuth();
    updateProfile(auth.currentUser, { displayName, photoURL })
      .then(() => {
        setUse(auth.currentUser); // Update the user state after profile update 
      })
      .catch((error) => {
        console.error("Error ", error); 
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
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
