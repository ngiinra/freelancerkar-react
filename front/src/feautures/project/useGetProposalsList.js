import { getProposalsListApi } from "../../services/proposalsService";
import { useQuery } from "@tanstack/react-query";

function useGetProposalsList() {
  return useQuery({
    queryKey: ["proposals-list"],
    queryFn: getProposalsListApi,
  });
}

export default useGetProposalsList;
