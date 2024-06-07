import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export function AppProvider(props){
  const [currentUser, setCurrentUser] = useState()
  async function verifyUser(){
    const foundCookie = Cookies.get()
    console.log(foundCookie)
    if(foundCookie){
      const response = await fetch('/api/user/verify', {
        method: 'POST'
      })
      console.log(response)
      if (!response.ok) {
        return setCurrentUser(null)
      }
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
    // window.addEventListener('afterunload', () => {
      verifyUser()
      cartTotal()
    // })
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  return(
    <AppContext.Provider value={{currentUser, cartData}}>
      {props.children}
    </AppContext.Provider>
  )
}