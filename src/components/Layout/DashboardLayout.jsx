import React, { useState, useEffect } from "react";
import Sidebar from "../UI/dashboard/Sidebar";
import DashboardHeader from "../UI/dashboard/DashboardHeader";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen bg-[#05050d] overflow-hidden">
      <Sidebar
        role="User"
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
      />

      <div className="flex flex-col flex-1 min-w-0 w-full">
        <div className="sticky top-0 z-30">
          <DashboardHeader
            role="User"
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </div>

        <main className="flex-1 overflow-y-auto px-3 py-3 sm:px-4 sm:py-4 lg:px-6 lg:py-5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;