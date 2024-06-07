import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { useAppContext } from "../providers/AppProvider"

const stripePromise = loadStripe("pk_test_51PO0m9P1dwZ6prVFf0Fd2XT9kB4g8koQLfRGZnI5MLhUG55JGOV5sqnkszw4OOWhI1HgD1JKwXkkMmRk1vPa7vSS003ziIE66r");


export default function CheckoutForm() {
  const { cartData } = useAppContext();
  const total = cartData.total
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