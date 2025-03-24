import React from "react";
import forex from "../assets/images/Rectangle7.png";
import { Link } from "react-router-dom";

const Stock = () => {
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

              <div className=" xs:static  sm:mt-4 sm:static  md:static xTs:mt-6  lg:absolute md:top-1/4 md:left-8 : lg:top-1/4  sm:top-8  sm:left-0 md:w-full lg:max-w-[450px] sm:max-w-full  ">
                <p className="text-[24px] mt-2 xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white  md:text-[25px] sm:text-[24px] xs:text-[21px] sm:mt-2 xs:mt-2 sm: ">
                  Embrace the future with Stocks
                </p>

                <p className="xs:text-gray-400  sm:text-gray-400 xTs:text-gray-400 lg:text-white  md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                  Buy & sell CFDs on world-leading Stocks, enjoy zero fees and
                  fractional shares.
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
                Like many people, you might firmly associate trading stocks with
                risk taking. You might have been warned, especially during
                volatile markets, that you incur risk of substantial permanent
                capital loss when selling or buying stocks. There is certainly a
                grain of truth to such warnings, since no trading is ever
                risk-free. But investing in the stock market will allow you to
                build your net worth more surely than trading other securities.
                You just need to be disciplined and smart when trading stocks.
                You also need to understand differences between stocks, because
                not all stocks are traded and approached similarly. First,
                however, you need to have a clear grasp of what a stock is.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
                Stock is also called share or a company’s equity, a stock is a
                financial instrument representing your ownership in a company or
                corporation. It represents your proportionate claim on a
                company’s assets and earnings; that is, on what it owns and
                generates in profits. When we talk about owing a stock in a
                company or corporation, we mean that you, as a shareholder, own
                a slice of the company equal to the number of shares held as a
                proportion of the company’s total outstanding shares. Let us say
                you own 200 shares of a company with 100,000 outstanding shares.
                You will then have a 0.2% ownership stake in this company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
