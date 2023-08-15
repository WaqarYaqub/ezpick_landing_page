import React from "react";

const UnsuccessPage = ({ closeModal, locales }) => {
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
      <img src="/icons/unseccess.png" />
      <p className="text-[30px] font-bold font-[#111019] mb-[10px] mt-[20px]">
        {locales?.HEADING || "Purchase Unsuccessful"}
      </p>
      <p className="text-[18px] font-normal font-[#737373] mb-[10px]">
        {locales?.SUB_HEADING_1 ||
          "Your purchase was unsuccessful because of some kind of issue."}
      </p>

      <p className="text-[18px] font-normal font-[#737373] mb-[10px]">
        {locales?.SUB_HEADING_2 || "Check your credit/debit card credentials"}
      </p>
      <div className=" mt-[20px]">
        <button
          className="w-[157px] h-[44.263px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
          onClick={closeModal}
        >
          {locales?.BUTTON || "GOT IT!"}
        </button>
      </div>
    </div>
  );
};

export default UnsuccessPage;
