import React from "react";

const Header = () => {
  return (
    <header className="bg-white text-white py-4 px-6 flex justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-xl">
      <div className="flex items-center">
        <img
          className="h-[35px] w-[152px] lg:h-[52px] lg:w-[189px]"
          src="logo.png"
          alt="Logo"
        />
      </div>

      <div>
        <button className="w-[100px] h-[32px] lg:w-[146px] lg:h-[52px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]">
          LogIn
        </button>
      </div>
    </header>
  );
};

export default Header;
