import { useState } from "react";
import GradientButton from "../UIComponents/GradientButton";

interface Trade {
  pair: string;
  type: string;
  quantity: number;
  entryPrice: number;
  openTime?: string;
  closePrice?: number;
  pnl?: number;
  reason?: string;
}

const data: { open: Trade[]; closed: Trade[] } = {
  open: [
    { pair: "BTCUSDT", type: "Buy", quantity: 1.0, entryPrice: 61200, openTime: "2024-08-23 15:40" },
    { pair: "BTCUSDT", type: "Buy", quantity: 0.5, entryPrice: 60850, openTime: "2024-08-14 13:59" },
  ],
  closed: [
    { pair: "BTCUSDT", type: "Buy", quantity: 1.0, entryPrice: 61400, closePrice: 61500, pnl: 100, reason: "Closed By User" },
    { pair: "BTCUSDT", type: "Buy", quantity: 0.1, entryPrice: 61100, closePrice: 61000, pnl: -10, reason: "Low Margin" },
  ],
};

const TradingTable: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"open" | "closed">("closed");

  return (
    <div className="p-6 dark:bg-[#181627] dark:text-white rounded-lg shadow-lg">
      {/* Tab Controls */}
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${activeTab === "open" ? "rounded-lg dark:text-white bg-gradient-to-r from-[#01D3FF] to-[#2954A3]  hover:text-[#2954A3] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#00cdf94d]" : "rounded-lg text-white  hover:text-[#2954A3] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#00cdf94d]"}`}
          onClick={() => setActiveTab("open")}
        >
          Open Positions
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === "closed" ? "rounded-lg dark:text-white bg-gradient-to-r from-[#01D3FF] to-[#2954A3]  hover:text-[#2954A3] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#00cdf94d]" : "rounded-lg text-white  hover:text-[#2954A3] duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_8px_20px_0_#00cdf94d]"}`}
          onClick={() => setActiveTab("closed")}
        >
          Closed Positions
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full ">
          <thead>
            <tr className=":darktext-white text-[14px] font-Normal">
              <th className="p-3">Pair</th>
              <th className="p-3">Type</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Entry Price</th>
              {activeTab === "closed" && <th className="p-3">Close Price</th>}
              {activeTab === "closed" && <th className="p-3">PNL</th>}
              {activeTab === "closed" && <th className="p-3">Reason</th>}
              <th>Info</th>
            </tr>
          </thead>
          <tbody>
            {data[activeTab].map((row, index) => (
              <tr key={index} className="text-center text-[12px]">
                <td className="p-3">{row.pair}</td>
                <td className="p-3 text-green-400">{row.type}</td>
                <td className="p-3">{row.quantity}</td>
                <td className="p-3">{row.entryPrice}</td>
                {activeTab === "closed" && <td className="p-3">{row.closePrice}</td>}
                {activeTab === "closed" && <td className={`p-3 ${row.pnl && row.pnl >= 0 ? "text-green-400" : "text-red-400"}`}>{row.pnl}</td>}
                {activeTab === "closed" && <td className="p-3">{row.reason}</td>}
                <td><GradientButton text="Info" className="py-1 px-3"/></td>
                



              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradingTable;