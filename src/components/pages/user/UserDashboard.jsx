import React from "react";
import { CiExport } from "react-icons/ci";
import Cards from "./dashboardhome/Cards";
import Performance from "./dashboardhome/Performance";
import ProjectsList from "./dashboardhome/ProjectsList";
import RecentActivity from "./dashboardhome/RecentActivity";
import FinanceOverview from "./dashboardhome/FinanceOverview";

const UserDashboard = () => {
  return (
    <div className="relative min-h-screen bg-[#05050d] p-4 text-white sm:p-6 overflow-hidden">
      
      {/* background glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-lime-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Welcome Back <span className="text-lime-400">Sakshi</span> 👋
            </h1>
            <div className="hidden sm:block w-[2px] h-6 bg-lime-400 shadow-[0_0_10px_rgba(163,230,53,0.8)]"></div>
          </div>

          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* Button */}
        <button className="w-full sm:w-auto h-11 px-5 rounded-2xl border border-lime-300/20 bg-lime-400 text-black font-semibold flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(163,230,53,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-lime-300">
          <CiExport className="text-lg" />
          Export
        </button>
      </div>

      {/* Cards */}
      <div className="relative z-10">
        <Cards />
      </div>

      {/* Main Grid */}
      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          <ProjectsList />
          <RecentActivity />
        </div>

        <div className="xl:col-span-1 flex flex-col gap-6">
          <Performance />
          <FinanceOverview />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;