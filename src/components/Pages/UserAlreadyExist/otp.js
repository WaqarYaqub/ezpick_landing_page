import React, { useState, useRef, useEffect } from "react";

const OtpInput = ({ length, onOtpChange }) => {
  const [otpValues, setOtpValues] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleInputChange = (index, value) => {
    if (!isNaN(value)) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = value;
      setOtpValues(newOtpValues);

      if (index < length - 1 && value) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleInputPaste = (e) => {
    const pastedValue = e.clipboardData.getData("text").slice(0, length);
    const newOtpValues = pastedValue.split("").map(Number);
    setOtpValues(newOtpValues);

    inputRefs.current[newOtpValues.length - 1].focus();
  };

  const handleInputKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      const newOtpValues = [...otpValues];
      newOtpValues[index - 1] = "";
      setOtpValues(newOtpValues);
      inputRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    const numericOtp = parseInt(otpValues.join(""), 10);
    onOtpChange(numericOtp);
  }, [otpValues, onOtpChange]);

  return (
    <div className="flex">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          maxLength={1}
          value={otpValues[index]}
          className="border rounded-md bg-gray-300 w-12 h-12 flex-shrink-0 text-center text-xl font-semibold mx-1"
          onChange={(e) => handleInputChange(index, e.target.value)}
          onPaste={handleInputPaste}
          onKeyDown={(e) => handleInputKeyDown(index, e)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
