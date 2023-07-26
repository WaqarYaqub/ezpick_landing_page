import React from "react";

const Section1 = () => {
  return (
    <div className="px-[30px] lg:px-[0px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto max-w-screen-sm md:max-w-screen-xl mb-[50px]">
      {/* Column 1: Image */}
      <div className="order-2 md:order-1">
        <img
          src="/images/section1.png"
          alt="Your Image"
          className="rounded-lg"
        />
      </div>

      {/* Column 2: Content */}
      <div className="order-1 md:order-2 flex flex-col justify-center">
        <p className="font-montserrat text-[14px] lg:text-[16px] text-[#FFB31A] mb-[20px]">
          Eliminates Chaos And Confusion During Student Pick-Up Times
        </p>
        <p className="font-montserrat text-[38px] lg:text-[50px] text-[#000] font-bold mb-4">
          Reduces The Risk Of Unauthorized Persons Picking Up Students
        </p>
        <p className="text-black font-montserrat text-[16px] lg:text-[20px] font-normal leading-30 mb-[40px]">
          EZpick-Up System Can Enhance The Safety And Security Of Students By
          Ensuring That Only Authorized Individuals Can Pick Up The Students
        </p>

        {/* Bullets */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">Guardian Authentication</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">Safeguarding Your Children</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">User-Friendly Interface</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">Student Enrollment</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">Reduced Wait Times</span>
          </div>
          <div className="flex items-center">
            <span className="text-black font-montserrat text-[18px] font-medium leading-normal">
              &#8226;
            </span>
            <span className="ml-2">Pickup Reminders</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
