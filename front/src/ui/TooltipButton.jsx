import React, { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

export default function TooltipButton({
  buttonClasses = "",
  buttonText = "",
  children,
  direction = "up",
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const ref = useOutsideClick(setShowTooltip, showTooltip);
  return (
    <div
      className="relative"
      ref={ref}
      onClick={() => setShowTooltip(!showTooltip)}
    >
      {/* محتوای اصلی (Child Component) */}
      <button className={buttonClasses} type="button">
        {buttonText}
      </button>
      {/* تولتیپ */}
      <div
        className={`tooltip ${showTooltip ? "visible " : "hidden"} ${
          direction === "up" ? "bottom-full" : "top-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
