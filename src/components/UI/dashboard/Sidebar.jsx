import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { sidebarMenu } from "../../../constant/sidebarMenu";

const Sidebar = ({
  role = "User",
  isOpen,
  setIsOpen,
  isCollapsed,
  setIsCollapsed,
}) => {
  const menuItems = sidebarMenu[role] || [];

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen border-r border-white/10 text-white
          bg-[#080b14] overflow-hidden shrink-0 transition-all duration-300 ease-in-out
          w-[260px] transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
          ${isCollapsed ? "lg:w-[80px]" : "lg:w-[250px]"}
        `}
      >
        <div className="absolute top-[-80px] left-[-80px] w-[180px] h-[180px] bg-cyan-500/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-60px] w-[200px] h-[200px] bg-lime-400/10 blur-[120px] rounded-full"></div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="px-3 py-5 border-b border-white/10 flex items-center justify-between min-h-[72px]">
            {!isCollapsed ? (
              <h1 className="text-2xl font-semibold tracking-wide whitespace-nowrap">
                <span className="text-white">Bit</span>
                <span className="text-lime-400 italic">Pal</span>
              </h1>
            ) : (
              <h1 className="hidden lg:block text-2xl font-semibold tracking-wide mx-auto">
                <span className="text-white">B</span>
              </h1>
            )}

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className={`hidden lg:flex w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 items-center justify-center transition ${
                  isCollapsed ? "absolute top-5 right-3" : ""
                }`}
              >
                {isCollapsed ? (
                  <ChevronRight size={18} className="text-white" />
                ) : (
                  <ChevronLeft size={18} className="text-white" />
                )}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
          </div>

          <div className="px-3 py-6 flex-1 overflow-y-auto">
            {!isCollapsed && (
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-4 px-3">
                Main Menu
              </p>
            )}

            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={index}
                    to={item.path}
                    title={isCollapsed ? item.title : ""}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `group flex items-center ${
                        isCollapsed ? "lg:justify-center" : "gap-3"
                      } px-3 py-3 rounded-2xl border transition-all duration-300 ${
                        isActive
                          ? "bg-white/10 border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                          : "border-transparent hover:bg-white/5 hover:border-white/10"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-cyan-500/10 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                              : "bg-white/5 group-hover:bg-white/10"
                          }`}
                        >
                          <Icon
                            size={22}
                            className={`transition-all duration-300 ${
                              isActive
                                ? "text-cyan-400"
                                : "text-white/70 group-hover:text-white"
                            }`}
                          />
                        </div>

                        {!isCollapsed && (
                          <span
                            className={`text-[15px] font-medium transition-all duration-300 truncate ${
                              isActive
                                ? "text-white"
                                : "text-white/70 group-hover:text-white"
                            }`}
                          >
                            {item.title}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;