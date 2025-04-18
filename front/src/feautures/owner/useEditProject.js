import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editProjectApi } from "../../services/projectServise";
import toast from "react-hot-toast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["owner-projects", "get-single-project"]);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
}
