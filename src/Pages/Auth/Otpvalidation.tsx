"use client";

import React, { useState, useRef } from "react";
import bgimg from "../../assets/images/bgimage.jfif";
import logo from "../../assets/images/logo.png";

const OtpValidation = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus(); // Move to next input
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to previous input
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#1E2637]/30 backdrop-blur-md z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex mt-[100px] mb-[50px] xs:mt-[50px] xs:mb-[25px] md:mt-[75px]">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="text-white mt-2 ml-2 text-lg font-semibold">KEYPTONOMICS</p>
        </div>

        {/* OTP Verification Card */}
        <div className="flex justify-center items-end pb-10">
          <div className="border-[3px] md:border-[3px] lg:border-[3px] rounded-lg shadow-lg bg-gradient-to-r from-blue-300/40 to-blue-700/20 sm:w-3/4 max-w-[812px] md:w-[700px] w-[812px] border-transparent md:border-[#00cdf9]">
            
            {/* OTP Form */}
            <div className="flex flex-col bg-[#1e2637] rounded-md p-5 m-3 sm:m-[8px]">
              <h2 className="text-white text-[27px] font-bold mb-7 text-center">Email Verification</h2>

              <p className="text-gray-300 text-sm text-center mb-5">
                Enter the OTP sent to your email to verify your account.
              </p>

              {/* OTP Inputs */}
              <div className="flex justify-center space-x-2 mb-6">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-lg font-bold border border-gray-500 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#00cdf9] outline-none"
                  />
                ))}
              </div>

              {/* Resend OTP */}
              <p className="text-gray-400 text-sm text-center mb-6">
                Didn't receive the OTP?{" "}
                <span className="text-[#00cdf9] cursor-pointer hover:underline">
                  Resend OTP
                </span>
              </p>

              {/* Submit Button */}
              <button
                className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] text-[14px] text-white p-3 rounded-md font-semibold w-full hover:bg-[#00b8e6]"
              >
                Verify OTP
              </button>

              {/* Back to Login */}
              <a href="/login" className="text-sm text-[#00cdf9] mt-4 text-center block">
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpValidation;
