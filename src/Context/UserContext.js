import React, { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config"
import { useState } from 'react';



export const AuthContext = createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {

    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user,setUser] = useState({displayName : 'Neo'});

    const userSignUp = (email,password) => createUserWithEmailAndPassword(auth,email,password);
    
    const userSignIn = (email,password) => signInWithEmailAndPassword(auth,email,password);

    const googleSignIn = () => signInWithPopup(auth, googleProvider);

    const gitSignIn = () => signInWithPopup(auth, gitProvider);

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

    const authInfo = {user,userSignUp,userSignIn,googleSignIn,gitSignIn,updateUserProfile,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;