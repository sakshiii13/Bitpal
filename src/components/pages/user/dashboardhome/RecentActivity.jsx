import React from "react";
import { CheckCircle, Bell, FolderPlus, CreditCard } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Task completed",
    desc: "Homepage design task has been completed.",
    time: "2 min ago",
    icon: <CheckCircle size={18} />,
  },
  {
    id: 2,
    title: "New notification",
    desc: "You have 3 new task updates.",
    time: "10 min ago",
    icon: <Bell size={18} />,
  },
  {
    id: 3,
    title: "Project added",
    desc: "Fintech Project has been created.",
    time: "1 hour ago",
    icon: <FolderPlus size={18} />,
  },
  {
    id: 4,
    title: "Payment received",
    desc: "Subscription payment received successfully.",
    time: "3 hours ago",
    icon: <CreditCard size={18} />,
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-[#11131a] border border-white/10 rounded-2xl p-4 sm:p-6 mt-6">
      <h3 className="text-white text-lg font-semibold mb-5">Recent Activity</h3>

      <div className="space-y-4">
        {activities.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.05] transition"
          >
            <div className="w-10 h-10 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            <div className="flex-1">
              <h4 className="text-white font-medium">{item.title}</h4>
              <p className="text-sm text-white/50 mt-1">{item.desc}</p>
            </div>

            <span className="text-xs text-white/40 whitespace-nowrap">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;