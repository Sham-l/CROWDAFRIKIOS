import { createContext,useEffect,useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";


const userContext = createContext()



function UserProvider({ children,value }) {
    const [userId,setUserId]=useState()
    useEffect(() => {
        const getUserId = async () => {
            try {
                const data = await AsyncStorage.getItem('userInfo')
                const userData = await JSON.parse(data)
                setUserId(userData.userId)
            } catch (error) {
                
            }
      
        }
        getUserId()
},[])
    return <userContext.Provider value={{userId,...value}}>{children }</userContext.Provider>
}

export {userContext,UserProvider}