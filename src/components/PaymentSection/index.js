import React from "react";

const PaymentMethod = () => {
  return (
    <>
      <div class="bg-[#F5F5F5] py-[80px]">
        <div className="mx-auto max-w-screen-sm md:max-w-screen-xl">
          <div className="px-[30px] lg:px-[0px] bg-[#F5F5F5] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[30px]">
            <div className="grid grid-rows-2 gap-[20px]">
              <div className="relative rounded-[15px] shadow-custom bg-white py-[24px]  md:py-[30px] px-[20px] md:px-[30px]">
                <span className="cursor-pointer absolute top-[25px] right-[20px] md:right-[25px]">
                  <img src="/icons/edit.svg" />
                </span>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  {"Children's World Health School"}
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  Jhon Higgins
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  +966 12345678
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000] mb-[30px]">
                  abc@example.com
                </p>
                <p className="text-[16px] md:text-[18px] font-normal leading-tight font-montserrat text-[#000]">
                  {"P.O box 123 eleventh St, New York, 00000"}
                </p>
              </div>
              <div className="rounded-[15px] shadow-custom bg-white py-[37px] md:py-[0px] md:pt-[25px] px-[27px] md:px-[30px]">
                <div className="flex gap-[40px] mb-[30px]">
                  <img src="/icons/ezpickLogo.svg" />
                  <div>
                    <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[20px]">
                      EZPICK
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000] mb-[20px]">
                      School scheduling software
                    </p>
                    <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                      {"Exp: 01-08-2024"}
                    </p>
                  </div>
                </div>
                <hr class="border border-[#B1B1B1] mb-[33px]" />
                <div>
                  <p className="text-[20px] font-bold leading-tight font-montserrat text-[#000] mb-[10px]">
                    {"Total: $4500.00"}
                  </p>
                  <p className="text-[15px] font-normal leading-tight font-montserrat text-[#000]">
                    {"Next billing cycle: 01-08-2024"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[15px] shadow-custom bg-white py-[40px] px-[20px] md:px-[30px]">
              <span className="cursor-pointer absolute top-[20px] md:top-[10px] right-[10px]">
                <img
                  src="/icons/cross.svg"
                  className="w-[29px] h-[29px] md:w-[40px] md:h-[40px]"
                />
              </span>
              <h1 className="text-center text-[24px] md:text-[30px] font-semibold leading-tight font-montserrat text-[#111019] pb-[50px]">
                Payment Gateway
              </h1>

              <div class="grid grid-cols-1 gap-4 bg-white">
                <div>
                  <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
                    Card Info
                  </label>
                  <input
                    type="text"
                    class="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]"
                    placeholder="Number"
                  />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-[50px]">
                  <div>
                    <input
                      type="text"
                      class="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      class="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[12px]"
                      placeholder="CVV"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pb-[50px]">
                  <div>
                    <label className="uppercase font-montserrat text-[#2F4D33] text-[16px] md:text-[18px] font-bold">
                      {"Country/region"}
                    </label>
                    <input
                      type="text"
                      class="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[5px]"
                      placeholder="Select Country"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      class="w-full py-[15px] px-[24px] border-[1px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[30px]"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button class="w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFB31A] to-[#FF8A0F] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-[#EFF0FF] text-[12px] lg:text-[14px] font-semibold flex items-center justify-center uppercase hover:from-[#FF8A0F] hover:to-[#FFB31A]">
                    Pay Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white h-[100px]"></div>
    </>
  );
};

export default PaymentMethod;
