import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeProjectStatusApi } from "../../services/projectServise";
import toast from "react-hot-toast";

export default function useChangeProjectStatus() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeProjectStatusApi,
    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["owner-projects"]);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
}
