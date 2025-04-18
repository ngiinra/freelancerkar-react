import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProposalApi } from "../../services/proposalsService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function useAddProposal() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProposalApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["proposals-list"]);
      navigate(-1);
    },
    onError: (err) => toast.error(err.response?.data?.message),
  });
}
