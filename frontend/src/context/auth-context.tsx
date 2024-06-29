import { createContext, ReactNode, useContext, useState } from "react";
import { getIsLogged, login, logout } from "../utils/auth";

type TAuthContext = {
    isLogged: boolean,
    handleLogout: ()=>void,
    handleLogin: (token: string)=>void
}
const authContext = createContext({} as TAuthContext)

export const useAuthContext = ()=>useContext(authContext);


export const AuthContextProvider = ({children}: {children: ReactNode}) =>{
    const [isLogged, setIsLogged] = useState(getIsLogged());
    const handleLogout = () =>{
        logout();
        setIsLogged(false);
    }
    const handleLogin = (token: string) =>{
        login(token);
        setIsLogged(true);
    }
    return(
        <authContext.Provider value={{isLogged, handleLogout, handleLogin}}>
            {children}
        </authContext.Provider>
    )
}