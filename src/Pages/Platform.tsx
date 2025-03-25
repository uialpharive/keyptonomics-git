import React from "react";
import rec1 from "../assets/images/Rectangle3.png";
import rec2 from "../assets/images/Rectangle4.png";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <div className="">
      <div
        className="pt-10 px-6 xs:px-2 pb-10 relative rounded-3xl    sm:bg-gradient-to-r from-[#66b1e633] to-[#2954a333] sm:border border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)]"
        // style={{
        //   background:
        //     "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
        //   border: "1px solid #2954A3",
        //   boxShadow: "0px 10.01px 20.03px 0px #07071A26",
        // }}
      >
        <div className="">
          <div className=" items-center mb-4 even:bg-gray-100 p-4  even:rounded-lg flex-wrap dark:even:bg-cardBgDark">
            <div className="relative w-full">
              {/* <img src={forex} alt="Background" className="w-full h-auto xs:p-2 xs:mb-6 xs:mt-[-20px] xs:rounded-md xs:bg-gradient-to-r from-[#66b1e633] to-[#2954a333] xs:border xs:border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)]" /> */}
              <img
                src={rec1}
                alt="Background"
                className="w-full h-auto  xs:mb-6 xs:mt-[-20px]"
              />

              <div className=" xs:static sm:mt-4 sm:static md:static  lg:static xl:absolute md:top-1/4 md:left-8 : lg:top-14  sm:top-8  sm:left-0 md:w-full xl:max-w-[450px] sm:max-w-full  ">
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-gray-400 xl:text-white   md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                  MT5 for professional market analysis
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-gray-400 xl:text-white  md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  MetaTrader 5 comes with remarkable trading possibilities and
                  top-notch technologies for successful trading on various
                  financial markets and its derivatives.
                </p>

                <Link
                  to="/"
                  className="mt-9 md:text-[14px] sm:text-[14px]  text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>

            <div className="relative w-full mt-4">
              {/* <img src={forex} alt="Background" className="w-full h-auto xs:p-2 xs:mb-6 xs:mt-[-20px] xs:rounded-md xs:bg-gradient-to-r from-[#66b1e633] to-[#2954a333] xs:border xs:border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)]" /> */}
              <img
                src={rec2}
                alt="Background"
                className="w-full h-auto xs:mt-4 xs:mb-6"
              />

              <div className=" xs:static sm:mt-4 sm:static md:static  lg:static xl:absolute md:top-1/4 md:right-8 : lg:top-8  sm:top-8  sm:right-0 md:w-full xl:max-w-[450px] sm:max-w-full  ">
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400 xTs:mt-3  sm:text-gray-400 lg:text-gray-400 xl:text-white   md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                  Mobile makes online trading available everywhere
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400  xTs:mt-3  sm:text-gray-400 lg:text-gray-400 xl:text-white  md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  Stakonomics MT5 Trading platform allows you to enjoy trading
                  anywhere, anytime as per your comfortability. The App has an
                  intuitive interface equipped with the most modern features
                  which make cryptocurrency trading very easy. You can now
                  optimize your gains while minimizing the risks related to your
                  investment.{" "}
                </p>

                <Link
                  to="/"
                  className="mt-9 md:text-[14px] sm:text-[14px]  text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
