import { createContext, useEffect, useState } from "react"

export let UserLoginContext = createContext()
export default function UserLogin({children}){
    let [userId,setUserId]=useState('')
    let [password,setPassword]=useState('')
    let [token,setToken]=useState()

    function update(obj){
            console.log(obj)
            setToken(obj[0]['token']);
        setUserId(obj[1])
        setPassword(obj[2])
        console.log(userId,password,token)
    }

    

    let login=(obj)=>{
        // console.log(obj)
        // setToken(token=obj[0])
        // console.log(token)

        setToken(obj[0]['token']);
        setUserId(obj[1])
        setPassword(obj[2])

        

        
    }
    let logout=()=>{
        setToken(null)
        setPassword(false)
        setUserId(false)
    }
    let obj={
        userId,
        password,
        token,
        login,
        logout,
  
    }


    return  <>
            <UserLoginContext.Provider value={obj}>{children}</UserLoginContext.Provider>
    </>
}