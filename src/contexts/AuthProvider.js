import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Akib' })
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('State change')
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe();
    }, []);

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userProfileUpdate = userInfo => {
        setLoading(true);
        return updateProfile(auth.currentUser, userInfo);
    }

    const authInfo = {
        user,
        createUser,
        userLogin,
        logOut,
        loading,
        userProfileUpdate
    }
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;