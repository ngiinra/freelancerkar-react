import { createContext, useContext, useState } from "react";

const MobileSidebarContext = createContext();
export function MobileSidebarContextProvider({ children }) {
  const [isMobileSidebarOpen, setMobileSideBarOpen] = useState(false);
  return (
    <MobileSidebarContext.Provider
      value={{ isMobileSidebarOpen, setMobileSideBarOpen }}
    >
      {children}
    </MobileSidebarContext.Provider>
  );
}

export default function useMobileSidebar() {
  if (!MobileSidebarContext)
    throw Error("از موبایل سایدبار کانتکس خارج از پروایدر استفاده شده");
  return useContext(MobileSidebarContext);
}
