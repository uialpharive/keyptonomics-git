import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const dataMap = {
    day: [
      { name: "00:00", value: 5000000000 },
      { name: "06:00", value: 4000000000 },
      { name: "12:00", value: 3000000000 },
      { name: "18:00", value: 2000000000 },
      { name: "24:00", value: 1000000000 },
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

const AreaChartGraph = () => {
    const [timeRange, setTimeRange] = useState<"day" | "week" | "month" | "year">("year");

  return (
  
     <div className="p-4 bg-gray-900 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-white font-semibold text-lg">Portfolio Performance</h2>
        <select className="bg-gray-800 text-white px-4 py-2 rounded-md">
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
          <option value="xrp">XRP</option>
        </select>
      </div>

      {/* Time Range Tabs */}
      <div className="flex gap-2 mb-4">
        {["day", "week", "month", "year"].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range as "day" | "week" | "month" | "year")}
            className={`px-4 py-2 rounded-md text-sm ${
              timeRange === range ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>

      {/* Chart */}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataMap[timeRange]}>
            <defs>
              <linearGradient id="colorFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#007bff" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#007bff" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" tick={{ fill: "white" }} />
            <YAxis tick={{ fill: "white" }} />
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#007bff" fill="url(#colorFill)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default AreaChartGraph


