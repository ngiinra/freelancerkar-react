import React from "react";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "../../utils/toPersianNumbers";
import StatItem, { StatList } from "../../ui/StatItem";
import {
  MdOutlineCheckCircleOutline,
  MdOutlineDoNotDisturbOn,
  MdOutlineSupervisedUserCircle,
} from "react-icons/md";
import { RiLoader2Fill, RiMoneyDollarCircleLine } from "react-icons/ri";

export default function FreelancerStats({ proposals }) {
  const numOfAllPropos = proposals.length;
  const numOfAwaitedPropos = proposals.filter((p) => p.status === 1).length;
  const numOfNotAcceptedPropos = proposals.filter((p) => p.status === 0).length;
  const numOfAcceptedPropos =
    numOfAllPropos - numOfAwaitedPropos - numOfNotAcceptedPropos;
  const allFond = proposals
    .filter((p) => p.status === 2)
    .reduce((pre, cur) => cur.price + pre, 0);
  return (
    <StatList>
      <StatItem
        icon={
          <MdOutlineSupervisedUserCircle className="size-20 text-sky-500" />
        }
        label="کلیه درخواست ها"
        value={toPersianNumbers(numOfAllPropos)}
      />
      <StatItem
        icon={
          <MdOutlineCheckCircleOutline className="size-20 text-green-500" />
        }
        label="درخواستهای تاییدشده"
        value={toPersianNumbers(numOfAcceptedPropos)}
      />
      <StatItem
        icon={<MdOutlineDoNotDisturbOn className="size-20 text-red-500" />}
        label="درخواستهای تاییدنشده"
        value={toPersianNumbers(numOfNotAcceptedPropos)}
      />
      <StatItem
        icon={<RiLoader2Fill className="size-20 text-stone-500" />}
        label="درخواستهای در انتظار"
        value={toPersianNumbers(numOfAwaitedPropos)}
      />
      <StatItem
        icon={<RiMoneyDollarCircleLine className="size-20 text-lime-500" />}
        label="درآمد کلی"
        value={toPersianNumbersWithComma(allFond)}
      />
    </StatList>
  );
}
