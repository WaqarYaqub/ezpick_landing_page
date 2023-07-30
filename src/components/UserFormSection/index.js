import React, { useState } from "react";
import { createClient } from "@/services";

const UserFormSection = ({ setClient, selectedPlan }) => {
  const [formData, setFormData] = useState({
    schoolName: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    city: "",
    zipCode: "",
    planId: null,
  });

  const handleSubmit = async () => {
    const data = {
      ...formData,
      planId: selectedPlan,
    };
    const result = await createClient(data);
    if (result?.success) {
      setClient(result?.client);
      setFormData({
        schoolName: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        address: "",
        city: "",
        zipCode: "",
        planId: null,
      });
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="px-[30px] lg:px-[0px]  mb-[100px] md:mb-[74px]">
      <div className="text-center mb-[63px]">
        <p className="text-[#0D0C22] text-[30px] font-normal md:font-bold mt-[15px]">
          Enter your details
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:mx-[250px] mx-[0px] bg-white">
        <div>
          <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
            School Name
          </label>
          <input
            type="text"
            className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
            placeholder="Enter your school name"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              PERSON Name
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your full name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Email
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Phone number
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your Phone number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              PASSWORD
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
            Address
          </label>
          <input
            type="text"
            className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
            placeholder="Enter your Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              City
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Zip code
            </label>
            <input
              type="text"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your Zip code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <button
          onClick={handleSubmit}
          className="w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] bg-gradient-to-r from-[#FFBD1D] to-[#FCA000] bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]"
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default UserFormSection;
