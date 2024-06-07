import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { useAppContext } from "../providers/AppProvider";
// import HomePage from '../pages/HomePage';

const stripePromise = loadStripe("pk_test_51PNzsBK3bqf7nNHbMVQASGkWbrH8Yqn0WBOOZhyrOuHNuzbfIftSWpliaq8GJAqXv8Bp04jmZb7wliTlM2gg3z3500cMxybeKc");


export default function CheckoutForm() {
  const { cartData } = useAppContext();
  const total = cartData.total || JSON.parse(sessionStorage.getItem('cart'))
  console.log(total)


  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const res = await fetch("/api/stripe/create-checkout-session", {
      method: "POST",
      body: JSON.stringify(total),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await res.json();
    return data.clientSecret;
  }, []);
  console.log({ fetchClientSecret })
  const options = { fetchClientSecret };


  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}