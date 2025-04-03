import React from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

interface TableProps {
  columns: string[];
  data: any[];
  currentPage: number;
  rowsPerPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const TableComponent: React.FC<TableProps> = ({
  columns,
  data,
  currentPage,
  rowsPerPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div>
      {/* No Records Message */}
      {data.length === 0 ? (
        <div className="text-center text-gray-400 text-lg py-6">There are no records to display</div>
      ) : (
        <>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg">
              <thead className="dark:text-white">
                <tr>
                  {columns.map((header, index) => (
                    <th key={index} className="px-4 py-2 text-left">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className={
                      rowIndex % 2 === 0
                        ? "bg-white dark:bg-[#0d142b] text-black dark:text-titleGray rounded-lg border-transparent"
                        : "bg-transparent text-black dark:text-titleGray"
                    }
                  >
                    {Object.values(row).map((value, colIndex) => (
                      <td key={colIndex} className="px-4 py-2 dark:text-themeWhite">{String(value)}</td>
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
              {data.length > 0 &&
                `${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, data.length)} of ${data.length}`}
            </div>
            <div className="flex gap-1">
              <button className="p-1 dark:text-white" onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                <ChevronsLeft />
              </button>
              <button className="p-1 dark:text-white" onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))} disabled={currentPage === 1}>
                <ChevronLeft />
              </button>
              <button className="p-1 dark:text-white" onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))} disabled={currentPage === totalPages}>
                <ChevronRight />
              </button>
              <button className="p-1 dark:text-white" onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                <ChevronsRight />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TableComponent;
