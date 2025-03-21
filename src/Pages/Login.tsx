import React, { useState } from "react";
import bgimg from "../assets/images/bgimage.jfif";
import logo from "../assets/images/logo.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdError } from "react-icons/md";
const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<any>({});

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);

    if (!e.target.value) {
      setErrors({});
    } else if (!validateEmail(e.target.value)) {
      setErrors({ email: "Enter a valid email address" });
    } else {
      setErrors({});
    }
  };

  const handleLogin = () => {
    toast.success("Verify Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      navigate("/home");
    }, 3000); // Navigate after 3 secondsh-10 w-full
  };

  return (
    <div
      className=" relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
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

      {/* Login Card at the Bottom */}
      <div className="flex justify-center items-end pb-10 relative z-10">
        <div className=" border-[3px]  md:border-[3px] lg:border-[3px] rounded-lg shadow-lg xs:bg-none  bg-gradient-to-r from-blue-300/40 to-blue-700/20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-3/4 max-w-[812px] md:w-[700px] w-[812px] border-transparent md:border-[#00cdf9]">
          <div className="hidden md:flex justify-center items-center">
            <img src={logo} alt="Astronaut" className="h-40" />
          </div>

          {/* Login Form */}
          <div className="flex flex-col bg-[#1e2637] rounded-md p-5 m-3  sm:m-[8px_8px_8px_8px]  md:m-[8px_8px_8px_8px] lg:m-[8px_8px_8px_8px] xl:m-[8px_8px_8px_8px]">
            {" "}
            <h2 className="text-white text-[27px] font-bold mb-7">Login</h2>
            <p className="text-white mb-1 text-[13px]">Email Address</p>
            <div className="relative w-full">
  <input
    type="email"
    onChange={handleEmailChange}
    placeholder="Enter Email Address"
    className={`p-3 h-10 w-full rounded-md mt-1 text-white border mb-3 outline-none focus:ring-2 pr-10
      ${
        errors?.email
          ? "border-red-700 bg-gray-700 focus:ring-red-700"
          : "border-gray-500 bg-gray-700 focus:ring-blue-500"
      }`}
  />
  {/* Error Icon */}
  {errors?.email && (
    <span className="absolute right-3 top-6 font-semibold   transform -translate-y-1/2 text-red-500">
    <MdError/>
    </span>
  )}
</div>
{/* <p className="text-red-700 text-sm mb-1 ml-3 text-left">
  {errors?.email}
</p> */}

            {/* <p className="text-red-500 text-sm mb-1 ml-3 text-left">
  {errors?.email}
</p> */}
            <div className="relative">
              <p className="text-white mb-1 text-[13px]"> Password</p>
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
            <button
              onClick={handleLogin}
              className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] text-[14px] text-white p-3 rounded-md font-semibold"
            >
              Login
            </button>
            <a
              href="/forget_password"
              className="text-sm text-[#00cdf9] mt-4 text-center"
            >
              Forgot password?
            </a>
            <a
              href="/register"
              className="text-sm text-gray-300 mt-4 text-center"
            >
              Don't have an account?{" "}
              <span className="text-[#00cdf9]">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
