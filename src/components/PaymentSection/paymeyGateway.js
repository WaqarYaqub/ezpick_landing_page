import React, { useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { updateClient } from "@/services";

function PaymentForm({ plan, client, openModal, setLoading, isLoading }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(
        CardCvcElement,
        CardExpiryElement,
        CardNumberElement
      ),
    });

    if (error) {
      setError(error.message);
    } else {
      // Payment method created successfully. You can send the paymentMethod.id to your server.
      console.log(paymentMethod);
      // Send the payment method ID to your server
      const paymentMethodId = paymentMethod.id;
      const amount = plan?.price; // Replace with the actual payment amount in cents
      const currency = "usd"; // Replace with the desired currency code

      fetch("https://test.ezpick.co/clients/paymentIntent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          // Add any other headers if needed
        },
        body: JSON.stringify({ amount, currency, paymentMethodId }), // Convert your data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            setError("Failed");
            throw new Error("Network response was not ok"); // Handle error cases
          }
          return response.json(); // Parse the JSON response
        })
        .then(async (data) => {
          // Handle the parsed response data
          console.log("Response data:", data);
          console.log("payment done succesfully");

          if (data?.success) {
            setError("payment done succesfully");
            const clientData = {
              id: client?.id,
              status: 1,
              planId: plan?.id,
            };
            const response = await updateClient(clientData);
            if (response?.success) {
              setLoading(false);
              openModal();
            }
          } else setError("Failed");
        })
        .catch((error) => {
          console.error("Fetch error:", error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 bg-white">
        <div>
          <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
            Card Info
          </label>

          <CardNumberElement className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
          <div>
            <CardExpiryElement className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]" />
          </div>

          <div>
            <CardCvcElement className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]" />
          </div>
        </div>

        <div className="flex justify-center mt-[30px]">
          <button
            className={`w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] ${
              isLoading
                ? "bg-gray-500"
                : "bg-gradient-to-r from-[#FFBD1D] to-[#FCA000]"
            }  bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]`}
            type="submit"
            disabled={!stripe || isLoading}
          >
            {isLoading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default PaymentForm;
