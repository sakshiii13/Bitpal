import React from "react";
import { Bell, Search, User, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserRouters } from "../../../constant/router";

const DashboardHeader = ({ role = "User", setIsSidebarOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="w-full min-h-[70px] bg-[#080b14] border-b border-white/10 flex items-center justify-between px-4 sm:px-6 py-3 relative overflow-hidden">
      <div className="absolute top-[-40px] left-[30%] w-[200px] h-[200px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center"
        >
          <Menu size={18} className="text-white" />
        </button>

        <div className="w-[2px] h-7 sm:h-8 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]"></div>

        <h2 className="text-base sm:text-xl font-semibold text-white">
          {role} Dashboard
        </h2>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 relative z-10">
        <div className="hidden md:flex items-center bg-white/5 border border-white/10 rounded-xl px-3 py-2 w-[220px] lg:w-[260px]">
          <Search size={18} className="text-white/50 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none text-sm text-white placeholder:text-white/40"
          />
        </div>

        <button className="relative w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 transition">
          <Bell size={18} className="text-white/70" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full"></span>
        </button>

        <div
          onClick={() => navigate(UserRouters.PROFILE)}
          className="flex items-center gap-2 sm:gap-3 bg-white/5 px-2 sm:px-3 py-2 rounded-xl hover:bg-white/10 transition cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <User size={18} className="text-cyan-400" />
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Sakshi</p>
            <p className="text-xs text-white/50">{role}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;