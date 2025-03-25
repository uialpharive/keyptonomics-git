import React from "react";
import forex from "../assets/images/Rectangle6.png";
import { Link } from "react-router-dom";

const Indices = () => {
    const stockIndices = [
        { code: "ASX", description: "Australian Securities Exchange" },
        { code: "CAC", description: "The leading French index" },
        { code: "DAX", description: "The German leading index" },
        { code: "Dow Jones", description: "Measures the 30 largest companies in the United States" },
        { code: "IBEX", description: "The leading Spanish index" },
        { code: "NASDAQ", description: "The Nasdaq-100, includes 100 of the largest non-financial companies in the United States" },
        { code: "NIKKEI", description: "The stock market index for the Tokyo Stock Exchange (TSE)" },
        { code: "SMI", description: "Swiss Market Index" },
        { code: "S&P500", description: "Measures the stock performance of 500 large companies in the United States" },
        { code: "STOXX50", description: "Measures the 50 blue-chip European companies operating within eurozone nations" },
        { code: "FTSE", description: "Financial Times Stock Exchange 100 Index, The leading British index" },
      ];
      
     
      
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
                Embrace the future with Indices
                </p>

                <p className="xs:text-gray-400 xTs:text-gray-400  sm:text-gray-400 lg:text-white md:text-[14px] xs:text-[14px] sm:text-[14px] mb-4 font-medium mt-2">
                Buy & sell CFDs on Indices such as S&P 500 (ES), NASDAQ 100 (NQ),
FTSE 100 (UK100), and more world-class Indices using our ultra-
competitive quotes.
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
              When you trade at stock markets, you need to understand what indices are, because they measure the performance of a group of stocks. It is also advisable to choose a certain index,
before you start trading. In what follows, we are explaining what indices are, how to trade them, what markets are available to traders, and how they differ from one another. After reading
our explanation, you will possess deeper knowledge of indices and will begin to trade them with professional confidence.
              </p>
              <p className="dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
              Indices are a measurement of the price performance of a group of shares from an exchange. The NASDAQ (National Association of Securities Dealers Automated Quotations) is an
electronic stock exchange that tracks more than 3,300 companies, which makes it the stock exchange with the greatest trading volume in the USA. The FTSE 100 tracks the 100
largest companies on the London Stock Exchange. The Dax, a blue-chip stock market index, consists of the 30 major German companies trading on the Frankfurt Stock Exchange. If
the average share price of the companies listed on these indices increases, these indices will climb. If the companies sink, these indices will dip with them. Trading indices is more
convenient than trading individual stocks since by trading indices, you get exposed to an entire sector or even economy. And to do this, you need to open only one position.
              </p>
              <h5 className=" dark:text-white xs:text-[12px] sm:text-[12px] md:text-[14px]  mt-7 mb-5 text-[16px]">
              What are the Indices available on Stakonomics?
              </h5>
              
      {stockIndices.map((index, i) => (
        <li key={i} className="ml-3 dark:text-white xs:text-[14px] sm:text-[14px] mb-6 text-[16px]">
          {index.code}: {index.description}
        </li>
      ))}
  
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indices;
