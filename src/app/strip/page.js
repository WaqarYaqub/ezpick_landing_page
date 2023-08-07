"use client"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_live_51MAwtwGUDX8FrEXLxOF57ZrGyTgvQHs2kJ9RVwqYfYzGCjkPl0pdCicdcIZEu2BO04juGo5Fm3JpPHLEzdD9p62F00vrk8bcLa');

export default function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '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',
  };

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};