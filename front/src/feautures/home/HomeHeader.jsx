import React from "react";
import { RiCloseLine, RiMenuLine, RiUser4Line } from "react-icons/ri";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router-dom";
import ToggleDarkMode from "../../ui/ToggleDarkMode";
import useIsMobileSize from "../../hooks/useIsMobileSize";
import useMobileSidebar from "../../context/MobileSidebarContext";

function HomeHeader() {
  const isMobile = useIsMobileSize();
  const { setMobileSideBarOpen } = useMobileSidebar();
  return (
    <div className="base-color">
      <header className="flex p-2 mx-5 border-b-1 base-border items-center gap-x-10">
        {isMobile ? (
          <button
            className="block md:hidden active:rotate-90 transition-all duration-300 items-center"
            onClick={() => setMobileSideBarOpen((pre) => !pre)}
          >
            <RiMenuLine className="size-8 m-1" />
          </button>
        ) : (
          <HeaderItemsContent />
        )}
        <div className=" mr-auto flex items-center">
          <ToggleDarkMode />
          <HomeItem
            text={
              <p className="text-xl text-blue-500 font-light border-r-1 base-border pr-2">
                فریلنسرکار
              </p>
            }
            to="/"
          />
        </div>
      </header>
    </div>
  );
}

export default HomeHeader;

function HomeItem({ text, to }) {
  return (
    <Link
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-x-2 ${
          isActive ? "active-navlink-style" : "navlink-style"
        } `
      }
    >
      {text}
    </Link>
  );
}

export function HeaderItemsContent() {
  const { isAuth, user } = useAuth();
  const isMobile = useIsMobileSize();
  const { setMobileSideBarOpen } = useMobileSidebar();
  return (
    <div className="flex flex-col md:flex-row gap-8 pt-10 p-6 md:p-0">
      {isMobile ? (
        <button
          className="block md:hidden absolute top-2 left-2"
          onClick={() => setMobileSideBarOpen(false)}
        >
          <RiCloseLine className="size-7 text-red-500" />
        </button>
      ) : null}
      {!isAuth ? (
        <HomeItem
          to="auth"
          text={
            <span className="flex gap-x-2">
              <RiUser4Line className="size-5" />
              ورود/ثبت نام
            </span>
          }
        />
      ) : (
        <HomeItem
          to={user.role.toLowerCase()}
          text={
            <span className="flex gap-x-2">
              <RiUser4Line className="size-5" />
              داشبورد
            </span>
          }
        />
      )}
      <HomeItem text="درباره ما" to="/#about-us" />
      <HomeItem text="تماس با ما" to="/#contact-us" />
    </div>
  );
}
