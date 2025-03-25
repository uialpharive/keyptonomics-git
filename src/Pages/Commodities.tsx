import React from "react";
import forex from "../assets/images/Rectangle5.png";
import { Link } from "react-router-dom";

const Commodities = () => {
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
                src={forex}
                alt="Background"
                className="w-full h-auto  xs:mb-6 xs:mt-[-20px]"
              />

              <div className=" xs:static sm:mt-4 sm:static md:static  lg:absolute md:top-1/4 md:left-8 : lg:top-1/4  sm:top-8  sm:left-0 md:w-full lg:max-w-[450px] sm:max-w-full  ">
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white  md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                  Embrace the future with Commodities
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  Buy & sell CFDs on Commodities such as Oil, Gold, Silver, and
                  more using our cutting-edge technology.s
                </p>

                <Link
                  to="/"
                  className="mt-9 md:text-[14px] sm:text-[14px]  text-[#07bef0]"
                >
                  Start Trading
                </Link>
              </div>
            </div>

            <div className="login-part">
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px] md:text-[25px]  mt-7 mb-5 text-[30px]">
                Online trading made simpler
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Make brilliant profits in energy commodities trading with the
                expert assistance of Stakonomics. We offer a range of major
                commodities including WTI and BRENT Crude Oil, Natural Gas,
                Gold, and more. These commodities play a vital role as energy
                sources for industry and homes, as well as for electronics and
                jewellery when it comes to Gold.
              </p>
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px] md:text-[25px]  mt-7 mb-5 text-[30px]">
                Energy commodities
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Energy commodities comprise hard commodities (both renewable as
                well as non-renewable resources/ commodities) which are usually
                mined or are extracted from mother earth.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                As for the current times, the most developed commodity market is
                in the non-renewable energy commodities. Resources such as coal,
                oil, and natural gas fall into this category. The trading growth
                in this category reflects the economic growth of any nation,
                organization, individual traders and so on. For instance, oil is
                a highly favored energy commodity that is widely sought after.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Energy commodities are a very beneficial trading element and
                bring about a lot of profit if traded well. But given these
                commodities are nature and environment-based, things like
                weather and global warming affect their trading. Other factors
                such as politics and other economic events also affect its
                trading.
              </p>
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px] md:text-[25px]  mt-7 mb-5 text-[30px]">
                Precious Metals
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                People have been trading precious metals for thousands of years,
                and they’re still one of the most profitable and reliable trades
                around. Their tendency is to keep growing in value, particularly
                in times of economic volatility.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Some of the wisest, richest investors on the planet put
                significant fortunes into precious metals, helping them weather
                turbulent economic conditions. And even in a standard market,
                precious metals provide the perfect opportunity for
                diversification of your portfolio.
              </p>
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px]  md:text-[25px]  mt-7 mb-5 text-[30px]">
                At Stakonomics, you can trade on the following metals:
              </h5>
              <div className="ml-2">
                <li>Gold</li>
                <li>ASX: Australian Securities Exchange</li>
                <li>Silver</li>
                <li>Palladium</li>
                <li>Platinum</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commodities;
