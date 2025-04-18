import React from "react";
import useReturnBack from "../hooks/useReturnBack";

function NotFound() {
  const returnBack = useReturnBack();
  return (
    <div className="flex flex-col min-h-screen justify-center items-center text-center mx-center">
      <p>صفحه مورد نظر یافت نشد :(</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          returnBack();
        }}
        className="px-4 py-1 my-1 text-sm border-1 border-stone-300 rounded-md hover:bg-stone-300 hover:transition-all hover:duration-300"
      >
        بازگشت به قبل
      </button>
    </div>
  );
}

export default NotFound;
