import React from "react";
import bgimg from "../assets/images/bgimage.jfif";
import logo from "../assets/images/logo.png";

const Login = () => {
  return (
    <div
      className=" relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})`,   }}
    >
        <div className="relative p-4 rounded-full bg-gradient-to-r from-blue-300/20 to-blue-700/20">
  <div className="absolute inset-0 rounded-full  border-[3px] border-transparent bg-clip-padding" 
        style={{ borderImage: "linear-gradient(105.95deg, #01D3FF 24.79%, #2954A3 71.87%) 1" }}
       >
  </div>
  
</div>




      {/* Centered Logo and Text */}
      <div className="flex justify-center items-center">
       <div className="flex mt-[100px] mb-[50px]">
       <img src={logo} alt="Logo" className="h-10" />
       <p className="text-white ml-2 text-lg font-semibold">KEYPTONOMICS</p>
       </div>
      </div>

      {/* Login Card at the Bottom */}
      <div className="flex justify-center items-end pb-10">
      <div className="border-[3px] rounded-lg p-10 shadow-lg bg-gradient-to-r from-blue-300/20 to-blue-700/20 grid grid-cols-2 gap-8 w-[812px] border-transparent border-gradient">


          <div className="hidden md:flex justify-center items-center">
            <img
              src={logo}
              alt="Astronaut"
              className="h-40"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col w-full bg-[#1e2637] rounded-md p-3">
            <h2 className="text-white text-2xl font-bold mb-4">Login</h2>
            <p className="text-white">Email Address</p>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="p-3 rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            />
            <p className="text-white">Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              className="p-3 rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            />
            <button className="bg-[#00cdf9] shadow-xl text-white p-3 rounded-md font-semibold">
              Login
            </button>
            <a href="#" className="text-sm text-[#00cdf9] mt-2 text-center">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-gray-300 mt-1 text-center">
              Don't have an account? <span className="text-[#00cdf9]">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;