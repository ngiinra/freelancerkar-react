import React from "react";
import useGetProposalsList from "../project/useGetProposalsList";
import StatItem, { StatList } from "../../ui/StatItem";
import { toPersianNumbersWithComma } from "../../utils/toPersianNumbers";
import { HiOutlineUsers } from "react-icons/hi";
import { RiArticleLine, RiFolder2Line } from "react-icons/ri";

function AdminStats({ proposals, users, projects }) {
  const numOfAllPropos = proposals.length;
  const numOfAllUsers = users.length;
  return (
    <StatList>
      <StatItem
        icon={<HiOutlineUsers className="size-20 text-green-500" />}
        label="کاربران"
        value={toPersianNumbersWithComma(numOfAllUsers)}
      />
      <StatItem
        icon={<RiFolder2Line className="size-20 text-purple-500" />}
        label="پروژه ها"
        value={toPersianNumbersWithComma(numOfAllUsers)}
      />
      <StatItem
        icon={<RiArticleLine className="size-20 text-yellow-500" />}
        label="درخواست ها"
        value={toPersianNumbersWithComma(numOfAllPropos)}
      />
    </StatList>
  );
}

export default AdminStats;
