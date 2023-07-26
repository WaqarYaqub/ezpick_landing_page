import React from "react";

const FeatureSection = () => {
  return (
    <div className="px-[30px] lg:px-[0px]  mb-[100px] md:mb-[74px]">
      <div className="text-center mx-[38px] mb-[50px]">
        <p className="text-[#0D0C22] text-[30px] font-bold mt-[15px]">
          Special Features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-screen-sm md:max-w-screen-xl">
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px] p-[20px]"
        >
          <div class="flex">
            <img
              class="h-[40px] w-[40px] mr-4"
              src="/images/feature1.svg"
              alt="Image"
            />
            <div>
              <h2 class="text-[#0D0C22] text-[16px] font-bold">
                Pickup Zone <br /> Activation
              </h2>
            </div>
          </div>
          <div>
            <p className="text-[#3D3D4E] text-[14px]">
              Schools designate specific pickup zones equipped with our advanced
              Ezpick technology
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          2
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          3
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          4
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          5
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          6
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          7
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          8
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
