import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export default function AppProvider(props){
  const [currentUser, setCurrentUser] = useState(null)
  async function verifyUser(){
    const foundCookie = Cookies.get()
    console.log(foundCookie)
    if(foundCookie){
      const response = await fetch('/api/user/verify', {
        method: 'POST'
      })
      if (!response.ok) {
        return setCurrentUser(null)
      }
      const foundUser = await response.json()
      // console.log(foundUser)
      setCurrentUser(foundUser)
    }
  }

  useEffect(() => {
    verifyUser()
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  return(
    <AppContext.Provider value={{currentUser, verifyUser}}>
      {props.children}
    </AppContext.Provider>
  )
}