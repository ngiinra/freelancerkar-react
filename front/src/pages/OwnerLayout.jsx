import React from "react";
import AppLayout from "./AppLayout";
import Sidebar from "../feautures/auth/Sidebar";
import SidebarItems from "../ui/sidebar/SidebarItems";
import {
  RiFileAddLine,
  RiFolder2Line,
  RiHome9Line,
  RiUser4Line,
} from "react-icons/ri";

function OwnerLayout() {
  return (
    <AppLayout>
      <SidebarItems
        to="/owner/dashboard"
        label={
          <span className="flex">
            <RiHome9Line className="size-5 ml-1" /> خانه
          </span>
        }
      />
      <SidebarItems
        to="/owner/projects"
        label={
          <span className="flex">
            <RiFolder2Line className="size-5 ml-1" /> پروژه های من
          </span>
        }
      />
      <SidebarItems
        to="/owner/projects/add"
        label={
          <span className="flex">
            <RiFileAddLine className="size-5 ml-1" /> افزودن پروژه
          </span>
        }
      />
      <SidebarItems
        to="/owner/profile"
        label={
          <span className="flex">
            <RiUser4Line className="size-5 ml-1" /> پروفایل کاربری
          </span>
        }
      />
    </AppLayout>
  );
}

export default OwnerLayout;
