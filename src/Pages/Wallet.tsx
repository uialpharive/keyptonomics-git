import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import usdt from "../assets/images/usdt.svg";
import btc from "../assets/images/btc.svg";
import bch from "../assets/images/bch.svg";
import eth from "../assets/images/eth.svg";
import bnb from "../assets/images/bnb.svg";
import ltc from "../assets/images/ltc.svg";
import WhiteBtn from "../UIComponents/whiteBtn";

const Wallet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("5864852");
  const [searchQuery, setSearchQuery] = useState("");
  const [hideZero, setHideZero] = useState(false);

  const data = [
    { icon: usdt, id: "USDT", name: "1,339.92 USDT", value: "≈ $ 1,339.79" },
    { icon: btc, id: "BTC", name: "0 USDT", value: "≈ $ 0.00" }, 
    { icon: bch, id: "BCH", name: "1,339.92 USDT", value: "≈ $ 1,339.79" },
    { icon: eth, id: "ETH", name: "0 USDT", value: "≈ $ 0.00" }, 
    { icon: bnb, id: "BNB", name: "1,339.92 USDT", value: "≈ $ 1,339.79" },
    { icon: ltc, id: "LTC", name: "0 USDT", value: "≈ $ 0.00" }, 
  ];

  const filteredData = data.filter((person) => {
    const matchesSearch = person.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const isNonZero = !hideZero || person.name !== "0 USDT"; 
    return matchesSearch && isNonZero;
  });

  return (
    <div className="max-w-7xl mx-auto p-4">
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
        <div className="flex justify-between">
          <div className="total-assets flex gap-2 items-center">
            <p className="text-3xl font-semibold text-black font-bold">
              Total Balance:
            </p>
            <div className="relative flex gap-2 items-center">
              <p className="text-3xl font-semibold text-black font-bold">$</p>
              <input
                type="text"
                value={showPassword ? password : "*".repeat(password.length)}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full font-bold text-3xl rounded-lg focus:outline-none w-64 bg-transparent"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3  text-gray-800"
              >
                {showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
              </button>
            </div>
          </div>
          <div className="flex gap-5">
            {/* 🔎 Search Input */}
            <input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md placeholder-stone-800 focus-visible:outline-none"
              style={{
                backdropFilter: "blur(20.107913970947266px)",
                boxShadow: "0px 39.87px 39.87px 0px #452A7C26",
                background: "#dde4f1",
                color: "#000",
                border: "1.6px solid #f6f8ffb5",
              }}
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
              <span className="text-gray-700">Hide Zero Balances</span>
            </label>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left" colSpan={4}>
                Asset
              </th>
              <th className="px-6 py-3 text-left" colSpan={4}>
                Balance
              </th>
              <th className="px-6 py-3 text-left" colSpan={4}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="space-y-4">
            {filteredData.length > 0 ? (
              filteredData.map((person) => (
                <tr
                  key={person.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-5 text-sm" colSpan={4}>
                    <div className="coin-img flex gap-6 items-center">
                      <div className="icon">
                        <img src={person.icon} alt={person.id} />
                      </div>
                      {person.id}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm" colSpan={4}>
                    <div className="flex flex-col">
                      <div className="btc-vale">{person.name}</div>
                      <div className="btc-vale">{person.value}</div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm" colSpan={4}>
                    <div className="flex flex-row gap-5">
                      <WhiteBtn text={"Deposit"} />
                      <WhiteBtn text={"Withdraw"} />
                      <WhiteBtn text={"Exchange"} />
                      <WhiteBtn text={"Stake"} />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="text-center py-5 text-gray-500">
                  No matching assets found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wallet;
