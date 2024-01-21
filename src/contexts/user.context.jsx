import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, signOutUser, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

// actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

// actual component. Here UserContext is alias
export const UserProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    //signOutUser();

    // manage auth state
    useEffect(()=>{
        const unsubscribe = onAuthStateChangedListener((user)=>{
            console.log(user);
            if (user){
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
    
}