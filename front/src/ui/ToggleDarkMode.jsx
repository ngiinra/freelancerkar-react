import React from "react";
import { useDarkMode } from "../context/DarkThemeContext";
import SidebarHeaderItem from "./sidebar/SidebarHeaderItem";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

function ToggleDarkMode() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <SidebarHeaderItem>
      <button
        onClick={(e) => {
          e.preventDefault();
          toggleDarkMode();
        }}
      >
        <p className=" text-lg">
          {darkMode ? (
            <RiSunFill className="size-8 text-amber-400 drop-shadow-[0_2px_1px_var(--color-amber-400)]" />
          ) : (
            <RiMoonFill className="size-8 text-amber-400 drop-shadow-[0_2px_5px_var(--color-amber-400)]" />
          )}
        </p>
      </button>
    </SidebarHeaderItem>
  );
}

export default ToggleDarkMode;
