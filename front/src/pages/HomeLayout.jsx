import React from "react";
import { Outlet } from "react-router-dom";
import HomeHeader from "../feautures/home/HomeHeader";
import HomeMobileSidebar from "../feautures/home/HomeMobileSidebar";

function HomeLayout() {
  return (
    <div className="h-screen base-color-100">
      <HomeHeader />
      <HomeMobileSidebar />
      <div className="bg-[url(public/bbblurry.svg)] bg-cover h-full">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
