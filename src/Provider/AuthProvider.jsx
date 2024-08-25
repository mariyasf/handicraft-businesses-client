import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    // New User add
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Use Google login
    const handleGoogleSignIn = () => {
        // console.log("Google login");
        setLoding(true);
        return signInWithPopup(auth, googleProvider)
    }
    // Use Github Login
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // Update Profile
    const updateUserProfile = (fullName, image, phoneNumber) => {
        setLoding(true);
        return updateProfile(auth.currentUser, {
            displayName: fullName,
            photoURL: image,
            phoneNumber: phoneNumber
        })
    }

    // Logout
    const logOut = async () => {
        setLoding(true);
        const data = await axios(`${import.meta.env.VITE_API_URL}/logout`,
            {
                withCredentials: true
            })
        console.log(data)
        return signOut(auth);
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('User in the auth state changed', currentUser);
            setUser(currentUser);
            setLoding(false);
        })
        return () => {
            unSubscribe();
        }

    }, [])

    const authInfo = {
        user,
        loding,
        createNewUser,
        signIn,
        logOut,
        updateUserProfile,
        handleGoogleSignIn,
        handleGithubSignIn,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;