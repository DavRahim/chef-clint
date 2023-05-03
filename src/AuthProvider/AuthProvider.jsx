import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';




export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    // const user = {name: "Rahim"};
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signWithGoogle = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }

    const signInGitGub = () =>{
        setLoading(true);
      return signInWithPopup(auth, githubProvider)

    }

    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    
    useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
        // console.log('in site', loggedUser);
        setUser(loggedUser)
        setLoading(false)
      })
      
      return () =>{
        unsubscribe();
      }

    },[])

    const authInfo = {
      user,
      loading,
      createUser,
      signWithGoogle,
      signInGitGub,
      signIn,
      logOut,
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;