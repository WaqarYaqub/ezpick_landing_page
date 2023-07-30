import React from "react";

const Section1 = () => {
  return (
    <div className="bg-[#F5F5F5] py-[80px] md:py-[30px]">
      <div className="px-[30px] lg:px-[0px] bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[50px] mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div className="flex flex-col justify-center">
          <p className="font-montserrat text-[14px] lg:text-[16px] text-[#FFB31A] mb-[20px]">
            Saves Time And Reduces Waiting Times For Parents
          </p>
          <p className="font-montserrat text-[38px] lg:text-[50px] text-[#000] font-bold mb-[0px]">
            Real-Time
          </p>
          <p className="font-montserrat text-[38px] lg:text-[50px] text-[#000] font-bold  mt-[0px] mb-4">
            Updates
          </p>
          <p className="text-black font-montserrat text-[16px] lg:text-[20px] font-normal leading-30 mb-[40px]">
            {
              "Parents Receive Real-Time Updates On The Status Of Their Child's Pick-Up, Including The Estimated Time Of Arrival."
            }
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center">
              <span className="text-[#2F4D33] font-montserrat text-[50px] md:text-[60px] font-bold leading-tight">
                01
              </span>
              <span className="ml-[50px] text-black font-montserrat text-[14px] md:text-[20px] font-normal leading-6">
                System Provide Schools With Valuable Data And Analytics
              </span>
            </div>
            <hr className="border border-[#B1B1B1] my-[10px]" />

            <div className="flex items-center">
              <span className="text-[#2F4D33] font-montserrat text-[50px] md:text-[60px] font-bold leading-tight">
                02
              </span>
              <span className="ml-[50px] text-black font-montserrat text-[14px] md:text-[20px] font-normal leading-6">
                Help Schools Save Time And Money, Increasing Their Efficiency
                And Productivity
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/images/section2Image.png"
            alt="Your Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
