import React from "react";

const TermAndCondition = ({ closeModal }) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden relative h-[70vh] md:h-[70vh] w-[90vw] md:w-[60vw] px-[30px] md:px-[40px] py-[30px] md:py-[40px]">
      <span className="cursor-pointer absolute top-[10px] md:top-[10px] right-[10px]">
        <img
          onClick={closeModal}
          placeholder="cross"
          src="/icons/cross.svg"
          className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
        />
      </span>
      <div className="flex items-center text-left md:text-center justify-center mb-[20px] md:mb-[30px]">
        <p className="text-[22px] md:text-[30px] font-medium text-[#111019]">
          {"Terms and Conditions of the EZpick Student Pickup System"}
        </p>
      </div>

      <div className="">
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "Acceptance of Terms These Terms and Conditions ('Terms') govern your use of the EZpick Student Capture System ('EZpick'). By using EZpick, you agree to these terms. If you do not agree to these terms, do not use EZpick.Using EZpick You can use EZpick to coordinate the receipt of authorized student(s) from the school. You agree to use EZpick for lawful purposes only and in accordance with these Terms.Registration and Account Information You are required to provide accurate and complete registration and account information when registering for EZpick. You are responsible for maintaining the confidentiality of your account information and for any activities that occur under your account.Individuals approved for receiving You are responsible for appointing authorized personnel to accompany your student(s) using EZpick. You acknowledge that only authorized individuals you have appointed will be allowed to take your student(s) using EZpick.Privacy We respect your privacy and are committed to protecting your personal information. Our Privacy Policy explains how we collect, use, and disclose your information when you use EZpick.EZpick Intellectual Property and all content and materials on the EZpick website are owned by us or our licensors and are protected by copyright, trademark and other intellectual property laws.Prohibited Activities You may not use EZpick to engage in any illegal or unauthorized activities, including but not limited to:a. harassing or threatening others; b. impersonating another person; c. uploading or distributing malware or viruses; d. interfering with or disrupting the EZpick system or servers."
          }
        </p>
        <p className="text-[13px] md:text-[18px] font-normal mb-[8px] text-[#737373]">
          {
            "Termination We may terminate your use of EZpick at any time and for any reason without prior notice.Disclaimer of warranties EZpick is provided on an 'as is' basis and we make no warranties, whether express or implied, as to the system or its functionality.Limitation of Liability We are not liable for any damages or losses resulting from your use of EZpick, including without limitation, any direct, indirect, incidental, punitive or consequential damages.Governing Law and Dispute Resolution These Terms are governed by the laws of [insert jurisdiction]. Any dispute arising out of these Terms or your use of EZpick shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.Changes to the Terms We may update these Terms from time to time, and we will post the updated Terms on the EZpick website. Your continued use of EZpick after the updated Terms are posted indicates your acceptance of the updated Terms.Contact us if you have any questions or concerns regarding these Terms or EZpick, please contact us at info@ezpick.co"
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

export default TermAndCondition;
