import React, { useState } from "react";
import bgimg from "../../assets/images/bgimage.jfif";
import login from "../../assets/images/login.png";
import logo from "../../assets/images/logo.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { MdError } from "react-icons/md";
import ThemeToggle from "../../components/ThemeToggle";
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
      {/* <div className="absolute inset-0 bg-white/70 dark:bg-[#1E2637]/80 backdrop-blur-sm z-0"></div> */}
      <div className="absolute inset-0 bg-white/70 dark:bg-[radial-gradient(circle,#19233a_60%,#07071d_100%)] opacity-90  backdrop-blur-sm z-0"></div>

      {/* Centered Logo and Text */}
      <div className="flex justify-center items-center relative z-10">
        <div className="flex xs:mt-[50px] md:mt-[75px] mt-[100px] xs:mb-[25px] mb-[50px]">
          <img src={logo} alt="Logo" className="h-10" />
          <p className="dark:text-white text-black  mt-2 ml-2 text-lg font-semibold">
            KEYPTONOMICS
          </p>
        
        </div>
      </div>

      {/* Login Card at the Bottom */}
      <div className="flex justify-center items-end pb-10 relative z-10">
        <div className="border-[3px] md:border-[3px] lg:border-[3px] rounded-lg shadow-lg xs:bg-none bg-gradient-to-r from-blue-300/40 to-blue-700/20 flex flex-col md:flex-row gap-8 xTTs:w-[473px] xTs:w-[473px] xs:mr-3 sm:w-[67%] max-w-none md:w-auto w-full border-transparent md:border-[#00cdf9] p-0 overflow-hidden">
          {/* Image Section */}
          <div className="hidden md:flex justify-center items-center w-full overflow-hidden">
            <img
              src={login}
              alt="Astronaut"
              className="w-full h-[500px] mt-[-100px] object-cover"
            />
          </div>

          {/* Login Form */}
          <div className="flex flex-col dark:bg-[#1e2637] bg-white/40 rounded-md p-5 m-3 sm:m-2 md:m-3 lg:m-3 xl:m-4 w-full max-w-md">
            <h2 className="dark:text-white text-black text-[27px] font-bold mb-7">Login</h2>

            {/* Email Input */}
            <p className="dark:text-white text-black  mb-1 text-[13px]">Email Address</p>
            <div className="relative w-full">
              <input
                type="email"
                onChange={handleEmailChange}
                placeholder="Enter Email Address"
                className={`p-3 h-10 w-full rounded-md mt-1 border mb-3 dark:text-white text-black  placeholder-white placeholder:text-[13px] outline-none focus:ring-2 pr-10
            ${
              errors?.email
                ? "border-red-700 bg-[#7a8996] focus:ring-red-700"
                : "border-gray-500 bg-[#7a8996] focus:ring-blue-500"
            }
          `}
              />
              {errors?.email && (
                <span className="absolute right-3 top-4 font-semibold text-red-500">
                  <MdError />
                </span>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <p className="dark:text-white text-black  mb-1 text-[13px]">Password</p>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="p-3 h-10 w-full rounded-md mb-4 bg-[#7a8996] border border-gray-500 mt-1 dark:text-white placeholder:text-[13px] placeholder-white text-black pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-[37px] text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeIcon size={18} />
                ) : (
                  <EyeOffIcon size={18} />
                )}
              </button>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] text-[14px] text-white p-3 rounded-md font-semibold"
            >
              Login
            </button>

            {/* Links */}
            <a
              href="/forget_password"
              className="text-sm text-[#00cdf9]  mt-4 text-center"
            >
              Forgot password?
            </a>
            <a
              href="/register"
              className="text-sm dark:text-white text-black  mt-4 text-center"
            >
              Don't have an account?{" "}
              <span className="text-[#00cdf9] ml-2">Sign Up</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
