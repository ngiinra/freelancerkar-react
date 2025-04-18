import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeCategoryApi } from "../../services/categoryServise";
import toast from "react-hot-toast";

export default function useChangeCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: changeCategoryApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["categories-list"]);
    },
    onError: (err) => toast.error(err.response.error.message),
  });
}
