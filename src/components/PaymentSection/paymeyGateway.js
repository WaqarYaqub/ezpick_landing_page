import React, { useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { updateClient, sendEmail } from "@/services";

function PaymentForm({
  plan,
  client,
  openModal,
  setLoading,
  isLoading,
  openUnSuccessModal,
  local,
}) {
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
      setLoading(false);
      setError(error.message);
      openUnSuccessModal();
      return;
    } else {
      // Payment method created successfully. You can send the paymentMethod.id to your server.
      console.log(paymentMethod);
      // Send the payment method ID to your server
      const paymentMethodId = paymentMethod.id;
      const amount = plan?.price; // Replace with the actual payment amount in cents
      const currency = "usd"; // Replace with the desired currency code

      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}clients/paymentIntent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify the content type
          // Add any other headers if needed
        },
        body: JSON.stringify({ amount, currency, paymentMethodId }), // Convert your data to JSON format
      })
        .then((response) => {
          if (!response.ok) {
            setLoading(false);
            openUnSuccessModal();
            return;
          }
          return response.json(); // Parse the JSON response
        })
        .then(async (data) => {
          if (data?.success) {
            setLoading(false);
            openModal();
            const clientData = {
              id: client?.id,
              status: 1,
              planId: plan?.id,
            };
            const response = await updateClient(clientData);
            if (response?.success) {
              const emailData = {
                id: client?.id,
                email: client?.email,
                name: client?.email,
                password: client?.password,
              };
              const response = await sendEmail(emailData);
              if (response?.success) {
                console.log("Email sent");
              }
              setLoading(false);
              setError("payment done succesfully");
            }
          } else {
            setLoading(false);
            openUnSuccessModal();
            setError("Failed");
            return;
          }
        })
        .catch((error) => {
          setLoading(false);
          openUnSuccessModal();
          setError(error);
          return;
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-4 bg-white">
        <div>
          <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
            {local?.CARD_NUMBER || "Card Number"}
          </label>

          <CardNumberElement
            options={{
              appearance: {
                theme: "night",
              },
              showIcon: true,
              placeholder: `${local?.PLACE_CARD_NUMBER}` || "Enter Card Number",
              iconStyle: "solid", // or 'default'
              style: {
                base: {
                  iconColor: "#FFBD1D",
                  color: "#737373",
                  fontWeight: "500",
                  fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                  fontSize: "16px",
                  fontSmoothing: "antialiased",
                  ":-webkit-autofill": {
                    color: "#fce883",
                  },
                  "::placeholder": {
                    color: "#737373",
                  },
                },
                invalid: {
                  iconColor: "#ff3860",
                  color: "#ff3860",
                },
              },
            }}
            className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
          <div>
            <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
              {local?.MM_YY || "MM / YY"}
            </label>
            <CardExpiryElement
              options={{
                placeholder: `${local?.MM_YY}` || "MM / YY",
                style: {
                  base: {
                    iconColor: "#FFBD1D",
                    color: "#737373",
                    fontWeight: "500",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontSmoothing: "antialiased",
                    ":-webkit-autofill": {
                      color: "#fce883",
                    },
                    "::placeholder": {
                      color: "#737373",
                    },
                  },
                },
              }}
              className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
            />
          </div>

          <div>
            <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
              {local?.CVV || "CVV"}
            </label>
            <CardCvcElement
              options={{
                placeholder: `${local?.CVV}` || "CVV",
                style: {
                  base: {
                    iconColor: "#FFBD1D",
                    color: "#737373",
                    fontWeight: "500",
                    fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                    fontSize: "16px",
                    fontSmoothing: "antialiased",
                    ":-webkit-autofill": {
                      color: "#fce883",
                    },
                    "::placeholder": {
                      color: "#737373",
                    },
                  },
                },
              }}
              className="text-[#737373] w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[30px]">
          <div>
            <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
              {local?.COUNTRY || "Country"}
            </label>
            <input
              type="text"
              readOnly
              value={client?.city}
              placeholder={`${local?.COUNTRY}` || "Country"}
              disabled
              className="text-[#737373] w-full py-[13px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
            />
          </div>

          <div>
            <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
              {local?.ZIP || "ZIP"}
            </label>
            <input
              type="text"
              readOnly
              disabled
              value={client?.zipCode}
              placeholder={`${local?.ZIP}` || "ZIP Code"}
              className="text-[#737373] w-full py-[13px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            className={`w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] ${
              isLoading
                ? "bg-gray-500"
                : "bg-gradient-to-r from-[#FFBD1D] to-[#FCA000]"
            }  bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]`}
            type="submit"
            disabled={!stripe || isLoading}
          >
            {isLoading
              ? `${local?.PROCESSING}` || `Processing...`
              : `${local?.PAY_NOW}` || `Pay Now`}
          </button>
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default PaymentForm;
