import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=( email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            setLoading(false)
            console.log('user in the auth state change',currentUser)
        })

        return () => {
            unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        loading,
        setLoading,
        signInUser,
        signOutUser,
        signInWithGoogleLogin
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;