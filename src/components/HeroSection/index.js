"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ data, lang }) => {
  const handlePlayFullscreen = (event) => {
    if (event.target.requestFullscreen) {
      event.target.requestFullscreen();
    } else if (event.target.mozRequestFullScreen) {
      /* Firefox */
      event.target.mozRequestFullScreen();
    } else if (event.target.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      event.target.webkitRequestFullscreen();
    } else if (event.target.msRequestFullscreen) {
      /* IE/Edge */
      event.target.msRequestFullscreen();
    }
  };

  const handleButtonClick = () => {
    const targetSection = document.getElementById("pricing-section");

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const index = lang === "ar" ? 13 : 14;

  const text1 = data?.heroTitleBold?.substring(0, index).trim();
  const text2 = data?.heroTitleBold?.substring(index).trim();
  return (
    <section className="bg-white text-black py-12 md:px-28">
      <div className="container mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div className="text-center mx-[38px]">
          <motion.p
            initial={{ opacity: 0, y: -20 }} // Initial state (hidden and moved up by 20px)
            animate={{ opacity: 1, y: 0 }} // Animation state (fully visible and at its original position)
            transition={{ duration: 0.5 }} // Animation duration
            className="mt-4 text-[#000] text-[12px] lg:text-[16px]"
          >
            {data?.heroText1}
          </motion.p>
          <p className="text-[#000] text-[30px] lg:text-[56px] font-bold mt-[17px] lg:mt-[15px] m-[0px] p-[0px]">
            {text1}
          </p>
          <p className="text-[#000] text-[30px] lg:text-[56px] font-bold m-[0px] p-[0px]">
            {text2}
          </p>
          <p className="mt-[20px] text-[#000] font-normal text-[12px] lg:text-[16px]">
            {data?.heroText2}
          </p>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.8,
              rotate: -90,
              borderRadius: "100%",
            }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="hidden lg:block absolute right-[0px] top-[300px]"
          >
            <img src="/images/heroRightImage.svg" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{
              scale: 0.8,
              rotate: 180,
              borderRadius: "100%",
            }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="hidden lg:block absolute left-[0px] top-[160px]"
          >
            <img src="/images/heroLeftImage.svg" className="w-[520px]" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2, rotate: 360 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="hidden lg:block absolute left-[0px] top-[350px]"
          >
            <img src="/images/heroTriangle.svg" />
          </motion.div>
        </div>

        <div className="flex justify-center mt-[30px]">
          <button
            onClick={handleButtonClick}
            className="w-[180px] h-[44px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]"
          >
            {data?.heroButtonText}
          </button>
        </div>

        <div
          className="mt-[30px] cursor-pointer flex justify-center items-center"
          onClick={handlePlayFullscreen}
        >
          <video
            className="bg-black object-cover md:rounded-[30px] w-full h-[480px]"
            autoPlay
            controls={false}
            muted={true}
            loop
            playsInline
            preload="auto"
          >
            <source
              src="https://ezpick.s3.us-east-1.amazonaws.com/cms%2F1690288885395.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
