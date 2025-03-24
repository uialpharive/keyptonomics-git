import React from "react";
import forex from "../assets/images/Rectangle1.png";
import { Link } from "react-router-dom";

const Crypto = () => {
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

              
              <div className=" xs:static sm:mt-4 sm:static md:static  lg:absolute md:top-1/4 md:left-8 : lg:top-14  sm:top-8  sm:left-0 md:w-full lg:max-w-[450px] sm:max-w-full  ">
                
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white  md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                Embrace the future with Cryptocurrencies
                </p>

                
                <p className="xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                Buy & sell CFDs on Bitcoin, Ethereum, and 60+ other Cryptocurrencies at your fingertips.
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
              <h5 className=" dark:text-white xs:text-[21px] sm:text-[24px] md:text-[25px]  mt-7 mb-3 text-[30px]">
                Online trading made simpler
              </h5>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
              Stakonomics is a highly sought-after cryptocurrency trading platform. Our cryptocurrency tools and services help you in jump-starting with cryptocurrency trading in no time, and side
              by side helps you to gain great insights into the cryptocurrency trading market.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
              Cryptocurrency is the new-age digital currency that is backed by blockchain technology. It represents money on the digital ledger with a lot more advanced features that have
revolutionized the traditional financial industry and many other segments of society.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
              The presence of elements such as cryptography, end-to-end encryption, time-stamped transparent transactions that are almost instant, all these qualities make the trading of the
cryptocurrency a very sought-after market. Further, the fact that cryptocurrency is decentralized in nature, brings a lot of flexibility and freedom from central banks and governments to
the traders and investors of the cryptocurrency. When all such qualities of cryptocurrency are guided by the expert team of Stakonomics, the trader is in for sure benefits.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
              At Stakonomics, we offer you leveraged cryptocurrency trading which allows the user to gauge the possible future changes in the value of cryptocurrency. The user can enjoy
cryptocurrency trading, without having to own any cryptocurrency at Stakonomics. Further, the leveraged cryptocurrency helps you to steer away from security risks which usually
affect when one trades cryptocurrency on any crypto exchange. Given the user can peek into the possible future tides in the pricing of various cryptocurrencies in the market, the user
can make smart advanced decisions, advance profit booking, and can expect higher rewards too.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crypto;
