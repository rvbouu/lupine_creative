import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';

const stripePromise = loadStripe("pk_test_51PO0m9P1dwZ6prVFf0Fd2XT9kB4g8koQLfRGZnI5MLhUG55JGOV5sqnkszw4OOWhI1HgD1JKwXkkMmRk1vPa7vSS003ziIE66r");


export default function CheckoutForm() {
  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("http://localhost:3000/stripe/create-checkout-session", {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
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