import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import usdt from "../assets/images/usdt.svg";
import btc from "../assets/images/btc.svg";
import bch from "../assets/images/bch.svg";
import eth from "../assets/images/eth.svg";
import bnb from "../assets/images/bnb.svg";
import ltc from "../assets/images/ltc.svg";
import xrp from "../assets/images/xrp.svg";
import doge from "../assets/images/doge.svg";
import shib from "../assets/images/shib.svg";
import ada from "../assets/images/ada.svg";
import neo from "../assets/images/neo.svg";
import WhiteBtn from "../UIComponents/WhiteBtn"
import { useNavigate } from "react-router-dom";
const Wallet = () => {
 
  const navigate = useNavigate();




  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("5864852");
  const [searchQuery, setSearchQuery] = useState("");
  const [hideZero, setHideZero] = useState(false);

  const data = [
    { icon: usdt, id: "USDT", name: "1,339.92 USDT", value: "≈ $ 1,339.79" },
    { icon: btc, id: "BTC", name: "0 BTC", value: "≈ $ 0.00" }, 
    { icon: bch, id: "BCH", name: "1,339.92 BCH", value: "≈ $ 1,339.79" },
    { icon: eth, id: "ETH", name: "0 ETH", value: "≈ $ 0.00" }, 
    { icon: bnb, id: "BNB", name: "1,339.92 BNB", value: "≈ $ 1,339.79" },
    { icon: ltc, id: "LTC", name: "0 LTC", value: "≈ $ 0.00" }, 
    { icon: xrp, id: "XRP", name: "1,339.92 XRP", value: "≈ $ 1,339.92 0.00" }, 
    { icon: doge, id: "DOGE", name: "0 DOGE", value: "≈ $ 1,339.92 0.00" }, 
    { icon: shib, id: "SHIB", name: "0 SHIB", value: "≈ $ 0.00" }, 
    { icon: ada, id: "ADA", name: "0 ADA", value: "≈ $ 0.00" }, 
    { icon: neo, id: "NEO", name: "1,339.92 ADA", value: "≈ $ 1,339.92" }, 
  ];

  const filteredData = data.filter((person) => {
    const matchesSearch = person.id.toLowerCase().includes(searchQuery.toLowerCase());
    const isNonZero = !hideZero || !person.name.startsWith("0"); 
    return matchesSearch && isNonZero;
  });
  

  return (
    
    <div>
        <div className="">
      <div
        className="p-8 rounded-xl"
        style={{
          background:
            "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
          boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
          backdropFilter: "blur(13.82px)",
          border: "1px solid #2954A3",
        }}
      >
        <div className="flex justify-between flex-wrap sm:gap-5">
          <div className="total-assets flex gap-2 items-center flex-wrap">
            <p className="text-3xl font-semibold text-black font-bold dark:text-white">
              Total Balance:
            </p>
            <div className="relative flex gap-2 items-center">
              <p className="text-3xl font-semibold text-black font-bold dark:text-white">$</p>
              <input
                type="text"
                value={showPassword ? password : "*".repeat(password.length)}
                onChange={(e) => setPassword(e.target.value)}
                className="font-bold text-2xl rounded-lg focus:outline-none w-40 bg-transparent dark:text-white"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3  text-gray-800 dark:text-white"
              >
                {showPassword ? <EyeOff size={25} /> : <Eye size={25} />}
              </button>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap">
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md focus-visible:outline-none shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] dark:text-white bg-inputBg"
            />
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={hideZero}
                onChange={() => setHideZero(!hideZero)}
                className="w-5 h-5 text-blue-600 rounded"
                style={{
                  backdropFilter: "blur(20.107913970947266px)",
                  boxShadow: "0px 39.87px 39.87px 0px #452A7C26",
                  background: "#dde4f1",
                  color: "#000",
                  border: "1.6px solid #f6f8ffb5",
                }}
              />
              <span className="text-gray-700 dark:text-white">Hide Zero Balances</span>
            </label>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
  <table className="w-full bg-white shadow-md rounded-lg dark:bg-transparent">
    <thead>
      <tr className="dark:text-white">
        <th className="px-6 py-3 text-left">Asset</th>
        <th className="px-6 py-3 text-left">Balance</th>
        <th className="px-6 py-3 text-left">Action</th>
      </tr>
    </thead>
    <tbody>
      {filteredData.length > 0 ? (
        filteredData.map((person) => (
          <tr key={person.id} className="hover:bg-gray-100 transition odd:bg-gray-100 dark:odd:bg-cardBgDark dark:hover:bg-cardBgDark dark:text-white">
            <td className="px-6 py-5 text-sm w-1/3 ">
              <div className="flex gap-6 items-center">
                <img
                  src={person.icon}
                  alt={person.id}
                  className="w-8 h-8"
                />
                {person.id}
              </div>
            </td>
            <td className="px-6 py-5 text-sm w-1/3 whitespace-nowrap">
              <div className="flex flex-col">
                <span className="font-semibold">{person.name}</span>
                <span className="text-gray-500">{person.value}</span>
              </div>
            </td>
            <td className="px-6 py-5 text-sm w-1/3">
              <div className="flex flex-row gap-3">
                <WhiteBtn text="Deposit" onClick={() => navigate("/deposit")} />
                <WhiteBtn text="Withdraw" onClick={() => navigate("/withdraw")} />
                <WhiteBtn text="Exchange" />
                <WhiteBtn text="Stake" onClick={() => navigate("/stake")} />
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3} className="text-center py-5 text-gray-500">
            No matching assets found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default Wallet;
