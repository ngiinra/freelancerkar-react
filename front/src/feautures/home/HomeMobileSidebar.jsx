import useMobileSidebar from "../../context/MobileSidebarContext";
import { MobileSidebar } from "../auth/Sidebar";
import { HeaderItemsContent } from "./HomeHeader";

export default function HomeMobileSidebar() {
  const { setMobileSideBarOpen } = useMobileSidebar();
  return (
    <MobileSidebar>
      <HeaderItemsContent />
    </MobileSidebar>
  );
}
