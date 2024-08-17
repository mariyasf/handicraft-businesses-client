import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    // New User add
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update Profile
    const updateUserProfile = (name, image, phoneNumber) => {
        setLoding(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            phoneNumber: phoneNumber
        })

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
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;