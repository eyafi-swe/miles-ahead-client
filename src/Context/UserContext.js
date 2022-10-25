import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config"
import { useState } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] = useState({displayName : 'Neo'});

    const userSignUp = (email,password) => createUserWithEmailAndPassword(auth,email,password);
    
    const userSignIn = (email,password) => signInWithEmailAndPassword(auth,email,password);

    const updateUserProfile = profile => updateProfile(auth.currentUser, profile)

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('Auth state changed ', currentUser);
        })

        return () =>{
            unsubscribe();
        }
    },[])

    const logOut = ()=> signOut(auth);

    const authInfo = {user,userSignUp,userSignIn,updateUserProfile,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;