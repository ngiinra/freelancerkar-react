import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addCategoryApi } from "../../services/categoryServise";
import toast from "react-hot-toast";

function useAddCategory() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addCategoryApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.invalidateQueries(["categories-list"]);
    },
    onError: (err) => toast.error(err.response.data.message),
  });
}

export default useAddCategory;
