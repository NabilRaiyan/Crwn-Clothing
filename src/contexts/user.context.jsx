import { createContext, useState } from "react";

// actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});

// actual component. Here UserContext is alias
export const UserProvider = ({ children })=>{
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
}