import { MdDashboard, MdPerson, MdSettings } from "react-icons/md";
import { AdminRouters, UserRouters } from "./router";

export const sidebarMenu = {
  User: [
    {
      title: "Dashboard",
      path: UserRouters.DASHBOARD,
      icon: MdDashboard,
    },
    {
      title: "Profile",
      path: UserRouters.PROFILE,
      icon: MdPerson,      
    },
    {
      title: "Settings",
      path: UserRouters.SETTINGS,
      icon: MdSettings,    
    },
  {
      title: "Income History",
      path: UserRouters.INCOME_HISTORY,
      icon: MdSettings,
  }
  ],

  Admin: [
    {
      title: "Dashboard",
      path: AdminRouters.DASHBOARD,
      icon: MdDashboard,
    },
    {
      title: "Users",
      path: AdminRouters.USERS,
      icon: MdPerson,
    },
    {
      title: "Projects",
      path: AdminRouters.PROJECTS,
      icon: MdDashboard,
    },
    {
      title: "Settings",
      path: AdminRouters.SETTINGS,
      icon: MdSettings,
    },
  ],
};