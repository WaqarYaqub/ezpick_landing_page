import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const STRIPE_PUBLIC_KEY =
  "pk_live_51MAwtwGUDX8FrEXLxOF57ZrGyTgvQHs2kJ9RVwqYfYzGCjkPl0pdCicdcIZEu2BO04juGo5Fm3JpPHLEzdD9p62F00vrk8bcLa";
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const PaymentMethod = ({ client, selectedPlan, plans }) => {
  const [formData, setFormData] = useState({
    card_number: "",
    exp_mm_YY: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    region: "",
    zip: "",
  });

  const plan = plans?.find((item) => item?.id === selectedPlan);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData, "formData");
    const stripe = await stripePromise;

    try {
      // Create a payment method with Stripe
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
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
      const amount = plan?.price; // Replace with the actual payment amount in cents
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

      // Confirm the payment on the client side
      const { error: paymentError } = await stripe.confirmCardPayment(
        data.firstPartclientSecret,
        {
          payment_method: paymentMethodId,
        }
      );

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
    if (name === "exp_mm_YY") {
      // const formattedValue = value.replace(/[^\d/]/g, "").slice(0, 5);
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
    <>
      <div className="bg-[#F5F5F5] py-[80px]">
        <div className="mx-auto max-w-screen-sm md:max-w-screen-xl">
          <div className="px-[30px] lg:px-[0px] bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[30px]">
            <div className="grid grid-rows-2 gap-[20px]">
              <div className="relative rounded-[15px] shadow-custom bg-white py-[24px] md:py-[30px] px-[20px] md:px-[30px]">
                <span className="cursor-pointer absolute top-[25px] right-[20px] md:right-[25px]">
                  <img src="/icons/edit.svg" />
                </span>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  {client?.schoolName}
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  {client?.name}
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  {client?.mobile}
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  {client?.email}
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000]">
                  {client?.address}
                </p>
              </div>
              <div className="rounded-[15px] shadow-custom bg-white py-[37px] md:py-[0px] md:pt-[25px] px-[27px] md:px-[30px]">
                <div className="flex gap-[40px] mb-[30px]">
                  <img src="/icons/ezpickLogo.svg" />
                  <div>
                    <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[20px]">
                      EZPICK
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000] mb-[20px]">
                      School scheduling software
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                      {"Exp: 01-08-2024"}
                    </p>
                  </div>
                </div>
                <hr className="border border-[#B1B1B1] mb-[33px]" />
                <div>
                  <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[10px]">
                    {`Total: $${plan?.price}.00`}
                  </p>
                  <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                    {"Next billing cycle: 01-08-2024"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[15px] shadow-custom bg-white py-[40px] px-[20px] md:px-[30px]">
              <span className="cursor-pointer absolute top-[20px] md:top-[10px] right-[10px]">
                <img
                  placeholder="CVC"
                  src="/icons/cross.svg"
                  className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
                />
              </span>
              <h1 className="text-center text-[24px] md:text-[30px] font-semibold leading-tight font-montserrat text-[#111019] pb-[50px]">
                Payment Gateway
              </h1>

              <div className="grid grid-cols-1 gap-4 bg-white">
                <div>
                  <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
                    Card Info
                  </label>
                  <input
                    type="text"
                    className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]"
                    placeholder="Number"
                    name="card_number"
                    value={formData.card_number}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
                  <div>
                    <input
                      type="text"
                      className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
                      placeholder="MM/YY"
                      pattern="\d\d/\d\d"
                      name="exp_mm_YY"
                      value={formData.exp_mm_YY}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      className="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
                      placeholder="CVV"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[50px]">
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
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    className="w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
                  >
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100px]"></div>
    </>
  );
};

export default PaymentMethod;
