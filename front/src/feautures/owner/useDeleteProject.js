import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../services/projectServise";
import toast from "react-hot-toast";

export default function useDeleteProject() {
  const queryClient = useQueryClient();
  const { isPending: isProjectDeletedPending, mutate: deleteMutate } =
    useMutation({
      mutationFn: deleteProjectApi,
      onSuccess: (data) => {
        toast.success(data.message);
        queryClient.invalidateQueries("owner-projects");
      },
      onError: (err) => toast.error(err?.response?.data?.message),
    });
  return { isProjectDeletedPending, deleteMutate };
}
