import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategoryApi } from "../../services/categoryServise";
import toast from "react-hot-toast";

export default function useDeleteCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteCategoryApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["categories-list"]);
    },
    onError: (err) => toast.error(err.response.error.message),
  });
}
