import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function ReturnButton() {
  const navigate = useNavigate();
  return (
    <button
      className="mb-10 w-fit flex p-2 hover:text-blue-500"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      {<MdKeyboardBackspace className="size-7" />} بازگشت
    </button>
  );
}

export default ReturnButton;
