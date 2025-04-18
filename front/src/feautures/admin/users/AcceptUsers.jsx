import React, { useEffect, useState } from "react";
import useUserChangeStatus from "./useUserChangeStatus";
import Loader from "../../../ui/Loader";
import TooltipButton from "../../../ui/TooltipButton";
import AreYouSure from "../../../ui/AreYouSure";
import { UserCardInfo, UserCardRadioInput } from "./UserCardItems";

export default function AcceptUsers({ users }) {
  users = users.filter((user) => user.status === 1);
  const { isPending, mutate } = useUserChangeStatus();
  const [statuses, setStatuses] = useState([]); // [{id:-, status:-},...]
  useEffect(() => {
    let usersStatus = [];
    users.map((user) =>
      usersStatus.push({ id: user._id, status: user.status })
    );
    setStatuses(usersStatus);
  }, []);

  function handleChangeStatus(id, newStatus) {
    setStatuses((pre) =>
      pre.map((user) => {
        if (user.id === id) {
          return { id, status: Number(newStatus) };
        } else return user;
      })
    );
  }

  function changeUsersStatus(e) {
    e.preventDefault();
    const changedUsers = statuses.filter((item) => item.status !== 1);
    console.log(changedUsers);
    changedUsers.map((user) =>
      mutate({ _id: user.id, data: { status: user.status } })
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {users.map((user) => (
          <div key={user._id} className="user-card base-border">
            <UserCardInfo user={user} />
            <div
              className={`lg:w-1/2 flex items-center lg:justify-center gap-x-5 font-medium rounded-b-2xl lg:rounded-br-none lg:rounded-l-2xl p-4 ${
                statuses?.filter((s) => s.id === user._id)[0]?.status === 0
                  ? "bg-red-500"
                  : statuses?.filter((s) => s.id === user._id)[0]?.status === 2
                  ? "bg-green-500"
                  : ""
              }`}
            >
              {STATUS.map((s) => (
                <UserCardRadioInput
                  key={s.value}
                  uniqueIdForName={`status ${user._id}`}
                  label={s.label}
                  value={s.value}
                  color={s.color}
                  handleChangeStatus={handleChangeStatus}
                  defaultChecked={s.defaultChecked}
                  user={user}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full md:w-1/2 float-left">
        <TooltipButton
          buttonClasses="btn py-3 my-4"
          direction="up"
          buttonText={
            isPending ? (
              <span>
                <Loader /> لطفا منتظر بمانید
              </span>
            ) : (
              "ثبت"
            )
          }
        >
          <AreYouSure handleClickYes={(e) => changeUsersStatus(e)} />
        </TooltipButton>
      </div>
    </div>
  );
}

const STATUS = [
  { label: "رد", color: "accent-red-500", value: 0, defaultChecked: false },
  {
    label: "در انتظار",
    color: "accent-stone-500",
    value: 1,
    defaultChecked: true,
  },
  {
    label: "تایید",
    color: "accent-green-500",
    value: 2,
    defaultChecked: false,
  },
];
