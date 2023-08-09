import React from "react";

const SuccessPage = ({ email, closeModal }) => {
  return (
    <div className="relative flex flex-col items-center text-center justify-center h-[70vh] md:h-[60vh] w-[90vw] md:w-[40vw] px-[30px] md:px-[110px] py-[30px] md:py-[45px]">
      <span className="cursor-pointer absolute top-[20px] md:top-[10px] right-[10px]">
        <img
          onClick={closeModal}
          placeholder="cross"
          src="/icons/cross.svg"
          className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
        />
      </span>
      <img src="/icons/success.svg" />
      <p className="text-[30px] font-bold font-[#111019] mb-[10px] mt-[20px]">
        Purchase Successfully!
      </p>
      <p className="text-[18px] font-normal font-[#737373] mb-[10px]">
        {
          "You have successfully get into the system.We have sent you an email on this"
        }
      </p>
      <p className="text-[20px] font-semibold font-[#111019] mb-[10px]">
        {email || "abc@example.com"}
      </p>
      <p className="text-[18px] font-normal font-[#737373] mb-[10px]">
        {
          "In that email you will found a link which will redirect you to our system."
        }
      </p>
      <div className=" mt-[20px]">
        <button
          className="w-[157px] h-[44.263px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
          onClick={closeModal}
        >
          {"Thanks!"}
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
