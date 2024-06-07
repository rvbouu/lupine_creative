import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useState, useRef } from 'react';
import { useAppContext } from "../providers/AppProvider";
import EmptyCart from './Cart'
// import HomePage from '../pages/HomePage';

const stripePromise = loadStripe("pk_test_51PNzsBK3bqf7nNHbMVQASGkWbrH8Yqn0WBOOZhyrOuHNuzbfIftSWpliaq8GJAqXv8Bp04jmZb7wliTlM2gg3z3500cMxybeKc");

export default function CheckoutForm({total}) {
  // let total;
  // const {cartData} = useAppContext();
  // console.log(total)
  // console.log(cartData)
  // if(cartData){
  //   const storage = sessionStorage.getItem('cart')
  //   console.log("storage", storage)
    
  //   if( storage ){
  //     total = JSON.parse(storage)
  //   }
  // }
    


    const fetchClientSecret = useCallback(async () => {
        const res = await fetch("/api/stripe/create-checkout-session", {
          method: "POST",
          body: JSON.stringify(total),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        return data.clientSecret
    }, []);

    console.log({ fetchClientSecret })
    const options = { fetchClientSecret };
    

  
  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={ options }
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}