import React from "react";

const MobileAppSection = () => {
  return (
    <div className="bg-[#F5F5F5] py-[80px] md:py-[50px]">
      <div className="px-[30px] lg:px-[0px] mx-auto max-w-screen-sm md:max-w-screen-xl">
        <p className="text-black text-center font-montserrat text-[38px] md:text-[40px] font-bold mb-[20px]">
          Mobile App for <span className="text-[#FFB31A]">Teachers</span> &
          <span className="text-[#2F4D33]"> Parents</span>
        </p>
        <p className="text-black text-center font-montserrat text-[14px] md:text-[15px] font-normal">
          {
            "We understand the importance of your child's safety, and that's why Ezpick has been"
          }
        </p>
        <p className="text-black text-center font-montserrat text-[14px] md:text-[15px] font-normal mb-[20px]">
          houghtfully engineered to ensure a seamless pickup experience every
          single time.
        </p>
      </div>
      {/* <div className="hidden md:flex justify-center gap-[20px]">
        <img src="/icons/appStore.svg" alt="Logo" />
        <img src="/icons/googlePlay.svg" alt="Logo" />
      </div>
      <div className="flex md:hidden justify-center gap-[17px]">
        <img src="/icons/mblAppStore.svg" alt="Logo" />
        <img src="/icons/mblGooglePlay.svg" alt="Logo" />
      </div> */}
    </div>
  );
};

export default MobileAppSection;
