import { useState, useEffect } from "react"
import EmptyCart from "./EmptyCart"
import CheckoutForm from "./CheckoutForm"
import '../assets/Cart.css'

export default function CartChooser(){
  const [ currTotal, setCurrTotal ] = useState()
  // Gary
  const [ ready, setReady ] = useState(false)

  // gets total from localStorage
  function checkTotal(){
    // console.log("checking total")
    // console.log(total)
    // console.log(cartData)
    if( sessionStorage.getItem('cart') ){
      const storage = sessionStorage.getItem('cart')
      // console.log("storage", storage)
      if( storage ){
        // console.log("we have stuff")
        setCurrTotal(JSON.parse(storage))
      } else {
        // console.log("no stuff")
        setReady(true)
      }
    }
  }

  useEffect(() => {
    if( currTotal ){
      // console.log("show da stuff")
      setReady(true)
    }
  },[currTotal])

  // Gary
  useEffect(() => {
    setReady(false)
    checkTotal()
  },[])

  // if total is not undefined = return CheckoutForm; else return EmptyCart
  return (
    <>
      { currTotal !== undefined ? (
        <CheckoutForm total={currTotal} />
      ) : (
        <EmptyCart />
      )}
    </>
  )

}