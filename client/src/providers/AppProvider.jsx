import { createContext, useContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AppContext = createContext({});
export const useAppContext = () => useContext(AppContext);

export function AppProvider(props) {
  const [currentUser, setCurrentUser] = useState()
  async function verifyUser() {
    const foundCookie = Cookies.get('auth-cookie')
    // console.log(foundCookie)
    if (foundCookie) {
      const response = await fetch('/api/user/verify')
      // console.log(response)
      if (!response.ok) {
        return setCurrentUser(null)
      }
      const foundUser = await response.json()
      // console.log(foundUser)
      setCurrentUser(foundUser.results)
    }
  }
  const [cartData, setCartData] = useState(false)

  async function cartTotal() {
    // console.log("accessing cart session")
    const cart = sessionStorage.getItem('cart');
    // console.log(cart)
    if (cart == undefined) {
      setCartData(false)
    } else {
      setCartData(true)
    }
  }
  // console.log('Cart data: ', cartData)
  const [total, setTotal] = useState()
  async function getBagTotal() {
    if (sessionStorage.getItem('cart')) {
      const storage = sessionStorage.getItem('cart')
      // console.log("storage", storage)
      if (storage) {
        // console.log("we have stuff")
        setTotal(JSON.parse(storage).length)
      }
    }
  }
  console.log(total)

  useEffect(() => {
    verifyUser()
    cartTotal()
    getBagTotal()
    // })
  }, [])

  useEffect(() => {
    // console.log(currentUser)
  }, [currentUser])

  useEffect(() => {
    cartTotal()
  }, [cartData])

  return (
    <AppContext.Provider value={{ currentUser, cartData, cartTotal, total }}>
      {props.children}
    </AppContext.Provider>
  )
}