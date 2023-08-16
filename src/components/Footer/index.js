import React, { useState } from "react";
import PrivacyPage from "../Pages/PrivacyPage";
import Modal from "../Modal";
import TermAndCondition from "../Pages/TermAndCondition";
import Link from "next/link";

const Footer = ({ locales, lang }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal, setModal] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mx-auto max-w-screen-sm md:max-w-screen-xl">
      <div className="flex flex-col justify-center items-center pt-[40px] pb-[20px]">
        <Link href={"/"}>
          <img
            className="h-[35px] w-[152px] lg:h-[50px] lg:w-[190px] mb-[20px]"
            src="logo.png"
            alt="Logo"
          />
        </Link>
        <p className="w-[350px] text-[#7D899C] text-center font-montserrat font-normal text-[12px]">
          {locales?.FOOTER_SUB_HEADING ||
            "EZpick-up system is a technology-based solution that streamlines the process of picking up students from school."}
        </p>
      </div>
      <hr className="border border-[#B1B1B1] my-[10px] mx-[30px] md:mx-[0px]" />

      <footer className="p-[20px] grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mx-auto max-w-screen-sm md:max-w-screen-xl pb-[16px] md:mb-[0px]">
        <div className="order-3 md:order-1 text-center ltr:md:text-left rtl:md:text-right">
          <p className="text-[#586780]font-montserrat font-normal text-[12px]">
            {locales?.ALL_RIGHT_RESERVED || "&copy;2023. All rights reserved"}
          </p>
        </div>
        <div className="order-2 flex items-center justify-center gap-[25px]  mb-[20px] md:mb-[0px]">
          <Link href={"/"}>
            <img
              src={"/icons/linkedin.svg"}
              alt="Icon 1"
              className="h-[20px] w-[20px]"
            />
          </Link>
          <Link href={"/"}>
            <img
              src={"/icons/instagram.svg"}
              alt="Icon 2"
              className="h-[20px] w-[20px]"
            />
          </Link>
          <Link href={"/"}>
            <img
              src={"/icons/twitter.svg"}
              alt="Icon 3"
              className="h-[20px] w-[20px]"
            />
          </Link>
        </div>
        <div className="order-1 md:order-3 text-center md:text-right flex justify-center md:justify-end gap-[35px] mb-[20px] md:mb-[0px]">
          <p
            onClick={() => {
              setModal("privacy-policy");
              openModal();
            }}
            className="cursor-pointer text-[#586780]font-montserrat font-normal text-[12px]"
          >
            {locales?.PRIVACY_POLICY || "Privacy Policy"}
          </p>
          <p
            onClick={() => {
              setModal("terms-&-condition");
              openModal();
            }}
            className="cursor-pointer text-[#586780]font-montserrat font-normal text-[12px]"
          >
            {locales?.TERM_CONDITION || "Terms & Condition"}
          </p>
        </div>
      </footer>
      <Modal isModalOpen={isModalOpen}>
        {isModal ? (
          isModal === "privacy-policy" ? (
            <PrivacyPage lang={lang} closeModal={closeModal} />
          ) : (
            <TermAndCondition lang={lang} closeModal={closeModal} />
          )
        ) : null}
      </Modal>
    </div>
  );
};

export default Footer;
