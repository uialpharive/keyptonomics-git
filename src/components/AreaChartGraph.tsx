import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MdOutlineArrowDropDown } from "react-icons/md";

const dataMap = {
  day: [
    { name: "Mar 13 01", value: 5000000000 },
    { name: "Mar 13 02", value: 4000000000 },
    { name: "Mar 13 03", value: 3000000000 },
    { name: "Mar 13 04", value: 2000000000 },
    { name: "Mar 13 05", value: 1000000000 },
  ],
  week: [
    { name: "Mon", value: 20000000000 },
    { name: "Tue", value: 18000000000 },
    { name: "Wed", value: 15000000000 },
    { name: "Thu", value: 12000000000 },
    { name: "Fri", value: 10000000000 },
    { name: "Sat", value: 8000000000 },
    { name: "Sun", value: 5000000000 },
  ],
  month: [
    { name: "Week 1", value: 50000000000 },
    { name: "Week 2", value: 45000000000 },
    { name: "Week 3", value: 40000000000 },
    { name: "Week 4", value: 35000000000 },
  ],
  year: [
    { name: "January", value: 2413772059390 },
    { name: "February", value: 2086436282824 },
    { name: "March", value: 1555306221556 },
    { name: "December", value: 43057246467 },
  ],
};

const coins = [
  {
    name: "BTC",
    value: "btc",
    image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    name: "ETH",
    value: "eth",
    image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
  {
    name: "XRP",
    value: "xrp",
    image: "https://cryptologos.cc/logos/xrp-xrp-logo.png",
  },
  {
    name: "LTC",
    value: "ltc",
    image: "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
  },
];

const AreaChartGraph = () => {
  const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">(
    "day"
  );
  const [selectedCoin, setSelectedCoin] = useState(coins[0]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="mb-4">
        <h2 className="dark:text-white font-semibold text-lg mb-4">
          Portfolio Performance
        </h2>
        <div className="relative inline-block text-left">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="dark:bg-gray-800 dark:text-white px-4 py-2 rounded-2xl flex items-center gap-4 w-32 border border-black"
          >
            <img
              src={selectedCoin.image}
              alt={selectedCoin.name}
              className="w-5 h-5"
            />
            {selectedCoin.name}

            <div className="text-right">
              <MdOutlineArrowDropDown />
            </div>
          </button>
          {isOpen && (
            <div className="absolute left-0 mt-2 w-32 bg-gray-800 text-white rounded-md shadow-lg z-10">
              {coins.map((coin) => (
                <div
                  key={coin.value}
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                  onClick={() => {
                    setSelectedCoin(coin);
                    setIsOpen(false);
                  }}
                >
                  <img src={coin.image} alt={coin.name} className="w-5 h-5" />
                  {coin.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-2 mb-4">
          {["day", "week", "month", "year"].map((range) => (
            <button
              key={range}
              onClick={() =>
                setTimeRange(range as "day" | "week" | "month" | "year")
              }
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                timeRange === range
                  ? "bg-themeBlue text-white shadow-md"
                  : "bg-white text-themeBlue hover:bg-themeBlue hover:text-white border border-themeBlue"
              }`}
            >
              {range.charAt(0).toUpperCase() + range.slice(1)}
            </button>
          ))}
        </div>
      <div className="p-4 bg-gray-900 rounded-xl shadow-lg">
 
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dataMap[timeRange]}
              margin={{ left: 10, right: 20 }}
            >
              <defs>
                <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#007bff" stopOpacity={0.8} />
                  <stop offset="100%" stopColor="#007bff" stopOpacity={0.2} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                tick={{ fill: "white", fontSize: "12px" }}
                stroke="gray"
              />
              <YAxis
                tick={{ fill: "white", fontSize: "12px" }}
                stroke="gray"
                allowDecimals={false}
                width={80}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  color: "white",
                  borderRadius: "8px",
                  border: "none",
                }}
                cursor={{ stroke: "#007bff", strokeWidth: 1 }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#007bff"
                strokeWidth={2}
                fill="url(#colorFill)"
                dot={{ fill: "#007bff", r: 3 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AreaChartGraph;
