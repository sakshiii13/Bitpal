import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { sidebarMenu } from "../../../constant/sidebarMenu";
import {
  FaBars,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaChevronDown,
} from "react-icons/fa";

const Sidebar = ({ role = "User" }) => {
  const [collapse, setCollapse] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // ✅ Normalize role (user -> User, ADMIN -> Admin)
  const normalizedRole =
    role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();

  // ✅ Get menu list based on role
  const menuList = sidebarMenu[normalizedRole] || [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && !mobileOpen && (
        <button
          onClick={() => setMobileOpen(true)}
          className="fixed left-3 top-6 !z-[999999] bg-yellow-500 text-white border shadow-lg p-2 rounded-xl"
        >
          <FaBars size={18} />
        </button>
      )}

      {/* Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[100]"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-white border-r border-yellow-100
          transition-all duration-300
          ${isMobile ? "fixed z-[999] h-screen top-0 left-0" : "h-full"}
          ${isMobile && !mobileOpen ? "-translate-x-full" : "translate-x-0"}
        `}
        style={{ width: !isMobile && collapse ? "76px" : "260px" }}
      >
        {/* Header */}
        <div
          className={`flex items-center p-4 border-b border-yellow-100
          ${collapse && !isMobile ? "justify-center" : "justify-between"}`}
        >
          {!collapse && (
            <h1 className="text-xl font-bold text-center ml-4 font-[Playfair_Display] text-yellow-600">
              Dashboard
            </h1>
          )}

          {!isMobile && (
            <button
              onClick={() => setCollapse(!collapse)}
              className="text-gray-400 hover:text-yellow-600 transition"
            >
              {collapse ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
            </button>
          )}
        </div>

        {/* Mobile Close Button */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen(false)}
            className="absolute top-4 right-4 z-50 bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
          >
            ✕
          </button>
        )}

        {/* Menu */}
        <nav className="p-3 space-y-1 h-[calc(100vh-70px)] overflow-y-auto">
          {menuList.map((item) => {
            const Icon = item.icon;

            // 🔽 Parent Menu with children
            if (item.children) {
              return (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.title ? null : item.title)
                    }
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-md
                    text-gray-700 hover:bg-yellow-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-yellow-600" />
                      {!collapse && <span>{item.title}</span>}
                    </div>

                    {!collapse && (
                      <FaChevronDown
                        size={12}
                        className={`transition ${
                          openMenu === item.title ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {!collapse &&
                    openMenu === item.title &&
                    item.children.map((child) => (
                      <NavLink
                        key={child.title}
                        to={child.path}
                        className={({ isActive }) =>
                          `ml-10 mt-1 block px-3 py-2 text-sm rounded-lg transition
                          ${
                            isActive
                              ? "bg-yellow-100 text-yellow-700 font-medium"
                              : "text-gray-600 hover:text-yellow-700 hover:bg-yellow-50"
                          }`
                        }
                      >
                        {child.title}
                      </NavLink>
                    ))}
                </div>
              );
            }

            // 🔹 Normal Menu Item
            return (
              <NavLink
                key={item.title}
                to={item.path}
                onClick={() => isMobile && setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-md transition
                  ${collapse && !isMobile ? "justify-center" : ""}
                  ${
                    isActive
                      ? "bg-yellow-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-yellow-50"
                  }`
                }
              >
                <Icon size={18} className={isMobile ? "" : "shrink-0"} />
                {!collapse && <span>{item.title}</span>}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;