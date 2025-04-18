import { useQuery } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalsService";

export default function useGetProposal(id) {
  return useQuery({
    queryKey: ["single-proposal", id],
    queryFn: () => changeProposalStatusApi(id),
  });
}
