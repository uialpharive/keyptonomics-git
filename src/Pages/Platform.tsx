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
              <img
                src={rec1}
                alt="Background"
                className="xs:hidden xTTs:hidden xTs:hidden xs:mb-6 xs:mt-[-20px]"
              />

              {/* Content Section */}
              <div
                className="
    flex flex-col items-start justify-start w-1/2 xs:static sm:mt-4 sm:static md:absolute lg:absolute  md:top-4 md:left-8 lg:top-1/4 sm:top-0 sm:left-0 md:max-w-[450px] lg:max-w-[500px] sm:max-w-full  xs:w-full xTs:w-full xTTs:w-full xTTs:px-4 xTTs:py-3 xTTs:rounded-lg lg:border-none lg:shadow-none lg:backdrop-blur-none lg:bg-none md:bg-none   md:border-none md:shadow-none md:backdrop-blur-none border border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)] backdrop-blur-lg bg-[linear-gradient(105.95deg,_rgba(102,177,230,0.2)_24.79%,_rgba(41,84,163,0.2)_71.87%)] xTs:rounded-lg xTs:p-4 xs:rounded-lg xs:p-4 xs:text-black tTl:top-3 [@media(min-width:770px)_and_(max-width:900px)]:top-0
  "
              >
                <p className="text-[24px] xTTs:w-full mt-2 [@media(min-width:770px)_and_(max-width:900px)]:text-[20px]  xTs:text-black xTs:dark:text-white xTTs:text-black xTTs:dark:text-white sm:text-gray-400 xs:dark:text-white xs:text-black lg:text-white md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2">
                  Embrace the future with Cryptocurrencies
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400 sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2 [@media(min-width:770px)_and_(max-width:900px)]:text-[12px]">
                  Buy & sell CFDs on Forex pairs such as EUR/USD, GBP/USD,
                  EUR/GBP, and more using our economic calendar to keep up to
                  date on important events.
                </p>

                <Link
                  to="/"
                  className=" md:text-[14px] sm:text-[14px] [@media(min-width:770px)_and_(max-width:900px)]:text-[12px] text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>
            <div className="relative w-full mt-6">
              <img
                src={rec2}
                alt="Background"
                className="xs:hidden xTTs:hidden xTs:hidden xs:mb-6 xs:mt-[-20px]"
              />

              {/* Content Section */}
              <div
                className="
    flex flex-col items-start justify-start w-1/2 xs:static sm:mt-4 sm:static md:absolute lg:absolute  md:top-4 md:right-8 lg:top-1/4 sm:top-0 sm:right-0 md:max-w-[450px] lg:max-w-[500px] sm:max-w-full  xs:w-full xTs:w-full xTTs:w-full xTTs:px-4 xTTs:py-3 xTTs:rounded-lg lg:border-none lg:shadow-none lg:backdrop-blur-none lg:bg-none md:bg-none   md:border-none md:shadow-none md:backdrop-blur-none border border-[#2954A3] shadow-[0px_10px_20px_0px_rgba(7,7,26,0.15)] backdrop-blur-lg bg-[linear-gradient(105.95deg,_rgba(102,177,230,0.2)_24.79%,_rgba(41,84,163,0.2)_71.87%)] xTs:rounded-lg xTs:p-4 xs:rounded-lg xs:p-4 xs:text-black tTl:top-3 [@media(min-width:770px)_and_(max-width:900px)]:top-0
  "
              >
                <p className="text-[24px] xTTs:w-full mt-2 [@media(min-width:770px)_and_(max-width:900px)]:text-[20px]  xTs:text-black xTs:dark:text-white xTTs:text-black xTTs:dark:text-white sm:text-gray-400 xs:dark:text-white xs:text-black lg:text-white md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2">
                  Embrace the future with Cryptocurrencies
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400 sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2 [@media(min-width:770px)_and_(max-width:900px)]:text-[12px]">
                  Buy & sell CFDs on Forex pairs such as EUR/USD, GBP/USD,
                  EUR/GBP, and more using our economic calendar to keep up to
                  date on important events.
                </p>

                <Link
                  to="/"
                  className=" md:text-[14px] sm:text-[14px] [@media(min-width:770px)_and_(max-width:900px)]:text-[12px] text-[#07bef0]"
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
