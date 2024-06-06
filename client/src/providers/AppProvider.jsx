import { createContext, useContext, useState, useEffect } from "react";
import Cookie from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export default function AppProvider(props){
  const [currentUser, setCurrentUser] = useState()
  const [cartData, setCartData] = useState([])
  async function verifyUser(){
    const foundCookie = Cookie.get('auth-cookie')
    if(foundCookie){
      const response = await fetch('/api/user/verify')
      const foundUser = await response.json()
      console.log(foundUser)
      setCurrentUser(foundUser)
    }
  }

  async function cartTotal(){
    fetch
  }

  useEffect(() => {
    verifyUser()
  }, [])

  return(
    <AppContext.Provider value={{currentUser}}>
      {props.children}
    </AppContext.Provider>
  )
}