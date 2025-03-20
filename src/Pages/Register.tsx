import React, { useState } from "react";
import bgimg from "../assets/images/bgimage.jfif";
import logo from "../assets/images/logo.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div
      className=" relative w-full h-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
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

      {/* Login Card at the Bottom */}
      <div className="flex justify-center items-end pb-10 relative z-10">
        <div className=" border-[3px]  md:border-[3px] lg:border-[3px] rounded-lg shadow-lg xs:bg-none  bg-gradient-to-r from-blue-300/40 to-blue-700/20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-[975px]   max-w-[975px]   w-[500px] border-transparent md:border-[#00cdf9]">
          <div className="hidden  md:flex lg:flex justify-center items-center">
            <img src={logo} alt="Astronaut" className="h-40" />
          </div>

          {/* Login Form */}
          <div className="flex flex-col bg-[#1e2637] rounded-md p-5 m-3  sm:m-[8px_8px_8px_8px]  md:m-[8px_8px_8px_8px] lg:m-[8px_8px_8px_8px] xl:m-[8px_8px_8px_8px]">
            {" "}
            <h2 className="text-white text-[27px] font-bold mb-7">Register</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {/* Full Name */}
              <div className="flex flex-col">
                <p className="text-white text-[13px]">Full Name</p>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className=" border-none p-3 h-10 rounded-md bg-gray-700 mt-1 text-white border border-gray-500"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <p className="text-white text-[13px]">Last Name</p>
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  className=" border-none p-3 h-10 rounded-md bg-gray-700 mt-1 text-white border border-gray-500"
                />
              </div>
            </div>
            <p className="text-white mt-1 text-[13px]">Email Address</p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="border-none p-3 h-10  rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            />
            <p className="text-white text-[13px]">Phone Number</p>
            <input
              type="email"
              placeholder="Enter Phone Number "
              className="p-3 h-10 border-none rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            />
            <div className="relative">
              <p className="text-white text-[13px]"> Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter  Password"
                className="p-3 h-10 w-full rounded-md mb-4 bg-gray-700 border-none mt-1 text-white border border-gray-500 pr-10"
              />
              {/* Eye Icon Button */}
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
            <div className="relative">
              <p className="text-white text-[13px]">Confirm Password</p>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Enter Confirm Password"
                className="p-3 h-10 w-full rounded-md mb-4 bg-gray-700 border-none mt-1 text-white border border-gray-500 pr-10"
              />
              {/* Eye Icon Button */}
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
            <p className="text-sm text-white   text-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 rounded-lg"
              />
              I Understand <span className="text-[#00cdf9]">Terms of Use</span>{" "}
              and
              <span className="text-[#00cdf9]"> Privacy Policy</span>
            </p>
            <button className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] mt-7 text-[14px] text-white p-3 rounded-md font-semibold">
              Register
            </button>
            <a href="#" className="text-sm text-gray-300 mt-4 text-center">
              Already have an account?{" "}
              <span className="text-[#00cdf9]">Sign In</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
