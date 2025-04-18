import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProjectApi } from "../../services/projectServise";
import toast from "react-hot-toast";

export default function useAddProject() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addProjectApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries(["owner-projects"]);
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
}
