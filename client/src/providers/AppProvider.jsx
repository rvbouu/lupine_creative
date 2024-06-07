import { createContext, useContext, useState, useEffect } from "react";
import Cookie from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export default function AppProvider(props){
  const [currentUser, setCurrentUser] = useState()

  async function verifyUser(){
    const foundCookie = Cookie.get('auth-cookie')
    if(foundCookie){
      const response = await fetch('/api/user/verify')
      const foundUser = await response.json()
      console.log(foundUser)
      setCurrentUser(foundUser)
    }
  }

  const [cartData, setCartData] = useState({})
  async function cartTotal(){


    // const response = await fetch('api/cart/:userId')
    // const cart = await response.json()
    // console.log(cart)
    // setCartData(cart)
  }
  console.log('Cart data: ', cartData)

  useEffect(() => {
    verifyUser(),
    cartTotal()
  }, [])

  return(
    <AppContext.Provider value={{currentUser, cartData}}>
      {props.children}
    </AppContext.Provider>
  )
}