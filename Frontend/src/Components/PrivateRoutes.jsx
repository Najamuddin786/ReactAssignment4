import { Navigate } from "react-router-dom";
import { UserLoginContext } from "../Context/UserLogin";
import { useContext } from "react";

export default function PrivateRoutes({children}){
    let {userId,token,password}=useContext(UserLoginContext)
    console.log(userId,token,password)
    let login=userId;
    if(!login){
        return <Navigate to='/login'/>
    }
    return children
}