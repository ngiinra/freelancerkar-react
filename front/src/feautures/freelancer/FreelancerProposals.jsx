import React from "react";
import useGetProposalsList from "../project/useGetProposalsList";
import Loader from "../../ui/Loader";
import Empty from "../../ui/Empty";
import FreelancerProposalsList from "./FreelancerProposalsList";

function FreelancerProposals() {
  const { data, isPending } = useGetProposalsList();
  if (isPending) return <Loader size="15px" color="pink" />;
  if (!data?.proposals?.length) return <Empty resource="درخواستی" />;

  return <FreelancerProposalsList proposals={data?.proposals} />;
}

export default FreelancerProposals;
