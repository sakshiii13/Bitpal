import React, { useMemo, useState } from "react";

const ReusableTable = ({
  title = "Income History",
  subtitle = "View, search and export your income records",
  columns = [],
  data = [],
  fileName = "income-history.csv",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;

    return data.filter((row) =>
      columns.some((col) => {
        const value = row[col.accessor];
        return value
          ?.toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      })
    );
  }, [data, columns, searchTerm]);

  const handleExportCSV = () => {
    if (!filteredData.length) return;

    const headers = columns.map((col) => col.header).join(",");

    const rows = filteredData.map((row) =>
      columns
        .map((col) => {
          let value = row[col.accessor] ?? "";

          if (typeof value === "string") {
            value = value.replace(/"/g, '""');
          }

          return `"${value}"`;
        })
        .join(",")
    );

    const csvContent = [headers, ...rows].join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#161922] via-[#11131a] to-[#0b0d12] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
      <div className="absolute -top-16 -left-10 h-40 w-40 rounded-full bg-lime-400/10 blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute inset-0 rounded-[28px] ring-1 ring-white/5"></div>

      <div className="relative z-10 mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            placeholder="Search record..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="h-11 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_20px_rgba(0,0,0,0.25)] outline-none backdrop-blur-md placeholder:text-gray-500 focus:border-lime-400 focus:shadow-[0_0_0_3px_rgba(163,230,53,0.12)] sm:w-[240px]"
          />

          <button
            onClick={handleExportCSV}
            className="h-11 rounded-2xl border border-lime-300/20 bg-lime-400 px-5 text-sm font-semibold text-black shadow-[0_10px_25px_rgba(163,230,53,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300"
          >
            Export
          </button>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_20px_45px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-y-2 px-2 text-left text-sm text-white">
            <thead>
              <tr className="bg-[#1a1e27] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                {columns.map((col, index) => (
                  <th
                    key={index}
                    className="whitespace-nowrap px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400 first:rounded-l-2xl last:rounded-r-2xl"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="group transition duration-300 hover:-translate-y-[2px]"
                  >
                    {columns.map((col, colIndex) => (
                      <td
                        key={colIndex}
                        className="whitespace-nowrap border-y border-white/5 bg-[#131720] px-5 py-4 text-gray-300 shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition duration-300 group-hover:border-lime-400/10 group-hover:bg-[#181d28] group-hover:text-white first:rounded-l-2xl first:border-l last:rounded-r-2xl last:border-r"
                      >
                        {col.render ? col.render(row) : row[col.accessor]}
                      </td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="py-10 text-center text-sm text-gray-500"
                  >
                    No Data Found
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

export default ReusableTable;