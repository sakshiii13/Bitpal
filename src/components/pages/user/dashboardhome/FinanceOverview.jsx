import React from "react";
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react";

const financeData = [
  {
    id: 1,
    label: "Total Balance",
    value: "$24,500",
    change: "+8.2%",
    icon: <Wallet size={18} />,
    type: "up",
  },
  {
    id: 2,
    label: "Income",
    value: "$12,200",
    change: "+4.1%",
    icon: <ArrowUpRight size={18} />,
    type: "up",
  },
  {
    id: 3,
    label: "Expenses",
    value: "$4,870",
    change: "-2.3%",
    icon: <ArrowDownRight size={18} />,
    type: "down",
  },
];

const FinanceOverview = () => {
  return (
    <div className="bg-[#11131a] border border-white/10 rounded-2xl p-4 sm:p-6 mt-6">
      <h3 className="text-white text-lg font-semibold mb-5">Finance Overview</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {financeData.map((item) => (
          <div
            key={item.id}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="text-white/50 text-sm">{item.label}</p>
              <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/70">
                {item.icon}
              </div>
            </div>

            <h4 className="text-2xl font-semibold text-white">{item.value}</h4>

            <p
              className={`text-sm mt-2 ${
                item.type === "up" ? "text-lime-400" : "text-red-400"
              }`}
            >
              {item.change} this month
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinanceOverview;