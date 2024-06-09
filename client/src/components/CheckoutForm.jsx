import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';

// Test Key from Stripe - told to add here
const stripePromise = loadStripe("pk_test_51PNzsBK3bqf7nNHbMVQASGkWbrH8Yqn0WBOOZhyrOuHNuzbfIftSWpliaq8GJAqXv8Bp04jmZb7wliTlM2gg3z3500cMxybeKc");

export default function CheckoutForm({total}) {
  // Stripe embedded checkout form
    const fetchClientSecret = useCallback(async () => {
        const res = await fetch("/api/stripe/create-checkout-session", {
          method: "POST",
          body: JSON.stringify(total),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const data = await res.json();
        // getting clientSecret key from Stripe that they need to load checkout form
        return data.clientSecret
    }, []);

    // console.log({ fetchClientSecret })
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