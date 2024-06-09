import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback, useState, useRef } from 'react';

const stripePromise = loadStripe("pk_test_51PNzsBK3bqf7nNHbMVQASGkWbrH8Yqn0WBOOZhyrOuHNuzbfIftSWpliaq8GJAqXv8Bp04jmZb7wliTlM2gg3z3500cMxybeKc");

export default function CheckoutForm({total}) {

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

    // console.log({ fetchClientSecret })
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