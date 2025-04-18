import AppLayout from "./AppLayout";
import SidebarItems from "../ui/sidebar/SidebarItems";
import {
  RiArticleLine,
  RiFolder3Line,
  RiHome9Line,
  RiUser4Line,
} from "react-icons/ri";

export default function FreelancerLayout() {
  return (
    <AppLayout>
      <SidebarItems
        to="/freelancer/dashboard"
        label={
          <span className="flex">
            <RiHome9Line className="size-5 ml-1" /> خانه
          </span>
        }
      />
      <SidebarItems
        to="/freelancer/proposals"
        label={
          <span className="flex">
            <RiArticleLine className="size-5 ml-1" /> درخواست های من
          </span>
        }
      />
      <SidebarItems
        to="/freelancer/project-list"
        label={
          <span className="flex">
            <RiFolder3Line className="size-5 ml-1" /> پروژه ها
          </span>
        }
      />
      <SidebarItems
        to="profile"
        label={
          <span className="flex">
            <RiUser4Line className="size-5 ml-1" /> پروفایل
          </span>
        }
      />
    </AppLayout>
  );
}
