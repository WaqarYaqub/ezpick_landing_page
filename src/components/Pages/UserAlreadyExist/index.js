import React, { useState } from "react";
import OtpInput from "./otp";
import { verify } from "@/services";
import { RotatingLines } from "react-loader-spinner";

const UserAlreadyExist = ({
  client,
  closeModal,
  locales,
  setIsVerifiedUser,
  setClient,
}) => {
  const [otp, setOtp] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOtpChange = (numericOtp) => {
    setOtp(numericOtp);
  };

  const VerifyClient = async () => {
    setLoading(true);
    const data = {
      otp: otp,
      email: client?.email,
    };

    const result = await verify(data);
    if (result?.success) {
      setLoading(false);
      setIsVerifiedUser(result?.success);
      closeModal();
      setClient(result?.client);
    } else {
      setLoading(false);
      setIsVerifiedUser(result?.success);
      setError(result?.message);
    }
  };

  return (
    <div className={`${loading ? "blury-display" : ""}`}>
      {loading && (
        <div className="z-10 absolute inset-0 flex items-center justify-center">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={loading}
          />
        </div>
      )}
      <div className="relative flex flex-col items-center text-center justify-center h-[70vh] md:h-[50vh] w-[90vw] md:w-[38vw] px-[30px] md:px-[110px] py-[30px] md:py-[45px]">
        <span className="cursor-pointer absolute top-[20px] md:top-[10px] right-[10px]">
          <img
            onClick={closeModal}
            placeholder="cross"
            src="/icons/cross.svg"
            className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
          />
        </span>
        <p className="text-[24px] font-bold text-[#111019] mb-[10px] mt-[20px]">
          {locales?.HEADING || "This email address already exists"}
        </p>
        <p className="text-[18px] font-normal font-[#737373] mb-[15px]">
          {locales?.SUB_HEADING_1 || "If this is your email, please verify it"}
        </p>
        <p className="text-[18px] font-normal font-[#737373] mb-[15px]">
          {locales?.SUB_HEADING_2 || "An OTP has been sent to this email"}
        </p>
        <p className="text-[20px] font-semibold text-[#111019] mb-[15px]">
          {client?.email || "abc@example.com"}
        </p>
        <OtpInput length={4} onOtpChange={handleOtpChange} />
        <div className=" mt-[20px]">
          <button
            className="w-[157px] h-[44.263px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
            onClick={VerifyClient}
          >
            {locales?.BUTTON || "Submit"}
          </button>
        </div>
        <p className="text-[20px] font-semibold text-[#B40105] mt-[15px]">
          {error}
        </p>
      </div>
    </div>
  );
};

export default UserAlreadyExist;
