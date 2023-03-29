// import { query, where, getDocs, collection } from "firebase/firestore"; 
import React, { useEffect, useState } from 'react';
import { auth } from '../FirebaseConfigs/firebaseConfig'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import {endSession, getSession} from '../session'

export const AuthContext = React.createContext()

const AuthProvider = ({children}) => {
  const [userSession, setUserSession] = useState()
  // console.log(userSession);

  const navigate = useNavigate()

  useEffect(() => {
    let session = getSession();
    // console.log(session);
    setUserSession(session);
  },[navigate])

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = async(email, password) => {
    return signInWithEmailAndPassword(auth ,email,password)
  }


  const handleLogOut = () => {
    endSession();
    navigate("/");
  }

  return <AuthContext.Provider value={{
      userValue1: signUp,
      userValue2: handleLogOut,
      userValue3: logIn,
      userValue4: userSession
    }}
  >
    {children}
  </AuthContext.Provider>
}

export default AuthProvider