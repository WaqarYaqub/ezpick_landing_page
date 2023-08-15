import Link from "next/link";
import React from "react";

const MobileAppSection = ({ data, lg, locales }) => {
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

  return (
    <div className="bg-[#F5F5F5] pt-[80px] pb-[0px] md:pt-[50px] md:pb-[0px]">
      <div className="flex flex-col justify-center items-center px-[30px] lg:px-[0px] mx-auto max-w-screen-sm md:max-w-screen-xl">
        <p className="text-black text-center font-montserrat text-[38px] md:text-[40px] font-bold mb-[20px]">
          {lg === "en" ? (
            <span>
              Mobile App for <span className="text-[#FFB31A]">Teachers</span> &{" "}
              <span className="text-[#2F4D33]">Parents</span>
            </span>
          ) : (
            locales?.MOBILE_APP_FOR
          )}
        </p>
        <p className="w-[100%] md:w-[60%] text-black text-center font-montserrat text-[14px] md:text-[15px] font-normal">
          {data?.mobileAppDetail}
        </p>
      </div>
      <div className="flex justify-center gap-[17px] md:gap-[20px] mt-[20px]">
        <Link
          href={
            "https://apps.apple.com/sa/app/ezpick-student-pick-up-system/id1673235177"
          }
          target="_blank"
        >
          <img
            src="/icons/appStore.svg"
            alt="Logo"
            className="w-[175px] h-[53px] md:w-[216px] h-[64px]"
          />
        </Link>
        <Link
          href={
            "https://play.google.com/store/apps/details?id=com.app.ezpick&pli=1"
          }
          target="_blank"
        >
          <img
            src="/icons/googlePlay.svg"
            alt="Logo"
            className="w-[175px] h-[53px] md:w-[216px] h-[64px]"
          />
        </Link>
      </div>

      <div
        className="mt-[20px] md:mt-[40px] cursor-pointer flex justify-center items-center"
        onClick={handlePlayFullscreen}
      >
        <video
          className="mx-[40px] bg-[#F5F5F5] object-cover md:rounded-[30px] w-full h-[499px]"
          autoPlay
          controls={false}
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://ezpick.s3.us-east-1.amazonaws.com/schools%2F1692109795706.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default MobileAppSection;
