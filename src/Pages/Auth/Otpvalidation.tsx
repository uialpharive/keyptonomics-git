
import React, { useState, useRef } from "react";
import bgimg from "../../assets/images/bgimage.jfif";
import logo from "../../assets/images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const OtpValidation = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const navigate = useNavigate();

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus(); // Move to next input
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus(); // Move to previous input
    }
  };

  const handleVerify = () => {
    toast.success("Verify Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });

    setTimeout(() => {
      navigate("/reset_password");
    }, 3000);
  };

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <ToastContainer />
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[#1E2637]/40 backdrop-blur-md z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl">
        {/* Logo */}
        <div className="flex justify-center items-center mb-8">
          <img src={logo} alt="Logo" className="h-10 sm:h-12" />
          <p className="text-white text-lg sm:text-xl font-semibold ml-2">
            KEYPTONOMICS
          </p>
        </div>

        {/* OTP Card */}
        <div className="bg-[#1e2637] shadow-lg rounded-lg p-6 sm:p-8 border-[3px] border-transparent md:border-[#00cdf9]">
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-4 text-center">
            Email Verification
          </h2>
          <p className="text-gray-300 text-sm sm:text-base text-center mb-6">
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
                className="w-12 h-12 xs:w-8 xs:h-8 text-center text-lg font-bold border border-gray-500 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-[#00cdf9] outline-none"
              />
            ))}
          </div>

          {/* Resend OTP */}
          <p className="text-gray-400 text-sm sm:text-base text-center mb-6">
            Didn't receive the OTP?{" "}
            <span className="text-[#00cdf9] cursor-pointer hover:underline">
              Resend OTP
            </span>
          </p>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            className="w-full bg-[#00cdf9] shadow-lg text-white text-lg p-3 rounded-md font-semibold hover:bg-[#00b8e6] transition"
          >
            Verify OTP
          </button>

          {/* Back to Login */}
          <a
            href="/login"
            className="text-sm sm:text-base text-[#00cdf9] mt-4 block text-center"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default OtpValidation;
