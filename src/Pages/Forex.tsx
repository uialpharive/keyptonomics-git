import React from "react";
import forex from "../assets/images/forex.png";
import { Link } from "react-router-dom";

const Forex = () => {
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
              <img src={forex} alt="Background" className="w-full h-auto  xs:mb-6 xs:mt-[-20px]" />

              {/* Text Container */}
              <div className=" xs:stati sm:mt-4 sm:static  md:absolute md:top-1/4 md:left-8  sm:top-8  sm:left-0 md:w-full md:max-w-[400px] sm:max-w-full  ">
                {/* Title */}
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white  md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                  Embrace the future with Forex
                </p>

                {/* Description */}
                <p className="xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  Buy & sell CFDs on Forex pairs such as EUR/USD, GBP/USD,
                  EUR/GBP, and more using our economic calendar to keep up to
                  date on important events.
                </p>

                {/* CTA Button */}
                <Link
                  to="/"
                  className="mt-9 md:text-[14px] sm:text-[14px]  text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>

            <div className="login-part">
              <h5 className=" dark:text-white xs:text-[24px] sm:text-[24px]  mt-7 mb-3 text-[30px]">
                Online trading made simpler
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                The foreign exchange market is the most sought-after financial
                market. It entices many with its huge potential of big gains,
                yet due to the steep learning curve, it can plunge a person into
                shocking valleys too. That is why a word of caution always
                accompanies the forex market. Having an experienced guide and
                support system can make a great difference in your confidence in
                dealing with the forex market. And this is exactly what
                Stakonomics forex support comes into play.
              </p>
            </div>
            <div className="login-time dark:text-white sm:text-[14px]">
              <h5 className=" dark:text-white xs:text-[24px] sm:text-[24px] mb-7 text-[30px]">
                Stakonomics offers its users incredible services such as:{" "}
              </h5>
              <div className="text-[16px] xs:text-[14px]">
                <li className="mb-3">
                  Gives you cutting-edge pricing from multiple pips for various
                  currencies.
                </li>
                <li className=" mb-3">
                  Here you can find advanced forex tools that can take your
                  trading experience to newer heights. These tools range from
                  chain tools to tools based on analytics, advanced risk
                  management tools, and so on.
                </li>

                <li className="">
                  Stakonomics with its long experience and thorough expertise in
                  the field offers a thorough support system for its users to
                  help them advance towards their forex trading aims. You can
                  trade 24 hours a day and will be backed throughout!
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forex;
