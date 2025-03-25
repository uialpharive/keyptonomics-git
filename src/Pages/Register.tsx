import React, { useState } from "react";
import bgimg from "../assets/images/bgimage.jfif";
import logo from "../assets/images/logo.png";
import register from "../assets/images/register.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { MdError } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<any>({});
  const [passErrors, setPassErrors] = useState<{ password?: string; confirmPassword?: string }>({});
  const navigate = useNavigate();
  const validatePasswords = () => {
    let newErrors: { password?: string; confirmPassword?: string } = {};
    if (!password) newErrors.password = "Password is required";
    if (!confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    else if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
  };
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

  const handleRegister = () => {
    toast.success("Register Successfully!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      navigate("/home");
    }, 3000); // Navigate after 3 secondsh-10 w-full
  };

  return (
    <div
      className=" relative w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      <ToastContainer/>
      <div className="absolute inset-0 bg-white/70 dark:bg-[#1E2637]/30 backdrop-blur-sm z-0"></div>
      {/* Centered Logo and Text */}
      <div className="flex justify-center items-center relative z-10">
        <div className="flex xs:mt-[50px] md:mt-[75px] mt-[100px] xs:mb-[25px] mb-[50px]">
          <img src={logo} alt="Logo" className="h-10 overflow-scroll" />
          <p className="text-white mt-2 ml-2 text-lg font-semibold">
            KEYPTONOMICS
          </p>
          <div className="">
            <ThemeToggle />
          </div>
        </div>
      </div>
     
      {/* Login Card at the Bottom */}
      <div className="flex justify-center items-end pb-10 relative z-10">
        <div className=" border-[3px]  md:border-[3px] lg:border-[3px] rounded-lg shadow-lg xs:bg-none  bg-gradient-to-r from-blue-300/40 to-blue-700/20 grid grid-cols-1 md:grid-cols-2 gap-8 sm:w-[975px]   max-w-[975px]   w-[500px] border-transparent md:border-[#00cdf9]">
          <div className="hidden  md:flex lg:flex justify-center items-center">
            <img src={register} alt="Astronaut" className="h-[430px] w-[550px] ml-7 object-contain" />
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
            <p className="text-white mt-3 text-[13px]">Email Address</p>
            {/* <input
              type="email"
              placeholder="Enter Email Address"
              className="border-none p-3 h-10  rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            /> */}
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
                  <MdError />
                </span>
              )}
            </div>
            <p className="text-white text-[13px]">Phone Number</p>
            <input
              type="email"
              placeholder="Enter Phone Number "
              className="p-3 h-10 border-none rounded-md bg-gray-700 mt-1 text-white border border-gray-500 mb-3"
            />
           <div>
      {/* Password Field */}
      <div className="relative">
        <p className="text-white text-[13px]">Password</p>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className={`p-3 h-10 w-full rounded-md mb-1 bg-gray-700 border mt-1 text-white pr-10 outline-none focus:ring-2 ${
            errors.password ? "border-red-700 focus:ring-red-700" : "border-gray-500 focus:ring-blue-500"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={validatePasswords}
        />
        <button
          type="button"
          className="absolute right-6 top-[34px] text-gray-400"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
        </button>
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password}</span>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="relative mt-2">
        <p className="text-white text-[13px]">Confirm Password</p>
        <input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Enter Confirm Password"
          className={`p-3 h-10 w-full rounded-md mb-1 bg-gray-700 border mt-1 text-white pr-10 outline-none focus:ring-2 ${
            errors.confirmPassword ? "border-red-700 focus:ring-red-700" : "border-gray-500 focus:ring-blue-500"
          }`}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onBlur={validatePasswords}
        />
        <button
          type="button"
          className="absolute right-6 top-[34px] text-gray-400"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          {showConfirmPassword ? <EyeIcon size={18} /> : <EyeOffIcon size={18} />}
        </button>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
        )}
      </div>
    </div>
            <p className="text-sm text-white   text-start">
              <input
                type="checkbox"
                name=""
                id=""
                className="mr-2 mt-3 rounded-lg"
              />
              I Understand <span className="text-[#00cdf9]">Terms of Use</span>{" "}
              and
              <span className="text-[#00cdf9]"> Privacy Policy</span>
            </p>
            <button onClick={handleRegister} className="bg-[#00cdf9] shadow-[1px_5px_15px_#4fb2d1] mt-7 text-[14px] text-white p-3 rounded-md font-semibold">
              Register
            </button>
            <a href="/login" className="text-sm text-gray-300 mt-4 text-center">
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
