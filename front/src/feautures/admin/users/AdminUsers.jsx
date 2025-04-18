import React, { useState } from "react";
import UsersList from "./UsersList";
import AcceptUsers from "./AcceptUsers";
import { FaUserCheck } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Loader from "../../../ui/Loader";
import useGetUsersList from "../useGetUsersList";

function AdminUsers() {
  const [content, setContent] = useState(1);
  const { isPending, data } = useGetUsersList();
  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-x-10 mb-10 relative border-b-1 base-border">
        <button
          className={`py-4 px-10 flex items-center gap-x-1 ${
            content === 1 ? "opacity-100 text-blue-600" : "opacity-50"
          }`}
          onClick={() => setContent(1)}
        >
          <FaUserCheck className="size-5" /> تایید کاربران
        </button>
        <button
          className={`py-4 px-10 flex items-center gap-x-1 ${
            content === 2 ? "opacity-100 text-blue-600" : "opacity-50"
          }`}
          onClick={() => setContent(2)}
        >
          <HiUsers className="size-5" /> لیست کاربران
        </button>

        {/* خط زیر دکمه */}
        <span
          className={`absolute bottom-0 h-1 bg-blue-500 rounded-lg transition-all duration-300 ease-in-out ${
            content === 2
              ? "left-[calc(50%-12rem)] w-[130px]"
              : "left-[calc(50%+2.5rem)] w-[130px]"
          }`}
        />
      </div>

      <div className="w-full">
        {isPending ? (
          <Loader size="15px" color="blue" />
        ) : content === 2 ? (
          <UsersList users={data?.data?.users} />
        ) : (
          <AcceptUsers users={data?.data?.users} />
        )}
      </div>
    </div>
  );
}

export default AdminUsers;
