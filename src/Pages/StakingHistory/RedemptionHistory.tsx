
import React, { useState } from 'react'
import { ChevronDown, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

const stakecoin = ["All","BTC","BCH","ETH","BNB","LTC","XRP","DOGE","SHIB","USDT","ADA","NEO","XMR"];

const tableData = [
  { date: "2025-04-03 15:09", coin: "BTC", amount: "10.00000", apy: "9.5 %", interestEarned: "0", interestInDollar: "0.00", stakeType: "Flexible" },
  { date: "2023-12-14 12:56", coin: "BNB", amount: "100.0000", apy: "4.5 %", interestEarned: "3.9082", interestInDollar: "2,345.55", stakeType: "Flexible" },
  { date: "2023-12-14 12:56", coin: "BNB", amount: "100.0000", apy: "4.5 %", interestEarned: "0", interestInDollar: "0.00", stakeType: "Flexible" },
  { date: "2023-12-14 12:44", coin: "BNB", amount: "100.0000", apy: "18 %", interestEarned: "4.4383", interestInDollar: "2,663.69", stakeType: "Fixed" },
  { date: "2023-12-14 12:31", coin: "BNB", amount: "50.0000", apy: "4.5 %", interestEarned: "0", interestInDollar: "0.00", stakeType: "Flexible" },
  { date: "2023-12-14 12:44", coin: "ETH", amount: "100.0000", apy: "18 %", interestEarned: "4.4383", interestInDollar: "2,663.69", stakeType: "Fixed" },
  { date: "2023-12-14 12:31", coin: "LDC", amount: "50.0000", apy: "4.5 %", interestEarned: "0", interestInDollar: "0.00", stakeType: "Flexible" },
  { date: "2023-12-14 12:44", coin: "BNB", amount: "100.0000", apy: "18 %", interestEarned: "4.4383", interestInDollar: "2,663.69", stakeType: "Fixed" },
  { date: "2023-12-14 12:31", coin: "BNB", amount: "50.0000", apy: "4.5 %", interestEarned: "0", interestInDollar: "0.00", stakeType: "Flexible" },
];

// const tableData: any[] = []; 
const RedemptionHistory = () => {
  const [selectedOption1, setSelectedOption1] = useState(stakecoin[0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);

  // Filtering
  const filteredData = selectedOption1 === "All" 
    ? tableData 
    : tableData.filter((row) => row.coin === selectedOption1);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <>
      
       <p className="text-themeBlue text-lg font-bold mt-10 mb-4">Redemption History</p>
        <div className="p-8 sm:!p-4 xs:!p-2 rounded-xl mb-10 bg-[linear-gradient(105.95deg,_rgba(102,_177,_230,_0.2)_24.79%,_rgba(41,_84,_163,_0.2)_71.87%)] shadow-[0px_10.01px_20.03px_0px_rgba(7,_7,_26,_0.15)] backdrop-blur-[13.82px] border border-[#2954A3]">
  
        <div className="flex space-x-4 mb-4">
        <div className="relative group w-fit">
  <button className="flex items-center px-4 py-2 border border-themeBlue rounded-full bg-transparent dark:text-white hover:bg-gray-700">
    {selectedOption1}
    <ChevronDown className="ml-2 w-4 h-4" />
  </button>
  <ul className="absolute left-0 top-[38px] mt-1 w-full h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent bg-white text-black dark:bg-black dark:text-white shadow-md rounded-lg hidden group-hover:block">
    {stakecoin.map((stakecoin) => (
      <li
        key={stakecoin}
        className="px-4 py-2 hover:bg-gray-500 rounded-lg cursor-pointer"
        onClick={() => setSelectedOption1(stakecoin)}
      >
        {stakecoin}
      </li>
    ))}
  </ul>
</div>
      </div>

       {/* No Records Message */}
       {filteredData.length === 0 ? (
        <div className="text-center text-gray-400 text-lg py-6">There are no records to display</div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg">
              <thead className="dark:text-white">
                <tr>
                  {["Date", "Coin", "Amount", "APY", "Interest Earned", "Interest in ($)", "Stake Type"].map((header, index) => (
                    <th key={index} className="px-4 py-2 text-left whitespace-nowrap">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedData.map((row, rowIndex) => (
                  <tr key={rowIndex}  className={rowIndex % 2 === 0
                      ? "bg-white dark:bg-[#0d142b] text-black dark:text-titleGray rounded-lg border-transparent"
                      : "bg-transparent text-black dark:text-titleGray"
                  }>
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex} className="px-4 py-2 dark:text-themeWhite whitespace-nowrap">{String(value)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 mt-4 dark:text-white">
            <div>Rows per page {rowsPerPage}</div>
            <div>
              {filteredData.length > 0 &&
                `${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, filteredData.length)} of ${filteredData.length}`}
            </div>
            <div className="flex gap-1">
              <button
                className="p-1 dark:text-white"
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              >
                <ChevronsLeft />
              </button>
              <button
                className="p-1 dark:text-white"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft />
              </button>
              <button
                className="p-1 dark:text-white"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight />
              </button>
              <button
                className="p-1 dark:text-white"
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              >
                <ChevronsRight />
              </button>
            </div>
          </div>
          </>
      )}
    </div>
    </>
   
  )
};

export default RedemptionHistory;