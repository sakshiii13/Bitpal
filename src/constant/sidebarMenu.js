import { MdDashboard } from "react-icons/md";
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
      icon: MdDashboard,
    },
    {
      title: "Settings",
      path: UserRouters.SETTINGS,
      icon: MdDashboard,
    },
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
      icon: MdDashboard,
    },
    {
      title: "Projects",
      path: AdminRouters.PROJECTS,
      icon: MdDashboard,
    },
    {
      title: "Settings",
      path: AdminRouters.SETTINGS,
      icon: MdDashboard,
    },
  ],
};
