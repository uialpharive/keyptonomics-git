import React, { useState } from "react";
import bgimg from "../../assets/images/bgimage.jfif";
import logo from "../../assets/images/logo.png";
import reset from "../../assets/images/reset.png";
import { ToastContainer, toast } from "react-toastify";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const handleResetPassword = () => {
    toast.success("Password Changed!", {
      position: "top-right",
      autoClose: 3000,
    });
    navigate("/login");
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {" "}
      <ToastContainer />
      <div className="absolute inset-0 bg-[#1E2637]/30 backdrop-blur-md z-0"></div>
      {/* Centered Logo and Text */}
      <div className="flex justify-center items-center relative z-10">
        <div className="flex xs:mt-[50px] md:mt-[75px] mt-[100px] xs:mb-[25px] mb-[50px]">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="text-white mt-2 ml-2 text-lg font-semibold">
            KEYPTONOMICS
          </p>
        </div>
      </div>
      {/* Change Password Card */}
      <div className="flex justify-center items-end pb-10 relative z-10">
        <div className="border-[3px] md:border-[3px] lg:border-[3px] rounded-lg shadow-lg xs:bg-none bg-gradient-to-r from-blue-300/40 to-blue-700/20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-3/4 max-w-[812px] md:w-[700px] w-[812px] border-transparent md:border-[#00cdf9]">
          {/* Left Side (Hidden on Mobile) */}
          <div className="hidden md:flex justify-center items-center">
            <img src={reset} alt="Astronaut" className="h-[] w-[300px]" />
          </div>

          {/* Right Side - Form */}
          <div className="flex flex-col bg-[#1e2637] rounded-md p-5 m-3 sm:m-[8px] md:m-[8px] lg:m-[8px] xl:m-[8px]">
            <h2 className="text-white text-[27px] font-bold mb-7 text-center">
              Reset Password
            </h2>

            {/* Old Password Input */}
            <div className="relative mb-4">
              <p className="text-white text-[13px]">Old Password</p>
              <input
                type={showOldPassword ? "text" : "password"}
                placeholder="Enter New Password"
                className="p-3 h-10 w-full rounded-md bg-gray-700 border-none mt-1 text-white border border-gray-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-[35px] text-gray-400"
                onClick={() => setShowOldPassword(!showOldPassword)}
              >
                {showOldPassword ? (
                  <EyeIcon size={18} />
                ) : (
                  <EyeOffIcon size={18} />
                )}
              </button>
            </div>

            {/* New Password Input */}
            <div className="relative mb-4">
              <p className="text-white text-[13px]">New Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter New Password"
                className="p-3 h-10 w-full rounded-md bg-gray-700 border-none mt-1 text-white border border-gray-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-[35px] text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon size={18} />
                ) : (
                  <EyeOffIcon size={18} />
                )}
              </button>
            </div>

            {/* Confirm Password Input */}
            <div className="relative mb-6">
              <p className="text-white text-[13px]">Confirm Password</p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm New Password"
                className="p-3 h-10 w-full rounded-md bg-gray-700 border-none mt-1 text-white border border-gray-500 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-[35px] text-gray-400"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeIcon size={18} />
                ) : (
                  <EyeOffIcon size={18} />
                )}
              </button>
            </div>

            {/* Reset Password Button */}
            <button
              onClick={handleResetPassword}
              className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] text-[14px] text-white p-3 rounded-md font-semibold w-full"
            >
              Reset Password
            </button>

            {/* Back to Login Link */}
            <a
              href="/login"
              className="text-sm text-[#00cdf9] text-[13px] mt-4 text-center block"
            >
              Back to Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
