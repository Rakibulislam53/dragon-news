import { createContext } from "react";

const authContext = createContext(null)

const AuthProvider = () => {
    authInfo = {name:'rakibul'}

    return (
        <authContext.Provider value={au}>
            
        </authContext.Provider>
    );
};

export default AuthProvider;