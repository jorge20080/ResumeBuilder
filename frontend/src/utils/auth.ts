import { redirect } from "react-router-dom";

export const getIsLogged = ()=>{
    const token = localStorage.getItem("token");
    if(token){
        return true;
    }
    return false;
}
export const logout = ()=>{
    localStorage.removeItem("token");
}
export const login = (token: string)=>{
    localStorage.setItem("token", token);
}
export const checkAuthLoader = () =>{
    const token = getIsLogged();
    if(!token){
        return redirect('/login')
    }
    return new Promise((resolve, reject)=>{
        if(token) {
            resolve("");
        } else{
            reject("")
        }
    })
}