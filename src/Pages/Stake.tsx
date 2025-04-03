import { Search, X } from "lucide-react";
import { useState } from "react";
import bch from "../assets/images/bch.svg";
import bnb from "../assets/images/bnb.svg";
import btc from "../assets/images/btc.svg";
import eth from "../assets/images/eth.svg";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

interface StakeCardProps {
  id: number;
  icon: string; // Example: Coin icon
  title: string; // Example: "LTC"
  value: string; // Example: "96.330000"
  text1?: string; // Example: "Available Balance"
  text1Value?: string; // Example: "0.00 LTC"
  text2?: string; // Example: "Available Balance USDT"
  text2Value?: string; // Example: "$ 0"
  text3?: string; // Example: "APY"
  text3Value?: string; // Example: "3.5%"
  buttonText?: string; // Example: "Stake Now"
}
const stakeData = [
  {
    id: 1,
    icon: btc,
    title: "BTC",
    value: "96.330000",
    text1: "Available Balance",
    text1Value: "0.00 LTC",
    text2: "Available Balance USDT",
    text2Value: "$ 0",
    text3: "APY",
    text3Value: "3.5%",
  },
  {
    id: 2,
    icon: bch,
    title: "BCH",
    value: "1500.00",
    text1: "Available Balance",
    text1Value: "1000 USDT",
    text2: "Staked Amount",
    text2Value: "$ 500",
    text3: "APY",
    text3Value: "4.2%",
  },
  {
    id: 3,
    icon: eth,
    title: "ETH",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 4,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 5,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 6,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 7,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 8,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 9,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 10,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 11,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 12,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
  {
    id: 13,
    icon: bnb,
    title: "BNB",
    value: "2.345678",
    text1: "Available Balance",
    text1Value: "0.50 ETH",
    text2: "Available Balance USDT",
    text2Value: "$ 200",
    text3: "APY",
    text3Value: "5.0%",
  },
];

const Stake = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedStake, setSelectedStake] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filtercoin = stakeData.filter((coin) =>
    coin.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className="p-4 rounded-lg border-2"
        style={{
          background:
            "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
          border: "1px solid #2954A3",
          boxShadow: "0px 10.01px 20.03px 0px #07071A26",
        }}
      >
        <div className="flex items-center justify-center  xs:flex-col sx:gap-4 rounded-xl h-full w-full ">
          {/* Tab Buttons */}
          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`relative p-[1.6px] rounded-lg bg-gradient-to-r from-[#01D3FF] to-[#2954A3] transition-all duration-300 ease-in-out`}
            >
              <span
                className={`block w-full h-full px-6 py-2 rounded-md font-bold text-center transition-all duration-300 ease-in-out 
      ${
        activeTab === "tab1"
          ? "bg-gradient-to-r from-[#01D3FF] to-[#2954A3] text-white"
          : "bg-white text-black dark:bg-rootBgColor dark:text-white hover:bg-gradient-to-r hover:from-[#01D3FF] hover:to-[#2954A3] hover:text-white"
      }`}
              >
                Flexible
              </span>
            </button>

            <button
              onClick={() => setActiveTab("tab2")}
              className={`relative p-[1.6px] rounded-lg bg-gradient-to-r from-[#01D3FF] to-[#2954A3] transition-all duration-300 ease-in-out`}
            >
              <span
                className={`block w-full h-full px-6 py-2 rounded-md font-bold text-center transition-all duration-300 ease-in-out 
      ${
        activeTab === "tab2"
          ? "bg-gradient-to-r from-[#01D3FF] to-[#2954A3] text-white"
          : "bg-white text-black  dark:bg-rootBgColor dark:text-white hover:bg-gradient-to-r hover:from-[#01D3FF] hover:to-[#2954A3] hover:text-white"
      }`}
              >
                Fixed
              </span>
            </button>
          
          </div>
          <div className="flex gap-3 ml-auto relative xs:!mx-auto xs:my-3 ">
            <input
              placeholder="search"
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 rounded-md dark:placeholder-[#FFFFFF] dark:text-white placeholder-stone-800 focus-visible:outline-none"
              style={{
                backdropFilter: "blur(20.107913970947266px)",
                boxShadow: "0px 39.87px 39.87px 0px #452A7C26",
                background: "transparent",
                border: "1.6px solid #f6f8ffb5",
              }}
            />
            <Search
              size={24}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 dark:text-[white]"
            />
           
          </div>
        </div>
        <div className="py-5">
          {activeTab === "tab1" && (
            <>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-3">
              {filtercoin.map((item) => (
                  <div
                    key={item.id}
                    className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#01D3FF] to-[#2954A3]"
                  >
                    <div className="flex flex-col bg-white dark:bg-black dark:text-white rounded-xl h-full w-full p-4 hover:bg-themeBlueT hover:text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <span className="ml-auto">{item.value}</span>
                      </div>
                      <hr className="border-gray-700 mb-3" />
                      <p className="text-sm mb-2 mt-1">
                        Available Balance{" "}
                        <span className="float-right">
                          {item.text1Value} {item.title}
                        </span>
                      </p>
                      <p className="text-sm mb-2">
                        Available Balance USDT{" "}
                        <span className="float-right">${item.text2Value}</span>
                      </p>
                      <p className="text-sm mb-2">
                        APY{" "}
                        <span className="float-right text-themeBlue">
                          {item.text3Value}
                        </span>
                      </p>
                      <GradientButton
                        onClick={() => setSelectedStake(item.id)}
                        text="Stake Now"
                        paddingX="px-8"
                        paddingY="py-1"
                        fontSize="text-sx"
                        className="hover:from-[#fff] hover:to-[#FFFFFF] mt-6 mx-auto w-fit text-center flex 
            justify-center rounded-2xl hover:!text-black  hover:!border-[#2954A3]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
          {activeTab === "tab2" && (
            <>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-3">
              {filtercoin.map((item) => (
                  <div
                    key={item.id}
                    className="relative p-[2px] rounded-xl bg-gradient-to-r from-[#01D3FF] to-[#2954A3]"
                  >
                    <div className="flex flex-col bg-white dark:bg-black dark:text-white rounded-xl h-full w-full p-4 hover:bg-themeBlueT hover:text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={item.icon}
                          alt={item.title}
                          className="w-8 h-8"
                        />
                        <h2 className="text-lg font-medium">{item.title}</h2>
                        <span className="ml-auto">{item.value}</span>
                      </div>
                      <hr className="border-gray-700 mb-3" />
                      <p className="text-sm mb-2 mt-1">
                        Available Balance{" "}
                        <span className="float-right">
                          {item.text1Value} {item.title}
                        </span>
                      </p>
                      <p className="text-sm mb-2">
                        Available Balance USDT{" "}
                        <span className="float-right">${item.text2Value}</span>
                      </p>
                      <p className="text-sm mb-2">
                        APY{" "}
                        <span className="float-right text-themeBlue">
                          {item.text3Value}
                        </span>
                      </p>
                      <GradientButton
                        onClick={() => setSelectedStake(item.id)}
                        text="Stake Now"
                        paddingX="px-8"
                        paddingY="py-1"
                        fontSize="text-sx"
                        className="hover:from-[#fff] hover:to-[#FFFFFF] mt-6 mx-auto w-fit text-center flex 
            justify-center rounded-2xl hover:!text-black  hover:!border-[#2954A3]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {selectedStake !== null && (
        <div className="fixed inset-0 flex z-50 items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 p-4 bg-white text-black dark:bg-black dark:text-white  rounded-xl shadow-lg">
            <div className="flex justify-between">
              <h2 className="text-xl font-medium mb-4">Staking </h2>
              {/* {stakeData[selectedStake - 1].name} */}
              <X
                className="text-[#2B2B2B] dark:text-[#FFFFFF]"
                onClick={() => setSelectedStake(null)}
              />
            </div>
            <div className="relative">
              <input
                type="number"
                placeholder="0.000000"
                className="w-full py-2 pl-4 pr-14 text-lg bg-[#07071A26] border border-[#1E1E1E] rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-[#898989]  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />

              {/* BTC Label */}
              <span className="absolute right-4 pl-2 h-11 content-center top-1/2 transform -translate-y-1/2  border-[#1E1E1E] border-l-2">
                {stakeData[selectedStake - 1].title}
              </span>
            </div>
            <p className="text-gray-500 text-sm mt-2 ml-4">≈ $0</p>
            <div className="flex justify-between mt-5">
              <p>Interest</p>
              <p className="font-medium">
                0 {stakeData[selectedStake - 1].title} ≈ $ 0
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Available Balance</p>
              <p className="font-medium">
                0.0000 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Minimum Stake</p>
              <p className="font-medium">
                0.001 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Maximum Stake</p>
              <p className="font-medium">
                10,000 {stakeData[selectedStake - 1].title}
              </p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Withdrawal Term</p>
              <p className="font-medium">Flexible</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Redemption Period</p>
              <p className="font-medium">1 Days</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>Duration (Days)</p>
              <p className="font-medium">365</p>
            </div>
            <div className="flex justify-between mt-1">
              <p>APY</p>
              <p className="font-medium">9.5%</p>
            </div>

            <div className="mt-6  flex w-full gap-4">
              <WhiteBtn
                text={"Cancel"}
           className="w-6/12 !translate-y-0"
                onClick={() => setSelectedStake(null)}
              />
              <GradientButton text={"Confirm"} className="w-6/12 !translate-y-0" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Stake;
