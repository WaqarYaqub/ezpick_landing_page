import React, { useState } from "react";
import { createClient } from "@/services";
import { RotatingLines } from "react-loader-spinner";

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
  });
  const [validation, setValidation] = useState({
    schoolName: "",
    name: "",
    email: "",
    mobile: "",
    password: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const isFormDataValid = (formData) => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = async () => {
    if (!formData.schoolName) {
      setValidation((prevData) => ({
        ...prevData,
        schoolName: "School Name is Required",
      }));
    }
    if (!formData.name) {
      setValidation((prevData) => ({
        ...prevData,
        name: "Name is Required",
      }));
    }
    if (!formData.email) {
      setValidation((prevData) => ({
        ...prevData,
        email: "Email is Required",
      }));
    }
    if (!formData.mobile) {
      setValidation((prevData) => ({
        ...prevData,
        mobile: "Phone Number is Required",
      }));
    }
    if (!formData.password) {
      setValidation((prevData) => ({
        ...prevData,
        password: "Password is Required",
      }));
    }
    if (!formData.address) {
      setValidation((prevData) => ({
        ...prevData,
        address: "Address is Required",
      }));
    }
    if (!formData.city) {
      setValidation((prevData) => ({
        ...prevData,
        city: "Please Enter your City",
      }));
    }
    if (!formData.zipCode) {
      setValidation((prevData) => ({
        ...prevData,
        zipCode: "Please Enter your ZIP Code",
      }));
      return;
    }
    if (isFormDataValid(formData)) {
      setLoading(true);
      const data = {
        ...formData,
        planId: selectedPlan,
        status: 0,
      };
      const result = await createClient(data);
      if (result?.success) {
        setLoading(false);
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
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setValidation((prevData) => ({
      ...prevData,
      [name]: "",
    }));
  };
  const validateEmail = (event) => {
    const { value } = event.target;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(value)) {
      setValidation((prevData) => ({
        ...prevData,
        email: "Please enter a valid email address",
      }));
    } else {
      setValidation((prevData) => ({
        ...prevData,
        email: "",
      }));
    }
  };

  const validatePhoneNumber = (event) => {
    const { value } = event.target;

    const phoneNumberPattern = /^\d+$/;

    if (!phoneNumberPattern.test(value)) {
      setValidation((prevData) => ({
        ...prevData,
        mobile: "Please enter a valid phone number (numbers only)",
      }));
    } else {
      setValidation((prevData) => ({
        ...prevData,
        mobile: "",
      }));
    }
  };

  return (
    <div
      id="user-form-section"
      className="px-[30px] lg:px-[0px]  mb-[100px] md:mb-[74px]"
    >
      <div className="text-center mb-[63px]">
        <p className="text-[#0D0C22] text-[30px] font-normal md:font-bold mt-[15px]">
          Enter your details
        </p>
      </div>

      <div
        className={`${
          isLoading ? "blury-display" : ""
        } relative grid grid-cols-1 gap-4 md:mx-[250px] mx-[0px] bg-white`}
      >
        {isLoading && (
          <div className="z-10 absolute inset-0 flex items-center justify-center">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={isLoading}
            />
          </div>
        )}
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
          <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
            {validation?.schoolName}
          </span>
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
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.name}
            </span>
          </div>

          <div>
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              Email
            </label>
            <input
              type="email"
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={validateEmail}
            />
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.email}
            </span>
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
              onBlur={validatePhoneNumber}
            />
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.mobile}
            </span>
          </div>

          <div className="relative">
            <label className="uppercase text-[#2F4D33] text-[18px] font-bold">
              PASSWORD
            </label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full py-[15px] px-[24px] border-[2px] border-[#2F4D33] rounded-lg bg-[#F5F5F5] mt-[8px]"
              placeholder="Enter your password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              className="absolute bottom-2 rtl:left-4 ltr:right-4 transform -translate-y-1/2 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 RotatingLines24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
            </button>
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.password}
            </span>
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
          <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
            {validation?.address}
          </span>
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
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.city}
            </span>
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
            <span className="text-[#B40105] text-[16px] font-normal md:font-bold mt-[5px]">
              {validation?.zipCode}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-[30px]">
        <button
          disabled={isLoading}
          onClick={handleSubmit}
          className={`w-[157px] h-[44.263px] lg:w-[200px] lg:h-[52px] ${
            isLoading
              ? "bg-gray-500"
              : "bg-gradient-to-r from-[#FFBD1D] to-[#FCA000]"
          } bg-no-repeat bg-padding-box shadow-md rounded-full cursor-pointer transition duration-250 ease-in-out text-white text-[14px] lg:text-[16px] font-semibold flex items-center justify-center uppercase hover:from-[#FCA000] hover:to-[#FFBD1D]`}
        >
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default UserFormSection;
