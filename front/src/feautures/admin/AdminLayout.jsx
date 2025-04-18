import React from "react";
import AppLayout from "../../pages/AppLayout";
import SidebarItems from "../../ui/sidebar/SidebarItems";
import {
  RiArticleLine,
  RiFolder2Line,
  RiHome9Line,
  RiUser4Line,
} from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";
import { BiCategoryAlt } from "react-icons/bi";

function AdminLayout() {
  return (
    <AppLayout>
      <SidebarItems
        label={
          <span className="flex">
            <RiHome9Line className="size-5 ml-1" /> خانه
          </span>
        }
        to="dashboard"
      />
      <SidebarItems
        label={
          <span className="flex">
            <HiOutlineUsers className="size-5 ml-1" /> کاربران
          </span>
        }
        to="users"
      />
      <SidebarItems
        label={
          <span className="flex">
            <RiFolder2Line className="size-5 ml-1" /> پروژه ها
          </span>
        }
        to="projects"
      />
      <SidebarItems
        label={
          <span className="flex">
            <RiArticleLine className="size-5 ml-1" /> درخواست ها
          </span>
        }
        to="proposals"
      />
      <SidebarItems
        label={
          <span className="flex">
            <BiCategoryAlt className="size-5 ml-1" /> دسته بندی ها
          </span>
        }
        to="categories"
      />
      <SidebarItems
        label={
          <span className="flex">
            <RiUser4Line className="size-5 ml-1" /> پروفایل
          </span>
        }
        to="profile"
      />
    </AppLayout>
  );
}

export default AdminLayout;
