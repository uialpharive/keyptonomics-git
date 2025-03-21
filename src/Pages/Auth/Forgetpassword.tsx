"use client";

import React, { useState } from "react";
import bgimg from "../../assets/images/bgimage.jfif";
import logo from "../../assets/images/logo.png";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-[#1E2637]/30 backdrop-blur-md z-0"></div>

      {/* Centered Box */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="text-white ml-2 text-lg font-semibold">KEYPTONOMICS</p>
        </div>

        {/* Card Wrapper */}
        <div className="flex justify-center items-center pb-10 w-full">
          <div className="border-[3px] rounded-lg shadow-lg bg-gradient-to-r from-blue-300/40 to-blue-700/20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-3/4 max-w-[812px] w-full border-transparent md:border-[#00cdf9]">
            
            {/* Left Image Section (Hidden on Small Screens) */}
            <div className="hidden md:flex justify-center items-center">
              <img src={logo} alt="Illustration" className="h-40" />
            </div>

            {/* Forgot Password Form */}
            <div className="bg-white shadow-lg p-8 rounded-lg w-full text-center">
              {/* Title */}
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">Password Recovery</h1>
              <p className="text-gray-600 mb-6">Enter your email to recover your password</p>

              {/* Email Input */}
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
                value={email}
                onChange={handleEmailChange}
              />
              <p className="text-red-500 text-sm mt-1 text-left">{errors?.email}</p>

              {/* Reset Password Button */}
              <button
                className={`w-full mt-6 py-3 text-white rounded-md transition ${
                  loader ? "bg-gray-400 cursor-not-allowed" : "bg-[#00cdf9] hover:bg-[#00b8e6] shadow-[1px_5px_15px_#4fb2d1]"
                }`}
                disabled={loader}
              >
                {loader ? "Loading..." : "Reset Password"}
              </button>

              {/* Back to Login Link */}
              <a href="/login" className="text-sm text-[#00cdf9] mt-4 block">
                Back to Login
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
