import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export default function AppProvider(props){
  const [currentUser, setCurrentUser] = useState()
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

  const [cartData, setCartData] = useState(false)

  async function cartTotal(){
    console.log("accessing cart session")
    const cart = sessionStorage.getItem('cart');
    console.log(cart)
    if(cart == undefined){
      setCartData(false)
    }else{
      setCartData(true)
    }
  }
  console.log('Cart data: ', cartData)

  useEffect(() => {
    verifyUser(),
    cartTotal()
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  useEffect(() => {
    cartTotal()
  }, [cartData])

  return(
    <AppContext.Provider value={{currentUser, cartData, cartTotal}}>
      {props.children}
    </AppContext.Provider>
  )
}