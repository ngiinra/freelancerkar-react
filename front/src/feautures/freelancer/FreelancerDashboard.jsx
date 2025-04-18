import React from "react";
import FreelancerStats from "./FreelancerStats";
import useGetProposalsList from "../project/useGetProposalsList";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";

function FreelancerDashboard() {
  const { data, isPending } = useGetProposalsList();

  return (
    <div>
      <h1 className="font-bold text-2xl my-10">آمار کلی</h1>
      {isPending ? (
        <Loader size="15px" color="pink" />
      ) : !data?.proposals?.length ? (
        <Empty resource="درخواستی" />
      ) : (
        <FreelancerStats proposals={data?.proposals} />
      )}
    </div>
  );
}

export default FreelancerDashboard;
