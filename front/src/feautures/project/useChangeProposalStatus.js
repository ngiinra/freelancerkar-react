import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../../services/proposalsService";
import toast from "react-hot-toast";

export default function useChangeProposalStatus() {
  return useMutation({
    mutationFn: changeProposalStatusApi,
    onError: (err) => {
      toast.error(err.response?.data?.message);
    },
  });
}
