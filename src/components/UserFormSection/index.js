import React from "react";

const UserFormSection = () => {
  return (
    <div className="px-[30px] lg:px-[0px]  mb-[100px] md:mb-[74px]">
      <div className="text-center mb-[63px]">
        <p className="text-[#0D0C22] text-[30px] font-normal md:font-bold mt-[15px]">
          Enter your details
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 md:mx-[250px] mx-[0px] bg-white">
        <div>
          <input
            type="text"
            class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5]"
            placeholder="Enter your school name"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5]"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5]"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFormSection;
