import React from "react";

const PrivacyPage = ({ closeModal }) => {
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
          {"Privacy Policy for Student Pick-Up System"}
        </p>
      </div>

      <div className="">
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {"Student Pickup System Privacy Policy"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {"Effective Date: 30th May 2023"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "Policy applies to our Student Pickup System and outlines how we collect, use, and protect your personal information,including your photo and location data."
          }
        </p>
        {/* Information We Collect */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {"Information We Collect"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "a. Personal Identification Information: We may collect personal identification information such as name, email address, phone number, and student identification number."
          }
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "b. Photo: To verify the identity of the student and the authorized pickup individual, we may collect photos of both parties."
          }
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "c. Location Data: We may collect real-time information about the location of your device to facilitate efficient pickup scheduling and routing."
          }
        </p>
        {/* Use of Information */}
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#111019]">
          {"Use of Information"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {"We use the collected information for the following purposes:"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {"a. To provide and maintain our Student Pickup System."}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {"b. To facilitate the efficient pickup of students."}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "c. To ensure that the students are picked up by the authorized individuals only."
          }
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "d. To improve our services by understanding how our system is used."
          }
        </p>
        {/* Information Sharing and Disclosure */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {"Information Sharing and Disclosure"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "We do not sell your personal information to third parties. We may share your information with third parties that help us operate our Student Pickup System, as long as those parties agree to keep this information confidential. We may also release your information when we believe its release is appropriate to comply with the law."
          }
        </p>
        {/* Protection of Information */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {"Protection of Information"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security."
          }
        </p>
        {/* User Consent */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {"User Consent"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "By using our Student Pickup System, you consent to this Privacy Policy."
          }
        </p>
        {/* Privacy Policy Changes */}
        <p className="text-[13px] md:text-[18px] font-medium text-[#111019] mt-[10px] mb-[5px]">
          {"Privacy Policy Changes"}
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "We reserve the right to modify this Privacy Policy at any time. If we make changes to this policy, we will notify you by updating the ‘Effective Date’ at the top of this page."
          }
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "If you have any questions or concerns about our Privacy Policy, please contact us at ask@ezpick.co"
          }
        </p>

        <div className="flex justify-center mt-[30px]">
          <button
            className="w-[130px] h-[35px] lg:w-[120px] lg:h-[40px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]"
            onClick={closeModal}
          >
            {"Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
