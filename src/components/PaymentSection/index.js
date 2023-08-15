import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { RotatingLines } from "react-loader-spinner";

import PaymentForm from "./paymeyGateway";

const PaymentMethod = ({
  client,
  selectedPlan,
  plans,
  openModal,
  closeModal,
  openUnSuccessModal,
  locales,
}) => {
  const plan = plans?.find((item) => item?.id === selectedPlan);
  const [isLoading, setLoading] = useState(false);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  const getNextYear = () => {
    const currentDate = new Date();

    const nextYear = currentDate.getFullYear() + 1;

    const nextYearDate = new Date(currentDate);
    nextYearDate.setFullYear(nextYear);

    const formattedDate = `${String(nextYearDate.getDate()).padStart(
      2,
      "0"
    )}-${String(nextYearDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${nextYearDate.getFullYear()}`;

    return formattedDate;
    openModal;
  };
  const getNextMonth = () => {
    const currentDate = new Date();
    const nextMonth = currentDate.getMonth() + 1;

    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonth);

    const formattedDate = `${String(nextMonthDate.getDate()).padStart(
      2,
      "0"
    )}-${String(nextMonthDate.getMonth() + 1).padStart(
      2,
      "0"
    )}-${nextMonthDate.getFullYear()}`;
    return formattedDate;
  };

  return (
    <>
      <div className="bg-[#F5F5F5] py-[80px]" id="payment-section">
        <div className="mx-auto max-w-screen-sm md:max-w-screen-xl">
          <div className="px-[30px] lg:px-[0px] bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[30px]">
            <div className="grid grid-rows-2 gap-[20px]">
              <div className="relative rounded-[15px] shadow-custom bg-white py-[24px] md:py-[30px] px-[20px] md:px-[30px]">
                {/* <span className="cursor-pointer absolute top-[25px] right-[20px] md:right-[25px]">
                  <img src="/icons/edit.svg" />
                </span> */}
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
              <div className="rounded-[15px] shadow-custom bg-white py-[37px] md:py-[20px] md:pt-[25px] px-[27px] md:px-[30px]">
                <div className="flex gap-[40px] mb-[30px]">
                  <img src="/icons/ezpickLogo.svg" />
                  <div>
                    <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[20px]">
                      {locales?.PAYMENT_SECTION?.EZPICK || "EZPICK"}
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000] mb-[20px]">
                      {locales?.PAYMENT_SECTION?.SCHOOL_SCHEDULING_SOFTWARE ||
                        "School scheduling software"}
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                      {`${locales?.PAYMENT_SECTION?.EXP || "Exp:"}: ${
                        plan?.durationType === "yearly"
                          ? getNextYear()
                          : getNextMonth()
                      }`}
                    </p>
                  </div>
                </div>
                <hr className="border border-[#B1B1B1] mb-[33px]" />
                <div>
                  <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[10px]">
                    {`${locales?.PAYMENT_SECTION?.TOTAL || "Total"}: $${
                      plan?.price
                    }.00`}
                  </p>
                  <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                    {`${
                      locales?.PAYMENT_SECTION?.NEXT_BILLING_CYCLE ||
                      "Next billing cycle"
                    } ${
                      plan?.durationType === "yearly"
                        ? getNextYear()
                        : getNextMonth()
                    }`}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${
                isLoading && "blury-display "
              } relative rounded-[15px] shadow-custom bg-white py-[40px] px-[20px] md:px-[30px]`}
            >
              <span className="cursor-pointer absolute top-[20px] md:top-[10px] right-[10px]">
                <img
                  onClick={closeModal}
                  placeholder="CVC"
                  src="/icons/cross.svg"
                  className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
                />
              </span>
              <h1
                className={`text-center text-[24px] md:text-[30px] font-semibold leading-tight font-montserrat text-[#111019] pb-[50px]`}
              >
                {locales?.PAYMENT_SECTION?.FORM?.HEADING || "Payment Gateway"}
              </h1>
              {isLoading && (
                <div className="z-10 absolute inset-0 flex items-center justify-center">
                  <RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={isLoading}
                  />
                </div>
              )}
              <Elements stripe={stripePromise}>
                <PaymentForm
                  plan={plan}
                  client={client}
                  openModal={openModal}
                  setLoading={setLoading}
                  openUnSuccessModal={openUnSuccessModal}
                  isLoading={isLoading}
                  local={locales?.PAYMENT_SECTION?.FORM}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100px]"></div>
    </>
  );
};

export default PaymentMethod;
