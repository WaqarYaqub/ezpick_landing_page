import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    card_number: '',
    exp_month: '',
    exp_year: '',
    cvc: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const stripe = await stripePromise;

    try {
      // Create a payment method with Stripe
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: {
          number: formData.card_number,
          exp_month: formData.exp_month,
          exp_year: formData.exp_year,
          cvc: formData.cvc,
        },
      });

      if (error) {
        console.error(error.message);
        // Handle errors on the form (e.g., show an error message to the user)
        return;
      }

      // Send the payment method ID to your server
      const paymentMethodId = paymentMethod.id;
      const amount = 1000; // Replace with the actual payment amount in cents
      const currency = 'usd'; // Replace with the desired currency code

      // Send a request to your server to create a payment intent
      const response = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currency, paymentMethodId }),
      });

      const data = await response.json();

      // Confirm the payment on the client side
      const { error: paymentError } = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: paymentMethodId,
      });

      if (paymentError) {
        console.error(paymentError.message);
        // Handle errors on the form (e.g., show an error message to the user)
      } else {
        // Payment succeeded
        // Redirect or show a success message to the user
      }
    } catch (error) {
      console.error(error);
      // Handle other errors (e.g., show a generic error message)
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add your form fields for card information */}
      <input
        type="text"
        name="card_number"
        placeholder="Card Number"
        value={formData.card_number}
        onChange={handleChange}
      />
      <input
        type="text"
        name="exp_month"
        placeholder="Expiration Month"
        value={formData.exp_month}
        onChange={handleChange}
      />
      <input
        type="text"
        name="exp_year"
        placeholder="Expiration Year"
        value={formData.exp_year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cvc"
        placeholder="CVC"
        value={formData.cvc}
        onChange={handleChange}
      />

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
