import Link from "next/link";
import React from "react";

const Header = ({ setSelectedLanguage, selectedLanguage, locales }) => {
  return (
    <header id="header-section" className="bg-white text-white py-4 px-6 flex justify-between items-center mx-auto max-w-screen-sm md:max-w-screen-xl">
      <div className="flex items-center">
        <Link href={"/"}>
          <img
            className="h-[35px] w-[140px] lg:h-[52px] lg:w-[189px]"
            src="logo.png"
            alt="Logo"
          />
        </Link>
      </div>

      <div className="flex items-center">
        <LanguageSelector
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
        />
        <Link href={"https://school.ezpick.co/"} target="_blank">
          <button className="w-[146px] h-[32px] lg:w-[146px] lg:h-[52px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]">
            {locales?.LOGIN || "LogIn"}
          </button>
        </Link>
      </div>
    </header>
  );
};

function LanguageSelector({ setSelectedLanguage, selectedLanguage }) {
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;

    setSelectedLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
    window.location.reload()
  };

  return (
    <div className="relative inline-flex">
      <select
        className="cursor-pointer rounded-lg block appearance-none w-[60px] md:w-[80px] py-2 rounded-lg bg-white text-gray-800 focus:outline-none focus:border-indigo-500"
        value={selectedLanguage}
        onChange={handleLanguageChange}
        id="languageSelect"
        name="language"
      >
        <option className="p-2" value="en">
          🇺🇸 EN
        </option>
        <option className="p-2" value="ar">
          🇸🇦 AR
        </option>
        <option className="p-2" value="fr">
          🇫🇷 FR
        </option>
      </select>
    </div>
  );
}

export default Header;
