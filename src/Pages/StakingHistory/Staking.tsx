import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const tableData = [
  { date: "2025-04-03 15:09", coin: "BTC",apy: "9.5 %", type:"Flexible",amount: "10.00000",  remainingDays: "365" },
  { date: "2023-12-14 12:56", coin: "BNB", apy: "4.5 %", type:"Flexible",amount: "100.0000", remainingDays: "180" },
];
// const tableData: any[] = []; 


const Staking = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const handleReleaseClick = () => {
    toast.success("Stake released successfully!");
  };
  const totalPages = Math.ceil(tableData.length / rowsPerPage);
  const paginatedData = tableData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <>
    <ToastContainer/>
      <p className="text-themeBlue text-lg font-bold mt-10 mb-4">Staking History</p>
      <div className="p-8 sm:!p-4 xs:!p-2 rounded-xl mb-10 bg-[linear-gradient(105.95deg,_rgba(102,_177,_230,_0.2)_24.79%,_rgba(41,_84,_163,_0.2)_71.87%)] shadow-[0px_10.01px_20.03px_0px_rgba(7,_7,_26,_0.15)] backdrop-blur-[13.82px] border border-[#2954A3]">
        {tableData.length === 0 ? (
          <div className="text-center text-gray-400 text-lg py-6">There are no records to display</div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg">
                <thead className="dark:text-white">
                  <tr>
                    {["Date", "Coin",  "APY","Type","Amount", "Remaining Day's", "Action"].map((header, index) => (
                      <th key={index} className="px-4 py-2 text-left whitespace-nowrap">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.map((row, rowIndex) => (
                    <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white dark:bg-[#0d142b] text-black dark:text-titleGray rounded-lg border-transparent" : "bg-transparent text-black dark:text-titleGray"}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} className="px-4 py-2 dark:text-themeWhite whitespace-nowrap">{String(value)}</td>
                      ))}
                      <td className="px-4 py-2">
                        <button onClick={handleReleaseClick} className="px-3 py-1 border rounded-md bg-white dark:bg-gray-700 dark:text-white">Release</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4 dark:text-white">
              <div>Rows per page {rowsPerPage}</div>
              <div>
                {tableData.length > 0 &&
                  `${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, tableData.length)} of ${tableData.length}`}
              </div>
              <div className="flex gap-1">
                <button className="p-1 dark:text-white" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}><ChevronsLeft /></button>
                <button className="p-1 dark:text-white" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}><ChevronLeft /></button>
                <button className="p-1 dark:text-white" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}><ChevronRight /></button>
                <button className="p-1 dark:text-white" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}><ChevronsRight /></button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Staking;
