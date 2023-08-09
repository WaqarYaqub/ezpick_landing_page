import React from "react";

const FeatureSection = ({ data }) => {
  return (
    <div className="px-[30px] lg:px-[0px]  mb-[100px] md:mb-[74px]">
      <div className="text-center mx-[38px] mb-[50px]">
        <p className="text-[#0D0C22] text-[30px] font-bold mt-[15px]">
          Special Features
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 mx-auto max-w-screen-sm md:max-w-screen-xl">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
              }}
              className="rounded-[15px] bg-white shadow-xl w-full min-h-[170px] p-[20px]"
            >
              <div className="flex">
                <img
                  className="h-[40px] w-[40px] rtl:ml-4  ltr:mr-4"
                  src={`/images/feature${index + 1}.svg`}
                  alt="Image"
                />
                <div>
                  <h2 className="text-[#0D0C22] text-[16px] font-bold">
                    {item?.title}
                  </h2>
                </div>
              </div>
              <div>
                <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
                  {item?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
