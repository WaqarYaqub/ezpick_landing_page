// components/PaymentForm.js

import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true);

    // Create PaymentMethod
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    // Call your server-side endpoint to create a PaymentIntent
    // const response = await fetch('/api/create-payment-intent', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ amount: 1000 }), // Replace '1000' with the amount you want to charge (in cents)
    // });

    const paymentMethodId = paymentMethod.id;
      const amount = 1; // Replace with the actual payment amount in cents
      const currency = "usd"; // Replace with the desired currency code

      // Send a request to your server to create a payment intent
      const response = await fetch("https://test.ezpick.co/clients/paymentIntent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency, paymentMethodId }),
      });

    const data = await response.json();

    // Confirm the PaymentIntent
    const { error: confirmError } = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: paymentMethod.id,
    });

    setLoading(false);

    if (confirmError) {
      console.error(confirmError);
    } else {
      // Payment success
      console.log('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || loading}>
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
