"use client";
import React, { useState } from "react";

const Section1 = () => {
  const [nameOnly, setNameOnly] = useState(false);

  const handleChangeSwitch = (event) => {
    setNameOnly(event.target.checked);
  };
  return (
    <div className="pb-[120px] pt-[64px]" id="pricing-section">
      <div className="pb-[64px] px-[30px]">
        <p className="text-black text-center font-montserrat text-[38px] md:text-[50px] font-bold mb-[40px]">
          Choose the plan that fits your needs.
        </p>
        <p className="text-black text-center font-montserrat text-[18px] font-normal mb-[25px]">
          Switch your plan from monthly to yearly
        </p>
        <div className="flex items-center justify-center">
          <p className="text-black font-montserrat text-[18px] font-normal leading-tight">
            Monthly
          </p>
          <label className="relative inline-flex items-center mx-3 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={nameOnly}
              onChange={handleChangeSwitch}
            />
            <div
              className={`w-12 h-6 bg-gray-300 rounded-full ${
                nameOnly ? "bg-[#FF8A0F]" : ""
              } peer peer-focus:ring-4 peer-focus:ring-[#FF8A0F] dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-[#FF8A0F] after:content-[''] after:absolute after:-top-0.5 after:-left-1 after:bg-[#FF8A0F] after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-300`}
            ></div>
          </label>
          <p className="text-black font-montserrat text-[18px] font-normal leading-tight">
            Yearly
          </p>
        </div>
      </div>
      <div className="hidden md:flex mt-[50px] px-[30px] lg:px-[0px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-[26px] mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div class="w-full h-[573px] md:w-[276px] md:h-[573px] transform -skew-y-[10deg] rounded-[15px] bg-white filter shadow-custom hover:drop-shadow-2xl">
          <button class="absolute -top-[16px] -right-[16px] w-[160px] h-[52px]  md:w-[160px] md:h-[52px] bg-gradient-to-r from-[#2F4D33] to-[#339559] bg-no-repeat bg-padding-box shadow-md rounded-md cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[17px] font-semibold flex items-center justify-center uppercase hover:from-[#339559] hover:to-[#2F4D33]">
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
              <button class="w-[180px] h-[44px] lg:w-[148px] lg:h-[44px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]">
                Select
              </button>
            </div>
          </div>
        </div>
        <div class="w-full h-[573px] md:w-[276px] md:h-[573px] transform -skew-y-[10deg] rounded-[15px] bg-white filter shadow-custom hover:drop-shadow-2xl">
          <button class="absolute -top-[16px] -right-[16px] w-[150px] h-[52px] md:w-[150px] md:h-[52px] bg-gradient-to-r from-[#2F4D33] to-[#339559] bg-no-repeat bg-padding-box shadow-md rounded-md cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[17px] font-semibold flex items-center justify-center uppercase hover:from-[#339559] hover:to-[#2F4D33]">
            Growth Plan
          </button>
        </div>
        <div class="w-full h-[573px] md:w-[276px] md:h-[573px] transform -skew-y-[10deg] rounded-[15px] bg-white filter shadow-custom hover:drop-shadow-2xl">
          <button class="absolute -top-[16px] -right-[16px] w-[200px] h-[52px] md:w-[200px] md:h-[52px] bg-gradient-to-r from-[#2F4D33] to-[#339559] bg-no-repeat bg-padding-box shadow-md rounded-md cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[17px] font-semibold flex items-center justify-center uppercase hover:from-[#339559] hover:to-[#2F4D33]">
            Professional Plan
          </button>
        </div>
        <div class="w-full h-[573px] md:w-[276px] md:h-[573px] transform -skew-y-[10deg] rounded-[15px] bg-white filter shadow-custom hover:drop-shadow-2xl">
          <button class="absolute -top-[16px] -right-[16px] w-[170px] h-[52px] md:w-[170px] md:h-[52px] bg-gradient-to-r from-[#2F4D33] to-[#339559] bg-no-repeat bg-padding-box shadow-md rounded-md cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[17px] font-semibold flex items-center justify-center uppercase hover:from-[#339559] hover:to-[#2F4D33]">
            Enterprise Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
