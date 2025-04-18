import React from "react";
import { toPersianNumbers } from "../../../utils/toPersianNumbers";
import StatItem, { StatList } from "../../../ui/StatItem";

import {
  RiFolder2Line,
  RiFolderCloseLine,
  RiFolderOpenLine,
  RiProgress3Line,
} from "react-icons/ri";
export default function OwnerStats({ projects }) {
  const numOfAllProjects = projects.length;
  const numOfOpenProjects = projects.filter((p) => p.status === "OPEN").length;
  const numOfClosedProjects = numOfAllProjects - numOfOpenProjects;
  const numOfAcceptedProjects = projects.filter(
    (p) => p.freelancer !== null
  ).length;
  const numOfAllProposals = projects.reduce(
    (pre, cur) => cur.proposals.length + pre,
    0
  );
  return (
    <StatList>
      <StatItem
        icon={<RiFolder2Line className="size-20 text-sky-500" />}
        label="پروژه ها"
        value={toPersianNumbers(numOfAllProjects)}
      />
      <StatItem
        icon={<RiFolderOpenLine className="size-20 text-red-500" />}
        label="پروژه های باز"
        value={toPersianNumbers(numOfOpenProjects)}
      />
      <StatItem
        icon={<RiFolderCloseLine className="size-20 text-green-500" />}
        label="پروژه های بسته شده"
        value={toPersianNumbers(numOfClosedProjects)}
      />
      <StatItem
        icon={<RiProgress3Line className="size-20 text-amber-500" />}
        label="در حال انجام"
        value={toPersianNumbers(numOfAcceptedProjects)}
      />
      <StatItem
        icon={<RiProgress3Line className="size-20 text-fuchsia-500" />}
        label="تعداد کل درخواست های ارسال شده"
        value={toPersianNumbers(numOfAllProposals)}
      />
    </StatList>
  );
}
