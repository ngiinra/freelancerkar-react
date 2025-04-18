import React from "react";
import AdminStats from "./AdminStats";
import Loader from "./../../ui/Loader";
import useGetProposalsList from "../project/useGetProposalsList";
import useGetUsersList from "./useGetUsersList";
import useGetProjectsList from "../home/useGetProjectsList";

function AdminDashboard() {
  const { data: usersRes, isPending: isUsersPending } = useGetUsersList();
  const { data: proposalRes, isPending: isProposalPending } =
    useGetProposalsList();
  const { data: projectsRes, isPending: isProjectPending } =
    useGetProjectsList();

  if (isProposalPending || isUsersPending || isProjectPending)
    return <Loader size="15px" color="blue" />;
  return (
    <div>
      <h1 className="mt-10 mb-20 text-2xl font-bold">آمار کلی</h1>
      <AdminStats
        proposals={proposalRes.proposals}
        users={usersRes?.data?.users}
        projects={projectsRes?.data?.projects}
      />
    </div>
  );
}

export default AdminDashboard;
