import React from "react";
import useUserData from "../feautures/auth/useUserData";
import { RiMenuLine, RiUser5Line } from "react-icons/ri";
import useMobileSidebar from "../context/MobileSidebarContext";

function Header() {
  const { data, isPending } = useUserData();
  const { setMobileSideBarOpen } = useMobileSidebar();
  return (
    <div className="p-3 flex justify-between items-center">
      <button
        className="block md:hidden active:rotate-90 transition-all duration-300 items-center"
        onClick={() => setMobileSideBarOpen((pre) => !pre)}
      >
        <RiMenuLine className="size-8 m-1" />
      </button>
      <div
        className={`${
          !isPending && data?.data?.user?.name ? "" : "blur-sm"
        } flex items-center justify-start`}
      >
        <RiUser5Line className="size-8 m-1 text-blue-500" />

        <span>{data?.data?.user?.name}</span>
      </div>
    </div>
  );
}

export default Header;
