import { useState } from "react";
import { StatusButtonGroup } from "../../../ui/Fields";
import Loader from "../../../ui/Loader";
import useUserChangeStatus from "./useUserChangeStatus";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";

export default function UserRow({ user, index }) {
  const { mutate, isPending } = useUserChangeStatus();
  const [status, setStatus] = useState(user.status);
  return (
    <tr>
      <td>{toPersianNumbers(++index)}</td>
      <td>{user.name || ""}</td>
      <td>{toPersianNumbers(user.phoneNumber)}</td>
      <td>{user.isVerifiedPhoneNumber === true ? "بله" : "خیر"}</td>
      <td>{user.email || ""}</td>
      <td>{user.role || ""}</td>
      <td>
        {isPending ? (
          <Loader color="blue" />
        ) : (
          <StatusButtonGroup
            buttons={[
              { value: 0, label: "رد شده", color: "red" },
              { value: 1, label: "در انتظار", color: "stone" },
              { value: 2, label: "تایید شده", color: "green" },
            ]}
            mutateFn={mutate}
            mutateResourceId={user._id}
            setStatusState={setStatus}
            statusState={status}
          />
        )}
      </td>
    </tr>
  );
}
