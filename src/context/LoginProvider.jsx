import { createContext, useContext, useState, useEffect } from "react";
import { auth } from '../config/firebase.js';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const loginContext = createContext();
export const useLoginContext = () => {
    return useContext(loginContext);
};

export const LoginProvider = ({children}) => {
    const login = async() => {
        try {
            const userCredetntials = await signInWithEmailAndPassword(auth, import.meta.env.VITE_FIREUSER, import.meta.env.VITE_FIREPASS);
        } catch (error) {
            console.log(`Code: ${error.code}, message: ${error.message}`);
        }
    };
    useEffect( () => {
        login();
    },[]);
    return(
        <loginContext.Provider value={ {login} }>
            {children}
        </loginContext.Provider>
    )
};