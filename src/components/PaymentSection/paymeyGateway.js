import React, { useState } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

function PaymentForm({ price, openModal }) {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    card_number: "",
    exp_mm_YY: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    region: "",
    zip: "",
  });

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

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // Payment method created successfully. You can send the paymentMethod.id to your server.
      console.log(paymentMethod);
      // Send the payment method ID to your server
      const paymentMethodId = paymentMethod.id;
      const amount = price; // Replace with the actual payment amount in cents
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
        .then((data) => {
          // Handle the parsed response data
          console.log("Response data:", data);
          console.log("payment done succesfully");
          openModal();
          if (data?.success) setError("payment done succesfully");
          else setError("Failed");
        })
        .catch((error) => {
          // Handle errors that occurred during the fetch process
          console.error("Fetch error:", error);
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "exp_mm_YY") {
      // Only allow digits and slashes
      const formattedValue = value.replace(/[^\d/]/g, "");

      // Remove any slash after the first one
      const slashIndex = formattedValue.indexOf("/");
      const firstPart = formattedValue.slice(0, slashIndex + 1);
      const secondPart = formattedValue
        .slice(slashIndex + 1)
        .replace(/\//g, "");

      // Keep only the first 2 digits before the slash and the first 2 digits after the slash
      const finalValue = `${firstPart.slice(0, 3)}${secondPart.slice(0, 2)}`;
      setFormData((prevData) => ({
        ...prevData,
        [name]: finalValue,
        ["exp_month"]: firstPart.slice(0, 2),
        ["exp_year"]: secondPart.slice(0, 2),
      }));
    } else setFormData((prevData) => ({ ...prevData, [name]: value }));
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

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[50px]">
          <div>
            <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
              {"Country/region"}
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]"
              placeholder="Select Country"
              name="region"
              value={formData.region}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[30px]"
              placeholder="ZIP"
              name="zip"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div> */}
        <div className="flex justify-center">
          <button
            className="w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
            type="submit"
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </div>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default PaymentForm;
