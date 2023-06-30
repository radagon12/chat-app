import { onAuthStateChanged } from "firebase/auth";
import React,{ createContext, useEffect } from "react";
import { auth } from "../firebase"; 

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) =>
{
    const [currentUser,setCurrentUser] = React.useState({});

    useEffect(()=>
    {
        const unsub = onAuthStateChanged(auth,(user)=>
        {
            setCurrentUser(user);
            console.log(user);  
        })  

        return ()=>
        {
            unsub();
        }
    },[]);

    return(
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
    );
}