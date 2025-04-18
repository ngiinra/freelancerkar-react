import { MdDoNotDisturb } from "react-icons/md";
import { RiCheckboxCircleFill } from "react-icons/ri";

export function UserCardRadioInput({
  label,
  value,
  color,
  uniqueIdForName,
  handleChangeStatus,
  defaultChecked,
  user,
}) {
  return (
    <label className="flex items-center gap-x-1">
      <input
        type="radio"
        name={uniqueIdForName}
        value={value}
        className={`size-5 ${color}`}
        onClick={(e) => handleChangeStatus(user._id, e.target.value)}
        defaultChecked={defaultChecked}
      />
      {label}
    </label>
  );
}

export function UserCardInfo({ user }) {
  return (
    <div className="user-card-info">
      <h3 className="text-xl mb-8 font-light">نام : {user.name || "-"}</h3>
      <p>شماره موبایل : {user.phoneNumber}</p>
      <p>
        {user.isVerifiedPhoneNumber ? (
          <span className="flex gap-x-2">
            <RiCheckboxCircleFill className="text-green-500 size-5" />
            شماره موبایل تایید شده است
          </span>
        ) : (
          <span className="flex gap-x-2">
            <MdDoNotDisturb className="text-red-500 size-5" />
            شماره موبایل تایید نشده
          </span>
        )}
      </p>
    </div>
  );
}
