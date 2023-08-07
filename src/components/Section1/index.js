import React from "react";

const Section1 = ({data}) => {
  return (
    <div className="px-[30px] lg:px-[0px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mx-auto max-w-screen-sm md:max-w-screen-xl mb-[50px]">
      <div className="order-2 md:order-1">
        <img
          src="/images/section1.png"
          alt="Your Image"
          className="rounded-lg"
        />
      </div>

      <div className="order-1 md:order-2 flex flex-col justify-center">
        <p className="font-montserrat text-[14px] lg:text-[16px] text-[#FFB31A] mb-[20px]">
          {/* Eliminates Chaos And Confusion During Student Pick-Up Times */}
          {data?.securityAuthorizedSmallText}
        </p>
        <p className="font-montserrat text-[38px] lg:text-[50px] text-[#000] font-bold mb-4">
          {/* Reduces The Risk Of Unauthorized Persons Picking Up Students */}
          {data?.securityAuthorizedBoldText}
        </p>
        <p className="text-black font-montserrat text-[16px] lg:text-[20px] font-normal leading-30 mb-[40px]">
          {/* EZpick-Up System Can Enhance The Safety And Security Of Students By
          Ensuring That Only Authorized Individuals Can Pick Up The Students */}
          {data?.securityAuthorizedDescription}
        </p>

        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 pl-5 list-disc">
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* Guardian Authentication */}
            {data?.securityAuthorizedPoint1}
          </li>
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* Safeguarding Your Children */}
            {data?.securityAuthorizedPoint4}
          </li>
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* User-Friendly Interface */}
            {data?.securityAuthorizedPoint2}
          </li>
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* Student Enrollment */}
            {data?.securityAuthorizedPoint5}
          </li>
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* Reduced Wait Times */}
            {data?.securityAuthorizedPoint3}
          </li>
          <li className="text-black font-montserrat text-[18px] font-medium leading-normal">
            {/* Pickup Reminders */}
            {data?.securityAuthorizedPoint6}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section1;
