import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Sidebar from "../feautures/auth/Sidebar";
import useMobileSidebar from "../context/MobileSidebarContext";

function AppLayout({ children }) {
  const { isMobileSidebarOpen } = useMobileSidebar();
  return (
    <div className="h-screen md:grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar>{children}</Sidebar>
      <div
        className={`bg-stone-100 dark:bg-slate-800 p-8 overflow-y-auto ${
          isMobileSidebarOpen ? "contrast-50 blur-xs" : ""
        }`}
      >
        <div className="mx-auto max-w-screen-lg">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
