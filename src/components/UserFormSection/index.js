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
          <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
            School Name
          </label>
          <input
            type="text"
            class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
            placeholder="Enter your school name"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              PERSON Name
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Email
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Phone number
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your Phone number"
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              PASSWORD
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div>
          <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
            Address
          </label>
          <input
            type="text"
            class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
            placeholder="Enter your Address"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              City
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your City"
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Zip code
            </label>
            <input
              type="text"
              class="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your Zip code"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <button class="w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default UserFormSection;
