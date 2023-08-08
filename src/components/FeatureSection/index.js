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
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature1.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Real-time Tracking"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {"Allows parents to track the school bus in real time."}
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature2.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                Pickup/Drop-off <br /> Notifications
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Sends notifications when the child is picked up and dropped off at their destination"
              }
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature3.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Route Information"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Provides detailed information about the bus route, including any changes or delays."
              }
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature4.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Safety Alerts"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {"Sends alerts in case of emergencies or safety issues."}
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature5.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Driver Details"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Provides information about the driver, including contact details for emergencies."
              }
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature6.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"History"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Logs the history of rides, including dates, times, & any notes or incidents."
              }
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature7.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Account Management"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Allows parents to manage their account, including contact details, payment information, & more."
              }
            </p>
          </div>
        </div>
        <div
          style={{
            boxShadow: "0px 4px 10px 2px rgba(0, 0, 0, 0.15)",
          }}
          className="rounded-[15px] bg-white shadow-xl w-full h-[170px]  p-[20px]"
        >
          <div className="flex">
            <img
              className="h-[40px] w-[40px] mr-4"
              src="/images/feature8.svg"
              alt="Image"
            />
            <div>
              <h2 className="text-[#0D0C22] text-[16px] font-bold">
                {"Multi-Child Support"}
              </h2>
            </div>
          </div>
          <div>
            <p className="mt-[10px] text-[#3D3D4E] text-[14px]">
              {
                "Supports tracking multiple children in the same app, useful for parents with more than one child using the service."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
