import { StatusButtonGroup } from "../../ui/Fields";
import truncateText from "../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import Loader from "../../ui/Loader";
import { useState } from "react";
import useChangeProposalStatus from "./useChangeProposalStatus";
const STATUS = [
  {
    label: "رد شده",
    className: "badge bg-red-500 w-full text-center",
  },
  {
    label: "در انتظار تایید",
    className: "badge bg-stone-400 w-full text-center",
  },
  {
    label: "تایید شده",
    className: "badge bg-green-500 w-full text-center",
  },
];
export default function ShowProposalRow({
  proposal,
  index,
  mode = "FREELANCER",
}) {
  const { mutate, isPending } = useChangeProposalStatus();
  const [statusState, setStatusState] = useState(proposal.status);

  if (mode === "FREELANCER")
    return (
      <tr key={proposal._id}>
        <td>{toPersianNumbers(index)}</td>
        <td>{toPersianNumbers(proposal.duration)}</td>
        <td>{toPersianNumbersWithComma(proposal.price)}</td>
        <td>{truncateText(proposal.description, 30)}</td>
        <td>
          <span className={STATUS[proposal.status].className}>
            {STATUS[proposal.status].label}
          </span>
        </td>
      </tr>
    );
  else if (mode === "OWNER")
    return (
      <tr key={proposal._id}>
        <td>{toPersianNumbers(index)}</td>
        <td>{proposal.user?.name}</td>
        <td>{toPersianNumbers(proposal.duration)}</td>
        <td>{toPersianNumbersWithComma(proposal.price)}</td>
        <td>{truncateText(proposal.description, 30)}</td>
        <td>
          {isPending ? (
            <Loader color="blue" />
          ) : (
            <StatusButtonGroup
              buttons={[
                { value: 2, label: "تایید", color: "green" },
                { value: 1, label: "در انتظار", color: "secondary" },
                { value: 0, label: "رد", color: "red" },
              ]}
              mutateFn={mutate}
              mutateResourceId={proposal._id}
              setStatusState={setStatusState}
              statusState={statusState}
            />
          )}
        </td>
      </tr>
    );
}
