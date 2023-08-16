import React, { useEffect, useState } from "react";
import Locales from "@/locals/privacy.json";

const PrivacyPage = ({ closeModal, lang }) => {
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    setTranslation(Locales[lang]);
  }, [lang]);

  return (
    <div className="overflow-y-scroll overflow-x-hidden relative h-[70vh] md:h-[80vh] w-[90vw] md:w-[60vw] px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
      <span className="cursor-pointer absolute top-[10px] md:top-[10px] right-[10px]">
        <img
          onClick={closeModal}
          placeholder="cross"
          src="/icons/cross.svg"
          className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
        />
      </span>
      <div className="flex items-center text-left md:text-center justify-center mb-[30px]">
        <p className="text-[22px] md:text-[30px] font-medium text-[#111019]">
          {translation.PrivacyPolicy}
        </p>
      </div>

      <div className="">
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.PolicyDescription}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.EffectiveDate}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.InformationCollect}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.PersonalIdentification}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.PhotoVerification}
        </p>
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {translation.UseOfInformation}
        </p>
        <ul className="list-disc pl-6">
          {translation?.UseOfInfoList?.map((item, index) => (
            <li
              key={index}
              className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]"
            >
              {item}
            </li>
          ))}
        </ul>
        {/* Information Sharing and Disclosure */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {translation.InfoSharingDisclosure}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.SharingDisclosureDesc}
        </p>
        {/* Protection of Information */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {translation.ProtectionOfInfo}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.ProtectionOfInfoDesc}
        </p>
        {/* User Consent */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {translation.UserConsent}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.UserConsentDesc}
        </p>
        {/* Privacy Policy Changes */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {translation.PolicyChanges}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.PolicyChangesDesc}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {translation.ContactUs}
        </p>
      </div>

      <div className="flex justify-center mt-[30px]">
        <button
          className="w-[130px] h-[35px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
          onClick={closeModal}
        >
          {translation.CloseButton}
        </button>
      </div>
    </div>
  );
};

export default PrivacyPage;
