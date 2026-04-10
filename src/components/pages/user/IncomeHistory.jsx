import React from "react";
import ReusableTable from "../../ReusableTable";

const IncomeHistory = () => {
  const columns = [
    { header: "Date", accessor: "date" },
    { header: "Source", accessor: "source" },
    { header: "Amount (₹)", accessor: "amount" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => {
        const status = row.status;

        return (
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
              status === "Completed"
                ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            }`}
          >
            {status}
          </span>
        );
      },
    },
  ];

  const data = [
    {
      date: "01 Apr 2026",
      source: "Salary",
      amount: "₹25,000",
      status: "Completed",
    },
    {
      date: "03 Apr 2026",
      source: "Freelance",
      amount: "₹8,000",
      status: "Pending",
    },
    {
      date: "05 Apr 2026",
      source: "Bonus",
      amount: "₹5,000",
      status: "Completed",
    },
    {
      date: "07 Apr 2026",
      source: "Bonus",
      amount: "₹7,000",
      status: "Completed",
    },
    {
      date: "08 Apr 2026",
      source: "Bonus",
      amount: "₹15,000",
      status: "Completed",
    },
    {
      date: "10 Apr 2026",
      source: "Bonus",
      amount: "₹3,000",
      status: "Completed",
    },
    {
      date: "11 Apr 2026",
      source: "Bonus",
      amount: "₹7,000",
      status: "pending",
    },
    {
      date: "12 Apr 2026",
      source: "Bonus",
      amount: "₹7,000",
      status: "Completed",
    },
  ];

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-semibold">Income History</h2>
      <ReusableTable columns={columns} data={data} />
    </div>
  );
};

export default IncomeHistory;