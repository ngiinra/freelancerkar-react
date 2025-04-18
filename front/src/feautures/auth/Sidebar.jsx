import useIsMobileSize from "../../hooks/useIsMobileSize";
import useOutsideClick from "../../hooks/useOutsideClick";
import ToggleDarkMode from "../../ui/ToggleDarkMode";
import Logout from "../owner/Logout";
import { RiCloseLine } from "react-icons/ri";
import useMobileSidebar from "../../context/MobileSidebarContext";

export default function Sidebar({ children }) {
  const isMobile = useIsMobileSize();

  return (
    <div className="row-start-1 row-span-2 md:h-full border-l-1 base-border">
      {isMobile ? (
        <MobileSidebar>
          <SidebarContent>{children}</SidebarContent>
        </MobileSidebar>
      ) : (
        <SidebarContent>{children}</SidebarContent>
      )}
    </div>
  );
}

export function MobileSidebar({ children }) {
  const { isMobileSidebarOpen, setMobileSideBarOpen } = useMobileSidebar();
  const ref = useOutsideClick(setMobileSideBarOpen, isMobileSidebarOpen);
  return (
    <div
      ref={ref}
      className={`fixed border-l-1 base-border transition-opacity duration-400 h-full ${
        isMobileSidebarOpen
          ? "visible w-60 z-10 base-color top-0 right-0 opacity-100"
          : "invisible  w-60 z-10 base-color top-0 right-0  opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function SidebarContent({ children }) {
  const { setMobileSideBarOpen } = useMobileSidebar();
  return (
    <div className="flex flex-col gap-y-5 py-3 px-6 mt-5">
      <div className="flex gap-x-2 base-border border-b-1 pb-3 relative items-center">
        <ToggleDarkMode />
        <Logout />
        <button
          className="block md:hidden absolute top-2 left-2"
          onClick={() => setMobileSideBarOpen(false)}
        >
          <RiCloseLine className="size-7 text-red-500" />
        </button>
      </div>
      {children}
    </div>
  );
}
