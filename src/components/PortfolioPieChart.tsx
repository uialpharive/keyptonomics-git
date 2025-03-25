import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "BTC", value: 59.9, color: "#0088FE" },
  { name: "ETH", value: 0.1, color: "#00C49F" },
  { name: "BCH", value: 0.0, color: "#C0C0C0" },
  { name: "XRP", value: 39.6, color: "#A68BFF" },
  { name: "DOGE", value: 0.4, color: "#FFBB28" },
  { name: "SHIB", value: 0.0, color: "#FF8042" },
];

const PortfolioPieChart: React.FC = () => {
  return (
    <div>
    <h2 className="dark:text-white font-semibold text-lg mb-4">
    Portfolio Allocation
        </h2>
    <div className="w-full flex justify-end items-center">
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="5px"
          cy="5px"
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
    </div>
  );
};

export default PortfolioPieChart;
