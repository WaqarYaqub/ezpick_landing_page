import React from "react";

const SlidItem = () => {
  return (
    <div className="my-[50px] m-[40px] w-[auto] h-[573px] transform -skew-y-[10deg] rounded-[15px] bg-white filter shadow-custom hover:drop-shadow-2xl">
      <button className="absolute -top-[16px] -right-[16px] w-[160px] h-[52px]  md:w-[160px] md:h-[52px] bg-gradient-to-r from-[#2F4D33] to-[#339559] bg-no-repeat bg-padding-box shadow-md rounded-md cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[17px] font-semibold flex items-center justify-center uppercase hover:from-[#339559] hover:to-[#2F4D33]">
            Essentail Plan
          </button>
          <div className="transform skew-y-[10deg] absolute mt-[100px] w-full">
            <div className="flex justify-center items-center flex-col">
              <p className="text-black font-montserrat text-[18px] font-bold">
                Monthly
              </p>
              <p className="text-black font-montserrat text-[30px] font-bold">
                <sup className="text-black font-montserrat text-[15px] font-bold">
                  $
                </sup>
                299
                <span className="text-black font-montserrat text-[15px] font-bold">
                  .00
                </span>
              </p>
              <span className="text-black font-montserrat text-[11px] font-normal">
                /MONTH
              </span>
            </div>

            <div className="p-[28px]">
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  Number of Students up to 200
                </span>
              </div>
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  Number of Schools 1
                </span>
              </div>
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  Free Installation
                </span>
              </div>
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  Free Training
                </span>
              </div>
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  Free Lifetime Update
                </span>
              </div>
              <div className="flex items-center mb-3">
                <span>&#8226;</span>
                <span className="ml-2 text-black font-monomaniac-one text-[14px] font-normal leading-normal">
                  24/7 Email Help
                </span>
              </div>
            </div>

            <div className="flex justify-center mt-[25px]">
              <button className="w-[180px] h-[44px] lg:w-[148px] lg:h-[44px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]">
                Select
              </button>
            </div>
          </div>
    </div>
  );
};

export default SlidItem;