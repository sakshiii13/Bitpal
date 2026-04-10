import React from "react";
import { TrendingUp } from "lucide-react";

const Performance = () => {
  return (
    <div className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-5 h-full">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-white text-lg font-semibold">Performance</h3>
        <span className="text-xs text-white/40">This Week</span>
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 rounded-full border-[8px] border-lime-400 border-t-lime-400 border-r-white/10 border-b-white/10 flex items-center justify-center shadow-[0_0_25px_rgba(163,230,53,0.15)]">
          <div className="text-center">
            <h2 className="text-white text-2xl font-bold">85%</h2>
            <p className="text-[10px] text-white/50">Completed</p>
          </div>
        </div>
      </div>

      <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
        <p className="text-sm text-white/50">Productivity</p>
        <p className="text-lime-400 text-sm mt-2 flex items-center gap-1">
          <TrendingUp size={15} />
          +12% than last week
        </p>
      </div>
    </div>
  );
};

export default Performance;